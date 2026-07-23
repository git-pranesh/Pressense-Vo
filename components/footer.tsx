export function Footer() {
  return (
    <footer className="border-t border-[#EDE3D6] bg-[#F3EBE0] py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded border border-[#2B180A]/30 flex items-center justify-center text-[#2B180A]">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <rect x="0.5" y="0.5" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.8" />
              <rect x="8" y="0.5" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.4" />
              <rect x="0.5" y="8" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.4" />
              <rect x="8" y="8" width="5.5" height="5.5" stroke="currentColor" strokeOpacity="0.8" />
            </svg>
          </div>
          <span className="font-sans text-xs font-semibold tracking-widest text-[#2B180A] uppercase">
            Pressense
          </span>
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-6" aria-label="Footer navigation">
          {[
            { label: 'How It Works', href: '/how-it-works' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Case Studies', href: '/case-studies' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
            { label: 'Privacy', href: '/privacy' },
            { label: 'Terms', href: '/terms' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-xs text-[#7A6555] hover:text-[#2B180A] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="font-sans text-xs text-[#7A6555]">
          &copy; {new Date().getFullYear()} Pressense. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
