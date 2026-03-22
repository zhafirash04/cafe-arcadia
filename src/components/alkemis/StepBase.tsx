"use client";

import { motion } from "framer-motion";
import { BaseId } from "@/lib/brewNameGenerator";

interface BaseOption {
  id: BaseId;
  label: string;
  description: string;
  price: number;
}

const bases: BaseOption[] = [
  {
    id: "espresso",
    label: "Espresso Void",
    description: "Dark, concentrated, from the abyss",
    price: 10,
  },
  {
    id: "cold_brew",
    label: "Cold Brew Elixir",
    description: "Slow-steeped for 24 moons",
    price: 9,
  },
  {
    id: "potion_water",
    label: "Potion Water",
    description: "A mysterious arcane base, caffeine-free",
    price: 7,
  },
];

function EspressoIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4 L20 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 10 C14 14 10 18 10 24 C10 30 14 34 20 36 C26 34 30 30 30 24 C30 18 26 14 20 10Z"
        stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M15 20 C17 18 19 22 20 20 C21 18 23 22 25 20"
        stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M14 28 L26 28" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M12 16 C8 14 6 18 8 20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <path d="M28 16 C32 14 34 18 32 20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

function IceShardIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="4" x2="20" y2="36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="4" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="8" y1="8" x2="32" y2="32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="32" y1="8" x2="8" y2="32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="20" cy="20" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M20 4 L22 10 L20 8 L18 10 Z" fill="currentColor" opacity="0.7" />
      <path d="M20 36 L22 30 L20 32 L18 30 Z" fill="currentColor" opacity="0.7" />
      <path d="M4 20 L10 18 L8 20 L10 22 Z" fill="currentColor" opacity="0.7" />
      <path d="M36 20 L30 18 L32 20 L30 22 Z" fill="currentColor" opacity="0.7" />
    </svg>
  );
}

function SwirlIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 6 C28 6 34 12 34 20 C34 26 30 30 24 30 C18 30 14 26 14 20 C14 16 17 14 20 14 C23 14 25 16 25 20 C25 22 24 24 22 24"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"
      />
      <path d="M16 34 C10 32 6 26 6 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.8" />
      <path d="M20 8 L22 12 L20 10 L18 12 Z" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

const iconComponents: Record<BaseId, React.FC> = {
  espresso: EspressoIcon,
  cold_brew: IceShardIcon,
  potion_water: SwirlIcon,
};

interface StepBaseProps {
  selected: BaseId | null;
  onSelect: (id: BaseId) => void;
  onNext: () => void;
}

export default function StepBase({ selected, onSelect, onNext }: StepBaseProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-center mb-2">
        <span className="font-display text-xs uppercase tracking-widest text-secondary/70">
          Step 1 of 3
        </span>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-[#2c1a0e] mt-1">
          Choose Your Base
        </h3>
        <p className="font-serif italic text-[#5a3e2b] text-sm mt-1">
          Pilih Dasar Ramuan
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {bases.map((base) => {
          const IconComponent = iconComponents[base.id];
          const isSelected = selected === base.id;
          return (
            <motion.button
              key={base.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(base.id)}
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
              {/* Selected checkmark */}
              {isSelected && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: "#D4AF37" }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 5 L4 7 L8 3"
                      stroke="#2c1a0e"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
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
                  {base.label}
                </h4>
                <p className="text-xs leading-relaxed" style={{ color: "#9a7d6b" }}>
                  {base.description}
                </p>
              </div>

              <span
                className="font-display font-bold text-sm"
                style={{ color: isSelected ? "#D4AF37" : "#C6A87C" }}
              >
                {base.price} GP
              </span>
            </motion.button>
          );
        })}
      </div>

      <div className="flex justify-end pt-2">
        <motion.button
          whileHover={selected ? { scale: 1.03 } : {}}
          whileTap={selected ? { scale: 0.97 } : {}}
          onClick={onNext}
          disabled={!selected}
          className="px-8 py-3 font-display font-bold text-sm uppercase tracking-widest rounded-full transition-all duration-300"
          style={{
            background: selected ? "#C6A87C" : "#4A3B32",
            color: selected ? "#2c1a0e" : "#7a6a5a",
            boxShadow: selected ? "0 0 15px rgba(198, 168, 124, 0.4)" : "none",
            cursor: selected ? "pointer" : "not-allowed",
          }}
        >
          Add the Essence →
        </motion.button>
      </div>
    </div>
  );
}
