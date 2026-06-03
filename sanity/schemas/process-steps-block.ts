import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'processStepsBlock',
  title: 'Process Steps Block',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Our Process',
    }),
    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'step',
          title: 'Step',
          fields: [
            {
              name: 'title',
              title: 'Step Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            },
          ],
          preview: {
            select: { title: 'title' },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'title', steps: 'steps' },
    prepare({ title, steps }) {
      return {
        title: title || 'Process Steps',
        subtitle: `${steps?.length || 0} steps`,
      }
    },
  },
})
