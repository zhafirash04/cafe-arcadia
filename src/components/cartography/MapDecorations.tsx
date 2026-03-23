"use client";

import { regions } from "@/lib/cartographyData";

/**
 * All decorative SVG elements rendered in the label layer:
 * compass rose, title cartouche, ocean labels, trade routes,
 * and per-region fantasy name labels.
 */
export default function MapDecorations() {
  return (
    <g id="decorations-layer" style={{ pointerEvents: "none" }}>
      {/* ── Ocean Labels ─────────────────────────────── */}
      <text
        x="65"
        y="130"
        fontFamily="var(--font-cinzel), serif"
        fontSize="22"
        fill="#a0c4d8"
        fillOpacity="0.28"
        fontStyle="italic"
        letterSpacing="4"
        textAnchor="start"
      >
        The Uncharted Western Sea
      </text>
      <text
        x="1135"
        y="200"
        fontFamily="var(--font-cinzel), serif"
        fontSize="22"
        fill="#a0c4d8"
        fillOpacity="0.28"
        fontStyle="italic"
        letterSpacing="4"
        textAnchor="end"
      >
        The Eternal Eastern Deep
      </text>

      {/* ── Trade Route Lines ─────────────────────────── */}
      {/* kefa_highlands → ember_isles */}
      <line
        x1="622" y1="320"
        x2="950" y2="400"
        stroke="#c4a035"
        strokeDasharray="4,8"
        strokeWidth="1.2"
        opacity="0.25"
      />
      {/* ember_isles → jade_mountains */}
      <line
        x1="950" y1="400"
        x2="700" y2="260"
        stroke="#c4a035"
        strokeDasharray="4,8"
        strokeWidth="1.2"
        opacity="0.25"
      />
      {/* jade_mountains → crimson_steppes */}
      <line
        x1="700" y1="260"
        x2="660" y2="390"
        stroke="#c4a035"
        strokeDasharray="4,8"
        strokeWidth="1.2"
        opacity="0.25"
      />

      {/* ── Region Name Labels ────────────────────────── */}
      {regions.map((region) => (
        <text
          key={`label-${region.id}`}
          x={region.position.x}
          y={region.position.y - 52}
          fontFamily="var(--font-cinzel), serif"
          fontSize="11"
          fill="#c4a035"
          fillOpacity="0.85"
          textAnchor="middle"
          style={{ pointerEvents: "none", userSelect: "none" }}
        >
          {region.fantasyName.length > 28
            ? region.fantasyName.substring(0, 26) + "…"
            : region.fantasyName}
        </text>
      ))}

      {/* ── Title Cartouche (top-left) ─────────────────── */}
      {/* Outer rect */}
      <rect x="22" y="22" width="210" height="68" rx="4" ry="4"
        fill="#0a0f1a" fillOpacity="0.8"
        stroke="#c4a035" strokeWidth="1.5" />
      {/* Inner rect */}
      <rect x="27" y="27" width="200" height="58" rx="2" ry="2"
        fill="none"
        stroke="#c4a035" strokeWidth="0.5" strokeOpacity="0.6" />
      {/* Corner flourishes */}
      {[
        [22, 22], [232, 22], [22, 90], [232, 90],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="5" fill="#c4a035" fillOpacity="0.7" />
          <line x1={cx - 4} y1={cy} x2={cx + 4} y2={cy} stroke="#c4a035" strokeWidth="0.8" strokeOpacity="0.5" />
          <line x1={cx} y1={cy - 4} x2={cx} y2={cy + 4} stroke="#c4a035" strokeWidth="0.8" strokeOpacity="0.5" />
        </g>
      ))}
      <text x="127" y="51"
        fontFamily="var(--font-cinzel), serif"
        fontSize="9"
        fill="#c4a035"
        fillOpacity="0.7"
        textAnchor="middle"
        letterSpacing="3"
      >
        CARTA MUNDI ARCADIAE
      </text>
      <text x="127" y="68"
        fontFamily="var(--font-cinzel), serif"
        fontSize="13"
        fontWeight="600"
        fill="#c4a035"
        textAnchor="middle"
        letterSpacing="1"
      >
        The Known Realms
      </text>

      {/* ── Compass Rose (bottom-right) ───────────────── */}
      <g transform="translate(1120, 620)">
        {/* 8-point star */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const long = i % 2 === 0;
          const r = long ? 28 : 20;
          const rad = (angle * Math.PI) / 180;
          const x2 = Math.sin(rad) * r;
          const y2 = -Math.cos(rad) * r;
          return (
            <line key={angle}
              x1="0" y1="0"
              x2={x2} y2={y2}
              stroke="#c4a035"
              strokeWidth={long ? 2.5 : 1.5}
              strokeOpacity="0.85"
            />
          );
        })}
        {/* Center circle */}
        <circle cx="0" cy="0" r="4" fill="#c4a035" fillOpacity="0.9" />
        <circle cx="0" cy="0" r="2" fill="#0a0f1a" />
        {/* Cardinal labels */}
        <text x="0" y="-34"
          fontFamily="var(--font-cinzel), serif"
          fontSize="10" fontWeight="700"
          fill="#c4a035" textAnchor="middle">N</text>
        <text x="0" y="44"
          fontFamily="var(--font-cinzel), serif"
          fontSize="10" fontWeight="700"
          fill="#c4a035" textAnchor="middle">S</text>
        <text x="38" y="4"
          fontFamily="var(--font-cinzel), serif"
          fontSize="10" fontWeight="700"
          fill="#c4a035" textAnchor="middle">E</text>
        <text x="-38" y="4"
          fontFamily="var(--font-cinzel), serif"
          fontSize="10" fontWeight="700"
          fill="#c4a035" textAnchor="middle">W</text>
      </g>
    </g>
  );
}
