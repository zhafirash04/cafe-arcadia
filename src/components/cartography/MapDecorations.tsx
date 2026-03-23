"use client";

export default function MapDecorations() {
  return (
    <g>
      {/* ── Ocean water texture filter ── */}
      <defs>
        <filter id="waterTexture" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.015 0.025"
            numOctaves="3"
            seed="5"
            result="noise"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.04
                    0 0 0 0 0.06
                    0 0 0 0 0.1
                    0 0 0 0.6 0"
            result="coloredNoise"
          />
          <feBlend in="SourceGraphic" in2="coloredNoise" mode="overlay" />
        </filter>

        {/* Region drop shadow */}
        <filter id="regionShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="2" dy="3" stdDeviation="4" floodColor="#000000" floodOpacity="0.6" />
        </filter>

        {/* Ornate border gradient */}
        <linearGradient id="borderGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c4a035" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#e8d080" stopOpacity="1" />
          <stop offset="100%" stopColor="#c4a035" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* ── Ocean background with texture ── */}
      <rect
        x="0"
        y="0"
        width="1200"
        height="700"
        fill="#0a0f1a"
        filter="url(#waterTexture)"
      />

      {/* ── Map border — outer frame ── */}
      <rect
        x="8"
        y="8"
        width="1184"
        height="684"
        fill="none"
        stroke="url(#borderGold)"
        strokeWidth="3"
        rx="4"
      />
      {/* inner frame */}
      <rect
        x="16"
        y="16"
        width="1168"
        height="668"
        fill="none"
        stroke="#c4a035"
        strokeWidth="1"
        strokeOpacity="0.4"
        rx="2"
      />

      {/* ── Corner medallions ── */}
      {[
        { cx: 24, cy: 24 },
        { cx: 1176, cy: 24 },
        { cx: 24, cy: 676 },
        { cx: 1176, cy: 676 },
      ].map(({ cx, cy }, i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="14" fill="#0a0f1a" stroke="#c4a035" strokeWidth="1.5" />
          <circle cx={cx} cy={cy} r="6" fill="none" stroke="#c4a035" strokeWidth="1" />
          <line x1={cx - 12} y1={cy} x2={cx + 12} y2={cy} stroke="#c4a035" strokeWidth="0.8" strokeOpacity="0.6" />
          <line x1={cx} y1={cy - 12} x2={cx} y2={cy + 12} stroke="#c4a035" strokeWidth="0.8" strokeOpacity="0.6" />
        </g>
      ))}

      {/* ── Title Cartouche ── */}
      <g>
        <rect
          x="38"
          y="38"
          width="210"
          height="70"
          rx="6"
          fill="#0a0f1a"
          stroke="#c4a035"
          strokeWidth="1.5"
          fillOpacity="0.92"
        />
        <rect
          x="42"
          y="42"
          width="202"
          height="62"
          rx="4"
          fill="none"
          stroke="#c4a035"
          strokeWidth="0.5"
          strokeOpacity="0.4"
        />
        <text
          x="143"
          y="65"
          textAnchor="middle"
          fontFamily="'Cinzel', serif"
          fontSize="13"
          fill="#c4a035"
          fontWeight="700"
          letterSpacing="1.5"
        >
          Carta Mundi Arcadiae
        </text>
        <text
          x="143"
          y="84"
          textAnchor="middle"
          fontFamily="'Playfair Display', serif"
          fontSize="10"
          fill="#c4a035"
          fillOpacity="0.7"
          fontStyle="italic"
        >
          The Known Realms
        </text>
      </g>

      {/* ── Ocean labels ── */}
      <text
        x="80"
        y="200"
        fontFamily="'Playfair Display', serif"
        fontSize="13"
        fill="#c4a035"
        fillOpacity="0.3"
        fontStyle="italic"
        letterSpacing="1"
      >
        The Uncharted Western Sea
      </text>
      <text
        x="1000"
        y="550"
        fontFamily="'Playfair Display', serif"
        fontSize="13"
        fill="#c4a035"
        fillOpacity="0.3"
        fontStyle="italic"
        letterSpacing="1"
      >
        The Eternal Eastern Deep
      </text>

      {/* ── Trade routes ── */}
      {/* kefa_highlands (620,320) → ember_isles (950,400) */}
      <line
        x1="620" y1="320" x2="950" y2="400"
        stroke="#c4a035"
        strokeDasharray="4,8"
        strokeWidth="1"
        opacity="0.25"
      />
      {/* ember_isles (950,400) → jade_mountains (700,260) */}
      <line
        x1="950" y1="400" x2="700" y2="260"
        stroke="#c4a035"
        strokeDasharray="4,8"
        strokeWidth="1"
        opacity="0.25"
      />
      {/* jade_mountains (700,260) → crimson_steppes (660,390) */}
      <line
        x1="700" y1="260" x2="660" y2="390"
        stroke="#c4a035"
        strokeDasharray="4,8"
        strokeWidth="1"
        opacity="0.25"
      />

      {/* ── Compass Rose at (1120, 620) ── */}
      <g transform="translate(1120, 620)">
        {/* 8-point star */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const len = i % 2 === 0 ? 28 : 18;
          const x2 = Math.sin(rad) * len;
          const y2 = -Math.cos(rad) * len;
          return (
            <line
              key={angle}
              x1="0"
              y1="0"
              x2={x2}
              y2={y2}
              stroke="#c4a035"
              strokeWidth={i % 2 === 0 ? 2 : 1}
              strokeOpacity="0.85"
            />
          );
        })}
        <circle cx="0" cy="0" r="5" fill="#0a0f1a" stroke="#c4a035" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="2" fill="#c4a035" />
        {/* N/S/E/W labels */}
        <text x="0" y="-35" textAnchor="middle" fontFamily="'Cinzel', serif" fontSize="9" fill="#c4a035" fontWeight="700">N</text>
        <text x="0" y="45" textAnchor="middle" fontFamily="'Cinzel', serif" fontSize="9" fill="#c4a035" fontWeight="700">S</text>
        <text x="38" y="4" textAnchor="middle" fontFamily="'Cinzel', serif" fontSize="9" fill="#c4a035" fontWeight="700">E</text>
        <text x="-38" y="4" textAnchor="middle" fontFamily="'Cinzel', serif" fontSize="9" fill="#c4a035" fontWeight="700">W</text>
      </g>
    </g>
  );
}
