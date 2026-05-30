'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'What We Fix', href: '/what-we-fix' },
  { label: 'How We Work', href: '/how-we-work' },
  { label: 'Packages', href: '/packages' },
  { label: 'Blog', href: '/blog' },
]

const solutionsByCategory = [
  {
    category: 'Strategy & Growth',
    items: [
      { label: 'AI Automation Agency', href: '/ai-automation-agency' },
      { label: 'SaaS Go-to-Market Strategy', href: '/saas-go-to-market-strategy' },
      { label: 'Revenue Operations Consulting', href: '/revenue-operations-consulting' },
      { label: 'GTM Strategy Consultant', href: '/gtm-strategy-consultant' },
      { label: 'Business Systems Consultant', href: '/business-systems-consultant' },
      { label: 'Small Business Strategy Consultant', href: '/small-business-strategy-consultant' },
      { label: 'Consulting Firm for Startups', href: '/consulting-firm-for-startups' },
    ],
  },
  {
    category: 'Marketing & Brand',
    items: [
      { label: 'Fractional CMO Services', href: '/fractional-cmo-services' },
      { label: 'Fractional CMO Advisor', href: '/fractional-cmo-advisor' },
      { label: 'Content & Authority Systems', href: '/content-authority-systems' },
    ],
  },
  {
    category: 'Implementation & Build',
    items: [
      { label: 'AI Implementation for Small Business', href: '/ai-implementation-small-business' },
      { label: 'MVP Development for Startups', href: '/mvp-development-for-startups' },
      { label: 'Framer Website Agency', href: '/framer-website-agency' },
      { label: 'Replit Developer for Hire', href: '/replit-developer-for-hire' },
      { label: 'Custom Internal Tools', href: '/custom-internal-tools' },
      { label: 'Websites & Conversion Systems', href: '/websites-conversion-systems' },
    ],
  },
  {
    category: 'Workflow Automation',
    items: [
      { label: 'Workflow Automation Consulting', href: '/workflow-automation-consulting' },
      { label: 'Business Process Automation', href: '/business-process-automation-consulting' },
      { label: 'AI Workflows & Automation', href: '/ai-workflows-automation' },
    ],
  },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
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
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Homepage">
          <div className="w-7 h-7 rounded border border-primary/40 flex items-center justify-center group-hover:border-primary transition-colors">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <rect x="0.5" y="0.5" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.9" />
              <rect x="8" y="0.5" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.5" />
              <rect x="0.5" y="8" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.5" />
              <rect x="8" y="8" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.9" />
            </svg>
          </div>
          <span className="text-sm font-semibold tracking-wide text-foreground">
            PRESSENSE
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </Link>
          ))}
          
          {/* Solutions Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-wide"
              aria-expanded={solutionsOpen}
              aria-haspopup="true"
            >
              Solutions
              <svg 
                width="10" 
                height="10" 
                viewBox="0 0 10 10" 
                fill="none" 
                className={`transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              >
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            
            {solutionsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-fit max-w-4xl glass-card rounded-xl border border-border/60 p-6 shadow-xl">
                <div className="grid grid-cols-4 gap-8">
                  {solutionsByCategory.map((section) => (
                    <div key={section.category}>
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground/60 mb-4">
                        {section.category}
                      </h3>
                      <ul className="space-y-2">
                        {section.items.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
                              onClick={() => setSolutionsOpen(false)}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
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
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
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
        <div className="md:hidden glass-card border-t border-border/40 px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          
          {/* Mobile Solutions Accordion */}
          <div>
            <button
              onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              className="flex items-center justify-between w-full text-sm text-muted-foreground hover:text-foreground py-1"
              aria-expanded={mobileSolutionsOpen}
            >
              Solutions
              <svg 
                width="10" 
                height="10" 
                viewBox="0 0 10 10" 
                fill="none" 
                className={`transition-transform duration-200 ${mobileSolutionsOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              >
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            
            {mobileSolutionsOpen && (
              <div className="mt-2 ml-3 flex flex-col gap-4 border-l border-border/40 pl-4">
                {solutionsByCategory.map((section) => (
                  <div key={section.category}>
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground/60 mb-2">
                      {section.category}
                    </h4>
                    <ul className="space-y-1 ml-2">
                      {section.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className="text-sm text-muted-foreground hover:text-foreground py-1 block"
                            onClick={() => {
                              setMenuOpen(false)
                              setMobileSolutionsOpen(false)
                            }}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <Link
            href="/diagnostic"
            className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-primary text-primary-foreground w-fit"
            onClick={() => setMenuOpen(false)}
            aria-label="Start a diagnostic"
          >
            Start Diagnostic
          </Link>
        </div>
      )}
    </header>
  )
}
