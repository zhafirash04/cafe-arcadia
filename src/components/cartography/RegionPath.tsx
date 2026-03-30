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

  // Generate terrain texture pattern ID based on region type
  const getTerrainGradient = () => {
    const baseColor = isHovered || isSelected ? region.hoverColor : region.color;
    return baseColor;
  };

  return (
    <g>
      <defs>
        {/* Enhanced shadow with blur */}
        <filter id={`shadow-${region.id}`} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="2" dy="3" stdDeviation="4" floodColor="#000000" floodOpacity="0.6" />
        </filter>
        
        {/* Terrain texture overlay */}
        <filter id={`terrain-${region.id}`} x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
          <feColorMatrix type="matrix" 
            values="0 0 0 0 0.1
                    0 0 0 0 0.08
                    0 0 0 0 0.05
                    0 0 0 0.15 0" 
            result="colorNoise" />
          <feBlend in="SourceGraphic" in2="colorNoise" mode="overlay" />
        </filter>

        {/* Radial gradient for 3D terrain effect */}
        <radialGradient id={`grad-${region.id}`} cx="30%" cy="30%" r="70%" fx="25%" fy="25%">
          <stop offset="0%" stopColor={isHovered || isSelected ? region.hoverColor : region.color} stopOpacity="1" />
          <stop offset="60%" stopColor={region.color} stopOpacity="1" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.3" />
        </radialGradient>

        {/* Inner highlight for elevation effect */}
        <linearGradient id={`highlight-${region.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Base landmass with shadow */}
      <path
        d={region.path}
        fill={`url(#grad-${region.id})`}
        stroke="#1a0f07"
        strokeWidth="2"
        strokeLinejoin="round"
        filter={`url(#shadow-${region.id})`}
        style={{
          transition: "all 0.3s ease",
          cursor: "pointer",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => onClick(region)}
      />

      {/* Terrain texture overlay */}
      <path
        d={region.path}
        fill={getTerrainGradient()}
        filter={`url(#terrain-${region.id})`}
        opacity="0.4"
        pointerEvents="none"
        style={{
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Highlight overlay for 3D effect */}
      <path
        d={region.path}
        fill={`url(#highlight-${region.id})`}
        pointerEvents="none"
        style={{
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Coastline detail - inner border */}
      <path
        d={region.path}
        fill="none"
        stroke={isHovered || isSelected ? "#ffd700" : "#c4a035"}
        strokeWidth="0.8"
        strokeOpacity={isHovered || isSelected ? "0.6" : "0.25"}
        strokeLinejoin="round"
        pointerEvents="none"
        transform="scale(0.96) translate(12, 8)"
        style={{
          transition: "all 0.3s ease",
        }}
      />

      {/* Glow effect on hover/select */}
      {(isHovered || isSelected) && (
        <path
          d={region.path}
          fill="none"
          stroke="#ffd700"
          strokeWidth="3"
          strokeOpacity="0.3"
          strokeLinejoin="round"
          pointerEvents="none"
          style={{
            filter: "blur(4px)",
          }}
        />
      )}
    </g>
  );
}
