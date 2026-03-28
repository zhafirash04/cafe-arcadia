"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { GoogleGenerativeAI } from "@google/generative-ai";

/* ── Types ───────────────────────────────────────────────── */
type Answer = "A" | "B" | "C" | "D";
type BrewId =
  | "dragons-breath"
  | "golden-knight"
  | "mystics-essence"
  | "elven-morning-mist"
  | "healers-matcha";
type Phase = "intro" | "reading" | "divining" | "revelation";

/* ── Gemini Configuration ────────────────────────────────── */
const SYSTEM_PROMPT = `You are The Oracle of Café Arcadia, an ancient mystical entity who speaks in dramatic, poetic fantasy prose. You reveal the destined brew of those who seek your wisdom.

Based on the seeker's 5 answers, you must:
1. Choose ONE brew: Dragon's Breath, Mystic's Essence, Elven Morning Mist, or Healer's Matcha.
2. Write a destiny revelation (3-4 sentences) in oracle fantasy style, second-person ("Your soul carries...").
3. End with exactly: "Your destined brew: [brew name]."

Respond ONLY with the narration. No JSON, no preamble.`;

const brewNameToId: Record<string, BrewId> = {
  "dragon's breath": "dragons-breath",
  "golden knight": "golden-knight",
  "mystic's essence": "mystics-essence",
  "elven morning mist": "elven-morning-mist",
  "healer's matcha": "healers-matcha",
};

function parseBrewFromResponse(text: string): { brewId: BrewId; prophecy: string } {
  // Try to extract brew name from "Your destined brew: XYZ."
  const match = text.match(/your destined brew:\s*(.+?)\./i);
  let brewId: BrewId = "golden-knight"; // fallback

  if (match) {
    const rawName = match[1].trim().toLowerCase();
    brewId = brewNameToId[rawName] || "golden-knight";
  } else {
    // Fuzzy fallback: check if any brew name appears in the text
    for (const [name, id] of Object.entries(brewNameToId)) {
      if (text.toLowerCase().includes(name)) {
        brewId = id;
        break;
      }
    }
  }

  // Remove the "Your destined brew: ..." line from prophecy display
  const prophecy = text.replace(/your destined brew:\s*.+?\.?\s*$/i, "").trim();

  return { brewId, prophecy };
}

async function consultGemini(
  answers: Record<number, Answer>,
  questionsData: typeof questions
): Promise<{ brewId: BrewId; prophecy: string }> {
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  if (!apiKey) throw new Error("API key not configured");

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: SYSTEM_PROMPT,
  });

  const userPrompt = questionsData
    .map((q, i) => {
      const chosenOption = q.options.find((o) => o.key === answers[i]);
      return `Q${i + 1}: ${q.text}\nAnswer: ${chosenOption?.text || "No answer"}`;
    })
    .join("\n\n");

  const result = await model.generateContent(userPrompt);
  const responseText = result.response.text();
  return parseBrewFromResponse(responseText);
}


/* ── Quiz Data ───────────────────────────────────────────── */
const questions = [
  {
    id: 0,
    text: '"When darkness falls upon the realm, you are most likely to..."',
    options: [
      { key: "A" as Answer, text: "Light a fire and gather companions around it" },
      { key: "B" as Answer, text: "Retreat to your tower and study ancient maps alone" },
      { key: "C" as Answer, text: "Sharpen your blade in focused, silent preparation" },
      { key: "D" as Answer, text: "Seek the nearest tavern and let fate decide" },
    ],
  },
  {
    id: 1,
    text: '"A stranger offers you an unmarked vial. You..."',
    options: [
      { key: "A" as Answer, text: "Drink it without hesitation. Fortune favors the bold." },
      { key: "B" as Answer, text: "Examine it carefully before making any decision" },
      { key: "C" as Answer, text: "Ask the stranger their intentions first" },
      { key: "D" as Answer, text: "Pocket it for later. Knowledge is patience." },
    ],
  },
  {
    id: 2,
    text: '"Your greatest weapon in battle is..."',
    options: [
      { key: "A" as Answer, text: "Raw strength and relentless forward momentum" },
      { key: "B" as Answer, text: "Cunning, strategy, and the element of surprise" },
      { key: "C" as Answer, text: "Calm and precision — one perfect strike" },
      { key: "D" as Answer, text: "Adaptability. No two battles are the same." },
    ],
  },
  {
    id: 3,
    text: '"The realm is at peace. How do you spend your days?"',
    options: [
      { key: "A" as Answer, text: "Training. There is always another horizon to conquer." },
      { key: "B" as Answer, text: "Reading. The old texts hold secrets yet undiscovered." },
      { key: "C" as Answer, text: "Wandering. The road reveals what rooms cannot." },
      { key: "D" as Answer, text: "Creating. Art, craft, and beauty are their own magic." },
    ],
  },
  {
    id: 4,
    text: '"What do you seek at the bottom of every cup?"',
    options: [
      { key: "A" as Answer, text: "Power. Clarity. The will to push forward." },
      { key: "B" as Answer, text: "Warmth. Comfort. A moment of honest stillness." },
      { key: "C" as Answer, text: "Mystery. Something new in every sip." },
      { key: "D" as Answer, text: "Balance. Neither too much nor too little of anything." },
    ],
  },
];

/* ── Scoring Map ─────────────────────────────────────────── */
const scoreMap: Record<number, Record<Answer, BrewId>> = {
  0: {
    A: "elven-morning-mist",
    B: "healers-matcha",
    C: "golden-knight",
    D: "mystics-essence",
  },
  1: {
    A: "dragons-breath",
    B: "healers-matcha",
    C: "golden-knight",
    D: "mystics-essence",
  },
  2: {
    A: "dragons-breath",
    B: "mystics-essence",
    C: "golden-knight",
    D: "elven-morning-mist",
  },
  3: {
    A: "dragons-breath",
    B: "healers-matcha",
    C: "mystics-essence",
    D: "elven-morning-mist",
  },
  4: {
    A: "dragons-breath",
    B: "elven-morning-mist",
    C: "mystics-essence",
    D: "golden-knight",
  },
};

/* ── Brew Results ─────────────────────────────────────────── */
interface BrewResult {
  id: BrewId;
  name: string;
  tag: string;
  price: number;
  priceDisplay: string;
  image?: string;
  lore: string;
  prophecy: string;
  intensity: number;
}

const brewResults: Record<BrewId, BrewResult> = {
  "dragons-breath": {
    id: "dragons-breath",
    name: "Dragon's Breath",
    tag: "Dark Roast",
    price: 18,
    priceDisplay: "18 Gold Pieces",
    image: "/images/dark-roast.png",
    lore: "Forged in the furnace of a dragon's heart",
    prophecy:
      "The Oracle has spoken — your fate blazes with the fury of dragonfire. Bold, unyielding, and burning with an inner fire that none can extinguish. The Dragon's Breath dark roast has long awaited a spirit such as yours.",
    intensity: 3,
  },
  "golden-knight": {
    id: "golden-knight",
    name: "Golden Knight",
    tag: "Signature",
    price: 22,
    priceDisplay: "22 Gold Pieces",
    image: "/images/latte-art.png",
    lore: "A brew of noble purpose and balanced mastery",
    prophecy:
      "The stars align in noble formation — yours is a soul of balance and purposeful strength. You move with calculated grace, your blade drawn only when necessary. The Golden Knight, our signature brew, was forged for a champion of your caliber.",
    intensity: 2,
  },
  "mystics-essence": {
    id: "mystics-essence",
    name: "Mystic's Essence",
    tag: "Concentrate",
    price: 15,
    priceDisplay: "15 Gold Pieces",
    image: "/images/espresso-shot.png",
    lore: "A potent elixir for those who walk between worlds",
    prophecy:
      "The Oracle peers into shadow and starlight — and finds you there, shifting like smoke, impossible to contain. You are mystery itself. The Mystic's Essence, our most concentrated elixir, calls to wanderers who walk between worlds.",
    intensity: 4,
  },
  "elven-morning-mist": {
    id: "elven-morning-mist",
    name: "Elven Morning Mist",
    tag: "Elixir",
    price: 6,
    priceDisplay: "6 Gold Pieces",
    image: undefined,
    lore: "Steeped in ancient forest magic and morning light",
    prophecy:
      "The Oracle sees morning light through ancient boughs — gentle, radiant, and full of quiet magic. You are the warmth others seek, the creative spirit that transforms ordinary moments into legend. The Elven Morning Mist was crafted in your honor.",
    intensity: 1,
  },
  "healers-matcha": {
    id: "healers-matcha",
    name: "Healer's Matcha",
    tag: "Elixir",
    price: 7,
    priceDisplay: "7 Gold Pieces",
    image: undefined,
    lore: "Ancient wisdom in every ceremonial sip",
    prophecy:
      "The Oracle reads deep patience and wisdom in your fate — a soul who understands that true power lies in stillness. You are the keeper of ancient knowledge, the one who heals before the battle begins. The Healer's Matcha has always been your brew.",
    intensity: 1,
  },
};

/* ── Helper: Calculate Result ────────────────────────────── */
function calculateResult(answers: Record<number, Answer>): BrewId {
  const tally: Record<BrewId, number> = {
    "dragons-breath": 0,
    "golden-knight": 0,
    "mystics-essence": 0,
    "elven-morning-mist": 0,
    "healers-matcha": 0,
  };

  for (let i = 0; i < 5; i++) {
    if (answers[i] !== undefined) {
      tally[scoreMap[i][answers[i]]]++;
    }
  }

  const brewIds = Object.keys(tally) as BrewId[];
  return brewIds.reduce((a, b) => (tally[a] >= tally[b] ? a : b));
}

/* ── Oracle SVG Figure ───────────────────────────────────── */
function OracleSVG({
  phase,
  questionKey,
}: {
  phase: Phase;
  questionKey: number;
}) {
  const controls = useAnimation();
  const isRevelation = phase === "revelation";

  // Subtle bow animation when question changes
  useEffect(() => {
    if (phase !== "reading") return;
    controls.start({
      rotate: [0, -4, 0],
      transition: { duration: 0.6, ease: "easeInOut" },
    });
  }, [questionKey, phase, controls]);

  return (
    <motion.div
      className="relative w-full h-full flex items-end justify-center"
      animate={controls}
      style={{ transformOrigin: "50% 30%" }}
    >
      {/* Ambient glow beneath oracle */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full"
        animate={
          isRevelation
            ? {
                width: ["120px", "180px", "140px"],
                height: ["30px", "50px", "35px"],
                opacity: [0.3, 0.6, 0.45],
              }
            : {
                width: "100px",
                height: "25px",
                opacity: 0.2,
              }
        }
        transition={
          isRevelation
            ? { duration: 2, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0.8 }
        }
        style={{
          background:
            "radial-gradient(ellipse, rgba(198,168,124,0.6) 0%, transparent 70%)",
        }}
      />

      {/* Oracle SVG */}
      <svg
        viewBox="0 0 200 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[200px] h-auto drop-shadow-2xl"
      >
        <defs>
          <radialGradient id="oracleBodyGrad" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#C6A87C" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#C6A87C" stopOpacity="0.05" />
          </radialGradient>
          <radialGradient id="eyeGlowLeft" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="1" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="eyeGlowRight" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="1" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>
          <filter id="glowFilter">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Robe — lower flowing section */}
        <path
          d="M60 190 C48 250 28 320 18 415 L182 415 C172 320 152 250 140 190 Z"
          fill="url(#oracleBodyGrad)"
          stroke="#C6A87C"
          strokeOpacity="0.18"
          strokeWidth="1"
        />

        {/* Robe — inner darker fold */}
        <path
          d="M75 190 C68 250 64 320 62 415 L138 415 C136 320 132 250 125 190 Z"
          fill="#C6A87C"
          fillOpacity="0.07"
        />

        {/* Torso / chest area */}
        <path
          d="M62 108 C60 142 58 168 60 190 L140 190 C142 168 140 142 138 108 Z"
          fill="#C6A87C"
          fillOpacity="0.18"
          stroke="#C6A87C"
          strokeOpacity="0.22"
          strokeWidth="1"
        />

        {/* Left arm/sleeve */}
        <path
          d="M63 118 C50 140 34 165 26 200"
          stroke="#C6A87C"
          strokeOpacity="0.35"
          strokeWidth="22"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M63 118 C50 140 34 165 26 200"
          stroke="#C6A87C"
          strokeOpacity="0.15"
          strokeWidth="30"
          strokeLinecap="round"
          fill="none"
        />

        {/* Right arm/sleeve */}
        <path
          d="M137 118 C150 140 166 165 174 200"
          stroke="#C6A87C"
          strokeOpacity="0.35"
          strokeWidth="22"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M137 118 C150 140 166 165 174 200"
          stroke="#C6A87C"
          strokeOpacity="0.15"
          strokeWidth="30"
          strokeLinecap="round"
          fill="none"
        />

        {/* Hood outer shape */}
        <path
          d="M56 108 C52 72 62 46 100 36 C138 46 148 72 144 108 Z"
          fill="#C6A87C"
          fillOpacity="0.22"
          stroke="#C6A87C"
          strokeOpacity="0.28"
          strokeWidth="1"
        />

        {/* Hood inner fold lines */}
        <path
          d="M70 108 C68 82 74 60 100 50 C126 60 132 82 130 108"
          fill="none"
          stroke="#C6A87C"
          strokeOpacity="0.12"
          strokeWidth="1"
        />

        {/* Face shadow beneath hood */}
        <ellipse
          cx="100"
          cy="80"
          rx="24"
          ry="30"
          fill="#120F0D"
          fillOpacity="0.88"
        />

        {/* Left eye glow */}
        <circle cx="89" cy="74" r="5" fill="url(#eyeGlowLeft)" />
        <motion.g
          initial={{ opacity: 0.85, scale: 1 }}
          animate={
            isRevelation
              ? { opacity: [0.9, 1, 0.9], scale: [1, 1.35, 1] }
              : { opacity: 0.85, scale: 1 }
          }
          transition={
            isRevelation
              ? { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.3 }
          }
          style={{ transformOrigin: "89px 74px" }}
        >
          <circle cx="89" cy="74" r="2.5" fill="#D4AF37" filter="url(#glowFilter)" />
        </motion.g>

        {/* Right eye glow */}
        <circle cx="111" cy="74" r="5" fill="url(#eyeGlowRight)" />
        <motion.g
          initial={{ opacity: 0.85, scale: 1 }}
          animate={
            isRevelation
              ? { opacity: [0.9, 1, 0.9], scale: [1, 1.35, 1] }
              : { opacity: 0.85, scale: 1 }
          }
          transition={
            isRevelation
              ? {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }
              : { duration: 0.3 }
          }
          style={{ transformOrigin: "111px 74px" }}
        >
          <circle cx="111" cy="74" r="2.5" fill="#D4AF37" filter="url(#glowFilter)" />
        </motion.g>

        {/* Staff */}
        <line
          x1="173"
          y1="205"
          x2="182"
          y2="415"
          stroke="#C6A87C"
          strokeOpacity="0.45"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Staff orb outer glow */}
        <motion.g
          initial={{ scale: 1, opacity: 0.15 }}
          animate={
            isRevelation
              ? { scale: [1, 1.4, 1.05], opacity: [0.15, 0.35, 0.18] }
              : { scale: 1, opacity: 0.15 }
          }
          transition={
            isRevelation
              ? { duration: 2, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.3 }
          }
          style={{ transformOrigin: "173px 198px" }}
        >
          <circle cx="173" cy="198" r="11" fill="#D4AF37" />
        </motion.g>
        <motion.g
          initial={{ scale: 1, opacity: 0.8 }}
          animate={
            isRevelation
              ? { scale: [1, 1.25, 1], opacity: [0.8, 1, 0.8] }
              : { scale: 1, opacity: 0.8 }
          }
          transition={
            isRevelation
              ? { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.3 }
          }
          style={{ transformOrigin: "173px 198px" }}
        >
          <circle cx="173" cy="198" r="6" fill="#D4AF37" />
        </motion.g>
        <circle cx="173" cy="198" r="3" fill="#D4AF37" />

        {/* Floating mystical particles */}
        {[
          { cx: 36, cy: 155, r: 1.5, opacity: 0.5, delay: 0 },
          { cx: 22, cy: 230, r: 1, opacity: 0.35, delay: 0.5 },
          { cx: 162, cy: 135, r: 2, opacity: 0.45, delay: 0.8 },
          { cx: 178, cy: 260, r: 1.5, opacity: 0.3, delay: 1.2 },
          { cx: 30, cy: 305, r: 1, opacity: 0.4, delay: 0.3 },
          { cx: 168, cy: 340, r: 1.2, opacity: 0.25, delay: 1.6 },
          { cx: 44, cy: 380, r: 0.8, opacity: 0.2, delay: 0.7 },
        ].map((p, i) => (
          <motion.g
            key={i}
            initial={{ opacity: p.opacity, y: 0 }}
            animate={{
              opacity: [p.opacity, p.opacity * 0.3, p.opacity],
              y: [0, -6, 0],
            }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          >
            <circle cx={p.cx} cy={p.cy} r={p.r} fill="#D4AF37" />
          </motion.g>
        ))}
      </svg>
    </motion.div>
  );
}

/* ── Rune Stone Progress ─────────────────────────────────── */
function RuneStones({
  total,
  current,
  answeredCount,
}: {
  total: number;
  current: number;
  answeredCount: number;
}) {
  return (
    <div className="flex items-center justify-center gap-3 mb-10">
      {Array.from({ length: total }).map((_, i) => {
        const isAnswered = i < answeredCount;
        const isCurrent = i === current;
        const isUpcoming = i > current;

        return (
          <motion.div
            key={i}
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            {/* Rune diamond shape */}
            <motion.svg
              viewBox="0 0 28 28"
              className="w-7 h-7"
              initial={{ filter: "drop-shadow(0 0 0px rgba(198,168,124,0))" }}
              animate={
                isCurrent
                  ? {
                      filter: [
                        "drop-shadow(0 0 4px rgba(198,168,124,0.8))",
                        "drop-shadow(0 0 8px rgba(198,168,124,1))",
                        "drop-shadow(0 0 4px rgba(198,168,124,0.8))",
                      ],
                    }
                  : { filter: "drop-shadow(0 0 0px rgba(198,168,124,0))" }
              }
              transition={
                isCurrent ? { duration: 1.2, repeat: Infinity } : { duration: 0.3 }
              }
            >
              {/* Diamond */}
              <path
                d="M14 2 L26 14 L14 26 L2 14 Z"
                fill={
                  isAnswered
                    ? "rgba(198,168,124,0.85)"
                    : isCurrent
                    ? "rgba(198,168,124,0.3)"
                    : "rgba(198,168,124,0.08)"
                }
                stroke={
                  isAnswered
                    ? "#C6A87C"
                    : isCurrent
                    ? "#C6A87C"
                    : "rgba(198,168,124,0.25)"
                }
                strokeWidth="1.5"
              />
              {/* Inner rune mark — answered */}
              {isAnswered && (
                <path
                  d="M14 8 L14 20 M9 13 L19 13"
                  stroke="#120F0D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              )}
              {/* Current rune pulsing inner dot */}
              {isCurrent && (
                <motion.g
                  initial={{ opacity: 0.8, scale: 1 }}
                  animate={{ opacity: [0.8, 1, 0.8], scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                  style={{ transformOrigin: "14px 14px" }}
                >
                  <circle cx="14" cy="14" r="3" fill="#C6A87C" />
                </motion.g>
              )}
              {/* Upcoming: just a tiny center dot */}
              {isUpcoming && (
                <circle cx="14" cy="14" r="2" fill="rgba(198,168,124,0.2)" />
              )}
            </motion.svg>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ── Question Card ───────────────────────────────────────── */
function QuestionCard({
  question,
  index,
  onAnswer,
}: {
  question: (typeof questions)[0];
  index: number;
  onAnswer: (answer: Answer) => void;
}) {
  const [hoveredOption, setHoveredOption] = useState<Answer | null>(null);

  return (
    <div>
      {/* Question number label */}
      <p className="text-primary font-display font-bold tracking-[0.3em] text-xs uppercase mb-4 text-center">
        Scroll {index + 1} of 5
      </p>

      {/* Question text */}
      <p className="font-serif italic text-gray-200 text-xl md:text-2xl text-center mb-10 leading-relaxed">
        {question.text}
      </p>

      {/* Answer options */}
      <div className="grid grid-cols-1 gap-3">
        {question.options.map((option, i) => (
          <motion.button
            key={option.key}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.07, duration: 0.35 }}
            onClick={() => onAnswer(option.key)}
            onMouseEnter={() => setHoveredOption(option.key)}
            onMouseLeave={() => setHoveredOption(null)}
            className="group relative w-full text-left px-6 py-4 rounded-xl border transition-all duration-200 overflow-hidden"
            style={{
              borderColor:
                hoveredOption === option.key
                  ? "rgba(198,168,124,0.6)"
                  : "rgba(198,168,124,0.18)",
              background:
                hoveredOption === option.key
                  ? "rgba(198,168,124,0.1)"
                  : "rgba(28,25,23,0.7)",
            }}
          >
            {/* Option letter badge */}
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-primary/40 text-primary font-display font-bold text-xs mr-4 flex-shrink-0 group-hover:bg-primary group-hover:text-bg-dark transition-all duration-200">
              {option.key}
            </span>
            <span className="font-body text-gray-300 text-sm md:text-base group-hover:text-white transition-colors">
              {option.text}
            </span>

            {/* Hover shimmer effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={false}
              animate={
                hoveredOption === option.key
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
              transition={{ duration: 0.2 }}
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(198,168,124,0.06), transparent)",
              }}
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

/* ── Brew Revelation ─────────────────────────────────────── */
function BrewRevelation({
  brew,
  aiProphecy,
  onAddToCart,
  onRetry,
  added,
}: {
  brew: BrewResult;
  aiProphecy?: string;
  onAddToCart: () => void;
  onRetry: () => void;
  added: boolean;
}) {
  return (
    <div className="text-center">
      {/* Oracle declaration */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-primary font-display font-bold tracking-[0.3em] text-xs uppercase mb-6"
      >
        The Oracle Has Spoken
      </motion.p>

      {/* "Your Destined Brew Is:" */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="font-serif italic text-gray-400 text-base mb-3"
      >
        Your destined brew is...
      </motion.p>

      {/* Brew name — dramatic reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
        className="mb-2"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
          {brew.name}
        </h2>
      </motion.div>

      {/* Tag */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="flex items-center justify-center gap-3 mb-8"
      >
        <span className="px-4 py-1 bg-bg-dark text-primary border border-primary/30 rounded-full font-display text-xs uppercase tracking-widest">
          {brew.tag}
        </span>
        <span className="text-primary font-display font-bold text-sm">
          {brew.priceDisplay}
        </span>
      </motion.div>

      {/* Lore tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="font-serif italic text-gray-500 text-sm mb-6"
      >
        {brew.lore}
      </motion.p>

      {/* Intensity orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="flex items-center justify-center gap-2 mb-8"
      >
        <span className="text-gray-500 font-display text-xs uppercase tracking-widest mr-2">
          Intensity
        </span>
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full border ${
              i < brew.intensity
                ? "bg-primary border-primary"
                : "bg-transparent border-primary/25"
            }`}
          />
        ))}
      </motion.div>

      {/* Decorative divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="flex items-center justify-center gap-4 mb-8"
      >
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <svg
          className="w-4 h-4 text-primary"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2 L13.5 8.5 L20 7 L15.5 12 L20 17 L13.5 15.5 L12 22 L10.5 15.5 L4 17 L8.5 12 L4 7 L10.5 8.5 Z" />
        </svg>
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
      </motion.div>

      {/* Prophecy text */}
      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="font-serif italic text-gray-300 text-base md:text-lg leading-relaxed max-w-lg mx-auto mb-10 p-6 bg-surface-dark/60 rounded-2xl border border-primary/10"
      >
        &ldquo;{aiProphecy || brew.prophecy}&rdquo;
      </motion.blockquote>

      {/* Action buttons */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onAddToCart}
          disabled={added}
          className="px-8 py-4 bg-primary text-bg-dark font-display font-bold uppercase tracking-wider rounded-full hover:bg-white hover:text-accent-brown transition-all shadow-lg disabled:opacity-70 disabled:cursor-default"
        >
          {added ? "✦ Fate Accepted" : "Accept Your Fate"}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onRetry}
          className="px-8 py-4 border border-primary/30 text-primary font-display font-bold uppercase tracking-wider rounded-full hover:border-primary/60 hover:bg-primary/5 transition-all"
        >
          Defy the Oracle
        </motion.button>
      </motion.div>

      {/* View brew in codex link */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
        className="mt-6 text-xs text-gray-500"
      >
        <Link
          href="/codex"
          className="hover:text-primary transition-colors underline underline-offset-2"
        >
          Browse all legendary brews in The Codex →
        </Link>
      </motion.p>
    </div>
  );
}

/* ── Intro Screen ────────────────────────────────────────── */
function IntroScreen({ onBegin }: { onBegin: () => void }) {
  return (
    <div className="text-center">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-primary font-display font-bold tracking-[0.3em] text-xs uppercase mb-4"
      >
        The Oracle Awaits
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="font-display text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
      >
        What Is Your
        <br />
        <span className="text-gradient-gold">Destined Brew?</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="font-serif italic text-gray-400 text-lg max-w-md mx-auto mb-10 leading-relaxed"
      >
        The ancient Oracle reads the threads of fate and reveals which Café
        Arcadia brew has been waiting for you since the dawn of the realm.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex items-center justify-center gap-4 mb-10 opacity-60"
      >
        <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <span className="font-serif italic text-primary text-sm">
          5 Questions · Your Fate Awaits
        </span>
        <div className="h-px w-12 bg-gradient-to-r from-transparent via-primary to-transparent" />
      </motion.div>

      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.4 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={onBegin}
        className="px-10 py-4 bg-primary text-bg-dark font-display font-bold uppercase tracking-wider rounded-full hover:bg-white hover:text-accent-brown transition-all shadow-lg text-sm"
      >
        Consult the Oracle
      </motion.button>
    </div>
  );
}

/* ── Divining Screen (Loading State) ─────────────────────── */
function DiviningScreen() {
  return (
    <div className="text-center">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-primary font-display font-bold tracking-[0.3em] text-xs uppercase mb-6"
      >
        The Oracle Is Reading Your Fate
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="font-display text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight"
      >
        Divining the Scrolls...
      </motion.h2>

      {/* Animated rune circles */}
      <div className="flex items-center justify-center gap-3 mb-10">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-4 h-4 rounded-full border-2 border-primary"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
              backgroundColor: [
                "rgba(198,168,124,0)",
                "rgba(198,168,124,0.6)",
                "rgba(198,168,124,0)",
              ],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="font-serif italic text-gray-500 text-base max-w-sm mx-auto"
      >
        The ancient one peers through the mist of ages, reading the threads of
        your destiny...
      </motion.p>
    </div>
  );
}

/* ── Error Screen ────────────────────────────────────────── */
function ErrorScreen({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="text-center">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-primary font-display font-bold tracking-[0.3em] text-xs uppercase mb-6"
      >
        The Mists Are Unclear
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-display text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight"
      >
        The Oracle Cannot See
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="font-serif italic text-gray-400 text-lg max-w-md mx-auto mb-10 leading-relaxed"
      >
        A dark force clouds the Oracle&apos;s vision. The threads of fate are
        tangled beyond mortal comprehension. Seek the Oracle once more when the
        stars realign.
      </motion.p>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={onRetry}
        className="px-10 py-4 bg-primary text-bg-dark font-display font-bold uppercase tracking-wider rounded-full hover:bg-white hover:text-accent-brown transition-all shadow-lg text-sm"
      >
        Try Again
      </motion.button>
    </div>
  );
}

/* ── Main Component ──────────────────────────────────────── */
export default function OracleQuiz() {
  const { addItem } = useCart();
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [result, setResult] = useState<BrewId | null>(null);
  const [questionKey, setQuestionKey] = useState(0);
  const [added, setAdded] = useState(false);
  const [aiProphecy, setAiProphecy] = useState<string | undefined>(undefined);
  const [hasError, setHasError] = useState(false);

  const handleBegin = () => {
    setPhase("reading");
  };

  const callGeminiAndReveal = useCallback(
    async (allAnswers: Record<number, Answer>) => {
      setPhase("divining");
      setHasError(false);

      try {
        const { brewId, prophecy } = await consultGemini(allAnswers, questions);
        setResult(brewId);
        setAiProphecy(prophecy);
        setPhase("revelation");
      } catch (err) {
        console.error("Gemini API error:", err);
        // Fallback: use local scoring
        const fallbackId = calculateResult(allAnswers);
        setResult(fallbackId);
        setAiProphecy(undefined);
        setHasError(true);
        setPhase("revelation");
      }
    },
    []
  );

  const handleAnswer = (answer: Answer) => {
    const newAnswers = { ...answers, [currentQuestion]: answer };
    setAnswers(newAnswers);

    if (currentQuestion < 4) {
      setQuestionKey((k) => k + 1);
      setCurrentQuestion((q) => q + 1);
    } else {
      // Final question answered — consult Gemini
      callGeminiAndReveal(newAnswers);
    }
  };

  const handleAddToCart = () => {
    if (!result) return;
    const brew = brewResults[result];
    addItem({
      id: brew.id,
      name: brew.name,
      price: brew.price,
      image: brew.image,
      tag: brew.tag,
    });
    setAdded(true);
  };

  const handleRetry = () => {
    setPhase("intro");
    setCurrentQuestion(0);
    setAnswers({});
    setResult(null);
    setQuestionKey(0);
    setAdded(false);
    setAiProphecy(undefined);
    setHasError(false);
  };

  return (
    <main className="min-h-screen bg-bg-dark relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C6A87C' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient light blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[140px] opacity-25 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-[120px] opacity-20 pointer-events-none" />
      {(phase === "revelation" || phase === "divining") && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px] pointer-events-none"
        />
      )}

      {/* Main layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10">
        <div className="flex gap-8 lg:gap-16 items-start">
          {/* ── Quiz content (left/center) ── */}
          <div className="flex-1 min-w-0">
            {/* Page label */}
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 text-gray-600 font-display text-xs uppercase tracking-[0.3em]">
                <svg
                  className="w-3 h-3 text-primary"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2 L13.5 8.5 L20 7 L15.5 12 L20 17 L13.5 15.5 L12 22 L10.5 15.5 L4 17 L8.5 12 L4 7 L10.5 8.5 Z" />
                </svg>
                Café Arcadia Oracle
                <svg
                  className="w-3 h-3 text-primary"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2 L13.5 8.5 L20 7 L15.5 12 L20 17 L13.5 15.5 L12 22 L10.5 15.5 L4 17 L8.5 12 L4 7 L10.5 8.5 Z" />
                </svg>
              </span>
            </div>

            {/* Rune progress (shown during reading) */}
            {phase === "reading" && (
              <RuneStones
                total={5}
                current={currentQuestion}
                answeredCount={Object.keys(answers).length}
              />
            )}

            {/* Content: Intro / Question / Divining / Revelation */}
            <AnimatePresence mode="wait">
              {phase === "intro" && (
                <motion.div
                  key="intro"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  <IntroScreen onBegin={handleBegin} />
                </motion.div>
              )}

              {phase === "reading" && (
                <motion.div
                  key={`question-${questionKey}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <QuestionCard
                    question={questions[currentQuestion]}
                    index={currentQuestion}
                    onAnswer={handleAnswer}
                  />
                </motion.div>
              )}

              {phase === "divining" && (
                <motion.div
                  key="divining"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <DiviningScreen />
                </motion.div>
              )}

              {phase === "revelation" && hasError && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <ErrorScreen onRetry={handleRetry} />
                </motion.div>
              )}

              {phase === "revelation" && result && !hasError && (
                <motion.div
                  key="revelation"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <BrewRevelation
                    brew={brewResults[result]}
                    aiProphecy={aiProphecy}
                    onAddToCart={handleAddToCart}
                    onRetry={handleRetry}
                    added={added}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Oracle figure (right side, desktop only) ── */}
          <div className="hidden lg:flex w-56 xl:w-64 flex-shrink-0 sticky top-32 h-[480px] items-end">
            <OracleSVG phase={phase === "divining" ? "revelation" : phase} questionKey={questionKey} />
          </div>
        </div>
      </div>
    </main>
  );
}

