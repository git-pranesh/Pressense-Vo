'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { label: 'Services', href: '/custom-software-internal-tools' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Tools', href: '/tools' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#EDEBE5]/95 backdrop-blur-md border-b border-[#D4CFC7]/60'
          : 'bg-[#EDEBE5] border-b border-transparent'
      }`}
    >
      {/* Desktop nav */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 hidden lg:flex items-center justify-between">

        {/* Logo — left */}
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Pressense homepage">
          <div className="w-7 h-7 rounded border border-foreground/30 flex items-center justify-center group-hover:border-foreground/60 transition-colors">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <rect x="0.5" y="0.5" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.9" />
              <rect x="8" y="0.5" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.5" />
              <rect x="0.5" y="8" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.5" />
              <rect x="8" y="8" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.9" />
            </svg>
          </div>
          <span className="text-sm font-semibold tracking-wide text-foreground">PRESSENSE</span>
        </Link>

        {/* Nav links — centre */}
        <nav className="flex items-center gap-7" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 no-underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA — right */}
        <Link
          href="/contact"
          className="font-sans inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium bg-[#1A0F06] text-[#EDEBE5] hover:opacity-90 transition-opacity duration-200"
          aria-label="Start a diagnostic"
        >
          Start Diagnostic
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      {/* Mobile: logo left, hamburger right */}
      <div className="max-w-7xl mx-auto px-6 h-16 flex lg:hidden items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Pressense homepage">
          <div className="w-7 h-7 rounded border border-foreground/30 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <rect x="0.5" y="0.5" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.9" />
              <rect x="8" y="0.5" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.5" />
              <rect x="0.5" y="8" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.5" />
              <rect x="8" y="8" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.9" />
            </svg>
          </div>
          <span className="text-sm font-semibold tracking-wide text-foreground">PRESSENSE</span>
        </Link>

        <button
          className="p-2 text-muted-foreground hover:text-foreground"
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

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-[#EDEBE5] border-t border-[#D4CFC7] px-6 py-5 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-sans text-sm font-medium text-foreground/70 py-2 border-b border-[#D4CFC7] last:border-0 no-underline hover:text-foreground transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="font-sans mt-3 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium bg-[#1A0F06] text-[#EDEBE5] w-fit"
            onClick={() => setMenuOpen(false)}
          >
            Start Diagnostic
          </Link>
        </div>
      )}
    </header>
  )
}
