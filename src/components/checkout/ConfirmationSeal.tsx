"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface ConfirmationSealProps {
  orderRef: string;
  onClearCart: () => void;
}

export default function ConfirmationSeal({ orderRef, onClearCart }: ConfirmationSealProps) {
  const cleared = useRef(false);
  const onClearCartRef = useRef(onClearCart);
  onClearCartRef.current = onClearCart;

  useEffect(() => {
    if (!cleared.current) {
      cleared.current = true;
      // Small delay so the user sees the confirmation before cart is cleared
      const timer = setTimeout(() => {
        onClearCartRef.current();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-2xl mx-auto"
    >
      <div
        className="rounded-2xl shadow-2xl overflow-hidden text-center"
        style={{
          background: "#f5e6c8",
          boxShadow: "0 20px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.3)",
        }}
      >
        <div className="px-8 pt-10 pb-8">
          {/* Step label */}
          <p
            className="text-xs uppercase tracking-widest mb-6"
            style={{ color: "#8B5E3C", fontFamily: "var(--font-cinzel)" }}
          >
            Order Dispatched by Raven
          </p>

          {/* Wax Seal SVG — springs in */}
          <motion.div
            initial={{ scale: 0, rotate: -15 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 18,
              delay: 0.2,
            }}
            className="inline-block mb-6"
          >
            {/* Quick impact "stamp" rotation after initial spring */}
            <motion.div
              animate={{ rotate: [0, -8, 5, -3, 1, 0] }}
              transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
            >
              <svg
                width="160"
                height="160"
                viewBox="0 0 160 160"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Wax Seal"
              >
                {/* Drop shadow filter */}
                <defs>
                  <filter id="sealShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow
                      dx="0"
                      dy="4"
                      stdDeviation="6"
                      floodColor="#000"
                      floodOpacity="0.5"
                    />
                  </filter>
                  <radialGradient id="sealGradient" cx="40%" cy="35%" r="65%">
                    <stop offset="0%" stopColor="#c0392b" />
                    <stop offset="100%" stopColor="#6b0000" />
                  </radialGradient>
                </defs>

                {/* Outer jagged edge (wax drips) */}
                <path
                  d="M80,8 L88,18 L100,12 L104,24 L117,22 L117,35 L129,38 L125,50 L136,57 L128,67 L136,77 L125,84 L129,95 L117,98 L117,111 L104,113 L100,125 L88,120 L80,130 L72,120 L60,125 L56,113 L43,111 L43,98 L31,95 L35,84 L24,77 L32,67 L24,57 L35,50 L31,38 L43,35 L43,22 L56,24 L60,12 L72,18 Z"
                  fill="url(#sealGradient)"
                  filter="url(#sealShadow)"
                />

                {/* Inner circle */}
                <circle cx="80" cy="69" r="44" fill="#8b0000" opacity="0.4" />
                <circle cx="80" cy="69" r="38" fill="none" stroke="#c0392b" strokeWidth="1.5" opacity="0.6" />

                {/* Ornate "A" monogram */}
                <text
                  x="80"
                  y="88"
                  textAnchor="middle"
                  fontSize="52"
                  fontFamily="serif"
                  fontWeight="bold"
                  fill="#f5e6c8"
                  opacity="0.95"
                  letterSpacing="0"
                >
                  A
                </text>

                {/* Decorative dots around inner circle */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const cx = 80 + 42 * Math.cos(rad);
                  const cy = 69 + 42 * Math.sin(rad);
                  return (
                    <circle key={i} cx={cx} cy={cy} r="2.5" fill="#f5e6c8" opacity="0.7" />
                  );
                })}
              </svg>
            </motion.div>
          </motion.div>

          {/* Confirmation text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="space-y-4"
          >
            <h2
              className="text-2xl font-bold leading-snug"
              style={{ color: "#2c1a0e", fontFamily: "var(--font-cinzel)" }}
            >
              Your order has been entrusted
              <br />
              to our Raven Courier.
            </h2>
            <p
              className="text-sm italic"
              style={{ color: "#8B5E3C", fontFamily: "var(--font-playfair)" }}
            >
              Expect delivery within 3–5 Moons.
            </p>
          </motion.div>

          {/* Order reference */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="mt-6 inline-block px-6 py-3 rounded-lg"
            style={{
              background: "rgba(139,94,60,0.12)",
              border: "1px dashed rgba(139,94,60,0.4)",
            }}
          >
            <p
              className="text-xs uppercase tracking-widest mb-1"
              style={{ color: "#8B5E3C", fontFamily: "var(--font-cinzel)" }}
            >
              Scroll Reference
            </p>
            <p
              className="text-xl font-bold"
              style={{ color: "#2c1a0e", fontFamily: "var(--font-cinzel)" }}
            >
              {orderRef}
            </p>
          </motion.div>

          {/* Return button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.0 }}
            className="mt-8"
          >
            <Link href="/">
              <motion.span
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block w-full py-4 rounded-full font-bold text-sm uppercase tracking-widest cursor-pointer"
                style={{
                  background: "#8b0000",
                  color: "#f5e6c8",
                  fontFamily: "var(--font-cinzel)",
                  boxShadow: "0 4px 20px rgba(139,0,0,0.4)",
                }}
              >
                Return to the Guild Hall →
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
