"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EssenceId } from "@/lib/brewNameGenerator";

interface EssenceOption {
  id: EssenceId;
  label: string;
  flavorNote: string;
  price: number;
}

const essences: EssenceOption[] = [
  { id: "dragon_breath", label: "Dragon's Breath Syrup", flavorNote: "Smoky, fiery, bold", price: 3 },
  { id: "elven_vanilla", label: "Elven Vanilla", flavorNote: "Soft, floral, ethereal", price: 2 },
  { id: "liquid_amber", label: "Liquid Amber Honey", flavorNote: "Sweet, golden, warm", price: 2 },
  { id: "shadow_mint", label: "Shadow Mint", flavorNote: "Cool, dark, mysterious", price: 3 },
  { id: "cursed_caramel", label: "Cursed Caramel", flavorNote: "Rich, slightly bitter", price: 2 },
];

interface StepEssenceProps {
  selected: EssenceId[];
  basePrice: number;
  onSelect: (essences: EssenceId[]) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function StepEssence({
  selected,
  basePrice,
  onSelect,
  onNext,
  onBack,
}: StepEssenceProps) {
  const [shakingId, setShakingId] = useState<EssenceId | null>(null);
  const [showLimit, setShowLimit] = useState(false);

  const totalEssencePrice = selected.reduce((sum, id) => {
    const e = essences.find((e) => e.id === id);
    return sum + (e?.price ?? 0);
  }, 0);
  const totalPrice = basePrice + totalEssencePrice;

  const handleToggle = useCallback(
    (id: EssenceId) => {
      if (selected.includes(id)) {
        onSelect(selected.filter((s) => s !== id));
        setShowLimit(false);
      } else if (selected.length < 2) {
        onSelect([...selected, id]);
        setShowLimit(false);
      } else {
        // Already 2 selected — shake the clicked pill
        setShakingId(id);
        setShowLimit(true);
        setTimeout(() => setShakingId(null), 500);
        setTimeout(() => setShowLimit(false), 3000);
      }
    },
    [selected, onSelect]
  );

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center mb-2">
        <span className="font-display text-xs uppercase tracking-widest text-secondary/70">
          Step 2 of 3
        </span>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-[#2c1a0e] mt-1">
          Add Your Essence
        </h3>
        <p className="font-serif italic text-[#5a3e2b] text-sm mt-1">
          Pilih Esensi — up to 2 may be bound
        </p>
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        {essences.map((essence) => {
          const isSelected = selected.includes(essence.id);
          const isShaking = shakingId === essence.id;

          return (
            <motion.button
              key={essence.id}
              animate={
                isShaking
                  ? { x: [-6, 6, -4, 4, -2, 2, 0] }
                  : { x: 0 }
              }
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleToggle(essence.id)}
              className="flex flex-col items-start px-5 py-3 rounded-full text-left transition-all duration-300 focus:outline-none min-h-[48px]"
              style={{
                background: isSelected
                  ? "linear-gradient(135deg, #8B4513 0%, #C6A87C 100%)"
                  : "transparent",
                border: isSelected
                  ? "2px solid #D4AF37"
                  : "2px solid #4A3B3280",
                boxShadow: isSelected
                  ? "0 0 12px rgba(198, 168, 124, 0.5)"
                  : "none",
                opacity: isSelected ? 1 : 0.75,
              }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="font-display font-bold text-xs uppercase tracking-wider"
                  style={{ color: isSelected ? "#fff8e8" : "#9a7d6b" }}
                >
                  {essence.label}
                </span>
                <span
                  className="font-display font-bold text-xs"
                  style={{ color: isSelected ? "#D4AF37" : "#C6A87C" }}
                >
                  +{essence.price} GP
                </span>
              </div>
              <span
                className="text-xs mt-0.5"
                style={{ color: isSelected ? "#EAE0D5cc" : "#7a6a5a" }}
              >
                {essence.flavorNote}
              </span>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {showLimit && (
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="text-center text-sm font-serif italic"
            style={{ color: "#8B4513" }}
          >
            An Alkemist may only bind two essences at once.
          </motion.p>
        )}
      </AnimatePresence>

      {/* Running price */}
      <div
        className="text-center py-3 rounded-xl"
        style={{ background: "#2c1a0e20", border: "1px solid #C6A87C30" }}
      >
        <span className="font-display text-sm text-[#5a3e2b]">
          Current total:{" "}
        </span>
        <span className="font-display font-bold text-lg" style={{ color: "#8B4513" }}>
          {totalPrice} GP
        </span>
      </div>

      <div className="flex justify-between pt-2">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onBack}
          className="px-6 py-3 font-display font-bold text-xs uppercase tracking-widest rounded-full transition-all duration-300"
          style={{
            background: "transparent",
            border: "1px solid #C6A87C50",
            color: "#8B5E3C",
          }}
        >
          ← Back
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={onNext}
          className="px-8 py-3 font-display font-bold text-sm uppercase tracking-widest rounded-full transition-all duration-300"
          style={{
            background: "#C6A87C",
            color: "#2c1a0e",
            boxShadow: "0 0 15px rgba(198, 168, 124, 0.4)",
          }}
        >
          Choose Your Vessel →
        </motion.button>
      </div>
    </div>
  );
}

export { essences };
export type { EssenceOption };
