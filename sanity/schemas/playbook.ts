import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'playbook',
  title: 'Playbook',
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
      title: 'Description',
      type: 'text',
      rows: 3,
      group: 'content',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      group: 'content',
    }),
    defineField({
      name: 'estimatedTime',
      title: 'Estimated Time to Complete',
      type: 'string',
      group: 'content',
      description: 'E.g. "30 minutes", "2 hours"',
    }),
    defineField({
      name: 'steps',
      title: 'Playbook Steps',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'object',
          name: 'step',
          fields: [
            { name: 'stepNumber', title: 'Step Number', type: 'number' },
            { name: 'title', title: 'Step Title', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'description', title: 'Description', type: 'text', rows: 4 },
            {
              name: 'content', title: 'Detailed Content', type: 'array',
              of: [{ type: 'block' }, { type: 'image' }],
            },
            {
              name: 'checklist', title: 'Checklist Items', type: 'array',
              of: [{ type: 'string' }],
            },
          ],
          preview: {
            select: { num: 'stepNumber', title: 'title' },
            prepare({ num, title }) {
              return { title: `Step ${num}: ${title}` }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'relatedService',
      title: 'Related Service Page',
      type: 'string',
      group: 'content',
      description: 'Slug of related service (e.g. ai-automation-agency)',
    }),
    // SEO
    defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string', group: 'seo', validation: (Rule) => Rule.max(60) }),
    defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 3, group: 'seo', validation: (Rule) => Rule.max(160) }),
    defineField({ name: 'noIndex', title: 'No Index', type: 'boolean', group: 'seo', initialValue: false }),
  ],
  preview: {
    select: { title: 'title', steps: 'steps' },
    prepare({ title, steps }) {
      return { title, subtitle: `${steps?.length || 0} steps` }
    },
  },
})
