"use client";

export default function MapDecorations() {
  return (
    <g>
      {/* ── Enhanced Ocean water texture filter ── */}
      <defs>
        <filter id="waterTexture" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.012"
            numOctaves="4"
            seed="42"
            result="noise"
          />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.03
                    0 0 0 0 0.05
                    0 0 0 0 0.12
                    0 0 0 0.7 0"
            result="coloredNoise"
          />
          <feBlend in="SourceGraphic" in2="coloredNoise" mode="overlay" />
        </filter>

        {/* Parchment texture for land */}
        <filter id="parchmentTexture" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="5" result="noise" />
          <feDiffuseLighting in="noise" lightingColor="#d4c4a8" surfaceScale="2" result="light">
            <feDistantLight azimuth="45" elevation="60" />
          </feDiffuseLighting>
          <feComposite in="SourceGraphic" in2="light" operator="arithmetic" k1="1" k2="0" k3="0" k4="0" />
        </filter>

        {/* Region drop shadow - enhanced */}
        <filter id="regionShadow" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="3" dy="4" stdDeviation="5" floodColor="#000000" floodOpacity="0.7" />
        </filter>

        {/* Inner glow for regions */}
        <filter id="innerGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feFlood floodColor="#ffd700" floodOpacity="0.3" result="flood" />
          <feComposite in="flood" in2="SourceGraphic" operator="in" result="mask" />
          <feGaussianBlur in="mask" stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Ornate border gradient - enhanced */}
        <linearGradient id="borderGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b7355" stopOpacity="0.9" />
          <stop offset="25%" stopColor="#c4a035" stopOpacity="1" />
          <stop offset="50%" stopColor="#e8d080" stopOpacity="1" />
          <stop offset="75%" stopColor="#c4a035" stopOpacity="1" />
          <stop offset="100%" stopColor="#8b7355" stopOpacity="0.9" />
        </linearGradient>

        {/* Mountain pattern */}
        <pattern id="mountainPattern" patternUnits="userSpaceOnUse" width="30" height="20">
          <path d="M0,20 L15,5 L30,20 Z" fill="none" stroke="#c4a035" strokeWidth="0.3" opacity="0.15" />
        </pattern>

        {/* Wave pattern for ocean */}
        <pattern id="wavePattern" patternUnits="userSpaceOnUse" width="60" height="15">
          <path d="M0,10 Q15,5 30,10 T60,10" fill="none" stroke="#c4a035" strokeWidth="0.4" opacity="0.08" />
        </pattern>

        {/* Sea monster silhouette */}
        <symbol id="seaMonster" viewBox="0 0 80 40">
          <path d="M5,25 Q10,15 20,18 Q30,12 40,20 Q50,15 55,22 Q65,18 75,25 Q70,30 60,28 Q50,32 40,26 Q30,32 20,28 Q10,30 5,25 Z" 
            fill="#c4a035" fillOpacity="0.08" />
          <circle cx="15" cy="20" r="2" fill="#c4a035" fillOpacity="0.1" />
        </symbol>

        {/* Ship silhouette */}
        <symbol id="ship" viewBox="0 0 40 30">
          <path d="M5,25 L10,20 L30,20 L35,25 L20,28 Z" fill="#c4a035" fillOpacity="0.15" />
          <path d="M20,20 L20,8 L25,12 L20,12 Z" fill="#c4a035" fillOpacity="0.12" />
          <line x1="20" y1="8" x2="20" y2="5" stroke="#c4a035" strokeWidth="0.5" opacity="0.15" />
        </symbol>

        {/* Castle/fortress symbol */}
        <symbol id="castle" viewBox="0 0 20 20">
          <rect x="2" y="10" width="16" height="10" fill="#c4a035" fillOpacity="0.3" />
          <rect x="0" y="8" width="4" height="12" fill="#c4a035" fillOpacity="0.35" />
          <rect x="16" y="8" width="4" height="12" fill="#c4a035" fillOpacity="0.35" />
          <rect x="8" y="6" width="4" height="14" fill="#c4a035" fillOpacity="0.35" />
          <rect x="0" y="6" width="1" height="2" fill="#c4a035" fillOpacity="0.4" />
          <rect x="3" y="6" width="1" height="2" fill="#c4a035" fillOpacity="0.4" />
          <rect x="16" y="6" width="1" height="2" fill="#c4a035" fillOpacity="0.4" />
          <rect x="19" y="6" width="1" height="2" fill="#c4a035" fillOpacity="0.4" />
          <rect x="8" y="4" width="1" height="2" fill="#c4a035" fillOpacity="0.4" />
          <rect x="11" y="4" width="1" height="2" fill="#c4a035" fillOpacity="0.4" />
        </symbol>
      </defs>

      {/* ── Ocean background with enhanced texture ── */}
      <rect
        x="0"
        y="0"
        width="1200"
        height="700"
        fill="#0a0e18"
        filter="url(#waterTexture)"
      />

      {/* Wave patterns across ocean */}
      <rect x="0" y="0" width="1200" height="700" fill="url(#wavePattern)" opacity="0.5" />

      {/* ── Decorative sea elements ── */}
      {/* Sea monsters in distant waters */}
      <use href="#seaMonster" x="40" y="120" width="60" height="30" />
      <use href="#seaMonster" x="1080" y="480" width="50" height="25" />
      
      {/* Ships on trade routes */}
      <use href="#ship" x="480" y="180" width="25" height="18" transform="rotate(15 492 189)" />
      <use href="#ship" x="820" y="350" width="22" height="16" transform="rotate(-20 831 358)" />

      {/* ── Map border — ornate outer frame ── */}
      <rect
        x="6"
        y="6"
        width="1188"
        height="688"
        fill="none"
        stroke="url(#borderGold)"
        strokeWidth="4"
        rx="6"
      />
      {/* Decorative middle frame */}
      <rect
        x="12"
        y="12"
        width="1176"
        height="676"
        fill="none"
        stroke="#c4a035"
        strokeWidth="1.5"
        strokeOpacity="0.5"
        rx="4"
      />
      {/* Inner frame */}
      <rect
        x="18"
        y="18"
        width="1164"
        height="664"
        fill="none"
        stroke="#c4a035"
        strokeWidth="0.8"
        strokeOpacity="0.3"
        rx="2"
      />

      {/* ── Enhanced Corner medallions with fantasy motifs ── */}
      {[
        { cx: 28, cy: 28 },
        { cx: 1172, cy: 28 },
        { cx: 28, cy: 672 },
        { cx: 1172, cy: 672 },
      ].map(({ cx, cy }, i) => (
        <g key={i}>
          {/* Outer ring */}
          <circle cx={cx} cy={cy} r="18" fill="#0a0e18" stroke="#c4a035" strokeWidth="2" />
          {/* Middle ring */}
          <circle cx={cx} cy={cy} r="12" fill="none" stroke="#c4a035" strokeWidth="1" strokeOpacity="0.6" />
          {/* Inner ring */}
          <circle cx={cx} cy={cy} r="6" fill="none" stroke="#c4a035" strokeWidth="1" />
          {/* Center gem */}
          <circle cx={cx} cy={cy} r="3" fill="#c4a035" fillOpacity="0.6" />
          {/* Decorative lines - 8 point star */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x2 = cx + Math.sin(rad) * 16;
            const y2 = cy - Math.cos(rad) * 16;
            return (
              <line key={angle} x1={cx} y1={cy} x2={x2} y2={y2} 
                stroke="#c4a035" strokeWidth="0.6" strokeOpacity="0.4" />
            );
          })}
        </g>
      ))}

      {/* ── Side decorative flourishes ── */}
      {/* Top center */}
      <g transform="translate(600, 20)">
        <path d="M-80,0 Q-40,-8 0,0 Q40,-8 80,0" fill="none" stroke="#c4a035" strokeWidth="1" opacity="0.4" />
        <circle cx="0" cy="0" r="4" fill="#c4a035" fillOpacity="0.5" />
        <circle cx="-40" cy="-4" r="2" fill="#c4a035" fillOpacity="0.3" />
        <circle cx="40" cy="-4" r="2" fill="#c4a035" fillOpacity="0.3" />
      </g>
      {/* Bottom center */}
      <g transform="translate(600, 680)">
        <path d="M-80,0 Q-40,8 0,0 Q40,8 80,0" fill="none" stroke="#c4a035" strokeWidth="1" opacity="0.4" />
        <circle cx="0" cy="0" r="4" fill="#c4a035" fillOpacity="0.5" />
        <circle cx="-40" cy="4" r="2" fill="#c4a035" fillOpacity="0.3" />
        <circle cx="40" cy="4" r="2" fill="#c4a035" fillOpacity="0.3" />
      </g>

      {/* ── Title Cartouche (bottom-left) - Enhanced medieval scroll ── */}
      <g>
        {/* Scroll background */}
        <path 
          d="M32,595 Q28,600 32,605 L32,680 Q28,685 38,688 L250,688 Q260,685 256,680 L256,605 Q260,600 256,595 L38,595 Q28,598 32,595 Z"
          fill="#0a0e18"
          stroke="#c4a035"
          strokeWidth="1.5"
          fillOpacity="0.95"
        />
        {/* Scroll curls */}
        <ellipse cx="32" cy="640" rx="8" ry="35" fill="none" stroke="#c4a035" strokeWidth="1" opacity="0.4" />
        <ellipse cx="256" cy="640" rx="8" ry="35" fill="none" stroke="#c4a035" strokeWidth="1" opacity="0.4" />
        {/* Inner border */}
        <rect
          x="42"
          y="605"
          width="204"
          height="75"
          rx="3"
          fill="none"
          stroke="#c4a035"
          strokeWidth="0.5"
          strokeOpacity="0.4"
        />
        {/* Dragon emblem */}
        <text
          x="144"
          y="622"
          textAnchor="middle"
          fontFamily="serif"
          fontSize="10"
          fill="#c4a035"
          fillOpacity="0.6"
        >
          ☬
        </text>
        <text
          x="144"
          y="642"
          textAnchor="middle"
          fontFamily="'Cinzel', serif"
          fontSize="14"
          fill="#c4a035"
          fontWeight="700"
          letterSpacing="2"
        >
          CARTA MVNDI
        </text>
        <text
          x="144"
          y="660"
          textAnchor="middle"
          fontFamily="'Playfair Display', serif"
          fontSize="11"
          fill="#c4a035"
          fillOpacity="0.8"
          fontStyle="italic"
        >
          The Realms of Arcadia
        </text>
        <text
          x="144"
          y="676"
          textAnchor="middle"
          fontFamily="'Playfair Display', serif"
          fontSize="8"
          fill="#c4a035"
          fillOpacity="0.5"
          fontStyle="italic"
        >
          Anno Domini MMXXIV
        </text>
      </g>

      {/* ── Ocean labels with decorative elements ── */}
      <g>
        <text
          x="60"
          y="160"
          fontFamily="'Playfair Display', serif"
          fontSize="11"
          fill="#c4a035"
          fillOpacity="0.25"
          fontStyle="italic"
          letterSpacing="2"
        >
          Mare Occidentale
        </text>
        <text
          x="60"
          y="175"
          fontFamily="'Playfair Display', serif"
          fontSize="8"
          fill="#c4a035"
          fillOpacity="0.18"
          fontStyle="italic"
        >
          The Uncharted Western Sea
        </text>
      </g>
      <g>
        <text
          x="980"
          y="545"
          fontFamily="'Playfair Display', serif"
          fontSize="11"
          fill="#c4a035"
          fillOpacity="0.25"
          fontStyle="italic"
          letterSpacing="2"
        >
          Mare Orientale
        </text>
        <text
          x="980"
          y="560"
          fontFamily="'Playfair Display', serif"
          fontSize="8"
          fill="#c4a035"
          fillOpacity="0.18"
          fontStyle="italic"
        >
          The Eternal Eastern Deep
        </text>
      </g>
      <text
        x="450"
        y="580"
        fontFamily="'Playfair Display', serif"
        fontSize="10"
        fill="#c4a035"
        fillOpacity="0.2"
        fontStyle="italic"
        letterSpacing="1"
      >
        Mare Australis
      </text>
      <text
        x="550"
        y="80"
        fontFamily="'Playfair Display', serif"
        fontSize="10"
        fill="#c4a035"
        fillOpacity="0.2"
        fontStyle="italic"
        letterSpacing="1"
      >
        Septentrionis Aquae
      </text>

      {/* ── Enhanced Trade routes with curved paths ── */}
      {/* Ancient Spice Route */}
      <path
        d="M620,320 Q700,340 750,240"
        fill="none"
        stroke="#c4a035"
        strokeDasharray="6,4,2,4"
        strokeWidth="1.2"
        opacity="0.3"
      />
      {/* Eastern Merchant Way */}
      <path
        d="M750,240 Q850,280 970,400"
        fill="none"
        stroke="#c4a035"
        strokeDasharray="6,4,2,4"
        strokeWidth="1.2"
        opacity="0.3"
      />
      {/* Kefa to Crimson Route */}
      <path
        d="M620,320 Q640,360 660,420"
        fill="none"
        stroke="#c4a035"
        strokeDasharray="6,4,2,4"
        strokeWidth="1.2"
        opacity="0.3"
      />
      {/* Western Trade Route */}
      <path
        d="M130,260 Q160,290 220,300"
        fill="none"
        stroke="#c4a035"
        strokeDasharray="6,4,2,4"
        strokeWidth="1.2"
        opacity="0.25"
      />
      {/* Southern Passage */}
      <path
        d="M220,300 Q250,380 300,460"
        fill="none"
        stroke="#c4a035"
        strokeDasharray="6,4,2,4"
        strokeWidth="1.2"
        opacity="0.25"
      />

      {/* Route markers */}
      {[
        { x: 620, y: 320 },
        { x: 750, y: 240 },
        { x: 970, y: 400 },
        { x: 660, y: 420 },
        { x: 130, y: 260 },
        { x: 220, y: 300 },
        { x: 300, y: 460 },
      ].map((point, i) => (
        <circle key={i} cx={point.x} cy={point.y} r="3" fill="#c4a035" fillOpacity="0.15" />
      ))}

      {/* Castle markers on major regions */}
      <use href="#castle" x="610" y="290" width="16" height="16" opacity="0.5" />
      <use href="#castle" x="740" y="210" width="14" height="14" opacity="0.4" />
      <use href="#castle" x="290" y="430" width="15" height="15" opacity="0.45" />

      {/* ── Enhanced Compass Rose at (1100, 610) ── */}
      <g transform="translate(1100, 605)">
        {/* Outer decorative ring */}
        <circle cx="0" cy="0" r="42" fill="none" stroke="#c4a035" strokeWidth="1" strokeOpacity="0.3" />
        <circle cx="0" cy="0" r="38" fill="#0a0e18" fillOpacity="0.8" stroke="#c4a035" strokeWidth="1.5" strokeOpacity="0.6" />
        
        {/* 16-point star */}
        {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const isPrimary = i % 4 === 0;
          const isSecondary = i % 2 === 0 && !isPrimary;
          const len = isPrimary ? 32 : isSecondary ? 22 : 14;
          const width = isPrimary ? 2.5 : isSecondary ? 1.5 : 0.8;
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
              strokeWidth={width}
              strokeOpacity={isPrimary ? 0.9 : isSecondary ? 0.7 : 0.4}
            />
          );
        })}
        
        {/* Decorative inner circles */}
        <circle cx="0" cy="0" r="8" fill="#0a0e18" stroke="#c4a035" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="4" fill="#c4a035" fillOpacity="0.8" />
        
        {/* Fleur-de-lis style north indicator */}
        <path 
          d="M0,-35 L-3,-42 L0,-38 L3,-42 Z" 
          fill="#c4a035" 
          stroke="#c4a035" 
          strokeWidth="0.5"
        />
        
        {/* Cardinal direction labels */}
        <text x="0" y="-48" textAnchor="middle" fontFamily="'Cinzel', serif" fontSize="10" fill="#c4a035" fontWeight="700">N</text>
        <text x="0" y="56" textAnchor="middle" fontFamily="'Cinzel', serif" fontSize="10" fill="#c4a035" fontWeight="700">S</text>
        <text x="50" y="4" textAnchor="middle" fontFamily="'Cinzel', serif" fontSize="10" fill="#c4a035" fontWeight="700">E</text>
        <text x="-50" y="4" textAnchor="middle" fontFamily="'Cinzel', serif" fontSize="10" fill="#c4a035" fontWeight="700">W</text>
        
        {/* Intercardinal labels */}
        <text x="34" y="-30" textAnchor="middle" fontFamily="'Cinzel', serif" fontSize="7" fill="#c4a035" fillOpacity="0.6">NE</text>
        <text x="34" y="38" textAnchor="middle" fontFamily="'Cinzel', serif" fontSize="7" fill="#c4a035" fillOpacity="0.6">SE</text>
        <text x="-34" y="38" textAnchor="middle" fontFamily="'Cinzel', serif" fontSize="7" fill="#c4a035" fillOpacity="0.6">SW</text>
        <text x="-34" y="-30" textAnchor="middle" fontFamily="'Cinzel', serif" fontSize="7" fill="#c4a035" fillOpacity="0.6">NW</text>
      </g>

      {/* ── Legend box (top right) ── */}
      <g transform="translate(1020, 45)">
        <rect x="0" y="0" width="150" height="90" rx="4" fill="#0a0e18" fillOpacity="0.9" stroke="#c4a035" strokeWidth="1" />
        <text x="75" y="18" textAnchor="middle" fontFamily="'Cinzel', serif" fontSize="9" fill="#c4a035" fontWeight="600">LEGENDA</text>
        <line x1="20" y1="25" x2="130" y2="25" stroke="#c4a035" strokeWidth="0.5" opacity="0.4" />
        
        {/* Trade route legend */}
        <line x1="15" y1="40" x2="45" y2="40" stroke="#c4a035" strokeDasharray="6,4,2,4" strokeWidth="1.2" opacity="0.5" />
        <text x="55" y="43" fontFamily="'Playfair Display', serif" fontSize="8" fill="#c4a035" fillOpacity="0.7">Trade Routes</text>
        
        {/* Stronghold legend */}
        <use href="#castle" x="15" y="50" width="12" height="12" opacity="0.6" />
        <text x="55" y="62" fontFamily="'Playfair Display', serif" fontSize="8" fill="#c4a035" fillOpacity="0.7">Strongholds</text>
        
        {/* Realm legend */}
        <rect x="15" y="72" width="20" height="10" rx="2" fill="#5a4020" stroke="#c4a035" strokeWidth="0.5" />
        <text x="55" y="80" fontFamily="'Playfair Display', serif" fontSize="8" fill="#c4a035" fillOpacity="0.7">Coffee Realms</text>
      </g>
    </g>
  );
}
