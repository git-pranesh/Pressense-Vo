import Link from 'next/link'
import { calculatorsData, CALCULATOR_CATEGORIES } from '@/lib/calculators'

const companyLinks = [
  { label: 'How We Work', href: '/how-we-work' },
  { label: 'Playbooks', href: '/playbooks' },
  { label: 'Tools', href: '/tools' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Start Diagnostic', href: '/diagnostic' },
]

const serviceLinks = [
  { label: 'Fractional CMO Services', href: '/fractional-cmo-services' },
  { label: 'GTM Strategy Consultant', href: '/gtm-strategy-consultant' },
  { label: 'Custom Internal Tools', href: '/custom-internal-tools' },
  { label: 'Revenue Operations', href: '/revenue-operations-consulting' },
  { label: 'MVP Development', href: '/mvp-development-for-startups' },
  { label: 'Framer Website Design', href: '/framer-website-design' },
]

export function MegaFooter() {
  const calculatorsByCategory = CALCULATOR_CATEGORIES.map((category) => ({
    category,
    calculators: calculatorsData.filter((c) => c.category === category),
  })).filter((group) => group.calculators.length > 0)

  return (
    <footer className="border-t border-border/40 bg-background">
      {/* Services grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 border-b border-border/40">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-primary/70 mb-5">
              Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + CTA */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-primary/70 mb-5">
                Company
              </h3>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-xl border border-border/60 bg-card">
              <p className="text-sm font-medium text-foreground mb-1">Ready to scale?</p>
              <p className="text-sm text-muted-foreground mb-4">
                Book a free diagnostic to map your top 3 growth constraints.
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
        </div>
      </div>

      {/* Calculators section */}
      {calculatorsByCategory.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 border-b border-border/40">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-foreground">Free Business Calculators</h2>
              <p className="text-xs text-muted-foreground mt-0.5">{calculatorsData.length} calculators with operator-grade benchmarks</p>
            </div>
            <Link href="/tools" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              View all tools →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {calculatorsByCategory.map((group) => (
              <div key={group.category}>
                <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground/60 mb-3">
                  {group.category}
                </h3>
                <ul className="space-y-1.5">
                  {group.calculators.map((calc) => (
                    <li key={calc.slug}>
                      <Link
                        href={`/tools/${calc.slug}`}
                        className="text-xs text-muted-foreground hover:text-foreground transition-colors"
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
      )}

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded border border-primary/30 flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <rect x="0.5" y="0.5" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.8" />
                <rect x="8" y="0.5" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.4" />
                <rect x="0.5" y="8" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.4" />
                <rect x="8" y="8" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.8" />
              </svg>
            </div>
            <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Pressense</span>
          </Link>
          <p className="text-xs text-text-dim">&copy; {new Date().getFullYear()} Pressense. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-xs text-text-dim hover:text-muted-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="text-xs text-text-dim hover:text-muted-foreground transition-colors">Terms</Link>
            <Link href="/sitemap.xml" className="text-xs text-text-dim hover:text-muted-foreground transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
