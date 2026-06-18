import type { Metadata } from 'next'
import { StructuredData } from '@/components/structured-data'
import { FinalCTA } from '@/components/final-cta'
import { CustomToolsHero } from '@/components/custom-tools-page/hero'
import { ManualSystemsSection } from '@/components/custom-tools-page/manual-systems-section'
import { ConstraintsSection } from '@/components/custom-tools-page/constraints-section'
import { DiagnosisSection } from '@/components/custom-tools-page/diagnosis-section'
import { WhatWeBuildSection } from '@/components/custom-tools-page/what-we-build-section'
import { ExampleWorkflowsSection } from '@/components/custom-tools-page/example-workflows-section'
import { WorthBuildingSection } from '@/components/custom-tools-page/worth-building-section'
import { WhenNotSection } from '@/components/custom-tools-page/when-not-section'
import { StructuredScaleSection } from '@/components/custom-tools-page/structured-scale-section'
import { EngagementPathSection } from '@/components/custom-tools-page/engagement-path-section'
import { CustomToolsFAQSection } from '@/components/custom-tools-page/faq-section'

export const metadata: Metadata = {
  title: 'Custom Internal Tools for Growing Businesses | Pressense',
  description:
    'Custom internal tools built for how your business actually works. Dedicated developer, fast fixes, ongoing support. From $5K. Replace spreadsheets and fragile SaaS stacks.',
  alternates: {
    canonical: '/custom-internal-tools',
  },
  openGraph: {
    title: 'Custom Internal Tools for Growing Businesses | Pressense',
    description:
      'Custom internal tools built for how your business actually works. Dedicated developer, fast fixes, ongoing support. From $5K.',
    url: '/custom-internal-tools',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense Custom Internal Tools' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Internal Tools for Growing Businesses | Pressense',
    description:
      'Custom internal tools built for how your business actually works. Dedicated developer, fast fixes, ongoing support. From $5K.',
    images: ['/og-image.jpg'],
  },
}

export default function CustomInternalToolsPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Custom Internal Tools Development',
    provider: { '@type': 'Organization', name: 'Pressense', url: 'https://www.pressense.co' },
    description:
      'Custom internal tool development for growing businesses: dashboards, workflow systems, approval tools, and data pipelines. Dedicated developer and ongoing support included.',
    url: 'https://www.pressense.co/custom-internal-tools',
    areaServed: 'Worldwide',
    offers: {
      '@type': 'Offer',
      name: 'Custom Internal Tool Build',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '5000',
        priceCurrency: 'USD',
        unitText: 'per project',
      },
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pressense.co' },
      { '@type': 'ListItem', position: 2, name: 'Custom Internal Tools', item: 'https://www.pressense.co/custom-internal-tools' },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a custom internal tool?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A custom internal tool is software built specifically for the way your business operates, not adapted from a generic SaaS product. Examples include operations dashboards, client onboarding portals, approval workflow systems, inventory trackers, and reporting tools. You own the code and the Pressense team maintains and improves it after launch.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does it cost to build a custom internal tool?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A Pressense internal tool build starts from $5,000 for a focused workflow or dashboard. More complex tools with integrations, user permissions, and multiple modules typically range from $10,000 to $30,000. All builds include a dedicated developer, post-launch bug fixes, and a support retainer option so the tool stays running as your business grows.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to build an internal tool?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most Pressense internal tools have a first working version in two to six weeks depending on scope. We use Replit, Vercel, Cursor, and Claude to build fast without cutting corners on quality. Complex tools with multiple integrations or custom authentication may take eight to twelve weeks.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between Retool and a custom internal tool?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Retool is a low-code platform that lets you build internal tools faster using pre-built components. A custom internal tool is built from scratch in code, which means no vendor dependency, no per-seat pricing, and no limitations from the platform. Retool is a good starting point. Custom tools are the right choice when your workflows are complex, your team is growing, or you need the tool to outlast the platform.',
        },
      },
      {
        '@type': 'Question',
        name: 'What support do you provide after the tool is built?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Every Pressense build includes a dedicated developer who handles ongoing bug fixes, feature additions, and performance issues. Bug fixes are fast, typically within 24 to 48 hours. We also offer a monthly support retainer for teams that want proactive improvements, integrations with new tools, and a standing point of contact for anything that comes up.',
        },
      },
    ],
  }

  return (
    <>
      <StructuredData data={serviceSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main>
        <CustomToolsHero />
        <ManualSystemsSection />
        <ConstraintsSection />
        <DiagnosisSection />
        <WhatWeBuildSection />
        <ExampleWorkflowsSection />
        <WorthBuildingSection />
        <WhenNotSection />
        <StructuredScaleSection />
        <EngagementPathSection />
        <CustomToolsFAQSection />
        <FinalCTA />
      </main>
      
    </>
  )
}
