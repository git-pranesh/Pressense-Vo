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
        <section className="pt-24 pb-10">
          <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
            <div
              className="relative w-full rounded-3xl overflow-hidden"
              style={{ backgroundImage: 'url(/images/secondary-hero-bg-opt.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0" style={{ background: 'rgba(10, 8, 5, 0.48)' }} aria-hidden="true" />
              <div className="relative z-10 px-8 py-16 sm:px-14 sm:py-20 lg:px-16 lg:py-24 max-w-3xl">
                <span className="eyebrow-pill mb-6 inline-block" style={{ borderColor: 'rgba(237,235,229,0.25)', color: 'rgba(237,235,229,0.6)' }}>Case Studies</span>
                <h1
                  className="font-normal leading-[1.05] text-balance mb-6"
                  style={{ fontFamily: '"EB Garamond", Georgia, serif', fontSize: 'clamp(36px, 5vw, 58px)', color: '#EDEBE5' }}
                >
                  We don&apos;t share testimonials.{' '}
                  <em className="italic">We share what we fixed, and how.</em>
                </h1>
                <p className="text-lg leading-relaxed max-w-xl" style={{ color: 'rgba(237,235,229,0.72)' }}>
                  Every engagement starts with a broken system. Here is what we found — and what we built to fix it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Card grid ────────────────────────────────────────── */}
        <section className="py-16 lg:py-20" aria-labelledby="case-studies-grid-heading">
          <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
            <h2 className="sr-only" id="case-studies-grid-heading">All case studies</h2>

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
