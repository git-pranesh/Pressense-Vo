import { StructuredData } from '@/components/structured-data'
import { AIAutomationAgencyHero } from '@/components/ai-automation-agency-page/hero'
import { ProblemSection } from '@/components/ai-automation-agency-page/problem-section'
import { SolutionSection } from '@/components/ai-automation-agency-page/solution-section'
import { WhoItsForSection } from '@/components/ai-automation-agency-page/who-its-for-section'
import { WhatYouGetSection } from '@/components/ai-automation-agency-page/what-you-get-section'
import { FractionalCMOFAQSection } from '@/components/ai-automation-agency-page/faq-section'
import { AIAutomationAgencyCTA } from '@/components/ai-automation-agency-page/final-cta'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Automation Agency for Founder-Led Businesses | Pressense',
  description: 'Pressense is an AI automation agency that diagnoses broken workflows and builds custom AI systems in 2-4 weeks. Save 20+ hours per week. Start with a free AI Readiness Assessment.',
  openGraph: {
    title: 'AI Automation Agency for Founder-Led Businesses | Pressense',
    description: 'We build custom AI workflows that connect your tools and automate repetitive tasks — CRM, sales follow-up, reporting, and client comms. Save 20+ hours per week.',
    url: '/ai-automation-agency',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense AI Automation Agency' }],
  },
  alternates: {
    canonical: '/ai-automation-agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Agency for Founder-Led Businesses | Pressense',
    description: 'Diagnose broken workflows and build custom AI automation in 2-4 weeks. Save 20+ hours per week.',
    images: ['/og-image.jpg'],
  },
}

export default function AIAutomationAgencyPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI Automation Agency',
    provider: { '@type': 'Organization', name: 'Pressense', url: 'https://www.pressense.co' },
    description: 'Custom AI workflow automation for founder-led businesses. CRM automation, sales and marketing automation, custom AI agents, operational process automation, and systems integration.',
    url: 'https://www.pressense.co/ai-automation-agency',
    areaServed: 'United States',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Automation Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CRM Automation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sales and Marketing Automation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom AI Agents' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Operational Process Automation' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Systems Integration' } },
      ],
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does an AI automation agency do?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An AI automation agency diagnoses broken or manual workflows in your business, then builds custom systems that let AI handle repetitive tasks automatically. This includes connecting your existing tools, building AI agents, automating sales follow-up, generating reports, processing documents, and handling client communications. The goal is to reclaim hours your team currently spends on work a machine can do faster and more consistently.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who are the big 4 AI agents?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'There is no single established Big 4 of AI agents, but the enterprise market is led by Salesforce Agentforce, Harvey, Sierra, and Automation Anywhere. These are large-scale platforms built for enterprise environments. For founder-led businesses, the relevant question is which agent framework fits your stack and budget. Pressense builds on OpenAI, Anthropic, and open-source models depending on what produces the best results for your specific workflows.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is an AI automation agency profitable?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Most clients reclaim 15 to 20 hours per week from repetitive tasks across their team. At an average fully-loaded hourly rate of $50 to $150 per team member, that translates to $3,000 to $12,000 per month in recovered capacity. Projects typically cost $3,000 to $20,000 depending on complexity, giving payback periods of four to eight weeks.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to build AI automation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most workflows are automated within two to four weeks from diagnostic to delivery. Simple workflows like CRM automation or weekly report generation can be live in five to seven days. Multi-system integrations with custom AI agents typically take three to four weeks.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will AI automation replace people on my team?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Automation replaces tasks, not people. The work your team does manually shifts to higher-leverage activities: strategy, client relationships, product decisions, and growth work. Most clients use automation to avoid hiring additional operations staff as they scale, rather than to reduce headcount.',
        },
      },
    ],
  }

  return (
    <>
      <StructuredData data={serviceSchema} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pressense.co' },
              { '@type': 'ListItem', position: 2, name: 'AI Automation Agency', item: 'https://www.pressense.co/ai-automation-agency' },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen">
        <AIAutomationAgencyHero />
        <ProblemSection />
        <SolutionSection />
        <WhoItsForSection />
        <WhatYouGetSection />
        <FractionalCMOFAQSection />
        <AIAutomationAgencyCTA />
      </main>
    </>
  )
}
