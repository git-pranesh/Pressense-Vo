'use client'

import { SectionWrapper } from '@/components/section-wrapper'

const problems = [
  'Sales calls do a better job of explaining the offer than the website does',
  'Traffic arrives but visitors cannot immediately tell who the business is for',
  'The homepage tries to say everything and ends up communicating nothing clearly',
  'There is no obvious next step for a buyer who is not ready to book a call yet',
  'Service pages list features but do not address the buyer\'s specific problem',
  'The site looks polished but has not generated a qualified lead in months',
]

export function WebsitesProblemSection() {
  return (
    <SectionWrapper className="bg-ink text-ink-foreground">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-2xl mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">The Problem</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-balance leading-tight mb-4">
            Most business websites look fine and convert poorly
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A polished website can still fail if buyers leave confused. The design is not the problem. The clarity is. Most website problems are messaging and structure problems, not aesthetic ones.
          </p>
        </div>
        <ul className="grid sm:grid-cols-2 gap-4">
          {problems.map((p, i) => (
            <li key={i} className="flex items-start gap-3 p-5 rounded-xl border border-border/20 bg-white/5">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
              <span className="text-sm sm:text-base leading-relaxed">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  )
}
