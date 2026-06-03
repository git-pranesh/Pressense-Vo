import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'statsGridBlock',
  title: 'Stats Grid Block',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'stat',
          title: 'Stat',
          fields: [
            {
              name: 'value',
              title: 'Value',
              type: 'string',
              description: 'e.g., "500+", "99%", "$2M"',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'e.g., "Clients Served", "Satisfaction Rate"',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: { value: 'value', label: 'label' },
            prepare({ value, label }) {
              return { title: value, subtitle: label }
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(2).max(4),
    }),
  ],
  preview: {
    select: { title: 'title', stats: 'stats' },
    prepare({ title, stats }) {
      return {
        title: title || 'Stats Grid',
        subtitle: `${stats?.length || 0} stats`,
      }
    },
  },
})
