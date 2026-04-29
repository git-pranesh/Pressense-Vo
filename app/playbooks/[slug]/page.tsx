import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PlaybookPageTemplate } from '@/components/playbook/playbook-page-template'
import { getPlaybookBySlug, getAllPlaybookSlugs } from '@/lib/playbooks-data'

interface PlaybookPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllPlaybookSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PlaybookPageProps): Promise<Metadata> {
  const { slug } = await params
  const playbook = getPlaybookBySlug(slug)
  
  if (!playbook) {
    return {
      title: 'Playbook Not Found | Pressense',
    }
  }

  return {
    title: `${playbook.title} | Playbook | Pressense`,
    description: playbook.subheadline,
    alternates: {
      canonical: `/playbooks/${slug}`,
    },
    openGraph: {
      title: `${playbook.title} | Playbook`,
      description: playbook.subheadline,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${playbook.title} | Playbook`,
      description: playbook.subheadline,
    },
  }
}

export default async function PlaybookPage({ params }: PlaybookPageProps) {
  const { slug } = await params
  const playbook = getPlaybookBySlug(slug)

  if (!playbook) {
    notFound()
  }

  return (
    <>
      <Header />
      <main>
        <PlaybookPageTemplate playbook={playbook} />
      </main>
      <Footer />
    </>
  )
}
