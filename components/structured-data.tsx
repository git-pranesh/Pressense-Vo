export function StructuredData() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Pressense',
    description:
      'Strategy and systems consultancy that helps serious businesses move from scattered growth to structured scale.',
    url: 'https://v0-pressense.vercel.app',
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
    url: 'https://v0-pressense.vercel.app',
    description:
      'Strategy and systems consultancy for structured scale.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://v0-pressense.vercel.app/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
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
    </>
  )
}
