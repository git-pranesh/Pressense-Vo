import Link from 'next/link'

const footerLinks = {
  company: [
    { label: 'What We Fix', href: '/what-we-fix' },
    { label: 'How We Work', href: '/how-we-work' },
    { label: 'Packages', href: '/packages' },
    { label: 'Blog', href: '/blog' },
    { label: 'Start Diagnostic', href: '/diagnostic' },
  ],
  resources: [
    { label: 'Playbooks', href: '/playbooks' },
    { label: 'AI Readiness Audit', href: '/playbooks/ai-readiness-audit' },
    { label: 'Founder Bottleneck', href: '/playbooks/founder-bottleneck-diagnostic' },
    { label: 'GTM Alignment', href: '/playbooks/gtm-alignment' },
  ],
  services: [
    { label: 'AI Automation Agency', href: '/ai-automation-agency' },
    { label: 'Fractional CMO', href: '/fractional-cmo-services' },
    { label: 'GTM Strategy', href: '/gtm-strategy-consultant' },
    { label: 'MVP Development', href: '/mvp-development-for-startups' },
    { label: 'Revenue Operations', href: '/revenue-operations-consulting' },
  ],
  locations: [
    { label: 'San Francisco', href: '/ai-automation-agency-san-francisco' },
    { label: 'New York', href: '/ai-automation-agency-new-york' },
    { label: 'Austin', href: '/ai-automation-agency-austin' },
    { label: 'London', href: '/ai-automation-agency-london' },
    { label: 'Chicago', href: '/ai-automation-agency-chicago' },
    { label: 'Miami', href: '/ai-automation-agency-miami' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border/40 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
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
            <p className="text-xs text-muted-foreground leading-relaxed">
              AI automation and GTM consulting for scaling founders.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-4">Locations</h4>
            <ul className="space-y-2">
              {footerLinks.locations.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Pressense. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
