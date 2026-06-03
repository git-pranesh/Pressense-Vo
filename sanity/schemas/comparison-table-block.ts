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
