"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";
import CursorGlow from "@/components/CursorGlow";
import PageTransition from "@/components/PageTransition";
import { ReactNode } from "react";

export default function ClientProviders({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider>
            <CartProvider>
                <div className="noise-overlay" />
                <CursorGlow />
                <Navbar />
                <CartSidebar />
                <PageTransition>
                    <main>{children}</main>
                </PageTransition>
                <Footer />
            </CartProvider>
        </ThemeProvider>
    );
}
