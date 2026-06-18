import type { Metadata } from 'next'
import { StructuredData } from '@/components/structured-data'
import { FinalCTA } from '@/components/final-cta'
import { AIStrategyHero } from '@/components/ai-strategy-page/hero'
import { AIStrategyWhoItsFor } from '@/components/ai-strategy-page/who-its-for-section'
import { AIStrategyProblems } from '@/components/ai-strategy-page/problems-section'
import { AIStrategyMethodology } from '@/components/ai-strategy-page/methodology-section'
import { AIStrategyWhatYouGet } from '@/components/ai-strategy-page/what-you-get-section'
import { AIStrategyFAQ } from '@/components/ai-strategy-page/faq-section'

export const metadata: Metadata = {
  title: 'AI Strategy Consulting for Growing Businesses | Pressense',
  description:
    'AI strategy consulting that ends with working pilots, not slide decks. Roadmap + two built pilots in 4 weeks. From $5,000. Book a free diagnostic.',
  openGraph: {
    title: 'AI Strategy Consulting for Growing Businesses | Pressense',
    description:
      'AI strategy consulting that ends with working pilots, not slide decks. Roadmap + two built pilots in 4 weeks. From $5,000.',
    url: '/ai-strategy-consulting',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pressense AI Strategy Consulting',
      },
    ],
  },
  alternates: {
    canonical: '/ai-strategy-consulting',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Strategy Consulting for Growing Businesses | Pressense',
    description:
      'AI strategy consulting that ends with working pilots, not slide decks. Roadmap + two built pilots in 4 weeks. From $5,000.',
    images: ['/og-image.jpg'],
  },
}

export default function AIStrategyConsultingPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Strategy Consulting',
    provider: {
      '@type': 'Organization',
      name: 'Pressense',
      url: 'https://www.pressense.co',
    },
    description:
      'Structured AI strategy consulting for founder-led businesses: opportunity mapping, readiness assessment, phased implementation roadmap, and two working pilots built and delivered in four weeks.',
    url: 'https://www.pressense.co/ai-strategy-consulting',
    areaServed: 'United States',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Strategy Consulting Packages',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Strategy Sprint',
            description: 'AI Opportunity Map, readiness assessment, and phased implementation roadmap delivered in 2 weeks.',
          },
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '1500',
            priceCurrency: 'USD',
            unitText: 'fixed project',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Strategy + Pilots',
            description: 'Strategy sprint plus two working AI pilots built and tested, delivered in 4 weeks.',
          },
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '3500',
            priceCurrency: 'USD',
            unitText: 'fixed project',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Ongoing Retainer',
            description: 'Monthly AI builds, optimisation, strategy reviews, and quarterly roadmap refresh.',
          },
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '1500',
            priceCurrency: 'USD',
            unitText: 'month',
          },
        },
      ],
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.pressense.co',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'AI Strategy Consulting',
        item: 'https://www.pressense.co/ai-strategy-consulting',
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is AI strategy consulting?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'AI strategy consulting is a structured engagement that maps your existing business operations to specific AI applications, prioritises them by ROI and implementation readiness, and produces a phased roadmap your team can execute. At Pressense, every strategy engagement includes at least two working pilots built by us, not just a document. The goal is a business that runs measurably faster or cheaper by the end of week four.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does AI strategy consulting cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A focused AI strategy sprint costs from $5,000 and takes two weeks to deliver an opportunity map and roadmap. A strategy-plus-pilots engagement costs from $12,000 and takes four weeks, ending with two working AI systems your team uses from day one. Monthly retainers start at $3,500 for ongoing builds and optimisation. Enterprise firms charge $25,000 to $250,000 for strategy decks. We charge less and include the build.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between AI strategy and AI implementation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "AI strategy identifies which problems are worth solving with AI and in what order. AI implementation is the act of building those solutions. Most firms sell strategy without implementation, which means you pay for a plan and then have to find someone else to build it. Pressense does both in the same engagement. The strategy sprint identifies the top five use cases. The build phase turns the top two into working systems before the engagement ends.",
        },
      },
      {
        '@type': 'Question',
        name: 'How do I know if my business is ready for AI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Readiness comes down to four factors: your data is clean and accessible, your processes are documented well enough for a new hire to follow, at least one person on your team will own the AI outcome, and you are not adding AI on top of fundamentally broken software. Most businesses are ready for at least two to three use cases even if they are not ready for a full transformation. Our 30-minute diagnostic identifies exactly where you stand across all four dimensions.",
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between AI and automation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Automation handles tasks with fixed rules: if this input arrives, perform this action. It is consistent, cheap, and does not learn. AI handles tasks requiring judgement: summarising a document, deciding which leads to prioritise, drafting content that matches a specific tone. For most growing businesses, the right answer is both. Automation for rule-based repetitive work, AI for tasks that previously required a person to think. The strategy engagement maps which is which for your specific workflows.",
        },
      },
      {
        '@type': 'Question',
        name: 'How long does an AI strategy engagement take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A strategy sprint takes two weeks: one week of diagnosis and one week of roadmap production. A strategy-plus-pilots engagement takes four weeks: two weeks of strategy and two weeks of building the first two pilots. Monthly retainers run on a rolling basis with two to three new builds delivered each month. All engagements start with a 30-minute diagnostic session that costs nothing and tells you immediately whether a full engagement makes sense for your business.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you work with businesses outside the United States?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. All Pressense engagements are remote-first. We work with founder-led businesses across the United States, the United Kingdom, Australia, and Canada. The diagnostic call, strategy sessions, and pilot reviews all happen over video. The build work is async. Time zones have never prevented a successful engagement.',
        },
      },
    ],
  }

  return (
    <>
      <StructuredData data={serviceSchema} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen">
        <AIStrategyHero />
        <AIStrategyWhoItsFor />
        <AIStrategyProblems />
        <AIStrategyMethodology />
        <AIStrategyWhatYouGet />
        <AIStrategyFAQ />
        <FinalCTA />
      </main>
    </>
  )
}
