import { StructuredData } from '@/components/structured-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Automation Agency in London | Pressense',
  description: 'AI automation consulting for London startups and businesses. International AI workflow solutions.',
  openGraph: { title: 'AI Automation Agency in London | Pressense', url: '/ai-automation-agency-london', type: 'website' },
  alternates: { canonical: '/ai-automation-agency-london' },
}

export default function AILondonPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Pressense - AI Automation Agency London', areaServed: 'London, UK', address: { '@type': 'PostalAddress', addressLocality: 'London', addressCountry: 'UK' } }
  return (<><StructuredData data={schema} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":["LocalBusiness","ProfessionalService"],"name":"Pressense — AI Automation Agency London","description":"AI automation consulting for London businesses and scaling UK companies.","url":"https://www.pressense.co/ai-automation-agency-london","areaServed":{"@type":"City","name":"London"},"serviceType":"AI Automation Consulting","parentOrganization":{"@type":"Organization","name":"Pressense","url":"https://www.pressense.co"}}) }} /><main className="min-h-screen"><section className="max-w-4xl mx-auto px-6 lg:px-10 py-16"><h1 className="text-4xl font-bold mb-6">AI Automation Agency in London</h1><p className="text-xl text-muted-foreground mb-8">AI automation solutions for London-based founders and companies.</p></section></main></>)
}
