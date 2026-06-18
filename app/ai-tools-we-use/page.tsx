import type { Metadata } from 'next'
import { AIToolsHero } from '@/components/ai-tools-page/hero'
import { ToolsGridSection } from '@/components/ai-tools-page/tools-grid-section'
import { WhoItsForSection } from '@/components/ai-tools-page/who-its-for-section'
import { ToolsFAQSection } from '@/components/ai-tools-page/faq-section'
import { FinalCTA } from '@/components/final-cta'

export const metadata: Metadata = {
  title: 'AI Tools We Use: Claude, GPT-4o, Next.js, Neon, Vercel & More | Pressense',
  description:
    'The evolving Pressense tech stack: Claude API, GPT-4o, Next.js, TypeScript, Neon, Supabase, Replit, Vercel, Framer, n8n, Make, Zapier, Airtable, and Notion — with every use case explained.',
  openGraph: {
    title: 'AI Tools We Use: Claude, GPT-4o, Next.js, Neon, Vercel & More | Pressense',
    description:
      'Every tool in the Pressense stack: how we use Claude, GPT-4o, Next.js, Neon, Replit, Vercel, Framer, n8n, Make, Zapier, Airtable, and Notion to build for growing businesses.',
    url: '/ai-tools-we-use',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense AI Tools Stack' }],
  },
  alternates: {
    canonical: '/ai-tools-we-use',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Tools We Use: Claude, GPT-4o, Next.js, Neon, Vercel & More | Pressense',
    description:
      'The evolving Pressense tech stack: Claude API, GPT-4o, Next.js, TypeScript, Neon, Replit, Vercel, Framer, n8n, Make, Zapier, Airtable, and Notion.',
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
        text: 'Most AI agencies use a combination of large language model APIs (Claude, GPT-4o), automation platforms (n8n, Make, Zapier), database tools (Airtable), build environments (Replit), and hosting platforms (Vercel). The specific combination depends on the problem. An agency focused on workflow automation will weight n8n and Make heavily. An agency building custom software will lean on Replit with Vercel for production deployment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Claude API and how is it different from ChatGPT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Claude API is Anthropic's developer interface for building applications on top of the Claude language model. ChatGPT is OpenAI's consumer product; the underlying model is GPT-4o and is also available via API. Claude tends to perform better on long-context tasks and document analysis. GPT-4o has a larger ecosystem of third-party integrations and stronger tool-calling. We use both and recommend the right one based on the specific use case.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between n8n, Make, and Zapier?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Zapier is designed for simple, quick-deploy trigger-action workflows between popular SaaS tools. Make handles more complex scenarios: branching logic, high-volume data processing, and multi-step transformations. n8n is self-hostable, supports custom JavaScript inside workflows, and is the default for clients who need full data control or AI agent orchestration. We use Zapier when speed matters, Make for cloud-based complexity, and n8n when the client needs to own the infrastructure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you charge clients for the tools you use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We do not mark up tool subscriptions. You pay the tool vendors directly at standard rates. We charge for the diagnostic, design, and build work. Most clients already hold subscriptions to some tools in our stack. Where new subscriptions are needed, we give a clear cost estimate before the engagement starts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Replit good for production apps?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — when built correctly. Replit is a cloud development and deployment environment. Code is standard TypeScript or Python with no proprietary framework, and production web apps are deployed to Vercel for CI/CD, edge performance, and preview deployments. Production readiness requires proper auth, parameterised queries, managed database connections (Neon or Supabase), and secret management. Replit-native apps built without these are not production-ready. Ours are.',
        },
    },
    {
      '@type': 'Question',
      name: 'What is Airtable used for in agency workflows?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Airtable is a relational database that sits between a spreadsheet and a full SQL database. Agencies use it to build operational backbones: project trackers, lightweight CRMs, content calendars, and client portals. It connects to n8n, Make, Zapier, and most other automation tools via native integrations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I bring my own tools or do I have to use your stack?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can bring your own tools. If you already use HubSpot, Salesforce, or any other platform, we assess whether they fit the solution before recommending changes. The goal is to build on what already exists wherever possible.',
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
