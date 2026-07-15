export function Footer() {
  return (
    <footer className="border-t border-border/40 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
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
          <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Pressense
          </span>
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-6" aria-label="Footer navigation">
          {[
            { label: 'What We Fix', href: '/what-we-fix' },
            { label: 'How We Work', href: '/how-we-work' },
            { label: 'Work', href: '/work' },
            { label: 'Playbooks', href: '/playbooks' },
            { label: 'Start Diagnostic', href: '/diagnostic' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs text-text-dim hover:text-muted-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-xs text-text-dim">
          &copy; {new Date().getFullYear()} Pressense. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
