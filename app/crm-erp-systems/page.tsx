import type { Metadata } from 'next'
import { CrmErpHero } from '@/components/crm-erp-page/hero'
import { CrmErpProblemSection } from '@/components/crm-erp-page/problem-section'
import { CrmErpSolutionSection } from '@/components/crm-erp-page/solution-section'
import { CrmErpWhoItsForSection } from '@/components/crm-erp-page/who-its-for-section'
import { CrmErpMethodologySection } from '@/components/crm-erp-page/methodology-section'
import { CrmErpWhatYouGetSection } from '@/components/crm-erp-page/what-you-get-section'
import { CrmErpFAQSection } from '@/components/crm-erp-page/faq-section'
import { CrmErpFinalCTA } from '@/components/crm-erp-page/final-cta'

export const metadata: Metadata = {
  title: 'CRM & ERP Systems | Pressense',
  description:
    'CRM and ERP-lite systems for businesses that need better visibility, ownership, reporting, workflows, and operational structure.',
  alternates: {
    canonical: '/crm-erp-systems',
  },
  openGraph: {
    title: 'CRM & ERP Systems | Pressense',
    description:
      'Pressense designs CRM and ERP-lite systems for growing businesses that need better visibility, ownership, reporting, workflows, and operational structure.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRM & ERP Systems | Pressense',
    description:
      'Pressense designs CRM and ERP-lite systems for growing businesses that need better visibility, ownership, reporting, workflows, and operational structure.',
  },
}

export default function CrmErpSystemsPage() {
  return (
    <>
      
      <main>
        <CrmErpHero />
        <CrmErpProblemSection />
        <CrmErpSolutionSection />
        <CrmErpWhoItsForSection />
        <CrmErpMethodologySection />
        <CrmErpWhatYouGetSection />
        <CrmErpFAQSection />
        <CrmErpFinalCTA />
      </main>
      
    </>
  )
}
