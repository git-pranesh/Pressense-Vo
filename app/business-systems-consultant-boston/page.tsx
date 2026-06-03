import { StructuredData } from '@/components/structured-data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Business Systems Consultant in Boston | Pressense',
  description: 'Business systems and operations consulting for Boston-based companies.',
  openGraph: { title: 'Business Systems Consultant in Boston | Pressense', url: '/business-systems-consultant-boston', type: 'website' },
  alternates: { canonical: '/business-systems-consultant-boston' },
}

export default function SystemsBostonPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Pressense - Business Systems Consultant Boston', areaServed: 'Boston, MA' }
  return (<><StructuredData data={schema} /><main className="min-h-screen"><section className="max-w-4xl mx-auto px-6 lg:px-10 py-16"><h1 className="text-4xl font-bold mb-6">Business Systems Consultant in Boston</h1><p className="text-xl text-muted-foreground mb-8">Operations and systems consulting for Boston companies.</p></section></main></>)
}
