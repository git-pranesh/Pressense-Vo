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
