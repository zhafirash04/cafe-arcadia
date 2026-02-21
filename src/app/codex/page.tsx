"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ScrollAnimation";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

/* ── data ────────────────────────────────────────────── */
const roastLevels = ["Light", "Medium", "Dark", "Dragon-Fire"];

const legendaryRoasts = [
    {
        name: "Dragon's Breath",
        origin: "Northern Volcanic Peaks",
        desc: "Smoky, intense, with notes of dark chocolate and ash. A brew for the bold who dare to wield fire.",
        price: "18 GP",
        strength: 4,
        level: "Dark",
        badge: "Seal of Potency",
        img: "/images/dark-roast.png",
    },
    {
        name: "Golden Knight",
        origin: "Eastern Honey Meadows",
        desc: "A balanced medium roast with hints of honey and toasted almond. Smooth as enchanted silk armor.",
        price: "22 GP",
        strength: 2,
        level: "Medium",
        badge: "Guild Favorite",
        img: "/images/latte-art.png",
    },
    {
        name: "Elf's Morning",
        origin: "Ancient Forest Canopy",
        desc: "Bright, floral, and impossibly light. A delicate bloom of citrus and chamomile whispers.",
        price: "20 GP",
        strength: 1,
        level: "Light",
        badge: "Rare Find",
        img: "/images/espresso-shot.png",
    },
];

const elixirs = [
    {
        name: "Mystic Green",
        price: "15 GP",
        desc: "Ceremonial matcha infused with mint herbs, cleansing the soul in a single sip.",
        strength: 2,
        origin: "Fairie Meadow Dark Forest",
    },
    {
        name: "Healer's Chamomile",
        price: "14 GP",
        desc: "White chamomile blossom dried under the moonlight, calming all restless wanderers.",
        strength: 1,
        origin: "Moonlit Monastery Cliffs",
    },
    {
        name: "Royal Grey",
        price: "16 GP",
        desc: "High peak leaves with floral tones picked by elder monks in perfect stillness.",
        strength: 3,
        origin: "Violet Citrus Silk Mountains",
    },
];

const coldBrews = [
    {
        name: "Void Essence",
        price: "25 GP",
        desc: "Steeped for 48 hours in absolute darkness. A recipe only alchemists dare brew.",
        strength: 5,
        origin: "Prime Midnight Dark Pool",
    },
    {
        name: "Cloud Walker",
        price: "20 GP",
        desc: "Infused with nitrogen gas creating a cascading, creamy texture layered in still water.",
        strength: 3,
        origin: "Eastern Spring Hills",
    },
    {
        name: "Traveler's Flask",
        price: "22 GP",
        desc: "Has served cold brew travelers for ages. Known for its subtle honey notes and clarity.",
        strength: 4,
        origin: "Amber Energy Bar Glass",
    },
];

const seasonalDrinks = [
    { name: "Winter's Solstice", desc: "Spiced black cold chocolate, clove and orange zest.", price: "24 GP" },
    { name: "Fae Blossom", desc: "Light mint infused with cherry blossom details.", price: "22 GP" },
    { name: "Desert Mirage", desc: "Mediterranean honey and saffron lemon and stone fruit notes.", price: "25 GP" },
    { name: "Harvest Moon", desc: "Pumpkin spice decaf with a dash of maple and cardamom.", price: "23 GP" },
];

const brewingMethods = [
    {
        icon: "💧",
        title: "The Pour Over",
        desc: "A time meditation ritual. Slow, focused dripping of water over freshly ground beans through paper or cloth filter. Classic and clean.",
    },
    {
        icon: "🫖",
        title: "French Press",
        desc: "Full immersion heavenly experience. It gives the most body revealing the authentic richness and full body of a blend.",
    },
    {
        icon: "❄️",
        title: "Cold Extraction",
        desc: "Defies the fire ingredient. Time replaces heat. Steeped at strategic cool temperatures for at least 24 hours to achieve near zero acidity.",
    },
];

/* ── page ────────────────────────────────────────────── */
export default function CodexPage() {
    const [activeLevel, setActiveLevel] = useState<string | null>(null);
    const { addItem } = useCart();

    const handleAdd = (name: string, price: string, image?: string, tag?: string) => {
        const priceNum = parseInt(price.replace(/[^0-9]/g, ""));
        addItem({
            id: name.toLowerCase().replace(/\s+/g, "-"),
            name,
            price: priceNum,
            image,
            tag,
        });
    };

    const filteredRoasts = activeLevel
        ? legendaryRoasts.filter((r) => r.level === activeLevel)
        : legendaryRoasts;

    return (
        <>
            {/* ═══════════ HERO BANNER ═══════════ */}
            <header className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero-bg.png"
                        alt="The Codex library"
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/80 via-bg-dark/60 to-bg-dark" />
                </div>
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="mb-6 flex justify-center text-4xl text-primary"
                    >
                        📖
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="font-display text-6xl md:text-8xl font-bold text-white cinematic-shadow tracking-tight mb-6"
                    >
                        The Codex
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="font-serif italic text-lg md:text-xl text-primary/80 max-w-2xl mx-auto"
                    >
                        The complete archive of Arcadia&apos;s blends and brews, chronicled
                        for the discerning palate.
                    </motion.p>

                    {/* Decorative separator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                        transition={{ delay: 0.7 }}
                        className="mt-12 flex items-center justify-center gap-4"
                    >
                        <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary" />
                        <div className="w-2 h-2 bg-primary rotate-45" />
                        <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary" />
                    </motion.div>
                </div>
            </header>

            {/* ═══════════ INTRO TEXT ═══════════ */}
            <section className="py-16 bg-bg-dark">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <ScrollAnimation>
                        <p className="font-serif italic text-xl text-gray-300 leading-relaxed">
                            Within these pages lie the formulas perfected through fire,
                            patience, and whispered tradition...
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* ═══════════ ROAST SCALE ═══════════ */}
            <section className="py-16 bg-bg-dark border-t border-gray-800/50">
                <div className="max-w-5xl mx-auto px-4">
                    <ScrollAnimation>
                        <div className="text-center mb-4">
                            <span className="text-primary/60 font-display text-xs uppercase tracking-[0.3em]">
                                Guide to Strength
                            </span>
                            <div className="flex items-center justify-center gap-3 my-4">
                                <div className="h-px w-8 bg-primary/30" />
                                <span className="text-primary text-lg">⚔️</span>
                                <div className="h-px w-8 bg-primary/30" />
                            </div>
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
                                The Roast Scale
                            </h2>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation delay={0.2}>
                        <div className="flex flex-wrap justify-center gap-4 mt-12">
                            <button
                                onClick={() => setActiveLevel(null)}
                                className={`px-6 py-3 font-display font-bold text-xs uppercase tracking-widest rounded-full transition-all border ${activeLevel === null
                                    ? "bg-primary text-bg-dark border-primary"
                                    : "bg-transparent text-gray-400 border-gray-700 hover:border-primary hover:text-primary"
                                    }`}
                            >
                                All
                            </button>
                            {roastLevels.map((level) => (
                                <button
                                    key={level}
                                    onClick={() =>
                                        setActiveLevel(activeLevel === level ? null : level)
                                    }
                                    className={`px-6 py-3 font-display font-bold text-xs uppercase tracking-widest rounded-full transition-all border ${activeLevel === level
                                        ? "bg-primary text-bg-dark border-primary"
                                        : "bg-transparent text-gray-400 border-gray-700 hover:border-primary hover:text-primary"
                                        }`}
                                >
                                    {level}
                                </button>
                            ))}
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* ═══════════ LEGENDARY ROASTS ═══════════ */}
            <section className="py-20 bg-bg-dark">
                <div className="max-w-7xl mx-auto px-4">
                    <ScrollAnimation>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-white text-center mb-4 tracking-wider uppercase">
                            Legendary Roasts
                        </h2>
                        <div className="flex items-center justify-center gap-3 mb-16">
                            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
                            <div className="w-1.5 h-1.5 bg-primary rotate-45" />
                            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
                        </div>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {filteredRoasts.map((roast, i) => (
                            <ScrollAnimation key={roast.name} delay={i * 0.15}>
                                <div className="bg-[#1a1614] border border-primary/10 hover:border-primary/30 transition-all group rounded-sm overflow-hidden">
                                    {/* Image */}
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Image
                                            src={roast.img}
                                            alt={roast.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute top-3 left-3">
                                            <span className="px-2 py-1 bg-bg-dark/80 text-primary text-[10px] font-display font-bold uppercase tracking-widest backdrop-blur-sm border border-primary/20">
                                                {roast.price}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                            {roast.name}
                                        </h3>
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3 font-display">
                                            {roast.origin}
                                        </p>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                            {roast.desc}
                                        </p>

                                        {/* Strength meter */}
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="text-xs text-gray-500 uppercase tracking-wide font-display">
                                                Strength
                                            </span>
                                            <div className="flex gap-1">
                                                {Array.from({ length: 5 }).map((_, idx) => (
                                                    <div
                                                        key={idx}
                                                        className={`w-4 h-1.5 rounded-full ${idx < roast.strength
                                                            ? "bg-primary"
                                                            : "bg-gray-700"
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                                            <span className="text-[10px] text-gray-500 font-display uppercase tracking-widest">
                                                {roast.badge}
                                            </span>
                                            <button
                                                onClick={() => handleAdd(roast.name, roast.price, roast.img, roast.level)}
                                                className="text-xs font-display font-bold text-primary uppercase tracking-wider hover:text-white transition-colors"
                                            >
                                                Add to Cart →
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════ ELIXIRS OF VITALITY ═══════════ */}
            <section className="py-20 bg-[#161311] border-t border-gray-800/50">
                <div className="max-w-7xl mx-auto px-4">
                    <ScrollAnimation>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-white text-center mb-4 tracking-wider uppercase">
                            Elixirs of Vitality
                        </h2>
                        <div className="flex items-center justify-center gap-3 mb-16">
                            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
                            <span className="text-primary text-sm">🌿</span>
                            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
                        </div>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {elixirs.map((item, i) => (
                            <ScrollAnimation key={item.name} delay={i * 0.15}>
                                <div className="bg-[#1a1614] border border-primary/10 hover:border-primary/30 transition-all group p-6 rounded-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-2 py-1 bg-bg-dark text-primary text-[10px] font-display font-bold uppercase tracking-widest border border-primary/20">
                                            {item.price}
                                        </span>
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                        {item.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                        {item.desc}
                                    </p>
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-xs text-gray-500 uppercase tracking-wide font-display">
                                            Strength
                                        </span>
                                        <div className="flex gap-1">
                                            {Array.from({ length: 5 }).map((_, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`w-4 h-1.5 rounded-full ${idx < item.strength ? "bg-primary" : "bg-gray-700"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 font-display uppercase tracking-widest">
                                        {item.origin}
                                    </p>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════ ANCIENT COLD BREWS ═══════════ */}
            <section className="py-20 bg-bg-dark border-t border-gray-800/50">
                <div className="max-w-7xl mx-auto px-4">
                    <ScrollAnimation>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-white text-center mb-4 tracking-wider uppercase">
                            Ancient Cold Brews
                        </h2>
                        <div className="flex items-center justify-center gap-3 mb-16">
                            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
                            <span className="text-primary text-sm">❄️</span>
                            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
                        </div>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {coldBrews.map((item, i) => (
                            <ScrollAnimation key={item.name} delay={i * 0.15}>
                                <div className="bg-[#1a1614] border border-primary/10 hover:border-primary/30 transition-all group p-6 rounded-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-2 py-1 bg-bg-dark text-primary text-[10px] font-display font-bold uppercase tracking-widest border border-primary/20">
                                            {item.price}
                                        </span>
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                        {item.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                        {item.desc}
                                    </p>
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-xs text-gray-500 uppercase tracking-wide font-display">
                                            Strength
                                        </span>
                                        <div className="flex gap-1">
                                            {Array.from({ length: 5 }).map((_, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`w-4 h-1.5 rounded-full ${idx < item.strength ? "bg-primary" : "bg-gray-700"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 font-display uppercase tracking-widest">
                                        {item.origin}
                                    </p>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════ SEASONAL ARTIFACTS ═══════════ */}
            <section className="py-20 bg-[#161311] border-t border-gray-800/50">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollAnimation>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-white text-center mb-4 tracking-wider uppercase">
                            Seasonal Artifacts
                        </h2>
                        <div className="flex items-center justify-center gap-3 mb-16">
                            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
                            <span className="text-primary text-sm">✨</span>
                            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
                        </div>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {seasonalDrinks.map((drink, i) => (
                            <ScrollAnimation key={drink.name} delay={i * 0.1}>
                                <div className="bg-[#1a1614] border border-primary/10 hover:border-primary/30 transition-all p-6 rounded-sm text-center group">
                                    <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                        {drink.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                        {drink.desc}
                                    </p>
                                    <p className="font-display font-bold text-primary text-lg mb-4">
                                        {drink.price}
                                    </p>
                                    <button
                                        onClick={() => handleAdd(drink.name, drink.price, undefined, "Seasonal")}
                                        className="text-xs font-display font-bold text-gray-500 uppercase tracking-wider hover:text-primary transition-colors border border-gray-700 hover:border-primary px-4 py-2 rounded-full w-full"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════ BREWING RITUALS ═══════════ */}
            <section className="py-24 bg-surface-dark border-t border-gray-800/50">
                <div className="max-w-6xl mx-auto px-4">
                    <ScrollAnimation>
                        <div className="text-center mb-16">
                            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 tracking-wider uppercase">
                                Brewing Rituals
                            </h2>
                            <p className="text-gray-400 font-serif italic text-lg">
                                The sacred methods to unlock the spirit of the bean.
                            </p>
                        </div>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {brewingMethods.map((method, i) => (
                            <ScrollAnimation key={method.title} delay={i * 0.15}>
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-6 text-3xl">
                                        {method.icon}
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-white mb-4">
                                        {method.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {method.desc}
                                    </p>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════ THE KEEPER'S NOTE ═══════════ */}
            <section className="py-24 bg-bg-dark border-t border-gray-800/50">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <ScrollAnimation>
                        <div className="inline-flex items-center justify-center mb-6 text-3xl text-primary">
                            🏛️
                        </div>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-8 uppercase tracking-widest">
                            The Keeper&apos;s Note
                        </h2>
                        <blockquote className="font-serif italic text-xl text-gray-300 leading-relaxed mb-8 border-l-2 border-primary pl-6 text-left max-w-xl mx-auto">
                            &ldquo;We do not simply roast; we remember. Each sack of beans
                            that enters our vault carries the whisper of its soil, the song
                            of its rain. Our duty is not to change it, but to reveal its
                            truth. Drink deep, traveler, for you have not just found coffee,
                            but History itself.&rdquo;
                        </blockquote>
                        <div className="flex items-center justify-center gap-3">
                            <div className="h-px w-8 bg-primary/30" />
                            <div>
                                <p className="font-display font-bold text-primary text-sm uppercase tracking-widest">
                                    Eldric, Head Roaster
                                </p>
                            </div>
                            <div className="h-px w-8 bg-primary/30" />
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
        </>
    );
}
