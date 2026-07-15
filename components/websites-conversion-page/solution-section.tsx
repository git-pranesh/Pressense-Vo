const what = [
  {
    title: 'Positioning and messaging layer',
    description: 'Every engagement starts with who the buyer is, what problem they are solving, and why this business is the right answer. The website reflects that, not the founder\'s internal language about what the business does.',
  },
  {
    title: 'Homepage and core service pages',
    description: 'Each page is structured around buyer questions: what is this, who is it for, why does it matter, what proof exists, and what do I do next. Structure drives conversion before design is applied.',
  },
  {
    title: 'Landing pages for specific campaigns',
    description: 'Focused pages for diagnostics, outbound campaigns, specific market segments, or service lines. Built to convert a specific type of buyer at a specific point in the journey.',
  },
  {
    title: 'Buyer journey and content pathways',
    description: 'Internal linking, next-step prompts, and content pathways that keep buyers moving through the site rather than bouncing. Built to support both inbound content and direct sales.',
  },
  {
    title: 'SEO and AEO structure',
    description: 'Pages structured to rank in search and appear in AI-generated answers. Semantic structure, target keywords embedded naturally, FAQ schemas, and structured data applied throughout.',
  },
  {
    title: 'Sales support infrastructure',
    description: 'Case studies, proof pages, diagnostic CTAs, and battle card content that your sales team can use to move deals forward. The website becomes a sales tool, not a brochure.',
  },
]
export function WebsitesSolutionSection() {
  return (
    <section className="py-20 md:py-28 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-2xl mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">What We Build</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-balance leading-tight mb-4">
            Positioning-led websites built from the buyer&apos;s perspective outward
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We start with what the buyer needs to understand at each stage of their decision. Then we build the structure that delivers it. Design is applied after clarity is established.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {what.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl border border-border/60 bg-card">
              <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
