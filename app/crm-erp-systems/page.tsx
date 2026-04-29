import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CrmErpHero } from '@/components/crm-erp-page/hero'
import { CrmErpToolsSection } from '@/components/crm-erp-page/tools-section'
import { CrmErpConstraintsSection } from '@/components/crm-erp-page/constraints-section'
import { CrmErpDiagnosisSection } from '@/components/crm-erp-page/diagnosis-section'
import { CrmErpWhatWeBuildSection } from '@/components/crm-erp-page/what-we-build-section'
import { CrmErpMostUsefulSection } from '@/components/crm-erp-page/most-useful-section'
import { CrmErpWhatChangesSection } from '@/components/crm-erp-page/what-changes-section'
import { CrmErpNotSetupSection } from '@/components/crm-erp-page/not-setup-section'
import { CrmErpEngagementPathSection } from '@/components/crm-erp-page/engagement-path-section'
import { CrmErpFinalCTA } from '@/components/crm-erp-page/final-cta'

export const metadata: Metadata = {
  title: 'CRM & ERP Systems for Growing Businesses | Pressense',
  description:
    'We design and build CRM and ERP systems tailored to your workflows. Improve visibility, follow-ups, reporting, and operations with systems your team actually uses.',
  openGraph: {
    title: 'CRM & ERP Systems for Growing Businesses | Pressense',
    description:
      'We design and build CRM and ERP systems tailored to your workflows. Improve visibility, follow-ups, reporting, and operations with systems your team actually uses.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRM & ERP Systems for Growing Businesses | Pressense',
    description:
      'We design and build CRM and ERP systems tailored to your workflows. Improve visibility, follow-ups, reporting, and operations with systems your team actually uses.',
  },
}

export default function CrmErpSystemsPage() {
  return (
    <>
      <Header />
      <main>
        <CrmErpHero />
        <CrmErpToolsSection />
        <CrmErpConstraintsSection />
        <CrmErpDiagnosisSection />
        <CrmErpWhatWeBuildSection />
        <CrmErpMostUsefulSection />
        <CrmErpWhatChangesSection />
        <CrmErpNotSetupSection />
        <CrmErpEngagementPathSection />
        <CrmErpFinalCTA />
      </main>
      <Footer />
    </>
  )
}
