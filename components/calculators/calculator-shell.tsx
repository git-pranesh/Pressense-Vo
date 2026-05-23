import type { ReactNode } from 'react'
import Link from 'next/link'
import { ChevronRight, ArrowRight, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import type { CalculatorMeta } from '@/lib/calculators/types'
import { calculatorsData } from '@/lib/calculators/data'

interface Props {
  meta: CalculatorMeta
  inputs: ReactNode
  results: ReactNode
  interpretation: string
}

const FINANCIAL_CATEGORIES = new Set(['Unit Economics', 'Finance', 'SaaS Growth', 'Retention'])

export function CalculatorShell({ meta, inputs, results, interpretation }: Props) {
  const related = meta.relatedSlugs
    .map((slug) => calculatorsData.find((c) => c.slug === slug))
    .filter(Boolean) as CalculatorMeta[]

  const isFinancial = FINANCIAL_CATEGORIES.has(meta.category)

  return (
    <article>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-grid-pattern opacity-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-xs text-muted-foreground mb-6">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/tools" className="hover:text-foreground">
              Tools
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">{meta.title}</span>
          </nav>
          <p className="text-xs font-semibold tracking-widest uppercase text-secondary mb-4">{meta.category}</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 max-w-4xl leading-[1.05]">
            {meta.title}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">{meta.description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span>
              By{' '}
              <Link href="/" className="text-foreground hover:text-primary">
                the Pressense team
              </Link>
            </span>
            <span aria-hidden="true">·</span>
            <span>Free · No signup</span>
          </div>
        </div>
      </section>

      {/* Plain-English summary for AEO */}
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border/60 bg-card/40 p-6 sm:p-8">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
            What this calculator does
          </h2>
          <p className="text-base sm:text-lg text-foreground leading-relaxed">
            The <strong>{meta.title}</strong>{' '}
            {meta.shortDescription.charAt(0).toLowerCase() + meta.shortDescription.slice(1).replace(/\.$/, '')}, then
            compares your result against operator benchmarks ({meta.benchmarks}). Enter your numbers below and
            you&apos;ll get a result, a benchmark band, and a plain-English interpretation in under two minutes.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-5">
          <Card className="lg:col-span-2 bg-card border-card-border">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-6">Inputs</h2>
              {inputs}
            </CardContent>
          </Card>
          <Card className="lg:col-span-3 bg-card border-card-border">
            <CardContent className="p-6 sm:p-8" aria-live="polite">
              <h2 className="text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-6">Results</h2>
              {results}
            </CardContent>
          </Card>
        </div>

        {/* Interpretation */}
        <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/[0.04] p-6 sm:p-8">
          <h3 className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">What this means</h3>
          <p className="text-base sm:text-lg text-foreground leading-relaxed">{interpretation}</p>
        </div>

        {/* Formula */}
        <div className="mt-6 rounded-xl border border-border/60 bg-card/40 p-5">
          <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">Formula</p>
          <code className="text-sm font-mono text-foreground/90 break-words">{meta.formula}</code>
          <p className="text-xs text-muted-foreground mt-3">
            <span className="font-semibold text-foreground/80">Benchmarks:</span> {meta.benchmarks}
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            <span className="font-semibold text-foreground/80">Sources:</span> OpenView 2024 SaaS Benchmarks, ChartMogul
            Retention Reports, ProfitWell Pricing Studies, and Pressense operator data.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 border-t border-border/40">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-8">
          Frequently asked questions
        </h2>
        <div className="space-y-3">
          {meta.faqs.map((faq, i) => (
            <details
              key={i}
              open={i === 0}
              className="group rounded-xl border border-border/60 bg-card/40 p-5 hover:border-border transition-colors"
            >
              <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                <h3 className="text-base sm:text-lg font-semibold text-foreground">{faq.question}</h3>
                <ChevronRight className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5 transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-3 text-muted-foreground leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* About this calculator */}
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8 border-t border-border/40">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">
          About this calculator
        </h2>
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            Built and reviewed by the{' '}
            <Link href="/" className="text-primary hover:underline">
              Pressense
            </Link>{' '}
            team — a strategy and systems partner working with B2B SaaS operators on unit economics, retention, GTM, and
            positioning. Every calculator in this library uses public benchmarks from OpenView, ChartMogul, ProfitWell,
            and KeyBanc, supplemented with anonymised data from the operators we partner with.
          </p>
          {isFinancial && (
            <div className="mt-4 flex gap-3 rounded-xl border border-border/60 bg-background/40 p-4">
              <Info className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-xs">
                <strong className="text-foreground">Disclaimer:</strong> This calculator is for educational and planning
                purposes only. Outputs are estimates based on the inputs you provide and industry benchmarks — not
                financial, tax, legal, or investment advice. Validate all results with a qualified professional before
                making decisions about funding, valuation, hiring, or capital allocation.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 border-t border-border/40">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground mb-8">Related calculators</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/tools/${r.slug}`}
                className="group rounded-2xl border border-border/60 bg-card/40 p-6 hover-elevate transition-all hover:border-primary/40"
              >
                <p className="text-xs font-semibold tracking-widest uppercase text-secondary mb-2">{r.category}</p>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {r.title}
                </h3>
                <p className="text-sm text-muted-foreground">{r.shortDescription}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
                  Open <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-card to-background p-8 sm:p-12 lg:p-16">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" aria-hidden="true" />
          <div className="relative max-w-3xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-secondary mb-4">Pressense Diagnostic</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
              Want help fixing this <em className="text-primary not-italic">{categoryToLabel(meta.category)}</em> metric?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Pressense partners with operators to turn metric problems into <em>structured systems</em>. Start with a
              free 30-minute diagnostic — we&apos;ll map where you&apos;re leaking growth and what to fix first.
            </p>
            <Link href="/diagnostic">
              <Button size="lg" className="rounded-2xl text-base font-medium">
                Start your diagnostic <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}

function categoryToLabel(c: string): string {
  return c === 'Unit Economics' ? 'unit economics' : c === 'GTM/Marketing' ? 'GTM' : c.toLowerCase()
}
