"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Region } from "@/lib/cartographyData";

interface ChroniclePanelProps {
  region: Region | null;
  onClose: () => void;
}

export default function ChroniclePanel({ region, onClose }: ChroniclePanelProps) {
  return (
    <AnimatePresence>
      {region && (
        <motion.aside
          initial={{ x: 340, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 340, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed right-0 top-0 h-full w-[340px] md:w-[340px] max-md:w-full z-50 overflow-y-auto shadow-2xl"
          style={{ background: "#f0ddb0", color: "#2c1a0e" }}
        >
          {/* Close button — wax seal style */}
          <button
            onClick={onClose}
            aria-label="Close chronicle"
            className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm transition-all hover:scale-110"
            style={{
              background: "#8b2500",
              color: "#f0ddb0",
              border: "2px solid #c4a035",
              boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
            }}
          >
            ✕
          </button>

          <div className="p-6 pt-16">
            {/* Fantasy region name */}
            <h2
              className="font-display font-bold text-2xl leading-tight mb-1"
              style={{ color: "#2c1a0e" }}
            >
              {region.fantasyName}
            </h2>

            {/* Real origin */}
            <p className="font-serif italic text-sm mb-4" style={{ color: "#5a3e28" }}>
              Known in the mortal realm as: <em>{region.realOrigin}</em>
            </p>

            {/* Decorative vine divider */}
            <svg
              viewBox="0 0 300 20"
              className="w-full mb-4 opacity-60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 10 Q30 2 60 10 Q90 18 120 10 Q150 2 180 10 Q210 18 240 10 Q270 2 300 10"
                fill="none"
                stroke="#c4a035"
                strokeWidth="1.5"
              />
              <circle cx="60" cy="10" r="2.5" fill="#c4a035" />
              <circle cx="150" cy="10" r="3" fill="#c4a035" />
              <circle cx="240" cy="10" r="2.5" fill="#c4a035" />
            </svg>

            {/* Elevation */}
            <div className="flex items-start gap-2 mb-3">
              <svg viewBox="0 0 20 20" className="w-4 h-4 flex-shrink-0 mt-0.5" fill="#8b4a00">
                <path d="M10 2 L18 18 H2 Z" />
                <path d="M6 14 L10 8 L14 14" fill="#c4a035" />
              </svg>
              <div>
                <span
                  className="font-display text-[10px] uppercase tracking-widest block"
                  style={{ color: "#8b4a00" }}
                >
                  Elevation
                </span>
                <span className="font-serif text-sm" style={{ color: "#2c1a0e" }}>
                  {region.elevation}
                </span>
              </div>
            </div>

            {/* Climate */}
            <div className="flex items-start gap-2 mb-3">
              <svg viewBox="0 0 20 20" className="w-4 h-4 flex-shrink-0 mt-0.5" fill="#8b4a00">
                <ellipse cx="10" cy="12" rx="7" ry="5" />
                <ellipse cx="7" cy="10" rx="5" ry="4" />
                <ellipse cx="13" cy="10" rx="5" ry="4" />
              </svg>
              <div>
                <span
                  className="font-display text-[10px] uppercase tracking-widest block"
                  style={{ color: "#8b4a00" }}
                >
                  Climate
                </span>
                <span className="font-serif text-sm" style={{ color: "#2c1a0e" }}>
                  {region.climate}
                </span>
              </div>
            </div>

            {/* Harvest Season */}
            <div className="flex items-start gap-2 mb-3">
              <svg viewBox="0 0 20 20" className="w-4 h-4 flex-shrink-0 mt-0.5" fill="#8b4a00">
                <path d="M10 2 C10 2 16 8 16 13 A6 6 0 0 1 4 13 C4 8 10 2 10 2Z" />
                <path d="M10 6 C10 6 14 11 14 13 A4 4 0 0 1 6 13 C6 11 10 6 10 6Z" fill="#c4a035" />
              </svg>
              <div>
                <span
                  className="font-display text-[10px] uppercase tracking-widest block"
                  style={{ color: "#8b4a00" }}
                >
                  Harvest Season
                </span>
                <span className="font-serif text-sm" style={{ color: "#2c1a0e" }}>
                  {region.harvestSeason}
                </span>
              </div>
            </div>

            {/* Taste Profile */}
            <div className="flex items-start gap-2 mb-5">
              <svg viewBox="0 0 20 20" className="w-4 h-4 flex-shrink-0 mt-0.5" fill="#8b4a00">
                <path d="M8 2 L12 2 L13 8 C15 8 17 10 17 13 C17 16 15 18 10 18 C5 18 3 16 3 13 C3 10 5 8 7 8 Z" />
                <circle cx="10" cy="13" r="3" fill="#c4a035" />
              </svg>
              <div>
                <span
                  className="font-display text-[10px] uppercase tracking-widest block"
                  style={{ color: "#8b4a00" }}
                >
                  Taste Profile
                </span>
                <span className="font-serif text-sm italic" style={{ color: "#2c1a0e" }}>
                  {region.tasteProfile}
                </span>
              </div>
            </div>

            {/* Lore with drop cap */}
            <div
              className="mb-6 p-4 rounded-lg"
              style={{ background: "rgba(196,160,53,0.1)", borderLeft: "3px solid #c4a035" }}
            >
              <p className="font-serif text-sm leading-relaxed" style={{ color: "#2c1a0e" }}>
                <span
                  className="float-left font-display font-bold mr-1 leading-none"
                  style={{ fontSize: "2.8rem", color: "#8b2500", lineHeight: "0.8" }}
                >
                  {region.lore.trim().charAt(0)}
                </span>
                {region.lore.trim().slice(1)}
              </p>
            </div>

            {/* CTA */}
            <Link
              href={region.brewPath}
              className="block w-full text-center py-3 px-6 font-display font-bold text-xs uppercase tracking-widest transition-all hover:scale-[1.02] rounded-full"
              style={{
                background: "#8b2500",
                color: "#f0ddb0",
                border: "2px solid #c4a035",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              }}
            >
              View {region.brew} in the Codex →
            </Link>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
