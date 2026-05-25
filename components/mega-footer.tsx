import Link from 'next/link'
import { calculatorsData, CALCULATOR_CATEGORIES } from '@/lib/calculators'

const footerLinks = [
  { label: 'What We Fix', href: '/what-we-fix' },
  { label: 'How We Work', href: '/how-we-work' },
  { label: 'Work', href: '/work' },
  { label: 'Playbooks', href: '/playbooks' },
  { label: 'Tools', href: '/tools' },
  { label: 'Start Diagnostic', href: '/diagnostic' },
]

const solutionsLinks = [
  { label: 'Advisory & Strategy', href: '/advisory-strategy' },
  { label: 'Internal Tools & Systems', href: '/custom-internal-tools' },
  { label: 'CRM & ERP Systems', href: '/crm-erp-systems' },
  { label: 'Content & Authority Systems', href: '/content-authority-systems' },
  { label: 'Websites & Conversion Systems', href: '/websites-conversion-systems' },
  { label: 'AI Workflows & Automation', href: '/ai-workflows-automation' },
]

export function MegaFooter() {
  const calculatorsByCategory = CALCULATOR_CATEGORIES.map((category) => ({
    category,
    calculators: calculatorsData.filter((c) => c.category === category),
  })).filter((group) => group.calculators.length > 0)

  return (
    <footer className="border-t border-border/40 bg-background">
      {/* Calculator Links Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 border-b border-border/40">
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-2">All Calculators</h2>
          <p className="text-sm text-muted-foreground">
            {calculatorsData.length} free SaaS calculators with operator-grade benchmarks
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {calculatorsByCategory.map((group) => (
            <div key={group.category}>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-secondary mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.calculators.map((calc) => (
                  <li key={calc.slug}>
                    <Link
                      href={`/tools/${calc.slug}`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {calc.title.replace(' Calculator', '')}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded border border-primary/40 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <rect x="0.5" y="0.5" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.9" />
                  <rect x="8" y="0.5" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.5" />
                  <rect x="0.5" y="8" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.5" />
                  <rect x="8" y="8" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.9" />
                </svg>
              </div>
              <span className="text-sm font-semibold tracking-wide text-foreground">PRESSENSE</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Strategy and systems partner for B2B SaaS operators. We fix growth bottlenecks and build systems that scale.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-secondary mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-secondary mb-4">
              Solutions
            </h3>
            <ul className="space-y-2">
              {solutionsLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & CTA */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-secondary mb-4">
              Get Started
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Book a free 30-minute diagnostic to map where you&apos;re leaking growth.
            </p>
            <Link
              href="/diagnostic"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:bg-highlight transition-colors"
            >
              Start Diagnostic
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border/40">
          <p className="text-xs text-text-dim">
            &copy; {new Date().getFullYear()} Pressense. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-text-dim hover:text-muted-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-text-dim hover:text-muted-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
