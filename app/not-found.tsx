import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

/**
 * 404 - Not Found Page
 * 
 * Custom error page displayed when a user navigates to
 * a non-existent route. Matches the brand styling.
 */

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ate-primary-900 via-ate-primary-800 to-ate-primary-700 flex items-center justify-center px-4">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-lg mx-auto text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <span className="text-ate-accent-500 text-9xl font-bold tracking-tighter">
            404
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Pagina Non Trovata
        </h1>

        {/* Description */}
        <p className="text-ate-neutral-300 text-lg mb-8">
          La pagina che stai cercando non esiste o è stata spostata.
          Controlla l'URL o torna alla homepage.
        </p>

        {/* Back to home button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-ate-accent-500 text-white font-semibold rounded-lg hover:bg-ate-accent-600 hover:shadow-lg hover:shadow-ate-accent-500/25 focus:outline-none focus:ring-2 focus:ring-ate-accent-500 focus:ring-offset-2 focus:ring-offset-ate-primary-900 transition-all duration-200"
        >
          <ChevronLeft className="w-5 h-5" />
          Torna alla Homepage
        </Link>

        {/* Additional help */}
        <div className="mt-8 text-sm text-ate-neutral-400">
          <p>Hai bisogno di aiuto?{' '}</p>
          <a
            href="/contact"
            className="text-ate-accent-400 hover:text-ate-accent-300 underline"
          >
            Contattaci
          </a>
          {' '}per assistenza.
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-ate-accent-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-ate-primary-500/10 rounded-full blur-3xl" />
    </div>
  );
}
