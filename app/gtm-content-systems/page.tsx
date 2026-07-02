import { StructuredData } from '@/components/structured-data'
import { FinalCTA } from '@/components/final-cta'
import { GtmContentHero } from '@/components/gtm-content-page/hero'
import { GtmContentWhoItsForSection } from '@/components/gtm-content-page/who-its-for-section'
import { GtmContentProblemsSection } from '@/components/gtm-content-page/problems-section'
import { GtmContentMethodologySection } from '@/components/gtm-content-page/methodology-section'
import { GtmContentCostSection } from '@/components/gtm-content-page/cost-section'
import { GtmContentSystemIncludesSection } from '@/components/gtm-content-page/system-includes-section'
import { GtmContentFaqSection } from '@/components/gtm-content-page/faq-section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GTM Content Systems for B2B SaaS | Pressense',
  description:
    'Build a GTM content system that generates repeatable B2B SaaS pipeline without founder heroics. Positioning, topic clusters, distribution, and CRM attribution in one connected motion.',
  openGraph: {
    title: 'GTM Content Systems for B2B SaaS | Pressense',
    description:
      'Build a GTM content system that generates repeatable B2B SaaS pipeline without founder heroics. Positioning, topic clusters, distribution, and CRM attribution in one connected motion.',
    url: '/gtm-content-systems',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'GTM Content Systems | Pressense' }],
  },
  alternates: {
    canonical: '/gtm-content-systems',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTM Content Systems for B2B SaaS | Pressense',
    description:
      'Build a GTM content system that generates repeatable B2B SaaS pipeline without founder heroics.',
    images: ['/og-image.jpg'],
  },
}

export default function GtmContentSystemsPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'GTM Content Systems',
    provider: {
      '@type': 'Organization',
      name: 'Pressense',
      url: 'https://www.pressense.co',
    },
    description:
      'Pressense designs and operates GTM content systems for B2B SaaS companies: positioning, SEO content clusters, distribution infrastructure, and CRM attribution. The output is repeatable organic pipeline, not just blog posts.',
    url: 'https://www.pressense.co/gtm-content-systems',
    areaServed: 'Worldwide',
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.pressense.co',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'GTM Content Systems',
        item: 'https://www.pressense.co/gtm-content-systems',
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a GTM content system?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A GTM content system is the operational infrastructure that connects positioning, content production, distribution channels, and CRM attribution into a single repeatable motion. It is not a content strategy document or a content calendar. Every piece of content has a defined job at a specific buyer stage. Every lead that comes through content is tagged and followed up. The system generates pipeline without requiring the founder to drive every piece.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is a GTM content system different from a content strategy?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A content strategy describes what to publish and why. A GTM content system is the operational infrastructure that makes the plan run: briefs, production workflows, distribution triggers, CRM tagging, and measurement. Most early-stage SaaS companies have a strategy but no system. The strategy says what to do. The system is what actually does it.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to build a GTM content system?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The design and foundation build takes four to six weeks: one to two weeks for positioning audit and architecture, two to four weeks for the first content cluster and distribution setup. After that, the system operates on a monthly rhythm. Compounding organic results typically start showing within three to four months of the first cluster going live.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the right content cadence for a B2B SaaS company at Series A?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For a lean team, two substantive long-form pieces per month, one to two sales enablement pieces per quarter, and weekly LinkedIn distribution repurposed from long-form content is achievable and generates compounding returns over twelve to eighteen months. Frequency matters far less than quality and consistency. Two thorough 2,000-word pieces per month outperform ten thin posts per week.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you connect content to pipeline in a CRM?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The attribution layer requires UTM parameters on every content link, first-touch and last-touch attribution configured in the CRM, and a content tag on every contact who converted through a content channel. Once these are configured, your monthly report shows not just how many people read the post but how many ended up in a demo and how many of those closed. This is what makes a GTM content system defensible to a board.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do we build topical authority fast without a large content team?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Topical authority is built through coverage depth, not publishing volume. The fastest path for a lean team is the cluster model: one pillar page per category, eight to twelve cluster articles per pillar, all interlinked. A single pillar-plus-cluster build takes four to six weeks. After that, one new cluster article per month maintains and extends the authority. Compounding starts within three to four months.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <StructuredData data={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Pressense',
        url: 'https://www.pressense.co',
      }} />

      <main className="min-h-screen">
        <GtmContentHero />
        <GtmContentWhoItsForSection />
        <GtmContentProblemsSection />
        <GtmContentMethodologySection />
        <GtmContentCostSection />
        <GtmContentSystemIncludesSection />
        <GtmContentFaqSection />
        <FinalCTA />
      </main>
    </>
  )
}
