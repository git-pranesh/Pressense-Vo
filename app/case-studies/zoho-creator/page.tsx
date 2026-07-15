import type { Metadata } from 'next'
import Link from 'next/link'
import { PageStructuredData } from '@/components/page-structured-data'

export const metadata: Metadata = {
  title: 'Zoho Creator GTM Case Study | Pressense',
  description:
    'How Pressense built a reusable GTM and content system for Zoho Creator — enterprise buyer education, competitive intelligence, and search-led lead generation.',
  openGraph: {
    title: 'Zoho Creator GTM Case Study | Pressense',
    description:
      'How Pressense built a reusable GTM and content system for Zoho Creator — enterprise buyer education, competitive intelligence, and search-led lead generation.',
    url: '/case-studies/zoho-creator',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense — Zoho Creator Case Study' }],
  },
  alternates: {
    canonical: '/case-studies/zoho-creator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zoho Creator GTM Case Study | Pressense',
    description:
      'How Pressense built a reusable GTM and content system for Zoho Creator — enterprise buyer education, competitive intelligence, and search-led lead generation.',
    images: ['/og-image.jpg'],
  },
}

const engagementMeta = [
  { label: 'Client', value: 'Zoho Creator' },
  { label: 'Industry', value: 'Enterprise Software / Low-Code' },
  { label: 'Engagement', value: 'Embedded GTM Partner' },
  { label: 'Duration', value: 'Multi-year retainer' },
]

const deliverables = [
  {
    title: 'Technical thought leadership program',
    description:
      'Long-form content covering workflow automation, AI-assisted development, governance, security, and real operational use cases. Written from an operator\'s point of view rather than a marketing brief. The goal was content technical buyers would actually trust, not skim past.',
  },
  {
    title: 'Competitive intelligence system',
    description:
      'Detailed, documentation-based comparison studies against the leading platforms in the category, built around governance, integration depth, deployment models, and enterprise evaluation criteria. This was not a single "versus" article. It was a research framework that fed SEO pages, sales enablement, and internal positioning at the same time.',
  },
  {
    title: 'Search and AI-visibility architecture',
    description:
      'Content structured for both traditional search and the growing share of buyer research happening through AI assistants: clear entity relationships, answer-ready formatting, and topic architecture built around how enterprise software is actually researched today.',
  },
  {
    title: 'Cross-sell landing page strategy',
    description:
      'Positioning frameworks for how Zoho Creator should sit next to adjacent products in the Zoho suite, built around an "extension, not replacement" logic so that cross-sell content grew usage without undercutting any single product\'s story.',
  },
  {
    title: 'Enterprise lead-generation strategy',
    description:
      'A first-party acquisition model built around organic search, AI visibility, and thought leadership as the primary channel for reaching CIOs and CTOs, rather than volume-based outbound.',
  },
]

const approachLayers = [
  {
    number: '01',
    heading: 'Enterprise buyer education',
    body: 'Content built for how CIOs and technical leaders actually evaluate software: governance, security, workflow depth, automation, AI capability, and total operational complexity. Not feature lists.',
  },
  {
    number: '02',
    heading: 'Decision-stage content',
    body: 'Comparison and evaluation assets designed for the moment a buyer is actively choosing between platforms, not just casually learning about the category.',
  },
  {
    number: '03',
    heading: 'Competitive intelligence',
    body: 'Structured, documentation-based research into competing platforms, built to support factual, defensible positioning rather than vague marketing claims.',
  },
  {
    number: '04',
    heading: 'Cross-sell and ecosystem positioning',
    body: 'Messaging that let Zoho Creator sit naturally alongside other products in the Zoho suite, expanding usage without making any one product sound incomplete.',
  },
  {
    number: '05',
    heading: 'Enterprise lead-generation systems',
    body: 'A first-party, search and content-led acquisition strategy built for privacy-conscious enterprise markets, where direct outreach converts poorly and self-directed research converts well.',
  },
]

export default function ZohoCreatorCaseStudy() {
  return (
    <>
      <PageStructuredData
        pageName="Zoho Creator GTM Case Study"
        pageDescription="How Pressense built a reusable GTM and content system for Zoho Creator — enterprise buyer education, competitive intelligence, and search-led lead generation."
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Case Studies', url: '/case-studies' },
          { name: 'Zoho Creator', url: '/case-studies/zoho-creator' },
        ]}
      />

      <main className="min-h-screen">

        {/* Hero */}
        <section
          className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
          aria-label="Case study introduction"
        >

          <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/case-studies" className="hover:text-foreground transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M4.5 2.5L7.5 6l-3 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </li>
                <li className="text-foreground font-medium" aria-current="page">Zoho Creator</li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <p className="eyebrow mb-5">
                Enterprise Software / Low-Code
              </p>
              <h1 className="text-display font-serif font-medium text-foreground leading-[1.08] mb-6 text-balance">
                Building a go-to-market system for Zoho Creator
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Low-code platforms sell into two audiences at once. The end user wants to build something in an afternoon. The decision-maker wants to know how it behaves at 10,000 users, under audit, with three integrations bolted on. Most GTM content is written for one of them. We built a system that works for both.
              </p>
            </div>

            {/* Engagement meta */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {engagementMeta.map((item) => (
                <div key={item.label} className="bg-card border border-border rounded-xl p-4 border border-border/50">
                  <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-1.5">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Body — two-column layout on large screens */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-[1fr_340px] gap-16 items-start">

              {/* Main content */}
              <div className="flex flex-col gap-16">

                {/* The situation */}
                <div>
                  <p className="eyebrow mb-5">
                    The situation
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight mb-6 text-balance">
                    The product was mature. The GTM system around it was not.
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-5">
                    Zoho Creator is a low-code application platform serving enterprise and mid-market customers. The product was strong. The differentiation was real. But the content and GTM system around it was not built to carry an enterprise buyer from first search to internal business case.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed mb-5">
                    Comparison content was thin. Competitive positioning existed in slide decks, not in anything a prospect could find or a sales rep could point to. And the website was not doing the work a modern enterprise buyer expects a vendor site to do before they ever speak to sales.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    They needed a partner who could sit inside the GTM function, not hand over a content calendar and disappear.
                  </p>
                </div>

                {/* Why Pressense */}
                <div className="border-t border-border/40 pt-16">
                  <p className="eyebrow mb-5">
                    Why Pressense
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight mb-6 text-balance">
                    Embedded partner, not outside vendor
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-5">
                    Pressense was brought in as an embedded growth and GTM partner. That distinction mattered. It meant working directly with the product and marketing teams, understanding the platform at an operational level, and building systems rather than one-off deliverables.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    The mandate was broad by design: technical content, search and AI-visibility architecture, competitive research, cross-sell positioning across the client product suite, and a lead-generation strategy built for a market where enterprise buyers increasingly avoid cold outreach and do their own research first.
                  </p>
                </div>

                {/* The approach */}
                <div className="border-t border-border/40 pt-16">
                  <p className="eyebrow mb-5">
                    The approach
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight mb-6 text-balance">
                    Five layers of decision infrastructure
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-10">
                    Rather than treat this as a content production job, Pressense structured the engagement around five layers of decision infrastructure.
                  </p>

                  <div className="flex flex-col gap-8">
                    {approachLayers.map((layer) => (
                      <div key={layer.number} className="flex gap-5">
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center text-xs font-semibold text-primary/70 mt-0.5">
                          {layer.number}
                        </span>
                        <div>
                          <h3 className="text-base font-semibold text-foreground mb-2">
                            {layer.heading}
                          </h3>
                          <p className="text-base text-muted-foreground leading-relaxed">
                            {layer.body}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What was built */}
                <div className="border-t border-border/40 pt-16">
                  <p className="eyebrow mb-5">
                    What was built
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight mb-10 text-balance">
                    Systems, not deliverables
                  </h2>

                  <div className="flex flex-col gap-8">
                    {deliverables.map((item) => (
                      <div key={item.title} className="bg-card border border-border rounded-xl p-6 border border-border/50">
                        <h3 className="text-base font-semibold text-foreground mb-3 capitalize">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* The outcome */}
                <div className="border-t border-border/40 pt-16">
                  <p className="eyebrow mb-5">
                    The outcome
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight mb-6 text-balance">
                    From ad hoc production to a compounding system
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-5">
                    The engagement produced a reusable GTM and content system for Zoho Creator: technical education, competitive positioning, decision-stage content, and cross-sell messaging designed to work together rather than as disconnected deliverables.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed mb-5">
                    Specific content topics and performance figures from this engagement are confidential and cannot be published here.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    What can be said: the work moved Zoho Creator from ad hoc content production to a structured, repeatable system for enterprise buyer education, competitive positioning, and lead generation — one built to keep compounding after the engagement itself.
                  </p>
                </div>

                {/* Why this matters */}
                <div className="border-t border-border/40 pt-16">
                  <p className="eyebrow mb-5">
                    The bigger picture
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight mb-6 text-balance">
                    Enterprise software rarely loses on product
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-5">
                    It loses because the buyer can not find, trust, or defend the information they need before a decision gets made internally.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    That is the gap Pressense closed for Zoho Creator: not content for its own sake, but the research, positioning, and infrastructure that let a technical buyer do their own diligence and arrive at a confident decision — with Zoho Creator already ahead in that process.
                  </p>
                </div>

              </div>

              {/* Sidebar */}
              <aside className="hidden lg:block sticky top-28 self-start">
                <div className="bg-card border border-border rounded-2xl border border-border/50 p-6 flex flex-col gap-6">
                  <div>
                    <p className="eyebrow mb-4">
                      Scope of work
                    </p>
                    <ul className="flex flex-col gap-3">
                      {[
                        'GTM Systems',
                        'Technical Content',
                        'SEO / AEO Architecture',
                        'Competitive Intelligence',
                        'Cross-sell Positioning',
                        'Lead Generation Strategy',
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/40 flex-shrink-0" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-border/40 pt-5">
                    <p className="eyebrow mb-3">
                      Interested in this kind of work?
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      The diagnostic takes 20 minutes and tells you exactly where your GTM system is leaking.
                    </p>
                    <Link
                      href="/diagnostic"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-highlight transition-colors duration-200 w-full justify-center"
                    >
                      Start diagnostic
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>

                  <div className="border-t border-border/40 pt-5">
                    <Link
                      href="/case-studies"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M9.5 6h-7M5.5 3L2.5 6l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      All case studies
                    </Link>
                  </div>
                </div>
              </aside>

            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-2xl">
              <p className="eyebrow mb-4">
                Work with us
              </p>
              <h2 className="text-3xl sm:text-4xl font-medium text-foreground tracking-tight mb-4 text-balance">
                Want to know if your GTM system has the same gaps?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The diagnostic takes 20 minutes. It tells you exactly where the gap is and what to fix first.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/diagnostic"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-highlight transition-colors duration-200 text-base"
                >
                  Start your diagnostic
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7h10M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  href="/case-studies"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  Back to case studies
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
