import { StructuredData } from '@/components/structured-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: 'AI Automation Agency in Miami | Pressense',
  description: 'AI automation services for Miami startups and businesses.',
  openGraph: { title: 'AI Automation Agency in Miami | Pressense', url: '/ai-automation-agency-miami', type: 'website' },
  alternates: { canonical: '/ai-automation-agency-miami' },
}

export default function AIMiamiPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Pressense - AI Automation Agency Miami', areaServed: 'Miami, FL' }
  return (<><StructuredData data={schema} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":["LocalBusiness","ProfessionalService"],"name":"Pressense — AI Automation Agency Miami","description":"AI automation consulting for Miami businesses and Florida founder-led companies.","url":"https://www.pressense.co/ai-automation-agency-miami","areaServed":{"@type":"City","name":"Miami"},"serviceType":"AI Automation Consulting","parentOrganization":{"@type":"Organization","name":"Pressense","url":"https://www.pressense.co"}}) }} /><main className="min-h-screen"><section className="max-w-4xl mx-auto px-6 lg:px-10 py-16"><h1 className="text-4xl font-bold mb-6">AI Automation Agency in Miami</h1><p className="text-xl text-muted-foreground mb-8">AI automation for Miami companies.</p></section></main></>)
}
