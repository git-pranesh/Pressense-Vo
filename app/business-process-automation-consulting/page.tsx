import type { Metadata } from 'next'
import { StructuredData } from '@/components/structured-data'
import { BPAHero } from '@/components/bpa-consulting-page/hero'
import { ProblemSection } from '@/components/bpa-consulting-page/problem-section'
import { BPAWhatWeAutomateSection } from '@/components/bpa-consulting-page/what-we-automate-section'
import { BPAMethodologySection } from '@/components/bpa-consulting-page/methodology-section'
import { SolutionSection } from '@/components/bpa-consulting-page/solution-section'
import { WhoItsForSection } from '@/components/bpa-consulting-page/who-its-for-section'
import { SystemsFAQSection } from '@/components/bpa-consulting-page/faq-section'
import { SystemsCTA } from '@/components/bpa-consulting-page/final-cta'

export const metadata: Metadata = {
  title: 'Business Process Automation Consulting | n8n, Make & Zapier | Pressense',
  description:
    'Business process automation consulting: audit, roadmap, and implementation using n8n, Make, and Zapier. Reduces manual work and scales operations without growing headcount. From $1,200.',
  openGraph: {
    title: 'Business Process Automation Consulting | n8n, Make & Zapier | Pressense',
    description:
      'Business process automation consulting: audit, roadmap, and implementation. n8n, Make, and Zapier matched to your needs. Reduces manual work and scales operations.',
    url: '/business-process-automation-consulting',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense Business Process Automation Consulting' }],
  },
  alternates: {
    canonical: '/business-process-automation-consulting',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business Process Automation Consulting | n8n, Make & Zapier | Pressense',
    description:
      'Business process automation consulting: audit, roadmap, and implementation using n8n, Make, and Zapier. From $1,200.',
    images: ['/og-image.jpg'],
  },
}

export default function BPAConsultingPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Business Process Automation Consulting',
    provider: { '@type': 'Organization', name: 'Pressense', url: 'https://www.pressense.co' },
    description:
      'Business process automation consulting: process audit, automation roadmap, and implementation using n8n, Make, and Zapier for founder-led businesses and growing service firms.',
    url: 'https://www.pressense.co/business-process-automation-consulting',
    areaServed: 'Worldwide',
    offers: {
      '@type': 'Offer',
      name: 'Process Audit and Automation Roadmap',
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
      { '@type': 'ListItem', position: 2, name: 'Business Process Automation Consulting', item: 'https://www.pressense.co/business-process-automation-consulting' },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a business systems consultant?',
        acceptedAnswer: { '@type': 'Answer', text: 'A business systems consultant helps companies diagnose operational chaos and build systems that make work predictable and scalable. This includes processes, tools, documentation, and the infrastructure that lets businesses grow without founder dependency.' },
      },
      {
        '@type': 'Question',
        name: 'What kinds of systems do you build?',
        acceptedAnswer: { '@type': 'Answer', text: 'Operations systems, CRM and sales processes, project management infrastructure, reporting dashboards, client delivery systems, internal tools, and documentation frameworks. We also connect existing tools so they work together.' },
      },
      {
        '@type': 'Question',
        name: 'How long does a systems engagement take?',
        acceptedAnswer: { '@type': 'Answer', text: 'Most engagements run 6–12 weeks depending on scope. We start with an operations audit to identify the highest-impact systems to build first, then deploy in focused sprints.' },
      },
      {
        '@type': 'Question',
        name: 'What tools do you use?',
        acceptedAnswer: { '@type': 'Answer', text: 'We are tool-agnostic. Depending on your needs and stage, we use n8n, Make, Zapier, Notion, Airtable, or custom-built internal tools. The goal is systems that work, not tools for the sake of tools.' },
      },
      {
        '@type': 'Question',
        name: 'How is this different from hiring an operations person?',
        acceptedAnswer: { '@type': 'Answer', text: 'An ops hire maintains systems. A systems consultant builds them. We create the infrastructure that your future ops team will run, documenting everything so you are not dependent on any individual.' },
      },
      {
        '@type': 'Question',
        name: 'What if we already have tools that are not working?',
        acceptedAnswer: { '@type': 'Answer', text: 'Common. Most tool problems are actually process problems. We diagnose why current tools are not adopted and either fix the implementation or recommend alternatives.' },
      },
    ],
  }

  return (
    <>
      <StructuredData data={serviceSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="min-h-screen">
        <BPAHero />
        <ProblemSection />
        <BPAWhatWeAutomateSection />
        <BPAMethodologySection />
        <SolutionSection />
        <WhoItsForSection />
        <SystemsFAQSection />
        <SystemsCTA />
      </main>
    </>
  )
}
