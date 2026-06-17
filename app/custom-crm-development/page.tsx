import type { Metadata } from 'next'
import { StructuredData } from '@/components/structured-data'
import { CustomCrmHero } from '@/components/custom-crm-page/hero'
import { CustomCrmWhoItsForSection } from '@/components/custom-crm-page/who-its-for-section'
import { CustomCrmComparisonSection } from '@/components/custom-crm-page/comparison-section'
import { CustomCrmWhyOffShelfFailsSection } from '@/components/custom-crm-page/why-off-shelf-fails-section'
import { CustomCrmMethodologySection } from '@/components/custom-crm-page/methodology-section'
import { CustomCrmPricingSection } from '@/components/custom-crm-page/pricing-section'
import { CustomCrmFAQSection } from '@/components/custom-crm-page/faq-section'
import { FinalCTA } from '@/components/final-cta'

export const metadata: Metadata = {
  title: 'Custom CRM Development | Pressense',
  description:
    'Custom CRM development for growing businesses. Own your sales system, eliminate vendor lock-in, and automate your exact workflow. From $15K, live in 6–14 weeks.',
  openGraph: {
    title: 'Custom CRM Development | Pressense',
    description:
      'Custom CRM development for growing businesses. Own your sales system, eliminate vendor lock-in, and automate your exact workflow. From $15K, live in 6–14 weeks.',
    url: '/custom-crm-development',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pressense Custom CRM Development',
      },
    ],
  },
  alternates: {
    canonical: '/custom-crm-development',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom CRM Development | Pressense',
    description:
      'Custom CRM development for growing businesses. Own your sales system, eliminate vendor lock-in, and automate your exact workflow. From $15K, live in 6–14 weeks.',
    images: ['/og-image.jpg'],
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom CRM Development',
  provider: {
    '@type': 'Organization',
    name: 'Pressense',
    url: 'https://www.pressense.co',
  },
  description:
    'Custom CRM development for growing businesses. Pressense builds sales and customer management systems designed around your specific workflow, data structure, and integration requirements, delivered in 6 to 14 weeks on Replit.',
  url: 'https://www.pressense.co/custom-crm-development',
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Custom CRM Development Packages',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'CRM MVP',
        description: 'Core contact and deal management with custom pipeline stages and basic automation.',
        price: '15000',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '15000',
          priceCurrency: 'USD',
          unitText: 'project',
        },
      },
      {
        '@type': 'Offer',
        name: 'Full Custom CRM',
        description:
          'Multi-object data model, advanced automation, full integration suite, role-based permissions, and custom reporting.',
        price: '35000',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '35000',
          priceCurrency: 'USD',
          unitText: 'project',
        },
      },
      {
        '@type': 'Offer',
        name: 'CRM Retainer',
        description: 'Monthly development sprints, new features, bug fixes, integration maintenance, and quarterly roadmap planning.',
        price: '3500',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '3500',
          priceCurrency: 'USD',
          unitText: 'month',
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
      name: 'Custom CRM Development',
      item: 'https://www.pressense.co/custom-crm-development',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is custom CRM development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Custom CRM development is the process of building a sales and customer management system designed specifically for your business workflow, data structure, and integration requirements. Unlike off-the-shelf platforms such as Salesforce or HubSpot, a custom CRM does not require your team to adapt to a generic software model. The data objects, pipeline stages, automation rules, and reporting dashboards are built around how your business actually operates. Most custom CRM builds take six to fourteen weeks from scoping to a live MVP.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does custom CRM development cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Custom CRM development starts at around $15,000 for a lean MVP for a team of three to ten, and typically falls between $20,000 and $60,000 for a full system. The final cost depends on the number of data objects, integrations, automation rules, and custom reporting required. A three-year comparison with Salesforce or HubSpot Enterprise often shows the custom build is cheaper at scale, because you pay once for the build and own the software outright. All Pressense builds come with a fixed-price estimate after the free diagnostic.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to build a custom CRM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A lean CRM MVP takes six to eight weeks from scoping to launch. A full-featured custom CRM for a team of ten to fifty takes ten to fourteen weeks. Timeline depends primarily on the number of integrations and the complexity of the data model. Pressense builds in two-week sprints and delivers working software at the end of each sprint, so you are testing against real data throughout, not waiting for a big launch.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between CRM development and CRM customisation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CRM customisation means configuring or extending an existing platform like Salesforce or HubSpot using their built-in tools and APIs. CRM development means building a new system from scratch in code you own. Customisation is cheaper upfront and faster to start, but you stay within the constraints of the vendor platform and continue paying licensing fees. Development has a higher upfront cost but no ongoing licensing, no vendor lock-in, and no limits on what you can build.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do small businesses need custom CRM development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not always. If your sales process fits a standard contact-deal-company model and your team size is under ten, an off-the-shelf tool like HubSpot Free or Pipedrive is usually the right choice. Custom CRM development makes sense when your process requires non-standard data objects, your licensing costs are scaling unsustainably, your team is spending significant time on manual workarounds, or you need deep integrations with proprietary internal systems.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does Pressense build custom CRMs on Replit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Replit produces clean, readable, hosted code that you can modify without a complex local development setup. That matters because most founder-led businesses do not have an in-house engineering team. If you want a new feature in six months, any developer can pick up the codebase. If you want to move hosting, the code travels with you. The alternative, a custom CRM built on a proprietary agency stack, creates a new vendor dependency. Replit removes that dependency and keeps the system genuinely yours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you migrate our data from Salesforce or HubSpot to a custom CRM?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Data migration is included in the scoping phase of every build. We export your existing contacts, deals, activity logs, and custom fields, map them to the new data model, and import them before launch. The migration plan is part of the fixed-price build estimate you receive after the diagnostic. We have migrated from Salesforce, HubSpot, Pipedrive, Zoho, and various spreadsheet setups.',
      },
    },
  ],
}

export default function CustomCrmDevelopmentPage() {
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
      <StructuredData />
      <main className="min-h-screen">
        <CustomCrmHero />
        <CustomCrmWhoItsForSection />
        <CustomCrmComparisonSection />
        <CustomCrmWhyOffShelfFailsSection />
        <CustomCrmMethodologySection />
        <CustomCrmPricingSection />
        <CustomCrmFAQSection />
        <FinalCTA />
      </main>
    </>
  )
}
