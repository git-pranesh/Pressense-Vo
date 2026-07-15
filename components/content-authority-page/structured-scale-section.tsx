export function StructuredScaleSection() {
  return (
    <section className="py-24 lg:py-32" aria-label="How this connects to structured scale">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-8">
            How this connects to structured scale.
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Content is not separate from growth. It is how the business explains itself at scale.
            </p>
            <p>
              When communication is weak, every channel becomes harder: sales, SEO, outbound, partnerships, hiring, and fundraising.
            </p>
            <p className="text-foreground font-medium">
              A good content system creates shared language for the market, the team, and the buyer.
            </p>
          </div>
          <div className="mt-10 pt-8">
            <p className="text-muted-foreground">
              See how content connects to the larger system: <a href="/how-we-work" className="text-primary hover:underline">How we work</a> and <a href="/playbooks" className="text-primary hover:underline">Playbooks</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
