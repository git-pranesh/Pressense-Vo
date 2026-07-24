'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Step {
  label: string
  description: string
  detail: string
  image: string
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
            className="w-full text-left flex items-center justify-between gap-4 py-2 group transition-all duration-200 cursor-pointer"
            aria-expanded={active === i}
          >
            <span
              className="leading-none tracking-tight transition-all duration-300"
              style={{
                fontFamily: '"EB Garamond", Georgia, serif',
                fontSize: 'clamp(48px, 7vw, 80px)',
                fontWeight: 400,
                color: active === i ? '#1A0F06' : 'rgba(26,15,6,0.15)',
              }}
            >
              {step.label}
            </span>
            <span
              className="shrink-0 text-sm font-medium transition-opacity duration-200"
              style={{ color: active === i ? '#6B5D51' : 'transparent' }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M12 5l5 5-5 5" stroke="#6B5D51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

      {/* Right — active step detail card, sticky, with photo background */}
      <div className="hidden lg:block sticky top-28">
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            backgroundImage: `url(${steps[active].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '420px',
          }}
        >
          {/* Dark overlay for legibility */}
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(10,8,5,0.52)' }}
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10 p-8 flex flex-col h-full" style={{ minHeight: '420px' }}>
            <span
              className="block text-xs font-semibold uppercase tracking-widest mb-auto"
              style={{ color: 'rgba(237,235,229,0.55)' }}
            >
              {String(active + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
            </span>

            <div className="mt-auto">
              <h3
                className="text-3xl sm:text-4xl font-normal leading-snug text-balance mb-4"
                style={{ fontFamily: '"EB Garamond", Georgia, serif', color: '#EDEBE5' }}
              >
                {steps[active].label}
              </h3>

              <p className="text-base leading-relaxed mb-4" style={{ color: 'rgba(237,235,229,0.8)' }}>
                {steps[active].description}
              </p>

              <p className="text-sm leading-relaxed" style={{ color: 'rgba(237,235,229,0.5)' }}>
                {steps[active].detail}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
