"use client";

import React, { useRef } from "react";
import { motion, useInView, Easing } from "framer-motion";
import { Badge } from "@/components/Badge";

/**
 * Technical Features Section - Video Presentation
 * Embedded Vimeo video showcasing Earth-Rite RTR product features
 */
export const TechnicalFeatures = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28 bg-ate-neutral-50/90 backdrop-blur-sm"
      aria-label="Caratteristiche Tecniche"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" as Easing }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-ate-neutral-900 mb-4">
            Caratteristiche Tecniche Avanzate
          </h2>
          <p className="text-lg text-ate-neutral-600 max-w-2xl mx-auto">
            Scopri le funzionalità che rendono Earth-Rite RTR la scelta leader
            per la sicurezza ATEX negli impianti industriali.
          </p>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as Easing }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-premium-xl overflow-hidden border border-ate-neutral-200">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                src="https://player.vimeo.com/video/713220665?h=&title=0&byline=0&portrait=0"
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Earth-Rite RTR - Presentazione del prodotto"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalFeatures;
