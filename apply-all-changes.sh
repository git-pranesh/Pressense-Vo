#!/bin/bash
# Run this from your repo root: bash apply-all-changes.sh

echo "Creating directories..."
mkdir -p app/services/\[slug\]
mkdir -p app/tools
mkdir -p lib
mkdir -p sanity/schemas
mkdir -p components/sanity/blocks

echo "Writing files..."

# ─── app/tools/layout.tsx ──────────────────────────────────────────────────
cat > app/tools/layout.tsx << 'EOF'
export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
EOF

# ─── app/services/[slug]/page.tsx ──────────────────────────────────────────
cat > 'app/services/[slug]/page.tsx' << 'EOF'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getServicePage, getAllServicePageSlugs } from '@/lib/sanity.queries'
import { BlockMapper } from '@/components/sanity/blocks/block-mapper'

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  try {
    const page = await getServicePage(slug)
    if (!page) return { title: 'Page Not Found' }
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
  } catch {
    return { title: 'Pressense' }
  }
}

export async function generateStaticParams() {
  try {
    const slugs = await getAllServicePageSlugs()
    return slugs.map((item: { slug: string }) => ({ slug: item.slug }))
  } catch {
    return []
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  try {
    const page = await getServicePage(slug)
    if (!page) notFound()
    return (
      <main className="w-full pt-16">
        <BlockMapper blocks={page.blocks} />
      </main>
    )
  } catch {
    notFound()
  }
}
EOF

# ─── lib/sanity.client.ts ──────────────────────────────────────────────────
cat > lib/sanity.client.ts << 'EOF'
import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'y76oqjwa'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = '2024-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
  ignoreBrowserTokenWarning: true,
})
EOF

# ─── lib/sanity.queries.ts ─────────────────────────────────────────────────
cat > lib/sanity.queries.ts << 'EOF'
import { client } from './sanity.client'

// ─── Service Pages ─────────────────────────────────────────────────────────

export async function getServicePage(slug: string) {
  const query = `*[_type == "servicePage" && slug.current == $slug][0]{
    _id, _type, title, slug, metaDescription, metaTitle,
    ogImage, canonicalUrl, noIndex,
    blocks[]{ _type, _key, ... }
  }`
  return await client.fetch(query, { slug })
}

export async function getAllServicePageSlugs() {
  return await client.fetch(`*[_type == "servicePage"]{ "slug": slug.current }`)
}

// ─── Blog Posts ────────────────────────────────────────────────────────────

export async function getAllBlogPosts() {
  const query = `*[_type == "blogPost" && !noIndex] | order(publishedAt desc){
    "slug": slug.current, title, description, publishedAt,
    category, tags, readingTime,
    "featuredImage": featuredImage.asset->url,
  }`
  return await client.fetch(query)
}

export async function getBlogPost(slug: string) {
  const query = `*[_type == "blogPost" && slug.current == $slug][0]{
    _id, title, "slug": slug.current, description, publishedAt, updatedAt,
    category, tags, readingTime, "featuredImage": featuredImage.asset->url,
    content, metaTitle, metaDescription, canonicalUrl, noIndex, author,
  }`
  return await client.fetch(query, { slug })
}

export async function getAllBlogSlugs() {
  return await client.fetch(`*[_type == "blogPost" && !noIndex]{ "slug": slug.current }`)
}

// ─── Playbooks ─────────────────────────────────────────────────────────────

export async function getAllPlaybooks() {
  const query = `*[_type == "playbook" && !noIndex] | order(publishedAt desc){
    "slug": slug.current, title, description, publishedAt, estimatedTime,
  }`
  return await client.fetch(query)
}

export async function getPlaybook(slug: string) {
  const query = `*[_type == "playbook" && slug.current == $slug][0]{
    _id, title, "slug": slug.current, description, publishedAt,
    estimatedTime, steps, relatedService, metaTitle, metaDescription, noIndex,
  }`
  return await client.fetch(query, { slug })
}

export async function getAllPlaybookSlugs() {
  return await client.fetch(`*[_type == "playbook" && !noIndex]{ "slug": slug.current }`)
}
EOF

# ─── sanity/schemas/index.ts ───────────────────────────────────────────────
cat > sanity/schemas/index.ts << 'EOF'
import servicePage from './service-page'
import blogPost from './blog-post'
import playbook from './playbook'
import heroBlock from './hero-block'
import richTextBlock from './rich-text-block'
import faqBlock from './faq-block'
import processStepsBlock from './process-steps-block'
import ctaBannerBlock from './cta-banner-block'
import statsGridBlock from './stats-grid-block'
import comparisonTableBlock from './comparison-table-block'
import testimonialsBlock from './testimonials-block'
import imageTextBlock from './image-text-block'
import whoItsForBlock from './who-its-for-block'
import videoBlock from './video-block'

export const schemaTypes = [
  servicePage, blogPost, playbook,
  heroBlock, richTextBlock, faqBlock, processStepsBlock,
  ctaBannerBlock, statsGridBlock, comparisonTableBlock,
  testimonialsBlock, imageTextBlock, whoItsForBlock, videoBlock,
]
EOF

# ─── sanity/schemas/service-page.ts ───────────────────────────────────────
cat > sanity/schemas/service-page.ts << 'EOF'
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'servicePage',
  title: 'Service Page',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({ name: 'title', title: 'Page Title', type: 'string', group: 'content', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', group: 'content', options: { source: 'title', maxLength: 96 }, validation: (Rule) => Rule.required() }),
    defineField({
      name: 'blocks',
      title: 'Page Blocks',
      description: 'Add, remove, and reorder blocks to build the page.',
      type: 'array',
      group: 'content',
      of: [
        { type: 'heroBlock' }, { type: 'richTextBlock' }, { type: 'faqBlock' },
        { type: 'processStepsBlock' }, { type: 'ctaBannerBlock' }, { type: 'statsGridBlock' },
        { type: 'comparisonTableBlock' }, { type: 'testimonialsBlock' },
        { type: 'imageTextBlock' }, { type: 'whoItsForBlock' }, { type: 'videoBlock' },
      ],
    }),
    defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string', group: 'seo', validation: (Rule) => Rule.max(60).warning('Under 60 chars') }),
    defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3, group: 'seo', validation: (Rule) => Rule.max(160).warning('Under 160 chars') }),
    defineField({ name: 'canonicalUrl', title: 'Canonical URL', type: 'url', group: 'seo' }),
    defineField({ name: 'noIndex', title: 'No Index', type: 'boolean', group: 'seo', initialValue: false }),
  ],
  preview: {
    select: { title: 'title', slug: 'slug.current' },
    prepare({ title, slug }) { return { title, subtitle: slug ? `/services/${slug}` : 'No slug' } },
  },
})
EOF

# ─── sanity/schemas/comparison-table-block.ts ─────────────────────────────
cat > sanity/schemas/comparison-table-block.ts << 'EOF'
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'comparisonTableBlock',
  title: 'Comparison Table Block',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Section Title', type: 'string' }),
    defineField({ name: 'leftLabel', title: 'Left Column Label', type: 'string', description: 'E.g. "Pressense"' }),
    defineField({ name: 'rightLabel', title: 'Right Column Label', type: 'string', description: 'E.g. "Traditional Agency"' }),
    defineField({
      name: 'rows', title: 'Comparison Rows', type: 'array',
      of: [{
        type: 'object', name: 'comparisonRow',
        fields: [
          { name: 'feature', title: 'Feature / Criteria', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'left', title: 'Left Column Value', type: 'string' },
          { name: 'right', title: 'Right Column Value', type: 'string' },
          { name: 'leftPositive', title: 'Left is winner', type: 'boolean', initialValue: true },
        ],
        preview: { select: { title: 'feature' } },
      }],
    }),
  ],
  preview: {
    select: { title: 'title', left: 'leftLabel', right: 'rightLabel' },
    prepare({ title, left, right }) { return { title: title || 'Comparison Table', subtitle: `${left || '?'} vs ${right || '?'}` } },
  },
})
EOF

# ─── sanity/schemas/testimonials-block.ts ─────────────────────────────────
cat > sanity/schemas/testimonials-block.ts << 'EOF'
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'testimonialsBlock',
  title: 'Testimonials Block',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Section Title', type: 'string', initialValue: 'What Our Clients Say' }),
    defineField({
      name: 'testimonials', title: 'Testimonials', type: 'array',
      of: [{
        type: 'object', name: 'testimonial',
        fields: [
          { name: 'quote', title: 'Quote', type: 'text', rows: 4, validation: (Rule) => Rule.required() },
          { name: 'name', title: 'Client Name', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'role', title: 'Role / Title', type: 'string' },
          { name: 'company', title: 'Company', type: 'string' },
          { name: 'avatar', title: 'Avatar Image', type: 'image' },
        ],
        preview: { select: { title: 'name', subtitle: 'company' } },
      }],
    }),
  ],
  preview: {
    select: { title: 'title', testimonials: 'testimonials' },
    prepare({ title, testimonials }) { return { title: title || 'Testimonials', subtitle: `${testimonials?.length || 0} testimonials` } },
  },
})
EOF

# ─── sanity/schemas/image-text-block.ts ───────────────────────────────────
cat > sanity/schemas/image-text-block.ts << 'EOF'
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'imageTextBlock',
  title: 'Image + Text Block',
  type: 'object',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow Text', type: 'string' }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'body', title: 'Body Text', type: 'text', rows: 5 }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'imagePosition', title: 'Image Position', type: 'string',
      options: { list: [{ title: 'Image Left', value: 'left' }, { title: 'Image Right', value: 'right' }], layout: 'radio' },
      initialValue: 'right',
    }),
    defineField({ name: 'cta', title: 'CTA Button', type: 'object', fields: [{ name: 'text', title: 'Button Text', type: 'string' }, { name: 'href', title: 'Link URL', type: 'string' }] }),
    defineField({ name: 'bullets', title: 'Bullet Points', type: 'array', of: [{ type: 'string' }] }),
  ],
  preview: { select: { title: 'title' }, prepare({ title }) { return { title: title || 'Image + Text Block' } } },
})
EOF

# ─── sanity/schemas/who-its-for-block.ts ──────────────────────────────────
cat > sanity/schemas/who-its-for-block.ts << 'EOF'
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'whoItsForBlock',
  title: '"Who This Is For" Block',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Section Title', type: 'string', initialValue: 'Who This Is For' }),
    defineField({
      name: 'scenarios', title: 'Scenarios / Personas', type: 'array',
      of: [{
        type: 'object', name: 'scenario',
        fields: [
          { name: 'label', title: 'Label / Persona Name', type: 'string' },
          { name: 'description', title: 'Description', type: 'text', rows: 3 },
          { name: 'icon', title: 'Icon (emoji)', type: 'string' },
        ],
        preview: { select: { title: 'label' } },
      }],
      validation: (Rule) => Rule.min(1).max(6),
    }),
    defineField({ name: 'notForTitle', title: '"Not For" Title', type: 'string' }),
    defineField({ name: 'notForItems', title: '"Not For" Items', type: 'array', of: [{ type: 'string' }] }),
  ],
  preview: {
    select: { title: 'title', scenarios: 'scenarios' },
    prepare({ title, scenarios }) { return { title: title || 'Who This Is For', subtitle: `${scenarios?.length || 0} scenarios` } },
  },
})
EOF

# ─── sanity/schemas/video-block.ts ────────────────────────────────────────
cat > sanity/schemas/video-block.ts << 'EOF'
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'videoBlock',
  title: 'Video Block',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Section Title', type: 'string' }),
    defineField({ name: 'url', title: 'Video URL', type: 'url', description: 'YouTube, Loom, or Vimeo URL', validation: (Rule) => Rule.required() }),
    defineField({ name: 'caption', title: 'Caption', type: 'string' }),
  ],
  preview: { select: { title: 'title', url: 'url' }, prepare({ title, url }) { return { title: title || 'Video Block', subtitle: url } } },
})
EOF

# ─── components/sanity/blocks/block-mapper.tsx ────────────────────────────
cat > components/sanity/blocks/block-mapper.tsx << 'EOF'
import { HeroBlock } from './hero-block'
import { RichTextBlock } from './rich-text-block'
import { FAQBlock } from './faq-block'
import { ProcessStepsBlock } from './process-steps-block'
import { CTABannerBlock } from './cta-banner-block'
import { StatsGridBlock } from './stats-grid-block'
import { ComparisonTableBlock } from './comparison-table-block'
import { TestimonialsBlock } from './testimonials-block'
import { ImageTextBlock } from './image-text-block'
import { WhoItsForBlock } from './who-its-for-block'
import { VideoBlock } from './video-block'

interface Block { _type: string; _key: string; [key: string]: any }
interface BlockMapperProps { blocks?: Block[] }

export function BlockMapper({ blocks }: BlockMapperProps) {
  if (!blocks || blocks.length === 0) {
    return <div className="p-8 text-center text-muted-foreground">No content available</div>
  }
  return (
    <>
      {blocks.map((block) => {
        switch (block._type) {
          case 'heroBlock':
            return <HeroBlock key={block._key} eyebrow={block.eyebrow} title={block.title} subtitle={block.subtitle} primaryCta={block.primaryCta} secondaryCta={block.secondaryCta} />
          case 'richTextBlock':
            return <RichTextBlock key={block._key} content={block.content} alignment={block.alignment} />
          case 'faqBlock':
            return <FAQBlock key={block._key} title={block.title} items={block.items} />
          case 'processStepsBlock':
            return <ProcessStepsBlock key={block._key} title={block.title} steps={block.steps} />
          case 'ctaBannerBlock':
            return <CTABannerBlock key={block._key} title={block.title} description={block.description} ctaText={block.ctaText} ctaUrl={block.ctaUrl} backgroundColor={block.backgroundColor} />
          case 'statsGridBlock':
            return <StatsGridBlock key={block._key} title={block.title} stats={block.stats} columns={block.columns} />
          case 'comparisonTableBlock':
            return <ComparisonTableBlock key={block._key} title={block.title} leftLabel={block.leftLabel} rightLabel={block.rightLabel} rows={block.rows} />
          case 'testimonialsBlock':
            return <TestimonialsBlock key={block._key} title={block.title} testimonials={block.testimonials} />
          case 'imageTextBlock':
            return <ImageTextBlock key={block._key} eyebrow={block.eyebrow} title={block.title} body={block.body} image={block.image} imagePosition={block.imagePosition} cta={block.cta} bullets={block.bullets} />
          case 'whoItsForBlock':
            return <WhoItsForBlock key={block._key} title={block.title} scenarios={block.scenarios} notForTitle={block.notForTitle} notForItems={block.notForItems} />
          case 'videoBlock':
            return <VideoBlock key={block._key} title={block.title} url={block.url} caption={block.caption} />
          default:
            return (
              <div key={block._key} className="p-4 bg-yellow-50/10 border border-yellow-500/20 rounded m-4">
                <p className="text-yellow-500 text-sm">Unknown block type: {block._type}</p>
              </div>
            )
        }
      })}
    </>
  )
}
EOF

# ─── components/sanity/blocks/hero-block.tsx ──────────────────────────────
cat > components/sanity/blocks/hero-block.tsx << 'EOF'
import Link from 'next/link'

interface CTA { text?: string; href?: string }

interface HeroBlockProps {
  eyebrow?: string
  title?: string
  subtitle?: string
  description?: string
  primaryCta?: CTA
  secondaryCta?: CTA
  ctaText?: string
  ctaUrl?: string
  ctaText2?: string
  ctaUrl2?: string
}

export function HeroBlock({ eyebrow, title, subtitle, description, primaryCta, secondaryCta, ctaText, ctaUrl, ctaText2, ctaUrl2 }: HeroBlockProps) {
  const primary = primaryCta?.text ? primaryCta : ctaText ? { text: ctaText, href: ctaUrl } : null
  const secondary = secondaryCta?.text ? secondaryCta : ctaText2 ? { text: ctaText2, href: ctaUrl2 } : null

  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden pt-20 pb-16 px-6 lg:px-10">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
      <div className="relative max-w-4xl mx-auto text-center">
        {eyebrow && (
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary/80 tracking-wider uppercase mb-6">
            {eyebrow}
          </p>
        )}
        {title && <h1 className="text-4xl lg:text-6xl font-semibold text-foreground tracking-tight mb-6 text-balance">{title}</h1>}
        {(subtitle || description) && (
          <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance leading-relaxed">
            {subtitle || description}
          </p>
        )}
        {(primary || secondary) && (
          <div className="flex flex-wrap gap-4 justify-center">
            {primary && (
              <Link href={primary.href || '/diagnostic'} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-colors">
                {primary.text}
              </Link>
            )}
            {secondary && (
              <Link href={secondary.href || '#'} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold border border-border/60 text-foreground hover:border-primary/40 transition-colors">
                {secondary.text}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
EOF

# ─── components/sanity/blocks/comparison-table-block.tsx ──────────────────
cat > components/sanity/blocks/comparison-table-block.tsx << 'EOF'
import { CheckCircle, XCircle } from 'lucide-react'

interface ComparisonRow { feature: string; left: string; right: string; leftPositive?: boolean }
interface Props { title?: string; leftLabel?: string; rightLabel?: string; rows?: ComparisonRow[] }

export function ComparisonTableBlock({ title, leftLabel = 'Pressense', rightLabel = 'Alternative', rows = [] }: Props) {
  return (
    <section className="py-16 px-6 lg:px-10 max-w-4xl mx-auto">
      {title && <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">{title}</h2>}
      <div className="border border-border/60 rounded-xl overflow-hidden">
        <div className="grid grid-cols-3 bg-secondary/40 px-6 py-4">
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Feature</div>
          <div className="text-xs font-semibold uppercase tracking-widest text-primary text-center">{leftLabel}</div>
          <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground text-center">{rightLabel}</div>
        </div>
        {rows.map((row, i) => (
          <div key={i} className={`grid grid-cols-3 px-6 py-4 border-t border-border/40 ${i % 2 === 0 ? '' : 'bg-secondary/10'}`}>
            <div className="text-sm text-foreground font-medium">{row.feature}</div>
            <div className="text-sm text-center flex items-center justify-center gap-1.5">
              {row.leftPositive !== false ? <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" /> : <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />}
              <span className="text-muted-foreground">{row.left}</span>
            </div>
            <div className="text-sm text-muted-foreground text-center">{row.right}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
EOF

# ─── components/sanity/blocks/testimonials-block.tsx ──────────────────────
cat > components/sanity/blocks/testimonials-block.tsx << 'EOF'
interface Testimonial { quote: string; name: string; role?: string; company?: string }
interface Props { title?: string; testimonials?: Testimonial[] }

export function TestimonialsBlock({ title = 'What Our Clients Say', testimonials = [] }: Props) {
  if (!testimonials.length) return null
  return (
    <section className="py-16 px-6 lg:px-10 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold text-foreground mb-10 text-center">{title}</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <div key={i} className="glass-card rounded-xl border border-border/60 p-6 flex flex-col gap-4">
            <p className="text-sm text-muted-foreground leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-auto">
              <p className="text-sm font-semibold text-foreground">{t.name}</p>
              {(t.role || t.company) && <p className="text-xs text-muted-foreground">{[t.role, t.company].filter(Boolean).join(' · ')}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
EOF

# ─── components/sanity/blocks/image-text-block.tsx ────────────────────────
cat > components/sanity/blocks/image-text-block.tsx << 'EOF'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

interface Props { eyebrow?: string; title?: string; body?: string; image?: any; imagePosition?: 'left' | 'right'; cta?: { text: string; href: string }; bullets?: string[] }

export function ImageTextBlock({ eyebrow, title, body, imagePosition = 'right', cta, bullets }: Props) {
  return (
    <section className="py-16 px-6 lg:px-10 max-w-6xl mx-auto">
      <div className={`flex flex-col lg:flex-row gap-12 items-center ${imagePosition === 'left' ? 'lg:flex-row-reverse' : ''}`}>
        <div className="flex-1">
          {eyebrow && <p className="text-xs font-semibold tracking-widest uppercase text-primary/70 mb-3">{eyebrow}</p>}
          {title && <h2 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4">{title}</h2>}
          {body && <p className="text-muted-foreground leading-relaxed mb-6">{body}</p>}
          {bullets && bullets.length > 0 && (
            <ul className="space-y-2 mb-6">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />{b}
                </li>
              ))}
            </ul>
          )}
          {cta?.href && (
            <Link href={cta.href} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:bg-highlight transition-colors">
              {cta.text || 'Learn More'}
            </Link>
          )}
        </div>
        <div className="flex-1 w-full">
          <div className="aspect-video bg-secondary/30 rounded-xl border border-border/40 flex items-center justify-center">
            <p className="text-muted-foreground text-sm">Image placeholder</p>
          </div>
        </div>
      </div>
    </section>
  )
}
EOF

# ─── components/sanity/blocks/who-its-for-block.tsx ───────────────────────
cat > components/sanity/blocks/who-its-for-block.tsx << 'EOF'
import { XCircle } from 'lucide-react'

interface Scenario { label: string; description: string; icon?: string }
interface Props { title?: string; scenarios?: Scenario[]; notForTitle?: string; notForItems?: string[] }

export function WhoItsForBlock({ title = 'Who This Is For', scenarios = [], notForTitle, notForItems = [] }: Props) {
  return (
    <section className="py-16 px-6 lg:px-10 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold text-foreground mb-8">{title}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-10">
        {scenarios.map((s, i) => (
          <div key={i} className="glass-card rounded-xl border border-border/60 p-5">
            {s.icon && <span className="text-2xl mb-3 block">{s.icon}</span>}
            <p className="text-sm font-semibold text-foreground mb-1.5">{s.label}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
      {notForItems.length > 0 && (
        <div>
          <p className="text-sm font-semibold text-muted-foreground mb-3">{notForTitle || 'This is NOT for you if...'}</p>
          <ul className="space-y-1.5">
            {notForItems.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />{item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}
EOF

# ─── components/sanity/blocks/video-block.tsx ─────────────────────────────
cat > components/sanity/blocks/video-block.tsx << 'EOF'
function getEmbedUrl(url: string): string {
  if (url.includes('youtube.com/watch')) return `https://www.youtube.com/embed/${new URL(url).searchParams.get('v')}`
  if (url.includes('youtu.be/')) return `https://www.youtube.com/embed/${url.split('youtu.be/')[1].split('?')[0]}`
  if (url.includes('vimeo.com/')) return `https://player.vimeo.com/video/${url.split('vimeo.com/')[1].split('?')[0]}`
  if (url.includes('loom.com/share/')) return `https://www.loom.com/embed/${url.split('loom.com/share/')[1].split('?')[0]}`
  return url
}

interface Props { title?: string; url: string; caption?: string }

export function VideoBlock({ title, url, caption }: Props) {
  return (
    <section className="py-16 px-6 lg:px-10 max-w-4xl mx-auto">
      {title && <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">{title}</h2>}
      <div className="aspect-video rounded-xl overflow-hidden border border-border/60">
        <iframe src={getEmbedUrl(url)} className="w-full h-full" allowFullScreen title={title || 'Video'} />
      </div>
      {caption && <p className="text-sm text-muted-foreground text-center mt-3">{caption}</p>}
    </section>
  )
}
EOF

# ─── components/sanity/blocks/index.ts ────────────────────────────────────
cat > components/sanity/blocks/index.ts << 'EOF'
export { HeroBlock } from './hero-block'
export { RichTextBlock } from './rich-text-block'
export { FAQBlock } from './faq-block'
export { ProcessStepsBlock } from './process-steps-block'
export { CTABannerBlock } from './cta-banner-block'
export { StatsGridBlock } from './stats-grid-block'
export { ComparisonTableBlock } from './comparison-table-block'
export { TestimonialsBlock } from './testimonials-block'
export { ImageTextBlock } from './image-text-block'
export { WhoItsForBlock } from './who-its-for-block'
export { VideoBlock } from './video-block'
export { BlockMapper } from './block-mapper'
EOF

echo ""
echo "✅ Done. 18 files created."
echo ""
echo "Next steps:"
echo "1. git add -A"
echo "2. git commit -m 'feat: add Sanity block components and schema files'"
echo "3. git push"
