"use client";

import { useState, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import OrderSummary from "@/components/checkout/OrderSummary";
import DeliveryForm from "@/components/checkout/DeliveryForm";
import ConfirmationSeal from "@/components/checkout/ConfirmationSeal";

type Step = 1 | 2 | 3;

function ShieldIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="28"
      height="32"
      viewBox="0 0 28 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M14 2L3 6v10c0 7.18 4.81 13.89 11 15.93C20.19 29.89 25 23.18 25 16V6L14 2z"
        fill={filled ? "#8b0000" : "none"}
        stroke={filled ? "#8b0000" : "rgba(245,230,200,0.4)"}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {filled && (
        <path
          d="M9 16l3.5 3.5L19 10"
          stroke="#f5e6c8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      )}
    </svg>
  );
}

function StepIndicator({ currentStep }: { currentStep: Step }) {
  const steps = [
    { label: "Order" },
    { label: "Delivery" },
    { label: "Dispatch" },
  ];

  return (
    <div className="flex items-center justify-center gap-6 mb-10">
      {steps.map((step, index) => {
        const stepNum = (index + 1) as Step;
        const isCompleted = stepNum < currentStep;
        const isActive = stepNum === currentStep;

        return (
          <div key={step.label} className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-1">
              <div
                style={{
                  opacity: isActive ? 1 : isCompleted ? 0.9 : 0.4,
                  filter: isActive ? "drop-shadow(0 0 8px rgba(139,0,0,0.6))" : "none",
                  transition: "all 0.3s",
                }}
              >
                <ShieldIcon filled={isCompleted || isActive} />
              </div>
              <span
                className="text-xs uppercase tracking-widest"
                style={{
                  fontFamily: "var(--font-cinzel)",
                  color: isActive
                    ? "#f5e6c8"
                    : isCompleted
                    ? "rgba(245,230,200,0.7)"
                    : "rgba(245,230,200,0.3)",
                  fontSize: "0.6rem",
                }}
              >
                {step.label}
              </span>
            </div>

            {index < steps.length - 1 && (
              <div
                className="w-8 h-px"
                style={{
                  background:
                    stepNum < currentStep
                      ? "rgba(139,0,0,0.6)"
                      : "rgba(245,230,200,0.15)",
                  transition: "background 0.4s",
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState<Step>(1);

  // Generate a stable random order reference
  const orderRef = useMemo(
    () => `#ARC-${Math.floor(1000 + Math.random() * 9000)}`,
    []
  );

  return (
    <>
      {/* Full-page dark wood background */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at center, #1a0f07 0%, #0d0703 100%)",
        }}
      />
      {/* Noise grain overlay (re-uses the global .noise-overlay pattern via inline style) */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
      />

      <div className="min-h-screen pt-24 pb-16 px-4">
        {/* Page heading */}
        <div className="text-center mb-8">
          <p
            className="text-xs uppercase tracking-widest mb-2"
            style={{ color: "rgba(198,168,124,0.6)", fontFamily: "var(--font-cinzel)" }}
          >
            Café Arcadia
          </p>
          <h1
            className="text-3xl sm:text-4xl font-bold"
            style={{
              fontFamily: "var(--font-cinzel)",
              background: "linear-gradient(to right, #C6A87C, #E5D3B3, #C6A87C)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Merchant&apos;s Desk
          </h1>
        </div>

        {/* Step indicator */}
        <StepIndicator currentStep={step} />

        {/* Empty cart guard — only show before step 3 (step 3 clears the cart itself) */}
        {items.length === 0 && step !== 3 ? (
          <div className="text-center py-16">
            <p
              className="text-lg mb-6"
              style={{ color: "rgba(245,230,200,0.6)", fontFamily: "var(--font-playfair)", fontStyle: "italic" }}
            >
              Your satchel is empty, traveller.
            </p>
            <Link
              href="/"
              className="inline-block py-3 px-8 rounded-full text-sm font-bold uppercase tracking-widest"
              style={{
                background: "#8b0000",
                color: "#f5e6c8",
                fontFamily: "var(--font-cinzel)",
              }}
            >
              ← Return to the Guild Hall
            </Link>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            {step === 1 && (
              <OrderSummary
                key="order-summary"
                items={items}
                totalPrice={totalPrice}
                onNext={() => setStep(2)}
              />
            )}

            {step === 2 && (
              <DeliveryForm
                key="delivery-form"
                onNext={() => setStep(3)}
                onBack={() => setStep(1)}
              />
            )}

            {step === 3 && (
              <ConfirmationSeal
                key="confirmation-seal"
                orderRef={orderRef}
                onClearCart={clearCart}
              />
            )}
          </AnimatePresence>
        )}
      </div>
    </>
  );
}
