import React from 'react'

interface LocationPageLayoutProps {
  children: React.ReactNode
  /** Service name (e.g., "Fractional CMO") */
  service: string
  /** City name (e.g., "San Francisco") */
  city: string
  /** Brief local context/description */
  description?: string
}

/**
 * LocationPageLayout — Standardized layout for ~15 location/SEO pages
 * Enforces consistent structure for city-specific service pages
 * 
 * Structure:
 * 1. Hero section (cream bg) — Service + City in heading
 * 2. Local context section (white bg)
 * 3. Services offered section (cream bg)
 * 4. Why Pressense section (white bg)
 * 5. CTA section (dark bg)
 */
export function LocationPageLayout({
  children,
  service,
  city,
  description,
}: LocationPageLayoutProps) {
  return (
    <main className="w-full">
      {/* Hero section — cream background */}
      <section
        id="location-hero"
        className="hero-section bg-background py-32 lg:py-48"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span className="eyebrow text-color-purple font-medium text-sm uppercase tracking-widest mb-6 inline-block">
            Services in {city}
          </span>
          <h1 className="text-5xl lg:text-6xl font-serif font-normal text-foreground mb-6 leading-tight">
            {service} in {city}
          </h1>
          {description && (
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed font-sans">
              {description}
            </p>
          )}
        </div>
      </section>

      {/* Content sections — children handle their own section structure */}
      {children}
    </main>
  )
}
