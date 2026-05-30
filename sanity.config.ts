import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/plugins/content-structure'
import { schemaTypes } from './sanity/schema'

export default defineConfig({
  name: 'pressense-cms',
  title: 'Pressense CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [structureTool()],
  schema: { types: schemaTypes },
  basePath: '/studio',
})
