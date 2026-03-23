"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Region } from "@/lib/cartographyData";

interface ChroniclePanelProps {
  region: Region | null;
  onClose: () => void;
}

function MountainIcon() {
  return (
    <svg className="w-4 h-4 inline mr-1 text-[#c4a035]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 20 L8 10 L12 15 L16 8 L21 20 Z" strokeLinejoin="round" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg className="w-4 h-4 inline mr-1 text-[#c4a035]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 10a4 4 0 00-7.9-.9A3 3 0 004 12a3 3 0 003 3h11a3 3 0 000-5Z" strokeLinejoin="round" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="w-4 h-4 inline mr-1 text-[#c4a035]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" strokeLinejoin="round" />
    </svg>
  );
}

function FlaskIcon() {
  return (
    <svg className="w-4 h-4 inline mr-1 text-[#c4a035]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 3h6M9 3v7l-4 8a2 2 0 002 2h10a2 2 0 002-2l-4-8V3" strokeLinejoin="round" />
    </svg>
  );
}

function VineDivider() {
  return (
    <svg viewBox="0 0 300 20" className="w-full my-4 opacity-60" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="10" x2="110" y2="10" stroke="#c4a035" strokeWidth="0.8" />
      <path d="M115,10 C120,4 126,4 130,8 C134,12 138,14 142,10 C146,6 150,4 154,8 C158,12 162,14 166,10 C170,6 174,4 178,8 C182,12 186,14 190,10" fill="none" stroke="#c4a035" strokeWidth="1" />
      <line x1="190" y1="10" x2="300" y2="10" stroke="#c4a035" strokeWidth="0.8" />
      <circle cx="150" cy="10" r="3" fill="none" stroke="#c4a035" strokeWidth="0.8" />
    </svg>
  );
}

export default function ChroniclePanel({ region, onClose }: ChroniclePanelProps) {
  return (
    <AnimatePresence>
      {region && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={onClose}
          />
          <motion.aside
            key="panel"
            initial={{ x: 340, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 340, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed right-0 top-0 h-full z-50 overflow-y-auto"
            style={{
              width: "clamp(300px, 340px, 100vw)",
              background: "#f0ddb0",
              boxShadow: "-8px 0 40px rgba(0,0,0,0.5)",
            }}
          >
            <button
              onClick={onClose}
              aria-label="Close Chronicle"
              className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm transition-opacity hover:opacity-80"
              style={{ background: "#8b2500", color: "#f0ddb0", border: "2px solid #c4a035" }}
            >
              ✕
            </button>

            <div className="p-8 pt-16">
              <h2
                className="font-display text-2xl font-bold leading-tight mb-2"
                style={{ color: "#2c1a0e" }}
              >
                {region.fantasyName}
              </h2>

              <p className="font-serif italic text-sm mb-0" style={{ color: "#5a3e28" }}>
                Known in the mortal realm as: <em>{region.realOrigin}</em>
              </p>

              <VineDivider />

              <div className="space-y-3 mb-4">
                <div>
                  <p className="font-display text-xs uppercase tracking-widest mb-1" style={{ color: "#8b6a3e" }}>
                    <MountainIcon /> Elevation
                  </p>
                  <p className="font-serif text-sm" style={{ color: "#2c1a0e" }}>{region.elevation}</p>
                </div>
                <div>
                  <p className="font-display text-xs uppercase tracking-widest mb-1" style={{ color: "#8b6a3e" }}>
                    <CloudIcon /> Climate
                  </p>
                  <p className="font-serif text-sm" style={{ color: "#2c1a0e" }}>{region.climate}</p>
                </div>
                <div>
                  <p className="font-display text-xs uppercase tracking-widest mb-1" style={{ color: "#8b6a3e" }}>
                    <MoonIcon /> Harvest Season
                  </p>
                  <p className="font-serif text-sm" style={{ color: "#2c1a0e" }}>{region.harvestSeason}</p>
                </div>
                <div>
                  <p className="font-display text-xs uppercase tracking-widest mb-1" style={{ color: "#8b6a3e" }}>
                    <FlaskIcon /> Taste Profile
                  </p>
                  <p className="font-serif text-sm" style={{ color: "#2c1a0e" }}>{region.tasteProfile}</p>
                </div>
              </div>

              <VineDivider />

              <div className="font-serif text-sm leading-relaxed" style={{ color: "#2c1a0e" }}>
                <span
                  className="float-left font-display font-bold leading-none mr-2 mt-1"
                  style={{ fontSize: "3.5rem", color: "#8b2500", lineHeight: 0.8 }}
                >
                  {region.lore.trim().charAt(0)}
                </span>
                {region.lore.trim().slice(1)}
              </div>

              <VineDivider />

              <Link
                href={region.brewPath}
                className="block w-full text-center py-3 px-6 font-display font-bold text-xs uppercase tracking-widest rounded-full transition-all hover:opacity-90 hover:-translate-y-0.5 transform"
                style={{ background: "#8b2500", color: "#f0ddb0", border: "1px solid #c4a035" }}
              >
                View {region.brew} in the Codex →
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
