import dynamic from "next/dynamic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meja Alkemis — Café Arcadia",
  description:
    "Forge your own custom elixir at the Alchemist's Table. Choose your base, essences, and vessel to craft a legendary brew.",
};

const AlkemisBuilder = dynamic(
  () => import("@/components/alkemis/AlkemisBuilder"),
  { ssr: false }
);

export default function AlkemisPage() {
  return (
    <main className="min-h-screen bg-bg-dark relative">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C6A87C' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10">
        {/* Page heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-6 text-primary">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24 4 C30 4 36 10 36 18 C36 26 30 32 24 34 C18 32 12 26 12 18 C12 10 18 4 24 4Z" />
              <path d="M20 6 L28 6 L24 4 Z" fill="currentColor" opacity="0.5" />
              <path d="M24 34 L24 42" strokeLinecap="round" />
              <path d="M18 42 L30 42" strokeLinecap="round" />
              <path d="M18 20 C20 18 22 22 24 20 C26 18 28 22 30 20" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-primary font-display font-bold tracking-[0.3em] text-xs uppercase mb-4 block">
            Meja Alkemis
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
            The Alchemist&apos;s Table
          </h1>
          <p className="font-serif italic text-gray-400 text-lg max-w-xl mx-auto">
            Forge Your Own Elixir — select your base, bind your essences, and choose a vessel worthy of your legend.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6 opacity-60">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <span className="font-serif italic text-primary text-sm">Begin the Ritual</span>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </div>

        <AlkemisBuilder isHomepage={false} />
      </div>
    </main>
  );
}
