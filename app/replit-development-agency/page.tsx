import type { Metadata } from 'next'
import { StructuredData } from '@/components/structured-data'
import { ReplitAgencyHero } from '@/components/replit-agency-page/hero'
import { ReplitAgencyWhoItsForSection } from '@/components/replit-agency-page/who-its-for-section'
import { ReplitAgencyWhatWeBuildSection } from '@/components/replit-agency-page/what-we-build-section'
import { ReplitAgencyMethodologySection } from '@/components/replit-agency-page/methodology-section'
import { ReplitAgencyWhatYouGetSection } from '@/components/replit-agency-page/what-you-get-section'
import { ReplitAgencyFaqSection } from '@/components/replit-agency-page/faq-section'
import { FinalCTA } from '@/components/final-cta'

export const metadata: Metadata = {
  title: 'Replit Agency for Startups & SMBs | Pressense',
  description:
    'Pressense is the first Replit expert agency for founder-led businesses. Build production-ready internal tools, MVPs, and custom apps in 2–8 weeks. From $1,500. You own the code.',
  openGraph: {
    title: 'Replit Agency for Startups & SMBs | Pressense',
    description:
      'Pressense is the first Replit expert agency for founder-led businesses. Build production-ready internal tools, MVPs, and custom apps in 2–8 weeks. From $1,500. You own the code.',
    url: '/replit-development-agency',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense Replit Agency' }],
  },
  alternates: {
    canonical: '/replit-development-agency',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Replit Agency for Startups & SMBs | Pressense',
    description:
      'Pressense is the first Replit agency for founder-led businesses. Build internal tools, MVPs, and custom apps in 2–8 weeks. From $5,000. You own the code.',
    images: ['/og-image.jpg'],
  },
}

export default function ReplitDevelopmentAgencyPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Replit Development Agency',
    provider: {
      '@type': 'Organization',
      name: 'Pressense',
      url: 'https://www.pressense.co',
    },
    description:
      'Pressense is a Replit agency that builds internal tools, MVPs, and custom apps for founder-led businesses and SMBs using Replit\'s AI-powered cloud IDE.',
    url: 'https://www.pressense.co/replit-development-agency',
    areaServed: 'United States',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Replit Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Internal Tool Build',
          description: 'A focused internal tool built on Replit in 2–4 weeks.',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            priceCurrency: 'USD',
            price: '5000',
            unitText: 'fixed-price from',
          },
        },
        {
          '@type': 'Offer',
          name: 'MVP or Custom App',
          description: 'Full product with core user journey, auth, integrations, and admin dashboard in 6–8 weeks.',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            priceCurrency: 'USD',
            price: '15000',
            unitText: 'fixed-price from',
          },
        },
        {
          '@type': 'Offer',
          name: 'Sprint Retainer',
          description: 'Monthly sprint cycle for ongoing feature development after the initial build.',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            priceCurrency: 'USD',
            price: '2500',
            unitText: 'per month from',
          },
        },
      ],
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pressense.co' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Replit Development Agency',
        item: 'https://www.pressense.co/replit-development-agency',
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a Replit agency?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "A Replit agency is a development firm that uses Replit's AI-powered cloud IDE to build and deploy custom software for businesses. Replit eliminates environment setup and DevOps overhead, which means the agency spends 100% of the engagement time building the product, not configuring servers. Code is written in standard TypeScript, deployed automatically, and lives in the client's Replit account from the first commit. Pressense is the first Replit agency positioned specifically for founder-led businesses and SMBs.",
        },
      },
      {
        '@type': 'Question',
        name: 'Is Replit good for real business apps?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes. Replit was cited by Google's AI Overview as the recommended platform for custom internal tools development. It runs production TypeScript applications with PostgreSQL databases, supports custom domains, and handles deployment automatically. Replit is not appropriate for consumer apps with millions of concurrent users, but for internal tools, MVPs, CRMs, portals, and SaaS products at the 1-to-200-user scale, it is production-ready. The code is portable: if you outgrow Replit, the TypeScript application moves to any other host without a rewrite.",
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between Replit Agent and a Replit developer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Replit Agent generates code from plain-English prompts. It is fast and excellent for prototyping. A Replit developer takes that output, evaluates it for production readiness, adds proper error handling, structures the data model correctly, integrates external APIs securely, and builds the edge cases and admin tools that Agent does not address. Replit Agent produces a starting point. A Replit developer produces a finished product.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is vibe coding?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Vibe coding is the practice of building software by describing what you want in plain English and letting AI tools like Replit Agent generate the code. It is genuinely fast for prototyping and internal tools. The limitation is that vibe-coded apps often lack proper error handling, security reviews, and production-grade architecture. A vibe coding agency bridges that gap: the AI handles generation speed, and the developer handles quality, security, and architecture.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do Replit apps need to be rewritten before going to production?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Replit apps built by a professional developer do not need to be rewritten. The issue that gives Replit a "needs rewriting" reputation is AI-generated prototype code that was never reviewed or structured properly. When a Replit developer builds the app with a real data model, proper auth, error handling, and tested integrations from the start, the production-ready version is what gets delivered. We do not prototype first and rewrite second. The first sprint produces production-quality code.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can Replit apps handle real production traffic?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Replit hosts applications on cloud infrastructure with auto-scaling. For internal tools with 5 to 200 concurrent users, and for MVPs at early-stage scale, it handles production traffic without issue. For consumer apps expecting tens of thousands of concurrent users at launch, we would spec a different hosting architecture. The Replit codebase is fully portable and can be deployed to AWS, Vercel, or any other host if traffic requirements change.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does Replit development cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A focused internal tool on Replit costs from $5,000 and takes two to four weeks. A full MVP or custom product costs from $15,000 and takes six to eight weeks. Ongoing sprint retainers start at $2,500 per month. Enterprise Replit agencies in the official Solution Partner Program charge $150,000 and above. Pressense serves the founder and SMB market with fixed-price builds at startup-appropriate budgets. Every engagement starts with a fixed-price estimate from the diagnostic session.',
        },
      },
    ],
  }

  return (
    <>
      <StructuredData data={serviceSchema} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen">
        <ReplitAgencyHero />
        <ReplitAgencyWhoItsForSection />
        <ReplitAgencyWhatWeBuildSection />
        <ReplitAgencyMethodologySection />
        <ReplitAgencyWhatYouGetSection />
        <ReplitAgencyFaqSection />
        <FinalCTA />
      </main>
    </>
  )
}
