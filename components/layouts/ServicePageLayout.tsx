import React from 'react'

interface ServicePageLayoutProps {
  children: React.ReactNode
  /** Eyebrow label above h1 */
  eyebrow?: string
  /** Main heading */
  heading: string
  /** Subheading/description under h1 */
  subheading?: string
}

/**
 * ServicePageLayout — Standardized layout for ~35 service pages
 * Enforces consistent structure, spacing, and color scheme
 * 
 * Structure:
 * 1. Hero section (cream bg) — eyebrow + h1 + subheading
 * 2. Content sections (alternating white/cream via globals.css)
 * 3. Final CTA section (dark bg)
 */
export function ServicePageLayout({
  children,
  eyebrow,
  heading,
  subheading,
}: ServicePageLayoutProps) {
  return (
    <main className="w-full">
      {/* Hero section — cream background, controlled height */}
      <section
        id="service-hero"
        className="hero-section bg-background py-32 lg:py-48"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {eyebrow && (
            <div className="mb-6">
              <span className="eyebrow text-brand font-medium text-sm uppercase tracking-widest">
                {eyebrow}
              </span>
            </div>
          )}
          <h1 className="text-5xl lg:text-6xl font-serif font-normal text-foreground mb-6 leading-tight">
            {heading}
          </h1>
          {subheading && (
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed font-sans">
              {subheading}
            </p>
          )}
        </div>
      </section>

      {/* Content sections — children handle their own section structure */}
      {children}
    </main>
  )
}
