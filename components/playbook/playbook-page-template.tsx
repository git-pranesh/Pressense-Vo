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
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
            <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/playbooks" className="hover:text-foreground transition-colors">Playbooks</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-foreground">{playbook.title}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-12 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="eyebrow-line" aria-hidden="true" />
              <span className="eyebrow">Playbook</span>
            </div>

            <h1 className="text-display font-serif font-medium text-foreground text-balance mb-6">
              {playbook.title}
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 font-sans">
              {playbook.subheadline}
            </p>

            {/* Meta info */}
            <div className="grid sm:grid-cols-3 gap-6 p-6 rounded-2xl bg-card border border-border">
              <div>
                <span className="eyebrow block mb-2">Best for</span>
                <p className="text-sm text-muted-foreground font-sans">{playbook.bestFor}</p>
              </div>
              <div>
                <span className="eyebrow block mb-2">Related service</span>
                <Link href={playbook.relatedService.href} className="text-sm text-foreground hover:text-primary transition-colors font-sans">
                  {playbook.relatedService.name}
                </Link>
              </div>
              <div>
                <span className="eyebrow block mb-2">Primary symptom</span>
                <p className="text-sm text-muted-foreground font-sans">{playbook.primarySymptom}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content with sidebar */}
      <section className="py-8 lg:py-12 pb-24">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">

            {/* Sidebar */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24">
                <nav aria-label="Page sections">
                  <span className="eyebrow block mb-4">On this page</span>
                  <ul className="space-y-2">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors block py-1 font-sans"
                        >
                          {section.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="mt-8 pt-8 border-t border-border">
                  <Link
                    href="/diagnostic"
                    className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 rounded-full text-sm font-medium bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200"
                  >
                    Start Diagnostic
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <div className="lg:col-span-9">
              <div className="max-w-3xl">

                {/* Reusable list section renderer */}
                {[
                  { id: 'who-for', label: 'Who this playbook is for', items: playbook.whoFor },
                  { id: 'symptoms', label: 'Symptoms', items: playbook.symptoms },
                  { id: 'diagnose', label: 'What to inspect', items: playbook.whatToInspect },
                ].map(({ id, label, items }) => (
                  <section key={id} id={id} className="mb-16 scroll-mt-24">
                    <h2 className="text-2xl font-serif font-medium text-foreground mb-6">{label}</h2>
                    <ul className="space-y-3">
                      {items.map((item, i) => (
                        <li key={i} className="text-base text-muted-foreground leading-relaxed flex gap-3 font-sans">
                          <span className="text-foreground/30 flex-shrink-0 select-none">·</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}

                {/* What to fix first */}
                <section id="fix-first" className="mb-16 scroll-mt-24">
                  <h2 className="text-2xl font-serif font-medium text-foreground mb-6">What to fix first</h2>
                  <div className="p-6 rounded-2xl bg-card border border-border">
                    <p className="text-base lg:text-lg text-foreground leading-relaxed font-sans">
                      {playbook.whatToFixFirst}
                    </p>
                  </div>
                </section>

                {/* Decision framework */}
                {[
                  { id: 'decision', label: 'Decision framework', items: playbook.decisionFramework },
                  { id: 'build', label: 'What to build', items: playbook.whatToBuild },
                  { id: 'measure', label: 'What to measure', items: playbook.whatToMeasure },
                  { id: 'mistakes', label: 'Common mistakes', items: playbook.commonMistakes },
                ].map(({ id, label, items }) => (
                  <section key={id} id={id} className="mb-16 scroll-mt-24">
                    <h2 className="text-2xl font-serif font-medium text-foreground mb-6">{label}</h2>
                    <ul className="space-y-3">
                      {items.map((item, i) => (
                        <li key={i} className="text-base text-muted-foreground leading-relaxed flex gap-3 font-sans">
                          <span className="text-foreground/30 flex-shrink-0 select-none">·</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}

                {/* When not to use */}
                <section id="when-not" className="mb-16 scroll-mt-24">
                  <h2 className="text-2xl font-serif font-medium text-foreground mb-6">When this is not the right first move</h2>
                  <p className="text-base text-muted-foreground leading-relaxed font-sans">
                    {playbook.whenNotRightMove}
                  </p>
                </section>

                {/* How Pressense can help */}
                <section id="help" className="mb-16 scroll-mt-24">
                  <h2 className="text-2xl font-serif font-medium text-foreground mb-6">How Pressense can help</h2>
                  <div className="flex flex-wrap gap-3">
                    {playbook.howPressenseHelps.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium font-sans bg-card text-foreground hover:bg-secondary border border-border hover:border-foreground/20 transition-all"
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
                <section className="mb-16 pt-8 border-t border-border">
                  <h2 className="text-2xl font-serif font-medium text-foreground mb-6">Related playbooks</h2>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {playbook.relatedPlaybooks.map((related) => (
                      <Link
                        key={related.slug}
                        href={`/playbooks/${related.slug}`}
                        className="rounded-2xl bg-card border border-border p-5 hover:border-foreground/20 transition-all group"
                      >
                        <h3 className="text-sm font-medium font-sans text-foreground group-hover:text-primary transition-colors">
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
                <section className="pt-8">
                  <div className="rounded-3xl bg-ink p-8 lg:p-10">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="eyebrow-line-dark" aria-hidden="true" />
                      <span className="eyebrow-on-dark">Next step</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-serif font-medium text-ink-foreground mb-4 text-balance">
                      Want to diagnose this in your business?
                    </h2>
                    <p className="text-base text-ink-muted mb-8 font-sans leading-relaxed">
                      If this constraint feels familiar, start with a diagnostic. We will look at the business context before recommending a system, workflow, website, content layer, or advisory path.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href={`/diagnostic?constraint=${playbook.slug}`}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-base font-medium bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200"
                      >
                        Start With a Diagnostic
                      </Link>
                      <Link
                        href="/playbooks"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-base font-medium border border-ink-border text-ink-foreground hover:bg-ink-card transition-all duration-200 font-sans"
                      >
                        Back to Playbooks
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
