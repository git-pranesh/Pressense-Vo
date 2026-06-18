import type { Metadata } from 'next'
import { StructuredData } from '@/components/structured-data'
import { FinalCTA } from '@/components/final-cta'
import { SaaSGTMHero } from '@/components/saas-gtm-page/hero'
import { SaaSGTMWhoItsForSection } from '@/components/saas-gtm-page/who-its-for-section'
import { SaaSGTMProblemsSection } from '@/components/saas-gtm-page/problems-section'
import { SaaSGTMMethodologySection } from '@/components/saas-gtm-page/methodology-section'
import { SaaSGTMWhatYouGetSection } from '@/components/saas-gtm-page/what-you-get-section'
import { SaaSGTMFAQSection } from '@/components/saas-gtm-page/faq-section'

export const metadata: Metadata = {
  title: 'SaaS Go-to-Market Strategy | Pressense',
  description:
    'SaaS go-to-market strategy consulting: ICP definition, positioning, pricing, and a 90-day roadmap. Sprint from $4K. Built for founder-led SaaS companies.',
  openGraph: {
    title: 'SaaS Go-to-Market Strategy | Pressense',
    description:
      'SaaS go-to-market strategy consulting: ICP definition, positioning, pricing, and a 90-day roadmap. Sprint from $4K. Built for founder-led SaaS companies.',
    url: '/saas-go-to-market-strategy',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense SaaS Go-to-Market Strategy' }],
  },
  alternates: {
    canonical: '/saas-go-to-market-strategy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Go-to-Market Strategy | Pressense',
    description:
      'SaaS go-to-market strategy consulting: ICP definition, positioning, pricing, and a 90-day roadmap. Sprint from $4K.',
    images: ['/og-image.jpg'],
  },
}

export default function SaaSGTMPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'SaaS Go-to-Market Strategy',
    provider: { '@type': 'Organization', name: 'Pressense', url: 'https://www.pressense.co' },
    description:
      'SaaS go-to-market strategy consulting covering ICP definition, competitive positioning, pricing, channel selection, and a 90-day execution roadmap for founder-led SaaS companies.',
    url: 'https://www.pressense.co/saas-go-to-market-strategy',
    areaServed: 'Worldwide',
    offers: [
      {
        '@type': 'Offer',
        name: 'GTM Sprint',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '4000',
          priceCurrency: 'USD',
          unitText: 'per engagement',
        },
      },
      {
        '@type': 'Offer',
        name: 'GTM Retainer',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '1800',
          priceCurrency: 'USD',
          unitText: 'per month',
        },
      },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pressense.co' },
      { '@type': 'ListItem', position: 2, name: 'SaaS Go-to-Market Strategy', item: 'https://www.pressense.co/saas-go-to-market-strategy' },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a SaaS go-to-market strategy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A SaaS go-to-market strategy is a plan that defines who your software is for, how you reach them, and how you convert and keep them. It covers ICP definition, positioning, pricing, channel selection, and a phased execution roadmap. Without one, most SaaS companies grow by accident rather than by design, which makes growth slow to repeat and impossible to scale.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does a SaaS GTM engagement take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A Pressense GTM Sprint runs six to eight weeks from kick-off to final delivery. The first two weeks are buyer research and ICP definition. Weeks three and four cover positioning and pricing. The final two weeks produce your channel playbook and 90-day roadmap.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is an ICP in SaaS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ICP stands for Ideal Customer Profile. It is a description of the exact company or person who gets the most value from your product, is willing and able to pay for it, has a reason to act now, and is likely to refer others. A specific ICP is the single most important input in any SaaS GTM strategy.',
        },
      },
      {
        '@type': 'Question',
        name: 'What comes first: GTM strategy or product development?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The best GTM work starts alongside product development, not after it. You do not need a finished product to define your ICP, test positioning, or talk to buyers. Most SaaS founders delay GTM thinking until after launch and then spend months trying to find product-market fit by trial and error.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you work with pre-revenue SaaS companies?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Many of our GTM Sprint clients are pre-revenue or in early beta. The GTM Sprint is designed for exactly this stage: you have a product hypothesis and you need to validate your ICP, sharpen your positioning, and identify the right acquisition channel before spending on marketing.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between GTM strategy and marketing strategy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Marketing strategy is about how you communicate. GTM strategy is broader: it covers who you sell to, what you charge, how you reach buyers, how you close them, and how you retain them. Marketing is one component of GTM, not a replacement for it.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does SaaS GTM consulting cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A Pressense GTM Sprint starts from $4,000 for a six-to-eight-week engagement that includes buyer research, ICP definition, positioning, pricing, a channel playbook, and a 90-day roadmap. Enterprise GTM consultancies charge $20K to $80K for comparable work.',
        },
      },
    ],
  }

  return (
    <>
      <StructuredData data={serviceSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="min-h-screen">
        <SaaSGTMHero />
        <SaaSGTMWhoItsForSection />
        <SaaSGTMProblemsSection />
        <SaaSGTMMethodologySection />
        <SaaSGTMWhatYouGetSection />
        <SaaSGTMFAQSection />
        <FinalCTA />
      </main>
    </>
  )
}
