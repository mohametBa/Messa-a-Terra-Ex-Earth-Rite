/**
 * Loading State Component
 * 
 * Displays a skeleton loading state that matches the structure
 * of the main page while content is being loaded.
 */

export default function Loading() {
  return (
    <div className="relative min-h-screen animate-pulse">
      {/* Skip to content placeholder for accessibility */}
      <div className="sr-only">Caricamento in corso...</div>

      {/* Section 1: Hero Skeleton */}
      <section className="relative min-h-screen bg-gradient-to-br from-ate-primary-900 via-ate-primary-800 to-ate-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          {/* Badge skeleton */}
          <div className="flex justify-center mb-8">
            <div className="h-6 w-32 bg-ate-primary-600/50 rounded-full" />
          </div>

          {/* Hero title skeleton */}
          <div className="max-w-4xl mx-auto text-center mb-8">
            <div className="h-12 md:h-16 lg:h-20 bg-ate-primary-600/30 rounded-lg mx-auto max-w-3xl mb-6" />
            <div className="h-10 md:h-14 lg:h-16 bg-ate-primary-600/20 rounded-lg mx-auto max-w-2xl" />
          </div>

          {/* Hero description skeleton */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="h-6 bg-ate-primary-500/30 rounded mb-3" />
            <div className="h-6 bg-ate-primary-500/30 rounded w-3/4 mx-auto" />
          </div>

          {/* CTA buttons skeleton */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <div className="h-12 w-48 bg-ate-accent-500/30 rounded-lg mx-auto sm:mx-0" />
            <div className="h-12 w-48 bg-white/10 rounded-lg mx-auto sm:mx-0" />
          </div>

          {/* Product image/visual skeleton */}
          <div className="relative max-w-5xl mx-auto">
            <div className="aspect-video bg-ate-primary-900/50 rounded-2xl border border-ate-primary-600/30" />
          </div>
        </div>
      </section>

      {/* Section 2: Trust Bar Skeleton */}
      <section className="py-16 bg-ate-neutral-50 border-y border-ate-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="h-8 w-64 bg-ate-neutral-200 rounded mx-auto" />
          </div>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-12 w-32 bg-ate-neutral-200 rounded"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Problem/Solution Skeleton */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="h-4 w-24 bg-ate-accent-100 rounded mx-auto mb-4" />
            <div className="h-10 w-3/4 bg-ate-neutral-200 rounded mx-auto mb-4" />
            <div className="h-6 w-2/3 bg-ate-neutral-100 rounded mx-auto" />
          </div>

          {/* Cards grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-ate-neutral-50 rounded-2xl p-8 border border-ate-neutral-100">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-ate-primary-100 rounded-xl flex-shrink-0" />
                  <div className="flex-1">
                    <div className="h-6 w-3/4 bg-ate-neutral-200 rounded mb-3" />
                    <div className="h-4 w-full bg-ate-neutral-100 rounded mb-2" />
                    <div className="h-4 w-5/6 bg-ate-neutral-100 rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Technical Features Skeleton */}
      <section className="py-20 md:py-28 bg-ate-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="h-4 w-32 bg-ate-accent-500/30 rounded mx-auto mb-4" />
            <div className="h-10 w-3/4 bg-ate-neutral-700 rounded mx-auto mb-4" />
            <div className="h-6 w-2/3 bg-ate-neutral-800 rounded mx-auto" />
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-ate-neutral-800 rounded-xl p-6 border border-ate-neutral-700">
                <div className="h-10 w-10 bg-ate-accent-500/20 rounded-lg mb-4" />
                <div className="h-6 w-3/4 bg-ate-neutral-600 rounded mb-3" />
                <div className="h-4 w-full bg-ate-neutral-700 rounded mb-2" />
                <div className="h-4 w-5/6 bg-ate-neutral-700 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Technical Specs Skeleton */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="h-4 w-28 bg-ate-primary-100 rounded mx-auto mb-4" />
            <div className="h-10 w-2/3 bg-ate-neutral-200 rounded mx-auto" />
          </div>

          {/* Specs grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-ate-neutral-900 rounded-xl p-6 border border-ate-neutral-700">
                <div className="h-8 w-20 bg-ate-accent-500/20 rounded mb-3" />
                <div className="h-10 w-full bg-ate-neutral-700 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Social Proof Skeleton */}
      <section className="py-20 md:py-28 bg-ate-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="h-4 w-40 bg-ate-primary-100 rounded mx-auto mb-4" />
            <div className="h-10 w-3/4 bg-ate-neutral-200 rounded mx-auto" />
          </div>

          {/* Testimonials grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-ate-neutral-100">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div key={star} className="h-5 w-5 bg-ate-accent-200 rounded" />
                  ))}
                </div>
                {/* Quote */}
                <div className="h-4 w-full bg-ate-neutral-100 rounded mb-3" />
                <div className="h-4 w-5/6 bg-ate-neutral-100 rounded mb-6" />
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-ate-neutral-200 rounded-full" />
                  <div>
                    <div className="h-4 w-32 bg-ate-neutral-200 rounded mb-1" />
                    <div className="h-3 w-24 bg-ate-neutral-100 rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: CTA Footer Skeleton */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-ate-primary-700 to-ate-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="h-4 w-32 bg-white/10 rounded mx-auto mb-6" />
          <div className="h-12 w-3/4 bg-white/10 rounded mx-auto mb-6" />
          <div className="h-6 w-1/2 bg-white/10 rounded mx-auto mb-10" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="h-12 w-48 bg-white/20 rounded-lg mx-auto sm:mx-0" />
            <div className="h-12 w-48 bg-transparent border border-white/30 rounded-lg mx-auto sm:mx-0" />
          </div>
        </div>
      </section>

      {/* Loading indicator overlay */}
      <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm pointer-events-none">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-ate-primary-200 border-t-ate-primary-600 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-ate-neutral-600 font-medium">Caricamento...</p>
        </div>
      </div>
    </div>
  );
}
