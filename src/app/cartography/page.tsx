import type { Metadata } from "next";
import dynamic from "next/dynamic";
import ScrollAnimation from "@/components/ScrollAnimation";

export const metadata: Metadata = {
  title: "The Known Realms — Café Arcadia",
  description:
    "Explore the Cartographer's Scroll — an illustrated fantasy world map tracing the origins of every brew in the Café Arcadia Codex.",
};

const CartographyMap = dynamic(
  () => import("@/components/cartography/CartographyMap"),
  { ssr: false }
);

export default function CartographyPage() {
  return (
    <main className="min-h-screen bg-bg-dark pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <span className="font-display font-bold tracking-[0.3em] text-xs uppercase mb-4 block text-primary">
              The Cartographer&apos;s Guild
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              The Known Realms{" "}
              <span className="block text-gradient-gold">of Arcadia</span>
            </h1>
            <p className="font-serif italic text-gray-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed">
              Every brew in our Codex traces its lineage to these lands. Study
              the map, traveler — for to know your cup is to know the earth that
              formed it.
            </p>
          </div>
        </ScrollAnimation>

        <div
          className="w-full rounded-sm overflow-hidden mb-8"
          style={{ border: "1px solid rgba(196,160,53,0.2)" }}
        >
          <CartographyMap />
        </div>

        <ScrollAnimation>
          <p
            className="text-center font-serif italic text-xs md:text-sm opacity-40 max-w-xl mx-auto"
            style={{ color: "#c4a035" }}
          >
            &ldquo;Realm boundaries are approximate. The Cartographer&apos;s
            Guild accepts no responsibility for territories lost to legend.&rdquo;
          </p>
        </ScrollAnimation>
      </div>
    </main>
  );
}
