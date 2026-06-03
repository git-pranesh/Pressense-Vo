import { StructuredData } from '@/components/structured-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GTM Strategy Consultant in San Francisco | Pressense',
  description: 'Go-to-market strategy consulting for San Francisco SaaS companies. Build your 90-day GTM blueprint.',
  openGraph: { title: 'GTM Strategy Consultant in San Francisco | Pressense', url: '/gtm-consultant-san-francisco', type: 'website' },
  alternates: { canonical: '/gtm-consultant-san-francisco' },
}

export default function GTMSFPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Pressense - GTM Consultant San Francisco', areaServed: 'San Francisco, CA' }
  return (<><StructuredData data={schema} /><main className="min-h-screen"><section className="max-w-4xl mx-auto px-6 lg:px-10 py-16"><h1 className="text-4xl font-bold mb-6">Go-to-Market Strategy Consultant in San Francisco</h1><p className="text-xl text-muted-foreground mb-8">GTM strategy for SF SaaS startups. ICP, positioning, pricing, 90-day roadmap.</p></section></main></>)
}
