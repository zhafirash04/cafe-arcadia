"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { totalItems, toggleCart } = useCart();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "The Codex", href: "/codex" },
        { name: "Our Craft", href: "/#craft" },
        { name: "Guild Menu", href: "/#menu" },
        { name: "The Alchemist", href: "/alchemist" },
        { name: "The Oracle", href: "/oracle" },
        { name: "The Realms", href: "/cartography" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed w-full z-40 top-0 transition-all duration-300 ${scrolled
                        ? "bg-[#0f0c0a]/95 dark:bg-[#0f0c0a]/95 light:bg-white/95 backdrop-blur-md shadow-lg"
                        : "bg-transparent"
                    }`}
            >
                {/* ── Tier 1: Logo + Actions ── */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-4 group">
                            <div className="relative h-14 w-14">
                                <Image
                                    src="/images/logo.svg"
                                    alt="Café Arcadia Logo"
                                    fill
                                    className="object-contain drop-shadow-md"
                                    priority
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-display font-bold text-2xl text-primary tracking-widest-xl uppercase leading-none">
                                    Café
                                </span>
                                <span className="font-display font-medium text-lg text-gray-400 tracking-[0.3em] uppercase leading-none mt-1">
                                    Arcadia
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Actions (right side) */}
                        <div className="hidden md:flex items-center gap-4">
                            {/* Theme Toggle */}
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={toggleTheme}
                                className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/20 hover:border-primary/50 transition-colors text-primary"
                                aria-label="Toggle theme"
                            >
                                <AnimatePresence mode="wait">
                                    {theme === "dark" ? (
                                        <motion.svg
                                            key="sun"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                            />
                                        </motion.svg>
                                    ) : (
                                        <motion.svg
                                            key="moon"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                            />
                                        </motion.svg>
                                    )}
                                </AnimatePresence>
                            </motion.button>

                            {/* Cart Icon */}
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={toggleCart}
                                className="relative w-10 h-10 flex items-center justify-center rounded-full border border-primary/20 hover:border-primary/50 transition-colors text-primary"
                                aria-label="Open cart"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                    />
                                </svg>
                                <AnimatePresence>
                                    {totalItems > 0 && (
                                        <motion.span
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            exit={{ scale: 0 }}
                                            className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-bg-dark text-[10px] font-display font-bold rounded-full flex items-center justify-center"
                                        >
                                            {totalItems}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.button>

                            <Link
                                href="/#newsletter"
                                className="px-8 py-3 bg-primary text-bg-dark font-display font-bold text-xs tracking-widest uppercase hover:bg-white transition-all transform hover:-translate-y-0.5 rounded-full shadow-lg"
                            >
                                Join Inner Circle
                            </Link>
                        </div>

                        {/* Mobile Right Side */}
                        <div className="md:hidden flex items-center gap-3">
                            {/* Mobile Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className="w-10 h-10 flex items-center justify-center rounded-full border border-primary/20 text-primary"
                                aria-label="Toggle theme"
                            >
                                {theme === "dark" ? (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                )}
                            </button>

                            {/* Mobile Cart */}
                            <button
                                onClick={toggleCart}
                                className="relative w-10 h-10 flex items-center justify-center rounded-full border border-primary/20 text-primary"
                                aria-label="Open cart"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                {totalItems > 0 && (
                                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-bg-dark text-[10px] font-display font-bold rounded-full flex items-center justify-center">
                                        {totalItems}
                                    </span>
                                )}
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                className="text-primary hover:opacity-70 focus:outline-none transition-opacity"
                                onClick={() => setMobileOpen(!mobileOpen)}
                                aria-label="Toggle menu"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {mobileOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* ── Tier 2: Sub-nav links (desktop only) ── */}
                <div className="hidden md:block border-t border-b border-primary/25">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-center gap-10 h-11">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="font-display text-[11px] font-semibold hover:text-primary transition-colors uppercase tracking-[0.18em] relative group text-text-dark"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-30 bg-bg-dark/98 backdrop-blur-xl pt-28 px-8"
                    >
                        <div className="flex flex-col space-y-8">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="font-display text-2xl font-bold text-text-dark hover:text-primary transition-colors uppercase tracking-widest"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Link
                                    href="/#newsletter"
                                    onClick={() => setMobileOpen(false)}
                                    className="inline-block px-8 py-4 bg-primary text-bg-dark font-display font-bold text-sm tracking-widest uppercase rounded-full shadow-lg mt-4"
                                >
                                    Join Inner Circle
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
