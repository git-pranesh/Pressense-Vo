import type { Metadata } from 'next'
import Link from 'next/link'
import { PageStructuredData } from '@/components/page-structured-data'

export const metadata: Metadata = {
  title: 'Pixellu CRO Case Study — 1,579 Free Trials in Six Months | Pressense',
  description:
    'How Pressense built the personalization and A/B testing infrastructure that generated 1,579 additional free trials for Pixellu in six months, plus a 12% checkout conversion lift.',
  openGraph: {
    title: 'Pixellu CRO Case Study — 1,579 Free Trials in Six Months | Pressense',
    description:
      'How Pressense built the personalization and A/B testing infrastructure that generated 1,579 additional free trials for Pixellu in six months, plus a 12% checkout conversion lift.',
    url: '/case-studies/pixellu',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense — Pixellu Case Study' }],
  },
  alternates: {
    canonical: '/case-studies/pixellu',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixellu CRO Case Study — 1,579 Free Trials in Six Months | Pressense',
    description:
      'How Pressense built the personalization and A/B testing infrastructure that generated 1,579 additional free trials for Pixellu in six months, plus a 12% checkout conversion lift.',
    images: ['/og-image.jpg'],
  },
}

const engagementMeta = [
  { label: 'Client', value: 'Pixellu' },
  { label: 'Industry', value: 'SaaS / Creative Software' },
  { label: 'Duration', value: 'Six months' },
  { label: 'Key result', value: '+1,579 free trials' },
]

const deliverables = [
  {
    title: 'Behavior-based personalization layer',
    description:
      'Content and calls-to-action tailored by visitor location, device, and referral source. A visitor arriving from a pricing-focused ad saw pricing-forward messaging. One arriving from a feature comparison saw the relevant capability front and center. The same page, speaking to whoever was actually on it.',
  },
  {
    title: 'Continuous A/B testing program',
    description:
      'A structured testing cycle covering the homepage, key landing pages, and paid campaign destinations — run as an ongoing program rather than a series of one-off launches. Each test result fed the next hypothesis instead of the program resetting after each round.',
  },
  {
    title: 'Segmented experiences by persona',
    description:
      'Dynamic content and copy matched to visitor intent across Pixellu\'s distinct buyer types: photographers comparing pricing plans, those evaluating specific features, and those arriving cold from paid ads. Each group got a version of the page built for their question.',
  },
  {
    title: 'Checkout friction investigation',
    description:
      'Rather than apply best practices uniformly, the team tracked actual visitor behavior through the checkout flow and found that standard site navigation, header and footer links included, was pulling visitors away mid-purchase. Removing that navigation directly addressed a hidden source of drop-off.',
  },
]

export default function PixelluCaseStudy() {
  return (
    <>
      <PageStructuredData
        pageName="Pixellu CRO Case Study"
        pageDescription="How Pressense built the personalization and A/B testing infrastructure that generated 1,579 additional free trials for Pixellu in six months, plus a 12% checkout conversion lift."
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Case Studies', url: '/case-studies' },
          { name: 'Pixellu', url: '/case-studies/pixellu' },
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
                <li className="text-foreground font-medium" aria-current="page">Pixellu</li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <p className="eyebrow mb-5">
                SaaS / Creative Software for Photography Professionals
              </p>
              <h1 className="text-display font-serif font-medium text-foreground leading-[1.08] mb-6 text-balance">
                1,579 free trials.{' '}
                <span className="text-muted-foreground font-light">
                  Same traffic. Different system.
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Pixellu had a product photographers trusted and traffic to match. The conversion system underneath it was not built for the three different questions each visitor type brings. We built one that was.
              </p>
            </div>

            {/* Engagement meta */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {engagementMeta.map((item) => (
                <div key={item.label} className="bg-card border border-border rounded-xl p-4">
                  <span className="eyebrow block mb-1.5">{item.label}</span>
                  <p className="text-sm font-medium font-sans text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-[1fr_340px] gap-16 items-start">

              {/* Main content */}
              <div className="flex flex-col gap-16">

                {/* The challenge */}
                <div>
                  <p className="eyebrow mb-5">
                    The challenge
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight mb-6 text-balance">
                    Good traffic. The wrong conversion system.
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-5">
                    Pixellu builds software for one of the most detail-focused parts of a professional photographer&apos;s workflow: album design, client proofing, and photo slideshows. The product had real traction. The problem was what happened once visitors arrived on the site.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed mb-5">
                    Pixellu&apos;s audience is not a single buyer type. A photographer landing on the site might be comparing pricing plans, checking specific feature capabilities, or arriving cold after clicking a paid ad. Each brings a different question. Each needs a different answer before they&apos;ll sign up. A single static page trying to address all three at once ends up satisfying none of them well.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Building separate page versions manually for each visitor type was not realistic without ongoing developer time. Pixellu needed a way to personalize the experience and run structured tests without adding engineering overhead to every change.
                  </p>
                </div>

                {/* The approach */}
                <div className="border-t border-border/40 pt-16">
                  <p className="eyebrow mb-5">
                    The approach
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight mb-6 text-balance">
                    A testing culture, not a one-time redesign
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-5">
                    Pressense came in as an embedded growth marketing and CRO partner, tasked with turning Pixellu&apos;s existing traffic into a measurable, repeatable conversion engine.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed mb-5">
                    The work was built around CustomFit.ai, a no-code testing and personalization platform that let the team run structured experiments and personalize content without pulling engineering resources into every change. That mattered because the goal was not a single optimized page. It was a continuous testing culture: hypothesis, test, measure, ship the winner, move to the next question.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Everything ran against data. Not assumptions, not best practices borrowed from other industries. Actual visitor behavior on Pixellu&apos;s actual pages.
                  </p>
                </div>

                {/* What was built */}
                <div className="border-t border-border/40 pt-16">
                  <p className="eyebrow mb-5">
                    What was built
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight mb-10 text-balance">
                    Four systems that ran together
                  </h2>

                  <div className="flex flex-col gap-6">
                    {deliverables.map((item) => (
                      <div key={item.title} className="bg-card border border-border rounded-2xl p-6">
                        <h3 className="text-base font-medium font-sans text-foreground mb-3">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* The impact */}
                <div className="border-t border-border/40 pt-16">
                  <p className="eyebrow mb-5">
                    The impact
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight mb-6 text-balance">
                    1,579 additional free trials. One 12% checkout lift.
                  </h2>

                  {/* Result callouts */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <div className="bg-card border border-border rounded-2xl p-6">
                      <p className="text-3xl font-serif font-medium text-foreground mb-2">+1,579</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        additional free trial sign-ups over six months, measured directly against the prior baseline
                      </p>
                    </div>
                    <div className="bg-card border border-border rounded-2xl p-6">
                      <p className="text-3xl font-serif font-medium text-foreground mb-2">+12%</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        checkout conversion rate lift from a single insight-led navigation test
                      </p>
                    </div>
                  </div>

                  <p className="text-base text-muted-foreground leading-relaxed mb-5">
                    The checkout navigation test is worth noting separately. The finding ran against the team&apos;s own initial assumptions. Standard site navigation, the kind most sites keep everywhere because it seems neutral, was actively pulling visitors away mid-purchase. Removing it from the checkout page produced a 12% conversion lift. That is the kind of result that only comes from looking at what visitors are actually doing rather than assuming best practices apply.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Beyond the individual wins, the engagement gave Pixellu something more durable: a working system for continuous optimization where every test result feeds the next hypothesis, and the program compounds over time rather than resetting after each launch.
                  </p>
                </div>

                {/* Why this matters */}
                <div className="border-t border-border/40 pt-16">
                  <p className="eyebrow mb-5">
                    The bigger picture
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight mb-6 text-balance">
                    Most conversion problems are not traffic problems
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-5">
                    They are relevance problems. The same page trying to answer three different visitor questions at once, satisfying none of them well enough to push someone across the line.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    That is the layer Pressense is built to work in: not a single redesign, but the ongoing personalization and testing infrastructure that lets a product with strong traffic finally convert like it should, one measured test at a time.
                  </p>
                </div>

              </div>

              {/* Sidebar */}
              <aside className="hidden lg:block sticky top-28 self-start">
                <div className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-6">
                  <div>
                    <p className="eyebrow mb-4">
                      Scope of work
                    </p>
                    <ul className="flex flex-col gap-3">
                      {[
                        'Conversion Rate Optimization',
                        'Website Personalization',
                        'A/B Testing Program',
                        'Checkout Friction Analysis',
                        'Persona-Based Segmentation',
                        'Growth Marketing Strategy',
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/40 flex-shrink-0" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-border/40 pt-5">
                    <p className="eyebrow mb-2">
                      Tools used
                    </p>
                    <p className="text-sm font-medium text-foreground">CustomFit.ai</p>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      No-code personalization and A/B testing platform
                    </p>
                  </div>

                  <div className="border-t border-border/40 pt-5">
                    <p className="eyebrow mb-3">
                      Conversion problem?
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      The diagnostic shows where your conversion system breaks down before you spend more on traffic.
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
            <div className="bg-ink rounded-3xl p-10 sm:p-16 max-w-4xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="eyebrow-line-dark" aria-hidden="true" />
                <span className="eyebrow-on-dark">Work with us</span>
              </div>
              <h2 className="text-section-title font-serif font-medium text-ink-foreground mb-4 text-balance">
                Want to know where your conversion system breaks down?
              </h2>
              <p className="text-lg text-ink-muted leading-relaxed mb-8 font-sans">
                The diagnostic takes 20 minutes. It tells you exactly where the gap is and what to fix first.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/diagnostic"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-highlight transition-colors duration-200 text-base"
                >
                  Start your diagnostic
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7h10M8 3.5L11.5 7 8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  href="/case-studies"
                  className="text-sm font-medium text-ink-muted hover:text-ink-foreground transition-colors duration-200 font-sans"
                >
                  See all case studies
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
