const useCases = [
  {
    title: 'SaaS Marketing Site',
    description: 'Feature pages, pricing table, comparison pages, blog, and changelog — all in one Framer project with shared CMS and consistent design tokens.',
    examples: ['Product homepage', 'Feature overview pages', 'Pricing and comparison', 'Blog and changelog'],
  },
  {
    title: 'Launch Landing Page',
    description: 'A single, high-converting page for a product launch, waitlist, or campaign — optimised for the specific CTA and tracked from day one.',
    examples: ['Product launch page', 'Waitlist capture page', 'Ad campaign landing page', 'Event registration page'],
  },
  {
    title: 'Founder & Consulting Site',
    description: 'A personal brand or consulting firm site with case studies, testimonials, a booking flow, and contact — built to rank and convert.',
    examples: ['Consulting firm site', 'Personal brand / speaking', 'Agency portfolio', 'Advisor profile'],
  },
  {
    title: 'Investor & Fundraising Deck Page',
    description: 'A web presence that supplements the deck — social proof, press, metrics, and team — built to load fast and look credible.',
    examples: ['Pre-seed credibility page', 'Series A company site', 'Impact report microsite', 'Press and media page'],
  },
  {
    title: 'Redesign & Performance Rebuild',
    description: 'Replace a slow, under-converting WordPress or Webflow site with a Framer rebuild that scores above 90 on Core Web Vitals and is properly SEO-structured.',
    examples: ['WordPress → Framer migration', 'Webflow → Framer rebuild', 'Template upgrade to custom', 'CRO-focused redesign'],
  },
  {
    title: 'Multi-language & International Site',
    description: "Framer's built-in localisation lets you serve different markets with translated content, localised CTAs, and region-specific routing from one codebase.",
    examples: ['EN/FR/DE marketing site', 'US and AU variants', 'Language-switcher navigation', 'Locale-based pricing pages'],
  },
]

const industries = [
  'SaaS & Technology',
  'Consulting & Professional Services',
  'Real Estate & Property',
  'Legal & Finance',
  'E-commerce & D2C Brands',
  'Healthcare & Wellness',
  'Education & Coaching',
  'Agencies & Freelancers',
]

export function FramerUseCasesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl mx-auto px-5 sm:px-8">
        <p className="eyebrow mb-4">Use Cases</p>
        <h2 className="text-3xl md:text-4xl font-medium text-foreground text-balance mb-4 leading-tight">
          What we build in Framer
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-14 max-w-2xl">
          Framer is the right tool for marketing sites, landing pages, and brand presences that need to look premium, load fast, and convert. Here are the six most common builds we deliver.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {useCases.map((uc) => (
            <div key={uc.title} className="p-6 rounded-2xl bg-card">
              <h3 className="text-base font-medium text-foreground mb-2">{uc.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{uc.description}</p>
              <div className="space-y-1.5">
                {uc.examples.map((e) => (
                  <div key={e} className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-xs text-muted-foreground">{e}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <p className="eyebrow mb-5 font-medium">Industries we serve</p>
          <div className="flex flex-wrap gap-2">
            {industries.map((ind) => (
              <span
                key={ind}
                className="px-3 py-1.5 rounded-full border border-border/60 bg-secondary/30 text-sm text-muted-foreground"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
