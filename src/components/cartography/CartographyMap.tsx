"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { regions, Region } from "@/lib/cartographyData";
import RegionPath from "./RegionPath";
import RegionTooltip from "./RegionTooltip";
import ChroniclePanel from "./ChroniclePanel";
import MapDecorations from "./MapDecorations";
import MobileRegionList from "./MobileRegionList";

const VIEWBOX_WIDTH = 1200;
const VIEWBOX_HEIGHT = 700;

export default function CartographyMap() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [svgRect, setSvgRect] = useState<DOMRect | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const svgWrapperRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // Zoom / pan state for Framer Motion
  const [scale, setScale] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const updateSvgRect = useCallback(() => {
    if (svgRef.current) {
      setSvgRect(svgRef.current.getBoundingClientRect());
    }
  }, []);

  useEffect(() => {
    updateSvgRect();
    window.addEventListener("resize", updateSvgRect);
    window.addEventListener("scroll", updateSvgRect);
    return () => {
      window.removeEventListener("resize", updateSvgRect);
      window.removeEventListener("scroll", updateSvgRect);
    };
  }, [updateSvgRect]);

  const handleRegionClick = useCallback(
    (region: Region) => {
      if (selectedRegion?.id === region.id) {
        resetView();
        return;
      }
      setSelectedRegion(region);

      // Calculate zoom centre offset
      const rect = svgWrapperRef.current?.getBoundingClientRect();
      if (!rect) return;
      const containerW = rect.width;
      const containerH = rect.height;
      const scaleX = containerW / VIEWBOX_WIDTH;
      const scaleY = containerH / VIEWBOX_HEIGHT;
      const displayScale = Math.min(scaleX, scaleY);

      const zoomLevel = 2.2;
      const regionScreenX = region.position.x * displayScale;
      const regionScreenY = region.position.y * displayScale;
      const tx = containerW / 2 - regionScreenX * zoomLevel;
      const ty = containerH / 2 - regionScreenY * zoomLevel;

      setScale(zoomLevel);
      setTranslateX(tx);
      setTranslateY(ty);
    },
    [selectedRegion]
  );

  const resetView = useCallback(() => {
    setSelectedRegion(null);
    setScale(1);
    setTranslateX(0);
    setTranslateY(0);
  }, []);

  // Escape key to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") resetView();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [resetView]);

  const hoveredRegionData = hoveredRegion
    ? regions.find((r) => r.id === hoveredRegion) ?? null
    : null;

  if (isMobile) {
    return <MobileRegionList regions={regions} />;
  }

  return (
    <div className="relative w-full">
      {/* SVG map wrapper */}
      <div
        ref={svgWrapperRef}
        className="relative w-full overflow-hidden rounded-sm"
        style={{ aspectRatio: `${VIEWBOX_WIDTH} / ${VIEWBOX_HEIGHT}` }}
      >
        <motion.div
          className="w-full h-full origin-top-left"
          animate={{ scale, x: translateX, y: translateY }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          style={{ transformOrigin: "0 0" }}
        >
          <svg
            ref={svgRef}
            viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            style={{ display: "block" }}
          >
            {/* Layer 1 — base / ocean + decorative elements */}
            <MapDecorations />

            {/* Layer 2 — region landmasses */}
            {regions.map((region) => (
              <RegionPath
                key={region.id}
                region={region}
                isSelected={selectedRegion?.id === region.id}
                onHover={setHoveredRegion}
                onClick={handleRegionClick}
              />
            ))}

            {/* Layer 3 — region name labels */}
            {regions.map((region) => (
              <text
                key={`label-${region.id}`}
                x={region.position.x}
                y={region.position.y - 30}
                textAnchor="middle"
                fontFamily="'Cinzel', serif"
                fontSize="11"
                fill="#c4a035"
                fillOpacity="0.9"
                pointerEvents="none"
                style={{ userSelect: "none" }}
              >
                {region.fantasyName.split(" ").slice(-2).join(" ")}
              </text>
            ))}
          </svg>
        </motion.div>

        {/* Click-outside overlay when zoomed */}
        {selectedRegion && (
          <div
            className="absolute inset-0 cursor-zoom-out"
            style={{ zIndex: 1 }}
            onClick={resetView}
          />
        )}
      </div>

      {/* Tooltip (portal-style, fixed positioning) */}
      <AnimatePresence>
        {hoveredRegionData && !selectedRegion && (
          <RegionTooltip
            key={hoveredRegionData.id}
            region={hoveredRegionData}
            svgRect={svgRect}
            svgViewBox={{ width: VIEWBOX_WIDTH, height: VIEWBOX_HEIGHT }}
          />
        )}
      </AnimatePresence>

      {/* Chronicle panel */}
      <ChroniclePanel region={selectedRegion} onClose={resetView} />
    </div>
  );
}
