# Sanity CMS Schema Setup

This guide shows you the schemas you need to create in your Sanity Studio to use the modular page builder.

## Main Schema: Service Page

Create a new document type called `servicePage`:

```javascript
export default {
  name: 'servicePage',
  title: 'Service Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'metaTitle',
      title: 'Meta Title (55-60 chars)',
      type: 'string',
      validation: (Rule) => Rule.max(60),
    },
    {
      name: 'metaDescription',
      title: 'Meta Description (150-160 chars)',
      type: 'text',
      validation: (Rule) => Rule.max(160),
    },
    {
      name: 'ogImage',
      title: 'OG Image',
      type: 'image',
    },
    {
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
    },
    {
      name: 'blocks',
      title: 'Page Blocks',
      type: 'array',
      of: [
        { type: 'heroBlock' },
        { type: 'richTextBlock' },
        { type: 'faqBlock' },
        { type: 'processStepsBlock' },
        { type: 'ctaBannerBlock' },
        { type: 'statsGridBlock' },
      ],
    },
  ],
}
```

---

## Block Schemas

### 1. Hero Block

```javascript
export default {
  name: 'heroBlock',
  title: 'Hero Block',
  type: 'object',
  fields: [
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Title (H1)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'ctaText',
      title: 'Primary CTA Text',
      type: 'string',
    },
    {
      name: 'ctaUrl',
      title: 'Primary CTA URL',
      type: 'url',
    },
    {
      name: 'ctaText2',
      title: 'Secondary CTA Text',
      type: 'string',
    },
    {
      name: 'ctaUrl2',
      title: 'Secondary CTA URL',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: 'Hero: ' + selection.title,
      }
    },
  },
}
```

### 2. Rich Text Block

```javascript
export default {
  name: 'richTextBlock',
  title: 'Rich Text Block',
  type: 'object',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent', // Your portable text schema
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'alignment',
      title: 'Text Alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' },
        ],
      },
      initialValue: 'left',
    },
  ],
  preview: {
    select: {
      title: 'content',
    },
    prepare(selection) {
      const block = selection.title && selection.title[0]
      return {
        title: 'Rich Text: ' + (block?.children?.[0]?.text || 'No content'),
      }
    },
  },
}
```

### 3. FAQ Block

```javascript
export default {
  name: 'faqBlock',
  title: 'FAQ Block',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'items',
      title: 'FAQ Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'blockContent', // Your portable text schema
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      itemCount: 'items.length',
    },
    prepare(selection) {
      return {
        title: 'FAQ: ' + selection.title,
        subtitle: selection.itemCount + ' questions',
      }
    },
  },
}
```

### 4. Process Steps Block

```javascript
export default {
  name: 'processStepsBlock',
  title: 'Process Steps Block',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'number',
              title: 'Step Number',
              type: 'number',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      stepCount: 'steps.length',
    },
    prepare(selection) {
      return {
        title: 'Process: ' + selection.title,
        subtitle: selection.stepCount + ' steps',
      }
    },
  },
}
```

### 5. CTA Banner Block

```javascript
export default {
  name: 'ctaBannerBlock',
  title: 'CTA Banner Block',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
    },
    {
      name: 'ctaUrl',
      title: 'CTA Button URL',
      type: 'url',
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: [
          { title: 'Blue', value: 'bg-blue-600' },
          { title: 'Slate', value: 'bg-slate-900' },
          { title: 'Green', value: 'bg-green-600' },
          { title: 'Purple', value: 'bg-purple-600' },
        ],
      },
      initialValue: 'bg-blue-600',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: 'CTA Banner: ' + selection.title,
      }
    },
  },
}
```

### 6. Stats Grid Block

```javascript
export default {
  name: 'statsGridBlock',
  title: 'Stats Grid Block',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'number',
              title: 'Number/Stat',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'columns',
      title: 'Columns',
      type: 'number',
      options: {
        list: [2, 3, 4],
      },
      initialValue: 3,
    },
  ],
  preview: {
    select: {
      title: 'title',
      statCount: 'stats.length',
    },
    prepare(selection) {
      return {
        title: 'Stats: ' + selection.title,
        subtitle: selection.statCount + ' stats',
      }
    },
  },
}
```

---

## Setup Instructions

1. **Create the schemas** above in your Sanity project (in `/schemas/` folder)
2. **Add them to `schema.ts`**:
   ```javascript
   import servicePage from './servicePage'
   import heroBlock from './blocks/heroBlock'
   import richTextBlock from './blocks/richTextBlock'
   import faqBlock from './blocks/faqBlock'
   import processStepsBlock from './blocks/processStepsBlock'
   import ctaBannerBlock from './blocks/ctaBannerBlock'
   import statsGridBlock from './blocks/statsGridBlock'

   export const schemaTypes = [
     servicePage,
     heroBlock,
     richTextBlock,
     faqBlock,
     processStepsBlock,
     ctaBannerBlock,
     statsGridBlock,
   ]
   ```

3. **Deploy your Sanity schema** to your project

4. **Create a Service Page** in Sanity Studio
   - Title: e.g., "AI Automation Agency"
   - Slug: `ai-automation-agency`
   - Add blocks using the modular builder
   - Access at: `/services/ai-automation-agency`

---

## Usage

Once set up, you can:
- Create unlimited service pages in Sanity
- Compose pages from reusable blocks
- Paste content from Frase, Byword, or any SEO tool
- Set SEO fields (meta title, description, canonical URL)
- Reorder, edit, or delete blocks anytime
- No code changes needed
