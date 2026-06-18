import type { Metadata } from 'next'
import { StructuredData } from '@/components/structured-data'
import { GTMHero } from '@/components/gtm-consultant-page/hero'
import { ProblemSection } from '@/components/gtm-consultant-page/problem-section'
import { SolutionSection } from '@/components/gtm-consultant-page/solution-section'
import { WhoItsForSection } from '@/components/gtm-consultant-page/who-its-for-section'
import { WhatYouGetSection } from '@/components/gtm-consultant-page/what-you-get-section'
import { AuthorBioSection } from '@/components/gtm-consultant-page/author-bio-section'
import { GTMFAQSection } from '@/components/gtm-consultant-page/faq-section'
import { GTMCTA } from '@/components/gtm-consultant-page/final-cta'

export const metadata: Metadata = {
  title: 'GTM Strategy Consultant for B2B Startups | Pressense',
  description:
    'GTM strategy consultant for B2B startups and scaling businesses. The PRESS Framework diagnoses GTM bottlenecks and builds strategy that converts. From $2,500.',
  alternates: { canonical: '/gtm-strategy-consultant' },
  openGraph: {
    title: 'GTM Strategy Consultant for B2B Startups | Pressense',
    description:
      'Diagnose why your GTM is not converting and build the strategy that fixes it. The Pressense PRESS Framework for B2B startups and scaling businesses.',
    type: 'website',
    url: '/gtm-strategy-consultant',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'GTM Strategy Consultant - Pressense' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTM Strategy Consultant for B2B Startups | Pressense',
    description:
      'Diagnose why your GTM is not converting and build the strategy that fixes it. From $2,500.',
    images: ['/og-image.jpg'],
  },
}

export default function GTMStrategyConsultantPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'GTM Strategy Consulting',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Pressense',
      url: 'https://www.pressense.co',
    },
    description:
      'Go-to-market strategy consulting for B2B startups and scaling businesses. The PRESS Framework covers positioning, research, execution, scaling, and sustaining a repeatable revenue system.',
    serviceType: 'GTM Strategy Consulting',
    areaServed: ['United States', 'India', 'United Kingdom', 'Worldwide'],
    url: 'https://www.pressense.co/gtm-strategy-consultant',
    offers: {
      '@type': 'Offer',
      price: '2500',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '2500',
        priceCurrency: 'USD',
        unitText: 'fixed-price from',
        description: 'Starting price for PRESS Framework GTM strategy engagement',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'GTM Strategy Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ICP Definition and Positioning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Channel Strategy' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sales Motion Design' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Revenue Operations Setup' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'GTM Playbook and Training' } },
      ],
    },
  }

  const authorSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Pranesh Padmanabhan',
    jobTitle: 'Founder, Pressense',
    url: 'https://www.pressense.co',
    sameAs: ['https://linkedin.com/in/pranesh'],
    worksFor: {
      '@type': 'Organization',
      name: 'Pressense',
      url: 'https://www.pressense.co',
    },
    knowsAbout: [
      'Go-to-market strategy',
      'Revenue operations consulting',
      'B2B SaaS growth',
      'AI automation',
      'Fractional CMO services',
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a GTM consultant?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A GTM consultant diagnoses why your go-to-market approach is failing to convert and designs the strategy to fix it. This covers positioning, ICP definition, channel selection, sales motion design, and the revenue operations infrastructure that makes the system measurable. A GTM consultant works across marketing, sales, and customer success, not just one function.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the 5 pillars of GTM strategy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The five pillars are Ideal Customer Profile, Positioning, Channel Strategy, Sales Enablement, and Revenue Operations. ICP defines exactly who you sell to. Positioning defines why they should choose you. Channel strategy identifies how you reach them at purchase intent. Sales enablement equips your team to close consistently. Revenue operations builds the metrics and feedback loops that make the whole system improvable.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does GTM consulting cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GTM consulting costs vary by scope and engagement model. Project-based strategy sprints in the market typically run from $5,000 to $15,000. Pressense GTM strategy engagements start from $2,500 for the PRESS Framework — covering positioning, ICP, channel strategy, sales motion, and a revenue operations foundation over eight weeks. Book a free diagnostic to get a fixed-price estimate for your situation.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between a GTM consultant and a fractional CMO?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A GTM consultant focuses specifically on go-to-market strategy design and the revenue system. A fractional CMO takes broader operational ownership of the marketing function, including team management, budget ownership, and campaign execution. GTM consulting is typically project-scoped. A fractional CMO is an ongoing leadership role. Many companies start with GTM consulting and move to a fractional CMO once strategy is clear.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does a GTM engagement take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most GTM strategy engagements take four to eight weeks from diagnostic to a complete, implemented strategy. The Pressense PRESS Framework is structured across eight weeks with a named deliverable in each phase. Implementation support and team training extend through the eighth week, followed by a 30-day review to catch gaps before full handover.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you work with businesses outside the US?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Pressense works with B2B SaaS and scaling businesses across India, the UK, the US, and globally. The PRESS Framework applies regardless of geography. We have particular depth in the India B2B SaaS market, where GTM challenges around positioning for both domestic and US enterprise buyers are common.',
        },
      },
      {
        '@type': 'Question',
        name: 'When should you hire a GTM consultant?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most companies benefit most from GTM consulting at three moments: when growth stalls after initial traction, when entering a new market or segment, or when a funding round creates pressure to scale revenue faster than the current GTM can support.',
        },
      },
    ],
  }

  return (
    <>
      <StructuredData data={serviceSchema} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pressense.co' },
              { '@type': 'ListItem', position: 2, name: 'GTM Strategy Consultant', item: 'https://www.pressense.co/gtm-strategy-consultant' },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        <GTMHero />
        <ProblemSection />
        <SolutionSection />
        <WhoItsForSection />
        <WhatYouGetSection />
        <AuthorBioSection />
        <GTMFAQSection />
        <GTMCTA />
      </main>
    </>
  )
}
