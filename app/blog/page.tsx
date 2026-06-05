import { redirect } from 'next/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Pressense',
  description: 'Insights on AI automation, GTM strategy, business systems, and operational excellence for growing businesses.',
  openGraph: {
    title: 'Blog | Pressense',
    description: 'Insights on AI automation, GTM strategy, business systems, and operational excellence for growing businesses.',
    url: '/blog',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense Blog' }],
  },
  alternates: {
    canonical: '/blog',
  },
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPage() {
  redirect('/playbooks')
}
