export function AuthorBioSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="eyebrow-line" aria-hidden="true" />
            <span className="eyebrow">About the Author</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
              <span className="text-2xl font-bold text-primary">P</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-1">Pranesh Padmanabhan</h3>
              <p className="text-sm text-primary font-medium mb-3">Founder, Pressense</p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Pranesh has worked with over 40 founder-led businesses across India, the US, and the UK on go-to-market strategy, revenue operations, and AI-driven growth systems. He specialises in the $1M to $15M ARR stage, where GTM execution is the primary constraint on growth.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Before founding Pressense, he led growth and GTM for B2B SaaS companies across fintech, HR tech, and professional services verticals. The PRESS Framework emerged from patterns observed across hundreds of GTM audits at this stage.
              </p>
              <a
                href="https://linkedin.com/in/pranesh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
                aria-label="Connect with Pranesh on LinkedIn"
              >
                Connect on LinkedIn
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
