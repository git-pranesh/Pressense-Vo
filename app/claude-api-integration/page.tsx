import type { Metadata } from 'next'
import { ClaudeApiHero } from '@/components/claude-api-page/hero'
import { ClaudeApiUseCasesSection } from '@/components/claude-api-page/use-cases-section'
import { ClaudeApiComparisonSection } from '@/components/claude-api-page/comparison-section'
import { ClaudeApiPricingSection } from '@/components/claude-api-page/pricing-section'
import { ClaudeApiFaqSection } from '@/components/claude-api-page/faq-section'
import { FinalCTA } from '@/components/final-cta'

export const metadata: Metadata = {
  title: 'Claude API Integration Services | Pressense',
  description:
    "Claude API integration for founder-led businesses. Build AI document analysers, internal assistants, and decision-support tools on Anthropic's Claude. From $2,500.",
  openGraph: {
    title: 'Claude API Integration Services | Pressense',
    description:
      "Build with Claude API: long-context document analysis, internal AI assistants, and structured data extraction for growing businesses. Pressense.",
    url: '/claude-api-integration',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Claude API Integration Services' }],
  },
  alternates: { canonical: '/claude-api-integration' },
  twitter: {
    card: 'summary_large_image',
    title: 'Claude API Integration Services | Pressense',
    description:
      "Claude API integration for founder-led businesses. Build AI document analysers, internal assistants, and decision-support tools on Anthropic's Claude.",
    images: ['/og-image.jpg'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Claude API Integration Services',
  provider: { '@type': 'Organization', name: 'Pressense', url: 'https://www.pressense.co' },
  description:
    "Claude API integration for founder-led businesses. Pressense builds document analysis tools, internal AI assistants, and structured extraction workflows on Anthropic's Claude model.",
  url: 'https://www.pressense.co/claude-api-integration',
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Claude API Integration Packages',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Focused Integration',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '2500',
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
    { '@type': 'ListItem', position: 3, name: 'Claude API Integration', item: 'https://www.pressense.co/claude-api-integration' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Claude API?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Claude API is Anthropic's developer interface for building applications on top of Claude's language models. It lets you send text (and optionally images) to Claude and receive a structured response. Businesses use it to build document analysis tools, content generation systems, research assistants, and support automation — anything that benefits from Claude's large context window and precise instruction-following.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does Claude API integration cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pressense Claude API integrations start from $2,500 for a focused single-use-case integration. Custom multi-use integrations start from $5,000. You also pay Anthropic directly for API usage, which is token-based and typically $10–$60 per million tokens depending on the model tier.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Claude best at?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Claude excels at tasks requiring long-context understanding: analysing a 50-page contract, summarising a year of meeting notes, extracting structured data from unstructured documents, and generating long-form content that follows precise instructions. Its 200K-token context window makes it the right choice for legal, finance, operations, and research workflows that involve large documents.",
      },
    },
    {
      '@type': 'Question',
      name: 'Claude API vs OpenAI API: which should I use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Neither is universally better — they suit different tasks. Claude handles long-context documents, nuanced reasoning, and tasks requiring careful instruction-following. GPT-4o has a wider ecosystem of third-party integrations and better-established tool-calling. We assess your specific use case in the diagnostic and recommend the right model. Many production systems use both.',
      },
    },
  ],
}

export default function ClaudeAPIIntegrationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="min-h-screen">
        <ClaudeApiHero />
        <ClaudeApiUseCasesSection />
        <ClaudeApiComparisonSection />
        <ClaudeApiPricingSection />
        <ClaudeApiFaqSection />
        <FinalCTA />
      </main>
    </>
  )
}
