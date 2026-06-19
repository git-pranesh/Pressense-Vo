import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description / Excerpt',
      type: 'text',
      rows: 3,
      group: 'content',
      description: 'Used in blog list and as fallback meta description',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'object',
      group: 'content',
      fields: [
        { name: 'name', title: 'Name', type: 'string' },
        { name: 'avatar', title: 'Avatar', type: 'image' },
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      group: 'content',
      options: {
        list: [
          'AI Automation',
          'GTM & Revenue',
          'Business Systems',
          'Founder Scaling',
          'Tools & Tech',
          'Operations',
        ],
      },
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      group: 'content',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      group: 'content',
      options: { hotspot: true },
    }),
    defineField({
      name: 'readingTime',
      title: 'Reading Time (minutes)',
      type: 'number',
      group: 'content',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [{ name: 'href', type: 'url', title: 'URL' }],
              },
              {
                name: 'internalLink',
                type: 'object',
                title: 'Internal Link',
                fields: [{ name: 'href', type: 'string', title: 'Path (e.g. /blog/slug)' }],
              },
            ],
          },
        },
        { type: 'image', options: { hotspot: true } },
        {
          type: 'object',
          name: 'callout',
          title: 'Callout Box',
          fields: [
            { name: 'type', type: 'string', options: { list: ['info', 'tip', 'warning', 'cta'] } },
            { name: 'content', type: 'text' },
          ],
        },
      ],
    }),
    // SEO
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      group: 'seo',
      validation: (Rule) => Rule.max(60).warning('Keep under 60 chars'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      group: 'seo',
      validation: (Rule) => Rule.max(160).warning('Keep under 160 chars'),
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      group: 'seo',
    }),
    defineField({
      name: 'noIndex',
      title: 'No Index',
      type: 'boolean',
      group: 'seo',
      initialValue: false,
    }),
  ],
  orderings: [
    { title: 'Published, New → Old', name: 'publishedDesc', by: [{ field: 'publishedAt', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'title', slug: 'slug.current', cat: 'category', date: 'publishedAt' },
    prepare({ title, slug, cat, date }) {
      return {
        title,
        subtitle: `${cat || 'Uncategorised'} · ${date ? new Date(date).toLocaleDateString() : 'Draft'}`,
      }
    },
  },
})
