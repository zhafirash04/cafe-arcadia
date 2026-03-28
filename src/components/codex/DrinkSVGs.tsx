"use client";

/* ═══════════════════════════════════════════════════════════════
   Illustrated SVG artwork for Codex products.
   Each component renders a unique fantasy-themed drink illustration
   matching the medieval aesthetic of Café Arcadia.
   Colors: dark browns, deep golds, ambers, warm tones.
   ═══════════════════════════════════════════════════════════════ */

/* ── ELIXIRS ── */

export function MysticGreenSVG() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <rect width="400" height="300" fill="#1a1614" />
      <rect width="400" height="300" fill="url(#mg-grad)" opacity="0.3" />
      <defs>
        <radialGradient id="mg-grad" cx="50%" cy="60%">
          <stop offset="0%" stopColor="#2d5a27" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#1a1614" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="mg-glow" cx="50%" cy="30%">
          <stop offset="0%" stopColor="#4ade80" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#1a1614" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill="url(#mg-glow)" />
      {/* Matcha bowl - ceremonial chawan */}
      <ellipse cx="200" cy="210" rx="72" ry="18" fill="#2a2420" />
      <path d="M128 170 C128 170 130 210 200 210 C270 210 272 170 272 170 L272 150 C272 130 260 120 200 120 C140 120 128 130 128 150 Z" fill="#3d3530" stroke="#c8a97e" strokeWidth="1" />
      <ellipse cx="200" cy="120" rx="72" ry="20" fill="#4ade80" opacity="0.3" />
      <ellipse cx="200" cy="120" rx="65" ry="16" fill="#22c55e" opacity="0.2" />
      {/* Matcha surface foam pattern */}
      <path d="M170 115 Q185 108 200 115 Q215 122 230 115" stroke="#86efac" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M155 120 Q177 112 200 120 Q223 128 245 120" stroke="#4ade80" strokeWidth="0.5" fill="none" opacity="0.3" />
      {/* Steam wisps */}
      <path d="M180 100 Q175 80 185 65" stroke="#86efac" strokeWidth="1.5" fill="none" opacity="0.3" strokeLinecap="round" />
      <path d="M200 95 Q198 70 205 50" stroke="#86efac" strokeWidth="1.5" fill="none" opacity="0.25" strokeLinecap="round" />
      <path d="M220 100 Q225 78 215 60" stroke="#86efac" strokeWidth="1.5" fill="none" opacity="0.2" strokeLinecap="round" />
      {/* Mint leaves */}
      <g transform="translate(265, 130) rotate(25)">
        <path d="M0 0 Q10 -15 5 -30 Q-5 -15 0 0" fill="#22c55e" opacity="0.6" />
        <line x1="2" y1="-2" x2="3" y2="-25" stroke="#16a34a" strokeWidth="0.5" />
      </g>
      <g transform="translate(275, 145) rotate(40)">
        <path d="M0 0 Q8 -12 4 -22 Q-4 -12 0 0" fill="#4ade80" opacity="0.4" />
        <line x1="1" y1="-2" x2="2" y2="-18" stroke="#22c55e" strokeWidth="0.5" />
      </g>
      {/* Decorative runes */}
      <text x="80" y="260" fill="#c8a97e" opacity="0.15" fontSize="14" fontFamily="serif">&#9733;</text>
      <text x="310" y="260" fill="#c8a97e" opacity="0.15" fontSize="14" fontFamily="serif">&#9733;</text>
      {/* Subtle circle accents */}
      <circle cx="200" cy="150" r="90" stroke="#c8a97e" strokeWidth="0.3" fill="none" opacity="0.1" />
    </svg>
  );
}

export function HealersChamomileSVG() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="300" fill="#1a1614" />
      <defs>
        <radialGradient id="hc-glow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#1a1614" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill="url(#hc-glow)" />
      {/* Moonlight glow */}
      <circle cx="310" cy="55" r="22" fill="#fef9c3" opacity="0.08" />
      <circle cx="310" cy="55" r="15" fill="#fef9c3" opacity="0.12" />
      <circle cx="310" cy="55" r="8" fill="#fef9c3" opacity="0.2" />
      {/* Teacup - delicate porcelain style */}
      <ellipse cx="200" cy="215" rx="55" ry="12" fill="#2a2420" />
      <path d="M145 175 C145 175 148 215 200 215 C252 215 255 175 255 175 L255 140 C255 130 245 125 200 125 C155 125 145 130 145 140 Z" fill="#d4c5a9" stroke="#c8a97e" strokeWidth="1" opacity="0.9" />
      <ellipse cx="200" cy="125" rx="55" ry="16" fill="#fef3c7" opacity="0.35" />
      {/* Cup handle */}
      <path d="M255 145 Q280 145 280 165 Q280 185 255 185" stroke="#c8a97e" strokeWidth="2.5" fill="none" />
      {/* Chamomile flowers floating */}
      <g transform="translate(185, 118)">
        <circle cx="0" cy="0" r="5" fill="#fde68a" opacity="0.5" />
        <circle cx="0" cy="0" r="2" fill="#f59e0b" opacity="0.6" />
        {/* petals */}
        <ellipse cx="7" cy="0" rx="4" ry="2" fill="#fef9c3" opacity="0.4" />
        <ellipse cx="-7" cy="0" rx="4" ry="2" fill="#fef9c3" opacity="0.4" />
        <ellipse cx="0" cy="7" rx="2" ry="4" fill="#fef9c3" opacity="0.4" />
        <ellipse cx="0" cy="-7" rx="2" ry="4" fill="#fef9c3" opacity="0.4" />
      </g>
      <g transform="translate(215, 122)">
        <circle cx="0" cy="0" r="4" fill="#fde68a" opacity="0.4" />
        <circle cx="0" cy="0" r="1.5" fill="#f59e0b" opacity="0.5" />
        <ellipse cx="5" cy="0" rx="3" ry="1.5" fill="#fef9c3" opacity="0.35" />
        <ellipse cx="-5" cy="0" rx="3" ry="1.5" fill="#fef9c3" opacity="0.35" />
        <ellipse cx="0" cy="5" rx="1.5" ry="3" fill="#fef9c3" opacity="0.35" />
        <ellipse cx="0" cy="-5" rx="1.5" ry="3" fill="#fef9c3" opacity="0.35" />
      </g>
      {/* Steam - soft and gentle */}
      <path d="M190 108 Q185 88 192 70" stroke="#fef3c7" strokeWidth="1" fill="none" opacity="0.2" strokeLinecap="round" />
      <path d="M205 105 Q202 82 210 60" stroke="#fef3c7" strokeWidth="1" fill="none" opacity="0.15" strokeLinecap="round" />
      {/* Small stars - moonlight theme */}
      <circle cx="90" cy="80" r="1.5" fill="#fef9c3" opacity="0.25" />
      <circle cx="120" cy="50" r="1" fill="#fef9c3" opacity="0.2" />
      <circle cx="340" cy="90" r="1.5" fill="#fef9c3" opacity="0.2" />
      <circle cx="75" cy="120" r="1" fill="#fef9c3" opacity="0.15" />
    </svg>
  );
}

export function RoyalGreySVG() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="300" fill="#1a1614" />
      <defs>
        <radialGradient id="rg-glow" cx="50%" cy="55%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#1a1614" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="rg-cup" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a3f60" />
          <stop offset="100%" stopColor="#2d2540" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#rg-glow)" />
      {/* Ornate teacup - royal style */}
      <ellipse cx="200" cy="218" rx="60" ry="14" fill="#2a2420" />
      {/* Saucer */}
      <ellipse cx="200" cy="218" rx="80" ry="18" fill="#3d3530" stroke="#c8a97e" strokeWidth="0.8" />
      <ellipse cx="200" cy="216" rx="70" ry="14" fill="none" stroke="#c8a97e" strokeWidth="0.3" />
      {/* Cup body */}
      <path d="M150 175 C150 175 153 215 200 215 C247 215 250 175 250 175 L250 135 C250 125 240 120 200 120 C160 120 150 125 150 135 Z" fill="url(#rg-cup)" stroke="#c8a97e" strokeWidth="1" />
      {/* Cup rim gold detail */}
      <ellipse cx="200" cy="120" rx="50" ry="14" fill="#1a1030" stroke="#c8a97e" strokeWidth="1.5" />
      {/* Tea surface */}
      <ellipse cx="200" cy="122" rx="45" ry="11" fill="#6d28d9" opacity="0.15" />
      {/* Cup decorative band */}
      <path d="M155 150 L245 150" stroke="#c8a97e" strokeWidth="0.5" opacity="0.4" />
      <path d="M153 155 L247 155" stroke="#c8a97e" strokeWidth="0.5" opacity="0.4" />
      {/* Handle */}
      <path d="M250 140 Q275 140 275 160 Q275 180 250 180" stroke="#c8a97e" strokeWidth="2" fill="none" />
      {/* Violet/floral accents */}
      <g transform="translate(120, 140) rotate(-15)">
        <ellipse cx="0" cy="-8" rx="3" ry="5" fill="#8b5cf6" opacity="0.3" />
        <ellipse cx="5" cy="-4" rx="3" ry="5" fill="#a78bfa" opacity="0.25" transform="rotate(40)" />
        <ellipse cx="-5" cy="-4" rx="3" ry="5" fill="#7c3aed" opacity="0.3" transform="rotate(-40)" />
        <line x1="0" y1="0" x2="0" y2="15" stroke="#4a3728" strokeWidth="1" />
      </g>
      <g transform="translate(280, 150) rotate(20)">
        <ellipse cx="0" cy="-6" rx="2.5" ry="4" fill="#a78bfa" opacity="0.25" />
        <ellipse cx="4" cy="-3" rx="2.5" ry="4" fill="#8b5cf6" opacity="0.2" transform="rotate(35)" />
        <line x1="0" y1="0" x2="0" y2="12" stroke="#4a3728" strokeWidth="0.8" />
      </g>
      {/* Steam */}
      <path d="M185 105 Q180 85 188 65" stroke="#a78bfa" strokeWidth="1" fill="none" opacity="0.2" strokeLinecap="round" />
      <path d="M210 103 Q215 80 208 60" stroke="#a78bfa" strokeWidth="1" fill="none" opacity="0.15" strokeLinecap="round" />
      {/* Crown motif above cup */}
      <g transform="translate(200, 50)" opacity="0.15">
        <path d="M-15 10 L-15 0 L-8 6 L0 -5 L8 6 L15 0 L15 10 Z" fill="#c8a97e" />
      </g>
    </svg>
  );
}

/* ── COLD BREWS ── */

export function VoidEssenceSVG() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="300" fill="#0f0c0a" />
      <defs>
        <radialGradient id="ve-void" cx="50%" cy="55%">
          <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0f0c0a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="ve-flask" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e1b4b" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#ve-void)" />
      {/* Alchemy flask/bottle */}
      <ellipse cx="200" cy="230" rx="50" ry="10" fill="#1a1614" />
      {/* Flask body - round bottom */}
      <path d="M160 200 Q160 240 200 240 Q240 240 240 200 L240 180 Q240 170 230 165 L230 100 L222 95 L222 80 L178 80 L178 95 L170 100 L170 165 Q160 170 160 180 Z" fill="url(#ve-flask)" stroke="#4a4060" strokeWidth="1" />
      {/* Flask neck */}
      <rect x="178" y="70" width="44" height="12" fill="#1a1030" stroke="#4a4060" strokeWidth="0.8" rx="2" />
      {/* Cork/stopper */}
      <rect x="183" y="62" width="34" height="10" fill="#8B6914" rx="3" />
      {/* Liquid inside - dark mysterious */}
      <ellipse cx="200" cy="200" rx="35" ry="30" fill="#0a0a20" opacity="0.8" />
      {/* Mysterious bubbles */}
      <circle cx="188" cy="195" r="3" fill="#312e81" opacity="0.4" />
      <circle cx="210" cy="205" r="2" fill="#4338ca" opacity="0.3" />
      <circle cx="195" cy="210" r="2.5" fill="#1e1b4b" opacity="0.5" />
      <circle cx="205" cy="190" r="1.5" fill="#6366f1" opacity="0.2" />
      {/* Void swirl inside */}
      <path d="M185 195 Q200 185 215 195 Q200 205 185 195" stroke="#4338ca" strokeWidth="0.5" fill="none" opacity="0.3" />
      {/* Alchemist symbols */}
      <circle cx="200" cy="200" r="45" stroke="#4a4060" strokeWidth="0.3" fill="none" opacity="0.2" strokeDasharray="3 5" />
      {/* Small rune marks */}
      <text x="100" y="250" fill="#4338ca" opacity="0.1" fontSize="18" fontFamily="serif">&#9830;</text>
      <text x="285" y="250" fill="#4338ca" opacity="0.1" fontSize="18" fontFamily="serif">&#9830;</text>
      {/* Darkness particles */}
      <circle cx="140" cy="130" r="1" fill="#6366f1" opacity="0.15" />
      <circle cx="260" cy="110" r="1.5" fill="#4338ca" opacity="0.1" />
      <circle cx="120" cy="180" r="1" fill="#312e81" opacity="0.12" />
      <circle cx="280" cy="170" r="1" fill="#4338ca" opacity="0.1" />
    </svg>
  );
}

export function CloudWalkerSVG() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="300" fill="#1a1614" />
      <defs>
        <radialGradient id="cw-glow" cx="50%" cy="60%">
          <stop offset="0%" stopColor="#e8d5b7" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#1a1614" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cw-nitro" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.3" />
          <stop offset="30%" stopColor="#d4a574" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#3d2b1a" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#cw-glow)" />
      {/* Tall glass - nitro style */}
      <ellipse cx="200" cy="235" rx="40" ry="8" fill="#2a2420" />
      <path d="M160 230 L165 95 C165 90 180 85 200 85 C220 85 235 90 235 95 L240 230 Q240 240 200 240 Q160 240 160 230 Z" fill="#2a2218" stroke="#c8a97e" strokeWidth="0.8" opacity="0.9" />
      {/* Cascading nitro effect inside */}
      <rect x="168" y="100" width="64" height="130" fill="url(#cw-nitro)" rx="4" opacity="0.7" />
      {/* Cascade lines - nitrogen pouring */}
      <path d="M175 120 Q182 125 175 130 Q182 135 175 140" stroke="#fef3c7" strokeWidth="0.5" fill="none" opacity="0.2" />
      <path d="M190 115 Q197 120 190 125 Q197 130 190 135 Q197 140 190 145" stroke="#fef3c7" strokeWidth="0.5" fill="none" opacity="0.2" />
      <path d="M210 118 Q217 123 210 128 Q217 133 210 138" stroke="#fef3c7" strokeWidth="0.5" fill="none" opacity="0.15" />
      <path d="M225 122 Q220 127 225 132 Q220 137 225 142" stroke="#fef3c7" strokeWidth="0.5" fill="none" opacity="0.15" />
      {/* Creamy foam top */}
      <ellipse cx="200" cy="95" rx="35" ry="12" fill="#f5e6d3" opacity="0.4" />
      <ellipse cx="200" cy="93" rx="30" ry="8" fill="#fef3c7" opacity="0.3" />
      {/* Cloud wisps around glass */}
      <ellipse cx="145" cy="160" rx="20" ry="8" fill="#f5e6d3" opacity="0.06" />
      <ellipse cx="255" cy="140" rx="25" ry="10" fill="#f5e6d3" opacity="0.05" />
      <ellipse cx="140" cy="120" rx="18" ry="7" fill="#f5e6d3" opacity="0.04" />
      <ellipse cx="260" cy="180" rx="22" ry="8" fill="#f5e6d3" opacity="0.04" />
      {/* Tiny nitrogen bubbles */}
      <circle cx="185" cy="160" r="1" fill="#fef3c7" opacity="0.3" />
      <circle cx="195" cy="175" r="1.5" fill="#fef3c7" opacity="0.2" />
      <circle cx="210" cy="150" r="1" fill="#fef3c7" opacity="0.25" />
      <circle cx="205" cy="185" r="1.5" fill="#fef3c7" opacity="0.15" />
      <circle cx="180" cy="145" r="0.8" fill="#fef3c7" opacity="0.2" />
      <circle cx="215" cy="170" r="1.2" fill="#fef3c7" opacity="0.2" />
    </svg>
  );
}

export function TravelersFlaskSVG() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="300" fill="#1a1614" />
      <defs>
        <radialGradient id="tf-glow" cx="50%" cy="55%">
          <stop offset="0%" stopColor="#d97706" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#1a1614" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="tf-liquid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b45309" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#78350f" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#tf-glow)" />
      {/* Leather flask/canteen */}
      <ellipse cx="200" cy="235" rx="35" ry="6" fill="#2a2420" />
      {/* Flask body - rounded rectangle */}
      <rect x="155" y="90" width="90" height="140" rx="20" fill="#5c3d1e" stroke="#8B6914" strokeWidth="1.5" />
      {/* Leather texture lines */}
      <path d="M170 100 L170 220" stroke="#4a3218" strokeWidth="0.5" opacity="0.3" />
      <path d="M185 95 L185 225" stroke="#4a3218" strokeWidth="0.5" opacity="0.3" />
      <path d="M215 95 L215 225" stroke="#4a3218" strokeWidth="0.5" opacity="0.3" />
      <path d="M230 100 L230 220" stroke="#4a3218" strokeWidth="0.5" opacity="0.3" />
      {/* Flask neck */}
      <rect x="185" y="75" width="30" height="18" fill="#6b4c24" stroke="#8B6914" strokeWidth="1" rx="3" />
      {/* Cap */}
      <rect x="182" y="65" width="36" height="12" fill="#8B6914" rx="4" />
      <ellipse cx="200" cy="65" rx="18" ry="4" fill="#a07830" />
      {/* Strap */}
      <path d="M155 120 Q130 120 125 150 Q120 180 130 200 Q135 210 145 215" stroke="#8B6914" strokeWidth="3" fill="none" opacity="0.6" />
      {/* Strap buckle */}
      <rect x="123" y="155" width="12" height="8" fill="#c8a97e" rx="1" opacity="0.5" />
      {/* Honey drop accent */}
      <g transform="translate(255, 130)">
        <path d="M0 -8 Q5 -2 0 8 Q-5 -2 0 -8" fill="#f59e0b" opacity="0.3" />
      </g>
      {/* Amber glow */}
      <circle cx="200" cy="160" r="30" fill="#d97706" opacity="0.05" />
      {/* Travel compass motif */}
      <g transform="translate(200, 160)" opacity="0.15">
        <circle cx="0" cy="0" r="18" stroke="#c8a97e" strokeWidth="0.5" fill="none" />
        <line x1="0" y1="-18" x2="0" y2="18" stroke="#c8a97e" strokeWidth="0.3" />
        <line x1="-18" y1="0" x2="18" y2="0" stroke="#c8a97e" strokeWidth="0.3" />
        <path d="M0 -12 L3 0 L0 12 L-3 0 Z" fill="#c8a97e" opacity="0.5" />
      </g>
    </svg>
  );
}

/* ── SEASONAL ARTIFACTS ── */

export function WintersSolsticeSVG() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="300" fill="#1a1614" />
      <defs>
        <radialGradient id="ws-glow" cx="50%" cy="55%">
          <stop offset="0%" stopColor="#92400e" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#1a1614" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill="url(#ws-glow)" />
      {/* Goblet/chalice */}
      <path d="M175 220 L165 235 L235 235 L225 220" fill="#3d3530" stroke="#c8a97e" strokeWidth="0.8" />
      <rect x="190" y="190" width="20" height="30" fill="#3d3530" stroke="#c8a97e" strokeWidth="0.5" />
      <path d="M150 140 C150 140 155 190 200 190 C245 190 250 140 250 140 L250 120 C250 110 240 105 200 105 C160 105 150 110 150 120 Z" fill="#4a2c17" stroke="#c8a97e" strokeWidth="1" />
      <ellipse cx="200" cy="105" rx="50" ry="14" fill="#3a1c0a" />
      {/* Hot chocolate surface */}
      <ellipse cx="200" cy="107" rx="45" ry="11" fill="#5c2d0e" opacity="0.6" />
      {/* Orange zest curl */}
      <path d="M215 100 Q225 95 230 102 Q228 108 220 105" stroke="#f97316" strokeWidth="1.5" fill="none" opacity="0.5" />
      {/* Cinnamon stick */}
      <rect x="180" y="95" width="35" height="4" rx="2" fill="#92400e" opacity="0.6" transform="rotate(-15, 197, 97)" />
      {/* Clove stars */}
      <g transform="translate(190, 103)" opacity="0.4">
        <circle cx="0" cy="0" r="2" fill="#78350f" />
        <line x1="0" y1="-4" x2="0" y2="4" stroke="#78350f" strokeWidth="0.5" />
        <line x1="-3.5" y1="-2" x2="3.5" y2="2" stroke="#78350f" strokeWidth="0.5" />
        <line x1="-3.5" y1="2" x2="3.5" y2="-2" stroke="#78350f" strokeWidth="0.5" />
      </g>
      {/* Steam */}
      <path d="M185 88 Q180 68 188 50" stroke="#c8a97e" strokeWidth="1" fill="none" opacity="0.15" strokeLinecap="round" />
      <path d="M210 85 Q215 65 208 48" stroke="#c8a97e" strokeWidth="1" fill="none" opacity="0.12" strokeLinecap="round" />
      {/* Snowflake accents */}
      <g transform="translate(100, 80)" opacity="0.12">
        <line x1="0" y1="-8" x2="0" y2="8" stroke="#e2e8f0" strokeWidth="0.8" />
        <line x1="-7" y1="-4" x2="7" y2="4" stroke="#e2e8f0" strokeWidth="0.8" />
        <line x1="-7" y1="4" x2="7" y2="-4" stroke="#e2e8f0" strokeWidth="0.8" />
      </g>
      <g transform="translate(310, 100)" opacity="0.08">
        <line x1="0" y1="-6" x2="0" y2="6" stroke="#e2e8f0" strokeWidth="0.6" />
        <line x1="-5" y1="-3" x2="5" y2="3" stroke="#e2e8f0" strokeWidth="0.6" />
        <line x1="-5" y1="3" x2="5" y2="-3" stroke="#e2e8f0" strokeWidth="0.6" />
      </g>
    </svg>
  );
}

export function FaeBlossomSVG() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="300" fill="#1a1614" />
      <defs>
        <radialGradient id="fb-glow" cx="50%" cy="55%">
          <stop offset="0%" stopColor="#ec4899" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#1a1614" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill="url(#fb-glow)" />
      {/* Elegant stemmed glass */}
      <path d="M195 220 L190 235 L210 235 L205 220" fill="#3d3530" stroke="#c8a97e" strokeWidth="0.5" />
      <rect x="195" y="185" width="10" height="35" fill="#3d3530" stroke="#c8a97e" strokeWidth="0.3" />
      <path d="M155 140 C155 140 158 185 200 185 C242 185 245 140 245 140 L245 120 C245 112 235 108 200 108 C165 108 155 112 155 120 Z" fill="#2a2218" stroke="#c8a97e" strokeWidth="0.8" opacity="0.9" />
      <ellipse cx="200" cy="108" rx="45" ry="12" fill="#fce7f3" opacity="0.12" />
      {/* Mint-pink liquid */}
      <ellipse cx="200" cy="110" rx="40" ry="9" fill="#fbcfe8" opacity="0.15" />
      {/* Cherry blossom petals floating */}
      <g transform="translate(185, 105) rotate(-10)">
        <path d="M0 0 Q4 -6 0 -10 Q-4 -6 0 0" fill="#f9a8d4" opacity="0.4" />
      </g>
      <g transform="translate(210, 108) rotate(15)">
        <path d="M0 0 Q3 -5 0 -8 Q-3 -5 0 0" fill="#fbcfe8" opacity="0.35" />
      </g>
      <g transform="translate(195, 102) rotate(5)">
        <path d="M0 0 Q3.5 -5.5 0 -9 Q-3.5 -5.5 0 0" fill="#f472b6" opacity="0.3" />
      </g>
      {/* Falling petals */}
      <g transform="translate(260, 90) rotate(45)">
        <path d="M0 0 Q3 -4 0 -7 Q-3 -4 0 0" fill="#f9a8d4" opacity="0.2" />
      </g>
      <g transform="translate(130, 120) rotate(-30)">
        <path d="M0 0 Q2.5 -4 0 -6 Q-2.5 -4 0 0" fill="#fbcfe8" opacity="0.15" />
      </g>
      <g transform="translate(280, 150) rotate(60)">
        <path d="M0 0 Q2 -3 0 -5 Q-2 -3 0 0" fill="#f9a8d4" opacity="0.12" />
      </g>
      {/* Mint leaf */}
      <g transform="translate(230, 100) rotate(30)">
        <path d="M0 0 Q6 -10 3 -18 Q-3 -10 0 0" fill="#86efac" opacity="0.25" />
        <line x1="1" y1="-2" x2="2" y2="-15" stroke="#4ade80" strokeWidth="0.3" />
      </g>
      {/* Sparkle dots */}
      <circle cx="120" cy="70" r="1.2" fill="#f9a8d4" opacity="0.2" />
      <circle cx="290" cy="85" r="1" fill="#fbcfe8" opacity="0.15" />
      <circle cx="100" cy="160" r="0.8" fill="#f9a8d4" opacity="0.12" />
    </svg>
  );
}

export function DesertMirageSVG() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="300" fill="#1a1614" />
      <defs>
        <radialGradient id="dm-glow" cx="50%" cy="55%">
          <stop offset="0%" stopColor="#d97706" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#1a1614" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="dm-liquid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#b45309" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#dm-glow)" />
      {/* Ornate middle-eastern glass */}
      <ellipse cx="200" cy="230" rx="35" ry="7" fill="#2a2420" />
      <path d="M170 110 C165 110 160 120 165 135 L175 220 Q175 230 200 230 Q225 230 225 220 L235 135 C240 120 235 110 230 110 L225 105 Q225 95 200 95 Q175 95 175 105 Z" fill="#3d2b1a" stroke="#c8a97e" strokeWidth="1" opacity="0.9" />
      {/* Geometric pattern on glass */}
      <path d="M180 140 L200 130 L220 140 L200 150 Z" stroke="#c8a97e" strokeWidth="0.4" fill="none" opacity="0.2" />
      <path d="M180 165 L200 155 L220 165 L200 175 Z" stroke="#c8a97e" strokeWidth="0.4" fill="none" opacity="0.2" />
      {/* Liquid */}
      <rect x="177" y="145" width="46" height="75" fill="url(#dm-liquid)" rx="5" opacity="0.5" />
      {/* Saffron threads */}
      <line x1="192" y1="155" x2="190" y2="170" stroke="#dc2626" strokeWidth="0.8" opacity="0.4" />
      <line x1="200" y1="152" x2="201" y2="168" stroke="#dc2626" strokeWidth="0.8" opacity="0.35" />
      <line x1="208" y1="155" x2="210" y2="172" stroke="#dc2626" strokeWidth="0.6" opacity="0.3" />
      {/* Lemon slice */}
      <g transform="translate(230, 105)">
        <circle cx="0" cy="0" r="12" fill="#fbbf24" opacity="0.2" stroke="#f59e0b" strokeWidth="0.5" />
        <line x1="-8" y1="0" x2="8" y2="0" stroke="#f59e0b" strokeWidth="0.3" opacity="0.3" />
        <line x1="0" y1="-8" x2="0" y2="8" stroke="#f59e0b" strokeWidth="0.3" opacity="0.3" />
        <line x1="-6" y1="-6" x2="6" y2="6" stroke="#f59e0b" strokeWidth="0.3" opacity="0.3" />
        <line x1="-6" y1="6" x2="6" y2="-6" stroke="#f59e0b" strokeWidth="0.3" opacity="0.3" />
      </g>
      {/* Desert sand dune silhouette */}
      <path d="M0 280 Q60 260 120 275 Q180 255 240 270 Q300 252 360 268 Q380 260 400 265 L400 300 L0 300 Z" fill="#92400e" opacity="0.06" />
      {/* Heat shimmer lines */}
      <path d="M100 50 Q110 55 100 60 Q110 65 100 70" stroke="#d97706" strokeWidth="0.3" fill="none" opacity="0.1" />
      <path d="M300 60 Q310 65 300 70 Q310 75 300 80" stroke="#d97706" strokeWidth="0.3" fill="none" opacity="0.08" />
    </svg>
  );
}

export function HarvestMoonSVG() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="400" height="300" fill="#1a1614" />
      <defs>
        <radialGradient id="hm-moon" cx="75%" cy="25%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#1a1614" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hm-latte" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5e6d3" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#92400e" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#hm-moon)" />
      {/* Harvest moon */}
      <circle cx="310" cy="60" r="28" fill="#f59e0b" opacity="0.08" />
      <circle cx="310" cy="60" r="20" fill="#fbbf24" opacity="0.1" />
      <circle cx="310" cy="60" r="12" fill="#fde68a" opacity="0.12" />
      {/* Mug - cozy autumn style */}
      <ellipse cx="200" cy="225" rx="50" ry="10" fill="#2a2420" />
      <path d="M150 175 C150 175 153 225 200 225 C247 225 250 175 250 175 L250 130 C250 118 238 112 200 112 C162 112 150 118 150 130 Z" fill="#5c3d1e" stroke="#c8a97e" strokeWidth="1" />
      <ellipse cx="200" cy="112" rx="50" ry="16" fill="#4a2c17" stroke="#c8a97e" strokeWidth="0.5" />
      {/* Pumpkin spice latte surface */}
      <ellipse cx="200" cy="114" rx="45" ry="13" fill="url(#hm-latte)" />
      {/* Latte art - leaf/pumpkin shape */}
      <path d="M200 107 Q192 112 195 118 Q198 122 200 118 Q202 122 205 118 Q208 112 200 107" stroke="#c8a97e" strokeWidth="0.5" fill="#c8a97e" fillOpacity="0.15" />
      {/* Handle */}
      <path d="M250 135 Q278 135 278 158 Q278 180 250 180" stroke="#c8a97e" strokeWidth="2.5" fill="none" />
      {/* Cinnamon dusting dots */}
      <circle cx="188" cy="112" r="0.8" fill="#92400e" opacity="0.3" />
      <circle cx="195" cy="116" r="0.5" fill="#92400e" opacity="0.25" />
      <circle cx="205" cy="110" r="0.6" fill="#92400e" opacity="0.3" />
      <circle cx="210" cy="115" r="0.7" fill="#92400e" opacity="0.2" />
      {/* Steam */}
      <path d="M185 95 Q180 75 188 55" stroke="#c8a97e" strokeWidth="1" fill="none" opacity="0.12" strokeLinecap="round" />
      <path d="M205 92 Q210 70 203 52" stroke="#c8a97e" strokeWidth="1" fill="none" opacity="0.1" strokeLinecap="round" />
      {/* Maple leaf accent */}
      <g transform="translate(120, 170) rotate(-20)" opacity="0.15">
        <path d="M0 0 L-5 -8 L-2 -7 L-8 -15 L-4 -13 L-3 -18 L0 -13 L3 -18 L4 -13 L8 -15 L2 -7 L5 -8 Z" fill="#c8a97e" />
        <line x1="0" y1="0" x2="0" y2="8" stroke="#c8a97e" strokeWidth="0.8" />
      </g>
      {/* Cardamom pods */}
      <g transform="translate(270, 190)" opacity="0.2">
        <ellipse cx="0" cy="0" rx="3" ry="6" fill="#78350f" />
        <line x1="0" y1="-6" x2="0" y2="-9" stroke="#78350f" strokeWidth="0.5" />
      </g>
    </svg>
  );
}

/* ── SVG Map for easy lookup ── */
export const drinkSVGMap: Record<string, () => JSX.Element> = {
  "Mystic Green": MysticGreenSVG,
  "Healer's Chamomile": HealersChamomileSVG,
  "Royal Grey": RoyalGreySVG,
  "Void Essence": VoidEssenceSVG,
  "Cloud Walker": CloudWalkerSVG,
  "Traveler's Flask": TravelersFlaskSVG,
  "Winter's Solstice": WintersSolsticeSVG,
  "Fae Blossom": FaeBlossomSVG,
  "Desert Mirage": DesertMirageSVG,
  "Harvest Moon": HarvestMoonSVG,
};
