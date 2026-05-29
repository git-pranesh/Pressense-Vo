/**
 * Blog CMS Integration
 * 
 * This module provides a flexible interface for connecting to external CMS services
 * like Frase, Byword, Contentful, or any API-based content source.
 * 
 * Configuration:
 * Set BLOG_CMS_API_URL and BLOG_CMS_API_KEY in your environment variables.
 * 
 * Supported CMS platforms:
 * - Frase: Set BLOG_CMS_PROVIDER=frase
 * - Byword: Set BLOG_CMS_PROVIDER=byword
 * - Custom API: Set BLOG_CMS_PROVIDER=custom
 */

export interface BlogPost {
  slug: string
  title: string
  description: string
  content: string
  publishedAt: string
  updatedAt?: string
  author?: {
    name: string
    avatar?: string
  }
  category?: string
  tags?: string[]
  featuredImage?: string
  readingTime?: number
}

export interface BlogListItem {
  slug: string
  title: string
  description: string
  publishedAt: string
  category?: string
  tags?: string[]
  featuredImage?: string
  readingTime?: number
}

interface CMSConfig {
  apiUrl: string
  apiKey: string
  provider: 'frase' | 'byword' | 'custom' | 'local'
}

function getConfig(): CMSConfig {
  return {
    apiUrl: process.env.BLOG_CMS_API_URL || '',
    apiKey: process.env.BLOG_CMS_API_KEY || '',
    provider: (process.env.BLOG_CMS_PROVIDER as CMSConfig['provider']) || 'local',
  }
}

/**
 * Transform response based on CMS provider
 */
function transformPost(data: Record<string, unknown>, provider: string): BlogPost {
  switch (provider) {
    case 'frase':
      return {
        slug: data.slug as string,
        title: data.title as string,
        description: data.meta_description as string || data.excerpt as string || '',
        content: data.content as string || data.html as string || '',
        publishedAt: data.published_at as string || data.created_at as string || new Date().toISOString(),
        updatedAt: data.updated_at as string,
        category: data.category as string,
        tags: data.tags as string[],
        featuredImage: data.featured_image as string || data.image as string,
      }
    case 'byword':
      return {
        slug: data.slug as string,
        title: data.title as string,
        description: data.description as string || data.summary as string || '',
        content: data.body as string || data.content as string || '',
        publishedAt: data.publishedAt as string || data.createdAt as string || new Date().toISOString(),
        updatedAt: data.updatedAt as string,
        category: data.category as string,
        tags: data.tags as string[],
        featuredImage: data.coverImage as string || data.image as string,
      }
    default:
      // Generic/custom mapping - assumes standard field names
      return {
        slug: data.slug as string,
        title: data.title as string,
        description: data.description as string || data.excerpt as string || '',
        content: data.content as string || data.body as string || '',
        publishedAt: data.publishedAt as string || data.published_at as string || new Date().toISOString(),
        updatedAt: data.updatedAt as string || data.updated_at as string,
        author: data.author as BlogPost['author'],
        category: data.category as string,
        tags: data.tags as string[],
        featuredImage: data.featuredImage as string || data.featured_image as string || data.image as string,
        readingTime: data.readingTime as number || data.reading_time as number,
      }
  }
}

/**
 * Fetch all blog posts from the configured CMS
 */
export async function getAllPosts(): Promise<BlogListItem[]> {
  const config = getConfig()

  // If no CMS is configured, return sample posts for development
  if (config.provider === 'local' || !config.apiUrl) {
    return getSamplePosts()
  }

  try {
    const response = await fetch(config.apiUrl, {
      headers: {
        'Authorization': `Bearer ${config.apiKey}`,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      console.error('[Blog CMS] Failed to fetch posts:', response.status)
      return getSamplePosts()
    }

    const data = await response.json()
    const posts = Array.isArray(data) ? data : data.posts || data.articles || data.items || []

    return posts.map((post: Record<string, unknown>) => {
      const transformed = transformPost(post, config.provider)
      return {
        slug: transformed.slug,
        title: transformed.title,
        description: transformed.description,
        publishedAt: transformed.publishedAt,
        category: transformed.category,
        tags: transformed.tags,
        featuredImage: transformed.featuredImage,
        readingTime: transformed.readingTime,
      }
    })
  } catch (error) {
    console.error('[Blog CMS] Error fetching posts:', error)
    return getSamplePosts()
  }
}

/**
 * Fetch a single blog post by slug
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const config = getConfig()

  // If no CMS is configured, return sample post for development
  if (config.provider === 'local' || !config.apiUrl) {
    return getSamplePostBySlug(slug)
  }

  try {
    const url = `${config.apiUrl}/${slug}`
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${config.apiKey}`,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      console.error('[Blog CMS] Failed to fetch post:', response.status)
      return getSamplePostBySlug(slug)
    }

    const data = await response.json()
    return transformPost(data, config.provider)
  } catch (error) {
    console.error('[Blog CMS] Error fetching post:', error)
    return getSamplePostBySlug(slug)
  }
}

/**
 * Get all post slugs for static generation
 */
export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await getAllPosts()
  return posts.map(post => post.slug)
}

// Sample posts for development/preview without CMS
function getSamplePosts(): BlogListItem[] {
  return [
    {
      slug: 'ai-automation-for-small-business',
      title: 'AI Automation for Small Business: A Practical Guide',
      description: 'How to identify automation opportunities and implement AI workflows without enterprise budgets.',
      publishedAt: '2024-01-15T10:00:00Z',
      category: 'AI Automation',
      tags: ['AI', 'automation', 'small business'],
      readingTime: 8,
    },
    {
      slug: 'fractional-cmo-vs-marketing-agency',
      title: 'Fractional CMO vs Marketing Agency: Which Do You Need?',
      description: 'Understanding the difference between strategic leadership and execution capacity.',
      publishedAt: '2024-01-10T10:00:00Z',
      category: 'Marketing',
      tags: ['fractional CMO', 'marketing', 'leadership'],
      readingTime: 6,
    },
    {
      slug: 'signs-your-business-needs-systems',
      title: '7 Signs Your Business Needs Better Systems',
      description: 'Common symptoms of systems debt and what to do about them.',
      publishedAt: '2024-01-05T10:00:00Z',
      category: 'Operations',
      tags: ['systems', 'operations', 'scaling'],
      readingTime: 5,
    },
  ]
}

function getSamplePostBySlug(slug: string): BlogPost | null {
  const posts: Record<string, BlogPost> = {
    'ai-automation-for-small-business': {
      slug: 'ai-automation-for-small-business',
      title: 'AI Automation for Small Business: A Practical Guide',
      description: 'How to identify automation opportunities and implement AI workflows without enterprise budgets.',
      content: `
# AI Automation for Small Business: A Practical Guide

AI automation is not just for enterprises with massive IT budgets. Small and mid-sized businesses can leverage AI to eliminate manual work, reduce errors, and scale operations without scaling headcount.

## Where to Start

The best automation opportunities share three characteristics:

1. **Repetitive** - The task happens frequently (daily or weekly)
2. **Rule-based** - There are clear inputs and expected outputs
3. **Time-consuming** - The task takes meaningful time from your team

Common examples include:
- Data entry and transfer between systems
- Email triage and response drafting
- Report generation and distribution
- Lead qualification and routing
- Invoice processing and reconciliation

## The Implementation Approach

Most failed automation projects fail for the same reason: they try to automate a broken process. Before adding AI, you need to:

1. Map the current workflow end-to-end
2. Identify bottlenecks and failure points
3. Simplify before you automate
4. Start with a single, high-impact workflow

## Tools and Platforms

You do not need custom development for most automation use cases. Modern platforms make it possible to build sophisticated workflows without code:

- **Make/Zapier** - Connect apps and trigger automated workflows
- **n8n** - Self-hosted workflow automation with AI nodes
- **OpenAI/Claude APIs** - Add intelligence to your workflows
- **Custom code** - When you need full control

## Getting Started

The fastest path to value:

1. List your team's top 10 time-consuming tasks
2. Score each by frequency x time x frustration
3. Pick the top 3 candidates
4. Map one workflow in detail
5. Build a proof of concept

If you need help identifying opportunities or building your first AI workflow, [start with a diagnostic](/diagnostic).
      `,
      publishedAt: '2024-01-15T10:00:00Z',
      author: { name: 'Pressense' },
      category: 'AI Automation',
      tags: ['AI', 'automation', 'small business'],
      readingTime: 8,
    },
    'fractional-cmo-vs-marketing-agency': {
      slug: 'fractional-cmo-vs-marketing-agency',
      title: 'Fractional CMO vs Marketing Agency: Which Do You Need?',
      description: 'Understanding the difference between strategic leadership and execution capacity.',
      content: `
# Fractional CMO vs Marketing Agency: Which Do You Need?

Growing businesses often face a choice: hire a marketing agency or bring in a fractional CMO. The answer depends on what you are actually missing.

## The Core Difference

**Marketing Agency** = Execution capacity
- They do the work: ads, content, campaigns
- You direct them on what to do
- Best when you know *what* you need done

**Fractional CMO** = Strategic leadership
- They direct the strategy and oversee execution
- You get senior thinking without a full-time salary
- Best when you need someone to figure out *what* should be done

## When You Need an Agency

- You have clear marketing objectives
- You know which channels to invest in
- You have someone internally who can direct and review work
- You need more hands, not more strategy

## When You Need a Fractional CMO

- Marketing feels unfocused or reactive
- You are the one directing marketing but it is not your strength
- You have execution capacity but lack strategic direction
- You need someone who can see the whole picture

## The Hybrid Approach

Many businesses need both. A fractional CMO sets strategy and directs execution, while an agency or contractors do the work. This gives you senior leadership + execution capacity at a fraction of the cost of building an in-house team.

[Learn more about our Fractional CMO services](/fractional-cmo-services)
      `,
      publishedAt: '2024-01-10T10:00:00Z',
      author: { name: 'Pressense' },
      category: 'Marketing',
      tags: ['fractional CMO', 'marketing', 'leadership'],
      readingTime: 6,
    },
    'signs-your-business-needs-systems': {
      slug: 'signs-your-business-needs-systems',
      title: '7 Signs Your Business Needs Better Systems',
      description: 'Common symptoms of systems debt and what to do about them.',
      content: `
# 7 Signs Your Business Needs Better Systems

Systems debt accumulates quietly. One day you realize the business cannot scale because everything depends on tribal knowledge, manual processes, and workarounds.

Here are the warning signs:

## 1. You Cannot Take a Vacation

If the business cannot run for a week without you, you do not have systems - you have dependency.

## 2. Onboarding Takes Months

New hires should be productive in weeks, not months. Long ramp times signal undocumented processes.

## 3. The Same Mistakes Keep Happening

When errors repeat, it means there is no system to prevent them. You are relying on human vigilance instead of process design.

## 4. Information Lives in People's Heads

If you have to ask specific people to get answers, your knowledge is not systematized.

## 5. Growth Creates Chaos

Scaling should not mean more fires. If every new client or project creates scrambling, your systems cannot handle growth.

## 6. You Have No Visibility

If you cannot answer basic questions about performance, pipeline, or capacity without digging, you lack operational visibility.

## 7. Everyone is Busy but Nothing Moves

Activity without progress is a system problem. Either processes are broken or priorities are unclear.

## What To Do

The fix is not more tools. It is:

1. Map your core workflows
2. Identify where things break
3. Document and standardize
4. Build in checkpoints and visibility
5. Train and enforce

If you are seeing these signs, [start with a diagnostic](/diagnostic) to identify your highest-impact system improvements.
      `,
      publishedAt: '2024-01-05T10:00:00Z',
      author: { name: 'Pressense' },
      category: 'Operations',
      tags: ['systems', 'operations', 'scaling'],
      readingTime: 5,
    },
  }

  return posts[slug] || null
}
