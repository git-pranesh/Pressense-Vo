import type { Metadata } from 'next'
import Link from 'next/link'
import { PageStructuredData } from '@/components/page-structured-data'
import { CaseStudyCard } from '@/components/case-study-card'
import { AnchorCard } from '@/components/anchor-card'

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

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="border-b border-border pt-28 pb-16">
          <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
            <span className="eyebrow-pill">Case Studies</span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.05] text-balance max-w-3xl">
              We don&apos;t share testimonials.{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 400 }}>We share what we fixed, and how.</em>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Every engagement starts with a broken system. Here is what we found — and what we built to fix it.
            </p>
          </div>
        </section>

        {/* ── Card grid ────────────────────────────────────────── */}
        <section className="py-16 lg:py-20" aria-labelledby="case-studies-grid-heading">
          <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
            <h2 className="sr-only" id="case-studies-grid-heading">All case studies</h2>

            {/* Featured first card spans full width, second is half */}
            <div className="grid lg:grid-cols-2 gap-5">
              {caseStudies.map((study, i) => (
                <CaseStudyCard
                  key={study.slug}
                  slug={study.slug}
                  client={study.client}
                  industry={study.industry}
                  engagementType={study.engagementType}
                  duration={study.duration}
                  summary={study.summary}
                  tags={study.tags}
                  imageSrc={i === 0 ? '/images/botanical-hero.png' : '/images/botanical-hero-2.png'}
                  featured={i === 0}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────────────────── */}
        <section>
          <div className="container mx-auto px-5 sm:px-8 py-16 lg:py-20 max-w-5xl">
            <AnchorCard
              eyebrow="Work with us"
              headline="Want to know if your system has the same problems?"
              body="The diagnostic takes 20 minutes. It tells you exactly where the gap is and what to fix first."
              ctaLabel="Start your diagnostic"
              ctaHref="/contact"
            />
          </div>
        </section>

      </main>
    </>
  )
}
