import { NextResponse } from 'next/server'
import { playbooks } from '@/lib/playbooks-data'

const INDEXNOW_KEY = 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6'
const HOST = 'www.pressense.co'

// All URLs to submit to IndexNow
const ALL_URLS = [
  // Core pages
  `https://${HOST}/`,
  `https://${HOST}/about`,
  `https://${HOST}/how-it-works`,
  `https://${HOST}/work`,
  `https://${HOST}/playbooks`,
  `https://${HOST}/contact`,
  // Solution pages
  `https://${HOST}/advisory-strategy`,
  `https://${HOST}/custom-software-internal-tools`,
  `https://${HOST}/websites-conversion-systems`,
  `https://${HOST}/crm-erp-systems`,
  `https://${HOST}/content-authority-systems`,
  `https://${HOST}/ai-workflows-automation`,
  // Playbook pages
  ...playbooks.map((p) => `https://${HOST}/playbooks/${p.slug}`),
]

// Submit to multiple search engines that support IndexNow
const SEARCH_ENGINES = [
  'api.indexnow.org', // Microsoft Bing, Yandex, others
  'www.bing.com',
  'yandex.com',
]

export async function POST(request: Request) {
  try {
    // Optional: Accept specific URLs to submit, or submit all
    const body = await request.json().catch(() => ({}))
    const urlsToSubmit = body.urls || ALL_URLS

    const results = await Promise.allSettled(
      SEARCH_ENGINES.map(async (engine) => {
        const response = await fetch(`https://${engine}/indexnow`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify({
            host: HOST,
            key: INDEXNOW_KEY,
            urlList: urlsToSubmit,
          }),
        })

        return {
          engine,
          status: response.status,
          ok: response.ok,
        }
      })
    )

    const summary = results.map((result, index) => {
      if (result.status === 'fulfilled') {
        return result.value
      }
      return {
        engine: SEARCH_ENGINES[index],
        status: 'error',
        error: result.reason?.message || 'Unknown error',
      }
    })

    return NextResponse.json({
      success: true,
      urlsSubmitted: urlsToSubmit.length,
      results: summary,
    })
  } catch (error) {
    console.error('[IndexNow] Error:', error)
    return NextResponse.json(
      { error: 'Failed to submit URLs to IndexNow' },
      { status: 500 }
    )
  }
}

// GET endpoint to check status and see all URLs
export async function GET() {
  return NextResponse.json({
    key: INDEXNOW_KEY,
    keyFileUrl: `https://${HOST}/${INDEXNOW_KEY}.txt`,
    host: HOST,
    totalUrls: ALL_URLS.length,
    urls: ALL_URLS,
    searchEngines: SEARCH_ENGINES,
    instructions: 'POST to this endpoint to submit all URLs to IndexNow, or POST with { "urls": ["url1", "url2"] } to submit specific URLs.',
  })
}
