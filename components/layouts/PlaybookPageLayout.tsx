import React from 'react'

interface PlaybookMetadata {
  bestFor?: string
  relatedService?: string
  primarySymptom?: string
  timeToRead?: string
}

interface PlaybookPageLayoutProps {
  children: React.ReactNode
  /** Playbook title */
  title: string
  /** Brief description of the playbook */
  description?: string
  /** Metadata card information */
  metadata?: PlaybookMetadata
}

/**
 * PlaybookPageLayout — Standardized layout for ~12 playbook pages
 * Enforces consistent structure with metadata card, visual hierarchy
 * 
 * Structure:
 * 1. Hero section (cream bg) — "PLAYBOOK" eyebrow + title + description + metadata card
 * 2. Content sections (step-by-step, outcomes, etc.)
 * 3. Related playbooks grid
 * 4. CTA section (dark bg)
 */
export function PlaybookPageLayout({
  children,
  title,
  description,
  metadata,
}: PlaybookPageLayoutProps) {
  return (
    <main className="w-full">
      {/* Hero section — cream background */}
      <section
        id="playbook-hero"
        className="hero-section bg-background py-32 lg:py-48"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span className="eyebrow text-color-purple font-medium text-sm uppercase tracking-widest mb-6 inline-block">
            Playbook
          </span>
          <h1 className="text-5xl lg:text-6xl font-serif font-normal text-foreground mb-6 leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed font-sans mb-12">
              {description}
            </p>
          )}

          {/* Metadata card — purple left border accent */}
          {metadata && (
            <div className="border-l-4 border-color-purple bg-surface p-6 rounded-lg max-w-2xl">
              <div className="grid grid-cols-2 gap-6">
                {metadata.bestFor && (
                  <div>
                    <p className="text-xs font-medium text-text-muted uppercase tracking-wider mb-2">
                      Best For
                    </p>
                    <p className="text-foreground font-sans">{metadata.bestFor}</p>
                  </div>
                )}
                {metadata.relatedService && (
                  <div>
                    <p className="text-xs font-medium text-text-muted uppercase tracking-wider mb-2">
                      Related Service
                    </p>
                    <p className="text-foreground font-sans">
                      <a
                        href={`/${metadata.relatedService.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-color-purple underline hover:opacity-80"
                      >
                        {metadata.relatedService}
                      </a>
                    </p>
                  </div>
                )}
                {metadata.primarySymptom && (
                  <div>
                    <p className="text-xs font-medium text-text-muted uppercase tracking-wider mb-2">
                      Primary Symptom
                    </p>
                    <p className="text-foreground font-sans">{metadata.primarySymptom}</p>
                  </div>
                )}
                {metadata.timeToRead && (
                  <div>
                    <p className="text-xs font-medium text-text-muted uppercase tracking-wider mb-2">
                      Time to Read
                    </p>
                    <p className="text-foreground font-sans">{metadata.timeToRead}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Content sections — children handle their own section structure */}
      {children}
    </main>
  )
}
