import Link from 'next/link'
import { calculatorsData, CALCULATOR_CATEGORIES } from '@/lib/calculators'

const companyLinks = [
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Tools', href: '/tools' },
  { label: 'Contact', href: '/contact' },
]

const serviceLinks = [
  { label: 'Custom Software & Internal Tools', href: '/custom-software-internal-tools' },
  { label: 'Workflow Automation', href: '/workflow-automation' },
  { label: 'Custom CRM', href: '/custom-crm' },
  { label: 'AI Integration', href: '/ai-integration' },
  { label: 'Fractional CMO', href: '/fractional-cmo' },
]

export function MegaFooter() {
  const calculatorsByCategory = CALCULATOR_CATEGORIES.map((category) => ({
    category,
    calculators: calculatorsData.filter((c) => c.category === category),
  })).filter((group) => group.calculators.length > 0)

  return (
    <footer className="border-t border-[#D4CFC7] bg-[#E5E2DB]">
      {/* Services grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 border-b border-[#D4CFC7]">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Services */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-[#1A0F06] mb-5">
              Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-sans text-sm text-[#6B5D51] hover:text-[#1A0F06] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + CTA */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-[#1A0F06] mb-5">
                Company
              </h3>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="font-sans text-sm text-[#6B5D51] hover:text-[#1A0F06] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-xl border border-[#D4CFC7] bg-[#EDEBE5]">
              <p className="font-sans text-sm font-semibold text-[#1A0F06] mb-1">Ready to scale?</p>
              <p className="font-sans text-sm text-[#6B5D51] mb-4">
                Book a free diagnostic to map your top 3 growth constraints.
              </p>
              <Link
                href="/contact"
                className="font-sans inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-[#1A0F06] text-[#EDEBE5] hover:opacity-90 transition-opacity"
                style={{ borderRadius: '12px' }}
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
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 border-b border-[#D4CFC7]">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="font-sans text-sm font-semibold text-[#1A0F06]">Free Business Calculators</h2>
              <p className="font-sans text-xs text-[#6B5D51] mt-0.5">{calculatorsData.length} calculators with operator-grade benchmarks</p>
            </div>
            <Link href="/tools" className="font-sans text-xs text-[#6B5D51] hover:text-[#1A0F06] transition-colors">
              View all tools →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {calculatorsByCategory.map((group) => (
              <div key={group.category}>
                <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-[#1A0F06] mb-3">
                  {group.category}
                </h3>
                <ul className="space-y-1.5">
                  {group.calculators.map((calc) => (
                    <li key={calc.slug}>
                      <Link
                        href={`/tools/${calc.slug}`}
                        className="font-sans text-xs text-[#6B5D51] hover:text-[#1A0F06] transition-colors"
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
            <div className="w-6 h-6 rounded border border-[#1A0F06]/30 flex items-center justify-center text-[#1A0F06]">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <rect x="0.5" y="0.5" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.8" />
                <rect x="8" y="0.5" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.4" />
                <rect x="0.5" y="8" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.4" />
                <rect x="8" y="8" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.8" />
              </svg>
            </div>
            <span className="font-sans text-xs font-semibold tracking-widest text-[#1A0F06] uppercase">Pressense</span>
          </Link>
          <p className="font-sans text-xs text-[#6B5D51]">&copy; {new Date().getFullYear()} Pressense. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="font-sans text-xs text-[#6B5D51] hover:text-[#1A0F06] transition-colors">Privacy</Link>
            <Link href="/terms" className="font-sans text-xs text-[#6B5D51] hover:text-[#1A0F06] transition-colors">Terms</Link>
            <Link href="/sitemap.xml" className="font-sans text-xs text-[#6B5D51] hover:text-[#1A0F06] transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
