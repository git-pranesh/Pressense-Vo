import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
})

export async function getServicePage(slug: string) {
  return client.fetch(
    `*[_type == "servicePage" && slug.current == $slug][0]`,
    { slug }
  )
}

export async function getAllServicePages() {
  return client.fetch(`*[_type == "servicePage"] | order(title asc)`)
}
