import type { Metadata } from 'next'
import { StructuredData } from '@/components/structured-data'
import { SystemsHero } from '@/components/business-systems-page/hero'
import { ProblemSection } from '@/components/business-systems-page/problem-section'
import { WhoItsForSection } from '@/components/business-systems-page/who-its-for-section'
import { MethodologySection } from '@/components/business-systems-page/methodology-section'
import { WhatYouGetSection } from '@/components/business-systems-page/what-you-get-section'
import { SolutionSection } from '@/components/business-systems-page/solution-section'
import { SystemsFAQSection } from '@/components/business-systems-page/faq-section'
import { SystemsCTA } from '@/components/business-systems-page/final-cta'

export const metadata: Metadata = {
  title: 'Business Systems Consultant | Pressense',
  description:
    'Hire a business systems consultant for your startup or SMB. We audit operations, fix bottlenecks, and build scalable systems in 90 days. From $4,000/month.',
  alternates: { canonical: '/business-systems-consultant' },
  openGraph: {
    title: 'Business Systems Consultant | Pressense',
    description:
      'Hire a business systems consultant for your startup or SMB. We audit operations, fix bottlenecks, and build scalable systems in 90 days. From $4,000/month.',
    type: 'website',
    url: '/business-systems-consultant',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Business Systems Consultant - Pressense' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Systems Consultant | Pressense',
    description:
      'Hire a business systems consultant for your startup or SMB. We audit operations, fix bottlenecks, and build scalable systems in 90 days. From $4,000/month.',
    images: ['/og-image.jpg'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Business Systems Consulting',
  provider: {
    '@type': 'Organization',
    name: 'Pressense',
    url: 'https://www.pressense.co',
  },
  description:
    'Business systems consulting for startups and SMBs. We audit operations, fix bottlenecks, and build scalable systems in 90 days.',
  url: 'https://www.pressense.co/business-systems-consultant',
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Business Systems Consulting Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Operations Audit',
          description: 'Full operations audit, bottleneck identification, and prioritised roadmap.',
        },
        price: '3000',
        priceCurrency: 'USD',
        unitText: 'fixed fee',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '90-Day Systems Engagement',
          description: 'Audit, architecture, build, and handover. Full systems implementation.',
        },
        price: '4000',
        priceCurrency: 'USD',
        unitText: 'per month',
      },
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pressense.co' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Business Systems Consultant',
      item: 'https://www.pressense.co/business-systems-consultant',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a business systems consultant do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A business systems consultant audits your operations, identifies where processes break down, and builds the systems that fix them. This includes designing SOPs, connecting your toolstack, automating manual workflows, setting up reporting, and training your team. Unlike an IT consultant who focuses on software procurement, a business systems consultant owns the full operational layer: process, tooling, documentation, and team adoption. Most engagements run 60 to 90 days from audit to deployed systems.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a business systems consultant cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most business systems consulting engagements start at $4,000 per month for a 90-day retainer covering audit, design, build, and handover. Single-system implementations or one-off audits start from $3,000 as a fixed-fee project. Enterprise-scale digital transformations are quoted separately.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a business systems consultant and a systems analyst?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A systems analyst typically works inside a company, supporting and documenting existing IT systems. A business systems consultant is an external expert who diagnoses operational problems, designs new systems, and implements them end-to-end. The key difference is ownership: an analyst maintains, a consultant transforms.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a business systems consulting engagement take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most engagements follow a 90-day structure: one week for the audit, one week for architecture and design, two to three weeks to build core systems, and then deployment, training, and four weeks of post-launch support. Larger engagements covering multiple departments or complex integrations can run four to six months.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a business systems consultant or an operations hire?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hire a consultant to build the systems, then hire an operator to run them. A new operations hire cannot build the systems they will manage without a clear brief and existing infrastructure. We create that infrastructure. Most of our clients hire an ops or systems manager within six months of our engagement because they finally have something for that person to maintain.',
      },
    },
    {
      '@type': 'Question',
      name: 'What tools do you use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are tool-agnostic. Depending on your stack and stage, we work with Notion, HubSpot, Pipedrive, Monday, Asana, Airtable, Make, Zapier, and custom internal tools. We do not push particular platforms. We evaluate your existing toolstack first and make it work before recommending replacements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with companies outside the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Pressense is based in India and works with B2B SaaS companies, agencies, and service businesses across the US, UK, Australia, and globally. All work is done remotely. Our clients in India and the Asia-Pacific region benefit from the same methodology as our US clients.',
      },
    },
  ],
}

export default function BusinessSystemsConsultantPage() {
  return (
    <>
      <StructuredData />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="min-h-screen">
        <SystemsHero />
        <ProblemSection />
        <WhoItsForSection />
        <MethodologySection />
        <WhatYouGetSection />
        <SolutionSection />
        <SystemsFAQSection />
        <SystemsCTA />
      </main>
    </>
  )
}
