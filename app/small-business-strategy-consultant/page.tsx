import type { Metadata } from 'next'
import { StructuredData } from '@/components/structured-data'
import { FinalCTA } from '@/components/final-cta'
import { SMBStrategyHero } from '@/components/smb-strategy-page/hero'
import { SMBStrategyWhoItsForSection } from '@/components/smb-strategy-page/who-its-for-section'
import { SMBStrategyProblemsSection } from '@/components/smb-strategy-page/problems-section'
import { SMBStrategyMethodologySection } from '@/components/smb-strategy-page/methodology-section'
import { SMBStrategyFAQSection } from '@/components/smb-strategy-page/faq-section'

export const metadata: Metadata = {
  title: 'Small Business Strategy Consultant | Pressense',
  description:
    'Small business strategy consulting: direction, mentorship, and a roadmap that turns into action. From $2,500. Outcome-driven retainers for founder-led businesses.',
  openGraph: {
    title: 'Small Business Strategy Consultant | Pressense',
    description:
      'Small business strategy consulting: direction, mentorship, and a roadmap that turns into action. From $2,500. Outcome-driven retainers for founder-led businesses.',
    url: '/small-business-strategy-consultant',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense Small Business Strategy Consultant' }],
  },
  alternates: {
    canonical: '/small-business-strategy-consultant',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Small Business Strategy Consultant | Pressense',
    description:
      'Small business strategy consulting: direction, mentorship, and a roadmap that turns into action. From $2,500.',
    images: ['/og-image.jpg'],
  },
}

export default function SMBStrategyPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Small Business Strategy Consultant',
    provider: { '@type': 'Organization', name: 'Pressense', url: 'https://www.pressense.co' },
    description:
      'Business strategy consulting for small business owners: diagnostic, growth roadmap, mentorship, and outcome-driven monthly retainer. For founder-led businesses with 2–20 people.',
    url: 'https://www.pressense.co/small-business-strategy-consultant',
    areaServed: 'Worldwide',
    offers: [
      {
        '@type': 'Offer',
        name: 'Diagnostic and Growth Roadmap',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '2500',
          priceCurrency: 'USD',
          unitText: 'per engagement',
        },
      },
      {
        '@type': 'Offer',
        name: 'Monthly Strategy Retainer',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '1200',
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
      { '@type': 'ListItem', position: 2, name: 'Small Business Strategy Consultant', item: 'https://www.pressense.co/small-business-strategy-consultant' },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does a small business strategy consultant do?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A small business strategy consultant helps you identify where your business is and where it needs to go, then builds a specific plan to close the gap. At Pressense, that means a diagnosis of your current constraints, a written roadmap with quarterly milestones, and an ongoing retainer where we work through decisions with you week by week. The goal is direction and accountability, not just a report.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need a business coach or a business consultant?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A coach helps you think through your own answers. A consultant brings external expertise and gives you specific direction. Pressense is closer to a consultant: we will tell you what we think, explain the reasoning, and give you a clear recommendation. If you want someone to tell you what to do and hold you to it, Pressense is the right choice.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does small business strategy consulting cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Pressense diagnostic and roadmap engagement starts from $2,500 and covers a four-week discovery, a Business Clarity Map, and a Growth Roadmap. Monthly retainers start from $1,200 per month with fortnightly sessions, defined outcome targets, and a standing point of contact for decisions that come up between sessions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you work with businesses that are not using AI yet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Most clients who come to us for small business strategy are not yet using AI, and many do not need to be. Strategy comes first. We understand how your business works, define the growth priorities, and only introduce AI if it belongs in the plan. We never add tools for the sake of appearing modern.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a business strategy roadmap?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A business strategy roadmap is a written plan that defines where your business is going over the next six to twelve months and the specific steps to get there. It includes quarterly milestones, the decisions that need to be made in each quarter, the metrics that define success, and the things you are stopping or deprioritising. A good roadmap fits on one page and can be read in five minutes.',
        },
      },
      {
        '@type': 'Question',
        name: 'What industries do you work with?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We work with founder-led businesses across most service industries: professional services, consultancies, agencies, healthcare practices, real estate, interior design, and IT services. The common thread is a business with between two and twenty people where the founder is the main decision-maker and growth is constrained by clarity rather than capital.',
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
        <SMBStrategyHero />
        <SMBStrategyWhoItsForSection />
        <SMBStrategyProblemsSection />
        <SMBStrategyMethodologySection />
        <SMBStrategyFAQSection />
        <FinalCTA />
      </main>
    </>
  )
}
