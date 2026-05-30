import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StructuredData } from '@/components/structured-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fractional CMO in New York | Part-Time Marketing Leadership | Pressense',
  description: 'Fractional CMO services for NYC startups. Executive marketing strategy and leadership on demand.',
  openGraph: { title: 'Fractional CMO in New York | Pressense', url: '/fractional-cmo-new-york', type: 'website' },
  alternates: { canonical: '/fractional-cmo-new-york' },
}

export default function CMONYPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Pressense - Fractional CMO New York', areaServed: 'New York, NY' }
  return (<><StructuredData data={schema} /><Header /><main className="min-h-screen"><section className="max-w-4xl mx-auto px-6 lg:px-10 py-16"><h1 className="text-4xl font-bold mb-6">Fractional CMO in New York</h1><p className="text-xl text-muted-foreground mb-8">Part-time marketing leadership for NYC-based startups.</p></section></main><Footer /></>)
}
