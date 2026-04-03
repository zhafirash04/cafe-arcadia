"use client";

import { motion } from "framer-motion";

interface SkeletonProps {
  className?: string;
  variant?: "default" | "circular" | "rounded";
  shimmer?: boolean;
}

export function Skeleton({
  className = "",
  variant = "default",
  shimmer = true,
}: SkeletonProps) {
  const baseClasses = "bg-gray-800";
  const variantClasses = {
    default: "rounded",
    circular: "rounded-full",
    rounded: "rounded-lg",
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${shimmer ? "skeleton-shimmer" : "animate-pulse"} ${className}`}
    />
  );
}

// Skeleton for product cards in the Codex
export function ProductCardSkeleton() {
  return (
    <div className="bg-[#1a1614] border border-primary/10 rounded-sm overflow-hidden">
      {/* Image */}
      <div className="relative aspect-[4/3] bg-gray-800 skeleton-shimmer" />
      
      {/* Content */}
      <div className="p-6">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-3 w-1/2 mb-3" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-4" />
        
        {/* Strength meter */}
        <div className="flex items-center gap-2 mb-4">
          <Skeleton className="h-3 w-16" />
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Skeleton
                key={idx}
                className="w-4 h-1.5"
                variant="rounded"
              />
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-800">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
    </div>
  );
}

// Skeleton for Oracle quiz loading
export function OracleThinkingSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center py-16"
    >
      {/* Oracle eye animation */}
      <div className="relative w-32 h-32 mx-auto mb-8">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full border-2 border-primary/50"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute inset-4 rounded-full border border-primary/30"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-8 rounded-full border border-dashed border-primary/40"
        />
        {/* Center eye */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-primary" />
          </div>
        </motion.div>
      </div>

      {/* Text */}
      <motion.h3
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="font-display text-2xl text-primary mb-4"
      >
        The Oracle is Reading Your Fate...
      </motion.h3>

      {/* Mystical loading dots */}
      <div className="flex justify-center gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            className="w-2 h-2 rounded-full bg-primary"
          />
        ))}
      </div>

      {/* Mystical text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="mt-8 font-serif italic text-gray-500 text-sm"
      >
        Consulting ancient scrolls and celestial alignments...
      </motion.p>
    </motion.div>
  );
}

// Skeleton for the main Codex page
export function CodexPageSkeleton() {
  return (
    <div className="min-h-screen bg-bg-dark pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header skeleton */}
        <div className="text-center mb-16">
          <Skeleton className="h-12 w-12 mx-auto mb-6" variant="circular" />
          <Skeleton className="h-16 w-64 mx-auto mb-4" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>

        {/* Filter buttons skeleton */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton
              key={i}
              className="h-12 w-24"
              variant="rounded"
            />
          ))}
        </div>

        {/* Product grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Global shimmer animation (add to globals.css or use inline)
export function SkeletonStyles() {
  return (
    <style jsx global>{`
      .skeleton-shimmer {
        position: relative;
        overflow: hidden;
      }

      .skeleton-shimmer::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
          90deg,
          transparent 0%,
          rgba(198, 168, 124, 0.08) 50%,
          transparent 100%
        );
        background-size: 200% 100%;
        animation: skeleton-shimmer 1.5s infinite;
      }

      @keyframes skeleton-shimmer {
        0% {
          background-position: -200% 0;
        }
        100% {
          background-position: 200% 0;
        }
      }
    `}</style>
  );
}
