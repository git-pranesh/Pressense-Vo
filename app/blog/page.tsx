import { StructuredData } from '@/components/structured-data'
import { getAllPosts } from '@/lib/blog/cms'
import Link from 'next/link'
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

export default async function BlogPage() {
  const posts = await getAllPosts()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Pressense Blog',
    description: 'Insights on AI automation, GTM strategy, business systems, and operational excellence.',
    url: 'https://pressense.co/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Pressense',
    },
    blogPost: posts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      url: `https://pressense.co/blog/${post.slug}`,
      datePublished: post.publishedAt,
    })),
  }

  return (
    <>
      <StructuredData data={schema} />
      
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-20 sm:py-28 px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Blog
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl">
              Practical insights on AI automation, GTM strategy, business systems, and operational excellence. No fluff.
            </p>
          </div>
        </section>

        {/* CMS Status Notice */}
        {!process.env.BLOG_CMS_API_URL && (
          <section className="px-6 lg:px-10 pb-8">
            <div className="max-w-4xl mx-auto">
              <div className="p-4 rounded-xl border border-border/60 bg-muted/30 text-sm text-muted-foreground">
                <strong className="text-foreground">CMS not connected.</strong> Showing sample posts. Set <code className="px-1 py-0.5 rounded bg-muted font-mono text-xs">BLOG_CMS_API_URL</code> and <code className="px-1 py-0.5 rounded bg-muted font-mono text-xs">BLOG_CMS_API_KEY</code> to connect to Frase, Byword, or your custom CMS.
              </div>
            </div>
          </section>
        )}

        {/* Posts Grid */}
        <section className="pb-20 sm:pb-28 px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            {posts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No posts yet. Connect your CMS to start publishing.</p>
              </div>
            ) : (
              <div className="space-y-8">
                {posts.map((post) => (
                  <article key={post.slug} className="group">
                    <Link href={`/blog/${post.slug}`} className="block">
                      <div className="p-6 -mx-6 rounded-2xl hover:bg-muted/30 transition-colors">
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
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
                        <h2 className="mt-3 text-xl sm:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                        <p className="mt-2 text-muted-foreground leading-relaxed">
                          {post.description}
                        </p>
                        {post.tags && post.tags.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 lg:px-10 border-t border-border/40">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
              Need help with your business?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Start with a diagnostic. We will identify what is broken and build a plan to fix it.
            </p>
            <Link
              href="/diagnostic"
              className="inline-flex mt-6 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Start Your Diagnostic
            </Link>
          </div>
        </section>
      </main>
      
    </>
  )
}
