import { StructuredData } from '@/components/structured-data'
import { FinalCTA } from '@/components/final-cta'
import { MvpReplitHero } from '@/components/mvp-replit-page/hero'
import { MvpReplitWhoItsForSection } from '@/components/mvp-replit-page/who-its-for-section'
import { MvpReplitProblemsSection } from '@/components/mvp-replit-page/problems-section'
import { MvpReplitMethodologySection } from '@/components/mvp-replit-page/methodology-section'
import { MvpReplitCostSection } from '@/components/mvp-replit-page/cost-section'
import { MvpReplitWhatYouGetSection } from '@/components/mvp-replit-page/what-you-get-section'
import { MvpReplitFaqSection } from '@/components/mvp-replit-page/faq-section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Build Your MVP on Replit | Production-Grade in 6 Weeks | Pressense',
  description:
    'Replit MVP development with production standards. From $3K fixed-price. Parameterised queries, tested auth, code you own. Not a vibe-coded prototype — a real product.',
  openGraph: {
    title: 'Build Your MVP on Replit | Production-Grade in 6 Weeks | Pressense',
    description:
      'Replit MVP development with production standards. From $3K fixed-price. Parameterised queries, tested auth, code you own. Not a vibe-coded prototype — a real product.',
    url: '/mvp-development-replit',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Replit MVP Development | Pressense' }],
  },
  alternates: {
    canonical: '/mvp-development-replit',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Build Your MVP on Replit | Production-Grade in 6 Weeks | Pressense',
    description:
      'Replit MVP development with production standards. From $3K fixed-price. Parameterised queries, tested auth, code you own.',
    images: ['/og-image.jpg'],
  },
}

export default function MvpDevelopmentReplitPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Replit MVP Development',
    provider: {
      '@type': 'Organization',
      name: 'Pressense',
      url: 'https://www.pressense.co',
    },
    description:
      'Pressense builds production-grade MVPs on Replit in 6 weeks. Fixed-price engagements starting from $8,000. TypeScript, Next.js, PostgreSQL. Founders own the code from the first commit.',
    url: 'https://www.pressense.co/mvp-development-replit',
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Replit MVP Packages',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Replit MVP Build',
            description: 'Core value loop, auth, 2-3 integrations, production-grade Replit deployment in 6 weeks.',
          },
          price: '8000',
          priceCurrency: 'USD',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Replit MVP + Retainer',
            description: 'Monthly sprint retainer for ongoing feature iteration after the initial build.',
          },
          price: '3500',
          priceCurrency: 'USD',
        },
      ],
    },
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
        name: 'MVP Development on Replit',
        item: 'https://www.pressense.co/mvp-development-replit',
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can you build a real SaaS product on Replit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Replit is a production-capable platform with managed PostgreSQL databases, persistent deployments, secret management, and custom domain support. The constraint is not the platform, it is the code quality. A production SaaS built on Replit uses the same engineering standards as one built on AWS: parameterised queries, tested auth libraries, environment-variable-managed secrets, and role-scoped data access.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does it cost to build an MVP on Replit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Replit MVP builds with Pressense start from $8,000 for a focused single-journey product and scale based on the number of user journeys, integrations, and data model complexity. Every engagement starts with a fixed-price estimate from the diagnostic session before any work begins.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is vibe coding and why is it not enough for a production MVP?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Vibe coding is the practice of building software by describing requirements to an AI agent in natural language. AI agents like Replit Agent can scaffold a full-stack app in minutes. The gap is engineering judgement: the AI builds the feature you asked for, but nobody reviewed whether the auth pattern is safe, whether the database queries are parameterised, or whether the webhook handler handles duplicate events. Pressense uses AI tooling heavily in Replit builds and reviews everything against a production readiness checklist.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to build an MVP on Replit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A focused, well-scoped Replit MVP takes six weeks. Week one is scoping. Week two is architecture. Weeks three to four are sprint one covering core auth and primary user journey. Weeks five to six are sprint two covering integrations, secondary flows, and stabilisation.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between this and just using Replit Agent myself?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Replit Agent generates a working app faster than a human developer for the initial scaffold. The difference is the production readiness review: Pressense checks the auth architecture, reviews database access patterns, verifies secret handling, adds error boundaries, and tests integration points. The result is a codebase you can take to investors or a technical co-founder without being told to rewrite it.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you work with founders who have already started building on Replit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The diagnostic session includes a code review of what exists. If the existing codebase is salvageable, we build on top of it. If the architecture has fundamental issues, we scope a targeted rebuild of the core. Either way, you leave the diagnostic session with a clear picture and a fixed-price estimate.',
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
        <MvpReplitHero />
        <MvpReplitWhoItsForSection />
        <MvpReplitProblemsSection />
        <MvpReplitMethodologySection />
        <MvpReplitCostSection />
        <MvpReplitWhatYouGetSection />
        <MvpReplitFaqSection />
        <FinalCTA />
      </main>
    </>
  )
}
