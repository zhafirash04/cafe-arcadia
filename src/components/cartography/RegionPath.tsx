"use client";

import { Region } from "@/lib/cartographyData";

interface RegionPathProps {
  region: Region;
  isHovered: boolean;
  isSelected: boolean;
  onHover: (regionId: string | null) => void;
  onClick: (region: Region) => void;
}

export default function RegionPath({
  region,
  isHovered,
  isSelected,
  onHover,
  onClick,
}: RegionPathProps) {
  const fill = isHovered || isSelected ? region.hoverColor : region.color;

  return (
    <g>
      <path
        id={region.id}
        d={region.pathData}
        fill={fill}
        stroke="#1a0f07"
        strokeWidth="1.5"
        filter="url(#regionShadow)"
        style={{
          transition: "fill 0.2s ease",
          cursor: "pointer",
        }}
        onMouseEnter={() => onHover(region.id)}
        onMouseLeave={() => onHover(null)}
        onClick={() => onClick(region)}
        aria-label={`${region.fantasyName} — click to learn more`}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") onClick(region);
        }}
      />
    </g>
  );
}
