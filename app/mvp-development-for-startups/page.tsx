import { StructuredData } from '@/components/structured-data'
import { FinalCTA } from '@/components/final-cta'
import { MvpHero } from '@/components/mvp-page/hero'
import { MvpWhoItsForSection } from '@/components/mvp-page/who-its-for-section'
import { MvpProblemsSection } from '@/components/mvp-page/problems-section'
import { MvpMethodologySection } from '@/components/mvp-page/methodology-section'
import { MvpCostSection } from '@/components/mvp-page/cost-section'
import { MvpWhatYouGetSection } from '@/components/mvp-page/what-you-get-section'
import { MvpFaqSection } from '@/components/mvp-page/faq-section'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MVP Development for Startups | Pressense',
  description:
    'MVP development for startups: build, validate and launch in 8 weeks. From $5K fixed-price. Built on Replit — you own the code from day one.',
  openGraph: {
    title: 'MVP Development for Startups | Pressense',
    description:
      'MVP development for startups: build, validate and launch in 8 weeks. From $5K fixed-price. Built on Replit — you own the code from day one.',
    url: '/mvp-development-for-startups',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense MVP Development for Startups' }],
  },
  alternates: {
    canonical: '/mvp-development-for-startups',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MVP Development for Startups | Pressense',
    description:
      'MVP development for startups: build, validate and launch in 8 weeks. From $5K fixed-price. Built on Replit — you own the code from day one.',
    images: ['/og-image.jpg'],
  },
}

export default function MvpDevelopmentPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'MVP Development for Startups',
    provider: {
      '@type': 'Organization',
      name: 'Pressense',
      url: 'https://www.pressense.co',
    },
    description:
      'Pressense builds production-grade MVPs for early-stage startups in 8 weeks. Fixed-price engagements starting from $5,000. Built on Replit — founders own the code from day one.',
    url: 'https://www.pressense.co/mvp-development-for-startups',
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'MVP Development Packages',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'MVP Starter',
            description: 'Core value loop, user auth, 1–2 integrations, deployed on Replit in 8 weeks.',
          },
          price: '5000',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '5000',
            priceCurrency: 'USD',
            unitText: 'fixed-price build',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'MVP Growth',
            description: 'Multi-journey MVP with admin dashboard, 3–5 integrations, role-based access in 12 weeks.',
          },
          price: '28000',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '28000',
            priceCurrency: 'USD',
            unitText: 'fixed-price build',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'MVP Retainer',
            description: 'Monthly development sprints after the initial MVP build for ongoing iteration.',
          },
          price: '3500',
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '3500',
            priceCurrency: 'USD',
            unitText: 'MONTH',
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
        name: 'MVP Development for Startups',
        item: 'https://www.pressense.co/mvp-development-for-startups',
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is MVP development for startups?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MVP development for startups is the process of building the smallest functional version of a product that tests one core hypothesis with real users. It is production software, not a mockup. Users can sign up, complete a primary workflow, and generate data that tells you what to build next. The goal is validated learning in the shortest time, not a polished final product.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does MVP development cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MVP development with Pressense starts from $5,000 for a focused single-workflow build. A multi-journey product with payments, email automation, and an admin dashboard is $28,000. With AI-assisted development on Replit, founders can now get production-ready MVPs at a fraction of traditional agency rates. Every Pressense MVP engagement starts with a fixed-price estimate from the diagnostic session before any work begins.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does MVP development take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A well-scoped MVP takes eight weeks from the diagnostic session to a live, tested product. Week one is scoping. Week two is architecture. Weeks three to six are two two-week build sprints. Weeks seven and eight are stabilisation and iteration. The eight-week timeline is only possible when the scope is defined and fixed before development starts.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between an MVP and a prototype?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A prototype is a visual or interactive mockup designed to test a user interface. It has no backend, no real data, and no actual functionality. An MVP is production software. Users can create accounts, complete real workflows, and generate real data. For investor demos and early user testing, an MVP is far more credible than a prototype.',
        },
      },
      {
        '@type': 'Question',
        name: 'What technology do you use to build MVPs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We build on Replit using TypeScript, Next.js, and PostgreSQL. Replit is a cloud-based development and deployment platform that gives founders full code ownership from the first commit. The codebase is standard TypeScript with a real managed database — readable and maintainable by any developer without specialised knowledge or platform lock-in.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need a technical co-founder or can I hire an MVP agency?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You do not need a technical co-founder to build an MVP. What you need is a clear problem hypothesis, a defined primary user journey, and a realistic scope. An MVP agency provides the technical execution. If you plan to hire a technical team post-launch, an agency-built MVP gives you something to test and iterate before making a long-term hire.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I validate my MVP idea before building?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Validation before building means confirming that real people experience the problem acutely enough to change their behaviour or pay money to fix it. The fastest path is five to ten structured conversations with your target user. Ask about the problem, not the solution. The Pressense diagnostic session reviews your validation evidence before scoping the build.',
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
        <MvpHero />
        <MvpWhoItsForSection />
        <MvpProblemsSection />
        <MvpMethodologySection />
        <MvpCostSection />
        <MvpWhatYouGetSection />
        <MvpFaqSection />
        <FinalCTA />
      </main>
    </>
  )
}
