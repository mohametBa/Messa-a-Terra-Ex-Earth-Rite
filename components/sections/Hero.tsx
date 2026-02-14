"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, Variants, Easing } from "framer-motion";
import {
  FileText,
  MessageCircle,
  Shield,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";

/**
 * Hero Section - Earth-Rite RTR Landing Page
 * Premium industrial design with high-quality optimized image
 */
export const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(scrollRef, {
    once: true,
    margin: "-100px",
  });

  /**
   * Animation variants
   */
  const containerVariants: Variants = {
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
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as Easing,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as Easing,
        delay: 0.3,
      },
    },
  };

  const handleCTAClick = (action: string) => {
    if (action === "download") {
      // Ouvre le PDF de la scheda tecnica dans un nouvel onglet
      window.open("https://www.pinzediterraatex.it/wp-content/uploads/2022/05/ng-it-rtr-0422-r22.pdf", "_blank");
    } else if (action === "consultation") {
      // Scroll vers la section CTA (contact)
      const ctaSection = document.getElementById("cta");
      if (ctaSection) {
        ctaSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-16">

          {/* LEFT SIDE */}
          <motion.div
            ref={scrollRef}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-2xl"
          >

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-[1.1]"
            >
              <span className="block mb-2">
                Earth-Rite RTR
              </span>

              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#E31E24] to-[#B91C1C]">
                Sistema ATEX
              </span>

              <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2 text-gray-700">
                di Nuova Generazione
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-600 mb-8"
            >
              Messa a terra intelligente per autocisterne in ambienti esplosivi.
              <span className="font-semibold text-gray-900">
                {" "}Monitoraggio continuo e conformità certificata.
              </span>
            </motion.p>

            {/* Features */}
            <motion.div
              variants={itemVariants}
              className="space-y-4 mb-10"
            >
              {[
                {
                  icon: Shield,
                  text: "Certificato ATEX / IECEx / FM",
                  sub: "Zone 1, 2, 21, 22",
                },
                {
                  icon: Zap,
                  text: "Monitoraggio continuo ≤10Ω",
                  sub: "Tecnologia Tri-Mode",
                },
                {
                  icon: CheckCircle2,
                  text: "Installazione rapida",
                  sub: "Plug & Play",
                },
              ].map((f, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition"
                >
                  <div className="p-2 bg-red-50 rounded-lg">
                    <f.icon className="w-6 h-6 text-[#E31E24]" />
                  </div>

                  <div>
                    <p className="font-semibold text-gray-900">
                      {f.text}
                    </p>

                    <p className="text-sm text-gray-600">
                      {f.sub}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >

              <Button
                size="lg"
                onClick={() => handleCTAClick("consultation")}
                className="bg-gradient-to-r from-[#E31E24] to-[#B91C1C] text-white shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Consulenza Gratuita
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => handleCTAClick("download")}
              >
                <FileText className="w-5 h-5 mr-2" />
                Scheda Tecnica
              </Button>

            </motion.div>

          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative flex items-center justify-center"
          >

            <div className="relative w-full max-w-[600px]">

              <div className="
                relative
                bg-gradient-to-br from-white to-gray-50
                rounded-3xl
                border
                border-gray-200
                shadow-2xl
                p-8
              ">

                {/* glow */}
                <div className="
                  absolute
                  top-0
                  right-0
                  w-64
                  h-64
                  bg-red-50
                  rounded-full
                  blur-3xl
                  opacity-40
                "/>

                {/* Badge NEW */}
                <div className="absolute -top-3 -right-3 z-20">
                  <Badge 
                    variant="danger" 
                    size="md" 
                    className="bg-gradient-to-r from-[#E31E24] to-[#B91C1C] text-white border-none shadow-lg px-4 py-1.5 text-sm font-bold animate-pulse"
                  >
                    NEW
                  </Badge>
                </div>

                {/* IMAGE HD */}
                <div className="relative z-10">

                  <Image
                    src="/images/earth-rite-rtr-product.png"
                    alt="Earth-Rite RTR sistema ATEX"
                    width={1400}
                    height={1400}
                    priority
                    quality={100}
                    sizes="(max-width:768px) 90vw,
                           (max-width:1200px) 50vw,
                           600px"
                    className="
                      w-full
                      h-auto
                      object-contain
                      drop-shadow-[0_30px_60px_rgba(0,0,0,0.25)]
                      select-none
                    "
                  />

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Hero;
