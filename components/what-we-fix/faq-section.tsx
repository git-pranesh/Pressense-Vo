import Link from 'next/link'
import { FAQSection } from '@/components/faq-section'

const whatWeFixFAQs = [
  {
    question: 'What kinds of business problems does Pressense help fix?',
    answer: (
      <>
        Pressense helps with growth bottlenecks, weak positioning, revenue leakage, unclear GTM direction, manual workflows, poor{' '}
        <Link href="/websites-conversion-systems" className="text-primary hover:underline">website communication</Link>, inconsistent{' '}
        <Link href="/content-authority-systems" className="text-primary hover:underline">content</Link>, scattered tools, weak{' '}
        <Link href="/crm-erp-systems" className="text-primary hover:underline">CRM visibility</Link>, and execution gaps between strategy and implementation.
      </>
    ),
  },
  {
    question: 'How do we know whether our problem is strategic or operational?',
    answer: (
      <>
        If the team is busy but direction is unclear, the problem is usually strategic. If the direction is clear but execution breaks down, it is usually operational. Many businesses have both, which is why Pressense starts by diagnosing the full system through our{' '}
        <Link href="/how-we-work" className="text-primary hover:underline">diagnostic process</Link>.
      </>
    ),
  },
  {
    question: 'What is revenue leakage?',
    answer: (
      <>
        Revenue leakage happens when leads, opportunities, customers, margins, follow-ups, or delivery quality are lost because of unclear processes, weak ownership, poor visibility, or{' '}
        <Link href="/custom-internal-tools" className="text-primary hover:underline">broken handoffs</Link>. It is often an operating problem, not just a sales problem.
      </>
    ),
  },
  {
    question: 'What if our marketing is active but not producing results?',
    answer: (
      <>
        More marketing may not be the answer. The issue could be unclear positioning, weak website communication, poor lead qualification, inconsistent follow-up, or a mismatch between the offer and the market. Pressense helps identify the{' '}
        <Link href="/advisory-strategy" className="text-primary hover:underline">real constraint</Link> first.
      </>
    ),
  },
  {
    question: 'Can Pressense help if we already have a team?',
    answer: (
      <>
        Yes. Pressense often works with existing founders, teams, and vendors by clarifying priorities, improving systems, defining better workflows, and helping execution become easier to brief, delegate, and measure.
      </>
    ),
  },
  {
    question: 'What if we do not need a full rebuild?',
    answer: (
      <>
        A full rebuild is often unnecessary. Many businesses need one high-friction workflow, page, offer, system, or decision layer fixed first. Pressense usually starts with the highest-leverage constraint instead of changing everything at once. See{' '}
        <Link href="/how-we-work" className="text-primary hover:underline">how the diagnostic process works</Link>.
      </>
    ),
  },
]

export function WhatWeFixFAQSection() {
  return (
    <FAQSection
      headline="Questions about the problems Pressense fixes"
      faqs={whatWeFixFAQs}
    />
  )
}
