import type { Metadata } from 'next'
import { StructuredData } from '@/components/structured-data'
import { StartupConsultingHero } from '@/components/startup-consulting-page/hero'
import { StartupConsultingProblemSection } from '@/components/startup-consulting-page/problem-section'
import { StartupConsultingWhatWeDoSection } from '@/components/startup-consulting-page/what-we-do-section'
import { StartupConsultingWhoItsForSection } from '@/components/startup-consulting-page/who-its-for-section'
import { StartupConsultingFAQSection } from '@/components/startup-consulting-page/faq-section'
import { FinalCTA } from '@/components/final-cta'

export const metadata: Metadata = {
  title: 'Consulting Firm for Startups & Founder-Led Businesses | Pressense',
  description:
    'Consulting for founder-led businesses: GTM strategy, AI workflow systems, custom software, and positioning. We execute alongside founders — not just advise. From $1,200.',
  openGraph: {
    title: 'Consulting Firm for Startups & Founder-Led Businesses | Pressense',
    description:
      'GTM strategy, AI systems, and custom software for founder-led businesses. Pressense executes alongside founders — no slide decks, no disappearing after delivery.',
    url: '/consulting-firm-for-startups',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense Consulting for Startups' }],
  },
  alternates: {
    canonical: '/consulting-firm-for-startups',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consulting Firm for Startups & Founder-Led Businesses | Pressense',
    description:
      'GTM strategy, AI systems, and custom software for founder-led businesses. Executes alongside founders. From $1,200.',
    images: ['/og-image.jpg'],
  },
}

export default function StartupConsultingPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Consulting for Startups and Founder-Led Businesses',
    provider: { '@type': 'Organization', name: 'Pressense', url: 'https://www.pressense.co' },
    description:
      'GTM strategy, AI workflow systems, custom software, and positioning consulting for founder-led businesses and early-stage startups.',
    url: 'https://www.pressense.co/consulting-firm-for-startups',
    areaServed: 'Worldwide',
    offers: {
      '@type': 'Offer',
      name: 'Startup Consulting Diagnostic and Roadmap',
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
      { '@type': 'ListItem', position: 2, name: 'Consulting Firm for Startups', item: 'https://www.pressense.co/consulting-firm-for-startups' },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does a consulting firm for startups actually do?',
        acceptedAnswer: { '@type': 'Answer', text: 'A startup consulting firm provides the strategic and operational expertise that early-stage and growing businesses need but cannot afford to hire full-time. At Pressense, this means working on go-to-market strategy, AI systems, custom software, positioning, and operations — as an embedded team that executes alongside founders.' },
      },
      {
        '@type': 'Question',
        name: 'How is Pressense different from a traditional consulting firm?',
        acceptedAnswer: { '@type': 'Answer', text: 'Traditional consulting firms advise. Pressense builds. We write the positioning, build the automation system, design the CRM process, or ship the custom tool — and we stay accountable to outcomes rather than deliverables.' },
      },
      {
        '@type': 'Question',
        name: 'What stage of business do you work with?',
        acceptedAnswer: { '@type': 'Answer', text: 'We work best with businesses that have a validated offer and at least some revenue. This means post-PMF startups, growing service firms, SaaS companies with early traction, and founder-led businesses that have outgrown their current systems.' },
      },
      {
        '@type': 'Question',
        name: 'Do you offer strategic advice only, or do you also execute?',
        acceptedAnswer: { '@type': 'Answer', text: 'We execute. Strategy without execution is a slide deck. Every engagement includes deliverables: built systems, written content, launched automations, or shipped software.' },
      },
      {
        '@type': 'Question',
        name: 'What is the cost of working with Pressense?',
        acceptedAnswer: { '@type': 'Answer', text: 'Engagements start from $1,200 for a diagnostic and roadmap. Project-based work is scoped and priced based on deliverables. We are transparent about costs before any work starts.' },
      },
    ],
  }

  return (
    <>
      <StructuredData data={serviceSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="min-h-screen">
        <StartupConsultingHero />
        <StartupConsultingProblemSection />
        <StartupConsultingWhatWeDoSection />
        <StartupConsultingWhoItsForSection />
        <StartupConsultingFAQSection />
        <FinalCTA />
      </main>
    </>
  )
}
