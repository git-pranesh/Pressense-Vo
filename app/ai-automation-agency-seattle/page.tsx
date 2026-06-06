import { StructuredData } from '@/components/structured-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: 'noindex',
  title: 'AI Automation Agency in Seattle | Pressense',
  description: 'AI automation services for Seattle startups and businesses.',
  openGraph: { title: 'AI Automation Agency in Seattle | Pressense', url: '/ai-automation-agency-seattle', type: 'website' },
  alternates: { canonical: '/ai-automation-agency-seattle' },
}

export default function AISeattlePage() {
  const schema = { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Pressense - AI Automation Agency Seattle', areaServed: 'Seattle, WA' }
  return (<><StructuredData data={schema} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":["LocalBusiness","ProfessionalService"],"name":"Pressense — AI Automation Agency Seattle","description":"AI automation consulting for Seattle tech companies and Pacific Northwest founder-led businesses.","url":"https://www.pressense.co/ai-automation-agency-seattle","areaServed":{"@type":"City","name":"Seattle"},"serviceType":"AI Automation Consulting","parentOrganization":{"@type":"Organization","name":"Pressense","url":"https://www.pressense.co"}}) }} /><main className="min-h-screen"><section className="max-w-4xl mx-auto px-6 lg:px-10 py-16"><h1 className="text-4xl font-bold mb-6">AI Automation Agency in Seattle</h1><p className="text-xl text-muted-foreground mb-8">AI automation for Seattle companies.</p></section></main></>)
}
