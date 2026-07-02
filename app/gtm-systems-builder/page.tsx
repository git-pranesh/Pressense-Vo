import { StructuredData } from '@/components/structured-data'
import { FinalCTA } from '@/components/final-cta'
import { GtmSystemsBuilderHero } from '@/components/gtm-systems-builder-page/hero'
import { GtmSystemsBuilderThreeTracksSection } from '@/components/gtm-systems-builder-page/three-tracks-section'
import { GtmSystemsBuilderWhoItsForSection } from '@/components/gtm-systems-builder-page/who-its-for-section'
import { GtmSystemsBuilderProblemsSection } from '@/components/gtm-systems-builder-page/problems-section'
import { GtmSystemsBuilderFaqSection } from '@/components/gtm-systems-builder-page/faq-section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GTM Systems Builder for B2B SaaS Founders | Pressense',
  description:
    'Pressense is a GTM systems builder for founder-led B2B SaaS: strategy, SEO content systems, and internal tools that replace founder heroics with repeatable, compounding pipeline.',
  openGraph: {
    title: 'GTM Systems Builder for B2B SaaS Founders | Pressense',
    description:
      'Pressense is a GTM systems builder for founder-led B2B SaaS: strategy, SEO content systems, and internal tools that replace founder heroics with repeatable, compounding pipeline.',
    url: '/gtm-systems-builder',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'GTM Systems Builder | Pressense' }],
  },
  alternates: {
    canonical: '/gtm-systems-builder',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTM Systems Builder for B2B SaaS Founders | Pressense',
    description:
      'Pressense is a GTM systems builder for founder-led B2B SaaS: strategy, SEO content systems, and internal tools.',
    images: ['/og-image.jpg'],
  },
}

export default function GtmSystemsBuilderPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'GTM Systems Builder',
    provider: {
      '@type': 'Organization',
      name: 'Pressense',
      url: 'https://www.pressense.co',
    },
    description:
      'Pressense designs and builds go-to-market systems for founder-led B2B SaaS companies: GTM strategy, SEO content systems, and custom internal tools. The output is repeatable organic pipeline and operations that scale without proportional headcount.',
    url: 'https://www.pressense.co/gtm-systems-builder',
    areaServed: 'Worldwide',
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
        name: 'GTM Systems Builder',
        item: 'https://www.pressense.co/gtm-systems-builder',
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a GTM systems builder?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A GTM systems builder designs and builds the go-to-market infrastructure for founder-led B2B SaaS companies: the strategy that defines the ICP and positioning, the content system that generates organic pipeline, and the internal tools that remove operational bottlenecks. It is not a consultant who advises, a content agency that writes, or a dev shop that builds. It is an operator who combines all three to build a running system.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is this different from hiring a fractional CMO?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A fractional CMO advises on strategy and manages an existing marketing team. They are the right hire when you have a team and need leadership for it. Pressense is for founders who do not yet have a marketing team and need to build the system before hiring into it. The output is a working content programme and operational infrastructure, not management of existing resources.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does a GTM systems builder cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pricing depends on scope. A GTM strategy and content system design starts from $8,000 for a fixed deliverable. A running content programme with monthly production is a retainer from $3,500 per month. Internal tools are fixed-price based on scope from the diagnostic session. Every engagement starts with a diagnostic session that defines the problem and the fixed-price cost before any work begins.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to see results from a GTM content system?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bottom-of-funnel content like comparison pages and use-case pages can show organic ranking movement within sixty to ninety days. A full content programme generating consistent organic pipeline takes six to twelve months to compound meaningfully. Most founders see measurable impact across all three tracks within six months of the system going live.',
        },
      },
      {
        '@type': 'Question',
        name: 'What kind of B2B SaaS companies do you work with?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pressense works with founder-led B2B SaaS companies typically between seed and Series A: past product-market-fit, generating early revenue, and facing the transition from founder-led growth to system-led growth. Enterprise SaaS companies with large existing teams are not the right fit.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do most B2B SaaS founders struggle with growth after product-market-fit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most founders who find product-market-fit did so through personal network, warm intros, and founder-led selling. Those channels are not scalable. The transition to system-led growth requires a content motion that generates inbound, a GTM strategy that defines which buyers to pursue, and internal systems that remove the founder from operational bottlenecks. This is what a GTM systems builder builds.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Pressense',
        url: 'https://www.pressense.co',
      }} />

      <main className="min-h-screen">
        <GtmSystemsBuilderHero />
        <GtmSystemsBuilderThreeTracksSection />
        <GtmSystemsBuilderWhoItsForSection />
        <GtmSystemsBuilderProblemsSection />
        <GtmSystemsBuilderFaqSection />
        <FinalCTA />
      </main>
    </>
  )
}
