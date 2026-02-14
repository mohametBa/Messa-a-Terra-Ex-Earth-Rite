"use client";

import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  Cpu, 
  Cable, 
  Grip, 
  Package, 
  TestTube, 
  Zap, 
  ToggleLeft,
  AlertCircle,
  Sun,
  WrapText
} from "lucide-react";

/**
 * Product Components Section - Earth-Rite RTR Landing Page
 * Tabbed interface showing all available components and accessories
 */

interface ComponentItem {
  id: string;
  name: string;
  description: string;
  image: string;
  specs?: string[];
}

interface ComponentCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
  items: ComponentItem[];
}

const componentCategories: ComponentCategory[] = [
  {
    id: "main-units",
    name: "Unità Principale",
    icon: Cpu,
    description: "Sistemi di monitoraggio certificati ATEX in diverse configurazioni",
    items: [
      {
        id: "exd-aluminum",
        name: "Versione Ex-d – Alluminio Pressofuso",
        description: "Involucro antideflagrazione in alluminio per Zone 1, certificazione ATEX/IECEx",
        image: "/images/accessories/VersioneEx-d – Alluminio Pressofuso.png",
        specs: [
          "Materiale: Alluminio pressofuso privo di rame",
          "Certificazione: Ex d[ia] IIC T6 Gb(Ga)",
          "Peso: 4.5 kg (netto)",
          "Protezione ingresso: IP 66",
          "Temperatura: -40°C a +55°C"
        ]
      },
      {
        id: "exe-grp",
        name: "Versione Ex-e – GRP",
        description: "Involucro in GRP con carica di carbonio per Zone 2, soluzione leggera",
        image: "/images/accessories/Versione Ex-e – GRP.png",
        specs: [
          "Materiale: GRP con carica di carbonio",
          "Certificazione: Ex ec nC [ia] IIC T4 Gc(Ga)",
          "Peso: 2 kg (netto)",
          "Protezione ingresso: IP 66",
          "Temperatura: -40°C a +55°C"
        ]
      },
      {
        id: "jb-storage-peg",
        name: "JB e Perno di Stivaggio Pinza",
        description: "Sistema integrato di stivaggio per pinza di messa a terra",
        image: "/images/accessories/JBePernodiStivaggioPinza.png",
        specs: [
          "Perno di stivaggio universale isolato",
          "Connettore rapido per cavo pinza",
          "Materiale nylon resistente",
          "Montaggio a parete"
        ]
      }
    ]
  },
  {
    id: "grounding-clamps",
    name: "Pinze di Terra",
    icon: Grip,
    description: "Pinze certificate ATEX in acciaio inox con punte al carburo di tungsteno",
    items: [
      {
        id: "large-clamp",
        name: "Pinza Grande ATEX (30 mm)",
        description: "Pinza heavy-duty per superfici ampie, apertura massima 38mm",
        image: "/images/accessories/PinzaGrandeATEX.png",
        specs: [
          "Corpo: Acciaio Inox (AISI 304)",
          "2 punte al carburo di tungsteno bipolari",
          "Larghezza maniglie: 38 mm",
          "Apertura massima: 30 mm",
          "Certificazione: Ex h IIC T6 Ga"
        ]
      },
      {
        id: "small-clamp",
        name: "Pinza Piccola ATEX (15 mm)",
        description: "Pinza compatta per spazi ridotti e superfici più piccole",
        image: "/images/accessories/PinzaPiccolaAtex.png",
        specs: [
          "Corpo: Acciaio Inox (AISI 304)",
          "2 punte al carburo di tungsteno",
          "Apertura massima: 15 mm",
          "Design compatto",
          "Certificazione: Ex h IIC T6 Ga"
        ]
      }
    ]
  },
  {
    id: "cables",
    name: "Cavi",
    icon: Cable,
    description: "Cavi spiralati certificati con guaina Hytrel® resistente",
    items: [
      {
        id: "hytrel-cable",
        name: "Cavo Hytrel (3, 5, 10 e 15 mt)",
        description: "Cavo spiralato a 2 conduttori con rivestimento Hytrel® statico-dissipativo",
        image: "/images/accessories/CavoHytrel.png",
        specs: [
          "Lunghezze disponibili: 3m, 5m, 10m, 15m",
          "Conduttori: 2 x 1.00 mm² in rame",
          "Guaina: Cen-Stat Hytrel blu",
          "Resistente a sostanze chimiche e abrasioni",
          "Additivi protezione UV e dissipazione statica"
        ]
      }
    ]
  },
  {
    id: "cable-reel",
    name: "Avvolgicavo",
    icon: WrapText,
    description: "Sistema di riavvolgimento automatico certificato ATEX",
    items: [
      {
        id: "atex-reel",
        name: "Avvolgicavo ATEX (15 mt)",
        description: "Rullo per cavo retrattile con riavvolgimento automatico",
        image: "/images/accessories/Avvolgicavo.png",
        specs: [
          "Lunghezza cavo: 15 metri",
          "Riavvolgimento automatico",
          "Anelli di contatto placcati in argento",
          "Bassissima resistenza",
          "Certificazione: ATEX II 2 GD T6"
        ]
      }
    ]
  },
  {
    id: "strain-relief",
    name: "Antistrappo",
    icon: Cable,
    description: "Connettori di protezione per cavi e collegamenti",
    items: [
      {
        id: "quick-connector",
        name: "Connettore Antistrappo",
        description: "Connettore rapido per collegamento sicuro e veloce della pinza",
        image: "/images/accessories/Antistrappo.png",
        specs: [
          "Connessione rapida",
          "Protezione antistrappo",
          "Contatti placcati",
          "Resistente all'usura"
        ]
      }
    ]
  },
  {
    id: "installation-kits",
    name: "Kit Installazione",
    icon: Package,
    description: "Kit completi di pressacavi certificati Ex per diverse configurazioni",
    items: [
      {
        id: "armored-kit",
        name: "Kit per Cavi Armati",
        description: "Kit A - Pressacavi Ex(d) IP68 per cavo armato da 9 a 13.5 mm Ø",
        image: "/images/accessories/kitA.png",
        specs: [
          "2x Pressacavi Ex(d) IP68 per cavo armato (9-13.5mm Ø)",
          "3x Pressacavi Ex(d) IP68 per cavo non armato (4-8.4mm Ø)",
          "3m cavo conduttore bipolare",
          "2x 1m cavo verde circuito di terra",
          "Connettori PCB e occhielli 10mm pre-montati"
        ]
      },
      {
        id: "unarmored-kit",
        name: "Kit per Cavi Non Armati",
        description: "Kit B - Pressacavi Ex(d) IP68 per cavi non armati",
        image: "/images/accessories/kitB.png",
        specs: [
          "5x Pressacavi Ex(d) IP68 per cavo non armato (4-8.4mm Ø)",
          "3m cavo conduttore bipolare",
          "2x 1m cavo verde circuito di terra",
          "Connettori PCB e occhielli pre-montati",
          "Pressacavo plastica IP68 per scatola giunzione"
        ]
      },
      {
        id: "grp-kit",
        name: "Kit per Versione GRP",
        description: "Kit C - Pressacavi Ex(e) IP68 per installazioni GRP",
        image: "/images/accessories/kitC.png",
        specs: [
          "5x Pressacavi Ex(e) IP68 per cavo non armato (6-13mm Ø)",
          "3m cavo conduttore bipolare",
          "2x 1m cavo verde circuito di terra",
          "Ottimizzato per involucri GRP",
          "Connettori e terminali inclusi"
        ]
      }
    ]
  },
  {
    id: "tester",
    name: "Tester",
    icon: TestTube,
    description: "Strumenti di test per installazione e manutenzione",
    items: [
      {
        id: "crt-tester",
        name: "Tester Installazione e Manutenzione",
        description: "Tester di capacitanza e resistenza (CRT) per verifica funzionamento sistema",
        image: "/images/accessories/TesterInstallazioneeManutenzione.png",
        specs: [
          "Verifica capacitanza e resistenza",
          "Indicazione PASS/FAIL semplice",
          "Necessario per messa in servizio",
          "Controlli manutenzione periodica",
          "Caratteristiche elettriche autocisterna simulate"
        ]
      }
    ]
  },
  {
    id: "switch-si",
    name: "Switch S.I.",
    icon: Zap,
    description: "Switching a sicurezza intrinseca per circuiti certificati",
    items: [
      {
        id: "is-pcb",
        name: "PCB Contatti a Sicurezza Intrinseca",
        description: "Scheda per interfacciamento diretto con circuiti a sicurezza intrinseca",
        image: "/images/accessories/PCBContattiaSicurezzaIntrinseca.png",
        specs: [
          "30V DC, 500 mA",
          "Li = 0H, Ci = 0F",
          "Compatibile NAMUR",
          "Adatto circuiti Ex ia, ib, ic",
          "Nessun impatto parametri elettrici"
        ]
      }
    ]
  },
  {
    id: "selector",
    name: "Selettore",
    icon: ToggleLeft,
    description: "Selettore per esclusione controllo capacità",
    items: [
      {
        id: "capacity-bypass",
        name: "Esclusione Controllo Capacità",
        description: "Selettore per bypassare il controllo di capacitanza in applicazioni specifiche",
        image: "/images/accessories/EsclusioneControlloCapacità.png",
        specs: [
          "Bypass controllo capacitanza",
          "Uso in applicazioni speciali",
          "Mantenimento monitoraggio resistenza",
          "Installazione semplice"
        ]
      }
    ]
  },
  {
    id: "strobe-light",
    name: "Lampeggiante",
    icon: AlertCircle,
    description: "Segnalazione visiva certificata ATEX per stato messa a terra",
    items: [
      {
        id: "atex-strobe",
        name: "Lampeggiante ATEX",
        description: "Lampeggiante stroboscopico certificato per segnalazione stato messa a terra",
        image: "/images/accessories/LampeggianteAtex.png",
        specs: [
          "Opzioni: 115V/230V AC e 24V DC",
          "Certificazione: Ex d IIC T4/T5",
          "Temperatura: -50°C a +70°C",
          "Montaggio in posizione elevata",
          "Segnalazione visiva chiara"
        ]
      }
    ]
  },
  {
    id: "sun-shield",
    name: "Parasole",
    icon: Sun,
    description: "Protezione per indicatori LED esposti a luce solare intensa",
    items: [
      {
        id: "led-shield",
        name: "Schermo Parasole",
        description: "Schermo in acciaio inox per protezione indicatori LED dalla luce solare",
        image: "/images/accessories/SchermoParasole.png",
        specs: [
          "Acciaio inossidabile resistente",
          "Installazione rapida (pochi minuti)",
          "Proietta ombra sugli indicatori",
          "Garantisce visibilità LED",
          "Compatibile tutte installazioni"
        ]
      }
    ]
  }
];

export const ProductComponents = () => {
  const [activeTab, setActiveTab] = useState(componentCategories[0].id);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const activeCategory = componentCategories.find(cat => cat.id === activeTab) || componentCategories[0];

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 lg:py-32 bg-white"
      aria-label="Componenti e Accessori"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Componenti Principali e Accessori
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Configurazione modulare con componenti certificati ATEX per ogni esigenza applicativa
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex overflow-x-auto pb-2 gap-2 scrollbar-hide">
            {componentCategories.map((category) => {
              const Icon = category.icon;
              const isActive = activeTab === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`
                    flex items-center gap-2 px-6 py-3 rounded-lg font-medium whitespace-nowrap
                    transition-all duration-300 border-2
                    ${isActive 
                      ? 'bg-[#E31E24] text-white border-[#E31E24] shadow-lg shadow-red-500/20' 
                      : 'bg-white text-gray-700 border-gray-200 hover:border-[#E31E24] hover:text-[#E31E24]'
                    }
                  `}
                  aria-label={`Mostra ${category.name}`}
                  aria-selected={isActive}
                  role="tab"
                >
                  <Icon className="w-5 h-5" />
                  {category.name}
                  {category.items.length > 1 && (
                    <span className={`
                      ml-1 px-2 py-0.5 rounded-full text-xs font-semibold
                      ${isActive ? 'bg-white/20' : 'bg-gray-100'}
                    `}>
                      {category.items.length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Category Description */}
            <div className="mb-8 p-6 bg-gradient-to-r from-gray-50 to-red-50 rounded-xl border border-gray-200">
              <p className="text-gray-700 text-lg">
                {activeCategory.description}
              </p>
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeCategory.items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-[#E31E24] hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-64 bg-white overflow-hidden flex items-center justify-center p-4 rounded-t-xl">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E31E24] transition-colors">
                      {item.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Specs */}
                    {item.specs && item.specs.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-gray-700 mb-2">
                          Specifiche Tecniche:
                        </p>
                        <ul className="space-y-1.5">
                          {item.specs.slice(0, 3).map((spec, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                              <svg 
                                className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="leading-tight">{spec}</span>
                            </li>
                          ))}
                          {item.specs.length > 3 && (
                            <li className="text-sm text-gray-500 italic pl-6">
                              +{item.specs.length - 3} altre specifiche
                            </li>
                          )}
                        </ul>
                      </div>
                    )}

                    {/* View Details Button */}
                    <button
                      className="mt-6 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 font-medium hover:bg-[#E31E24] hover:text-white hover:border-[#E31E24] transition-all duration-300 group/btn"
                      onClick={() => console.log(`View details: ${item.id}`)}
                      aria-label={`Vedi dettagli ${item.name}`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        Vedi Scheda Tecnica
                        <svg 
                          className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

       
      </div>
    </section>
  );
};

export default ProductComponents;