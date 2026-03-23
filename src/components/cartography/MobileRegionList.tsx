"use client";

import Link from "next/link";
import { Region } from "@/lib/cartographyData";

interface MobileRegionListProps {
  regions: Region[];
}

export default function MobileRegionList({ regions }: MobileRegionListProps) {
  return (
    <div className="space-y-6 px-4 py-6">
      {regions.map((region) => (
        <div
          key={region.id}
          className="rounded-xl overflow-hidden border border-primary/20 shadow-lg"
          style={{ background: "#f0ddb0" }}
        >
          {/* Colour band */}
          <div className="h-2" style={{ background: region.hoverColor }} />

          <div className="p-5">
            {/* Header */}
            <p
              className="font-display font-bold uppercase tracking-widest text-[#8b5e3c] mb-1"
              style={{ fontSize: "10px" }}
            >
              {region.realOrigin}
            </p>
            <h3 className="font-display font-bold text-lg text-[#2c1a0e] leading-tight mb-1">
              {region.fantasyName}
            </h3>
            <p className="font-serif italic text-sm text-[#5c4a38] mb-3">
              {region.brew}
            </p>

            {/* Divider */}
            <div className="h-px bg-[#c4a035]/30 my-3" />

            {/* Details */}
            <dl className="grid grid-cols-1 gap-2 mb-4">
              <div>
                <dt className="font-display font-bold text-[10px] uppercase tracking-widest text-[#8b5e3c]">Taste Profile</dt>
                <dd className="text-sm text-[#2c1a0e] mt-0.5">{region.tasteProfile}</dd>
              </div>
              <div>
                <dt className="font-display font-bold text-[10px] uppercase tracking-widest text-[#8b5e3c]">Elevation</dt>
                <dd className="text-sm text-[#2c1a0e] mt-0.5">{region.elevation}</dd>
              </div>
              <div>
                <dt className="font-display font-bold text-[10px] uppercase tracking-widest text-[#8b5e3c]">Harvest</dt>
                <dd className="text-sm text-[#2c1a0e] mt-0.5">{region.harvestSeason}</dd>
              </div>
            </dl>

            {/* Lore */}
            <p className="font-serif italic text-sm text-[#4a3b32] leading-relaxed mb-4 line-clamp-4">
              {region.lore}
            </p>

            {/* CTA */}
            <Link
              href={region.brewPath}
              className="inline-flex items-center gap-2 py-2 px-4 rounded-lg font-display font-bold text-xs uppercase tracking-widest transition-all"
              style={{ background: "#2c1a0e", color: "#c4a035" }}
            >
              View {region.brew} in the Codex
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
