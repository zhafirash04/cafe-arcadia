"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BaseId, EssenceId, VesselId, generateBrewName, BASE_PRICES, VESSEL_PRICES } from "@/lib/brewNameGenerator";
import { useCart } from "@/context/CartContext";
import ProgressBottles from "./ProgressBottles";
import StepBase from "./StepBase";
import StepEssence from "./StepEssence";
import StepVessel from "./StepVessel";
import BrewReveal from "./BrewReveal";
import { essences } from "./StepEssence";

export interface BrewSelection {
  base: BaseId | null;
  essences: EssenceId[];
  vessel: VesselId | null;
}

const slideVariants = {
  enterForward: { x: 60, opacity: 0 },
  enterBackward: { x: -60, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exitForward: { x: -60, opacity: 0 },
  exitBackward: { x: 60, opacity: 0 },
};

interface AlkemisBuilderProps {
  isHomepage?: boolean;
}

export default function AlkemisBuilder({ isHomepage = false }: AlkemisBuilderProps) {
  const { addItem } = useCart();

  const [step, setStep] = useState(0); // 0, 1, 2 = steps; 3 = reveal
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const [selection, setSelection] = useState<BrewSelection>({
    base: null,
    essences: [],
    vessel: null,
  });
  const [brewName, setBrewName] = useState<string>("");

  const goNext = useCallback(() => {
    setDirection("forward");
    setStep((s) => s + 1);
  }, []);

  const goBack = useCallback(() => {
    setDirection("backward");
    setStep((s) => s - 1);
  }, []);

  const handleForge = useCallback(() => {
    if (!selection.base || !selection.vessel) return;
    const name = generateBrewName(selection.base, selection.essences, selection.vessel);
    setBrewName(name);
    setDirection("forward");
    setStep(3);
  }, [selection]);

  const handleAddToCart = useCallback(() => {
    if (!selection.base || !selection.vessel) return;

    const basePrice = BASE_PRICES[selection.base];
    const essencePrice = selection.essences.reduce((sum, id) => {
      const e = essences.find((e) => e.id === id);
      return sum + (e?.price ?? 0);
    }, 0);
    const vesselPrice = VESSEL_PRICES[selection.vessel];
    const totalPrice = basePrice + essencePrice + vesselPrice;

    addItem({
      id: `brew-${crypto.randomUUID()}`,
      name: brewName,
      price: totalPrice,
      tag: "Custom Brew",
    });
  }, [selection, brewName, addItem]);

  const handleBrewAgain = useCallback(() => {
    setDirection("backward");
    setSelection({ base: null, essences: [], vessel: null });
    setBrewName("");
    setStep(0);
  }, []);

  const basePrice = selection.base ? BASE_PRICES[selection.base] : 0;

  const getEnterVariant = () =>
    direction === "forward" ? "enterForward" : "enterBackward";
  const getExitVariant = () =>
    direction === "forward" ? "exitForward" : "exitBackward";

  const isReveal = step === 3;

  return (
    <div
      className="relative w-full"
      style={{
        minHeight: isReveal ? "auto" : "auto",
        overflow: isReveal ? "hidden" : "visible",
      }}
    >
      {isReveal ? (
        /* Reveal screen takes full area */
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #120F0D 0%, #1C1917 100%)",
            minHeight: "500px",
          }}
        >
          <BrewReveal
            brewName={brewName}
            selectedBase={selection.base!}
            selectedEssences={selection.essences}
            selectedVessel={selection.vessel!}
            totalPrice={
              basePrice +
              selection.essences.reduce((sum, id) => {
                const e = essences.find((e) => e.id === id);
                return sum + (e?.price ?? 0);
              }, 0) +
              (selection.vessel ? VESSEL_PRICES[selection.vessel] : 0)
            }
            onAddToCart={handleAddToCart}
            onBrewAgain={handleBrewAgain}
            isHomepage={isHomepage}
          />
        </div>
      ) : (
        /* Step flow */
        <div
          className="rounded-2xl p-6 md:p-10"
          style={{
            background: "#f5e6c8",
            boxShadow:
              "inset 0 2px 12px rgba(44,26,14,0.15), 0 8px 40px rgba(0,0,0,0.3)",
            border: "1px solid #C6A87C40",
            color: "#2c1a0e",
          }}
        >
          {/* Progress */}
          <ProgressBottles currentStep={step} />

          {/* Step content with slide animation */}
          <div className="relative overflow-hidden" style={{ minHeight: "420px" }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={step}
                custom={direction}
                variants={slideVariants}
                initial={getEnterVariant()}
                animate="center"
                exit={getExitVariant()}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="w-full"
              >
                {step === 0 && (
                  <StepBase
                    selected={selection.base}
                    onSelect={(base) =>
                      setSelection((s) => ({ ...s, base }))
                    }
                    onNext={goNext}
                  />
                )}
                {step === 1 && (
                  <StepEssence
                    selected={selection.essences}
                    basePrice={basePrice}
                    onSelect={(ess) =>
                      setSelection((s) => ({ ...s, essences: ess }))
                    }
                    onNext={goNext}
                    onBack={goBack}
                  />
                )}
                {step === 2 && (
                  <StepVessel
                    selected={selection.vessel}
                    selectedBase={selection.base}
                    selectedEssences={selection.essences}
                    basePrice={basePrice}
                    onSelect={(vessel) =>
                      setSelection((s) => ({ ...s, vessel }))
                    }
                    onForge={handleForge}
                    onBack={goBack}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
}
