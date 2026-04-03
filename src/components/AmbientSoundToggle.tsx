"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";
import { useAmbientSound } from "@/context/AmbientSoundContext";
import { useState } from "react";

export default function AmbientSoundToggle() {
  const { isPlaying, volume, toggleSound, setVolume } = useAmbientSound();
  const [showVolume, setShowVolume] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowVolume(true)}
      onMouseLeave={() => setShowVolume(false)}
    >
      {/* Main toggle button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={toggleSound}
        className={`w-10 h-10 flex items-center justify-center rounded-full border transition-all ${
          isPlaying
            ? "border-primary/50 bg-primary/10 text-primary"
            : "border-primary/20 hover:border-primary/50 text-primary"
        }`}
        aria-label={isPlaying ? "Mute tavern ambience" : "Play tavern ambience"}
        title={isPlaying ? "Tavern sounds active" : "Enable tavern ambience"}
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="playing"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative"
            >
              <Volume2 className="w-5 h-5" />
              {/* Sound wave animation */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full border border-primary"
              />
            </motion.div>
          ) : (
            <motion.div
              key="muted"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <VolumeX className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Volume slider (appears on hover) */}
      <AnimatePresence>
        {showVolume && isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full right-0 mt-2 p-3 bg-[#1a1614] border border-primary/20 rounded-lg shadow-xl z-50"
          >
            <div className="flex items-center gap-3 min-w-[140px]">
              <VolumeX className="w-3 h-3 text-primary/50" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="flex-1 h-1 bg-gray-700 rounded-full appearance-none cursor-pointer
                  [&::-webkit-slider-thumb]:appearance-none
                  [&::-webkit-slider-thumb]:w-3
                  [&::-webkit-slider-thumb]:h-3
                  [&::-webkit-slider-thumb]:bg-primary
                  [&::-webkit-slider-thumb]:rounded-full
                  [&::-webkit-slider-thumb]:cursor-pointer
                  [&::-webkit-slider-thumb]:transition-transform
                  [&::-webkit-slider-thumb]:hover:scale-125"
                aria-label="Volume"
              />
              <Volume2 className="w-3 h-3 text-primary/50" />
            </div>
            <p className="text-center text-[10px] text-gray-500 mt-2 font-display uppercase tracking-widest">
              Tavern Ambience
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
