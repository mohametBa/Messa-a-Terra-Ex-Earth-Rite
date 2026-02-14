"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants, Easing } from "framer-motion";
import { FileText, MessageCircle, Shield, Zap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/Button";

/**
 * Hero Section - Earth-Rite RTR Landing Page
 * Modern industrial design with technical focus
 */
export const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(scrollRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as Easing },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" as Easing, delay: 0.3 },
    },
  };

  const handleCTAClick = (action: string) => {
    console.log(`Hero CTA clicked: ${action}`);
    // TODO: Implement navigation or modal opening
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100"
      aria-label="Hero Section"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        
        {/* Gradient Accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-red-50/30 to-transparent rounded-full blur-3xl" />
        
        {/* Safety Stripes (Industrial Theme) */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E31E24]/30 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-20">
          
          {/* LEFT SIDE - Content */}
          <motion.div
            ref={scrollRef}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-2xl"
          >
           
            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1]"
            >
              <span className="block mb-2">Earth-Rite RTR</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] to-[#B91C1C]">
                Sistema ATEX
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2 text-gray-700">
                di Nuova Generazione
              </span>
            </motion.h1>

            {/* Value Proposition */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Messa a terra intelligente per autocisterne in ambienti esplosivi.{" "}
              <span className="font-bold text-gray-900">
                Monitoraggio continuo, conformità garantita.
              </span>
            </motion.p>

            {/* Key Features - Technical */}
            <motion.div variants={itemVariants} className="space-y-4 mb-10">
              {[
                { icon: Shield, text: "Certificato ATEX/IECEx/FM", subtext: "Zona 1 & 2, 21 & 22" },
                { icon: Zap, text: "Monitoraggio ≤10Ω Real-Time", subtext: "Tecnologia Tri-Mode brevettata" },
                { icon: CheckCircle2, text: "Installazione Plug & Play", subtext: "Setup in < 30 minuti" },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-xl hover:border-[#E31E24]/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="p-2 bg-red-50 rounded-lg flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-[#E31E24]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{feature.text}</p>
                    <p className="text-sm text-gray-600 mt-0.5">{feature.subtext}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleCTAClick("consultation")}
                className="w-full sm:w-auto min-w-[240px] bg-gradient-to-r from-[#E31E24] to-[#B91C1C] hover:from-[#B91C1C] hover:to-[#A01828] text-white shadow-lg shadow-red-500/25 hover:shadow-xl transition-all duration-300"
                aria-label="Richiedi Consulenza Gratuita"
              >
                <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
                Consulenza Gratuita
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => handleCTAClick("download")}
                className="w-full sm:w-auto min-w-[240px] border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
                aria-label="Scarica Scheda Tecnica"
              >
                <FileText className="w-5 h-5 mr-2" aria-hidden="true" />
                Scheda Tecnica PDF
              </Button>
            </motion.div>

            {/* Trust Bar */}
            <motion.div 
              variants={itemVariants}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <p className="text-sm text-gray-500 font-medium mb-4">
                Certificato e approvato da:
              </p>
              <div className="flex flex-wrap items-center gap-6">
                {[
                  { name: "ATEX", desc: "EU 2014/34" },
                  { name: "IECEx", desc: "International" },
                  { name: "FM", desc: "North America" },
                  { name: "SIL 2", desc: "IEC 61508" },
                ].map((cert) => (
                  <div key={cert.name} className="flex flex-col">
                    <span className="text-sm font-bold text-gray-900">{cert.name}</span>
                    <span className="text-xs text-gray-500">{cert.desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Product Visual */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative lg:h-[700px] flex items-center justify-center"
          >
            {/* Main Product Image */}
            <div className="relative w-full max-w-[600px]">
              {/* Product Card */}
              <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl border-2 border-gray-200 shadow-2xl p-8 overflow-hidden">
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-50 to-transparent rounded-full blur-3xl opacity-50" />
                
                {/* Product Image */}
                <div className="relative z-10">
                  <img
                    src="/images/earth-rite-rtr-product.png"
                    alt="Earth-Rite RTR - Sistema di messa a terra ATEX"
                    className="w-full h-auto object-contain drop-shadow-2xl"
                  />
                </div>

                {/* Floating Specs Cards */}
               

              
              </div>

              {/* Technical Specs Sidebar */}
              <div className="absolute -right-8 top-1/2 -translate-y-1/2 hidden xl:block">
                <div className="bg-gray-900 text-white rounded-xl px-6 py-8 shadow-2xl border border-gray-800 space-y-6 w-48">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Temperatura</p>
                    <p className="text-2xl font-bold">-40°C / +55°C</p>
                  </div>
                  <div className="h-px bg-gray-700" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Protezione</p>
                    <p className="text-2xl font-bold">IP 66</p>
                  </div>
                  <div className="h-px bg-gray-700" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Potenza</p>
                    <p className="text-2xl font-bold">10W</p>
                  </div>
                </div>
              </div>

              {/* Certification Badges */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
                {["ATEX", "IECEx", "FM"].map((cert) => (
                  <div
                    key={cert}
                    className="bg-white px-4 py-2 rounded-full shadow-lg border border-gray-200"
                  >
                    <span className="text-xs font-bold text-gray-900">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-20 w-32 h-32 border-2 border-[#E31E24]/20 rounded-full" />
            <div className="absolute bottom-32 left-16 w-24 h-24 border-2 border-gray-300/30 rounded-full" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500 font-medium uppercase tracking-widest">
            Scopri di più
          </span>
          <motion.div
            className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="w-1.5 h-1.5 bg-gray-400 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;