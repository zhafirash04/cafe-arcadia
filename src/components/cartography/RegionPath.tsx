"use client";

import { useState } from "react";
import { Region } from "@/lib/cartographyData";

interface RegionPathProps {
  region: Region;
  isSelected: boolean;
  onHover: (id: string | null) => void;
  onClick: (region: Region) => void;
}

export default function RegionPath({
  region,
  isSelected,
  onHover,
  onClick,
}: RegionPathProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover(region.id);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover(null);
  };

  return (
    <g>
      <defs>
        <filter id={`shadow-${region.id}`} x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.5" />
        </filter>
      </defs>
      <path
        d={region.path}
        fill={isHovered || isSelected ? region.hoverColor : region.color}
        stroke="#1a0f07"
        strokeWidth="1.5"
        strokeLinejoin="round"
        filter={`url(#shadow-${region.id})`}
        style={{
          transition: "fill 0.2s ease",
          cursor: "pointer",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => onClick(region)}
      />
    </g>
  );
}
