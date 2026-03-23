"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Region } from "@/lib/cartographyData";

interface ChroniclePanelProps {
  region: Region;
  onClose: () => void;
}

function MountainIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 21l4-8 4 4 4-8 4 4 3-3" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-4.584-7.002A4 4 0 003 15z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  );
}

function FlaskIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3h6m-3 0v6l-4 9h10l-4-9V3" />
    </svg>
  );
}

function ScrollDivider() {
  return (
    <svg viewBox="0 0 240 20" className="w-full" aria-hidden="true">
      <line x1="0" y1="10" x2="85" y2="10" stroke="#c4a035" strokeWidth="0.8" strokeOpacity="0.5" />
      <path d="M 95,10 Q 100,4 110,10 Q 120,16 130,10 Q 140,4 145,10" stroke="#c4a035" strokeWidth="1" fill="none" strokeOpacity="0.7" />
      <line x1="155" y1="10" x2="240" y2="10" stroke="#c4a035" strokeWidth="0.8" strokeOpacity="0.5" />
    </svg>
  );
}

export default function ChroniclePanel({ region, onClose }: ChroniclePanelProps) {
  const firstLetter = region.lore.trim().charAt(0);
  const restOfLore = region.lore.trim().slice(1);

  return (
    <>
      {/* Backdrop — clicking outside closes the panel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <motion.aside
        initial={{ x: 340, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 340, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed right-0 top-0 bottom-0 w-[340px] max-w-full z-40 overflow-y-auto"
        style={{ background: "#f0ddb0" }}
        aria-label={`Chronicle of ${region.fantasyName}`}
      >
        {/* Close button — styled as wax seal X */}
        <button
          onClick={onClose}
          aria-label="Close chronicle"
          className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-[#2c1a0e] hover:text-[#8b2500] transition-colors z-10"
          style={{ background: "#d4a53a", boxShadow: "0 2px 8px rgba(0,0,0,0.25)" }}
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-6 pt-14">
          {/* Fantasy region name */}
          <h2 className="font-display font-bold text-xl text-[#2c1a0e] leading-tight mb-1">
            {region.fantasyName}
          </h2>

          {/* Real origin */}
          <p className="font-serif italic text-sm text-[#5c4a38] mb-4">
            Known in the mortal realm as:{" "}
            <span className="font-semibold">{region.realOrigin}</span>
          </p>

          <ScrollDivider />

          {/* Details */}
          <div className="mt-4 space-y-3">
            <div className="flex items-start gap-2 text-[#4a3b32]">
              <MountainIcon />
              <div>
                <span className="font-display font-bold text-xs uppercase tracking-widest text-[#8b5e3c]">Elevation</span>
                <p className="text-sm mt-0.5">{region.elevation}</p>
              </div>
            </div>

            <div className="flex items-start gap-2 text-[#4a3b32]">
              <CloudIcon />
              <div>
                <span className="font-display font-bold text-xs uppercase tracking-widest text-[#8b5e3c]">Climate</span>
                <p className="text-sm mt-0.5">{region.climate}</p>
              </div>
            </div>

            <div className="flex items-start gap-2 text-[#4a3b32]">
              <MoonIcon />
              <div>
                <span className="font-display font-bold text-xs uppercase tracking-widest text-[#8b5e3c]">Harvest Season</span>
                <p className="text-sm mt-0.5">{region.harvestSeason}</p>
              </div>
            </div>

            <div className="flex items-start gap-2 text-[#4a3b32]">
              <FlaskIcon />
              <div>
                <span className="font-display font-bold text-xs uppercase tracking-widest text-[#8b5e3c]">Taste Profile</span>
                <p className="text-sm mt-0.5">{region.tasteProfile}</p>
              </div>
            </div>
          </div>

          <ScrollDivider />

          {/* Lore chronicle */}
          <div className="mt-4">
            <h3 className="font-display font-bold text-sm uppercase tracking-widest text-[#8b5e3c] mb-3">
              The Chronicle
            </h3>
            <p className="font-serif text-sm text-[#2c1a0e] leading-relaxed pl-2">
              <span
                className="float-left font-display font-bold text-4xl leading-none text-[#8b2500] mr-2 mt-1"
                aria-hidden="true"
              >
                {firstLetter}
              </span>
              {restOfLore}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#c4a035]/30">
            <Link
              href={region.brewPath}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg font-display font-bold text-xs uppercase tracking-widest transition-all"
              style={{ background: "#2c1a0e", color: "#c4a035" }}
            >
              View {region.brew} in the Codex
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
