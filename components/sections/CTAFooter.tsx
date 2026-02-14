"use client";

import React, { useState, useRef } from "react";
import { motion, useInView, Variants, Easing } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Youtube,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/Button";
import Image from "next/image";

/**
 * CTA + Footer Section
 * Final call-to-action and modern footer with contact info, logos, and map
 */
export const CTAFooter = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as Easing },
    },
  };

  const staggerChildren: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const childVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as Easing },
    },
  };

  return (
    <div className="bg-ate-neutral-900" ref={ref}>
      {/* Final CTA Section */}
      <section
        className="relative py-20 lg:py-28 bg-gradient-to-br from-ate-primary-800 to-ate-primary-950 overflow-hidden"
        aria-label="Call to Action Finale"
      >
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ate-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-ate-primary-400/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="text-center mb-12">
              <motion.span
                className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-ate-accent-400 text-sm font-medium mb-6 backdrop-blur-sm border border-white/10"
                variants={childVariant}
              >
                Pronto per iniziare?
              </motion.span>

              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 leading-tight">
                Migliora la Sicurezza del Tuo Impianto
              </h2>
              <p className="text-lg text-ate-neutral-300 max-w-2xl mx-auto">
                Compila il modulo e un esperto ATEX ti contatterà per una consulenza personalizzata.
              </p>
            </div>

            {/* Contact Form */}
            <motion.div
              className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 lg:p-10 max-w-2xl mx-auto"
              variants={childVariant}
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormSubmitted(true);
                }}
                className="space-y-5"
                aria-label="Modulo di contatto"
              >
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Richiesta Inviata!</h3>
                    <p className="text-ate-neutral-300">Ti contatteremo al più presto.</p>
                  </div>
                ) : (
                  <>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="cta-name" className="block text-sm font-medium text-ate-neutral-300 mb-1.5">
                          Nome e Cognome *
                        </label>
                        <input
                          type="text"
                          id="cta-name"
                          name="name"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-ate-neutral-500
                                     focus:border-ate-accent-500 focus:ring-2 focus:ring-ate-accent-500/20 focus:outline-none
                                     transition-all duration-200"
                          placeholder="Mario Rossi"
                        />
                      </div>
                      <div>
                        <label htmlFor="cta-email" className="block text-sm font-medium text-ate-neutral-300 mb-1.5">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="cta-email"
                          name="email"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-ate-neutral-500
                                     focus:border-ate-accent-500 focus:ring-2 focus:ring-ate-accent-500/20 focus:outline-none
                                     transition-all duration-200"
                          placeholder="mario@azienda.it"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="cta-company" className="block text-sm font-medium text-ate-neutral-300 mb-1.5">
                          Azienda
                        </label>
                        <input
                          type="text"
                          id="cta-company"
                          name="company"
                          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-ate-neutral-500
                                     focus:border-ate-accent-500 focus:ring-2 focus:ring-ate-accent-500/20 focus:outline-none
                                     transition-all duration-200"
                          placeholder="Nome azienda"
                        />
                      </div>
                      <div>
                        <label htmlFor="cta-phone" className="block text-sm font-medium text-ate-neutral-300 mb-1.5">
                          Telefono
                        </label>
                        <input
                          type="tel"
                          id="cta-phone"
                          name="phone"
                          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-ate-neutral-500
                                     focus:border-ate-accent-500 focus:ring-2 focus:ring-ate-accent-500/20 focus:outline-none
                                     transition-all duration-200"
                          placeholder="+39 XXX XXX XXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="cta-message" className="block text-sm font-medium text-ate-neutral-300 mb-1.5">
                        Messaggio
                      </label>
                      <textarea
                        id="cta-message"
                        name="message"
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-ate-neutral-500
                                   focus:border-ate-accent-500 focus:ring-2 focus:ring-ate-accent-500/20 focus:outline-none
                                   transition-all duration-200 resize-none"
                        placeholder="Come possiamo aiutarti?"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="secondary"
                      size="lg"
                      fullWidth
                      className="group"
                    >
                      Invia Richiesta
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </>
                )}
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="bg-ate-neutral-950 text-ate-neutral-400"
        role="contentinfo"
      >
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8"
            variants={staggerChildren}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Logos & Company Info - 4 cols */}
            <motion.div className="lg:col-span-4" variants={childVariant}>
              {/* Logos */}
              <div className="flex items-center gap-6 mb-6">
                {/* Logo Maffioletti S.r.l. */}
                <div className="flex flex-col items-center">
                  <div className="bg-white rounded-xl p-3 shadow-lg shadow-black/20">
                    <Image
                      src="/images/Logo-Maffioletti.png"
                      alt="Maffioletti S.r.l."
                      width={120}
                      height={40}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                  <span className="text-xs text-ate-neutral-500 mt-2 font-medium">
                    Maffioletti S.r.l.
                  </span>
                </div>

                {/* Divider */}
                <div className="h-16 w-px bg-ate-neutral-700" />

                {/* Logo Earth-Rite RTR */}
                <div className="flex flex-col items-center">
                  <div className="bg-white rounded-xl p-3 shadow-lg shadow-black/20">
                    <Image
                      src="/images/TerraLogo.png"
                      alt="Earth-Rite RTR"
                      width={120}
                      height={40}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                  <span className="text-xs text-ate-neutral-500 mt-2 font-medium">
                    Earth-Rite RTR
                  </span>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-6 max-w-xs">
                Distributore autorizzato di sistemi di messa a terra ATEX.
                Sicurezza, innovazione e affidabilità per l&apos;industria.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/company/maffioletti-srl/?originalSubdomain=it"
                  className="w-10 h-10 rounded-xl bg-ate-neutral-800/80 flex items-center justify-center
                             text-ate-neutral-400 hover:text-white hover:bg-ate-primary-700
                             transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-ate-primary-700/20"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                
              </div>
            </motion.div>

            {/* Contact Info - 3 cols */}
            <motion.div className="lg:col-span-3" variants={childVariant}>
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                Contatti
              </h4>
              <ul className="space-y-5">
                <li>
                  <a
                    href="tel:+39035505115"
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-ate-primary-900/50 flex items-center justify-center flex-shrink-0 group-hover:bg-ate-primary-700 transition-colors duration-300">
                      <Phone className="w-4 h-4 text-ate-primary-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-ate-neutral-500 mb-0.5">Telefono</p>
                      <span className="text-sm text-ate-neutral-300 group-hover:text-white transition-colors font-medium">
                        +39 035 505115
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@pinzediterraatex.it"
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-ate-primary-900/50 flex items-center justify-center flex-shrink-0 group-hover:bg-ate-primary-700 transition-colors duration-300">
                      <Mail className="w-4 h-4 text-ate-primary-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-ate-neutral-500 mb-0.5">Email</p>
                      <span className="text-sm text-ate-neutral-300 group-hover:text-white transition-colors font-medium">
                        info@pinzediterraatex.it
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.google.com/?q=Via+dell'Artigianato+9+24046+Osio+Sotto+BG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-ate-primary-900/50 flex items-center justify-center flex-shrink-0 group-hover:bg-ate-primary-700 transition-colors duration-300">
                      <MapPin className="w-4 h-4 text-ate-primary-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-ate-neutral-500 mb-0.5">Sede</p>
                      <address className="text-sm text-ate-neutral-300 not-italic group-hover:text-white transition-colors font-medium leading-snug">
                        Via dell&apos;Artigianato, 9<br />
                        24046 Osio Sotto BG
                      </address>
                    </div>
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Quick Links - 2 cols */}
            <motion.div className="lg:col-span-2" variants={childVariant}>
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                Link Rapidi
              </h4>
              <nav aria-label="Menu secondario">
                <ul className="space-y-3">
                  {[
                    { label: "Prodotti", href: "#" },
                    { label: "Certificazioni", href: "#" },
                    { label: "Assistenza", href: "#" },
                    { label: "Privacy Policy", href: "#" },
                    { label: "Cookie Policy", href: "#" },
                  ].map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm hover:text-white transition-colors duration-200
                                   flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 rounded-full bg-ate-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>

            {/* Map - 3 cols */}
            <motion.div className="lg:col-span-3" variants={childVariant}>
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                Dove Siamo
              </h4>
              <div className="relative rounded-xl overflow-hidden border border-ate-neutral-800 shadow-xl shadow-black/30">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.5!2d9.606!3d45.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781514f0f0f0f0f%3A0x0!2sVia+dell'Artigianato%2C+9%2C+24046+Osio+Sotto+BG!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sede Maffioletti S.r.l. - Osio Sotto"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
                <a
                  href="https://maps.google.com/?q=Via+dell'Artigianato+9+24046+Osio+Sotto+BG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-ate-neutral-900 text-xs font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5 hover:bg-white transition-colors shadow-md"
                >
                  <ExternalLink className="w-3 h-3" />
                  Apri in Maps
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-ate-neutral-800/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs text-ate-neutral-600">
                © {new Date().getFullYear()} Maffioletti S.r.l. — Distributore autorizzato Earth-Rite RTR. Tutti i diritti riservati.
              </p>
              <p className="text-xs text-ate-neutral-600">
                Progettato per la sicurezza industriale ATEX
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CTAFooter;
