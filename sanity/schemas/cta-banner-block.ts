import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'ctaBannerBlock',
  title: 'CTA Banner Block',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Get Started',
    }),
    defineField({
      name: 'buttonHref',
      title: 'Button Link',
      type: 'string',
      initialValue: '/contact',
    }),
    defineField({
      name: 'variant',
      title: 'Style Variant',
      type: 'string',
      options: {
        list: [
          { title: 'Primary (Dark)', value: 'primary' },
          { title: 'Secondary (Light)', value: 'secondary' },
        ],
      },
      initialValue: 'primary',
    }),
  ],
  preview: {
    select: { title: 'title' },
    prepare({ title }) {
      return { title: title || 'CTA Banner', subtitle: 'Call to Action' }
    },
  },
})
