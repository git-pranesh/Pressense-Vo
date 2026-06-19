import type { Metadata } from 'next'
import { Hero } from '@/components/hero'
import { TrustStrip } from '@/components/trust-strip'
import { ProblemSection } from '@/components/problem-section'
import { WhatWeDo } from '@/components/what-we-do'
import { ApproachSection } from '@/components/approach-section'
import { StartFocusedSection } from '@/components/start-focused-section'
import { ServicesSection } from '@/components/services-section'
import { WhoSection } from '@/components/who-section'
import { FinalCTA } from '@/components/final-cta'
import { HomeFAQSection } from '@/components/home-faq-section'
import { PartnerLogoStrip } from '@/components/partner-logo-strip'
import { TechStackLogos } from '@/components/tech-stack-logos'

export const metadata: Metadata = {
  title: 'Diagnostic-First Build Partner for Founder-Led Businesses | Pressense',
  description: 'Pressense starts every engagement with a structured diagnostic to find what is actually holding your business back. Then we fix it through fractional CMO leadership, custom software, and GTM execution.',
  openGraph: {
    title: 'Diagnostic-First Build Partner for Founder-Led Businesses | Pressense',
    description: 'We find what is broken in your business. Then we fix it through fractional CMO leadership, custom internal software, and go-to-market execution.',
    url: '/',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Pressense — Diagnostic-First Build Partner' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diagnostic-First Build Partner for Founder-Led Businesses | Pressense',
    description: 'We find what is broken in your business. Then we fix it through fractional CMO leadership, custom internal software, and go-to-market execution.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does Pressense actually do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pressense helps founder-led businesses identify what is actually holding them back, then fixes it. We start with a structured diagnostic, then work through fractional CMO leadership, custom internal software, and go-to-market execution. We do not start with execution before we understand the problem.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a business diagnostic and what does it include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A business diagnostic is a structured review of your business to find the real constraint blocking growth. At Pressense, it covers positioning, sales systems, operations, marketing, team structure, and tech stack. You receive a prioritised action roadmap showing exactly what to fix first and why.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a business diagnostic take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our diagnostic process typically takes one week. We review your systems, talk to your team, and deliver a written report with your top three constraints and recommended next steps.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who is Pressense best suited for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pressense works best with founder-led or founder-influenced businesses that are growing but feeling disorganised. Common signs: unclear positioning, manual workflows slowing the team down, revenue leaking in the funnel, or a founder stuck in operational work instead of strategy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Pressense help with both strategy and implementation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We cover advisory, fractional CMO leadership, custom internal tools, workflow automation, CRM and ERP-lite systems, GTM execution, and content systems. The diagnostic determines which of these is the right starting point for your business.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if we are not sure what we need yet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start with the diagnostic. It is designed exactly for businesses that feel something is not working but cannot pinpoint whether the issue is marketing, operations, positioning, systems, people, tools, or execution.',
      },
    },
  ],
}

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <TrustStrip />
      <PartnerLogoStrip />
      <ProblemSection />
      <WhatWeDo />
      <ApproachSection />
      <StartFocusedSection />
      <ServicesSection />
      <TechStackLogos />
      <WhoSection />
      <HomeFAQSection />
      <FinalCTA />
    </main>
  )
}
