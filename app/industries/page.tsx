import type { Metadata } from 'next'
import Link from 'next/link'
import { AnchorCard } from '@/components/anchor-card'

export const metadata: Metadata = {
  title: 'Industries We Serve | Pressense',
  description: 'We work across construction, manufacturing, professional services, real estate, and healthcare. The businesses look different. The problem underneath is usually the same.',
  alternates: { canonical: '/industries' },
  openGraph: {
    title: 'Industries We Serve | Pressense',
    description: 'Construction, manufacturing, professional services, real estate, and healthcare. The businesses look different. The problem underneath is usually the same.',
    url: '/industries',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense Industries' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industries We Serve | Pressense',
    description: 'Construction, manufacturing, professional services, real estate, and healthcare. The problem underneath is usually the same.',
    images: ['/og-image.jpg'],
  },
}

const GARAMOND = '"EB Garamond", Georgia, serif'

const industries = [
  {
    slug: 'construction',
    name: 'Construction',
    pattern: 'Subcontractor tracking, compliance documents, and change orders that live in spreadsheets next to the project management software everyone already paid for.',
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    pattern: 'Inventory in one sheet, production schedules in another, and decisions made on numbers that are already a week old.',
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    pattern: 'Hours tracked in one tool, billing handled in another, and no clear view of who on the team is overbooked or underbooked.',
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    pattern: 'Deals, commissions, and compliance documents spread across half a dozen tools that were never built to talk to each other.',
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    pattern: 'Intake, scheduling, and billing handled as separate systems, with front desk staff re-entering the same information more than once.',
  },
]

const whatChanges = [
  {
    industry: 'Healthcare',
    detail: 'We pay attention to how patient information moves and where HIPAA considerations apply.',
  },
  {
    industry: 'Construction',
    detail: 'We understand how a pay application actually gets approved before we touch anything.',
  },
  {
    industry: 'Professional Services',
    detail: 'We trace where billable hours get lost between timesheets and invoices.',
  },
  {
    industry: 'Manufacturing',
    detail: 'We map where decisions get made on stale data and where that creates downstream errors.',
  },
  {
    industry: 'Real Estate',
    detail: 'We follow how a deal moves from lead to close and where the handoff between tools breaks.',
  },
]

export default function IndustriesPage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="pt-24 pb-10">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div
            className="relative w-full rounded-3xl overflow-hidden"
            style={{
              backgroundImage: 'url(/images/service-hero-bg-opt.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0" style={{ background: 'rgba(10, 8, 5, 0.48)' }} aria-hidden="true" />
            <div className="relative z-10 px-6 py-10 sm:px-14 sm:py-20 lg:px-16 lg:py-24 max-w-3xl">
              <span
                className="eyebrow-pill mb-6 inline-block"
                style={{ borderColor: 'rgba(237,235,229,0.25)', color: 'rgba(237,235,229,0.6)' }}
              >
                Industries
              </span>
              <h1
                className="font-normal leading-tight text-balance mb-5"
                style={{ fontFamily: GARAMOND, fontSize: 'clamp(26px, 5vw, 58px)', color: '#EDEBE5' }}
              >
                Different industries, the same broken pattern.
              </h1>
              <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(237,235,229,0.72)' }}>
                We work across construction, manufacturing, professional services, real estate, and healthcare. The businesses look different. The problem underneath is usually the same.
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors"
                  style={{ background: '#EDEBE5', color: '#1A0F06' }}
                >
                  Start a free diagnostic
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors"
                  style={{ border: '1px solid rgba(237,235,229,0.3)', color: 'rgba(237,235,229,0.8)' }}
                >
                  How we work
                  <span
                    className="inline-flex items-center justify-center w-5 h-5 rounded-full"
                    style={{ background: 'rgba(237,235,229,0.15)' }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Pattern ──────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="eyebrow-pill">The Pattern</span>
              <h2
                className="font-normal text-balance leading-tight"
                style={{ fontFamily: GARAMOND, fontSize: 'clamp(28px, 4vw, 44px)' }}
              >
                What we see again and again.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                A business grows past the point where spreadsheets, email, and WhatsApp can hold everything together. Work gets tracked in three places at once. One person ends up being the only one who actually knows how a process works.
              </p>
              <p>
                Adding a second location, a bigger team, or more volume exposes how fragile the whole system already was. This shows up differently depending on the industry. The shape changes. The root cause does not.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Industry Cards ───────────────────────────────────────── */}
      <section className="py-10 lg:py-16">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="mb-10">
            <span className="eyebrow-pill">Where We Work</span>
            <h2
              className="font-normal text-balance leading-tight max-w-lg"
              style={{ fontFamily: GARAMOND, fontSize: 'clamp(28px, 4vw, 44px)' }}
            >
              How the problem shows up in your industry.
            </h2>
          </div>

          <div className="flex flex-col divide-y divide-[#D4CFC7]">
            {industries.map((ind, i) => (
              <div
                key={ind.slug}
                className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-10 py-8"
              >
                {/* Index */}
                <span
                  className="shrink-0 text-sm font-medium tabular-nums w-6"
                  style={{ color: '#9A8C80', paddingTop: '2px' }}
                >
                  0{i + 1}
                </span>

                {/* Name */}
                <h3
                  className="shrink-0 font-normal w-48"
                  style={{ fontFamily: GARAMOND, fontSize: 'clamp(20px, 2.5vw, 26px)', color: '#1A0F06' }}
                >
                  {ind.name}
                </h3>

                {/* Pattern description */}
                <p className="flex-1 text-base leading-relaxed text-muted-foreground">
                  {ind.pattern}
                </p>

                {/* Link */}
                <Link
                  href={`/industries/${ind.slug}`}
                  className="shrink-0 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/50 hover:text-foreground transition-colors self-start sm:self-center mt-1 sm:mt-0"
                >
                  Learn more
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Industry Context Matters ─────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="eyebrow-pill">Why Industry Context Matters</span>
              <h2
                className="font-normal text-balance leading-tight"
                style={{ fontFamily: GARAMOND, fontSize: 'clamp(28px, 4vw, 44px)' }}
              >
                We still look at your industry specifically.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                The diagnostic finds your actual bottleneck regardless of industry. But knowing the common failure points in your specific field means we walk in already understanding the shape of the problem, instead of starting from zero.
              </p>
            </div>
            <ul className="space-y-5 pt-2">
              {whatChanges.map((item) => (
                <li key={item.industry} className="flex gap-3 items-start">
                  <span className="mt-2 shrink-0 h-2 w-2 rounded-full bg-[#6B5D51]" aria-hidden="true" />
                  <span className="text-base text-foreground/75 leading-relaxed">
                    <span className="font-medium text-foreground">{item.industry}, </span>
                    {item.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── What Changes, What Doesn't ───────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="max-w-2xl">
            <span className="eyebrow-pill">What Changes, What Doesn&apos;t</span>
            <h2
              className="font-normal text-balance leading-tight mb-6"
              style={{ fontFamily: GARAMOND, fontSize: 'clamp(28px, 4vw, 44px)' }}
            >
              The tools change. The approach does not.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              We still start with a diagnostic in every industry. What differs is what we are looking for. We build the specific tool your business needs after that diagnostic, not a generic template labeled for your industry.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <AnchorCard
            eyebrow="Where to start"
            headline="Find out what this looks like in your business."
            body="Start with a free diagnostic. We'll tell you honestly what we find, specific to how your industry actually operates."
            ctaLabel="Start a free diagnostic"
            ctaHref="/contact"
          />
        </div>
      </section>
    </main>
  )
}
