'use client'

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
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {services.map((service, i) => (
        <Link
          key={service.title}
          href={service.href}
          className="group flex flex-col justify-between rounded-2xl p-7 transition-all duration-200 border hover:border-[#B8B0A6] hover:bg-[#DEDAD2]"
          style={{
            background: '#E5E2DB',
            borderColor: '#D4CFC7',
            minHeight: '240px',
          }}
        >
          {/* Top row — number + arrow */}
          <div className="flex items-start justify-between mb-6">
            <span
              className="text-[11px] font-semibold tabular-nums"
              style={{ color: '#FF9A5C' }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <span
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              aria-hidden="true"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#1A0F06" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>

          {/* Title */}
          <div className="flex-1">
            <h3
              className="text-xl sm:text-2xl font-normal leading-snug text-balance mb-3"
              style={{ fontFamily: '"EB Garamond", Georgia, serif', color: '#1A0F06' }}
            >
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#6B5F54' }}>
              {service.description}
            </p>
          </div>

          {/* Bottom — learn more */}
          <div className="mt-6">
            <span
              className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest transition-colors duration-150 group-hover:text-foreground"
              style={{ color: '#9A8C80' }}
            >
              Learn more
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 6h8M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
