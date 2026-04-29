export function StructuredData() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Pressense',
    description:
      'Strategy and systems consultancy that helps serious businesses move from scattered growth to structured scale.',
    url: 'https://pressense.co',
    serviceType: [
      'Business Consulting',
      'Strategy Consulting',
      'Operations Consulting',
      'Growth Strategy',
      'Revenue Operations',
    ],
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Consulting Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Focused Diagnostic',
            description:
              'A 2-week deep audit of one specific constraint with prioritized findings and recommendations.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Strategy Sprint',
            description:
              'A 4-6 week intensive focused on positioning, messaging, or go-to-market strategy.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Systems Pilot',
            description:
              'A 6-8 week engagement to build and implement a specific system or process.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Advisory Support',
            description:
              'Ongoing fractional strategic guidance with regular check-ins and async support.',
          },
        },
      ],
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
  }

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Pressense',
    url: 'https://pressense.co',
    description:
      'Strategy and systems consultancy for structured scale.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://pressense.co/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
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
        item: 'https://pressense.co',
      },
    ],
  }

  const faqData = {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqData),
        }}
      />
    </>
  )
}
