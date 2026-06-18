import type { Metadata } from 'next'
import { FinalCTA } from '@/components/final-cta'

export const metadata: Metadata = {
  title: 'Framer Website Agency | Pressense',
  description:
    'Framer website agency for SaaS and startups. Conversion-focused design and development in one platform. Launch in 2–3 weeks with animations, CMS, and real-time collaboration.',
  openGraph: {
    title: 'Framer Website Agency | Pressense',
    description: 'Conversion-focused Framer websites for SaaS and founders. Design + development in one platform. No handoff delays, fast delivery.',
    url: '/framer-website-agency',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense Framer Website Agency' }],
  },
  alternates: { canonical: '/framer-website-agency' },
  twitter: {
    card: 'summary_large_image',
    title: 'Framer Website Agency | Pressense',
    description: 'Framer website agency for SaaS and startups. Conversion-focused design and development in one platform. Launch in 2–3 weeks.',
    images: ['/og-image.jpg'],
  },
}

const deliverables = [
  {
    title: 'High-conversion marketing sites',
    body: 'We design and build full marketing sites for SaaS products, service businesses, and founder brands. Every site includes custom animations, responsive design for all screen sizes, performance-optimised images, and a CMS your team can update without touching code.',
  },
  {
    title: 'Landing pages for campaigns and launches',
    body: 'A product launch or ad campaign needs a landing page that is fast to build and easy to iterate. We have built full five-page marketing sites in ten days from signed brief to live URL. After launch, Framer\'s built-in variant testing lets us run A/B tests without a third-party tool.',
  },
  {
    title: 'Redesigns from WordPress, Webflow, or custom code',
    body: 'If your existing site is slow, hard to update, or no longer reflects your positioning, we migrate it to Framer. We rebuild the page structure, improve heading hierarchy for SEO, add structured data, and deliver a faster, cleaner site that your team can manage independently.',
  },
  {
    title: 'Interactive product showcases',
    body: 'Framer supports complex animations and interactive components without custom code. We use this for product demos, feature walkthroughs, and portfolio pieces where the experience needs to show, not just tell. Interactions are designed in the same environment that produces the live site.',
  },
]

const faqs = [
  {
    q: 'What does a Framer website agency do?',
    a: 'A Framer website agency designs and builds websites using Framer, a platform where design and production code live in the same tool. This removes the handoff between designer and developer that adds weeks to traditional agency timelines. We handle strategy, copy structure, visual design, animations, CMS setup, and launch — end to end.',
  },
  {
    q: 'How is Framer different from WordPress or Webflow?',
    a: "Framer collapses design and production into one tool, which makes it faster for marketing sites and landing pages. WordPress is better for large content-heavy blogs. Webflow is better for complex multi-template CMS sites. Framer sites load faster than most WordPress sites and have built-in hosting, analytics, and CMS with no plugin management.",
  },
  {
    q: 'How much does a Framer website cost?',
    a: 'A standard Framer marketing site from Pressense starts at $8,000 for five to eight pages with custom animations, responsive design, and CMS. Larger sites with complex interactions or more content range from $15,000 to $30,000. Framer hosting is $20 to $40 per month billed by Framer directly.',
  },
  {
    q: 'How long does a Framer website take?',
    a: 'Two to three weeks for a standard marketing site. Three to five weeks for a larger site with custom interactions, CMS templates, and multiple page types. The most common cause of delays is copy not being ready. We address this in the kickoff: we do not start design until the messaging framework is approved.',
  },
  {
    q: 'Can I edit the Framer site after you build it?',
    a: 'Yes. Framer has an intuitive CMS and editing interface that non-technical team members can manage without a developer. We run a 60-minute handover session covering content updates, adding pages, and publishing changes. For structural design updates, we offer a day-rate or monthly retainer.',
  },
  {
    q: 'Do you handle SEO for Framer sites?',
    a: "Yes. Every Framer site we build includes correct heading hierarchy, meta titles and descriptions, canonical URLs, Open Graph data, JSON-LD structured data, a sitemap, and per-page robots settings. We also optimise images and ensure the site passes Core Web Vitals at 90 or above on launch day. SEO is not an add-on — it is built into the standard build.",
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const steps = [
  {
    number: '01',
    phase: 'Diagnose',
    title: 'Understand what your site needs to do',
    body: "We start with a diagnostic session to map your ICP, your positioning, and the specific conversion goal for the site. We review your current site, your competitors, and any data you have on why visitors are not converting. We do not start designing until we know exactly what problem the site is solving.",
    deliverable: 'Messaging framework + site map',
    time: 'Week 1',
  },
  {
    number: '02',
    phase: 'Strategise',
    title: 'Build the page architecture and copy structure',
    body: "Before any visual design, we build the page-by-page content structure in a shared document. You approve the copy, the heading hierarchy, and the CTA strategy. This is where most redesign projects fail — visual design starts before the messaging is settled. We reverse that order.",
    deliverable: 'Copy deck + approved content structure',
    time: 'Week 1–2',
  },
  {
    number: '03',
    phase: 'Build',
    title: 'Design and build directly in Framer',
    body: "Design and production happen simultaneously in Framer. You see the actual site, not a Figma mockup. Feedback rounds are faster because you are reviewing the live thing. Animations, responsive breakpoints, and CMS setup happen in this phase.",
    deliverable: 'Staged Framer site with all pages built',
    time: 'Week 2–3',
  },
  {
    number: '04',
    phase: 'Scale',
    title: 'Launch, test, and iterate',
    body: "We publish the site, verify all SEO settings, submit the sitemap, and run final performance checks. We run a 60-minute handover training session. For clients who want to continue iterating — A/B tests, new landing pages, CMS expansion — we offer a monthly retainer from $2,500.",
    deliverable: 'Live site + handover documentation',
    time: 'Week 3',
  },
]

export default function FramerAgencyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Framer Website Agency',
          provider: { '@type': 'Organization', name: 'Pressense', url: 'https://www.pressense.co' },
          description: 'Framer website design and development for conversion-focused experiences for SaaS and founder-led businesses.',
          url: 'https://www.pressense.co/framer-website-agency',
          areaServed: 'Worldwide',
          offers: { '@type': 'Offer', priceRange: '$8,000 - $30,000', priceCurrency: 'USD' },
        }) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pressense.co' },
            { '@type': 'ListItem', position: 2, name: 'Framer Website Agency', item: 'https://www.pressense.co/framer-website-agency' },
          ],
        }) }}
      />

      <main className="min-h-screen">

        {/* Hero */}
        <section
          id="hero"
          className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20"
          aria-label="Framer website agency"
        >
          <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
          <div className="container mx-auto px-5 sm:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-primary/60" aria-hidden="true" />
                <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">
                  Framer Agency / Web Design
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground text-balance leading-[1.1] mb-6">
                Framer Website Agency for SaaS and Founder-Led Businesses
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-6">
                Conversion-focused websites built in Framer. No six-month timelines, no Figma-to-developer handoffs.
                Design and production in one tool, live in two to three weeks.
              </p>

              {/* AEO Answer Block */}
              <div className="border-l-2 border-primary/40 pl-5 mb-10 max-w-2xl">
                <p className="text-base text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">A Framer website agency</strong> designs and builds websites using
                  Framer, a platform where visual design and production code live in the same tool. This removes the
                  handoff delay between designer and developer that adds three to six weeks to a traditional agency
                  build. The result is a faster timeline, a site that is easier to iterate on, and Core Web Vitals
                  scores above 90 by default.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="/diagnostic"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent"
                >
                  Book a Free Diagnostic
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="/framer-website-design"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-medium border border-border text-foreground hover:border-primary/50 hover:bg-secondary/40 transition-all duration-200"
                >
                  See our Framer design services
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 max-w-xl">
                {[
                  { stat: '2–3 wks', label: 'From brief to live' },
                  { stat: 'From $8K', label: 'Starting price' },
                  { stat: '90+', label: 'Core Web Vitals' },
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

        {/* What we build */}
        <section className="py-20 border-t border-border/40">
          <div className="container mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-14">
              <span className="text-xs tracking-[0.2em] uppercase text-primary/70 font-semibold mb-4 block">
                What we build
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground text-balance leading-tight">
                Four types of Framer websites
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 max-w-4xl">
              {deliverables.map((d) => (
                <div key={d.title} className="rounded-2xl border border-border/60 bg-card/40 p-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4">{d.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-20 border-t border-border/40">
          <div className="container mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mb-14">
              <span className="text-xs tracking-[0.2em] uppercase text-primary/70 font-semibold mb-4 block">
                How we work
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground text-balance leading-tight">
                The Pressense Framer build process
              </h2>
            </div>
            <div className="space-y-10 max-w-3xl">
              {steps.map((s) => (
                <div key={s.number} className="grid sm:grid-cols-[auto_1fr] gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-3xl font-semibold text-primary/40">{s.number}</span>
                    <div className="flex-1 w-px bg-border/40 hidden sm:block" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs tracking-[0.15em] uppercase text-primary/70 font-semibold">{s.phase}</span>
                      <span className="text-xs text-muted-foreground">{s.time}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{s.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed mb-4">{s.body}</p>
                    <div className="inline-flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">Deliverable:</span>
                      <span className="font-medium text-foreground">{s.deliverable}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 border-t border-border/40">
          <div className="container mx-auto px-5 sm:px-8">
            <div className="max-w-3xl mx-auto">
              <span className="text-xs tracking-[0.2em] uppercase text-primary/70 font-semibold mb-4 block">FAQ</span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground text-balance leading-tight mb-12">
                Common questions about our Framer agency
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
