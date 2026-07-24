import Link from 'next/link'
import { AnchorCard } from '@/components/anchor-card'

const GARAMOND = '"EB Garamond", Georgia, serif'


export const metadata = {
  title: 'Custom Software for Clinics & Small Practices | Pressense',
  description: 'We diagnose where intake, scheduling, and billing are breaking down in your practice, then build the tool that connects them, without replacing your EHR.',
}

const problems = [
  {
    title: 'Intake and scheduling disconnect',
    body: 'A patient calls to book, someone writes it down, later it gets typed into the scheduling system, maybe correctly, maybe not. A referral or faxed order arrives and sits in a shared inbox until someone has time to work it, sometimes a day or two later.',
  },
  {
    title: 'Billing denial rate that compounds',
    body: 'Claims get denied at a real, meaningful rate, and every denial means more manual work chasing down why, correcting it, and resubmitting. KFF\'s analysis of ~425 million claims found close to one in five in-network claims were denied in 2023. That\'s not a fringe problem, that\'s routine.',
  },
  {
    title: 'Protocol that lives in someone\'s head',
    body: 'A lot of what holds a practice together is process that no one has written down. That works fine until staffing changes, and then the whole thing gets fragile fast. Add a second location, and the cracks that were manageable at one site multiply.',
  },
]

const examples = [
  {
    title: 'Digital intake and scheduling',
    body: 'Forms that feed directly into your existing systems, cutting out double data entry and reducing scheduling errors.',
  },
  {
    title: 'Referral and document tracker',
    body: 'Makes sure incoming referrals, imaging, and faxed orders get worked and tracked, instead of sitting in a shared inbox.',
  },
  {
    title: 'Billing follow-up tracker',
    body: 'A clear view of outstanding patient balances and where they stand, without replacing your billing system.',
  },
  {
    title: 'Multi-location operations dashboard',
    body: 'One shared view of staff capacity and patient flow across sites, once a single-location process needs to work for two or more.',
  },
]

const goodFit = [
  'Clinics and small practices where intake, scheduling, or billing follow-up still run largely on paper or disconnected systems.',
  'Practices expanding to a second location without a shared operational view across sites.',
  'Teams where key processes depend on one or two people remembering how things work.',
]

const notFit = [
  'Very small practices where the current manual process genuinely isn\'t causing problems yet.',
  'Practices not ready to change intake or scheduling workflows, even where they\'re the clear source of delay.',
]

const faqs = [
  {
    q: 'Does this mean replacing our EHR?',
    a: 'No. Almost everything we build works alongside your existing EHR and billing systems, closing specific gaps rather than replacing the core system.',
  },
  {
    q: 'How do you handle HIPAA and patient data requirements?',
    a: 'Anything touching protected health information gets scoped with HIPAA compliance in mind from the diagnostic stage onward. This is a planning consideration we build around, not something added afterward.',
  },
  {
    q: 'Our claim denial rate feels high. Is that something you can help with directly?',
    a: "We don't handle coding or claims submission itself. What we can build is better visibility into where balances and denials stand, so your team spends less time manually chasing status.",
  },
  {
    q: 'Can this work across multiple locations?',
    a: "Yes. A shared operational view across sites is one of the more common things practices come to us for once they've opened a second location.",
  },
  {
    q: "What's a realistic first step?",
    a: 'Usually a focused piece, like digital intake or a referral tracker, within a few weeks of the diagnostic. Not a full system overhaul on day one.',
  },
]

export default function HealthcarePage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="pt-24 pb-10">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div
            className="relative w-full rounded-3xl overflow-hidden"
            style={{
              backgroundImage: 'url(/images/service-hero-bg-opt.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0" style={{ background: 'rgba(10, 8, 5, 0.48)' }} aria-hidden="true" />
            <div className="relative z-10 px-6 py-10 sm:px-14 sm:py-20 lg:px-16 lg:py-24 max-w-3xl">
              <span className="eyebrow-pill mb-6 inline-block" style={{ borderColor: 'rgba(237,235,229,0.25)', color: 'rgba(237,235,229,0.6)' }}>Healthcare</span>
              <h1
                className="font-normal leading-tight text-balance mb-5"
                style={{ fontFamily: GARAMOND, fontSize: 'clamp(26px, 5vw, 58px)', color: '#EDEBE5' }}
              >
                Your EHR isn&apos;t the problem. What&apos;s happening around it is.
              </h1>
              <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(237,235,229,0.72)' }}>
                Intake on paper. Scheduling in one system. Billing follow-up tracked by whoever remembers to check. We find where that&apos;s actually costing you, then build what fixes it.
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-[#d4d1cc] transition-colors"
                  style={{ background: '#EDEBE5', color: '#1A0F06' }}
                >
                  Start a Free Diagnostic
                </Link>
                <Link
                  href="/industries"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium hover:border-[rgba(237,235,229,0.6)] hover:text-[rgba(237,235,229,1)] transition-colors"
                  style={{ border: '1px solid rgba(237,235,229,0.3)', color: 'rgba(237,235,229,0.8)' }}
                >
                  All industries
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Problem ──────────────────────────────────────────── */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">
            <div>
              <span className="eyebrow-pill">The Problem</span>
              <h2 className="font-normal text-foreground leading-tight text-balance" style={{ fontFamily: GARAMOND, fontSize: 'clamp(26px, 3.5vw, 40px)' }}>
                What gets lost between systems
              </h2>
            </div>
            <div className="flex flex-col divide-y divide-border/40">
              {problems.map((p) => (
                <div key={p.title} className="py-7 first:pt-0 last:pb-0">
                  <h3 className="text-base font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── The Solution ─────────────────────────────────────────── */}
      <section className="py-12 lg:py-20 border-t border-border/40">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
            <div>
              <span className="eyebrow-pill">The Solution</span>
              <h2 className="font-normal text-foreground leading-tight text-balance mb-6" style={{ fontFamily: GARAMOND, fontSize: 'clamp(26px, 3.5vw, 40px)' }}>
                We build around your EHR, not instead of it
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-4">
                We&apos;re not proposing you replace your EHR or switch billing systems. The diagnostic tells us exactly where the disconnect is costing you real time, whether that&apos;s intake, referral tracking, or billing follow-up, and we build to close that specific gap.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Anything that touches patient information gets scoped with HIPAA requirements in mind from the start, as part of how we plan the build, not as an afterthought.
              </p>
            </div>
            <div
              className="rounded-2xl p-8 flex flex-col justify-center"
              style={{ background: '#E5E2DB', border: '1px solid #D4CFC7' }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: '#6B5D51' }}>What this replaces</p>
              <ul className="space-y-4">
                {[
                  'Paper intake forms typed in manually after the fact',
                  'Referrals sitting unworked in a shared inbox',
                  'Billing follow-up tracked in someone\'s head',
                  'Processes that break every time someone leaves',
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="mt-2 shrink-0 h-2 w-2 rounded-full bg-[#6B5D51]" aria-hidden="true" />
                    <span className="text-sm text-foreground/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Examples ─────────────────────────────────────────────── */}
      <section className="py-12 lg:py-20 border-t border-border/40">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="mb-10">
            <span className="eyebrow-pill">Where This Shows Up</span>
            <h2 className="font-normal text-foreground leading-tight text-balance max-w-xl" style={{ fontFamily: GARAMOND, fontSize: 'clamp(26px, 3.5vw, 40px)' }}>
              These are examples, not a fixed menu
            </h2>
            <p className="mt-3 text-base text-muted-foreground max-w-xl">
              What actually gets built depends on what the diagnostic finds.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {examples.map((ex) => (
              <div key={ex.title} className="rounded-2xl p-7" style={{ background: '#E5E2DB', border: '1px solid #D4CFC7' }}>
                <h3 className="font-normal text-foreground mb-3" style={{ fontFamily: GARAMOND, fontSize: '1.25rem' }}>{ex.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{ex.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground/70 leading-relaxed max-w-2xl">
            We&apos;ve also built role-based task systems that replace protocols living only in one person&apos;s head, and custom reporting shaped around how a specific practice actually operates day to day.
          </p>
        </div>
      </section>

      {/* ── Who It's For ─────────────────────────────────────────── */}
      <section className="py-12 lg:py-20 border-t border-border/40">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="mb-10">
            <span className="eyebrow-pill">Who It&apos;s For</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Good fit */}
            <div className="rounded-3xl border p-8 sm:p-10" style={{ borderColor: '#C8C2BA', background: '#E8E5DF' }}>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-8">Good fit</p>
              <ul className="space-y-5">
                {goodFit.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="mt-2 shrink-0 h-2 w-2 rounded-full bg-[#6B5D51]" aria-hidden="true" />
                    <span className="text-sm text-foreground/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Not a fit */}
            <div className="rounded-3xl p-8 sm:p-10" style={{ background: '#D8D4CC' }}>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/50 mb-8">Not a fit</p>
              <ul className="space-y-5">
                {notFit.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="mt-2 shrink-0 h-2 w-2 rounded-full bg-foreground/25" aria-hidden="true" />
                    <span className="text-sm text-foreground/60 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="py-12 lg:py-20 border-t border-border/40">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">
            <div>
              <span className="eyebrow-pill">FAQ</span>
              <h2 className="font-normal text-foreground leading-tight" style={{ fontFamily: GARAMOND, fontSize: 'clamp(24px, 3vw, 36px)' }}>
                Common questions
              </h2>
            </div>
            <div className="flex flex-col divide-y divide-border/40">
              {faqs.map((faq) => (
                <div key={faq.q} className="py-7 first:pt-0 last:pb-0">
                  <h3 className="text-base font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="pb-12 lg:pb-20">
        <div className="container mx-auto px-5 sm:px-8 max-w-5xl">
          <AnchorCard
            headline="Find out what's actually slowing your front desk down"
            body="Start with the diagnostic. We'll walk through how intake, scheduling, and billing really move through your practice before recommending anything."
            cta={{ label: 'Start a Free Diagnostic', href: '/contact' }}
            stats={[
              { value: '~20%', label: 'In-network claim denial rate' },
              { value: '2–3 days', label: 'Avg. referral lag without a tracker' },
              { value: 'Weeks', label: 'To first working tool' },
            ]}
          />
        </div>
      </section>
    </main>
  )
}
