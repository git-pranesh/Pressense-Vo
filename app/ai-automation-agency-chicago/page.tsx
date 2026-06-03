import { StructuredData } from '@/components/structured-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Automation Agency in Chicago | Pressense',
  description: 'AI automation services for Chicago startups and businesses.',
  openGraph: { title: 'AI Automation Agency in Chicago | Pressense', url: '/ai-automation-agency-chicago', type: 'website' },
  alternates: { canonical: '/ai-automation-agency-chicago' },
}

export default function AIChicagoPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Pressense - AI Automation Agency Chicago', areaServed: 'Chicago, IL' }
  return (<><StructuredData data={schema} /><main className="min-h-screen"><section className="max-w-4xl mx-auto px-6 lg:px-10 py-16"><h1 className="text-4xl font-bold mb-6">AI Automation Agency in Chicago</h1><p className="text-xl text-muted-foreground mb-8">AI automation for Chicago companies.</p></section></main></>)
}
