"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, Easing, AnimatePresence } from "framer-motion";
import { AlertTriangle, XCircle, CheckCircle, Shield, Zap, Activity, Lock, StopCircle } from "lucide-react";
import { Badge } from "@/components/Badge";


const Tanker = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsActive((prev) => !prev);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.3, ease: "easeOut" as Easing }
      }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Backdrop with blur for readability */}
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm rounded-xl shadow-lg border border-slate-700/50" />
      
      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-2">
        {/* Icon container */}
        <div className="relative mb-1">
          <motion.div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              isActive ? "bg-amber-500/20" : "bg-red-500/20"
            }`}
            animate={{ 
              boxShadow: isActive 
                ? "0 0 10px rgba(245, 158, 11, 0.5)" 
                : "0 0 15px rgba(239, 68, 68, 0.6)"
            }}
          >
            <Zap 
              className={`w-5 h-5 ${
                isActive ? "text-amber-500" : "text-red-500"
              }`} 
            />
          </motion.div>
        </div>
        
        {/* Status indicator */}
        <motion.div
          className="flex items-center gap-1.5"
          animate={{ opacity: isHovered ? 1 : 0.8 }}
        >
          <div className={`w-2 h-2 rounded-full ${isActive ? "bg-amber-500" : "bg-red-500"}`} />
          <span className="text-[10px] font-medium text-white">
            {isActive ? "CARICA" : "RISCHIO"}
          </span>
        </motion.div>
      </div>
      
      {/* Animated ring */}
      <motion.div
        className="absolute inset-0 rounded-xl border-2"
        animate={{
          borderColor: isActive ? "rgba(245, 158, 11, 0.3)" : "rgba(239, 68, 68, 0.4)",
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut" as Easing
        }}
      />
    </motion.div>
  );
};

/**
 * Resistenza Animation - Small overlay animation for solution section
 * Shows resistance monitoring indicator
 */
const Resistenza = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSafe, setIsSafe] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSafe((prev) => !prev);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.3, ease: "easeOut" as Easing }
      }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Backdrop with blur for readability */}
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm rounded-xl shadow-lg border border-slate-700/50" />
      
      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-2">
        {/* Icon container */}
        <div className="relative mb-1">
          <motion.div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              isSafe ? "bg-emerald-500/20" : "bg-red-500/20"
            }`}
            animate={{ 
              boxShadow: isSafe 
                ? "0 0 10px rgba(16, 185, 129, 0.5)" 
                : "0 0 15px rgba(239, 68, 68, 0.6)"
            }}
          >
            <Activity 
              className={`w-5 h-5 ${
                isSafe ? "text-emerald-500" : "text-red-500"
              }`} 
            />
          </motion.div>
        </div>
        
        {/* Resistance value */}
        <motion.div
          className="flex items-center gap-1.5"
          animate={{ opacity: isHovered ? 1 : 0.8 }}
        >
          <div className={`w-2 h-2 rounded-full ${isSafe ? "bg-emerald-500" : "bg-red-500"}`} />
          <span className="text-[10px] font-medium text-white">
            {isSafe ? "≤6.8Ω" : ">10Ω"}
          </span>
        </motion.div>
      </div>
      
      {/* Animated ring */}
      <motion.div
        className="absolute inset-0 rounded-xl border-2"
        animate={{
          borderColor: isSafe ? "rgba(16, 185, 129, 0.3)" : "rgba(239, 68, 68, 0.4)",
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut" as Easing
        }}
      />
    </motion.div>
  );
};
const TankerAnimation = () => {
  const [chargeLevel, setChargeLevel] = useState(0);
  const [warningActive, setWarningActive] = useState(false);
  const [particlePositions, setParticlePositions] = useState<number[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setParticlePositions([...Array(5)].map(() => Math.random()));
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setChargeLevel((prev) => {
        if (prev >= 100) {
          setWarningActive(true);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (warningActive) {
      const timeout = setTimeout(() => {
        setWarningActive(false);
        setChargeLevel(0);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [warningActive]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 400 200"
        className="w-full h-auto max-w-md"
        aria-label="Animazione autocisterna con accumulo carica elettrostatica"
      >
        {/* Ground line */}
        <line x1="20" y1="170" x2="380" y2="170" stroke="#374151" strokeWidth="4" />      

        {/* Static charge particles */}
        <AnimatePresence>
          {chargeLevel > 30 && (
            <>
              {[...Array(Math.min(Math.floor(chargeLevel / 20), 5))].map((_, i) => (
                <motion.circle
                  key={i}
                  cx={100 + i * 40}
                  cy={60 + (particlePositions[i] ?? Math.random()) * 30}
                  r={3}
                  fill="#F59E0B"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                    y: [0, -20, -40],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Warning glow */}
        <motion.div
          suppressHydrationWarning
          className="absolute inset-0 pointer-events-none"
          animate={{
            opacity: mounted && warningActive ? [0, 1, 0] : 0,
          }}
          transition={{
            duration: 0.5,
            repeat: mounted && warningActive ? Infinity : 0,
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-red-500/30 rounded-full blur-xl" />
        </motion.div>

        {/* Static electricity symbols */}
        <AnimatePresence>
          {warningActive && (
            <>
              <motion.div
                className="absolute top-10 right-20 text-red-500"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
              >
                <Zap className="w-8 h-8" />
              </motion.div>
              <motion.div
                className="absolute top-20 left-20 text-red-500"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Zap className="w-6 h-6" />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Charge level indicator */}
        <g transform="translate(340, 20)">
          <rect
            x="0"
            y="0"
            width="40"
            height="120"
            rx="4"
            fill="#1F2937"
            stroke="#374151"
            strokeWidth="2"
          />
          <motion.rect
            x="4"
            y={116 - chargeLevel}
            width="32"
            height={chargeLevel}
            rx="2"
            fill={warningActive ? "#EF4444" : chargeLevel > 70 ? "#F59E0B" : "#10B981"}
            animate={
              mounted
                ? {
                    fill: warningActive ? ["#EF4444", "#F87171", "#EF4444"] : undefined,
                  }
                : undefined
            }
            transition={{
              duration: warningActive ? 0.3 : 0,
              repeat: warningActive ? Infinity : 0,
            }}
          />
          <text
            x="20"
            y="140"
            textAnchor="middle"
            fill="#9CA3AF"
            fontSize="10"
            fontWeight="bold"
          >
            {chargeLevel}%
          </text>
        </g>
      </svg>
    </div>
  );
};

// ============================================================================
// SECTION 1: THE PROBLEM
// ============================================================================

const ProblemSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 bg-white/90 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* LEFT: Problem Content */}
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: "easeOut" as Easing },
              },
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Il rischio invisibile: <span className="text-red-600">l'elettricità statica</span>
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Durante il trasferimento di liquidi infiammabili, le autocisterne possono accumulare cariche elettrostatiche pericolose. Questo accumulo invisibile può generare scintille in grado di innescare esplosioni in aree ATEX, mettendo a rischio persone e strutture.
            </p>

            {/* Normative reference - discret block */}
            <motion.div
              className="mt-8 p-4 rounded-lg bg-slate-50 border border-slate-200"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-2 text-slate-700 mb-2">
                <Activity className="w-4 h-4" />
                <span className="font-semibold text-sm">Normative di riferimento</span>
              </div>
              <p className="text-sm text-slate-500">
                IEC TS 60079-32-1 / NFPA 77 / API RP 2003
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT: Image 1 - Electrostatic accumulation on truck */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: "easeOut" as Easing },
              },
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xl">
              {/* Main image */}
              <Image
                src="/images/citerne.png"
                alt="Autocisterna per trasporto liquidi infiammabili"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Animation overlay - Tanker (top right) */}
              <motion.div
                className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { delay: 0.3, duration: 0.4 }
                }}
              >
                <Tanker />
              </motion.div>

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-slate-600 text-sm text-center">
                  Accumulo elettrostatico su autocisterna
                </p>
              </div>
            </div>

            {/* Warning badge */}
            <motion.div
              className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-xl shadow-lg flex items-center gap-2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <AlertTriangle className="w-5 h-5" />
              <span className="font-bold text-sm">Rischio ATEX</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// SECTION 2: THE SOLUTION
// ============================================================================

const SolutionSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* LEFT: Image 2 - Earth-Rite system connected */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: "easeOut" as Easing },
              },
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xl">
              {/* Main image */}
              <Image
                src="/images/mass.png"
                alt="Sistema di messa a terra Earth-Rite II RTR"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Animation overlay - Resistenza (bottom right) */}
              <motion.div
                className="absolute bottom-4 right-4 w-16 h-16 sm:w-20 sm:h-20 z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  transition: { delay: 0.3, duration: 0.4 }
                }}
              >
                <Resistenza />
              </motion.div>

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-slate-600 text-sm text-center">
                  Sistema Earth-Rite II RTR collegato
                </p>
              </div>
            </div>

            {/* Red → Green transition note */}
            <motion.div
              className="mt-4 p-4 rounded-lg bg-blue-50 border border-blue-200"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-2 text-blue-700">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold text-sm">Transizione automatica rosso → verde</span>
              </div>
              <p className="text-blue-600 text-sm mt-1">
                Quando la resistenza scende sotto i 10 Ohm, il sistema segnala lo stato di sicurezza attivo
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT: Solution Content */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.6, ease: "easeOut" as Easing },
              },
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8 order-1 lg:order-2"
          >

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Controllo <span className="text-blue-600">intelligente</span> e certificato
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Earth-Rite II RTR è il sistema di messa a terra certificato che garantisce la sicurezza durante le operazioni di trasferimento. Grazie alla tecnologia Tri-Mode, il sistema monitora continuamente la resistenza di collegamento e segnala immediatamente qualsiasi situazione di rischio.
            </p>

            <div className="grid gap-4">
              <motion.div
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-lg text-slate-700 font-medium">Rilevamento tramite capacitanza</p>
                  <p className="text-slate-500 text-sm">Identificazione automatica dell'autocisterna</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-lg text-slate-700 font-medium">Monitoraggio ≤ 10 Ohm</p>
                  <p className="text-slate-500 text-sm">Verifica continua della continuità elettrica</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-lg text-slate-700 font-medium">Interblocco di sicurezza</p>
                  <p className="text-slate-500 text-sm">Blocco automatico del processo in caso di allarme</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export const ProblemSolution = () => {
  return (
    <main className="min-h-screen">
      {/* Section 1: The Problem */}
      <ProblemSection />

      {/* Section 2: The Solution */}
      <SolutionSection />
    </main>
  );
};

export default ProblemSolution;
