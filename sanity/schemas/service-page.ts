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
