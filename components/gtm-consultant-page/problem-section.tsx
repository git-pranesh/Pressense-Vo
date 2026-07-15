export function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-ink">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">

          {/* What is GTM consulting — exact H2 PAA match, AEO citation trigger */}
          <h2 className="text-section-title font-serif font-medium text-ink-foreground text-balance mb-6">
            What does a GTM strategy consultant do?
          </h2>
          <p className="text-lg text-ink-muted leading-relaxed mb-4">
            A GTM strategy consultant diagnoses friction in your revenue system. Not just marketing tactics. The whole engine: how you position your product, which buyers you target, how your sales motion is structured, and how marketing and sales hand off leads without losing them.
          </p>
          <p className="text-lg text-ink-muted leading-relaxed mb-12">
            Most founders reach out after product-market fit is clear but revenue growth stalls. Sales cycles are too long. Conversion rates are low. Pipeline is inconsistent. These are GTM symptoms, not product problems. A GTM strategy consultant finds the root cause and installs a fix.
          </p>

          {/* 5 pillars — exact H3 PAA match */}
          <h3 className="text-2xl font-semibold text-ink-foreground mb-6">What are the 5 pillars of GTM strategy?</h3>
          <div className="flex flex-col gap-6">
            {[
              { pillar: '1. Ideal Customer Profile', body: 'The most specific, actionable definition of who you sell to. Not a broad persona. A description so precise your sales team can qualify a prospect in the first two minutes of a call.' },
              { pillar: '2. Positioning', body: 'The reason a specific buyer should choose you over every alternative, including doing nothing. Positioning is not a tagline. It is a strategic decision about where you compete and why you win there.' },
              { pillar: '3. Channel Strategy', body: 'The two or three channels that actually reach your ICP at the point of purchase intent. Most companies spread budget across six channels and see results from one. GTM strategy collapses that to what works.' },
              { pillar: '4. Sales Enablement', body: 'The messaging, process, and tools your sales team needs to run a consistent motion. Without this, every rep sells differently and your conversion data is meaningless.' },
              { pillar: '5. Revenue Operations', body: 'The metrics, CRM configuration, and feedback loops that make the system measurable. Without RevOps, GTM strategy is a slide deck. With it, you know exactly where deals stall and why.' },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl p-8 border border-border bg-card hover:border-foreground/20 transition-colors hover:border-primary/20 transition-all duration-300">
                <h4 className="text-lg font-semibold text-foreground mb-2">{item.pillar}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
