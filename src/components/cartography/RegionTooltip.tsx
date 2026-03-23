"use client";

import { motion } from "framer-motion";
import { Region } from "@/lib/cartographyData";

interface RegionTooltipProps {
  region: Region;
  svgRect: DOMRect | null;
  svgViewBox: { width: number; height: number };
}

export default function RegionTooltip({
  region,
  svgRect,
  svgViewBox,
}: RegionTooltipProps) {
  if (!svgRect) return null;

  const scaleX = svgRect.width / svgViewBox.width;
  const scaleY = svgRect.height / svgViewBox.height;

  const screenX = region.position.x * scaleX + svgRect.left;
  const screenY = region.position.y * scaleY + svgRect.top;

  const tooltipWidth = 240;
  const tooltipHeight = 160;
  const offset = 12;

  // Clamp to viewport
  let left = screenX + offset;
  let top = screenY - tooltipHeight / 2;

  if (left + tooltipWidth > window.innerWidth - 10) {
    left = screenX - tooltipWidth - offset;
  }
  if (top < 10) top = 10;
  if (top + tooltipHeight > window.innerHeight - 10) {
    top = window.innerHeight - tooltipHeight - 10;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      style={{
        position: "fixed",
        left,
        top,
        width: tooltipWidth,
        zIndex: 9999,
        pointerEvents: "none",
      }}
      className="bg-[#f0ddb0] border border-[#c4a035]/60 rounded-lg shadow-xl p-4"
    >
      <p className="font-display font-bold text-[#2c1a0e] text-xs uppercase tracking-widest leading-tight mb-1">
        {region.fantasyName}
      </p>
      <p className="font-serif italic text-[#5a3e28] text-xs mb-2">
        {region.realOrigin}
      </p>
      <div className="border-t border-[#c4a035]/30 pt-2">
        <p className="text-[#2c1a0e] font-display text-[10px] uppercase tracking-widest mb-1">
          Brew: <span className="text-[#8b4a00]">{region.brew}</span>
        </p>
        <p className="text-[#5a3e28] font-serif italic text-[11px] leading-snug">
          {region.tasteProfile}
        </p>
      </div>
    </motion.div>
  );
}
