import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "The Realms — Café Arcadia",
  description:
    "Explore the mystical realms of Café Arcadia. Discover the lore behind every brew through an interactive cartographic journey.",
};

const CartographyMap = dynamic(
  () => import("@/components/cartography/CartographyMap"),
  { ssr: false }
);

export default function CartographyPage() {
  return <CartographyMap />;
}
