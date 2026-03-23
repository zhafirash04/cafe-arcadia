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
          className="rounded-lg p-6 border border-[#c4a035]/30"
          style={{ background: "linear-gradient(135deg, #1c1710 0%, #1a140e 100%)" }}
        >
          <div className="w-full h-1 rounded-full mb-4" style={{ background: region.color }} />

          <span className="font-display text-[10px] uppercase tracking-[0.25em] block mb-1" style={{ color: "#c4a035" }}>
            {region.realOrigin}
          </span>
          <h3 className="font-display text-lg font-bold text-white mb-1 leading-tight">
            {region.fantasyName}
          </h3>
          <p className="font-display text-xs uppercase tracking-widest mb-3" style={{ color: "#c4a035" }}>
            {region.brew}
          </p>

          <div className="w-full h-px mb-3" style={{ background: "#c4a035", opacity: 0.2 }} />

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <p className="font-display text-[9px] uppercase tracking-widest mb-0.5" style={{ color: "#8b6a3e" }}>Elevation</p>
              <p className="font-serif text-xs text-gray-300">{region.elevation}</p>
            </div>
            <div>
              <p className="font-display text-[9px] uppercase tracking-widest mb-0.5" style={{ color: "#8b6a3e" }}>Harvest</p>
              <p className="font-serif text-xs text-gray-300">{region.harvestSeason}</p>
            </div>
          </div>

          <div className="mb-4">
            <p className="font-display text-[9px] uppercase tracking-widest mb-0.5" style={{ color: "#8b6a3e" }}>Taste Profile</p>
            <p className="font-serif italic text-sm text-gray-300">{region.tasteProfile}</p>
          </div>

          <p className="font-serif text-xs text-gray-400 leading-relaxed mb-4 line-clamp-4">
            {region.lore}
          </p>

          <Link
            href={region.brewPath}
            className="inline-block px-5 py-2.5 font-display font-bold text-[10px] uppercase tracking-widest rounded-full transition-all hover:opacity-90"
            style={{ background: region.color, color: "#f0ddb0", border: "1px solid #c4a035" }}
          >
            View {region.brew} in the Codex →
          </Link>
        </div>
      ))}
    </div>
  );
}
