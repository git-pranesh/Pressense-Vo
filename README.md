# Pressense

Website for Pressense — a GTM strategy and AI automation consultancy.

Live: https://v0-pressense.vercel.app

## What it is

Pressense works with B2B SaaS companies on go-to-market strategy, sales tooling, and AI automation. This repo is the public website, built with Next.js and Sanity CMS as the content backend.

The site includes service pages, a blog/content section (via Sanity), and landing pages for specific GTM use cases.

## Stack

- Next.js (App Router)
- TypeScript
- Sanity CMS (content management)
- Tailwind CSS
- Vercel (deployment)
- Built with v0

## Project structure

```
app/              Next.js app directory and routes
components/       UI components
hooks/            Custom React hooks
lib/              Utilities and helpers
public/           Static assets
sanity/schemas/   Sanity content schemas
styles/           Global styles
```

## Running locally

```bash
npm install
npm run dev
```

See `SANITY_SETUP.md` for CMS configuration.
