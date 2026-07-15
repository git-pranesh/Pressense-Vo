import type { Metadata } from 'next'
import Link from 'next/link'
import { PageStructuredData } from '@/components/page-structured-data'

export const metadata: Metadata = {
  title: 'OneMagnify Website Migration Case Study | Pressense',
  description:
    'How Pressense delivered 250+ pages of enterprise content for OneMagnify\'s Webflow-to-HubSpot migration — one editorial and SEO standard across every service line.',
  openGraph: {
    title: 'OneMagnify Website Migration Case Study | Pressense',
    description:
      'How Pressense delivered 250+ pages of enterprise content for OneMagnify\'s Webflow-to-HubSpot migration — one editorial and SEO standard across every service line.',
    url: '/case-studies/onemagnify',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense — OneMagnify Case Study' }],
  },
  alternates: {
    canonical: '/case-studies/onemagnify',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OneMagnify Website Migration Case Study | Pressense',
    description:
      'How Pressense delivered 250+ pages of enterprise content for OneMagnify\'s Webflow-to-HubSpot migration — one editorial and SEO standard across every service line.',
    images: ['/og-image.jpg'],
  },
}

const engagementMeta = [
  { label: 'Client', value: 'OneMagnify' },
  { label: 'Industry', value: 'Global Marketing & CX' },
  { label: 'Partner', value: 'Squaircle' },
  { label: 'Scope', value: '250+ pages' },
]

const deliverables = [
  {
    title: 'Core service and solution pages',
    description:
      "OneMagnify's primary offerings across brand, media, data and analytics, and customer experience — each rebuilt around outcome-led messaging rather than generic agency language. Every page had its own approved structure and followed a consistent voice across the full set.",
  },
  {
    title: 'Technology-partnership pages',
    description:
      "Positioning for OneMagnify's role across its key platform relationships, built with precision: implementation and integration partner, not platform owner. Each page met its own SEO requirements while fitting into the broader site architecture.",
  },
  {
    title: 'Corporate and regional pages',
    description:
      'Office and location content rebuilt to reflect OneMagnify\'s physical presence and culture accurately, alongside standard local SEO requirements. Factual accuracy was a hard requirement — no placeholder claims, no approximations.',
  },
  {
    title: 'Client case-study content',
    description:
      'Built against a strict evidence standard: every page sourced from verified material, every figure checked against the record before publication. Where proof was not yet available, placeholders were used rather than invented detail.',
  },
]

const principles = [
  {
    number: '01',
    heading: 'Template discipline at scale',
    body: 'Consistency had to hold across every page category, not just within one type. The site had to read as a single coherent platform, not 250 individual documents written by different people on different days.',
  },
  {
    number: '02',
    heading: 'SEO and AI-visibility built in from the start',
    body: 'Meta titles, keyword integration, FAQ structures, and internal linking were part of every page\'s initial build. Not retrofitted. Aligned to how enterprise buyers research vendors through both traditional search and AI-assisted tools.',
  },
  {
    number: '03',
    heading: 'Factual and brand precision',
    body: 'Every claim about a technology partnership or service capability had to reflect OneMagnify\'s actual role accurately. Several pages went through more than twenty rounds of stakeholder review, with every comment addressed individually before sign-off.',
  },
]

export default function OneMagnifyCaseStudy() {
  return (
    <>
      <PageStructuredData
        pageName="OneMagnify Website Migration Case Study"
        pageDescription="How Pressense delivered 250+ pages of enterprise content for OneMagnify's Webflow-to-HubSpot migration — one editorial and SEO standard across every service line."
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Case Studies', url: '/case-studies' },
          { name: 'OneMagnify', url: '/case-studies/onemagnify' },
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
                <li className="text-foreground font-medium" aria-current="page">OneMagnify</li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <p className="eyebrow mb-5">
                Global Marketing &amp; Customer Experience
              </p>
              <h1 className="text-display font-serif font-medium text-foreground leading-[1.08] mb-6 text-balance">
                250 pages. One standard. Zero shortcuts.
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                When Squaircle led OneMagnify's platform migration from Webflow to HubSpot CMS, the technology layer had a plan. The content layer needed one too — built page for page, service line by service line, to a single editorial and SEO standard across more than 250 pages.
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
                    Breadth is a strength in the market. On a website, it becomes a problem.
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-5">
                    OneMagnify runs a wide portfolio of services spanning brand strategy, media, data and analytics, customer experience, and commerce technology. That breadth is a genuine competitive strength. On a website, it becomes a liability the moment each service line reads like it was written by a different team, to a different standard, on a different day.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed mb-5">
                    Squaircle was engaged to lead OneMagnify's broader website transformation: a full platform migration from Webflow to HubSpot CMS, alongside a rebuilt content architecture designed to support organic growth rather than function as a static corporate brochure.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    A migration at that scale needed more than new templates and a new CMS. It needed content built to match — page for page, service line for service line, at the same standard across the entire site.
                  </p>
                </div>

                {/* The solution */}
                <div className="border-t border-border/40 pt-16">
                  <p className="eyebrow mb-5">
                    The solution
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight mb-6 text-balance">
                    Content and platform built to move together
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-5">
                    Squaircle brought in Pressense as the specialist delivery partner for the content layer, working directly alongside Squaircle's delivery leads throughout the migration. The two workstreams were built to move together — not sequentially.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed mb-5">
                    As the HubSpot template architecture was finalised, content was written directly against it, not adapted afterward. That meant every page type — core service page, technology-partnership page, regional office page, or client case study — had to follow its own approved structure while reading as one consistent brand voice across the full 250-plus page set.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Three things defined how the work had to run.
                  </p>
                </div>

                {/* Principles */}
                <div className="border-t border-border/40 pt-16">
                  <p className="eyebrow mb-5">
                    How it ran
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight mb-10 text-balance">
                    Three non-negotiables at this scale
                  </h2>

                  <div className="flex flex-col gap-8">
                    {principles.map((item) => (
                      <div key={item.number} className="flex gap-5">
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center text-xs font-medium font-sans text-primary/70 mt-0.5">
                          {item.number}
                        </span>
                        <div>
                          <h3 className="text-base font-medium font-sans text-foreground mb-2">
                            {item.heading}
                          </h3>
                          <p className="text-base text-muted-foreground leading-relaxed">
                            {item.body}
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
                    Every page type. One standard.
                  </h2>

                  <div className="flex flex-col gap-8">
                    {deliverables.map((item) => (
                      <div key={item.title} className="bg-card border border-border rounded-2xl p-6">
                        <h3 className="text-base font-medium font-sans text-foreground mb-3 capitalize">
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
                    A website that reads like one team built it
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-5">
                    The migration gave OneMagnify a single content system spanning more than 250 pages, live on a new CMS, built to one editorial and SEO standard across every service line, technology partnership, and location.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed mb-5">
                    What had been a website with inconsistent depth by section became a platform where every page, regardless of topic, met the same bar for clarity, accuracy, and search readiness.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Specific traffic and lead outcomes sit with OneMagnify and Squaircle's ongoing measurement of the site. What Pressense delivered was the system underneath it: content built once, to a standard rigorous enough to scale across hundreds of pages without losing consistency along the way.
                  </p>
                </div>

                {/* Why this matters */}
                <div className="border-t border-border/40 pt-16">
                  <p className="eyebrow mb-5">
                    The bigger picture
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-medium text-foreground tracking-tight mb-6 text-balance">
                    Large migrations rarely fail on technology
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-5">
                    They fail when the content moving onto the new platform does not hold up at scale: inconsistent tone, thin pages, templates followed loosely from one section to the next.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    That is the layer Pressense is built to own inside a larger transformation: the editorial infrastructure, template governance, and SEO discipline that let a website scale to hundreds of pages on a new platform without losing what made the first ten pages good.
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
                        'Content at Scale (250+ pages)',
                        'SEO / AEO Architecture',
                        'Template Governance',
                        'Editorial Standards',
                        'Technology Partnership Pages',
                        'Platform Migration Support',
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
                      Delivered in partnership with
                    </p>
                    <a
                      href="https://www.squaircle.co/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors duration-200"
                    >
                      Squaircle
                    </a>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      Strategy and platform partner leading the migration
                    </p>
                  </div>

                  <div className="border-t border-border/40 pt-5">
                    <p className="eyebrow mb-3">
                      Need content at this scale?
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      The diagnostic takes 20 minutes and shows where your content system breaks down before a migration, not after.
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
                Running a platform migration and need the content to hold up?
              </h2>
              <p className="text-lg text-ink-muted leading-relaxed mb-8 font-sans">
                The diagnostic takes 20 minutes. It tells you exactly where the content layer is likely to break before the migration goes live.
              </p>
              <Link
                href="/diagnostic"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-highlight transition-colors duration-200 text-base"
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
