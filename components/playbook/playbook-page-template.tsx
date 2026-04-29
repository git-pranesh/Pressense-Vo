'use client'

import Link from 'next/link'
import { PageStructuredData } from '@/components/page-structured-data'
import { FAQSection } from '@/components/faq-section'

export interface PlaybookData {
  slug: string
  title: string
  subheadline: string
  bestFor: string
  relatedService: {
    name: string
    href: string
  }
  primarySymptom: string
  whoFor: string[]
  symptoms: string[]
  whatToInspect: string[]
  whatToFixFirst: string
  decisionFramework: string[]
  whatToBuild: string[]
  whatToMeasure: string[]
  commonMistakes: string[]
  whenNotRightMove: string
  howPressenseHelps: { name: string; href: string }[]
  faqs: { question: string; answer: string }[]
  relatedPlaybooks: { title: string; slug: string }[]
}

interface PlaybookPageTemplateProps {
  playbook: PlaybookData
}

export function PlaybookPageTemplate({ playbook }: PlaybookPageTemplateProps) {
  const sections = [
    { id: 'who-for', label: 'Who this is for' },
    { id: 'symptoms', label: 'Symptoms' },
    { id: 'diagnose', label: 'What to inspect' },
    { id: 'fix-first', label: 'Fix first' },
    { id: 'decision', label: 'Decision framework' },
    { id: 'build', label: 'What to build' },
    { id: 'measure', label: 'What to measure' },
    { id: 'mistakes', label: 'Common mistakes' },
    { id: 'when-not', label: 'When not to use' },
    { id: 'help', label: 'How we help' },
    { id: 'faq', label: 'FAQ' },
  ]

  return (
    <>
      <PageStructuredData
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Playbooks', url: '/playbooks' },
          { name: playbook.title, url: `/playbooks/${playbook.slug}` },
        ]}
        faqs={playbook.faqs}
        pageType="WebPage"
        pageName={playbook.title}
        pageDescription={playbook.subheadline}
      />

      {/* Breadcrumbs */}
      <nav className="pt-24 pb-4" aria-label="Breadcrumb">
        <div className="container mx-auto px-5 sm:px-8">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/playbooks" className="hover:text-foreground transition-colors">
                Playbooks
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground">{playbook.title}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-5 sm:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary/60" aria-hidden="true" />
              <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">Playbook</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground text-balance leading-[1.1] mb-6">
              {playbook.title}
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
              {playbook.subheadline}
            </p>

            {/* Meta info */}
            <div className="grid sm:grid-cols-3 gap-6 p-6 rounded-xl bg-secondary/30 border border-border/40">
              <div>
                <p className="text-xs uppercase tracking-widest text-primary font-medium mb-2">Best for</p>
                <p className="text-sm text-muted-foreground">{playbook.bestFor}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-primary font-medium mb-2">Related service</p>
                <Link href={playbook.relatedService.href} className="text-sm text-foreground hover:text-primary transition-colors">
                  {playbook.relatedService.name}
                </Link>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-primary font-medium mb-2">Primary symptom</p>
                <p className="text-sm text-muted-foreground">{playbook.primarySymptom}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content with sidebar */}
      <section className="py-12 lg:py-20 border-t border-border/40">
        <div className="container mx-auto px-5 sm:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            {/* Sidebar - sticky navigation */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24">
                <nav aria-label="Page sections">
                  <p className="text-xs uppercase tracking-widest text-primary font-medium mb-4">On this page</p>
                  <ul className="space-y-2">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block py-1"
                        >
                          {section.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-8 pt-8 border-t border-border/40">
                  <Link
                    href="/apply"
                    className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200"
                  >
                    Start a diagnostic
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <div className="lg:col-span-9">
              <div className="max-w-3xl">
                {/* Who this is for */}
                <section id="who-for" className="mb-16 scroll-mt-24">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">Who this playbook is for</h2>
                  <ul className="space-y-3">
                    {playbook.whoFor.map((item, i) => (
                      <li key={i} className="text-base text-muted-foreground leading-relaxed flex gap-3">
                        <span className="text-primary/60 flex-shrink-0">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Symptoms */}
                <section id="symptoms" className="mb-16 scroll-mt-24">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">Symptoms</h2>
                  <ul className="space-y-3">
                    {playbook.symptoms.map((item, i) => (
                      <li key={i} className="text-base text-muted-foreground leading-relaxed flex gap-3">
                        <span className="text-primary/60 flex-shrink-0">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* What to inspect */}
                <section id="diagnose" className="mb-16 scroll-mt-24">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">What to inspect</h2>
                  <ul className="space-y-3">
                    {playbook.whatToInspect.map((item, i) => (
                      <li key={i} className="text-base text-muted-foreground leading-relaxed flex gap-3">
                        <span className="text-primary/60 flex-shrink-0">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* What to fix first */}
                <section id="fix-first" className="mb-16 scroll-mt-24">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">What to fix first</h2>
                  <div className="p-6 rounded-xl bg-secondary/30 border border-primary/20">
                    <p className="text-base lg:text-lg text-foreground leading-relaxed">
                      {playbook.whatToFixFirst}
                    </p>
                  </div>
                </section>

                {/* Decision framework */}
                <section id="decision" className="mb-16 scroll-mt-24">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">Decision framework</h2>
                  <ul className="space-y-3">
                    {playbook.decisionFramework.map((item, i) => (
                      <li key={i} className="text-base text-muted-foreground leading-relaxed flex gap-3">
                        <span className="text-primary/60 flex-shrink-0">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* What to build */}
                <section id="build" className="mb-16 scroll-mt-24">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">What to build</h2>
                  <ul className="space-y-3">
                    {playbook.whatToBuild.map((item, i) => (
                      <li key={i} className="text-base text-muted-foreground leading-relaxed flex gap-3">
                        <span className="text-primary/60 flex-shrink-0">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* What to measure */}
                <section id="measure" className="mb-16 scroll-mt-24">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">What to measure</h2>
                  <ul className="space-y-3">
                    {playbook.whatToMeasure.map((item, i) => (
                      <li key={i} className="text-base text-muted-foreground leading-relaxed flex gap-3">
                        <span className="text-primary/60 flex-shrink-0">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Common mistakes */}
                <section id="mistakes" className="mb-16 scroll-mt-24">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">Common mistakes</h2>
                  <ul className="space-y-3">
                    {playbook.commonMistakes.map((item, i) => (
                      <li key={i} className="text-base text-muted-foreground leading-relaxed flex gap-3">
                        <span className="text-primary/60 flex-shrink-0">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* When not to use */}
                <section id="when-not" className="mb-16 scroll-mt-24">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">When this is not the right first move</h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {playbook.whenNotRightMove}
                  </p>
                </section>

                {/* How Pressense can help */}
                <section id="help" className="mb-16 scroll-mt-24">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">How Pressense can help</h2>
                  <div className="flex flex-wrap gap-3">
                    {playbook.howPressenseHelps.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-secondary/50 text-foreground hover:bg-secondary border border-border/40 hover:border-primary/20 transition-all"
                      >
                        {link.name}
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </section>

                {/* Related playbooks */}
                <section className="mb-16 pt-8 border-t border-border/40">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">Related playbooks</h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {playbook.relatedPlaybooks.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/playbooks/${related.slug}`}
                        className="glass-card rounded-xl p-5 border border-border/40 hover:border-primary/20 transition-all group"
                      >
                        <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                          {related.title}
                        </h3>
                      </Link>
                    ))}
                  </div>
                </section>

                {/* FAQ */}
                <section id="faq" className="mb-16 scroll-mt-24">
                  <FAQSection
                    eyebrow="FAQ"
                    headline={`Questions about ${playbook.title.toLowerCase()}`}
                    faqs={playbook.faqs}
                  />
                </section>

                {/* Final CTA */}
                <section className="pt-8 border-t border-border/40">
                  <div className="glass-card rounded-2xl p-8 border border-border/40 text-center">
                    <h2 className="text-2xl font-semibold text-foreground mb-4">
                      Ready to apply this playbook?
                    </h2>
                    <p className="text-base text-muted-foreground mb-6">
                      Start with a diagnostic to understand your specific situation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link
                        href="/apply"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-base font-medium bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200"
                      >
                        Start a diagnostic
                      </Link>
                      <Link
                        href="/playbooks"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-base font-medium bg-secondary text-foreground hover:bg-secondary/80 border border-border/40 transition-all duration-200"
                      >
                        Back to playbooks
                      </Link>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
