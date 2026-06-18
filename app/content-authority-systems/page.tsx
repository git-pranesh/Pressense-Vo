import type { Metadata } from 'next'
import { StructuredData } from '@/components/structured-data'
import { ContentAuthorityHero } from '@/components/content-authority-page/hero'
import { TranslationSection } from '@/components/content-authority-page/translation-section'
import { ConstraintsSection } from '@/components/content-authority-page/constraints-section'
import { DiagnosisSection } from '@/components/content-authority-page/diagnosis-section'
import { WhatWeBuildSection } from '@/components/content-authority-page/what-we-build-section'
import { MostUsefulSection } from '@/components/content-authority-page/most-useful-section'
import { WhatChangesSection } from '@/components/content-authority-page/what-changes-section'
import { WhenWorthBuildingSection } from '@/components/content-authority-page/when-worth-building-section'
import { WhenNotRecommendSection } from '@/components/content-authority-page/when-not-recommend-section'
import { StructuredScaleSection } from '@/components/content-authority-page/structured-scale-section'
import { NotWritingServiceSection } from '@/components/content-authority-page/not-writing-service-section'
import { EngagementPathSection } from '@/components/content-authority-page/engagement-path-section'
import { ContentAuthorityCTA } from '@/components/content-authority-page/final-cta'
import { ContentFAQSection } from '@/components/content-authority-page/faq-section'

export const metadata: Metadata = {
  title: 'Content Authority Systems | SEO, AEO & Thought Leadership | Pressense',
  description:
    'Content authority systems for SaaS, medical, and founder-led businesses: SEO, AEO, technical content, LinkedIn, and Medium. Built as a repeatable system, not one-off pieces.',
  alternates: {
    canonical: '/content-authority-systems',
  },
  openGraph: {
    title: 'Content Authority Systems | SEO, AEO & Thought Leadership | Pressense',
    description:
      'Content authority systems for SaaS, medical, and founder-led businesses: SEO, AEO, technical content, LinkedIn, and Medium. Built as a repeatable system.',
    url: '/content-authority-systems',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense Content Authority Systems' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Content Authority Systems | SEO, AEO & Thought Leadership | Pressense',
    description:
      'Content authority systems for SaaS, medical, and founder-led businesses: SEO, AEO, technical content, LinkedIn, and Medium.',
    images: ['/og-image.jpg'],
  },
}

export default function ContentAuthoritySystemsPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Content Authority Systems',
    provider: { '@type': 'Organization', name: 'Pressense', url: 'https://www.pressense.co' },
    description:
      'Content authority systems for SaaS, medical, and founder-led businesses: SEO content, AEO-optimised pages, technical writing, thought leadership, LinkedIn, and Medium publishing built into a repeatable workflow.',
    url: 'https://www.pressense.co/content-authority-systems',
    areaServed: 'Worldwide',
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pressense.co' },
      { '@type': 'ListItem', position: 2, name: 'Content Authority Systems', item: 'https://www.pressense.co/content-authority-systems' },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a content and authority system?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A content and authority system turns internal expertise into clear market-facing communication. It can include website copy, SEO content, AEO-optimised pages, founder-led content, product narratives, technical content, publishing workflows, and AI-assisted content systems.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is this different from content writing?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Content writing focuses on output. A content system focuses on translation, positioning, structure, buyer understanding, and repeatability. Pressense helps clarify what the business should be known for before creating more content.',
        },
      },
      {
        '@type': 'Question',
        name: 'When does a business need a content system?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A content system is useful when the business has real expertise but weak visibility, buyers misunderstand the offer, the founder explains better on calls than the website does, or content is being created without clarity or demand.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can this support SEO and AEO?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Strong content systems help answer specific buyer questions, clarify expertise, structure ideas, and create useful pages that search engines and AI systems can understand and cite. The goal is not keyword volume alone, but useful, specific, buyer-relevant content.',
        },
      },
      {
        '@type': 'Question',
        name: 'What kind of content does Pressense help build?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pressense can help with website copy, use-case pages, technical content, SEO articles, AEO-optimised FAQ pages, founder-led authority content for LinkedIn and Medium, product narratives, playbooks, content workflows, and AI-assisted publishing systems.',
        },
      },
      {
        '@type': 'Question',
        name: 'When would Pressense not recommend more content?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pressense may advise against more content if the offer is unclear, the ideal buyer is undefined, the website cannot explain the business, the team is only chasing keywords, or the positioning problem needs to be fixed first.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does content connect to sales?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Good content reduces confusion before a sales conversation. It helps buyers understand the problem, trust the business, compare options, and decide whether they are a good fit. This makes sales conversations clearer and more qualified.',
        },
      },
    ],
  }

  return (
    <>
      <StructuredData data={serviceSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main>
        <ContentAuthorityHero />
        <TranslationSection />
        <ConstraintsSection />
        <DiagnosisSection />
        <WhatWeBuildSection />
        <MostUsefulSection />
        <WhatChangesSection />
        <WhenWorthBuildingSection />
        <WhenNotRecommendSection />
        <StructuredScaleSection />
        <NotWritingServiceSection />
        <EngagementPathSection />
        <ContentFAQSection />
        <ContentAuthorityCTA />
      </main>
      
    </>
  )
}
