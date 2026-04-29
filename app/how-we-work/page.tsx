import type { Metadata } from 'next'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HowWeWorkHero } from '@/components/how-we-work/hero'
import { DiagnosePhase } from '@/components/how-we-work/diagnose-phase'
import { BuildPlanPhase } from '@/components/how-we-work/build-plan-phase'
import { ExecutePhase } from '@/components/how-we-work/execute-phase'
import { MeasurePhase } from '@/components/how-we-work/measure-phase'
import { EngagementStartSection } from '@/components/how-we-work/engagement-start-section'
import { HowWeWorkCTA } from '@/components/how-we-work/final-cta'
import { HowWeWorkFAQSection } from '@/components/how-we-work/faq-section'

export const metadata: Metadata = {
  title: 'How We Work | Pressense',
  description:
    'We diagnose, plan, execute, and measure. Our structured approach helps businesses scale from scattered growth to operational clarity.',
  alternates: {
    canonical: '/how-we-work',
  },
  openGraph: {
    title: 'How We Work | Pressense',
    description:
      'A four-phase process: Diagnose, Build the Plan, Execute, Measure. We work inside your business to build the systems you need to scale.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How We Work | Pressense',
    description:
      'A four-phase process: Diagnose, Build the Plan, Execute, Measure. We work inside your business to build the systems you need to scale.',
  },
}

export default function HowWeWorkPage() {
  return (
    <>
      <Header />
      <main>
        <HowWeWorkHero />
        <DiagnosePhase />
        <BuildPlanPhase />
        <ExecutePhase />
        <MeasurePhase />
        <EngagementStartSection />
        <HowWeWorkFAQSection />
        <HowWeWorkCTA />
      </main>
      <Footer />
    </>
  )
}
