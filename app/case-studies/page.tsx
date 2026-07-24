import type { Metadata } from 'next'
import Link from 'next/link'
import { PageStructuredData } from '@/components/page-structured-data'
import { CaseStudyCard } from '@/components/case-study-card'
import { AnchorCard } from '@/components/anchor-card'

export const metadata: Metadata = {
  title: 'Case Studies | Pressense',
  description:
    'Real GTM, strategy, and content engagements from Pressense. Including work with Zoho Creator and OneMagnify, see what we found and what we built to fix it.',
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
      "Low-code platforms sell into two audiences at once. Zoho Creator had a mature product and real differentiation, but the GTM system around it wasn't built to carry an enterprise buyer from first search to internal business case. We built it.",
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
  {
    slug: 'two-location-clinic',
    client: '140 Hours of Admin, Automated',
    industry: 'Private Healthcare, Australia',
    engagementType: 'Workflow Blueprint',
    duration: 'Internal tools engagement',
    summary:
      '105 staff hours released every month. A$53,000 in annual capacity recovered. A two-location specialist clinic was losing 140 hours a month to manual referral admin. We mapped the workflow, quantified the cost, and built the missing operational layer.',
    tags: ['Workflow Automation', 'Internal Tools', 'Healthcare', 'Operational Efficiency'],
  },
  {
    slug: 'commercial-contractor',
    client: '116 Hours Recovered. Seven Days Faster.',
    industry: 'Commercial Construction, Sydney',
    engagementType: 'Commercial Workflow System',
    duration: 'Internal tools engagement',
    summary:
      '72% reduction in commercial administration. 116 staff hours released every month. A$91,000 in annual capacity. A$360,000 working-capital timing improvement. A Sydney contractor was losing 161 hours a month to spreadsheets, email chains and manual reconciliation. We built the missing commercial-control layer.',
    tags: ['Custom Software', 'Workflow Automation', 'Construction', 'Commercial Operations'],
  },
  {
    slug: 'ontario-distributor',
    client: '479 Hours of Order Admin, Automated',
    industry: 'Industrial Distribution, Ontario',
    engagementType: 'Order and Operations Control System',
    duration: 'Internal tools engagement',
    summary:
      '78% faster order processing. 354 staff hours released every month. C$182,000 in annual capacity. 21% order-volume growth without hiring. A family-owned Ontario distributor was losing 479 hours a month across email chains, pricing spreadsheets and manual ERP entry. We built the missing commercial layer.',
    tags: ['Custom Software', 'Workflow Automation', 'Distribution', 'Order Operations'],
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
              <div className="relative z-10 px-6 py-10 sm:px-14 sm:py-20 lg:px-16 lg:py-24 max-w-3xl">
                <span className="eyebrow-pill mb-6 inline-block" style={{ borderColor: 'rgba(237,235,229,0.25)', color: 'rgba(237,235,229,0.6)' }}>Case Studies</span>
                <h1
                  className="font-normal leading-[1.05] text-balance mb-6"
                  style={{ fontFamily: '"EB Garamond", Georgia, serif', fontSize: 'clamp(26px, 5vw, 58px)', color: '#EDEBE5' }}
                >
                  We don&apos;t share testimonials.{' '}
                  <em className="italic">We share what we fixed, and how.</em>
                </h1>
                <p className="text-lg leading-relaxed max-w-xl" style={{ color: 'rgba(237,235,229,0.72)' }}>
                  Every engagement starts with a broken system. Here is what we found, and what we built to fix it.
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
