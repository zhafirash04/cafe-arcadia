import { Metadata } from "next";
import dynamic from "next/dynamic";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Map } from "lucide-react";

export const metadata: Metadata = {
  title: "The Known Realms — Café Arcadia",
  description:
    "Every brew in our Codex traces its lineage to these ancient lands. Study the Cartographer's Scroll and discover the origins of your cup.",
};

// Lazy-load the interactive map component
const CartographyMap = dynamic(
  () => import("@/components/cartography/CartographyMap"),
  {
    loading: () => (
      <div
        className="w-full flex items-center justify-center bg-[#0a0f1a] border border-primary/20 rounded-lg"
        style={{ aspectRatio: "1200/700" }}
        aria-busy="true"
        aria-label="Loading map…"
      >
        <p className="font-display text-primary/60 text-sm uppercase tracking-widest animate-pulse">
          Unrolling the scroll…
        </p>
      </div>
    ),
    ssr: false,
  }
);

export default function CartographyPage() {
  return (
    <main className="min-h-screen bg-bg-dark pt-24">
      {/* ── Page Header ─────────────────────────────── */}
      <section className="py-14 bg-bg-dark border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimation>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-surface-dark/60 backdrop-blur-sm mb-6">
              <Map className="w-4 h-4 text-primary" strokeWidth={1.5} />
              <span className="font-display font-bold text-xs uppercase tracking-[0.25em] text-primary">
                The Cartographer&apos;s Guild
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight">
              The Known Realms of Arcadia
            </h1>
            <p className="font-serif italic text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Every brew in our Codex traces its lineage to these lands.
              Study the map, traveler — for to know your cup is to know
              the earth that formed it.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* ── The Map ──────────────────────────────────── */}
      <section className="py-10 bg-bg-dark">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation>
            <CartographyMap />
          </ScrollAnimation>

          <p className="mt-6 text-center font-serif italic text-gray-600 text-sm">
            Realm boundaries are approximate. The Cartographer&apos;s Guild
            accepts no responsibility for territories lost to legend.
          </p>
        </div>
      </section>
    </main>
  );
}
