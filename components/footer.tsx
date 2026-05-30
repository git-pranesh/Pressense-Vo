import Link from 'next/link'

const footerSections = [
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'What We Fix', href: '/what-we-fix' },
      { label: 'How We Work', href: '/how-we-work' },
      { label: 'Packages & Pricing', href: '/packages' },
      { label: 'Start Diagnostic', href: '/diagnostic' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'AI Automation Agency', href: '/ai-automation-agency' },
      { label: 'Fractional CMO', href: '/fractional-cmo-services' },
      { label: 'GTM Strategy', href: '/gtm-strategy-consultant' },
      { label: 'Revenue Operations', href: '/revenue-operations-consulting' },
      { label: 'Workflow Automation', href: '/workflow-automation-consulting' },
      { label: 'MVP Development', href: '/mvp-development-for-startups' },
      { label: 'Business Process Automation', href: '/business-process-automation-consulting' },
    ],
  },
  {
    heading: 'Tools & Resources',
    links: [
      { label: 'Free Calculators', href: '/tools' },
      { label: 'Playbooks', href: '/playbooks' },
      { label: 'Blog', href: '/blog' },
      { label: 'AI Readiness Audit', href: '/playbooks/ai-readiness-audit' },
      { label: 'Founder Bottleneck', href: '/playbooks/founder-bottleneck-diagnostic' },
      { label: 'Sales Process Audit', href: '/playbooks/sales-process-audit' },
      { label: 'GTM Alignment', href: '/playbooks/gtm-alignment' },
    ],
  },
  {
    heading: 'Locations',
    links: [
      { label: 'AI Agency — San Francisco', href: '/ai-automation-agency-san-francisco' },
      { label: 'AI Agency — New York', href: '/ai-automation-agency-new-york' },
      { label: 'AI Agency — Austin', href: '/ai-automation-agency-austin' },
      { label: 'AI Agency — London', href: '/ai-automation-agency-london' },
      { label: 'AI Agency — Chicago', href: '/ai-automation-agency-chicago' },
      { label: 'AI Agency — Miami', href: '/ai-automation-agency-miami' },
      { label: 'AI Agency — Seattle', href: '/ai-automation-agency-seattle' },
      { label: 'Fractional CMO — San Francisco', href: '/fractional-cmo-san-francisco' },
      { label: 'Fractional CMO — New York', href: '/fractional-cmo-new-york' },
      { label: 'GTM Consultant — San Francisco', href: '/gtm-consultant-san-francisco' },
      { label: 'Strategy Consultant — London', href: '/business-strategy-consultant-london' },
      { label: 'Systems Consultant — Boston', href: '/business-systems-consultant-boston' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border/40 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Top section: logo + columns */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-6 h-6 rounded border border-primary/30 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <rect x="0.5" y="0.5" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.8" />
                  <rect x="8" y="0.5" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.4" />
                  <rect x="0.5" y="8" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.4" />
                  <rect x="8" y="8" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.8" />
                </svg>
              </div>
              <span className="text-sm font-semibold tracking-wide">PRESSENSE</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-[220px]">
              AI automation and GTM strategy for founders scaling past the founder-bottleneck.
            </p>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.heading} className="col-span-1">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/60 mb-4">
                {section.heading}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors leading-snug block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Pressense. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
