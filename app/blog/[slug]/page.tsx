import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StructuredData } from '@/components/structured-data'
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog/cms'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found | Pressense Blog',
    }
  }

  return {
    title: `${post.title} | Pressense Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: post.featuredImage
        ? [{ url: post.featuredImage, width: 1200, height: 630, alt: post.title }]
        : [{ url: '/og-image.jpg', width: 1200, height: 630, alt: post.title }],
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  }
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// Simple markdown-like rendering (for sample posts)
// In production, use a proper markdown renderer or the CMS's HTML output
function renderContent(content: string): string {
  return content
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl sm:text-4xl font-bold mt-12 mb-6 text-foreground">$1</h1>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold mt-10 mb-4 text-foreground">$1</h2>')
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-8 mb-3 text-foreground">$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>')
    .replace(/^- (.*$)/gim, '<li class="ml-4 text-muted-foreground">$1</li>')
    .replace(/(<li.*<\/li>\n?)+/g, '<ul class="my-4 space-y-2 list-disc list-inside">$&</ul>')
    .replace(/^(?!<[hula])(.*$)/gim, (match) => {
      if (match.trim() === '') return ''
      if (match.startsWith('<')) return match
      return `<p class="text-muted-foreground leading-relaxed mb-4">${match}</p>`
    })
    .replace(/<\/ul>\n<ul/g, '</ul><ul')
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: post.author
      ? {
          '@type': 'Person',
          name: post.author.name,
        }
      : {
          '@type': 'Organization',
          name: 'Pressense',
        },
    publisher: {
      '@type': 'Organization',
      name: 'Pressense',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pressense.co/icon.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://pressense.co/blog/${post.slug}`,
    },
    image: post.featuredImage || 'https://pressense.co/og-image.jpg',
  }

  return (
    <>
      <StructuredData data={schema} />
      <Header />
      <main className="min-h-screen">
        {/* Article Header */}
        <article className="py-20 sm:py-28 px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            {/* Back link */}
            <Link
              href="/blog"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Blog
            </Link>

            {/* Meta */}
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              {post.category && (
                <>
                  <span className="text-border">|</span>
                  <span>{post.category}</span>
                </>
              )}
              {post.readingTime && (
                <>
                  <span className="text-border">|</span>
                  <span>{post.readingTime} min read</span>
                </>
              )}
            </div>

            {/* Title */}
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              {post.title}
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {post.description}
            </p>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Content */}
            <div
              className="mt-12 prose prose-neutral dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
            />

            {/* Author */}
            {post.author && (
              <div className="mt-12 pt-8 border-t border-border/40">
                <div className="flex items-center gap-4">
                  {post.author.avatar && (
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-12 h-12 rounded-full"
                    />
                  )}
                  <div>
                    <p className="font-medium text-foreground">{post.author.name}</p>
                    <p className="text-sm text-muted-foreground">Author</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </article>

        {/* CTA */}
        <section className="py-16 px-6 lg:px-10 border-t border-border/40 bg-muted/30">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
              Need help with this?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Start with a diagnostic. We will identify what is broken and build a plan to fix it.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/diagnostic"
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Start Your Diagnostic
              </Link>
              <Link
                href="/blog"
                className="px-6 py-3 rounded-full border border-border text-foreground font-medium hover:bg-muted/50 transition-colors"
              >
                More Articles
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
