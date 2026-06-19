import { StructuredData } from '@/components/structured-data'
import { RevOpsHero } from '@/components/revenue-operations-page/hero'
import { ProblemSection } from '@/components/revenue-operations-page/problem-section'
import { SolutionSection } from '@/components/revenue-operations-page/solution-section'
import { WhoItsForSection } from '@/components/revenue-operations-page/who-its-for-section'
import { MethodologySection } from '@/components/revenue-operations-page/methodology-section'
import { WhatYouGetSection } from '@/components/revenue-operations-page/what-you-get-section'
import { FAQSection } from '@/components/revenue-operations-page/faq-section'
import { FinalCTA } from '@/components/revenue-operations-page/final-cta'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Revenue Operations Consulting for Scaling B2B | Pressense',
  description: 'Revenue operations consulting that aligns marketing, sales, and customer success to fix pipeline leakage and build predictable growth. Fractional RevOps from $2,000/month.',
  openGraph: {
    title: 'Revenue Operations Consulting for Scaling B2B | Pressense',
    description: 'Align your GTM teams under one operating model. Fix handoff failures, clean your CRM, and build forecast accuracy. Fractional RevOps from $2,000/month.',
    url: '/revenue-operations-consulting',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense Revenue Operations Consulting' }],
  },
  alternates: {
    canonical: '/revenue-operations-consulting',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Revenue Operations Consulting for Scaling B2B | Pressense',
    description: 'Fractional RevOps consulting that aligns marketing, sales, and customer success. Fix pipeline leakage and build predictable revenue growth.',
    images: ['/og-image.jpg'],
  },
}

export default function RevOpsPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Revenue Operations Consulting',
    provider: { '@type': 'Organization', name: 'Pressense', url: 'https://www.pressense.co' },
    description: 'Revenue operations consulting that aligns marketing, sales, and customer success under one operational framework. Eliminates pipeline leakage, data silos, and handoff failures.',
    url: 'https://www.pressense.co/revenue-operations-consulting',
    areaServed: 'United States',
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'USD',
        minPrice: '2000',
        unitText: 'month',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Revenue Operations Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Revenue Process Design' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CRM Architecture and Data Cleanup' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Revenue Forecasting and Pipeline Management' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cross-functional Reporting and KPI Alignment' } },
      ],
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are fractional RevOps services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fractional RevOps services give you a senior revenue operations consultant working inside your business on a part-time basis, typically 10 to 20 hours per week. They own the same outcomes a full-time hire would, building your CRM architecture, pipeline process, forecasting model, and cross-functional reporting, without the $150K+ annual cost. Most B2B businesses between $1M and $15M ARR use fractional RevOps as their primary model.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does a RevOps consultant do?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A revenue operations consultant diagnoses where your pipeline is leaking, redesigns your process to fix it, and builds the systems that make the fix stick. In practice this means auditing your CRM data, redesigning your pipeline stages, defining the handoff criteria between marketing and sales, building your forecast model, and setting up the reporting dashboard your leadership team reviews each month.',
        },
      },
      {
        '@type': 'Question',
        name: 'When should you hire a RevOps consultant?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The clearest trigger is when your forecast accuracy drops below 70 percent or your sales cycle has lengthened by more than 20 percent without an obvious reason. Other signals: marketing and sales disagree on what a qualified lead means, customer success does not know which customers are at risk until it is too late, and leadership cannot see clean pipeline data without pulling multiple reports.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is RevOps a good career?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Revenue operations is one of the fastest-growing roles in B2B technology. Demand for RevOps professionals grew over 300 percent between 2018 and 2024 and salaries for senior practitioners now range from $90,000 to $180,000 at scaling SaaS companies. The role sits at the intersection of data, process, and commercial strategy, which makes it high-leverage and difficult to automate.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a revenue operations job?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A revenue operations job involves owning the systems, data, and processes that connect marketing, sales, and customer success. Day to day this means managing the CRM, building and maintaining dashboards, running the forecast review process, designing pipeline stages, and auditing the tech stack. Senior RevOps roles also set the go-to-market cadence and advise leadership on where to invest in growth infrastructure.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the 5 types of consulting?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The five most common consulting categories are strategy consulting, management consulting, technology consulting, operations consulting, and specialist consulting. Revenue operations consulting falls within operations consulting but blends strategy and technology work. It is distinct from traditional management consulting because it focuses on implementation and measurable revenue outcomes rather than recommendations and reports.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does revenue operations consulting cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Fractional revenue operations consulting in the market typically costs $3,000 to $18,000 per month depending on scope and hours. Pressense fractional RevOps starts from $2,000 per month — covering CRM architecture, pipeline process design, forecasting, and cross-functional reporting. Full-time RevOps hires cost $90,000 to $250,000 per year fully loaded. Book a free diagnostic to get a scoped, fixed-price estimate for your situation.',
        },
      },
    ],
  }

  return (
    <>
      <StructuredData data={serviceSchema} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pressense.co' },
              { '@type': 'ListItem', position: 2, name: 'Revenue Operations Consulting', item: 'https://www.pressense.co/revenue-operations-consulting' },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen">
        <RevOpsHero />
        <ProblemSection />
        <SolutionSection />
        <WhoItsForSection />
        <MethodologySection />
        <WhatYouGetSection />
        <FAQSection />
        <FinalCTA />
      </main>
    </>
  )
}
