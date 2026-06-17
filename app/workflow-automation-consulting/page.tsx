import { StructuredData } from '@/components/structured-data'
import { WorkflowAutomationHero } from '@/components/workflow-automation-page/hero'
import { ProblemSection } from '@/components/workflow-automation-page/problem-section'
import { SolutionSection } from '@/components/workflow-automation-page/solution-section'
import { WhoItsForSection } from '@/components/workflow-automation-page/who-its-for-section'
import { MethodologySection } from '@/components/workflow-automation-page/methodology-section'
import { WhatYouGetSection } from '@/components/workflow-automation-page/what-you-get-section'
import { GTMFAQSection } from '@/components/workflow-automation-page/faq-section'
import { WorkflowAutomationCTA } from '@/components/workflow-automation-page/final-cta'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Workflow Automation Consulting | Pressense',
  description:
    'Workflow automation consulting for B2B startups and scaling teams. Audit, design, and build automated systems that save 20+ hours per week. From $3,000.',
  openGraph: {
    title: 'Workflow Automation Consulting | Pressense',
    description:
      'Workflow automation consulting for B2B startups and scaling teams. Audit, design, and build automated systems that save 20+ hours per week. From $3,000.',
    url: '/workflow-automation-consulting',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense Workflow Automation Consulting' }],
  },
  alternates: {
    canonical: '/workflow-automation-consulting',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workflow Automation Consulting | Pressense',
    description:
      'Workflow automation consulting for B2B startups and scaling teams. Audit, design, and build automated systems that save 20+ hours per week. From $3,000.',
    images: ['/og-image.jpg'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is workflow automation consulting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Workflow automation consulting is the practice of auditing your business processes, identifying which tasks are repetitive and rules-based, and building automated systems to replace them. A consultant maps your current manual workflows, selects the right automation tools for your tech stack, builds the integrations, and trains your team on how to manage them. The result is a documented, maintained set of systems that run without human input.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does workflow automation consulting cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For small businesses and scaling startups, scoped workflow automation builds typically range from $3,000 to $15,000 depending on the number of workflows and integration complexity. Multi-system implementations with custom API development can range from $15,000 to $50,000 or more. Pressense offers project engagements from $3,000 and ongoing retainer options from $2,500 per month.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does workflow automation take to implement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard workflow automation engagement runs five weeks from audit to live automations. Week one covers the process audit and priority mapping. Week two produces the architecture document and build plan. Weeks three and four are the build and test phase. Week five is training and handover, followed by 30 days of monitoring. Simple single-workflow builds can be completed in one to two weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What tools do workflow automation consultants use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common tools are Make (formerly Integromat), Zapier, n8n, and custom API integrations built in Python or Node.js. Make and n8n are preferred for complex multi-step workflows. Zapier suits simpler point-to-point connections. Custom API code is used when no off-the-shelf connector exists.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between RPA and workflow automation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Robotic Process Automation (RPA) mimics a human using a graphical interface, typically on legacy enterprise systems with no API access. Workflow automation uses APIs and native integrations to connect cloud-based tools directly. RPA is slower, more brittle, and typically used in large enterprise contexts. Workflow automation is faster to build, more reliable, and the right fit for most startups and SMBs running modern SaaS tools.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a consultant or can I do workflow automation myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you have a technical co-founder or operations manager who understands APIs and automation platforms, you can build simple workflows yourself using Zapier or Make. Most businesses benefit from a consultant when the workflow involves three or more systems, requires custom logic, or when the cost of an error is high. A consultant also brings process analysis skills that often reveals higher-impact automation opportunities than originally identified.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with businesses outside the US?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Pressense works with B2B SaaS companies, agencies, and founder-led businesses across India, the UK, Australia, the US, and the rest of the world. All engagements are delivered remotely. We have worked with clients on every continent except Antarctica. We have specific experience with Indian SaaS and services companies scaling their operations.',
      },
    },
  ],
}

export default function WorkflowAutomationPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Workflow Automation Consulting',
    provider: { '@type': 'Organization', name: 'Pressense', url: 'https://www.pressense.co' },
    description:
      'Workflow automation consulting that audits, designs, and builds automated systems to eliminate manual work for B2B startups and scaling teams.',
    url: 'https://www.pressense.co/workflow-automation-consulting',
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Workflow Automation Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Workflow Automation Project' },
          price: '3000',
          priceCurrency: 'USD',
          priceSpecification: { '@type': 'UnitPriceSpecification', price: '3000', priceCurrency: 'USD', unitText: 'project' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Ongoing Workflow Automation Retainer' },
          price: '2500',
          priceCurrency: 'USD',
          priceSpecification: { '@type': 'UnitPriceSpecification', price: '2500', priceCurrency: 'USD', unitText: 'month' },
        },
      ],
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pressense.co' },
      { '@type': 'ListItem', position: 2, name: 'Workflow Automation Consulting', item: 'https://www.pressense.co/workflow-automation-consulting' },
    ],
  }

  return (
    <>
      <StructuredData data={serviceSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="min-h-screen">
        <WorkflowAutomationHero />
        <ProblemSection />
        <SolutionSection />
        <WhoItsForSection />
        <MethodologySection />
        <WhatYouGetSection />
        <GTMFAQSection />
        <WorkflowAutomationCTA />
      </main>
    </>
  )
}
