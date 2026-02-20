"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ScrollAnimation";

/* ── data ────────────────────────────────────────────── */
const roasts = [
  {
    name: "Dragon's Breath",
    tag: "Dark Roast",
    tagStyle: "bg-bg-dark text-primary border border-primary/30",
    desc: "Smoky, intense, with notes of dark chocolate and ash. A brew for the bold.",
    price: "18 Gold Pieces",
    intensity: 3,
    img: "/images/dark-roast.png",
  },
  {
    name: "Golden Knight",
    tag: "Signature",
    tagStyle: "bg-primary text-bg-dark",
    desc: "A balanced medium roast with hints of honey and toasted almond. Smooth as silk armor.",
    price: "22 Gold Pieces",
    intensity: 2,
    img: "/images/latte-art.png",
    featured: true,
  },
  {
    name: "Mystic's Essence",
    tag: "Concentrate",
    tagStyle: "bg-bg-dark text-primary border border-primary/30",
    desc: "A concentrated cold brew elixir. Potent energy to power your spells till dawn.",
    price: "15 Gold Pieces",
    intensity: 4,
    img: "/images/espresso-shot.png",
  },
];

const menuCategories = [
  {
    icon: "☕",
    title: "Potions of Awakening",
    items: [
      { name: "Knight's Espresso", price: "5 GP", desc: "Double shot of pure, concentrated energy. Served black as the void." },
      { name: "Merchant's Mocha", price: "6 GP", desc: "Rich espresso blended with cocoa dust from the Southern Isles and steamed milk." },
      { name: "Paladin's Pour-Over", price: "7 GP", desc: "Slow-dripped for clarity of mind. Notes of citrus and jasmine." },
    ],
  },
  {
    icon: "🌿",
    title: "Elixirs of Vitality",
    items: [
      { name: "Elven Morning Mist", price: "6 GP", desc: "Earl Grey tea latte infused with lavender syrup and frothed milk." },
      { name: "Healer's Matcha", price: "7 GP", desc: "Ceremonial grade green tea whisked with honey and almond milk." },
    ],
  },
  {
    icon: "❄️",
    title: "Ancient Cold Brews",
    items: [
      { name: "Dwarven Stout Brew", price: "7 GP", desc: "Nitro cold brew. Thick, creamy, and dark as the mines under the mountain." },
      { name: "Mystic's Essence", price: "6 GP", desc: "Slow-steeped for 24 hours. Smooth, potent, and surprisingly sweet." },
    ],
  },
];

const testimonials = [
  {
    text: "\"The Dragon's Breath roast is unlike anything I've tasted in the capital. It truly revitalizes the spirit before a long quest.\"",
    name: "Sir Galahad",
    title: "Knight Captain",
    stars: 5,
  },
  {
    text: "\"A quiet corner, a warm fire, and the Elven Morning Mist. The perfect atmosphere for transcribing ancient scrolls.\"",
    name: "Merlin W.",
    title: "Grand Wizard",
    stars: 5,
  },
  {
    text: "\"The service is impeccable, and the Mystic's Essence kept me awake through three nights of negotiations.\"",
    name: "Lady Eleanor",
    title: "Merchant Guild",
    stars: 4.5,
  },
];

/* ── page ────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="Royal coffee hall"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-bg-dark" />
          <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 0.8, scaleY: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8 flex justify-center origin-top"
          >
            <div className="w-px h-24 bg-gradient-to-b from-transparent via-primary to-transparent" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 cinematic-shadow leading-none tracking-tight"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="block text-2xl md:text-3xl font-serif italic text-primary/90 mb-4 tracking-widest font-light"
            >
              Est. in the Age of Myth
            </motion.span>
            Brewed for <br />
            <span className="text-gradient-gold">Legends</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-serif italic text-lg md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-light tracking-wide leading-relaxed opacity-90"
          >
            &ldquo;Step into a realm where beans are roasted by dragon fire and
            every cup tells a story of old. Welcome to the sanctuary of
            flavor.&rdquo;
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <Link
              href="#featured"
              className="group relative px-10 py-4 overflow-hidden rounded-full bg-primary text-bg-dark shadow-glow transition-all hover:scale-105"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer" />
              <span className="relative font-display font-bold tracking-widest uppercase text-sm">
                Discover Elixirs
              </span>
            </Link>
            <Link
              href="#craft"
              className="px-10 py-4 bg-transparent text-white font-display font-bold tracking-widest uppercase border border-white/30 hover:bg-white/5 hover:border-white transition-all rounded-full backdrop-blur-sm text-sm"
            >
              Our Origins
            </Link>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <svg
            className="w-8 h-8 text-primary opacity-70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </header>

      {/* ═══════════ LEGENDARY ROASTS ═══════════ */}
      <section id="featured" className="py-32 bg-bg-dark relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-surface-dark/50 opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimation>
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-primary/20 pb-8">
              <div className="max-w-2xl">
                <span className="text-primary font-display font-bold tracking-[0.3em] text-xs uppercase mb-4 block">
                  The Armory
                </span>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-text-dark mb-4">
                  Legendary Roasts
                </h2>
                <p className="text-gray-400 font-serif italic text-lg">
                  Forged in the fires of the northern peaks, these blends
                  awaken the hero within.
                </p>
              </div>
              <Link
                href="/codex"
                className="hidden md:inline-flex items-center text-primary hover:text-white transition-colors font-display text-xs font-bold tracking-widest uppercase mt-6 md:mt-0"
              >
                View All Blends →
              </Link>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {roasts.map((roast, i) => (
              <ScrollAnimation key={roast.name} delay={i * 0.15}>
                <div
                  className={`group ${roast.featured ? "md:-mt-12" : ""}`}
                >
                  <div
                    className={`relative bg-surface-dark aspect-[4/5] overflow-hidden rounded-t-2xl shadow-soft ${roast.featured ? "ring-1 ring-primary/20" : ""
                      }`}
                  >
                    <div className="absolute top-4 left-4 z-20">
                      <span
                        className={`px-3 py-1 text-[10px] font-display font-bold uppercase tracking-widest ${roast.tagStyle}`}
                      >
                        {roast.tag}
                      </span>
                    </div>
                    <Image
                      src={roast.img}
                      alt={roast.name}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out grayscale-[20%] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <button className="w-full py-3 bg-primary text-bg-dark font-display font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors">
                        Add to Cart - {roast.price.split(" ")[0]} GP
                      </button>
                    </div>
                  </div>
                  <div className="pt-6">
                    <h3 className="font-display text-2xl font-bold text-text-dark mb-2 group-hover:text-primary transition-colors">
                      {roast.name}
                    </h3>
                    <div className="flex gap-2 mb-3 items-center">
                      {Array.from({ length: 4 }).map((_, idx) => (
                        <span
                          key={idx}
                          className={`w-2 h-2 rounded-full ${idx < roast.intensity
                              ? "bg-primary"
                              : "bg-gray-700"
                            }`}
                        />
                      ))}
                      <span className="text-xs text-gray-500 ml-2 font-display uppercase tracking-wide">
                        Intensity
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm font-light leading-relaxed mb-4">
                      {roast.desc}
                    </p>
                    <p className="font-display font-bold text-lg text-primary">
                      {roast.price}
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ OUR CRAFT ═══════════ */}
      <section id="craft" className="py-24 bg-surface-dark relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <ScrollAnimation direction="left" className="order-2 lg:order-1 relative">
              <div className="relative rounded-sm overflow-hidden border border-primary/20 p-2">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src="/images/barista.png"
                    alt="Barista pouring coffee"
                    fill
                    className="object-cover filter sepia-[.3] contrast-125 hover:scale-105 transition-transform duration-1000"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 bg-bg-dark border border-primary/30 p-6 shadow-xl hidden md:block">
                <p className="font-display text-primary text-4xl font-bold mb-1">
                  100%
                </p>
                <p className="text-gray-400 text-xs uppercase tracking-widest">
                  Ethically Sourced
                  <br />
                  From the Realms
                </p>
              </div>
            </ScrollAnimation>

            {/* Text */}
            <ScrollAnimation direction="right" className="order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-12 bg-primary" />
                <span className="font-display text-primary uppercase tracking-[0.25em] text-xs font-bold">
                  Behind the Legend
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
                Crafted with <br />
                <span className="text-primary italic font-serif">
                  Arcane Precision
                </span>
              </h2>
              <p className="font-serif text-xl text-gray-300 mb-8 leading-relaxed font-light">
                &ldquo;Centuries ago, the monks of the High Peaks discovered the
                energizing properties of the sacred cherry. Today, we honor
                that lineage.&rdquo;
              </p>
              <div className="space-y-8">
                {[
                  {
                    icon: "🔥",
                    title: "Dragon-Fire Roasting",
                    desc: "Roasted in small batches over open flame to preserve the magical essence and smoky undertones.",
                  },
                  {
                    icon: "⛰️",
                    title: "High Peak Sourcing",
                    desc: "Beans sourced from the highest altitudes where the air is thin and the soil is rich with ancient minerals.",
                  },
                ].map((feature) => (
                  <div key={feature.title} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 text-xl">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-bold text-white mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <Link
                  href="/codex"
                  className="inline-flex items-center font-display font-bold text-white border-b border-primary pb-1 hover:text-primary transition-colors uppercase tracking-widest text-xs group"
                >
                  Read the full chronicle
                  <span className="ml-2 text-sm group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* ═══════════ GUILD MENU ═══════════ */}
      <section id="menu" className="py-32 bg-[#161311] relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg+width%3D%2260%22+height%3D%2260%22+viewBox%3D%220+0+60+60%22+xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg+fill%3D%22none%22+fill-rule%3D%22evenodd%22%3E%3Cg+fill%3D%22%23C6A87C%22+fill-opacity%3D%220.08%22%3E%3Cpath+d%3D%22M36+34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6+34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6+4V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center mb-6 text-primary text-5xl">
                🏰
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                The Guild&apos;s Selection
              </h2>
              <div className="flex items-center justify-center gap-4 opacity-60">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
                <span className="font-serif italic text-primary">
                  Menu Scroll
                </span>
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <div className="bg-[#1a1614] p-8 md:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] rounded-sm border-y-4 border-double border-primary/40 relative mx-auto max-w-3xl transform rotate-[0.5deg]">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/30 rounded-tl-xl m-4" />
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/30 rounded-tr-xl m-4" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-primary/30 rounded-bl-xl m-4" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/30 rounded-br-xl m-4" />

              <div className="space-y-16 relative z-10">
                {menuCategories.map((cat, ci) => (
                  <div key={cat.title} className={ci > 0 ? "border-t border-primary/10 pt-10" : ""}>
                    <div className="flex items-center justify-center gap-4 mb-10">
                      <span className="text-primary/60 text-xl">{cat.icon}</span>
                      <h3 className="font-display font-bold text-2xl text-primary uppercase tracking-widest text-center">
                        {cat.title}
                      </h3>
                      <span className="text-primary/60 text-xl">{cat.icon}</span>
                    </div>
                    <div className="space-y-8">
                      {cat.items.map((item) => (
                        <div key={item.name} className="group relative">
                          <div className="flex justify-between items-baseline w-full relative z-10">
                            <h4 className="font-display font-bold text-lg text-white group-hover:text-primary transition-colors">
                              {item.name}
                            </h4>
                            <div className="flex-grow border-b border-dotted border-primary/30 mx-3 relative -top-1" />
                            <span className="font-display font-bold text-primary text-lg">
                              {item.price}
                            </span>
                          </div>
                          <p className="text-sm text-gray-400 mt-1 leading-relaxed max-w-[85%]">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation delay={0.3}>
            <div className="mt-20 text-center">
              <Link
                href="/codex"
                className="inline-flex items-center gap-3 px-8 py-4 border border-primary text-primary font-display font-bold uppercase tracking-widest text-xs hover:bg-primary hover:text-bg-dark transition-all duration-300 rounded-full"
              >
                📜 View Full Codex
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <section className="py-24 bg-bg-dark border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl font-bold text-white mb-2">
                Voices from the Realm
              </h2>
              <p className="text-gray-500 font-serif italic">
                What travelers are saying
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, i) => (
              <ScrollAnimation key={test.name} delay={i * 0.15}>
                <div className="p-8 bg-surface-dark rounded-2xl shadow-soft hover:shadow-lg transition-all border border-transparent hover:border-primary/20 h-full">
                  <div className="flex text-primary mb-4">
                    {Array.from({ length: Math.floor(test.stars) }).map(
                      (_, idx) => (
                        <svg
                          key={idx}
                          className="w-4 h-4 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      )
                    )}
                    {test.stars % 1 !== 0 && (
                      <svg
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77V2z" />
                      </svg>
                    )}
                  </div>
                  <p className="text-gray-300 font-serif italic mb-6 leading-relaxed">
                    {test.text}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-display font-bold text-sm">
                        {test.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h5 className="font-display font-bold text-sm text-white">
                        {test.name}
                      </h5>
                      <span className="text-xs text-gray-500 uppercase tracking-wider">
                        {test.title}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ NEWSLETTER ═══════════ */}
      <section id="newsletter" className="py-24 bg-surface-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] opacity-20" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] opacity-20" />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <ScrollAnimation>
            <div className="inline-flex items-center justify-center p-3 rounded-full border border-primary/30 mb-8 bg-bg-dark/50 backdrop-blur-sm text-3xl">
              🛡️
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Join the Inner Circle
            </h2>
            <p className="text-gray-300 mb-10 text-lg font-light max-w-2xl mx-auto">
              Subscribe to receive ravens about new seasonal brews, secret
              menu items, and invitations to our midnight tasting rituals.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto bg-white/5 p-2 rounded-full border border-white/10 backdrop-blur-md"
            >
              <input
                className="flex-1 px-6 py-3 bg-transparent border-none text-white focus:outline-none focus:ring-0 placeholder-gray-400 font-body"
                placeholder="Your raven address (email)"
                type="email"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-bg-dark font-display font-bold uppercase tracking-wider rounded-full hover:bg-white hover:text-accent-brown transition-all duration-300 glow-primary hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]"
              >
                Join Guild
              </button>
            </form>
            <p className="mt-6 text-xs text-gray-500 uppercase tracking-widest">
              No spam, only magic.
            </p>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
