"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartSidebar() {
    const {
        items,
        isOpen,
        removeItem,
        updateQuantity,
        clearCart,
        closeCart,
        totalItems,
        totalPrice,
    } = useCart();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCart}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-[#1a1614] border-l border-primary/20 z-50 flex flex-col shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-primary/20">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">🛒</span>
                                <h2 className="font-display font-bold text-xl text-white uppercase tracking-widest">
                                    Your Cart
                                </h2>
                                {totalItems > 0 && (
                                    <span className="bg-primary text-bg-dark text-xs font-display font-bold px-2.5 py-0.5 rounded-full">
                                        {totalItems}
                                    </span>
                                )}
                            </div>
                            <button
                                onClick={closeCart}
                                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Items */}
                        <div className="flex-1 overflow-y-auto p-6">
                            {items.length === 0 ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex flex-col items-center justify-center h-full text-center"
                                >
                                    <span className="text-6xl mb-4 opacity-30">🏰</span>
                                    <p className="font-display text-lg text-gray-500 uppercase tracking-widest mb-2">
                                        Your cart is empty
                                    </p>
                                    <p className="text-sm text-gray-600 font-serif italic">
                                        Explore our legendary roasts and elixirs
                                    </p>
                                </motion.div>
                            ) : (
                                <div className="space-y-4">
                                    <AnimatePresence mode="popLayout">
                                        {items.map((item) => (
                                            <motion.div
                                                key={item.id}
                                                layout
                                                initial={{ opacity: 0, x: 50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -50, height: 0 }}
                                                transition={{ type: "spring", damping: 20 }}
                                                className="flex gap-4 bg-bg-dark/50 rounded-lg p-4 border border-primary/10 group hover:border-primary/30 transition-colors"
                                            >
                                                {/* Image */}
                                                {item.image && (
                                                    <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                                                        <Image
                                                            src={item.image}
                                                            alt={item.name}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                )}

                                                {/* Info */}
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-start justify-between gap-2">
                                                        <div>
                                                            <h3 className="font-display font-bold text-sm text-white truncate">
                                                                {item.name}
                                                            </h3>
                                                            {item.tag && (
                                                                <span className="text-[10px] text-primary font-display uppercase tracking-widest">
                                                                    {item.tag}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <button
                                                            onClick={() => removeItem(item.id)}
                                                            className="text-gray-600 hover:text-red-400 transition-colors flex-shrink-0"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </button>
                                                    </div>

                                                    <div className="flex items-center justify-between mt-3">
                                                        {/* Quantity controls */}
                                                        <div className="flex items-center gap-2 bg-surface-dark rounded-full border border-primary/10">
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-primary transition-colors text-sm"
                                                            >
                                                                −
                                                            </button>
                                                            <span className="font-display font-bold text-sm text-white w-6 text-center">
                                                                {item.quantity}
                                                            </span>
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                className="w-7 h-7 flex items-center justify-center text-gray-400 hover:text-primary transition-colors text-sm"
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                        <p className="font-display font-bold text-primary text-sm">
                                                            {item.price * item.quantity} GP
                                                        </p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="p-6 border-t border-primary/20 space-y-4 bg-[#141210]"
                            >
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400 font-display uppercase tracking-widest text-xs">
                                        Total
                                    </span>
                                    <span className="font-display font-bold text-2xl text-primary">
                                        {totalPrice} GP
                                    </span>
                                </div>

                                <button className="w-full py-4 bg-primary text-bg-dark font-display font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors rounded-full glow-primary">
                                    Proceed to Checkout
                                </button>

                                <button
                                    onClick={clearCart}
                                    className="w-full py-2 text-gray-500 hover:text-red-400 font-display text-xs uppercase tracking-widest transition-colors"
                                >
                                    Clear Cart
                                </button>
                            </motion.div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
