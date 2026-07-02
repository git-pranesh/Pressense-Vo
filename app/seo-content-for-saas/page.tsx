import { StructuredData } from '@/components/structured-data'
import { FinalCTA } from '@/components/final-cta'
import { SeoSaasHero } from '@/components/seo-saas-page/hero'
import { SeoSaasWhoItsForSection } from '@/components/seo-saas-page/who-its-for-section'
import { SeoSaasProblemsSection } from '@/components/seo-saas-page/problems-section'
import { SeoSaasMethodologySection } from '@/components/seo-saas-page/methodology-section'
import { SeoSaasCostSection } from '@/components/seo-saas-page/cost-section'
import { SeoSaasWhatWeBuildSection } from '@/components/seo-saas-page/what-we-build-section'
import { SeoSaasFaqSection } from '@/components/seo-saas-page/faq-section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Content for SaaS | Organic Pipeline, Not Just Traffic | Pressense',
  description:
    'B2B SaaS SEO content that generates organic trials and demos, not just sessions. Comparison pages, use-case pages, cluster articles. Pipeline-first content programmes for seed to Series A SaaS.',
  openGraph: {
    title: 'SEO Content for SaaS | Organic Pipeline, Not Just Traffic | Pressense',
    description:
      'B2B SaaS SEO content that generates organic trials and demos, not just sessions. Comparison pages, use-case pages, cluster articles. Pipeline-first content programmes for seed to Series A SaaS.',
    url: '/seo-content-for-saas',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'SEO Content for SaaS | Pressense' }],
  },
  alternates: {
    canonical: '/seo-content-for-saas',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Content for SaaS | Organic Pipeline, Not Just Traffic | Pressense',
    description:
      'B2B SaaS SEO content that generates organic trials and demos, not just sessions.',
    images: ['/og-image.jpg'],
  },
}

export default function SeoContentForSaasPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'SEO Content for SaaS',
    provider: {
      '@type': 'Organization',
      name: 'Pressense',
      url: 'https://www.pressense.co',
    },
    description:
      'Pressense builds pipeline-first SEO content programmes for B2B SaaS companies. Topic clusters, comparison pages, use-case pages, and integration guides structured for Google ranking and AI engine citation.',
    url: 'https://www.pressense.co/seo-content-for-saas',
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
        name: 'SEO Content for SaaS',
        item: 'https://www.pressense.co/seo-content-for-saas',
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is SEO content for SaaS and how is it different from regular SEO?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SEO content for SaaS is built around the B2B software buying cycle: problem awareness, solution research, vendor evaluation, and commitment. Each stage requires different content types. SaaS SEO includes comparison pages, use-case pages, integration guides, and alternative pages that capture buyers at the evaluation and decision stage, where conversion rates are highest. The goal is organic pipeline, not organic traffic.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does SEO content take to show results for a SaaS startup?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For a SaaS startup with limited domain authority, bottom-of-funnel content like comparison pages and use-case pages can show ranking movement within sixty to ninety days. Top-of-funnel educational content targeting competitive head terms takes three to six months. The full compounding effect of a content programme takes twelve to eighteen months to become a significant acquisition channel.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do comparison pages and alternative pages work for SaaS SEO?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Comparison pages capture searches like "[your product] vs [competitor]" and alternative pages capture "[best alternatives to market leader]". These are made by buyers in active evaluation, which is why they convert significantly better than informational content. The searches exist regardless of whether you have content for them — if you do not own the page, your competitor does.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you also write content for AI search, not just Google?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The principles that make content rank in Google also make it get cited by ChatGPT, Perplexity, and Claude: answer the question directly, support the answer with specific detail, use clear heading structure, and avoid vague marketing language. We structure every piece for AI citation from the first draft.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do you measure whether the SEO content is working?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We track organic trial sign-ups, organic demo requests, and organic-sourced pipeline revenue as the primary success metrics. We set up conversion tracking in your analytics platform so organic-attributed trials and demos are visible. Monthly reports connect content performance to business outcomes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this suitable for a recently funded SaaS startup with no existing organic presence?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The first ninety days focus on low-competition, high-conversion content: comparison pages, use-case pages, and integration guides. These rank faster than head terms and produce qualified pipeline earlier. By month six, educational cluster content starts to rank. Founders who start within three months of closing a seed or Series A consistently outperform those who delay.',
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
        <SeoSaasHero />
        <SeoSaasWhoItsForSection />
        <SeoSaasProblemsSection />
        <SeoSaasMethodologySection />
        <SeoSaasCostSection />
        <SeoSaasWhatWeBuildSection />
        <SeoSaasFaqSection />
        <FinalCTA />
      </main>
    </>
  )
}
