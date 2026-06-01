import Link from 'next/link'

const footerLinks = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'How We Work', href: '/how-we-work' },
    { label: 'Packages', href: '/packages' },
    { label: 'Contact', href: '/diagnostic' },
  ],
  services: [
    { label: 'AI Automation Agency', href: '/ai-automation-agency' },
    { label: 'Fractional CMO', href: '/fractional-cmo-services' },
    { label: 'GTM Strategy', href: '/gtm-strategy-consultant' },
    { label: 'Revenue Operations', href: '/revenue-operations-consulting' },
    { label: 'Workflow Automation', href: '/workflow-automation-consulting' },
  ],
  tools: [
    { label: 'Tools & Calculators', href: '/tools' },
    { label: 'Replit Developer', href: '/replit-developer-for-hire' },
    { label: 'Framer Agency', href: '/framer-website-agency' },
    { label: 'Internal Tools', href: '/custom-internal-tools' },
  ],
  resources: [
    { label: 'Playbooks', href: '/playbooks' },
    { label: 'Blog', href: '/blog' },
    { label: 'Case Studies', href: '/case-studies' },
  ],
  locations: [
    { label: 'San Francisco', href: '/ai-automation-agency-san-francisco' },
    { label: 'New York', href: '/ai-automation-agency-new-york' },
    { label: 'Austin', href: '/ai-automation-agency-austin' },
    { label: 'London', href: '/ai-automation-agency-london' },
    { label: 'Chicago', href: '/ai-automation-agency-chicago' },
    { label: 'Miami', href: '/ai-automation-agency-miami' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border/40 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
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

          {/* Tools */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-4">Tools</h4>
            <ul className="space-y-2">
              {footerLinks.tools.map((link) => (
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

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
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
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded border border-primary/30 flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <rect x="0.5" y="0.5" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.8" />
                <rect x="8" y="0.5" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.4" />
                <rect x="0.5" y="8" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.4" />
                <rect x="8" y="8" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.8" />
              </svg>
            </div>
            <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              Pressense
            </span>
          </div>

          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Pressense. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
