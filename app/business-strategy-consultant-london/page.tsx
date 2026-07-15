import { StructuredData } from '@/components/structured-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: 'Business Strategy Consultant in London | Pressense',
  description: 'Strategic business consulting for London companies. Growth strategy, operations, founder coaching.',
  openGraph: { title: 'Business Strategy Consultant in London | Pressense', url: '/business-strategy-consultant-london', type: 'website' },
  alternates: { canonical: '/business-strategy-consultant-london' },
}

export default function StrategyLondonPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Pressense - Business Strategy Consultant London', areaServed: 'London, UK' }
  return (<><StructuredData data={schema} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":["LocalBusiness","ProfessionalService"],"name":"Pressense — Business Strategy Consultant London","description":"Business strategy consulting for London founder-led businesses and scaling UK companies.","url":"https://www.pressense.co/business-strategy-consultant-london","areaServed":{"@type":"City","name":"London"},"serviceType":"Business Strategy Consulting","parentOrganization":{"@type":"Organization","name":"Pressense","url":"https://www.pressense.co"}}) }} /><main className="min-h-screen"><section className="max-w-4xl mx-auto px-6 lg:px-10 py-16"><h1 className="text-4xl font-bold mb-6">Business Strategy Consultant in London</h1><p className="text-xl text-muted-foreground mb-8">Strategic consulting for London-based businesses.</p></section></main></>)
}
