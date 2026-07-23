import type { Metadata } from 'next'
import Link from 'next/link'
import { PageStructuredData } from '@/components/page-structured-data'

export const metadata: Metadata = {
  title: 'Case Studies | Pressense',
  description:
    'Real GTM, strategy, and content engagements from Pressense. Including work with Zoho Creator and OneMagnify — see what we found and what we built to fix it.',
  openGraph: {
    title: 'Case Studies | Pressense',
    description:
      'Real GTM, strategy, and content engagements from Pressense. See how we diagnosed root cause and built systems that compound.',
    url: '/case-studies',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense Case Studies' }],
  },
  alternates: {
    canonical: '/case-studies',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | Pressense',
    description:
      'Real GTM, strategy, and content engagements from Pressense. See how we diagnosed root cause and built systems that compound.',
    images: ['/og-image.jpg'],
  },
}

const caseStudies = [
  {
    slug: 'zoho-creator',
    client: 'Zoho Creator',
    industry: 'Enterprise Software / Low-Code',
    engagementType: 'Embedded GTM Partner',
    duration: 'Multi-year retainer',
    summary:
      "Low-code platforms sell into two audiences at once. Zoho Creator had a mature product and real differentiation — but the GTM system around it wasn't built to carry an enterprise buyer from first search to internal business case. We built it.",
    tags: ['GTM Systems', 'SEO / AEO', 'Competitive Intelligence', 'Content Strategy'],
  },
  {
    slug: 'onemagnify',
    client: 'OneMagnify',
    industry: 'Global Marketing & CX',
    engagementType: 'Embedded Content & SEO Delivery Partner',
    duration: 'Website migration project',
    summary:
      'A 250+ page platform migration from Webflow to HubSpot CMS needed more than new templates. It needed content built page for page, service line by service line, to a single editorial and SEO standard. We were the specialist delivery layer that made that possible.',
    tags: ['Content at Scale', 'SEO Architecture', 'Platform Migration', 'Editorial Governance'],
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <PageStructuredData
        pageName="Case Studies"
        pageDescription="Real GTM, strategy, and content engagements from Pressense. See how we diagnosed root cause and built systems that compound."
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Case Studies', url: '/case-studies' },
        ]}
      />

      <main className="min-h-screen">
        {/* Hero */}
        <section
          className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
          aria-label="Case studies introduction"
        >
          <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />

          <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-widest uppercase text-primary/70 mb-6">
                Case Studies
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.08] mb-6 text-balance">
                We don&apos;t share testimonials.{' '}
                <span className="text-muted-foreground font-light">
                  We share what we fixed, and how.
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Every engagement starts with a broken system. Here is what we found — and what we built to fix it.
              </p>
            </div>
          </div>
        </section>

        {/* Card grid */}
        <section
          className="py-20 lg:py-28"
          aria-labelledby="case-studies-grid-heading"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <h2 className="sr-only" id="case-studies-grid-heading">All case studies</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {caseStudies.map((study) => (
                <article
                  key={study.slug}
                  className="glass-card rounded-2xl border border-border/50 p-8 flex flex-col gap-6 group hover:border-border transition-colors duration-200"
                >
                  {/* Client + meta */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold tracking-widest uppercase text-primary/70 mb-1.5">
                          {study.industry}
                        </p>
                        <h3 className="text-2xl font-semibold text-foreground">
                          {study.client}
                        </h3>
                      </div>
                    </div>

                    {/* Engagement meta row */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/50 inline-block" aria-hidden="true" />
                        {study.engagementType}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/50 inline-block" aria-hidden="true" />
                        {study.duration}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-border/40" />

                  {/* Summary */}
                  <p className="text-base text-muted-foreground leading-relaxed flex-1">
                    {study.summary}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-foreground/70 border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors duration-200 group-hover:gap-3"
                    aria-label={`Read the ${study.client} case study`}
                  >
                    Read case study
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2 7h10M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </article>
              ))}


            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 border-t border-border/40">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-widest uppercase text-primary/70 mb-4">
                Work with us
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight mb-4 text-balance">
                Want to know if your system has the same problems?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The diagnostic takes 20 minutes. It tells you exactly where the gap is and what to fix first.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-highlight transition-colors duration-200 text-base"
              >
                Start your diagnostic
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
