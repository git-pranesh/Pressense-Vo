'use client'

import { usePathname } from 'next/navigation'

interface StructuredDataProps {
  data?: Record<string, unknown>
}

export function StructuredData({ data }: StructuredDataProps = {}) {
  const pathname = usePathname()
  const baseUrl = 'https://www.pressense.co'
  const currentUrl = `${baseUrl}${pathname}`

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${baseUrl}/#organization`,
    name: 'Pressense',
    description:
      'Strategy and systems consultancy that helps serious businesses move from scattered growth to structured scale.',
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/icon.svg`,
      width: 512,
      height: 512,
    },
    image: `${baseUrl}/og-image.jpg`,
    telephone: '',
    priceRange: '$$$$',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 13.0827,
      longitude: 80.2707,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    serviceType: [
      'Business Consulting',
      'Strategy Consulting',
      'Operations Consulting',
      'Growth Strategy',
      'Revenue Operations',
    ],
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    knowsAbout: [
      'Business Strategy',
      'Go-to-Market Strategy',
      'Revenue Operations',
      'Sales Process Design',
      'Positioning',
      'Growth Systems',
      'Operations Optimization',
    ],
    sameAs: ['https://www.linkedin.com/company/pressense'],
  }

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    name: 'Pressense',
    url: baseUrl,
    description: 'Strategy and systems consultancy for structured scale.',
    publisher: {
      '@id': `${baseUrl}/#organization`,
    },
  }

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      ...(pathname !== '/'
        ? [
            {
              '@type': 'ListItem',
              position: 2,
              name: getPageName(pathname),
              item: currentUrl,
            },
          ]
        : []),
    ],
  }

  const simpleOrganizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Pressense',
    url: 'https://www.pressense.co',
    logo: 'https://www.pressense.co/icon.svg',
    description: 'Strategy and systems consultancy for founder-led businesses. AI automation, GTM strategy, revenue operations, and custom internal tools.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      url: 'https://www.pressense.co/contact',
    },
    areaServed: ['AU', 'NZ', 'US', 'GB', 'IN'],
    sameAs: [],
  }

  // Only include FAQ schema on the homepage
  const faqData =
    pathname === '/'
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What does Pressense actually do?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Pressense helps founder-led and growing businesses find what is blocking growth, then build the strategy, systems, websites, content, workflows, and tools needed to scale with more clarity. We do not start with execution. We start by diagnosing the real constraint.',
              },
            },
            {
              '@type': 'Question',
              name: 'Is Pressense a consulting firm or an execution partner?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Pressense sits between strategic advisory and execution. We help clarify the problem first, then support implementation where useful. That could mean a website, content system, internal tool, CRM workflow, AI automation, or operating roadmap.',
              },
            },
            {
              '@type': 'Question',
              name: 'Who is Pressense best suited for?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Pressense is best suited for founders, operators, and growing teams dealing with scattered growth, unclear positioning, weak systems, revenue leakage, manual workflows, or execution bottlenecks. It is not ideal for businesses looking only for isolated low-cost tasks.',
              },
            },
            {
              '@type': 'Question',
              name: 'Why do you start with a diagnostic?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Many businesses waste money solving the wrong problem. A diagnostic helps identify whether the real issue is strategy, positioning, workflow, sales visibility, website clarity, content, systems, or execution. This makes the next step more precise.',
              },
            },
            {
              '@type': 'Question',
              name: 'Can Pressense help with both strategy and implementation?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. The work usually starts with strategy and diagnosis, then moves into implementation where needed. Pressense can support advisory, websites, content systems, internal tools, CRM and ERP-lite systems, and AI workflows.',
              },
            },
            {
              '@type': 'Question',
              name: 'What should we do if we are not sure what we need yet?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Start with the diagnostic. It is designed for businesses that feel something is not working but are not sure whether the issue is marketing, operations, positioning, systems, people, tools, or execution.',
              },
            },
          ],
        }
      : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
      />
      {faqData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqData),
          }}
        />
      )}
      {data && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data),
          }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(simpleOrganizationData),
        }}
      />
    </>
  )
}

function getPageName(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean)
  const lastSegment = segments[segments.length - 1] || ''
  return lastSegment
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
