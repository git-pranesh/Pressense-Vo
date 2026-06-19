import type { Metadata } from 'next'
import { OpenAIHero } from '@/components/openai-integration-page/hero'
import { OpenAIUseCasesSection } from '@/components/openai-integration-page/use-cases-section'
import { OpenAIPricingSection } from '@/components/openai-integration-page/pricing-section'
import { OpenAIFaqSection } from '@/components/openai-integration-page/faq-section'
import { FinalCTA } from '@/components/final-cta'

export const metadata: Metadata = {
  title: 'OpenAI Integration Services for Business | Pressense',
  description:
    'OpenAI GPT-4o integration for growing businesses. Build conversational tools, content pipelines, image analysis, and structured data extraction. From $2,000.',
  openGraph: {
    title: 'OpenAI Integration Services for Business | Pressense',
    description:
      'GPT-4o integration for conversational interfaces, content automation, vision, and structured data extraction. Pressense builds OpenAI-powered tools for founder-led businesses.',
    url: '/openai-integration-services',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'OpenAI Integration Services' }],
  },
  alternates: { canonical: '/openai-integration-services' },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenAI Integration Services for Business | Pressense',
    description:
      'OpenAI GPT-4o integration for growing businesses. Build conversational tools, content pipelines, and data extraction tools. From $2,000.',
    images: ['/og-image.jpg'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'OpenAI Integration Services',
  provider: { '@type': 'Organization', name: 'Pressense', url: 'https://www.pressense.co' },
  description:
    'OpenAI GPT-4o API integration for founder-led businesses. Pressense builds conversational tools, content pipelines, vision integrations, and structured data extraction systems.',
  url: 'https://www.pressense.co/openai-integration-services',
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'OpenAI Integration Packages',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Focused Integration',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '2000',
          priceCurrency: 'USD',
          unitText: 'project from',
        },
      },
      {
        '@type': 'Offer',
        name: 'Custom AI Application',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '5000',
          priceCurrency: 'USD',
          unitText: 'project from',
        },
      },
    ],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pressense.co' },
    { '@type': 'ListItem', position: 2, name: 'AI Tools We Use', item: 'https://www.pressense.co/ai-tools-we-use' },
    { '@type': 'ListItem', position: 3, name: 'OpenAI Integration Services', item: 'https://www.pressense.co/openai-integration-services' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is OpenAI API integration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "OpenAI API integration is the process of connecting OpenAI's language models (GPT-4o, etc.) to a business application, workflow, or internal tool. Businesses use this to build conversational interfaces, automate content generation, extract structured data, and power AI-assisted decision-making — without training a model from scratch.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does OpenAI API integration cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pressense OpenAI integrations start from $2,000 for a focused single-use-case build. Custom multi-model applications start from $5,000. OpenAI API usage is billed separately by the token, typically under $200/month for standard business volumes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between OpenAI API and Claude API?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "OpenAI's GPT-4o is better for conversational UX, image input, and tool calling. Claude is better for long-document analysis and nuanced reasoning. Many production systems use both. We assess your specific use case in the diagnostic and recommend the right model.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does OpenAI integration take to build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A focused single-use integration typically takes two to three weeks from diagnostic to deployment. A custom multi-model application with integrations takes four to six weeks. Timeline depends on the number of systems to connect and data availability.',
      },
    },
  ],
}

export default function OpenAIIntegrationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="min-h-screen">
        <OpenAIHero />
        <OpenAIUseCasesSection />
        <OpenAIPricingSection />
        <OpenAIFaqSection />
        <FinalCTA />
      </main>
    </>
  )
}
