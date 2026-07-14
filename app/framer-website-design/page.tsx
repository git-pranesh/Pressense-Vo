import type { Metadata } from 'next'
import { FinalCTA } from '@/components/final-cta'

export const metadata: Metadata = {
  title: 'Framer Website Design for SaaS & Startups | Pressense',
  description:
    'Framer website design for SaaS companies and founder-led businesses. Conversion-first landing pages and full websites from $1,500. Fast builds, CMS-ready, SEO-optimised.',
  openGraph: {
    title: 'Framer Website Design for SaaS & Startups | Pressense',
    description:
      'Conversion-first Framer website design from $1,500. Landing pages and full sites built in Framer — responsive, fast, CMS-ready, and handed over to your team.',
    url: '/framer-website-design',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Framer Website Design' }],
  },
  alternates: { canonical: '/framer-website-design' },
  twitter: {
    card: 'summary_large_image',
    title: 'Framer Website Design for SaaS & Startups | Pressense',
    description: 'Conversion-first Framer website design from $1,500. Landing pages and full sites, CMS-ready.',
    images: ['/og-image.jpg'],
  },
}

const faqs = [
  {
    q: 'What is Framer website design?',
    a: "Framer website design is the process of building a website using Framer, a platform that combines design and production code in one environment. A designer works directly in the tool that outputs the live site — no handoff from design to development, no Figma-to-code translation delays. Framer sites include built-in hosting, CMS, analytics, and SEO controls.",
  },
  {
    q: 'How much does a Framer website cost?',
    a: 'A Framer website from Pressense starts from $1,500 for a focused build — a landing page or a simple marketing site. A full five-to-eight page site with custom animations, responsive design, and CMS integration is scoped after the diagnostic. Framer hosting is $20 to $40 per month billed directly by Framer.',
  },
  {
    q: 'How long does a Framer website take to build?',
    a: 'A standard marketing site or landing page goes from brief to live in two to three weeks. A larger site with custom interactions, CMS integration, and multiple page templates takes three to five weeks. We do not move to design until the copy is approved — this is the most common cause of delays and we address it explicitly in the diagnostic.',
  },
  {
    q: 'Is Framer good for SEO?',
    a: "Yes. Framer generates clean HTML, supports custom meta tags, canonical URLs, Open Graph data, and JSON-LD structured data. It has a native sitemap generator and lets you set per-page indexing rules. We build SEO structure into every Framer project from day one — meta titles, descriptions, heading hierarchy, and schema — so search engines can index the site correctly on launch.",
  },
  {
    q: 'What is the difference between Framer and Webflow?',
    a: "Framer and Webflow are both no-code website platforms, but they suit different needs. Framer is faster for design-led projects with animations and interactions — design and build happen in one tool. Webflow is better for complex CMS-driven sites with many content types and dynamic pages. We recommend Framer for marketing sites, landing pages, and portfolios. We recommend Webflow for content-heavy sites with 50-plus pages.",
  },
  {
    q: 'Can I update the Framer site myself after launch?',
    a: 'Yes. Framer has an intuitive CMS that non-technical users can manage without a developer. We run a 60-minute training session at handover covering content updates, adding new pages, and publishing changes. For structural or design updates, we offer a monthly retainer or a day-rate for ad-hoc work.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const problems = [
  {
    title: 'Your website took six months and still does not convert',
    body1: 'The traditional agency model adds months of back-and-forth: strategy, wireframes, Figma mockups, developer handoff, rounds of amends, final QA. By the time the site launches, the positioning has changed. You paid $40,000 and got a website that feels like it was built for last year.',
    body2: 'Framer collapses that process. Design and production live in the same tool. We work from your copy and brief, prototype in Framer, and iterate in real time. You see the actual site, not a mockup. Feedback rounds are shorter because you are reviewing the live thing, not a PDF.',
  },
  {
    title: 'Your existing site is not ranking and not converting',
    body1: 'A Framer redesign is not just a visual upgrade. We rebuild the heading hierarchy, rewrite the meta structure, add JSON-LD schema, and ensure the site scores above 90 on Core Web Vitals. Most Framer sites load under one second. Most template-based WordPress sites load in four to six seconds.',
    body2: 'We do not hand over a beautiful site with broken SEO. Every Framer build includes canonical URLs, Open Graph data, structured data, a sitemap, and per-page robots settings. The site is ready to index on launch day.',
  },
  {
    title: 'You need a landing page tested and live in two weeks',
    body1: 'Product launches, ad campaigns, and fundraising decks all need a landing page that is fast to build and easy to iterate. Framer is the fastest tool for high-quality landing pages. We have built full five-page marketing sites in ten days from signed brief to live URL.',
    body2: 'After launch, A/B testing is built into Framer. We can create variant pages, test different headlines and CTAs, and see conversion data without adding a third-party tool. The feedback loop is weeks, not months.',
  },
]

export default function FramerWebsiteDesignPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Framer Website Design',
        provider: { '@type': 'Organization', name: 'Pressense', url: 'https://www.pressense.co' },
        description: 'Conversion-focused Framer website design and development for SaaS and founder-led businesses. Live in 2–3 weeks.',
        url: 'https://www.pressense.co/framer-website-design',
        areaServed: 'Worldwide',
        offers: [
          { '@type': 'Offer', name: 'Landing Page', priceSpecification: { '@type': 'UnitPriceSpecification', price: '1500', priceCurrency: 'USD', unitText: 'fixed-price from' } },
          { '@type': 'Offer', name: 'Full Website', priceSpecification: { '@type': 'UnitPriceSpecification', price: '3000', priceCurrency: 'USD', unitText: 'fixed-price from' } },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pressense.co' },
          { '@type': 'ListItem', position: 2, name: 'AI Tools We Use', item: 'https://www.pressense.co/ai-tools-we-use' },
          { '@type': 'ListItem', position: 3, name: 'Framer Website Design', item: 'https://www.pressense.co/framer-website-design' },
        ],
      }) }} />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
          <div className="container mx-auto px-5 sm:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="eyebrow-line" aria-hidden="true" />
                <span className="eyebrow">
                  Framer Agency / Web Design
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground text-balance leading-[1.1] mb-6">
                Framer Website Design for SaaS and Founder-Led Businesses
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-6">
                Conversion-focused websites built in Framer. Design and production in one tool. No handoff delays, no
                six-month timelines. A full marketing site goes from brief to live in two to three weeks.
              </p>
              <div className="border-l-2 border-primary/40 pl-5 mb-10 max-w-2xl">
                <p className="text-base text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Framer website design</strong> is a development approach where
                  design and production live in the same tool, eliminating the Figma-to-code handoff that adds weeks to
                  traditional agency timelines. The result is a live site with custom animations, CMS, built-in hosting,
                  and Core Web Vitals scores above 90 — typically delivered in two to three weeks.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="/diagnostic" className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent">
                  Book a Free Diagnostic
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="/work" className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-medium border border-border text-foreground hover:border-primary/50 hover:bg-secondary/40 transition-all duration-200">
                  See our work
                </a>
              </div>
              <div className="grid grid-cols-3 gap-6 max-w-xl">
                {[
                  { stat: '2–3 wks', label: 'Typical build time' },
                  { stat: 'From $1.5K', label: 'Starting price' },
                  { stat: '90+', label: 'Core Web Vitals score' },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl font-semibold text-foreground mb-1">{s.stat}</div>
                    <div className="text-xs text-muted-foreground leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background via-transparent to-background/60" aria-hidden="true" />
        </section>

        {/* Problems */}
        <section className="py-20">
          <div className="container mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-14">
              <span className="text-xs tracking-[0.2em] uppercase text-primary/70 font-semibold mb-4 block">Why Framer</span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground text-balance leading-tight">
                Three problems Framer solves that other platforms do not
              </h2>
            </div>
            <div className="space-y-10 max-w-3xl">
              {problems.map((p) => (
                <div key={p.title}>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{p.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-3">{p.body1}</p>
                  <p className="text-base text-muted-foreground leading-relaxed">{p.body2}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20">
          <div className="container mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-14">
              <span className="text-xs tracking-[0.2em] uppercase text-primary/70 font-semibold mb-4 block">Use Cases</span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground text-balance leading-tight">
                What we build in Framer
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
              {[
                { title: 'SaaS marketing site', body: 'Positioning-first marketing site with feature pages, pricing, and blog CMS. Built for conversion and easy content updates by your team.' },
                { title: 'Startup landing page', body: 'Single-page conversion site for launches, fundraising, and waitlists. Live in one to two weeks from brief.' },
                { title: 'Agency or studio portfolio', body: 'Case study-led portfolio with rich animations and CMS-managed work entries.' },
                { title: 'Product launch page', body: 'High-impact launch page with email capture, countdown, and social sharing built in.' },
                { title: 'Redesign of an existing site', body: 'Migrate your current WordPress or Webflow site to Framer, keeping your SEO equity and improving load times and conversions.' },
                { title: 'Framer CMS setup', body: 'CMS configuration so your team can add blog posts, case studies, and team members without touching design or code.' },
              ].map((item) => (
                <div key={item.title} className="p-5 rounded-xl border border-border/40 bg-secondary/20">
                  <h3 className="text-sm font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20">
          <div className="container mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-14">
              <span className="text-xs tracking-[0.2em] uppercase text-primary/70 font-semibold mb-4 block">Pricing</span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground text-balance leading-tight">
                Fixed-price Framer website design
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mt-4 max-w-2xl">
                Every engagement is scoped and priced before work begins. No surprises, no hourly billing, no out-of-scope conversations mid-project.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
              {[
                { tier: 'Landing Page', price: 'From $1,500', timeline: '1–2 weeks', includes: ['Single-page conversion site', 'Mobile-responsive', 'On-page SEO', 'Framer hosting setup', 'Copy direction (your copy)'] },
                { tier: 'Full Website', price: 'From $3,000', timeline: '3–5 weeks', includes: ['Up to 8 pages', 'CMS for blog / content', 'Custom animations', 'Full SEO structure', 'Team handover training'] },
                { tier: 'Redesign', price: 'From $2,500', timeline: '2–4 weeks', includes: ['Audit of existing site', 'Full rebuild in Framer', 'SEO migration', 'Analytics reconnect', 'Performance optimisation'] },
              ].map((tier) => (
                <div key={tier.tier} className="p-6 rounded-xl border border-border/40 bg-secondary/10 flex flex-col">
                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{tier.tier}</p>
                    <p className="text-2xl font-bold text-foreground">{tier.price}</p>
                    <p className="text-xs text-muted-foreground mt-1">{tier.timeline}</p>
                  </div>
                  <ul className="space-y-1.5 mt-2 flex-1">
                    {tier.includes.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-0.5 shrink-0" aria-hidden="true">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mx-auto">
              <span className="text-xs tracking-[0.2em] uppercase text-primary/70 font-semibold mb-4 block">FAQ</span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground text-balance leading-tight mb-12">
                Common questions about Framer website design
              </h2>
              <div className="space-y-8">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-border/40 pb-8 last:border-0 last:pb-0">
                    <h3 className="text-base font-semibold text-foreground mb-3">{faq.q}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>
    </>
  )
}
