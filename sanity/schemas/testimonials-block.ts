import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'testimonialsBlock',
  title: 'Testimonials Block',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Section Title', type: 'string', initialValue: 'What Our Clients Say' }),
    defineField({
      name: 'testimonials', title: 'Testimonials', type: 'array',
      of: [{
        type: 'object', name: 'testimonial',
        fields: [
          { name: 'quote', title: 'Quote', type: 'text', rows: 4, validation: (Rule) => Rule.required() },
          { name: 'name', title: 'Client Name', type: 'string', validation: (Rule) => Rule.required() },
          { name: 'role', title: 'Role / Title', type: 'string' },
          { name: 'company', title: 'Company', type: 'string' },
          { name: 'avatar', title: 'Avatar Image', type: 'image' },
        ],
        preview: { select: { title: 'name', subtitle: 'company' } },
      }],
    }),
  ],
  preview: {
    select: { title: 'title', testimonials: 'testimonials' },
    prepare({ title, testimonials }) { return { title: title || 'Testimonials', subtitle: `${testimonials?.length || 0} testimonials` } },
  },
})
