"use client";

export default function MapDecorations() {
  const waveYs = [80, 160, 240, 340, 440, 540, 620];
  const corners: [number, number][] = [[10, 10], [1190, 10], [10, 690], [1190, 690]];
  const cardinalLabels = [
    { label: "N", x: 0, y: -38 },
    { label: "S", x: 0, y: 48 },
    { label: "E", x: 42, y: 4 },
    { label: "W", x: -42, y: 4 },
  ];

  return (
    <g>
      <defs>
        <filter id="water-texture" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence type="turbulence" baseFrequency="0.015 0.01" numOctaves="4" seed="2" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
          <feBlend in="SourceGraphic" in2="grayNoise" mode="overlay" result="blended" />
          <feComposite in="blended" in2="SourceGraphic" operator="in" />
        </filter>
        <radialGradient id="oceanVignette" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#0d1628" stopOpacity="0" />
          <stop offset="100%" stopColor="#050a12" stopOpacity="0.7" />
        </radialGradient>
      </defs>

      {/* Ocean */}
      <rect x="0" y="0" width="1200" height="700" fill="#0a0f1a" filter="url(#water-texture)" />
      <rect x="0" y="0" width="1200" height="700" fill="url(#oceanVignette)" />

      {waveYs.map((y, i) => (
        <path
          key={i}
          d={`M0,${y} Q200,${y - 8} 400,${y} Q600,${y + 8} 800,${y} Q1000,${y - 8} 1200,${y}`}
          fill="none"
          stroke="#1a2a4a"
          strokeWidth="0.8"
          opacity="0.3"
        />
      ))}

      {/* Border */}
      <rect x="10" y="10" width="1180" height="680" fill="none" stroke="#c4a035" strokeWidth="2.5" rx="4" />
      <rect x="18" y="18" width="1164" height="664" fill="none" stroke="#c4a035" strokeWidth="1" rx="2" opacity="0.5" />

      {/* Corner medallions */}
      {corners.map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="12" fill="#0a0f1a" stroke="#c4a035" strokeWidth="1.5" />
          <line x1={cx - 8} y1={cy} x2={cx + 8} y2={cy} stroke="#c4a035" strokeWidth="1" />
          <line x1={cx} y1={cy - 8} x2={cx} y2={cy + 8} stroke="#c4a035" strokeWidth="1" />
          <circle cx={cx} cy={cy} r="3" fill="#c4a035" opacity="0.7" />
        </g>
      ))}

      {/* Title Cartouche */}
      <g transform="translate(42, 38)">
        <rect x="0" y="0" width="220" height="70" fill="#0a0f1a" stroke="#c4a035" strokeWidth="1.5" rx="4" />
        <rect x="4" y="4" width="212" height="62" fill="none" stroke="#c4a035" strokeWidth="0.5" rx="2" opacity="0.4" />
        <circle cx="0" cy="0" r="5" fill="#c4a035" opacity="0.6" />
        <circle cx="220" cy="0" r="5" fill="#c4a035" opacity="0.6" />
        <circle cx="0" cy="70" r="5" fill="#c4a035" opacity="0.6" />
        <circle cx="220" cy="70" r="5" fill="#c4a035" opacity="0.6" />
        <text x="110" y="26" textAnchor="middle" fontFamily="serif" fontSize="15" fontWeight="bold" fill="#c4a035" letterSpacing="3">
          Carta Mundi Arcadiae
        </text>
        <line x1="20" y1="34" x2="200" y2="34" stroke="#c4a035" strokeWidth="0.6" opacity="0.5" />
        <text x="110" y="52" textAnchor="middle" fontFamily="serif" fontSize="11" fill="#c4a035" opacity="0.8" fontStyle="italic">
          The Known Realms
        </text>
      </g>

      {/* Ocean labels */}
      <text x="80" y="560" textAnchor="middle" fontFamily="serif" fontSize="13" fontStyle="italic" fill="#c4a035" opacity="0.3" transform="rotate(-8, 80, 560)">
        The Uncharted Western Sea
      </text>
      <text x="1100" y="530" textAnchor="middle" fontFamily="serif" fontSize="13" fontStyle="italic" fill="#c4a035" opacity="0.3" transform="rotate(8, 1100, 530)">
        The Eternal Eastern Deep
      </text>

      {/* Trade routes */}
      <polyline points="620,320 950,400" fill="none" stroke="#c4a035" strokeDasharray="4,8" strokeWidth="1" opacity="0.25" />
      <polyline points="950,400 700,260" fill="none" stroke="#c4a035" strokeDasharray="4,8" strokeWidth="1" opacity="0.25" />
      <polyline points="700,260 660,390" fill="none" stroke="#c4a035" strokeDasharray="4,8" strokeWidth="1" opacity="0.25" />

      {/* Compass Rose */}
      <g transform="translate(1100, 610)">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const len = i % 2 === 0 ? 30 : 18;
          return (
            <line
              key={angle}
              x1="0" y1="0"
              x2={Math.sin(rad) * len}
              y2={-Math.cos(rad) * len}
              stroke="#c4a035"
              strokeWidth={i % 2 === 0 ? "2" : "1"}
              strokeLinecap="round"
              opacity="0.9"
            />
          );
        })}
        <circle cx="0" cy="0" r="5" fill="#c4a035" opacity="0.8" />
        <circle cx="0" cy="0" r="10" fill="none" stroke="#c4a035" strokeWidth="0.8" opacity="0.5" />
        <circle cx="0" cy="0" r="2" fill="#0a0f1a" />
        {cardinalLabels.map(({ label, x, y }) => (
          <text key={label} x={x} y={y} textAnchor="middle" fontFamily="serif" fontSize="10" fontWeight="bold" fill="#c4a035" opacity="0.9">
            {label}
          </text>
        ))}
      </g>
    </g>
  );
}
