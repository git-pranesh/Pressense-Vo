import type { Metadata } from 'next'
import { AIToolsHero } from '@/components/ai-tools-page/hero'
import { ToolsGridSection } from '@/components/ai-tools-page/tools-grid-section'
import { WhoItsForSection } from '@/components/ai-tools-page/who-its-for-section'
import { ToolsFAQSection } from '@/components/ai-tools-page/faq-section'
import { FinalCTA } from '@/components/final-cta'

export const metadata: Metadata = {
  title: 'AI Tools We Use: Claude, Replit, Framer & More | Pressense',
  description:
    'The exact AI tools Pressense uses to build for founder-led businesses: Claude API, GPT-4, Replit, Framer, Make, Zapier, Airtable, and Notion — with every use case explained.',
  openGraph: {
    title: 'AI Tools We Use: Claude, Replit, Framer & More | Pressense',
    description:
      'Every tool in the Pressense stack: how we use Claude, GPT-4, Replit, Framer, Make, Zapier, Airtable, and Notion to build for growing businesses.',
    url: '/ai-tools-we-use',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense AI Tools Stack' }],
  },
  alternates: {
    canonical: '/ai-tools-we-use',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Tools We Use: Claude, Replit, Framer & More | Pressense',
    description:
      'The exact AI tools Pressense uses to build for founder-led businesses: Claude API, GPT-4, Replit, Framer, Make, Zapier, Airtable, and Notion.',
    images: ['/og-image.jpg'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What tools do AI agencies use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most AI agencies use a combination of large language model APIs (Claude, GPT-4), automation platforms (Make, Zapier), database tools (Airtable), and build environments (Replit). The specific combination depends on the problem. An agency focused on workflow automation will weight Make and Zapier heavily. An agency building custom software will lean on Replit and direct API integration.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Claude API and how is it different from ChatGPT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Claude API is Anthropic's developer interface for building applications on top of the Claude language model. ChatGPT is OpenAI's consumer product; the underlying model is GPT-4 and is also available via API. Claude tends to perform better on long-context tasks and document analysis. GPT-4 has a larger ecosystem of third-party integrations.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Zapier and Make?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zapier is designed for simple, quick-deploy trigger-action workflows between popular SaaS tools. Make (formerly Integromat) handles more complex scenarios: branching logic, high-volume data processing, error handling, and multi-step transformations. We use Zapier when speed and simplicity matter. We use Make when the workflow needs to be reliable at scale or handle edge cases.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you charge clients for the tools you use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We do not mark up tool subscriptions. We recommend tools based on fit, and you pay the tool vendors directly at standard rates. We charge for the diagnostic, design, and build work.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Replit good for production apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Replit runs on Google Cloud infrastructure and supports production deployments at scale. Code built in Replit is standard TypeScript or Python with no proprietary framework. It can be exported and deployed anywhere at any time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Airtable used for in agency workflows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Airtable is a relational database that sits between a spreadsheet and a full SQL database. Agencies use it to build operational backbones: project trackers, lightweight CRMs, content calendars, and client portals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I bring my own tools or do I have to use your stack?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can bring your own tools. If you have existing subscriptions to HubSpot, Salesforce, or any other platform, we will assess whether they fit the solution before recommending changes.',
      },
    },
  ],
}

export default function AIToolsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'AI Tools We Use | Pressense',
          description: 'The exact AI tools, platforms, and partner technologies Pressense uses to build for founder-led businesses.',
          url: 'https://www.pressense.co/ai-tools-we-use',
          provider: { '@type': 'Organization', name: 'Pressense', url: 'https://www.pressense.co' },
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pressense.co' },
            { '@type': 'ListItem', position: 2, name: 'AI Tools We Use', item: 'https://www.pressense.co/ai-tools-we-use' },
          ],
        }) }}
      />

      <main className="min-h-screen">
        <AIToolsHero />
        <WhoItsForSection />
        <ToolsGridSection />
        <ToolsFAQSection />
        <FinalCTA />
      </main>
    </>
  )
}
