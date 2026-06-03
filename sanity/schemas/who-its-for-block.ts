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
