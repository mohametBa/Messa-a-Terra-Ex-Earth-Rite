"use client";

import React from "react";
import { motion } from "framer-motion";

// Pre-generated particle data to avoid hydration mismatch
// These values are deterministic and will match between server and client
const particleData = [
  { left: 12.5, top: 34.2, xMove: 15, duration: 5.2, delay: 0.3 },
  { left: 45.8, top: 67.3, xMove: -12, duration: 4.8, delay: 1.2 },
  { left: 78.2, top: 23.1, xMove: 8, duration: 6.1, delay: 2.5 },
  { left: 23.4, top: 89.5, xMove: -20, duration: 5.5, delay: 0.8 },
  { left: 56.7, top: 12.8, xMove: 18, duration: 4.3, delay: 3.1 },
  { left: 89.1, top: 45.6, xMove: -5, duration: 5.9, delay: 1.7 },
  { left: 34.5, top: 78.9, xMove: 22, duration: 4.6, delay: 2.2 },
  { left: 67.8, top: 56.4, xMove: -15, duration: 5.3, delay: 0.5 },
  { left: 9.2, top: 91.2, xMove: 10, duration: 6.5, delay: 3.8 },
  { left: 42.6, top: 18.7, xMove: -8, duration: 4.9, delay: 1.4 },
  { left: 75.3, top: 62.1, xMove: 25, duration: 5.7, delay: 2.9 },
  { left: 18.9, top: 83.4, xMove: -18, duration: 4.4, delay: 0.1 },
  { left: 51.2, top: 29.6, xMove: 12, duration: 6.2, delay: 3.5 },
  { left: 84.6, top: 71.8, xMove: -22, duration: 5.1, delay: 1.9 },
  { left: 27.8, top: 47.3, xMove: 6, duration: 4.7, delay: 2.7 },
  { left: 60.4, top: 94.2, xMove: -10, duration: 5.8, delay: 0.6 },
  { left: 93.5, top: 36.9, xMove: 20, duration: 4.2, delay: 3.3 },
  { left: 15.7, top: 69.5, xMove: -14, duration: 6.0, delay: 1.1 },
  { left: 48.3, top: 5.8, xMove: 16, duration: 5.4, delay: 2.4 },
  { left: 81.9, top: 52.7, xMove: -25, duration: 4.5, delay: 0.9 },
];

/**
 * Animated Background Component
 * Lightning bolts animation with Earth-Rite brand colors
 */
export const AnimatedBackground = () => {
  // Lightning bolt SVG paths
  const lightningPaths = [
    // Lightning 1 - Top left
    { d: "M100,50 L120,100 L110,100 L130,150", delay: 0, duration: 3 },
    // Lightning 2 - Top right
    { d: "M300,80 L280,130 L290,130 L270,180", delay: 0.5, duration: 3.5 },
    // Lightning 3 - Bottom left
    { d: "M80,250 L100,300 L90,300 L110,350", delay: 1, duration: 3.2 },
    // Lightning 4 - Bottom right
    { d: "M320,280 L340,330 L330,330 L350,380", delay: 1.5, duration: 3.8 },
    // Lightning 5 - Center
    { d: "M200,150 L220,200 L210,200 L230,250", delay: 2, duration: 3.3 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-orange-50/30" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #FF8C00 1px, transparent 1px),
            linear-gradient(to bottom, #FF8C00 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(255, 140, 0, 0.08) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(255, 165, 0, 0.06) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Animated Lightning Bolts - SVG */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient for lightning */}
          <linearGradient id="lightningGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF8C00" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#FFA500" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FFB347" stopOpacity="0.1" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Animated lightning bolts */}
        {lightningPaths.map((lightning, index) => (
          <motion.path
            key={index}
            d={lightning.d}
            stroke="url(#lightningGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1, 0],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: lightning.duration,
              repeat: Infinity,
              delay: lightning.delay,
              ease: "easeInOut",
              times: [0, 0.1, 0.9, 1],
            }}
          />
        ))}
      </svg>

      {/* Floating particles (lightning sparks) */}
      {particleData.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: `radial-gradient(circle, ${
              i % 2 === 0 ? "#FF8C00" : "#FFA500"
            } 0%, transparent 70%)`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, particle.xMove, 0],
            opacity: [0, 0.6, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Diagonal animated lines (electrical current effect) */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #FF8C00 0px,
            #FF8C00 2px,
            transparent 2px,
            transparent 80px
          )`,
        }}
        animate={{
          backgroundPosition: ["0px 0px", "80px 80px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Pulsing energy rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
          style={{
            width: `${300 + i * 150}px`,
            height: `${300 + i * 150}px`,
            borderColor: `rgba(255, 140, 0, ${0.05 - i * 0.015})`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2,
          }}
        />
      ))}

      {/* Corner accent lightning effects */}
      <motion.div
        className="absolute top-0 right-0 w-64 h-64"
        style={{
          background:
            "radial-gradient(ellipse at top right, rgba(255, 140, 0, 0.1) 0%, transparent 50%)",
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(255, 165, 0, 0.08) 0%, transparent 50%)",
        }}
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Scan line effect (subtle) */}
      <motion.div
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-400/20 to-transparent"
        animate={{
          top: ["0%", "100%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;