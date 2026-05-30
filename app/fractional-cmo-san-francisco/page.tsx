import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StructuredData } from '@/components/structured-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fractional CMO in San Francisco | Part-Time Marketing Leader | Pressense',
  description: 'Part-time fractional CMO services for San Francisco startups. Executive marketing leadership without full-time cost.',
  openGraph: { title: 'Fractional CMO in San Francisco | Pressense', url: '/fractional-cmo-san-francisco', type: 'website' },
  alternates: { canonical: '/fractional-cmo-san-francisco' },
}

export default function CMOSFPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Pressense - Fractional CMO San Francisco', areaServed: 'San Francisco, CA' }
  return (<><StructuredData data={schema} /><Header /><main className="min-h-screen"><section className="max-w-4xl mx-auto px-6 lg:px-10 py-16"><h1 className="text-4xl font-bold mb-6">Fractional CMO in San Francisco</h1><p className="text-xl text-muted-foreground mb-8">Part-time marketing leadership for SF startups. Strategy, positioning, execution.</p></section></main><Footer /></>)
}
