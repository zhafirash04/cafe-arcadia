"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingBag, Flame, MapPin, Scroll, Lightbulb } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/lib/products";

interface Props {
  product: Product;
}

export default function ProductDetailClient({ product }: Props) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      tag: product.level,
    });
  };

  return (
    <main className="min-h-screen bg-bg-dark">
      {/* Background texture */}
      <div
        className="fixed inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C6A87C' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/codex"
            className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-display text-sm uppercase tracking-widest mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Return to The Codex
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-sm overflow-hidden border border-primary/20">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/60 via-transparent to-transparent" />
              
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-primary text-bg-dark text-xs font-display font-bold uppercase tracking-widest">
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Category tag */}
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1.5 bg-bg-dark/80 backdrop-blur-sm text-primary text-xs font-display font-bold uppercase tracking-widest border border-primary/30">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary/40" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary/40" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Origin */}
            <div className="flex items-center gap-2 text-primary/70 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="font-display text-xs uppercase tracking-widest">{product.origin}</span>
            </div>

            {/* Name */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-3xl font-display font-bold text-primary">{product.priceDisplay}</span>
              <span className="text-gray-500 font-display text-sm uppercase tracking-widest">{product.level} Roast</span>
            </div>

            {/* Strength meter */}
            <div className="flex items-center gap-3 mb-8">
              <Flame className="w-5 h-5 text-primary/70" />
              <span className="text-xs text-gray-500 uppercase tracking-wider font-display">Strength</span>
              <div className="flex gap-1.5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-6 h-2 rounded-full transition-colors ${
                      idx < product.strength ? "bg-primary" : "bg-gray-700"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="font-serif text-lg text-gray-300 leading-relaxed mb-8 italic">
              &ldquo;{product.description}&rdquo;
            </p>

            {/* Taste notes */}
            {product.tasteNotes && (
              <div className="mb-8">
                <h3 className="font-display text-xs uppercase tracking-widest text-gray-500 mb-3">
                  Taste Notes
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.tasteNotes.map((note) => (
                    <span
                      key={note}
                      className="px-3 py-1.5 bg-primary/10 border border-primary/20 text-primary text-sm font-display rounded-full"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Add to cart button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 bg-primary text-bg-dark font-display font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-white transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart
            </motion.button>
          </motion.div>
        </div>

        {/* Lore & Brewing Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-16 pt-16 border-t border-gray-800/50">
          {/* Lore */}
          {product.lore && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#1a1614] border border-primary/10 rounded-sm p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Scroll className="w-6 h-6 text-primary" />
                <h2 className="font-display text-xl font-bold text-white uppercase tracking-wider">
                  The Legend
                </h2>
              </div>
              <p className="font-serif text-gray-400 leading-relaxed italic">
                {product.lore}
              </p>
            </motion.div>
          )}

          {/* Brewing Tip */}
          {product.brewingTip && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-[#1a1614] border border-primary/10 rounded-sm p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-primary" />
                <h2 className="font-display text-xl font-bold text-white uppercase tracking-wider">
                  Brewing Wisdom
                </h2>
              </div>
              <p className="font-serif text-gray-400 leading-relaxed italic">
                {product.brewingTip}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}
