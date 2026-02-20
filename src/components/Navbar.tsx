"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

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
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed w-full z-40 top-0 transition-all duration-300 ${scrolled
                    ? "bg-[#0f0c0a]/95 backdrop-blur-md border-b border-primary/20 shadow-lg"
                    : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24">
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

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center space-x-12">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="font-display text-xs font-semibold hover:text-primary transition-colors uppercase tracking-[0.15em] relative group text-text-dark"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}
                            <Link
                                href="/#newsletter"
                                className="px-8 py-3 bg-primary text-bg-dark font-display font-bold text-xs tracking-widest uppercase hover:bg-white transition-all transform hover:-translate-y-0.5 rounded-full shadow-lg"
                            >
                                Join Inner Circle
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-primary hover:opacity-70 focus:outline-none transition-opacity"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {mobileOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
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
