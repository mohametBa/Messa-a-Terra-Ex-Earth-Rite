'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

// Import all section components
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import ProblemSolution from '@/components/sections/ProblemSolution';
import TechnicalFeatures from '@/components/sections/TechnicalFeatures';
import TechnicalSpecs from '@/components/sections/TechnicalSpecs';
import Accessoires from '@/components/sections/Accessoires';
import CTAFooter from '@/components/sections/CTAFooter';
import AnimatedBackground from '@/components/Background';

// Section tracking configuration
const SECTION_CONFIG = {
  hero: { id: 'hero', label: 'Hero' },
  trustbar: { id: 'trustbar', label: 'Trust Bar' },
  problem: { id: 'problem', label: 'Problema e Soluzione' },
  features: { id: 'features', label: 'Caratteristiche' },
  specs: { id: 'specs', label: 'Specifiche' },
  social: { id: 'social', label: 'Social Proof' },
  accessoires: { id: 'accessoires', label: 'Accessoires' },
  cta: { id: 'cta', label: 'CTA' },
} as const;

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  
  // Smooth scroll progress animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Scroll detection handler
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    
    // Show/hide scroll to top button
    setShowScrollTop(scrollPosition > 500);

    // Track active section
    const sections = Object.values(SECTION_CONFIG);
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i].id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    }
  }, []);

  // Scroll to top function
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  // Set up scroll listener and loading state
  useEffect(() => {
    // Simulate hydration delay for smooth UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [handleScroll]);

  // Log section visibility for analytics (development)
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`Active section: ${activeSection}`);
    }
  }, [activeSection]);

  return (
    <>
      {/* Background Animation - Outside main for proper z-index stacking */}
      <AnimatedBackground />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-ate-accent-500 to-ate-primary-600 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Main Content */}
      <main id="main-content" className="relative z-10" role="main">
        {/* Page Transition Overlay */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-white flex items-center justify-center"
            >
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-ate-primary-200 border-t-ate-primary-600 rounded-full animate-spin mx-auto mb-4" />
                <p className="text-ate-neutral-600">Caricamento...</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* All Sections */}
        <div className="flex flex-col">
          {/* Section 1: Hero */}
          <section
            id={SECTION_CONFIG.hero.id}
            data-section={SECTION_CONFIG.hero.label}
            aria-label={SECTION_CONFIG.hero.label}
          >
            <Hero />
          </section>

          {/* Section 2: Trust Bar */}
          <section
            id={SECTION_CONFIG.trustbar.id}
            data-section={SECTION_CONFIG.trustbar.label}
            aria-label={SECTION_CONFIG.trustbar.label}
          >
            <TrustBar />
          </section>

          {/* Section 3: Problem Solution */}
          <section
            id={SECTION_CONFIG.problem.id}
            data-section={SECTION_CONFIG.problem.label}
            aria-label={SECTION_CONFIG.problem.label}
          >
            <ProblemSolution />
          </section>

          {/* Section 4: Technical Features */}
          <section
            id={SECTION_CONFIG.features.id}
            data-section={SECTION_CONFIG.features.label}
            aria-label={SECTION_CONFIG.features.label}
          >
            <TechnicalFeatures />
          </section>

          {/* Section 5: Technical Specs */}
          <section
            id={SECTION_CONFIG.specs.id}
            data-section={SECTION_CONFIG.specs.label}
            aria-label={SECTION_CONFIG.specs.label}
          >
            <TechnicalSpecs />
          </section>

         

          {/* Section 7: Accessoires */}
          <section
            id={SECTION_CONFIG.accessoires.id}
            data-section={SECTION_CONFIG.accessoires.label}
            aria-label={SECTION_CONFIG.accessoires.label}
          >
            <Accessoires />
          </section>

          {/* Section 8: CTA Footer */}
          <section
            id={SECTION_CONFIG.cta.id}
            data-section={SECTION_CONFIG.cta.label}
            aria-label={SECTION_CONFIG.cta.label}
          >
            <CTAFooter />
          </section>
        </div>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 z-40 p-3 min-w-[48px] min-h-[48px] bg-ate-primary-700 text-white rounded-full shadow-lg hover:bg-ate-primary-600 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ate-accent-500 focus:ring-offset-2 transition-all duration-200"
              aria-label="Torna all'inizio della pagina"
              title="Torna all'inizio"
              data-cta="scroll-to-top"
            >
              <ChevronUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Active Section Indicator (Development/Debug) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="fixed bottom-8 left-8 z-40 px-3 py-1 bg-ate-neutral-900 text-white text-xs rounded-full opacity-50">
            {activeSection}
          </div>
        )}
      </main>
    </>
  );
}
