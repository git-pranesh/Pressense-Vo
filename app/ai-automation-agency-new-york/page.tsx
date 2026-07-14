import { StructuredData } from '@/components/structured-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: 'AI Automation Agency in New York | Pressense',
  description: 'AI automation consulting for NYC startups and businesses. Custom AI workflows, agents, and integrations built in 1 week.',
  openGraph: {
    title: 'AI Automation Agency in New York | Pressense',
    url: '/ai-automation-agency-new-york',
    type: 'website',
  },
  alternates: {
    canonical: '/ai-automation-agency-new-york',
  },
}

export default function AINYPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Pressense - AI Automation Agency New York',
    areaServed: 'New York, NY',
    address: { '@type': 'PostalAddress', addressLocality: 'New York', addressRegion: 'NY', addressCountry: 'US' },
  }
  return (
    <>
      <StructuredData data={schema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":["LocalBusiness","ProfessionalService"],"name":"Pressense — AI Automation Agency New York","description":"AI automation consulting for New York businesses and founder-led companies.","url":"https://www.pressense.co/ai-automation-agency-new-york","areaServed":{"@type":"City","name":"New York"},"serviceType":"AI Automation Consulting","parentOrganization":{"@type":"Organization","name":"Pressense","url":"https://www.pressense.co"}}) }} />
      
      <main className="min-h-screen"><section className="max-w-4xl mx-auto px-6 lg:px-10 py-16"><h1 className="font-medium mb-6">AI Automation Agency in New York</h1><p className="text-xl text-muted-foreground mb-8">Transform your New York business with AI-powered automation. Serving NYC's most ambitious founders and companies.</p></section></main>
      
    </>
  )
}
