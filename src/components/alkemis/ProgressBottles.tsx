"use client";

interface ProgressBottlesProps {
  currentStep: number; // 0-indexed: 0, 1, 2
}

type BottleState = "completed" | "current" | "upcoming";

function PotionBottle({ state }: { state: BottleState }) {
  const isCompleted = state === "completed";
  const isCurrent = state === "current";

  const bottleColor = isCompleted
    ? "#D4AF37"
    : isCurrent
    ? "#C6A87C"
    : "#4A3B32";
  const liquidColor = isCompleted
    ? "#D4AF37"
    : isCurrent
    ? "#C6A87C"
    : "none";
  const glowFilter = isCompleted
    ? "drop-shadow(0 0 6px rgba(212, 175, 55, 0.8))"
    : isCurrent
    ? "drop-shadow(0 0 4px rgba(198, 168, 124, 0.5))"
    : "none";

  // Fill level: completed=full (100%), current=half (50%), upcoming=empty
  const liquidHeight = isCompleted ? 22 : isCurrent ? 11 : 0;

  return (
    <svg
      width="32"
      height="48"
      viewBox="0 0 32 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: glowFilter, transition: "filter 0.4s ease" }}
    >
      {/* Cork / stopper */}
      <rect x="12" y="0" width="8" height="5" rx="1" fill={bottleColor} opacity="0.8" />
      {/* Bottle neck */}
      <rect x="13" y="5" width="6" height="6" fill={bottleColor} opacity="0.6" />
      {/* Bottle body outline */}
      <path
        d="M8 15 Q6 17 6 20 L6 40 Q6 44 10 44 L22 44 Q26 44 26 40 L26 20 Q26 17 24 15 Z"
        stroke={bottleColor}
        strokeWidth="1.5"
        fill="none"
        opacity="0.9"
      />
      {/* Liquid fill */}
      {liquidHeight > 0 && (
        <clipPath id={`clip-${state}`}>
          <path d="M8 15 Q6 17 6 20 L6 40 Q6 44 10 44 L22 44 Q26 44 26 40 L26 20 Q26 17 24 15 Z" />
        </clipPath>
      )}
      {liquidHeight > 0 && (
        <rect
          x="6"
          y={44 - liquidHeight}
          width="20"
          height={liquidHeight}
          fill={liquidColor}
          opacity="0.7"
          clipPath={`url(#clip-${state})`}
        />
      )}
      {/* Shine on bottle */}
      <line
        x1="10"
        y1="20"
        x2="10"
        y2="36"
        stroke="white"
        strokeWidth="1"
        opacity="0.2"
        strokeLinecap="round"
      />
      {/* Checkmark when completed */}
      {isCompleted && (
        <text
          x="16"
          y="34"
          textAnchor="middle"
          fontSize="10"
          fill="#2c1a0e"
          fontWeight="bold"
        >
          ✓
        </text>
      )}
    </svg>
  );
}

export default function ProgressBottles({ currentStep }: ProgressBottlesProps) {
  const stepLabels = ["Base", "Essence", "Vessel"];

  const getState = (index: number): BottleState => {
    if (index < currentStep) return "completed";
    if (index === currentStep) return "current";
    return "upcoming";
  };

  return (
    <div className="flex items-center justify-center gap-6 mb-8">
      {stepLabels.map((label, i) => (
        <div key={label} className="flex flex-col items-center gap-2">
          <PotionBottle state={getState(i)} />
          <span
            className="font-display text-xs uppercase tracking-widest transition-colors duration-300"
            style={{
              color:
                i < currentStep
                  ? "#D4AF37"
                  : i === currentStep
                  ? "#C6A87C"
                  : "#4A3B32",
            }}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
