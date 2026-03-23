"use client";

import { motion } from "framer-motion";
import { VesselId, BaseId, EssenceId, BASE_PRICES } from "@/lib/brewNameGenerator";
import { essences } from "./StepEssence";

interface VesselOption {
  id: VesselId;
  label: string;
  description: string;
  price: number;
}

const vessels: VesselOption[] = [
  { id: "chalice", label: "The Chalice", description: "A golden goblet for royalty", price: 4 },
  { id: "wooden_mug", label: "Wooden Mug", description: "Rustic. Earned. Battle-worn.", price: 2 },
  { id: "travel_flask", label: "Travel Flask", description: "For the wandering adventurer", price: 3 },
];

function ChaliceIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 6 L28 6 L24 18 Q24 26 20 28 Q16 26 16 18 Z"
        stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <path d="M20 28 L20 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 34 L26 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 18 Q13 18 11 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <path d="M24 18 Q27 18 29 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <path d="M15 10 Q20 14 25 10" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

function WoodenMugIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="12" width="20" height="22" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M28 18 Q34 18 34 24 Q34 30 28 30" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M8 16 L28 16" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="13" y1="18" x2="13" y2="30" stroke="currentColor" strokeWidth="0.8" opacity="0.3" strokeLinecap="round" />
      <line x1="17" y1="18" x2="17" y2="30" stroke="currentColor" strokeWidth="0.8" opacity="0.3" strokeLinecap="round" />
      <line x1="21" y1="18" x2="21" y2="30" stroke="currentColor" strokeWidth="0.8" opacity="0.3" strokeLinecap="round" />
      <path d="M11 8 Q14 6 17 8 Q20 10 23 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5" />
    </svg>
  );
}

function TravelFlaskIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="16" y="4" width="8" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M14 9 L26 9 L30 14 L30 34 Q30 38 20 38 Q10 38 10 34 L10 14 Z"
        stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      <path d="M10 20 L30 20" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <path d="M14 14 L20 14" stroke="currentColor" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
      <path d="M15 26 Q20 24 25 26" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5" />
      <circle cx="20" cy="30" r="2" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4" />
    </svg>
  );
}

const vesselIconComponents: Record<VesselId, React.FC> = {
  chalice: ChaliceIcon,
  wooden_mug: WoodenMugIcon,
  travel_flask: TravelFlaskIcon,
};

interface StepVesselProps {
  selected: VesselId | null;
  selectedBase: BaseId | null;
  selectedEssences: EssenceId[];
  basePrice: number;
  onSelect: (id: VesselId) => void;
  onForge: () => void;
  onBack: () => void;
}

function getBaseName(id: BaseId | null): string {
  if (!id) return "—";
  const map: Record<BaseId, string> = {
    espresso: "Espresso Void",
    cold_brew: "Cold Brew Elixir",
    potion_water: "Potion Water",
  };
  return map[id];
}

function getBasePrice(id: BaseId | null): number {
  return id ? BASE_PRICES[id] : 0;
}

export default function StepVessel({
  selected,
  selectedBase,
  selectedEssences,
  basePrice,
  onSelect,
  onForge,
  onBack,
}: StepVesselProps) {
  const essencePrice = selectedEssences.reduce((sum, id) => {
    const e = essences.find((e) => e.id === id);
    return sum + (e?.price ?? 0);
  }, 0);
  const vesselPrice = selected
    ? (vessels.find((v) => v.id === selected)?.price ?? 0)
    : 0;
  const totalPrice = basePrice + essencePrice + vesselPrice;

  const essenceLabels =
    selectedEssences.length > 0
      ? selectedEssences
          .map((id) => essences.find((e) => e.id === id)?.label ?? id)
          .join(", ")
      : "None";

  return (
    <div className="flex flex-col gap-6">
      <div className="text-center mb-2">
        <span className="font-display text-xs uppercase tracking-widest text-secondary/70">
          Step 3 of 3
        </span>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-[#2c1a0e] mt-1">
          Choose Your Vessel
        </h3>
        <p className="font-serif italic text-[#5a3e2b] text-sm mt-1">
          A vessel worthy of your creation
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {vessels.map((vessel) => {
          const IconComponent = vesselIconComponents[vessel.id];
          const isSelected = selected === vessel.id;
          return (
            <motion.button
              key={vessel.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(vessel.id)}
              className="relative flex flex-col items-center gap-3 p-6 rounded-xl text-center transition-all duration-300 min-h-[160px] focus:outline-none"
              style={{
                background: isSelected
                  ? "linear-gradient(135deg, #2c1a0e 0%, #3d2512 100%)"
                  : "#2c1a0e",
                border: isSelected
                  ? "2px solid #D4AF37"
                  : "2px solid #C6A87C40",
                boxShadow: isSelected
                  ? "0 0 20px rgba(212, 175, 55, 0.4), inset 0 0 20px rgba(212, 175, 55, 0.08)"
                  : "0 2px 8px rgba(0,0,0,0.3)",
              }}
            >
              {isSelected && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: "#D4AF37" }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5 L4 7 L8 3" stroke="#2c1a0e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
              )}

              <div
                className="transition-colors duration-300"
                style={{ color: isSelected ? "#D4AF37" : "#C6A87C" }}
              >
                <IconComponent />
              </div>

              <div>
                <h4
                  className="font-display font-bold text-sm uppercase tracking-wider mb-1 transition-colors duration-300"
                  style={{ color: isSelected ? "#D4AF37" : "#EAE0D5" }}
                >
                  {vessel.label}
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: "#9a7d6b" }}>
                  {vessel.description}
                </p>
              </div>

              <span
                className="font-display font-bold text-sm"
                style={{ color: isSelected ? "#D4AF37" : "#C6A87C" }}
              >
                +{vessel.price} GP
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Brew Preview */}
      <div
        className="rounded-xl p-5 mt-2"
        style={{
          background: "#f5e6c8",
          boxShadow: "inset 0 2px 8px rgba(44,26,14,0.12), 0 2px 12px rgba(0,0,0,0.15)",
          border: "1px solid #C6A87C50",
        }}
      >
        <h4 className="font-display font-bold text-sm uppercase tracking-widest text-[#2c1a0e] mb-3 text-center">
          ✦ Brew Preview ✦
        </h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="font-body text-[#5a3e2b]">Base:</span>
            <span className="font-display font-bold text-[#2c1a0e]">
              {getBaseName(selectedBase)} ({getBasePrice(selectedBase)} GP)
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-body text-[#5a3e2b]">Essences:</span>
            <span className="font-display font-bold text-[#2c1a0e] text-right max-w-[60%]">
              {essenceLabels}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-body text-[#5a3e2b]">Vessel:</span>
            <span className="font-display font-bold text-[#2c1a0e]">
              {selected
                ? `${vessels.find((v) => v.id === selected)?.label} (+${vesselPrice} GP)`
                : "—"}
            </span>
          </div>
          <div
            className="flex justify-between pt-2 mt-2"
            style={{ borderTop: "1px dashed #C6A87C60" }}
          >
            <span className="font-display font-bold text-[#2c1a0e]">Total:</span>
            <span className="font-display font-bold text-lg" style={{ color: "#8B4513" }}>
              {totalPrice} GP
            </span>
          </div>
          <div className="flex justify-between">
            <span className="font-body text-[#5a3e2b]">Brew Name:</span>
            <span className="font-display italic text-[#5a3e2b]">...</span>
          </div>
        </div>
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
          whileHover={selected ? { scale: 1.03 } : {}}
          whileTap={selected ? { scale: 0.97 } : {}}
          onClick={onForge}
          disabled={!selected}
          className="px-8 py-3 font-display font-bold text-sm uppercase tracking-widest rounded-full transition-all duration-300"
          style={{
            background: selected ? "#C6A87C" : "#4A3B32",
            color: selected ? "#2c1a0e" : "#7a6a5a",
            boxShadow: selected ? "0 0 15px rgba(198, 168, 124, 0.4)" : "none",
            cursor: selected ? "pointer" : "not-allowed",
          }}
        >
          Forge My Brew →
        </motion.button>
      </div>
    </div>
  );
}
