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
