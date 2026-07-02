import type { Metadata } from 'next'
import { StructuredData } from '@/components/structured-data'
import { MvpReplitHero } from '@/components/mvp-replit-page/hero'
import { MvpReplitWhoItsForSection } from '@/components/mvp-replit-page/who-its-for-section'
import { MvpReplitProblemsSection } from '@/components/mvp-replit-page/problems-section'
import { MvpReplitMethodologySection } from '@/components/mvp-replit-page/methodology-section'
import { MvpReplitWhatYouGetSection } from '@/components/mvp-replit-page/what-you-get-section'
import { MvpReplitFaqSection } from '@/components/mvp-replit-page/faq-section'
import { FinalCTA } from '@/components/final-cta'

export const metadata: Metadata = {
  title: 'MVP Development on Replit: Build a Production SaaS in 6 Weeks | Pressense',
  description:
    'Pressense builds production-grade MVPs on Replit for founders who have outgrown vibe coding. From $3,500. Auth, database, security, and deployment built right from day one. You own the code.',
  openGraph: {
    title: 'MVP Development on Replit: Build a Production SaaS in 6 Weeks | Pressense',
    description:
      'Pressense builds production-grade MVPs on Replit for founders who have outgrown vibe coding. From $3,500. Auth, database, security, and deployment built right from day one. You own the code.',
    url: '/mvp-development-replit',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense MVP Development on Replit' }],
  },
  alternates: {
    canonical: '/mvp-development-replit',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MVP Development on Replit: Build a Production SaaS in 6 Weeks | Pressense',
    description:
      'Pressense builds production-grade MVPs on Replit for founders who have outgrown vibe coding. From $3,500. Auth, database, security, and deployment built right from day one.',
    images: ['/og-image.jpg'],
  },
}

export default function MvpDevelopmentReplitPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'MVP Development on Replit',
    provider: {
      '@type': 'Organization',
      name: 'Pressense',
      url: 'https://www.pressense.co',
    },
    description:
      'Pressense builds production-grade MVPs on Replit for founders who have started vibe coding and need professional development to complete the build. Fixed-price engagements from $3,500.',
    url: 'https://www.pressense.co/mvp-development-replit',
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Replit MVP Development Packages',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Replit Prototype Refactor',
            description: 'Audit and refactor of an existing Replit Agent prototype into a production-grade codebase. Two to three weeks.',
          },
          price: '3500',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '3500',
            priceCurrency: 'USD',
            unitText: 'fixed-price from',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Replit MVP Greenfield',
            description: 'Full MVP build from scratch on Replit with auth, payments, admin dashboard, and production deployment. Six weeks.',
          },
          price: '5000',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '5000',
            priceCurrency: 'USD',
            unitText: 'fixed-price from',
          },
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
        name: 'Services',
        item: 'https://www.pressense.co/replit-development-agency',
      },
      {
        '@type': 'ListItem',
        position: 3,
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
        name: 'Can you build a real production SaaS on Replit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Replit is a fully production-capable platform. It supports Neon PostgreSQL for a managed database, custom domains with SSL, auth libraries, full-stack TypeScript, and persistent deployments. Real SaaS products run on Replit today. The challenge is not the platform. It is building on it correctly from the start, with proper architecture, security configuration, and a data model designed for real users rather than a demo.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is vibe coding and when does it stop being enough?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Vibe coding is building software by describing requirements to an AI agent in natural language, a term popularised by Andrej Karpathy. It stops being enough when you need production authentication, payment flows, role-based access, proper error handling, and a data model that survives real users rather than a controlled demo.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does MVP development on Replit cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Professional Replit MVP development with Pressense starts from $3,500 for a focused sprint refactoring an existing Replit prototype. A greenfield MVP with auth, payments, an admin dashboard, and a production deployment starts from $5,000. Every engagement starts with a diagnostic session that produces a written, fixed-price estimate before any build work begins.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does it take to build an MVP on Replit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Six weeks for a greenfield build: one week of audit and scoping, one week of architecture, three weeks of build sprints, one week of stabilisation and launch. If you have an existing Replit prototype, we can often deliver in four weeks by refactoring what is salvageable rather than rebuilding from scratch.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I own the code if you build on Replit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Every line of code lives in your Replit account from the first commit. You own it outright. You can fork it, export it, move it to a different hosting environment, or hand it to another developer at any time. We retain no ownership or access after the engagement ends.',
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
        <MvpReplitWhatYouGetSection />
        <MvpReplitFaqSection />
        <FinalCTA />
      </main>
    </>
  )
}
