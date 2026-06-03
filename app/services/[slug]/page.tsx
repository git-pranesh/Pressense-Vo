import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getServicePage, getAllServicePageSlugs } from '@/lib/sanity.queries'
import { BlockMapper } from '@/components/sanity/blocks/block-mapper'

interface ServicePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const page = await getServicePage(slug)

  if (!page) {
    return {
      title: 'Page Not Found',
    }
  }

  return {
    title: page.metaTitle || page.title,
    description: page.metaDescription,
    openGraph: {
      title: page.metaTitle || page.title,
      description: page.metaDescription,
      ...(page.ogImage && { images: [{ url: page.ogImage }] }),
    },
    ...(page.canonicalUrl && { alternates: { canonical: page.canonicalUrl } }),
  }
}

export async function generateStaticParams() {
  const slugs = await getAllServicePageSlugs()
  return slugs.map((item: { slug: string }) => ({
    slug: item.slug,
  }))
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const page = await getServicePage(slug)

  if (!page) {
    notFound()
  }

  return (
    <main className="w-full">
      <BlockMapper blocks={page.blocks} />
    </main>
  )
}
