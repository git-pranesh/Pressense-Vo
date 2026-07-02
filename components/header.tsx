'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Playbooks', href: '/playbooks' },
  { label: 'Tools', href: '/tools' },
]

const servicesColumns = [
  {
    heading: 'AI & Automation',
    links: [
      { label: 'AI Automation Agency', href: '/ai-automation-agency' },
      { label: 'AI Strategy Consulting', href: '/ai-strategy-consulting' },
      { label: 'AI Workflows & Automation', href: '/ai-workflows-automation' },
      { label: 'Workflow Automation Consulting', href: '/workflow-automation-consulting' },
      { label: 'Business Process Automation', href: '/business-process-automation-consulting' },
      { label: 'AI Tools We Use', href: '/ai-tools-we-use' },
    ],
  },
  {
    heading: 'Strategy & GTM',
    links: [
      { label: 'GTM Systems Builder', href: '/gtm-systems-builder' },
      { label: 'GTM Content Systems', href: '/gtm-content-systems' },
      { label: 'SEO Content for SaaS', href: '/seo-content-for-saas' },
      { label: 'Fractional CMO Services', href: '/fractional-cmo-services' },
      { label: 'GTM Strategy Consultant', href: '/gtm-strategy-consultant' },
      { label: 'SaaS Go-to-Market Strategy', href: '/saas-go-to-market-strategy' },
      { label: 'Revenue Operations Consulting', href: '/revenue-operations-consulting' },
    ],
  },
  {
    heading: 'Build & Vibe Coding',
    links: [
      { label: 'Replit Development Agency', href: '/replit-development-agency' },
      { label: 'MVP Development on Replit', href: '/mvp-development-replit' },
      { label: 'Custom CRM Development', href: '/custom-crm-development' },
      { label: 'MVP Development for Startups', href: '/mvp-development-for-startups' },
      { label: 'Framer Website Design', href: '/framer-website-design' },
      { label: 'Custom Internal Tools', href: '/custom-internal-tools' },
    ],
  },
  {
    heading: 'Partner Stack',
    links: [
      { label: 'Claude API Integration', href: '/claude-api-integration' },
      { label: 'OpenAI Integration Services', href: '/openai-integration-services' },
      { label: 'Consulting for Startups', href: '/consulting-firm-for-startups' },
    ],
  },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-card border-b border-border/60'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Pressense homepage">
          <div className="w-7 h-7 rounded border border-primary/40 flex items-center justify-center group-hover:border-primary transition-colors">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <rect x="0.5" y="0.5" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.9" />
              <rect x="8" y="0.5" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.5" />
              <rect x="0.5" y="8" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.5" />
              <rect x="8" y="8" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.9" />
            </svg>
          </div>
          <span className="text-sm font-semibold tracking-wide text-foreground">PRESSENSE</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
          {/* Services mega menu trigger */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              >
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Mega menu */}
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[1020px] glass-card rounded-xl border border-border/60 p-6 shadow-2xl">
                <div className="grid grid-cols-4 gap-6">
                  {servicesColumns.map((col) => (
                    <div key={col.heading}>
                      <p className="text-xs font-semibold tracking-widest uppercase text-primary/70 mb-3">
                        {col.heading}
                      </p>
                      <ul className="space-y-1.5">
                        {col.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className="block text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/40 rounded-lg px-2 py-1.5 transition-colors duration-150"
                              onClick={() => setServicesOpen(false)}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-border/40 flex items-center justify-end">
                  <Link
                    href="/how-we-work"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    How we work →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <Link
            href="/diagnostic"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:bg-highlight transition-colors duration-200"
            aria-label="Start a diagnostic"
          >
            Start Diagnostic
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden glass-card border-t border-border/40 px-6 py-5 flex flex-col gap-3 max-h-[80vh] overflow-y-auto">
          {/* Mobile Services Accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between w-full text-sm text-muted-foreground hover:text-foreground py-2"
              aria-expanded={mobileServicesOpen}
            >
              Services
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              >
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {mobileServicesOpen && (
              <div className="mt-2 flex flex-col gap-4 border-l border-border/40 pl-4 ml-1">
                {servicesColumns.map((col) => (
                  <div key={col.heading}>
                    <p className="text-xs font-semibold tracking-widest uppercase text-primary/60 mb-2">
                      {col.heading}
                    </p>
                    <div className="flex flex-col gap-1">
                      {col.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-foreground py-1"
                          onClick={() => { setMenuOpen(false); setMobileServicesOpen(false) }}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground py-2 border-t border-border/20"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/diagnostic"
            className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-primary text-primary-foreground w-fit"
            onClick={() => setMenuOpen(false)}
          >
            Start Diagnostic
          </Link>
        </div>
      )}
    </header>
  )
}
