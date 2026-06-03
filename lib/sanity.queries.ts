import { client } from './sanity.client'

export async function getServicePage(slug: string) {
  const query = `*[_type == "servicePage" && slug.current == $slug][0]{
    _id,
    _type,
    title,
    slug,
    metaDescription,
    metaTitle,
    ogImage,
    canonicalUrl,
    blocks[]{
      _type,
      _key,
      ...
    }
  }`
  
  return await client.fetch(query, { slug })
}

export async function getAllServicePageSlugs() {
  const query = `*[_type == "servicePage"]{ "slug": slug.current }`
  return await client.fetch(query)
}
