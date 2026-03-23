"use client";

import { motion } from "framer-motion";
import { Region } from "@/lib/cartographyData";

interface RegionTooltipProps {
  region: Region;
  svgRect: DOMRect | null;
  svgViewBox: { width: number; height: number };
}

export default function RegionTooltip({ region, svgRect, svgViewBox }: RegionTooltipProps) {
  if (!svgRect) return null;

  const tooltipW = 240;
  const tooltipH = 160;

  const scaleX = svgRect.width / svgViewBox.width;
  const scaleY = svgRect.height / svgViewBox.height;

  let left = svgRect.left + region.position.x * scaleX;
  let top = svgRect.top + region.position.y * scaleY + window.scrollY;

  if (left + tooltipW + 16 > window.innerWidth) {
    left = left - tooltipW - 16;
  } else {
    left = left + 16;
  }

  if (top + tooltipH + 16 > svgRect.bottom + window.scrollY) {
    top = top - tooltipH - 16;
  } else {
    top = top + 16;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      style={{ left, top }}
      className="fixed z-50 pointer-events-none"
    >
      <div
        className="rounded-lg border border-[#c4a035]/40 p-4 shadow-2xl"
        style={{
          width: tooltipW,
          background: "linear-gradient(135deg, #1c1710 0%, #1a140e 100%)",
          backdropFilter: "blur(10px)",
        }}
      >
        <p className="font-display text-[10px] uppercase tracking-[0.2em] text-[#c4a035] mb-1">
          {region.realOrigin}
        </p>
        <p className="font-display text-sm font-bold text-white mb-2 leading-tight">
          {region.fantasyName}
        </p>
        <div className="w-full h-px bg-[#c4a035]/30 mb-2" />
        <p className="font-display text-[10px] uppercase tracking-[0.15em] text-[#c4a035]/80 mb-1">
          Brew
        </p>
        <p className="font-serif italic text-xs text-gray-300 mb-2">{region.brew}</p>
        <p className="font-display text-[10px] uppercase tracking-[0.15em] text-[#c4a035]/80 mb-1">
          Taste
        </p>
        <p className="font-serif italic text-xs text-gray-400">{region.tasteProfile}</p>
        <p className="font-display text-[9px] uppercase tracking-widest text-[#c4a035]/60 mt-3">
          Click to read the Chronicle →
        </p>
      </div>
    </motion.div>
  );
}
