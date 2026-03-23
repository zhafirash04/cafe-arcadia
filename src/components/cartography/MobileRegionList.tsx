"use client";

import Link from "next/link";
import { Region } from "@/lib/cartographyData";

interface MobileRegionListProps {
  regions: Region[];
}

export default function MobileRegionList({ regions }: MobileRegionListProps) {
  return (
    <div className="flex flex-col gap-6">
      {regions.map((region) => (
        <div
          key={region.id}
          className="rounded-xl overflow-hidden shadow-lg border"
          style={{
            background: "#f0ddb0",
            borderColor: "#c4a035",
            color: "#2c1a0e",
          }}
        >
          {/* Header stripe */}
          <div
            className="px-5 py-4"
            style={{ background: region.color }}
          >
            <p className="font-display font-bold text-xs uppercase tracking-widest text-[#f0ddb0] opacity-80 mb-0.5">
              {region.realOrigin}
            </p>
            <h3 className="font-display font-bold text-lg text-[#f0ddb0] leading-tight">
              {region.fantasyName}
            </h3>
          </div>

          {/* Body */}
          <div className="px-5 py-4">
            <div className="flex gap-4 mb-3">
              <div>
                <span
                  className="font-display text-[9px] uppercase tracking-widest block mb-0.5"
                  style={{ color: "#8b4a00" }}
                >
                  Taste Profile
                </span>
                <span className="font-serif italic text-sm" style={{ color: "#2c1a0e" }}>
                  {region.tasteProfile}
                </span>
              </div>
            </div>

            <p className="font-serif text-sm leading-relaxed mb-4" style={{ color: "#3a2510" }}>
              {region.lore.trim()}
            </p>

            <Link
              href={region.brewPath}
              className="inline-block font-display font-bold text-xs uppercase tracking-widest py-2 px-5 rounded-full transition-all hover:scale-[1.03]"
              style={{
                background: "#8b2500",
                color: "#f0ddb0",
                border: "2px solid #c4a035",
              }}
            >
              View {region.brew} in the Codex →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
