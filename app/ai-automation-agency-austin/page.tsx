import { StructuredData } from '@/components/structured-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Automation Agency in Austin | Pressense',
  description: 'AI automation services for Austin tech startups and companies. Custom AI solutions built fast.',
  openGraph: { title: 'AI Automation Agency in Austin | Pressense', url: '/ai-automation-agency-austin', type: 'website' },
  alternates: { canonical: '/ai-automation-agency-austin' },
}

export default function AIAustinPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Pressense - AI Automation Agency Austin', areaServed: 'Austin, TX', address: { '@type': 'PostalAddress', addressLocality: 'Austin', addressRegion: 'TX', addressCountry: 'US' } }
  return (<><StructuredData data={schema} /><main className="min-h-screen"><section className="max-w-4xl mx-auto px-6 lg:px-10 py-16"><h1 className="text-4xl font-bold mb-6">AI Automation Agency in Austin</h1><p className="text-xl text-muted-foreground mb-8">AI automation for Austin's fast-growing tech community.</p></section></main></>)
}
