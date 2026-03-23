"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { regions, Region, MapState } from "@/lib/cartographyData";
import RegionPath from "./RegionPath";
import RegionTooltip from "./RegionTooltip";
import ChroniclePanel from "./ChroniclePanel";
import MapDecorations from "./MapDecorations";
import MobileRegionList from "./MobileRegionList";

const SVG_WIDTH = 1200;
const SVG_HEIGHT = 700;
const ZOOM_SCALE = 2.2;

export default function CartographyMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);
  const [mapState, setMapState] = useState<MapState>({
    hoveredRegion: null,
    selectedRegion: null,
    zoom: { scale: 1, x: 0, y: 0 },
  });

  // Tooltip position in pixels relative to the map container
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);

  /* ── Responsive check ─────────────────────────────────── */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ── Escape key to close ──────────────────────────────── */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mapState.selectedRegion) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [mapState.selectedRegion]); // eslint-disable-line react-hooks/exhaustive-deps

  /* ── Handlers ─────────────────────────────────────────── */
  const handleRegionHover = useCallback((regionId: string | null) => {
    setMapState((prev) => ({ ...prev, hoveredRegion: regionId }));

    if (regionId && containerRef.current) {
      const region = regions.find((r) => r.id === regionId);
      if (!region) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scaleX = rect.width / SVG_WIDTH;
      const scaleY = rect.height / SVG_HEIGHT;
      setTooltipPos({
        x: region.position.x * scaleX,
        y: region.position.y * scaleY,
      });
    } else {
      setTooltipPos(null);
    }
  }, []);

  const handleRegionClick = useCallback((region: Region) => {
    const container = containerRef.current;
    if (!container) return;
    const { width, height } = container.getBoundingClientRect();

    const pixelX = (region.position.x / SVG_WIDTH) * width;
    const pixelY = (region.position.y / SVG_HEIGHT) * height;

    // With transformOrigin "0 0": translate needed so that the
    // region's pixel position maps to the container center after scaling.
    const x = width / 2 - pixelX * ZOOM_SCALE;
    const y = height / 2 - pixelY * ZOOM_SCALE;

    setMapState({
      hoveredRegion: null,
      selectedRegion: region,
      zoom: { scale: ZOOM_SCALE, x, y },
    });
    setTooltipPos(null);
  }, []);

  const handleClose = useCallback(() => {
    setMapState({
      hoveredRegion: null,
      selectedRegion: null,
      zoom: { scale: 1, x: 0, y: 0 },
    });
  }, []);

  /* ── Mobile fallback ──────────────────────────────────── */
  if (isMobile) {
    return <MobileRegionList regions={regions} />;
  }

  const hoveredRegion = regions.find((r) => r.id === mapState.hoveredRegion) ?? null;
  const containerRect = containerRef.current?.getBoundingClientRect();
  const containerW = containerRect?.width ?? SVG_WIDTH;
  const containerH = containerRect?.height ?? SVG_HEIGHT;

  return (
    <div className="relative">
      {/* ── Ornate Map Border Frame ──────────────────────── */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: `${SVG_WIDTH}/${SVG_HEIGHT}` }}
      >
        {/* Outer border decoration */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <svg
            viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
            className="absolute inset-0 w-full h-full"
            aria-hidden="true"
          >
            {/* Outer frame */}
            <rect x="4" y="4" width={SVG_WIDTH - 8} height={SVG_HEIGHT - 8}
              fill="none" stroke="#c4a035" strokeWidth="3" rx="2" />
            {/* Inner frame */}
            <rect x="12" y="12" width={SVG_WIDTH - 24} height={SVG_HEIGHT - 24}
              fill="none" stroke="#c4a035" strokeWidth="0.8" strokeOpacity="0.5" rx="1" />
            {/* Corner medallions */}
            {[
              [4, 4], [SVG_WIDTH - 4, 4],
              [4, SVG_HEIGHT - 4], [SVG_WIDTH - 4, SVG_HEIGHT - 4],
            ].map(([cx, cy], i) => (
              <g key={i}>
                <circle cx={cx} cy={cy} r="10" fill="#0a0f1a" stroke="#c4a035" strokeWidth="1.5" />
                <line x1={cx - 7} y1={cy} x2={cx + 7} y2={cy} stroke="#c4a035" strokeWidth="1" />
                <line x1={cx} y1={cy - 7} x2={cx} y2={cy + 7} stroke="#c4a035" strokeWidth="1" />
                <circle cx={cx} cy={cy} r="2" fill="#c4a035" />
              </g>
            ))}
          </svg>
        </div>

        {/* ── Zoomable SVG Wrapper ──────────────────────── */}
        <div
          ref={containerRef}
          className="absolute inset-0 overflow-hidden"
          style={{ cursor: mapState.selectedRegion ? "default" : "crosshair" }}
        >
          <motion.div
            style={{ transformOrigin: "0 0", width: "100%", height: "100%" }}
            animate={mapState.zoom}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <svg
              viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="The Known Realms of Arcadia — interactive world map"
              role="img"
            >
              <defs>
                {/* Ocean texture */}
                <filter id="oceanTexture" x="0" y="0" width="100%" height="100%">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.02 0.04"
                    numOctaves="4"
                    seed="3"
                    result="noise"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.04,
                            0 0 0 0 0.06,
                            0 0 0 0 0.12,
                            0 0 0 0.18 0"
                    in="noise"
                    result="colorNoise"
                  />
                  <feBlend in="SourceGraphic" in2="colorNoise" mode="overlay" />
                </filter>

                {/* Region drop shadow */}
                <filter id="regionShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow
                    dx="2"
                    dy="3"
                    stdDeviation="5"
                    floodColor="#000000"
                    floodOpacity="0.55"
                  />
                </filter>

                {/* Parchment texture — subtle overlay between ocean & regions */}
                <filter id="parchment" x="0" y="0" width="100%" height="100%">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.05 0.08"
                    numOctaves="5"
                    seed="7"
                    result="noise"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.88,
                            0 0 0 0 0.76,
                            0 0 0 0 0.55,
                            0 0 0 0.07 0"
                    in="noise"
                    result="colorNoise"
                  />
                  <feBlend in="SourceGraphic" in2="colorNoise" mode="overlay" />
                </filter>
              </defs>

              {/* ── Layer 1: Ocean Background ───────────────── */}
              <rect width={SVG_WIDTH} height={SVG_HEIGHT} fill="#0a0f1a" />
              <rect
                width={SVG_WIDTH}
                height={SVG_HEIGHT}
                fill="#0d1a2a"
                opacity="0.7"
                filter="url(#oceanTexture)"
              />

              {/* ── Layer 2: Region Paths ───────────────────── */}
              {regions.map((region) => (
                <RegionPath
                  key={region.id}
                  region={region}
                  isHovered={mapState.hoveredRegion === region.id}
                  isSelected={mapState.selectedRegion?.id === region.id}
                  onHover={handleRegionHover}
                  onClick={handleRegionClick}
                />
              ))}

              {/* ── Layer 3: Decorations / Labels ──────────── */}
              <MapDecorations />
            </svg>
          </motion.div>

          {/* ── Tooltip (absolute inside container, above SVG) ── */}
          <AnimatePresence>
            {hoveredRegion && tooltipPos && !mapState.selectedRegion && (
              <RegionTooltip
                region={hoveredRegion}
                position={tooltipPos}
                containerWidth={containerW}
                containerHeight={containerH}
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Chronicle Panel (fixed, outside SVG) ────────── */}
      <AnimatePresence>
        {mapState.selectedRegion && (
          <ChroniclePanel
            region={mapState.selectedRegion}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
