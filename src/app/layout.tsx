import type { Metadata } from "next";
import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

export const metadata: Metadata = {
  title: "Café Arcadia - Brewed for Legends",
  description:
    "Step into a realm where beans are roasted by dragon fire and every cup tells a story of old. Welcome to the sanctuary of flavor.",
  keywords:
    "coffee shop, cafe, premium coffee, artisan coffee, Café Arcadia, specialty coffee",
  openGraph: {
    title: "Café Arcadia - Brewed for Legends",
    description:
      "Step into a realm where beans are roasted by dragon fire and every cup tells a story of old.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
