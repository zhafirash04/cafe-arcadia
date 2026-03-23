"use client";

import { Region } from "@/lib/cartographyData";

interface RegionPathProps {
  region: Region;
  isHovered: boolean;
  isSelected: boolean;
  onHover: (id: string | null) => void;
  onSelect: (id: string) => void;
}

export default function RegionPath({
  region,
  isHovered,
  isSelected,
  onHover,
  onSelect,
}: RegionPathProps) {
  const fill = isHovered || isSelected ? region.hoverColor : region.color;

  return (
    <g>
      <defs>
        <filter id={`shadow-${region.id}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="3" stdDeviation="4" floodColor="#000" floodOpacity="0.5" />
        </filter>
      </defs>
      <path
        d={region.path}
        fill={fill}
        stroke="#1a0f07"
        strokeWidth="1.5"
        strokeLinejoin="round"
        filter={`url(#shadow-${region.id})`}
        style={{ transition: "fill 0.2s ease", cursor: "pointer" }}
        onMouseEnter={() => onHover(region.id)}
        onMouseLeave={() => onHover(null)}
        onClick={() => onSelect(region.id)}
      />
      {(isHovered || isSelected) && (
        <path
          d={region.path}
          fill="none"
          stroke={region.hoverColor}
          strokeWidth="2.5"
          strokeLinejoin="round"
          opacity="0.6"
          pointerEvents="none"
          style={{ filter: `drop-shadow(0 0 6px ${region.hoverColor})` }}
        />
      )}
    </g>
  );
}
