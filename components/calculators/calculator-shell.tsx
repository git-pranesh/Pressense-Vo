'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import { ChevronRight, ArrowRight, Info } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import type { CalculatorMeta } from '@/lib/calculators/types'
import { calculatorsData } from '@/lib/calculators/data'

interface Props {
  meta?: CalculatorMeta
  calculator?: CalculatorMeta
  children?: ReactNode
  inputs?: ReactNode
  results?: ReactNode
  interpretation?: string
}

const FINANCIAL_CATEGORIES = new Set(['Unit Economics', 'Finance', 'SaaS Growth', 'Retention'])

export function CalculatorShell({ meta, calculator, children, inputs, results, interpretation }: Props) {
  const calcMeta = meta || calculator
  if (!calcMeta) {
    return <div className="p-8 text-center text-muted-foreground">Calculator not found</div>
  }

  const related = (calcMeta.relatedSlugs || [])
    .map((slug) => calculatorsData.find((c) => c.slug === slug))
    .filter(Boolean) as CalculatorMeta[]

  const isFinancial = FINANCIAL_CATEGORIES.has(calcMeta.category)
  const hasOldInterface = inputs !== undefined || results !== undefined

  return (
    <article>
      {/* Hero */}
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-xs text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/tools" className="hover:text-foreground transition-colors">Tools</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">{calcMeta.title}</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <div className="eyebrow-line" aria-hidden="true" />
            <span className="eyebrow">{calcMeta.category}</span>
          </div>

          <h1 className="text-display font-serif font-medium text-foreground mb-6 max-w-4xl">
            {calcMeta.title}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">{calcMeta.description}</p>
          <p className="mt-4 text-xs text-muted-foreground">
            By{' '}
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              the Pressense team
            </Link>
          </p>
        </div>
      </section>

      {/* Plain-English summary */}
      <section className="bg-surface py-10">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="eyebrow-line" aria-hidden="true" />
              <span className="eyebrow">What this calculator does</span>
            </div>
            <p className="text-base sm:text-lg text-foreground leading-relaxed">
              The <strong>{calcMeta.title}</strong>{' '}
              {calcMeta.shortDescription.charAt(0).toLowerCase() + calcMeta.shortDescription.slice(1).replace(/\.$/, '')}, then
              compares your result against operator benchmarks ({calcMeta.benchmarks}). Enter your numbers below and
              you&apos;ll get a result, a benchmark band, and a plain-English interpretation in under two minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      {hasOldInterface ? (
        <section className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-12">
          <div className="grid gap-6 lg:grid-cols-5">
            <Card className="lg:col-span-2 bg-card border-border">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <span className="eyebrow">Inputs</span>
                </div>
                {inputs}
              </CardContent>
            </Card>
            <Card className="lg:col-span-3 bg-card border-border">
              <CardContent className="p-6 sm:p-8" aria-live="polite">
                <div className="flex items-center gap-3 mb-6">
                  <span className="eyebrow">Results</span>
                </div>
                {results}
              </CardContent>
            </Card>
          </div>

          {interpretation && (
            <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/[0.04] p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="eyebrow">What this means</span>
              </div>
              <p className="text-base sm:text-lg text-foreground leading-relaxed">{interpretation}</p>
            </div>
          )}

          <div className="mt-6 rounded-xl border border-border bg-card p-5">
            <span className="eyebrow block mb-2">Formula</span>
            <code className="text-sm font-mono text-foreground/90 break-words">{calcMeta.formula}</code>
            <p className="text-xs text-muted-foreground mt-3">
              <span className="font-medium text-foreground/80">Benchmarks:</span> {calcMeta.benchmarks}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              <span className="font-medium text-foreground/80">Sources:</span> OpenView 2024 SaaS Benchmarks, ChartMogul Retention Reports, ProfitWell Pricing Studies, and Pressense operator data.
            </p>
          </div>
        </section>
      ) : (
        <section className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-12">
          {children}
          <div className="mt-6 rounded-xl border border-border bg-card p-5">
            <span className="eyebrow block mb-2">Formula</span>
            <code className="text-sm font-mono text-foreground/90 break-words">{calcMeta.formula}</code>
            <p className="text-xs text-muted-foreground mt-3">
              <span className="font-medium text-foreground/80">Benchmarks:</span> {calcMeta.benchmarks}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              <span className="font-medium text-foreground/80">Sources:</span> OpenView 2024 SaaS Benchmarks, ChartMogul Retention Reports, ProfitWell Pricing Studies, and Pressense operator data.
            </p>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="bg-surface py-12">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="eyebrow-line" aria-hidden="true" />
          <span className="eyebrow">FAQ</span>
        </div>
        <h2 className="text-section-title font-serif font-medium text-foreground mb-10">
          Frequently asked questions
        </h2>
        <div className="space-y-3">
          {(calcMeta.faqs || []).map((faq, i) => (
            <details
              key={i}
              open={i === 0}
              className="group rounded-xl border border-border bg-card p-5 hover:border-foreground/20 transition-colors"
            >
              <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                <h3 className="text-base sm:text-lg font-medium font-sans text-foreground">{faq.question}</h3>
                <ChevronRight className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5 transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-muted-foreground leading-relaxed font-sans">{faq.answer}</p>
            </details>
          ))}
        </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-[800px] mx-auto px-5 sm:px-8 lg:px-12 py-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="eyebrow">About this calculator</span>
        </div>
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed font-sans">
          <p>
            Built and reviewed by the{' '}
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Pressense
            </Link>{' '}
            team, a strategy and systems partner working with B2B SaaS operators on unit economics, retention, GTM, and
            positioning. Every calculator in this library uses public benchmarks from OpenView, ChartMogul, ProfitWell,
            and KeyBanc, supplemented with anonymised data from the operators we partner with.
          </p>
          {isFinancial && (
            <div className="flex gap-3 rounded-xl border border-border bg-card p-4">
              <Info className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-xs">
                <strong className="text-foreground">Disclaimer:</strong> This calculator is for educational and planning
                purposes only. Outputs are estimates based on the inputs you provide and industry benchmarks, not
                financial, tax, legal, or investment advice. Validate all results with a qualified professional before
                making decisions about funding, valuation, hiring, or capital allocation.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-surface py-12">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="eyebrow-line" aria-hidden="true" />
            <span className="eyebrow">Related calculators</span>
          </div>
          <h2 className="text-section-title font-serif font-medium text-foreground mb-10">
            More tools you might need
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/tools/${r.slug}`}
                className="group rounded-2xl border border-border bg-card p-6 hover:border-foreground/20 hover:shadow-md transition-all"
              >
                <span className="eyebrow block mb-3">{r.category}</span>
                <h3 className="text-lg font-medium font-sans text-foreground mb-2 group-hover:text-primary transition-colors">
                  {r.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.shortDescription}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary font-sans">
                  Open <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-12 pb-20">
        <div className="bg-ink rounded-3xl p-8 sm:p-12 lg:p-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="eyebrow-line-dark" aria-hidden="true" />
            <span className="eyebrow-on-dark">Pressense Diagnostic</span>
          </div>
          <h2 className="text-section-title font-serif font-medium text-ink-foreground mb-6 max-w-2xl text-balance">
            Want help fixing this{' '}
            <em className="text-primary not-italic">{categoryToLabel(calcMeta.category)}</em> metric?
          </h2>
          <p className="text-lg text-ink-muted leading-relaxed mb-8 max-w-2xl">
            Pressense partners with operators to turn metric problems into structured systems. Start with a
            free 30-minute diagnostic — we&apos;ll map where you&apos;re leaking growth and what to fix first.
          </p>
          <Link
            href="/diagnostic"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-medium bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200"
          >
            Start your diagnostic
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </article>
  )
}

function categoryToLabel(c: string): string {
  return c === 'Unit Economics' ? 'unit economics' : c === 'GTM/Marketing' ? 'GTM' : c.toLowerCase()
}
