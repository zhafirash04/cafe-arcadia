"use client";

import { motion } from "framer-motion";
import { Region } from "@/lib/cartographyData";

interface RegionTooltipProps {
  region: Region;
  /** Position in pixels relative to the map container (top-left origin) */
  position: { x: number; y: number };
  /** Width of the map container in pixels */
  containerWidth: number;
  /** Height of the map container in pixels */
  containerHeight: number;
}

const TOOLTIP_WIDTH = 240;
const TOOLTIP_HEIGHT = 140;
const OFFSET = 16;

export default function RegionTooltip({
  region,
  position,
  containerWidth,
  containerHeight,
}: RegionTooltipProps) {
  // Default: tooltip appears to the right and below the anchor point
  let left = position.x + OFFSET;
  let top = position.y + OFFSET;

  // Flip horizontal if too close to right edge
  if (left + TOOLTIP_WIDTH > containerWidth - 8) {
    left = position.x - TOOLTIP_WIDTH - OFFSET;
  }
  // Flip vertical if too close to bottom edge
  if (top + TOOLTIP_HEIGHT > containerHeight - 8) {
    top = position.y - TOOLTIP_HEIGHT - OFFSET;
  }
  // Clamp to edges
  left = Math.max(8, Math.min(left, containerWidth - TOOLTIP_WIDTH - 8));
  top = Math.max(8, Math.min(top, containerHeight - TOOLTIP_HEIGHT - 8));

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      style={{
        position: "absolute",
        left,
        top,
        width: TOOLTIP_WIDTH,
        pointerEvents: "none",
        zIndex: 20,
      }}
      className="bg-[#f0ddb0] text-[#2c1a0e] rounded-lg shadow-xl border border-[#c4a035]/40 p-3"
    >
      <p
        className="font-display font-bold text-xs uppercase tracking-widest text-[#8b5e3c] mb-0.5"
        style={{ fontSize: "9px" }}
      >
        {region.realOrigin}
      </p>
      <h3 className="font-display font-bold text-sm leading-tight mb-1 text-[#2c1a0e]">
        {region.fantasyName}
      </h3>
      <div className="h-px bg-[#c4a035]/40 my-1" />
      <p className="font-serif italic text-xs text-[#4a3b32] mb-1">
        {region.brew}
      </p>
      <p className="text-xs text-[#5c4a38] leading-snug">
        {region.tasteProfile}
      </p>
    </motion.div>
  );
}
