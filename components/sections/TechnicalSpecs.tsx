"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, Variants, Easing } from "framer-motion";
import {
  Zap,
  Box,
  Grip,
  Cable,
  ChevronDown,
  Download,
  Shield,
  Info,
} from "lucide-react";
import { LucideIcon } from "lucide-react";
import Image from "next/image";

/**
 * Specification row data structure with image support
 */
interface SpecRow {
  category: string;
  subtitle?: string;
  icon: LucideIcon;
  variant: "success" | "info" | "warning" | "accent";
  image?: string;
  imageAlt?: string;
  specs: Array<{ param: string; value: string }>;
  certifications?: string[];
}

/**
 * Technical Specifications Section - Earth-Rite RTR
 * Expandable specifications with images and premium table design
 */
export const TechnicalSpecs = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Close lightbox on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImage(null);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const specs: SpecRow[] = [
    {
      category: "Versione Ex d (Zona 1 / 21)",
      subtitle: "Unità di monitoraggio - Involucro antideflagrazione alluminio",
      icon: Shield,
      variant: "warning",
      image: "/images/spec/VersioneExd(Zona1:21).png",
      imageAlt: "Versione Ex d (Zona 1:21)",
      specs: [
        {
          param: "Alimentazione",
          value: "110/120 V o 220/240 V CA, 50-60 Hz • 12 V o 24 V CC",
        },
        { param: "Potenza nominale", value: "10 watt" },
        { param: "Temperatura ambiente", value: "-40°C a +55°C" },
        { param: "Protezione ingresso", value: "IP 66" },
        { param: "Peso", value: "4,5 kg (netto)" },
        { param: "Materiale", value: "Alluminio pressofuso privo di rame" },
        { param: "Circuito di monitoraggio", value: "Intrinsecamente sicuro" },
        {
          param: "Monitoraggio resistenza circuito",
          value: "Nominale ≤ 10 ohm (± 10%)",
        },
        {
          param: "Potenza nominale contatto relè uscita",
          value:
            "2 x contatti commutazione potenziale zero • 250 V CA, 5 A, 500 VA max. resistivo • 30 V CC, 2 A, 60 W max. resistivo",
        },
        { param: "Pressacavo", value: "7 x M20 (2 dotati di tappo di chiusura)" },
      ],
      certifications: [
        "ATEX: II 2(1)GD Ex d[ia] IIC T6 Gb(Ga)",
        "IECEx: Ex d[ia] IIC T6 Gb(Ga)",
        "FM: Classe I, Div 1, Gruppi A-D",
      ],
    },
    {
      category: "Versione Ex e (Zona 2 / 21)",
      subtitle: "Unità di monitoraggio - Involucro GRP",
      icon: Shield,
      variant: "info",
      image: "/images/spec/VersioneExe(Zona2:21).png",
      imageAlt: "Versione Ex e (Zona 2:21)",
      specs: [
        {
          param: "Alimentazione",
          value: "108/125 V o 216/250 V CA, 50-60 Hz • 12 V o 24 V CC",
        },
        { param: "Potenza nominale", value: "10 watt" },
        { param: "Temperatura ambiente", value: "-40°C a +55°C" },
        { param: "Protezione ingresso", value: "IP 66" },
        { param: "Peso", value: "2 kg (netto)" },
        { param: "Materiale", value: "GRP con carica di carbonio" },
        { param: "Circuito di monitoraggio", value: "Intrinsecamente sicuro" },
        {
          param: "Monitoraggio resistenza circuito",
          value: "Nominale ≤ 10 ohm (± 10%)",
        },
        {
          param: "Potenza nominale contatto relè uscita",
          value:
            "2 x contatti commutazione potenziale zero • 250 V CA, 5 A, 500 VA max. resistivo • 30 V CC, 2 A, 60 W max. resistivo",
        },
        { param: "Pressacavo", value: "7 x M20 (2 dotati di tappo di chiusura)" },
      ],
      certifications: [
        "ATEX: II 3(1)G Ex ec nC [ia] IIC T4 Gc(Ga)",
        "IECEx: Ex ec nC [ia] IIC T4 Gc(Ga)",
        "FM: Classe I, Div 2, Gruppi A-D",
      ],
    },
    {
      category: "Scatola di Giunzione / Perno di Stivaggio",
      subtitle: "Junction Box con sistema di stivaggio pinza integrato",
      icon: Box,
      variant: "accent",
      image: "/images/spec/Custodiadiderivazione:pernodistivaggio.png",
      imageAlt: "Custodia di derivazione perno di stivaggio",
      specs: [
        { param: "Materiale involucro", value: "GRP con carica di carbonio" },
        { param: "Morsetti", value: "Capacità conduttori 2 x 2.5 mm²" },
        {
          param: "Dispositivo di stivaggio",
          value: "Perno di stivaggio universale isolato in nylon",
        },
        { param: "Protezione ingresso", value: "IP 66" },
        { param: "Passacavo", value: "1 x 20 mm" },
        { param: "Collegamento cavo pinza", value: "Connettore rapido" },
      ],
    },
    {
      category: "Pinza di Messa a Terra",
      subtitle: "Pinza certificata ATEX con punte al carburo di tungsteno",
      icon: Grip,
      variant: "success",
      image: "/images/spec/Pinzadimessaaterra.png",
      imageAlt: "Pinza di messa a terra",
      specs: [
        { param: "Design della pinza", value: "Punte in carburo di tungsteno bipolari" },
        { param: "Corpo", value: "Acciaio inossidabile AISI 304" },
        { param: "Larghezza maniglie", value: "38 mm" },
        { param: "Apertura massima", value: "30 mm (versione standard)" },
        { param: "Peso", value: "~240 grammi" },
      ],
      certifications: [
        "Ex II 1 GD T6 (EN 13463-1:2009)",
        "ATEX: Sira 02ATEX9381",
        "FM: 3046346",
        "IECEx: Ex h IIC T6 Ga • Ex h IIIC T85°C Da",
        "Ta: -40°C a +60°C",
        "IECEx EXV 20.0033",
      ],
    },
    {
      category: "Cavo Spiralato",
      subtitle: "Cavo Hytrel® resistente e flessibile con conduttori in rame",
      icon: Cable,
      variant: "info",
      // Pas d'image pour Cavo
      specs: [
        {
          param: "Guaina",
          value:
            "Cen-Stat Hytrel® blu (statico-dissipativa, resistente alle sostanze chimiche e alle abrasioni)",
        },
        { param: "Conduttori", value: "2 x 1.00 mm² in rame" },
        {
          param: "Lunghezze disponibili",
          value: "3 m (10 ft) • 5 m (16 ft) • 10 m (32 ft) • 15 m (50 ft)",
        },
        {
          param: "Caratteristiche",
          value:
            "Additivi di protezione UV e dissipazione statica • Spiralato estensibile",
        },
        { param: "Connessione", value: "Quick Connect entrambe le estremità" },
        { param: "Diametro cavo", value: "~7 mm" },
      ],
    },
  ];

  const accordionVariants: Variants = {
    collapsed: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" as Easing },
    },
    expanded: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.4, ease: "easeInOut" as Easing },
    },
  };

  const iconVariants: Variants = {
    collapsed: { rotate: 0 },
    expanded: { rotate: 180, transition: { duration: 0.3 } },
  };

  const handleDownload = () => {
    console.log("Download technical spec PDF");
    // TODO: Implement actual PDF download
    window.open("/documents/earth-rite-rtr-datasheet.pdf", "_blank");
  };

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-gray-50/90 to-white/90 backdrop-blur-sm"
      aria-label="Specifiche Tecniche"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" as Easing }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Specifiche Tecniche Dettagliate
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Tutte le caratteristiche tecniche del sistema Earth-Rite RTR per
            garantire la compatibilità con la tua applicazione ATEX
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="max-w-5xl mx-auto space-y-4">
          {specs.map((row, index) => {
            const Icon = row.icon;
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={row.category}
                className={`
                  rounded-2xl border-2 overflow-hidden transition-all duration-300
                  ${
                    isExpanded
                      ? "border-[#E31E24] shadow-xl shadow-red-500/10"
                      : "border-gray-200 shadow-md hover:shadow-lg hover:border-gray-300"
                  }
                `}
                initial={false}
              >
                {/* Accordion Header */}
                <button
                  className="w-full px-6 py-6 flex items-center justify-between text-left
                             bg-white hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  aria-expanded={isExpanded}
                  aria-controls={`spec-content-${index}`}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div
                      className={`
                        p-3 rounded-xl transition-all duration-300
                        ${
                          isExpanded
                            ? "bg-[#E31E24] text-white shadow-lg shadow-red-500/30"
                            : row.variant === "warning"
                            ? "bg-yellow-100 text-yellow-700"
                            : row.variant === "success"
                            ? "bg-green-100 text-green-700"
                            : row.variant === "accent"
                            ? "bg-red-100 text-red-700"
                            : "bg-blue-100 text-blue-700"
                        }
                      `}
                    >
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg mb-1">
                        {row.category}
                      </h3>
                      {row.subtitle && (
                        <p className="text-sm text-gray-600">{row.subtitle}</p>
                      )}
                    </div>
                  </div>

                  <motion.div
                    variants={iconVariants}
                    animate={isExpanded ? "expanded" : "collapsed"}
                    className="text-gray-400"
                  >
                    <ChevronDown className="w-6 h-6" aria-hidden="true" />
                  </motion.div>
                </button>

                {/* Accordion Content */}
                <motion.div
                  id={`spec-content-${index}`}
                  initial={false}
                  animate={isExpanded ? "expanded" : "collapsed"}
                  variants={accordionVariants}
                  style={{ overflow: "hidden" }}
                >
                  <div className="border-t-2 border-gray-100 bg-gradient-to-br from-gray-50 to-white">
                    <div className="p-6">
                      {/* Image and Content Layout */}
                      <div className={`flex gap-6 ${!row.image ? 'justify-center' : ''}`}>
                        {/* Image Section */}
                        {row.image && (
                          <div className="flex-shrink-0 w-48 md:w-56">
                            <div
                              className="rounded-xl overflow-hidden border-2 border-gray-200 bg-white shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
                              onClick={() => setLightboxImage({ src: row.image!, alt: row.imageAlt || row.category })}
                            >
                              <div className="relative aspect-square w-full">
                                <Image
                                  src={row.image}
                                  alt={row.imageAlt || row.category}
                                  fill
                                  className="object-contain p-2"
                                  sizes="(max-width: 768px) 100vw, 224px"
                                />
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Content Section */}
                        <div className="flex-1 min-w-0">
                          {/* Specifications Table */}
                          <div className="rounded-xl overflow-hidden border border-gray-200">
                            <table className="w-full">
                              <tbody>
                                {row.specs.map((spec, specIndex) => (
                                  <tr
                                    key={spec.param}
                                    className={`
                                      border-b border-gray-100 last:border-0 transition-colors
                                      ${
                                        specIndex % 2 === 0
                                          ? "bg-white hover:bg-gray-50"
                                          : "bg-gray-50 hover:bg-gray-100"
                                      }
                                    `}
                                  >
                                    <td className="px-6 py-4 text-gray-700 font-medium w-2/5">
                                      {spec.param}
                                    </td>
                                    <td className="px-6 py-4 text-gray-900 font-semibold w-3/5">
                                      {spec.value}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>

                          {/* Certifications */}
                          {row.certifications && row.certifications.length > 0 && (
                            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                              <div className="flex items-start gap-3">
                                <div className="p-2 bg-green-100 rounded-lg">
                                  <Shield className="w-5 h-5 text-green-700" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-semibold text-green-900 mb-2">
                                    Certificazioni
                                  </h4>
                                  <ul className="space-y-1">
                                    {row.certifications.map((cert, idx) => (
                                      <li
                                        key={idx}
                                        className="text-sm text-green-800 flex items-start gap-2"
                                      >
                                        <svg
                                          className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                          />
                                        </svg>
                                        <span className="font-mono text-xs">
                                          {cert}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 text-white hover:bg-white/20 rounded-full transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div
              className="relative max-w-4xl max-h-[90vh] w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                width={800}
                height={600}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                priority
              />
              <p className="text-center text-white mt-4 text-lg font-medium">
                {lightboxImage.alt}
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default TechnicalSpecs;
