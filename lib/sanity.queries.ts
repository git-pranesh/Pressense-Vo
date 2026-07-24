import { client } from './sanity.client'

// ─── Blog Posts ────────────────────────────────────────────────────────────

export async function getAllBlogPosts() {
  const query = `*[_type == "blogPost" && !noIndex] | order(publishedAt desc){
    "slug": slug.current, title, description, publishedAt,
    category, tags, readingTime,
    "featuredImage": featuredImage.asset->url,
  }`
  return await client.fetch(query)
}

export async function getBlogPost(slug: string) {
  const query = `*[_type == "blogPost" && slug.current == $slug][0]{
    _id, title, "slug": slug.current, description, publishedAt, updatedAt,
    category, tags, readingTime, "featuredImage": featuredImage.asset->url,
    content, metaTitle, metaDescription, canonicalUrl, noIndex, author,
  }`
  return await client.fetch(query, { slug })
}

export async function getAllBlogSlugs() {
  return await client.fetch(`*[_type == "blogPost" && !noIndex]{ "slug": slug.current }`)
}

// ─── Playbooks ─────────────────────────────────────────────────────────────

export async function getAllPlaybooks() {
  const query = `*[_type == "playbook" && !noIndex] | order(publishedAt desc){
    "slug": slug.current, title, description, publishedAt, estimatedTime,
  }`
  return await client.fetch(query)
}

export async function getPlaybook(slug: string) {
  const query = `*[_type == "playbook" && slug.current == $slug][0]{
    _id, title, "slug": slug.current, description, publishedAt,
    estimatedTime, steps, relatedService, metaTitle, metaDescription, noIndex,
  }`
  return await client.fetch(query, { slug })
}

export async function getAllPlaybookSlugs() {
  return await client.fetch(`*[_type == "playbook" && !noIndex]{ "slug": slug.current }`)
}
