export function PlaybooksFinalCTA() {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="playbooks-cta-heading">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="bg-ink rounded-3xl p-10 sm:p-16 lg:p-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="eyebrow-line-dark" aria-hidden="true" />
            <span className="eyebrow-on-dark">Next step</span>
          </div>

          <h2
            id="playbooks-cta-heading"
            className="text-section-title font-serif font-medium text-ink-foreground text-balance mb-6"
          >
            Ready to fix what&apos;s slowing your growth?
          </h2>

          <p className="text-lg text-ink-muted mb-12 max-w-2xl mx-auto leading-relaxed text-pretty font-sans">
            Start by identifying your constraint using the playbooks above. Then, let&apos;s talk about whether you want guidance, a diagnostic, or full implementation support.
          </p>

          <a
            href="/diagnostic"
            className="inline-flex items-center gap-2.5 px-9 py-5 rounded-full text-base font-medium bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200"
            aria-label="Start a diagnostic"
          >
            Start With a Diagnostic
            <span className="w-6 h-6 rounded-full border border-primary-foreground/30 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
