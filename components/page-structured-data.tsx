interface BreadcrumbItem {
  name: string
  url: string
}

interface FAQItem {
  question: string
  answer: string
}

interface PageStructuredDataProps {
  breadcrumbs: BreadcrumbItem[]
  faqs?: FAQItem[]
  pageType?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'FAQPage'
  pageName: string
  pageDescription: string
}

export function PageStructuredData({
  breadcrumbs,
  faqs,
  pageType = 'WebPage',
  pageName,
  pageDescription,
}: PageStructuredDataProps) {
  const baseUrl = 'https://pressense.co'

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  }

  const webPageData = {
    '@context': 'https://schema.org',
    '@type': pageType,
    name: pageName,
    description: pageDescription,
    url: `${baseUrl}${breadcrumbs[breadcrumbs.length - 1]?.url || '/'}`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Pressense',
      url: baseUrl,
    },
  }

  const faqData = faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
    : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageData),
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
    </>
  )
}
