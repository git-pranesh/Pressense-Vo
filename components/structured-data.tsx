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

  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does Pressense do?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pressense is a strategy and systems consultancy that helps serious businesses move from scattered growth to structured scale. We diagnose growth bottlenecks, fix broken systems, and build scalable infrastructure for founders, operators, and enterprise teams.',
        },
      },
      {
        '@type': 'Question',
        name: 'What problems does Pressense fix?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We fix seven core problems: weak or unclear positioning, no defined or scalable offer, no predictable acquisition system, broken delivery operations, teams without structure or accountability, financial blind spots, and founder bottleneck where the business cannot run without the founder.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Pressense work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our approach follows four phases: 1) Diagnose to understand what is actually broken, 2) Build the Plan to define the fix with clear milestones, 3) Execute to implement the solution hands-on, and 4) Measure to track impact and iterate based on results.',
        },
      },
      {
        '@type': 'Question',
        name: 'What types of engagements does Pressense offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer four engagement types: Focused Diagnostic (2-week deep audit), Strategy Sprint (4-6 week positioning and GTM overhaul), Systems Pilot (6-8 week build and implementation), and Advisory Support (ongoing fractional strategic guidance).',
        },
      },
      {
        '@type': 'Question',
        name: 'Who does Pressense work with?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We work with scaling founders who built something that works and need systems to grow, operators and COOs who own execution but need help rebuilding the engine, and enterprise teams with strategy that exists but execution that is stalled.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does it cost to work with Pressense?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Engagements typically range from $15,000 to $75,000+ depending on scope, complexity, and timeline. We provide detailed proposals after an initial conversation with no surprises or hidden fees.',
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
          __html: JSON.stringify(faqData),
        }}
      />
    </>
  )
}
