import { StructuredData } from '@/components/structured-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: 'AI Automation Agency in Chicago | Pressense',
  description: 'AI automation services for Chicago startups and businesses.',
  openGraph: { title: 'AI Automation Agency in Chicago | Pressense', url: '/ai-automation-agency-chicago', type: 'website' },
  alternates: { canonical: '/ai-automation-agency-chicago' },
}

export default function AIChicagoPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Pressense - AI Automation Agency Chicago', areaServed: 'Chicago, IL' }
  return (<><StructuredData data={schema} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":["LocalBusiness","ProfessionalService"],"name":"Pressense — AI Automation Agency Chicago","description":"AI automation consulting for Chicago businesses and Midwest founder-led companies.","url":"https://www.pressense.co/ai-automation-agency-chicago","areaServed":{"@type":"City","name":"Chicago"},"serviceType":"AI Automation Consulting","parentOrganization":{"@type":"Organization","name":"Pressense","url":"https://www.pressense.co"}}) }} /><main className="min-h-screen"><section className="max-w-4xl mx-auto px-6 lg:px-10 py-16"><h1 className="font-medium mb-6">AI Automation Agency in Chicago</h1><p className="text-xl text-muted-foreground mb-8">AI automation for Chicago companies.</p></section></main></>)
}
