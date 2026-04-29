export function CrmErpHero() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6 font-medium">
            Solutions / CRM & ERP Systems
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground text-balance leading-[1.1] mb-6">
            CRM and ERP systems built around how your business actually runs.
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10 text-pretty">
            Most businesses don&apos;t fail because they lack tools. They fail because their tools don&apos;t match their workflows. We help design and build CRM and ERP systems that reflect how your business actually operates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/apply"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200"
            >
              Start With a Diagnostic
              <span className="w-5 h-5 rounded-full border border-primary-foreground/30 flex items-center justify-center group-hover:border-primary-foreground/60 transition-colors">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
            <a
              href="/how-we-work"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold border border-border hover:border-primary/50 text-foreground hover:text-primary transition-all duration-200"
            >
              See How We Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
