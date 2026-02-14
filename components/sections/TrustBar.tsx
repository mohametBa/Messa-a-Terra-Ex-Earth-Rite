"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Certification logos data
 */
const certificationLogos = [
  { id: "atexex", src: "/images/atexex.png", alt: "ATEX Ex Certification" },
  { id: "ccc", src: "/images/ccc.png", alt: "CCC Certification" },
  { id: "csaus", src: "/images/csaus.png", alt: "CSA US Certification" },
  { id: "iesex", src: "/images/iesex.png", alt: "IECEx Certification" },
  { id: "inmetro", src: "/images/inmetro.png", alt: "INMETRO Certification" },
  { id: "sil2", src: "/images/sil2.png", alt: "SIL 2 Safety Integrity Level Certification" },
];

const duplicatedLogos = [...certificationLogos, ...certificationLogos];

export const TrustBar = () => {
  return (
    <section
      className="relative py-16 bg-white border-y border-neutral-200 overflow-hidden"
      aria-label="Certificazioni e conformità internazionali"
    >
      {/* Fade gradients edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-neutral-500 mb-3">
            Certificazioni Internazionali
          </p>

          <h2 className="text-lg md:text-xl font-semibold text-neutral-900 mb-2">
            Conformità ai più elevati standard di sicurezza industriale
          </h2>

          <p className="text-sm text-neutral-600">
            Certificato ATEX, IECEx e SIL 2 per operazioni sicure in ambienti pericolosi
          </p>
        </motion.div>

        {/* Slider container */}
        <div className="relative overflow-hidden">

          <motion.div
            className="flex items-center gap-16 md:gap-24"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <LogoItem key={`${logo.id}-${index}`} logo={logo} />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TrustBar;

/**
 * Logo Item Component
 * Isolated for performance and readability
 */
function LogoItem({
  logo,
}: {
  logo: { id: string; src: string; alt: string };
}) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center group">

      <div className="relative h-14 md:h-16 w-[120px] md:w-[160px] transition-all duration-300 group-hover:scale-110">

        <Image
          src={logo.src}
          alt={logo.alt}
          fill
          sizes="160px"
          className="
            object-contain
            opacity-60
            grayscale
            transition-all
            duration-300
            group-hover:grayscale-0
            group-hover:opacity-100
          "
        />

      </div>

    </div>
  );
}
