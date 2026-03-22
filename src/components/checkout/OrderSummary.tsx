"use client";

import { motion } from "framer-motion";
import { CartItem } from "@/context/CartContext";

interface OrderSummaryProps {
  items: CartItem[];
  totalPrice: number;
  onNext: () => void;
}

export default function OrderSummary({ items, totalPrice, onNext }: OrderSummaryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-2xl mx-auto"
    >
      {/* Parchment container */}
      <div
        className="rounded-2xl shadow-2xl overflow-hidden"
        style={{
          background: "#f5e6c8",
          boxShadow: "0 20px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.3)",
        }}
      >
        {/* Header */}
        <div
          className="px-8 pt-8 pb-4 text-center"
          style={{ borderBottom: "2px dashed rgba(139,94,60,0.3)" }}
        >
          <p
            className="text-xs uppercase tracking-widest mb-2"
            style={{ color: "#8B5E3C", fontFamily: "var(--font-cinzel)" }}
          >
            Scroll of Goods
          </p>
          <h2
            className="text-2xl font-bold"
            style={{ color: "#2c1a0e", fontFamily: "var(--font-cinzel)" }}
          >
            The Merchant Reviews Your Order
          </h2>
        </div>

        {/* Items list */}
        <div className="px-8 py-6 space-y-3">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.07, duration: 0.4 }}
              className="flex items-center justify-between py-2"
              style={{ borderBottom: "1px solid rgba(139,94,60,0.15)" }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="text-xs w-6 h-6 flex items-center justify-center rounded-full font-bold flex-shrink-0"
                  style={{ background: "rgba(139,94,60,0.15)", color: "#8B5E3C", fontFamily: "var(--font-cinzel)" }}
                >
                  {item.quantity}
                </span>
                <span
                  className="font-semibold text-sm leading-tight"
                  style={{ color: "#2c1a0e", fontFamily: "var(--font-playfair)" }}
                >
                  {item.name}
                  {item.tag && (
                    <span
                      className="ml-2 text-xs italic"
                      style={{ color: "#8B5E3C" }}
                    >
                      ({item.tag})
                    </span>
                  )}
                </span>
              </div>
              <span
                className="font-bold text-sm flex-shrink-0"
                style={{ color: "#8B5E3C", fontFamily: "var(--font-cinzel)" }}
              >
                {item.price * item.quantity} GP
              </span>
            </motion.div>
          ))}
        </div>

        {/* Wax-drip divider */}
        <div className="relative px-8">
          <svg
            viewBox="0 0 400 24"
            className="w-full"
            preserveAspectRatio="none"
            style={{ display: "block" }}
          >
            <path
              d="M0,0 Q20,20 40,8 Q60,20 80,4 Q100,18 120,6 Q140,20 160,4 Q180,18 200,8 Q220,20 240,4 Q260,18 280,6 Q300,20 320,4 Q340,18 360,8 Q380,20 400,4 L400,24 L0,24 Z"
              fill="#8b0000"
              opacity="0.7"
            />
            {/* Drip dots */}
            {[30, 90, 150, 210, 270, 330].map((cx) => (
              <ellipse key={cx} cx={cx} cy="22" rx="5" ry="3" fill="#8b0000" opacity="0.5" />
            ))}
          </svg>
        </div>

        {/* Total */}
        <div
          className="px-8 py-5 flex items-center justify-between"
          style={{ background: "rgba(139,94,60,0.08)" }}
        >
          <span
            className="text-sm uppercase tracking-widest"
            style={{ color: "#8B5E3C", fontFamily: "var(--font-cinzel)" }}
          >
            Order Total
          </span>
          <span
            className="text-3xl font-bold"
            style={{ color: "#2c1a0e", fontFamily: "var(--font-cinzel)" }}
          >
            {totalPrice} <span style={{ fontSize: "1rem" }}>GP</span>
          </span>
        </div>

        {/* CTA */}
        <div className="px-8 pb-8 pt-4">
          <motion.button
            onClick={onNext}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-colors"
            style={{
              background: "#8b0000",
              color: "#f5e6c8",
              fontFamily: "var(--font-cinzel)",
              boxShadow: "0 4px 20px rgba(139,0,0,0.4)",
            }}
          >
            Seal the Order →
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
