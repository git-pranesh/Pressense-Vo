export function NotWebDesignSection() {
  return (
    <section className="py-20 lg:py-28 border-t border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-6">
            This is not "web design."
          </h2>
          <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
            <p>We are not a design-first agency.</p>
            <p>Design matters, but it is one layer.</p>
            <p>
              The real work is in understanding the business, structuring communication, and building a website that supports how the business grows.
            </p>
            <p>
              Sometimes the output is a full website. Sometimes it is a redesign. Sometimes it is landing pages. The goal is clarity and conversion.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/content-authority-systems" className="text-sm text-primary hover:underline">Content & Authority Systems</a>
            <span className="text-muted-foreground">/</span>
            <a href="/work" className="text-sm text-primary hover:underline">See Our Work</a>
          </div>
        </div>
      </div>
    </section>
  )
}
