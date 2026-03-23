"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { regions, Region } from "@/lib/cartographyData";
import RegionPath from "./RegionPath";
import RegionTooltip from "./RegionTooltip";
import ChroniclePanel from "./ChroniclePanel";
import MapDecorations from "./MapDecorations";
import MobileRegionList from "./MobileRegionList";

const SVG_WIDTH = 1200;
const SVG_HEIGHT = 700;

export default function CartographyMap() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [svgRect, setSvgRect] = useState<DOMRect | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [zoom, setZoom] = useState({ scale: 1, x: 0, y: 0 });

  const svgWrapperRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const update = () => {
      if (svgRef.current) setSvgRect(svgRef.current.getBoundingClientRect());
    };
    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update);
    };
  }, [isMobile]);

  const handleClose = useCallback(() => {
    setSelectedRegion(null);
    setZoom({ scale: 1, x: 0, y: 0 });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleClose]);

  const handleSelectRegion = useCallback(
    (id: string) => {
      const region = regions.find((r) => r.id === id) ?? null;
      setSelectedRegion(region);
      if (region) {
        const wrapW = svgWrapperRef.current?.clientWidth ?? SVG_WIDTH;
        const wrapH = svgWrapperRef.current?.clientHeight ?? SVG_HEIGHT;
        const scale = 2.2;
        const tx = wrapW / 2 - region.position.x * scale;
        const ty = wrapH / 2 - region.position.y * scale;
        setZoom({ scale, x: tx, y: ty });
      }
    },
    []
  );

  const hoveredRegion = regions.find((r) => r.id === hoveredId) ?? null;

  if (isMobile) {
    return (
      <div className="px-4">
        <MobileRegionList regions={regions} />
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <div
        ref={svgWrapperRef}
        className="relative w-full overflow-hidden rounded-sm"
        style={{ aspectRatio: `${SVG_WIDTH}/${SVG_HEIGHT}`, maxHeight: "700px" }}
        onClick={(e) => {
          const tag = (e.target as Element).tagName;
          if (tag === "rect" || tag === "svg") {
            handleClose();
          }
        }}
      >
        <motion.div
          animate={{ scale: zoom.scale, x: zoom.x, y: zoom.y }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          style={{ width: "100%", height: "100%", transformOrigin: "top left" }}
        >
          <svg
            ref={svgRef}
            viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            style={{ display: "block" }}
          >
            <MapDecorations />

            {regions.map((region) => (
              <RegionPath
                key={region.id}
                region={region}
                isHovered={hoveredId === region.id}
                isSelected={selectedRegion?.id === region.id}
                onHover={setHoveredId}
                onSelect={handleSelectRegion}
              />
            ))}

            {regions.map((region) => (
              <text
                key={`label-${region.id}`}
                x={region.position.x}
                y={region.position.y - 28}
                textAnchor="middle"
                fontFamily="serif"
                fontSize="11"
                fill="#c4a035"
                opacity="0.85"
                pointerEvents="none"
                fontStyle="italic"
              >
                {region.fantasyName.length > 28
                  ? region.fantasyName.substring(0, 26) + "…"
                  : region.fantasyName}
              </text>
            ))}
          </svg>
        </motion.div>
      </div>

      <AnimatePresence>
        {hoveredRegion && !selectedRegion && (
          <RegionTooltip
            key={hoveredRegion.id}
            region={hoveredRegion}
            svgRect={svgRect}
            svgViewBox={{ width: SVG_WIDTH, height: SVG_HEIGHT }}
          />
        )}
      </AnimatePresence>

      <ChroniclePanel region={selectedRegion} onClose={handleClose} />
    </div>
  );
}
