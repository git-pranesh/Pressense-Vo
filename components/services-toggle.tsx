'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Service {
  title: string
  description: string
  href: string
}

interface ServicesToggleProps {
  services: Service[]
}

export function ServicesToggle({ services }: ServicesToggleProps) {
  const [active, setActive] = useState(0)

  return (
    <div className="grid lg:grid-cols-2 gap-0 lg:gap-16 items-start">
      {/* Left — interactive list */}
      <div className="divide-y divide-border">
        {services.map((service, i) => (
          <button
            key={service.title}
            onClick={() => setActive(i)}
            className={`w-full text-left py-5 flex items-start justify-between gap-4 group transition-colors duration-150 ${
              active === i ? 'text-foreground' : 'text-muted-foreground/60 hover:text-foreground/80'
            }`}
            aria-expanded={active === i}
          >
            <div className="flex items-baseline gap-4">
              <span
                className="text-[11px] font-semibold tabular-nums shrink-0 transition-colors duration-150"
                style={{ color: active === i ? '#FF9A5C' : undefined }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                className="text-base sm:text-xl leading-snug text-balance transition-all duration-150"
                style={{
                  fontFamily: '"EB Garamond", Georgia, serif',
                  fontWeight: active === i ? 500 : 400,
                  color: active === i ? 'var(--foreground)' : undefined,
                }}
              >
                {service.title}
              </span>
            </div>
            {/* Plus / minus indicator */}
            <span
              className="shrink-0 mt-0.5 text-lg leading-none transition-transform duration-200"
              aria-hidden="true"
            >
              {active === i ? '−' : '+'}
            </span>
          </button>
        ))}
      </div>

      {/* Right — active service detail panel */}
      <div className="hidden lg:block sticky top-28">
        <div
          className="rounded-2xl p-10 border border-border/60"
          style={{ background: '#E5E2DB' }}
        >
          {/* Eyebrow number */}
          <span
            className="block text-xs font-semibold mb-4 tabular-nums"
            style={{ color: '#FF9A5C' }}
          >
            {String(active + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
          </span>

          <h3
            className="text-2xl sm:text-3xl font-normal text-foreground leading-tight text-balance mb-4"
            style={{ fontFamily: '"EB Garamond", Georgia, serif' }}
          >
            {services[active].title}
          </h3>

          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            {services[active].description}
          </p>

          <Link
            href={services[active].href}
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
          >
            Learn more
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Mobile: show description inline below each toggled item */}
      </div>
    </div>
  )
}
