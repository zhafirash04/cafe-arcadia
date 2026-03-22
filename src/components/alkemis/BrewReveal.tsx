"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BaseId, EssenceId, VesselId } from "@/lib/brewNameGenerator";
import { essences } from "./StepEssence";
import { useRouter } from "next/navigation";

interface BrewRevealProps {
  brewName: string;
  selectedBase: BaseId;
  selectedEssences: EssenceId[];
  selectedVessel: VesselId;
  totalPrice: number;
  onAddToCart: () => void;
  onBrewAgain: () => void;
  isHomepage?: boolean;
}

function getBaseName(id: BaseId): string {
  const map: Record<BaseId, string> = {
    espresso: "Espresso Void",
    cold_brew: "Cold Brew Elixir",
    potion_water: "Potion Water",
  };
  return map[id];
}

function getVesselName(id: VesselId): string {
  const map: Record<VesselId, string> = {
    chalice: "The Chalice",
    wooden_mug: "Wooden Mug",
    travel_flask: "Travel Flask",
  };
  return map[id];
}

function PotionRiseIcon() {
  return (
    <svg
      width="80"
      height="120"
      viewBox="0 0 80 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: "drop-shadow(0 0 16px rgba(212, 175, 55, 0.8))" }}
    >
      {/* Cork */}
      <rect x="30" y="4" width="20" height="12" rx="3" fill="#D4AF37" opacity="0.9" />
      {/* Neck */}
      <rect x="33" y="16" width="14" height="14" fill="#C6A87C" opacity="0.8" />
      {/* Bottle body */}
      <path
        d="M20 38 Q14 42 14 50 L14 96 Q14 108 26 108 L54 108 Q66 108 66 96 L66 50 Q66 42 60 38 Z"
        stroke="#D4AF37"
        strokeWidth="2"
        fill="none"
      />
      {/* Liquid inside */}
      <clipPath id="bottle-clip">
        <path d="M20 38 Q14 42 14 50 L14 96 Q14 108 26 108 L54 108 Q66 108 66 96 L66 50 Q66 42 60 38 Z" />
      </clipPath>
      <rect x="14" y="58" width="52" height="50" fill="#C6A87C" opacity="0.6" clipPath="url(#bottle-clip)" />
      <rect x="14" y="58" width="52" height="8" fill="#D4AF37" opacity="0.4" clipPath="url(#bottle-clip)" />
      {/* Shine */}
      <line x1="24" y1="52" x2="24" y2="90" stroke="white" strokeWidth="3" opacity="0.2" strokeLinecap="round" />
      {/* Stars / sparkle around */}
      <path d="M72 30 L74 34 L78 34 L75 37 L76 41 L72 38 L68 41 L69 37 L66 34 L70 34 Z"
        fill="#D4AF37" opacity="0.6" />
      <path d="M8 60 L9 63 L12 63 L10 65 L11 68 L8 66 L5 68 L6 65 L4 63 L7 63 Z"
        fill="#D4AF37" opacity="0.5" />
    </svg>
  );
}

export default function BrewReveal({
  brewName,
  selectedBase,
  selectedEssences,
  selectedVessel,
  totalPrice,
  onAddToCart,
  onBrewAgain,
  isHomepage = false,
}: BrewRevealProps) {
  const router = useRouter();

  const essenceLabels =
    selectedEssences.length > 0
      ? selectedEssences
          .map((id) => essences.find((e) => e.id === id)?.label ?? id)
          .join(", ")
      : "None";

  const handleAddToCart = () => {
    onAddToCart();
    if (isHomepage) {
      // Stay on homepage, cart will open automatically
    } else {
      router.push("/");
    }
  };

  const characters = brewName.split("");

  return (
    <div className="relative">
      {/* Dark overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 bg-black z-10"
        style={{ pointerEvents: "none" }}
      />

      {/* Main reveal content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="relative z-20 flex flex-col items-center gap-6 py-8 px-4"
      >
        {/* Rising potion bottle */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 15, delay: 0.2 }}
        >
          <PotionRiseIcon />
        </motion.div>

        {/* Brew name - staggered character animation */}
        <motion.div
          className="text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="font-display text-xs uppercase tracking-widest mb-3" style={{ color: "#C6A87C" }}>
            ✦ Your Brew Is Forged ✦
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight" style={{ color: "#D4AF37" }}>
            <AnimatePresence>
              {characters.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.7 + i * 0.035,
                    duration: 0.3,
                  }}
                  style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : undefined }}
                >
                  {char}
                </motion.span>
              ))}
            </AnimatePresence>
          </h2>
        </motion.div>

        {/* Brew details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="w-full max-w-sm rounded-xl p-5"
          style={{
            background: "#f5e6c8",
            boxShadow: "inset 0 2px 8px rgba(44,26,14,0.12), 0 4px 20px rgba(0,0,0,0.3)",
            border: "1px solid #C6A87C60",
          }}
        >
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="font-body text-[#5a3e2b]">Base:</span>
              <span className="font-display font-bold text-[#2c1a0e]">{getBaseName(selectedBase)}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-body text-[#5a3e2b]">Essences:</span>
              <span className="font-display font-bold text-[#2c1a0e] text-right max-w-[60%]">{essenceLabels}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-body text-[#5a3e2b]">Vessel:</span>
              <span className="font-display font-bold text-[#2c1a0e]">{getVesselName(selectedVessel)}</span>
            </div>
            <div
              className="flex justify-between pt-2 mt-2"
              style={{ borderTop: "1px dashed #C6A87C60" }}
            >
              <span className="font-display font-bold text-[#2c1a0e]">Total:</span>
              <span className="font-display font-bold text-xl" style={{ color: "#8B4513" }}>
                {totalPrice} GP
              </span>
            </div>
          </div>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 w-full max-w-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.4 }}
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleAddToCart}
            className="flex-1 px-6 py-4 font-display font-bold text-sm uppercase tracking-widest rounded-full transition-all duration-300"
            style={{
              background: "#C6A87C",
              color: "#2c1a0e",
              boxShadow: "0 0 20px rgba(198, 168, 124, 0.5)",
            }}
          >
            Add to Cart — {totalPrice} GP
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onBrewAgain}
            className="flex-1 px-6 py-4 font-display font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300"
            style={{
              background: "transparent",
              border: "1px solid #C6A87C50",
              color: "#C6A87C",
            }}
          >
            Brew Again
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
