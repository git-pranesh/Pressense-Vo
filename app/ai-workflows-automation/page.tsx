import type { Metadata } from 'next'
import { StructuredData } from '@/components/structured-data'
import { AIWorkflowsHero } from '@/components/ai-workflows-page/hero'
import { AIWorkflowsAmplifiesSection } from '@/components/ai-workflows-page/amplifies-section'
import { AIWhereWrongSection } from '@/components/ai-workflows-page/where-wrong-section'
import { AIRealTeamsSection } from '@/components/ai-workflows-page/real-teams-section'
import { AIWorkflowsDiagnosisSection } from '@/components/ai-workflows-page/diagnosis-section'
import { AIWorkflowsWhatWeBuildSection } from '@/components/ai-workflows-page/what-we-build-section'
import { AIWorkflowsMostUsefulSection } from '@/components/ai-workflows-page/most-useful-section'
import { AIWorkflowsWhatChangesSection } from '@/components/ai-workflows-page/what-changes-section'
import { AIWhenWorthBuildingSection } from '@/components/ai-workflows-page/when-worth-building-section'
import { AIWhenNotRecommendSection } from '@/components/ai-workflows-page/when-not-recommend-section'
import { AIStructuredScaleSection } from '@/components/ai-workflows-page/structured-scale-section'
import { AIWorkflowsNotImplementationSection } from '@/components/ai-workflows-page/not-implementation-section'
import { AIWorkflowsEngagementPathSection } from '@/components/ai-workflows-page/engagement-path-section'
import { AIWorkflowsFinalCTA } from '@/components/ai-workflows-page/final-cta'
import { AIWorkflowsFAQSection } from '@/components/ai-workflows-page/faq-section'

export const metadata: Metadata = {
  title: 'AI Workflow Automation | n8n, Make & Zapier Systems | Pressense',
  description:
    'AI workflow automation for founder-led businesses: structured systems using n8n, Make, and Zapier that reduce manual work, improve consistency, and connect to your existing tools. From $1,200.',
  alternates: {
    canonical: '/ai-workflows-automation',
  },
  openGraph: {
    title: 'AI Workflow Automation | n8n, Make & Zapier Systems | Pressense',
    description:
      'Structured AI workflow automation using n8n, Make, and Zapier. Pressense builds systems that reduce repeated work and connect to your CRM, tools, and operational processes.',
    url: '/ai-workflows-automation',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense AI Workflow Automation' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Workflow Automation | n8n, Make & Zapier Systems | Pressense',
    description:
      'Structured AI workflow automation using n8n, Make, and Zapier. Reduces manual work and connects to your existing tools. From $1,200.',
    images: ['/og-image.jpg'],
  },
}

export default function AIWorkflowsAutomationPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Workflow Automation',
    provider: { '@type': 'Organization', name: 'Pressense', url: 'https://www.pressense.co' },
    description:
      'AI workflow automation for founder-led businesses: structured systems using n8n, Make, and Zapier that reduce manual work, improve consistency, and connect to your existing tools.',
    url: 'https://www.pressense.co/ai-workflows-automation',
    areaServed: 'Worldwide',
    offers: {
      '@type': 'Offer',
      name: 'AI Workflow Audit and Roadmap',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '1200',
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
      { '@type': 'ListItem', position: 2, name: 'AI Workflow Automation', item: 'https://www.pressense.co/ai-workflows-automation' },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are AI workflows?',
        acceptedAnswer: { '@type': 'Answer', text: 'AI workflows are structured processes that use AI where it helps with repeated work, research, drafting, summarization, reporting, follow-up, knowledge retrieval, or operational coordination. The workflow defines the input, owner, review layer, and output.' },
      },
      {
        '@type': 'Question',
        name: 'How is this different from AI implementation?',
        acceptedAnswer: { '@type': 'Answer', text: 'AI implementation often starts with tools. Pressense starts with the workflow. The goal is not to use AI everywhere, but to identify where AI can reduce manual work, improve consistency, or support execution without creating more noise.' },
      },
      {
        '@type': 'Question',
        name: 'When is AI automation worth using?',
        acceptedAnswer: { '@type': 'Answer', text: 'AI automation is worth using when a task repeats often, inputs and outputs can be defined, there is a clear owner, and speed or consistency is a real bottleneck. It should support a workflow that already matters to the business.' },
      },
      {
        '@type': 'Question',
        name: 'Why do AI projects fail?',
        acceptedAnswer: { '@type': 'Answer', text: 'AI projects often fail because teams start with tools before defining the workflow. Prompts stay scattered, ownership is unclear, review standards are missing, and outputs do not connect to the next step in the business process.' },
      },
      {
        '@type': 'Question',
        name: 'When should a business avoid AI automation?',
        acceptedAnswer: { '@type': 'Answer', text: 'AI automation should be avoided when the process is unclear, the work requires high judgment without review, no one owns the workflow, the task is too variable, or a checklist, template, or simple process fix would solve the problem first.' },
      },
      {
        '@type': 'Question',
        name: 'Can AI workflows connect with internal tools or CRM systems?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. AI workflows often work best when connected to internal tools, CRM systems, reporting dashboards, content systems, or operational processes.' },
      },
    ],
  }

  return (
    <>
      <StructuredData data={serviceSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main>
        <AIWorkflowsHero />
        <AIWorkflowsAmplifiesSection />
        <AIWhereWrongSection />
        <AIRealTeamsSection />
        <AIWorkflowsDiagnosisSection />
        <AIWorkflowsWhatWeBuildSection />
        <AIWorkflowsMostUsefulSection />
        <AIWorkflowsWhatChangesSection />
        <AIWhenWorthBuildingSection />
        <AIWhenNotRecommendSection />
        <AIStructuredScaleSection />
        <AIWorkflowsNotImplementationSection />
        <AIWorkflowsEngagementPathSection />
        <AIWorkflowsFAQSection />
        <AIWorkflowsFinalCTA />
      </main>
      
    </>
  )
}
