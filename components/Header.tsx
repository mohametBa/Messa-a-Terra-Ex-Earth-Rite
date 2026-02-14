'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

interface NavSubItem {
  label: string;
  href: string;
  description?: string;
}

interface NavItem {
  label: string;
  href: string;
  isDisabled?: boolean;
  hasDropdown?: boolean;
  subItems?: NavSubItem[];
}

const navItems: NavItem[] = [
  { 
    label: 'Earth-Rite', 
    href: '/', 
    hasDropdown: true,
    subItems: [
      { 
        label: 'Earth-Rite RTR', 
        href: '/#hero',
        description: 'Sistema di messa a terra per cisterne stradali'
      },
      { label: 'Earth-Rite MGV', href: '/earth-rite-mgv', description: 'Per serbatoi mobili' },
      { label: 'Earth-Rite MMultipoint', href: '/earth-rite-mmultipoint', description: 'Connessioni multiple' },
      { label: 'Earth-Rite PLUS', href: '/earth-rite-plus', description: 'Versione avanzata' },
      { label: 'Earth-Rite DGS', href: '/earth-rite-dgs', description: 'Per fusti e vasche' },
      { label: 'Earth-Rite FIBC', href: '/earth-rite-fibc', description: 'Per sacchi big bag' },
      { label: 'Earth-Rite OMEGA', href: '/earth-rite-omega', description: 'Modulare e compatto' },
    ]
  },
  { label: 'Bond-Rite', href: '/bond-rite', isDisabled: true },
  { label: 'Cen-Stat', href: '/cen-stat', isDisabled: true },
  { label: 'Tester', href: '/tester', isDisabled: true },
  { label: 'Risorse', href: '/risorse', isDisabled: true },
  { label: 'Servizi', href: '/servizi', isDisabled: true },
  { label: 'Contatti', href: '/contatti', isDisabled: true },
];

const rtrSubItems: NavSubItem[] = [
  { label: 'Panoramica', href: '/#hero' },
  { label: 'Problema e Soluzione', href: '/#problem' },
  { label: 'Caratteristiche Tecniche', href: '/#features' },
  { label: 'Specifiche', href: '/#specs' },
  { label: 'Prove Sociali', href: '/#social' },
  { label: 'Accessori', href: '/#accessoires' },
  { label: 'Richiedi Preventivo', href: '/#cta' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openRTRSubmenu, setOpenRTRSubmenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const rtrMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
      if (rtrMenuRef.current && !rtrMenuRef.current.contains(event.target as Node)) {
        setOpenRTRSubmenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-ate-neutral-200 shadow-sm">
      <nav className="container-custom" aria-label="Navigation principale">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 group"
            aria-label="Messa a Terra Ex - Accueil"
          >
            <div className="relative flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12">
              <Image 
                src="/images/logo.png" 
                alt="Messa a Terra Ex Logo"
                width={48}
                height={48}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs lg:text-sm font-semibold text-ate-primary-700 tracking-wide uppercase">
                Messa a Terra Ex
              </span>
              <span className="text-sm lg:text-base font-bold text-ate-neutral-900 leading-none">
                Earth-Rite
              </span>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href} className="relative">
                {item.isDisabled ? (
                  <span 
                    className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-ate-neutral-400 cursor-not-allowed rounded-lg transition-colors duration-200"
                    title="Pagina non disponibile"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </span>
                ) : item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:text-ate-primary-700 hover:bg-ate-neutral-50 ${
                        openDropdown === item.label ? 'text-ate-primary-700 bg-ate-neutral-50' : 'text-ate-neutral-600'
                      }`}
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <svg 
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {openDropdown === item.label && item.subItems && (
                      <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-ate-neutral-200 py-2 animate-fade-in-down">
                        {item.subItems.map((subItem) => (
                          <div key={subItem.href}>
                            {subItem.label === 'Earth-Rite RTR' ? (
                              <div 
                                className="relative group"
                                onMouseEnter={() => setOpenRTRSubmenu(true)}
                                onMouseLeave={() => setOpenRTRSubmenu(false)}
                                ref={rtrMenuRef}
                              >
                                <Link
                                  href={subItem.href}
                                  className="flex items-center justify-between px-4 py-3 text-sm text-ate-neutral-700 hover:bg-ate-neutral-50 hover:text-ate-primary-700 transition-colors duration-150"
                                  onClick={() => {
                                    setOpenDropdown(null);
                                    setIsMobileMenuOpen(false);
                                  }}
                                >
                                  <div className="flex flex-col">
                                    <span className="font-medium">{subItem.label}</span>
                                    {subItem.description && (
                                      <span className="text-xs text-ate-neutral-400 mt-0.5">{subItem.description}</span>
                                    )}
                                  </div>
                                  <svg className="w-4 h-4 text-ate-neutral-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </Link>

                                {/* RTR Submenu */}
                                {openRTRSubmenu && (
                                  <div className="absolute top-0 left-full ml-1 w-56 bg-white rounded-xl shadow-xl border border-ate-neutral-200 py-2 animate-fade-in-left">
                                    <div className="px-4 py-2 text-xs font-semibold text-ate-primary-700 uppercase tracking-wide bg-ate-primary-50 rounded-t-lg mx-2 mt-2">
                                      Sezioni RTR
                                    </div>
                                    {rtrSubItems.map((rtrItem) => (
                                      <Link
                                        key={rtrItem.href}
                                        href={rtrItem.href}
                                        className="block px-4 py-2.5 text-sm text-ate-neutral-700 hover:bg-ate-neutral-50 hover:text-ate-primary-700 transition-colors duration-150"
                                        onClick={() => {
                                          setOpenDropdown(null);
                                          setOpenRTRSubmenu(false);
                                          setIsMobileMenuOpen(false);
                                        }}
                                      >
                                        {rtrItem.label}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <Link
                                href={subItem.href}
                                className="flex flex-col px-4 py-3 text-sm text-ate-neutral-700 hover:bg-ate-neutral-50 hover:text-ate-primary-700 transition-colors duration-150"
                                onClick={() => {
                                  setOpenDropdown(null);
                                  setIsMobileMenuOpen(false);
                                }}
                              >
                                <span className="font-medium">{subItem.label}</span>
                                {subItem.description && (
                                  <span className="text-xs text-ate-neutral-400 mt-0.5">{subItem.description}</span>
                                )}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:text-ate-primary-700 ${
                      pathname === item.href
                        ? 'text-ate-primary-700 bg-ate-primary-50'
                        : 'text-ate-neutral-600 hover:bg-ate-neutral-50'
                    }`}
                    aria-current={pathname === item.href ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Link 
              href="/contatti"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-ate-accent-500 rounded-lg shadow-md hover:bg-ate-accent-600 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                />
              </svg>
              Richiedi Info
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-ate-neutral-600 hover:text-ate-primary-700 hover:bg-ate-neutral-100 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Chiudi menu' : 'Apri menu'}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-menu"
            className="lg:hidden py-4 border-t border-ate-neutral-200 animate-fade-in-down"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  {item.isDisabled ? (
                    <span 
                      className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-ate-neutral-400 cursor-not-allowed rounded-lg"
                    >
                      {item.label}
                      {item.hasDropdown && (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </span>
                  ) : item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.label)}
                        className={`flex items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                          openDropdown === item.label
                            ? 'text-ate-primary-700 bg-ate-primary-50'
                            : 'text-ate-neutral-600 hover:bg-ate-neutral-50'
                        }`}
                        aria-expanded={openDropdown === item.label}
                      >
                        {item.label}
                        <svg 
                          className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Mobile Dropdown */}
                      {openDropdown === item.label && item.subItems && (
                        <div className="mt-1 ml-4 border-l-2 border-ate-neutral-200 pl-4 space-y-1">
                          {item.subItems.map((subItem) => (
                            <div key={subItem.href}>
                              {subItem.label === 'Earth-Rite RTR' ? (
                                <div>
                                  <Link
                                    href={subItem.href}
                                    className="flex items-center justify-between px-4 py-2.5 text-sm font-medium text-ate-primary-700 hover:bg-ate-primary-50 rounded-lg"
                                    onClick={() => {
                                      setOpenDropdown(null);
                                      setIsMobileMenuOpen(false);
                                    }}
                                  >
                                    {subItem.label}
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                  </Link>
                                  
                                  {/* RTR Submenu Mobile */}
                                  <div className="mt-1 ml-4 border-l-2 border-ate-primary-200 pl-4 space-y-1">
                                    {rtrSubItems.map((rtrItem) => (
                                      <Link
                                        key={rtrItem.href}
                                        href={rtrItem.href}
                                        className="block px-4 py-2 text-sm text-ate-neutral-600 hover:text-ate-primary-700 hover:bg-ate-neutral-50 rounded-lg"
                                        onClick={() => {
                                          setOpenDropdown(null);
                                          setIsMobileMenuOpen(false);
                                        }}
                                      >
                                        {rtrItem.label}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <Link
                                  href={subItem.href}
                                  className="block px-4 py-2.5 text-sm text-ate-neutral-600 hover:text-ate-primary-700 hover:bg-ate-neutral-50 rounded-lg"
                                  onClick={() => {
                                    setOpenDropdown(null);
                                    setIsMobileMenuOpen(false);
                                  }}
                                >
                                  {subItem.label}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                        pathname === item.href
                          ? 'text-ate-primary-700 bg-ate-primary-50'
                          : 'text-ate-neutral-600 hover:bg-ate-neutral-50'
                      }`}
                      aria-current={pathname === item.href ? 'page' : undefined}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                      {pathname === item.href && (
                        <svg className="w-4 h-4 ml-auto text-ate-accent-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            
            {/* CTA Mobile */}
            <div className="mt-4 pt-4 border-t border-ate-neutral-200">
              <Link 
                href="/contatti"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold text-white bg-ate-accent-500 rounded-lg hover:bg-ate-accent-600 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                  />
                </svg>
                Richiedi Informazioni
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
