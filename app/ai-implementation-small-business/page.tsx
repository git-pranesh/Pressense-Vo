import type { Metadata } from 'next'
import { StructuredData } from '@/components/structured-data'
import { FinalCTA } from '@/components/final-cta'
import { AIImplementationHero } from '@/components/ai-implementation-page/hero'
import { AIImplementationWhoItsForSection } from '@/components/ai-implementation-page/who-its-for-section'
import { AIImplementationProblemsSection } from '@/components/ai-implementation-page/problems-section'
import { AIImplementationMethodologySection } from '@/components/ai-implementation-page/methodology-section'
import { AIImplementationFAQSection } from '@/components/ai-implementation-page/faq-section'

export const metadata: Metadata = {
  title: 'AI Implementation for Small Business | Pressense',
  description:
    'Hands-on AI implementation for small business: diagnostic, build, and rollout in 30–60 days. Healthcare, real estate, IT, and more. Save 10+ hours per week.',
  openGraph: {
    title: 'AI Implementation for Small Business | Pressense',
    description:
      'Hands-on AI implementation for small business: diagnostic, build, and rollout in 30–60 days. Healthcare, real estate, IT, and more. Save 10+ hours per week.',
    url: '/ai-implementation-small-business',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense AI Implementation for Small Business' }],
  },
  alternates: {
    canonical: '/ai-implementation-small-business',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Implementation for Small Business | Pressense',
    description:
      'Hands-on AI implementation for small business: diagnostic, build, and rollout in 30–60 days.',
    images: ['/og-image.jpg'],
  },
}

export default function AIImplementationPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Implementation for Small Business',
    provider: { '@type': 'Organization', name: 'Pressense', url: 'https://www.pressense.co' },
    description:
      'Hands-on AI workflow implementation for small businesses: diagnostic, build, team rollout, and ongoing support. Healthcare, real estate, IT, interior design, and general small business.',
    url: 'https://www.pressense.co/ai-implementation-small-business',
    areaServed: 'Worldwide',
    offers: {
      '@type': 'Offer',
      name: 'AI Implementation Engagement',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '3500',
        priceCurrency: 'USD',
        unitText: 'per engagement',
      },
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pressense.co' },
      { '@type': 'ListItem', position: 2, name: 'AI Implementation for Small Business', item: 'https://www.pressense.co/ai-implementation-small-business' },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I implement AI in my small business?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Start with a diagnostic session that maps your most repeated, time-consuming tasks. Score them by how predictable the output is and how much time they cost per week. The highest-scoring tasks are your first AI targets. Pressense runs this diagnostic with you and produces a ranked list of opportunities before building anything.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does AI implementation cost for a small business?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A Pressense AI Implementation starts from $3,500 for a focused engagement covering one or two workflows, a diagnostic, build, and six-week rollout with support. More complex implementations covering multiple workflows, integrations, and team training typically range from $6,000 to $15,000.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where do I start with AI if I am not technical?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Start with a conversation, not a tool. Tell us what you do repeatedly that takes longer than it should. We handle the technical side entirely: choosing the right AI tools, building the workflows, connecting them to your existing software, and making sure your team knows how to use them.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does AI implementation take for a small business?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A focused first implementation runs four to six weeks from diagnostic to team rollout. The first two weeks are diagnosis and design. Weeks three to five are the build and testing phase. Week six is the rollout with your team present.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the best AI tool for a small business?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Claude is our primary tool for drafting, analysis, and client communication. GPT-4 is strong for structured data extraction. Make and n8n connect AI to your existing software without code. The right answer depends on your specific workflows. Most small businesses already have the software they need — we build the AI layer on top of it.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can AI be implemented in a healthcare or real estate business?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Healthcare implementations focus on administrative workflows: prior authorisation drafts, appointment reminders, patient intake summaries. Real estate implementations focus on enquiry responses, listing descriptions, CRM updates, and document management. Both use your existing tools without requiring a full system replacement.',
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
        <AIImplementationHero />
        <AIImplementationWhoItsForSection />
        <AIImplementationProblemsSection />
        <AIImplementationMethodologySection />
        <AIImplementationFAQSection />
        <FinalCTA />
      </main>
    </>
  )
}
