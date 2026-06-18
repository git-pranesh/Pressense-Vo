import type { Metadata } from 'next'
import { StructuredData } from '@/components/structured-data'
import { FractionalCMOHero } from '@/components/fractional-cmo-page/hero'
import { ProblemSection } from '@/components/fractional-cmo-page/problem-section'
import { SolutionSection } from '@/components/fractional-cmo-page/solution-section'
import { WhoItsForSection } from '@/components/fractional-cmo-page/who-its-for-section'
import { MethodologySection } from '@/components/fractional-cmo-page/methodology-section'
import { WhatYouGetSection } from '@/components/fractional-cmo-page/what-you-get-section'
import { FractionalCMOFAQSection } from '@/components/fractional-cmo-page/faq-section'
import { FractionalCMOCTA } from '@/components/fractional-cmo-page/final-cta'

export const metadata: Metadata = {
  title: 'Fractional CMO Services for B2B SaaS & Startups | Pressense',
  description:
    'Fractional CMO services for B2B SaaS and founder-led startups. Senior marketing leadership from $1,500/month. GTM strategy, demand gen, and team direction in a 90-day sprint.',
  openGraph: {
    title: 'Fractional CMO Services for B2B SaaS & Startups | Pressense',
    description:
      'A fractional CMO is an experienced marketing executive who provides part-time strategic leadership without the cost of a full-time hire. Engagements from $1,500/month.',
    type: 'website',
    url: '/fractional-cmo-services',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Fractional CMO Services — Pressense' }],
  },
  alternates: { canonical: '/fractional-cmo-services' },
  twitter: {
    card: 'summary_large_image',
    title: 'Fractional CMO Services for B2B SaaS & Startups | Pressense',
    description:
      'Senior marketing leadership for B2B SaaS and founder-led startups. GTM strategy, demand gen, and team direction from $1,500/month.',
    images: ['/og-image.jpg'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Fractional CMO Services',
  provider: { '@type': 'Organization', name: 'Pressense', url: 'https://www.pressense.co' },
  description:
    'Fractional CMO services for B2B SaaS and founder-led startups. Part-time senior marketing leadership covering GTM strategy, demand generation, team management, and board-level reporting.',
  url: 'https://www.pressense.co/fractional-cmo-services',
  areaServed: ['United States', 'United Kingdom', 'India'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Fractional CMO Packages',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Advisory-Only Fractional CMO' }, priceSpecification: { '@type': 'PriceSpecification', price: '1500', priceCurrency: 'USD', unitText: 'MONTH' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Embedded Fractional CMO' }, priceSpecification: { '@type': 'PriceSpecification', price: '5000', priceCurrency: 'USD', unitText: 'MONTH' } },
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pressense.co' },
    { '@type': 'ListItem', position: 2, name: 'Fractional CMO Services', item: 'https://www.pressense.co/fractional-cmo-services' },
  ],
}

// FAQPage schema must match the visible FAQ questions in faq-section.tsx exactly
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are fractional CMO services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fractional CMO services are part-time senior marketing leadership engagements where an experienced CMO embeds in your business on a retainer basis. Unlike an agency that handles execution, or a consultant who writes reports, a fractional CMO owns your marketing strategy, manages your team and agencies, and is accountable for pipeline and revenue outcomes. Engagements typically run 10 to 20 hours per week and cost $5,000 to $15,000 per month, compared to $250,000 to $400,000 annually for a full-time hire.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a fractional CMO do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A fractional CMO defines your ICP and positioning, builds your GTM strategy, aligns marketing with sales, leads your marketing team and agencies, and reports pipeline metrics to the leadership team. At B2B SaaS companies in the 0-to-3 million ARR range, this typically means setting up the demand generation engine, creating the messaging playbook, and building the reporting infrastructure needed to scale. The work is strategic and leadership-oriented, not task execution.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should a startup hire a fractional CMO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hire a fractional CMO once you have proven product-market fit and a repeatable sales motion. The right signal is that deals are closing but marketing feels scattered, dependent on the founder, or inconsistent. For B2B SaaS, this typically happens between $500K and $5M ARR. Hiring too early, before you have product-market fit, means the CMO is solving a product problem with marketing tactics.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do fractional CMO services cost?',
      acceptedAnswer: {
        '@type': 'Answer',
          text: 'Fractional CMO services at Pressense start from $1,500 per month for advisory-only engagements. Embedded leadership is scoped after the diagnostic call. This compares to $20,000 to $35,000 per month for a full-time CMO when salary, benefits, and employer costs are included. Most clients reach payback within 60 to 90 days through improved pipeline conversion and reduced wasted ad spend.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a CMO and a fractional CMO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The scope and time commitment differ, but the seniority level and accountability are the same. A full-time CMO works 40+ hours per week and typically costs $250,000 to $400,000 per year all-in. A fractional CMO provides the same strategic leadership at 10 to 20 hours per week, structured around the decisions and deliverables your stage actually requires.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a fractional CMO work with our existing marketing team?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Most fractional CMO engagements include direct management of your existing marketing team, oversight of agencies, and hiring guidance for future roles. The goal is to make your existing resources more effective through clear priorities and better strategy, not to replace the people already doing good execution work.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with India-based businesses and global clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Pressense works with B2B SaaS companies and founder-led businesses across India, the UK, and the United States. For India-based teams, we understand both the cost dynamics of building in India and the messaging and buyer expectations of US and UK enterprise customers. Fractional CMO services are fully remote and structured to work across time zones.',
      },
    },
  ],
}

export default function FractionalCMOServicesPage() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main>
        <FractionalCMOHero />
        <ProblemSection />
        <SolutionSection />
        <WhoItsForSection />
        <MethodologySection />
        <WhatYouGetSection />
        <FractionalCMOFAQSection />
        <FractionalCMOCTA />
      </main>
    </>
  )
}
