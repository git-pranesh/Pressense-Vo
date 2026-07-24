'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Step {
  label: string
  description: string
  detail: string
}

export function HowItWorksAccordion({ steps }: { steps: Step[] }) {
  const [active, setActive] = useState(0)

  return (
    <div className="grid lg:grid-cols-2 gap-0 lg:gap-20 items-start">

      {/* Left — display-scale step labels */}
      <div>
        {steps.map((step, i) => (
          <button
            key={step.label}
            onClick={() => setActive(i)}
            className="w-full text-left flex items-center justify-between gap-4 py-2 group transition-all duration-200"
            aria-expanded={active === i}
          >
            <span
              className="heading-font leading-none tracking-tight transition-all duration-300"
              style={{
                fontSize: 'clamp(48px, 7vw, 80px)',
                fontWeight: 400,
                color: active === i ? '#1A0F06' : 'rgba(26,15,6,0.15)',
              }}
            >
              {step.label}
            </span>
            <span
              className="shrink-0 text-sm font-medium transition-opacity duration-200"
              style={{ color: active === i ? '#FF9A5C' : 'transparent' }}
              aria-hidden="true"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M12 5l5 5-5 5" stroke="#FF9A5C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        ))}

        <div className="mt-10">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
          >
            See how it works in full
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Right — active step detail card, sticky */}
      <div className="hidden lg:block sticky top-28">
        <div
          className="rounded-2xl p-8 border"
          style={{ background: '#E5E2DB', borderColor: '#D4CFC7' }}
        >
          <span
            className="block text-xs font-semibold uppercase tracking-widest mb-6"
            style={{ color: '#FF9A5C' }}
          >
            {String(active + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
          </span>

          <h3
            className="text-2xl sm:text-3xl font-normal text-foreground leading-snug text-balance mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {steps[active].label}
          </h3>

          <p className="text-base text-muted-foreground leading-relaxed mb-4">
            {steps[active].description}
          </p>

          <p className="text-sm leading-relaxed" style={{ color: '#9A8C80' }}>
            {steps[active].detail}
          </p>
        </div>
      </div>

    </div>
  )
}
