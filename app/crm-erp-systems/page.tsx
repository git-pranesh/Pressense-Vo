import type { Metadata } from 'next'
import { CrmErpHero } from '@/components/crm-erp-page/hero'
import { CrmErpToolsSection } from '@/components/crm-erp-page/tools-section'
import { CrmErpConstraintsSection } from '@/components/crm-erp-page/constraints-section'
import { ErpLiteSection } from '@/components/crm-erp-page/erp-lite-section'
import { CrmErpDiagnosisSection } from '@/components/crm-erp-page/diagnosis-section'
import { CrmErpWhatWeBuildSection } from '@/components/crm-erp-page/what-we-build-section'
import { CrmErpMostUsefulSection } from '@/components/crm-erp-page/most-useful-section'
import { CrmErpWhatChangesSection } from '@/components/crm-erp-page/what-changes-section'
import { CrmErpWhenWorthBuildingSection } from '@/components/crm-erp-page/when-worth-building-section'
import { CrmErpWhenNotRecommendSection } from '@/components/crm-erp-page/when-not-recommend-section'
import { CrmErpStructuredScaleSection } from '@/components/crm-erp-page/structured-scale-section'
import { CrmErpNotSetupSection } from '@/components/crm-erp-page/not-setup-section'
import { CrmErpEngagementPathSection } from '@/components/crm-erp-page/engagement-path-section'
import { CrmErpFinalCTA } from '@/components/crm-erp-page/final-cta'
import { CrmErpFAQSection } from '@/components/crm-erp-page/faq-section'

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
        <CrmErpToolsSection />
        <CrmErpConstraintsSection />
        <ErpLiteSection />
        <CrmErpDiagnosisSection />
        <CrmErpWhatWeBuildSection />
        <CrmErpMostUsefulSection />
        <CrmErpWhatChangesSection />
        <CrmErpWhenWorthBuildingSection />
        <CrmErpWhenNotRecommendSection />
        <CrmErpStructuredScaleSection />
        <CrmErpNotSetupSection />
        <CrmErpEngagementPathSection />
        <CrmErpFAQSection />
        <CrmErpFinalCTA />
      </main>
      
    </>
  )
}
