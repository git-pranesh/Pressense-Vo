import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { calculatorsData, getCalculatorBySlug } from '@/lib/calculators'

// Unit Economics
import CACCalculator from './calculators/cac-calculator'
import LTVCalculator from './calculators/ltv-calculator'
import LTVCACRatioCalculator from './calculators/ltv-cac-ratio-calculator'
import CACPaybackCalculator from './calculators/cac-payback-calculator'

// SaaS Growth
import SaasGrowthCalculator from './calculators/saas-growth-calculator'
import ARRMRRCalculator from './calculators/arr-mrr-calculator'

// Retention
import ChurnRateCalculator from './calculators/churn-rate-calculator'
import NRRCalculator from './calculators/nrr-calculator'
import CustomerHealthScoreCalculator from './calculators/customer-health-score'
import RevenueChurnCalculator from './calculators/revenue-churn-calculator'
import CustomerRetentionCostCalculator from './calculators/customer-retention-cost-calculator'
import ExpansionRevenueCalculator from './calculators/expansion-revenue-calculator'
import AtRiskCustomerIdentifierCalculator from './calculators/at-risk-customer-identifier'

// Finance
import BurnRateCalculator from './calculators/burn-rate-calculator'
import BreakEvenCalculator from './calculators/break-even-calculator'
import SaasValuationCalculator from './calculators/saas-valuation-calculator'
import CashRunwayCalculator from './calculators/cash-runway-calculator'
import CapTableCalculator from './calculators/cap-table-calculator'
import SAFENoteCalculator from './calculators/safe-note-calculator'
import FounderDilutionCalculator from './calculators/founder-dilution-calculator'
import CoFounderEquitySplitCalculator from './calculators/co-founder-equity-split-calculator'
import SaasPricingCalculator from './calculators/saas-pricing-calculator'
import PriceElasticityCalculator from './calculators/price-elasticity-calculator'
import PricingTierOptimizerCalculator from './calculators/pricing-tier-optimizer'

// GTM/Marketing
import GTMROICalculator from './calculators/gtm-roi-calculator'
import ContentMarketingROICalculator from './calculators/content-marketing-roi-calculator'
import LeadScoringCalculator from './calculators/lead-scoring-calculator'
import FunnelConversionCalculator from './calculators/funnel-conversion-calculator'
import MarketingROICalculator from './calculators/marketing-roi-calculator'
import PPCAdROICalculator from './calculators/ppc-ad-roi-calculator'
import ContentPublishingROICalculator from './calculators/content-publishing-roi-calculator'
import LinkedInPersonalBrandROICalculator from './calculators/linkedin-personal-brand-roi-calculator'
import ThoughtLeadershipImpactCalculator from './calculators/thought-leadership-impact-calculator'
import ConversionRateCalculator from './calculators/conversion-rate-calculator'
import LeadToCustomerCalculator from './calculators/lead-to-customer-calculator'
import MQLtoSQLCalculator from './calculators/mql-to-sql-calculator'
import LeadQualificationMatrixCalculator from './calculators/lead-qualification-matrix'
import PipelineCoverageCalculator from './calculators/pipeline-coverage-calculator'
import SalesFunnelVelocityCalculator from './calculators/sales-funnel-velocity-calculator'

// Strategy
import ICPScoreCalculator from './calculators/icp-score-calculator'
import CustomerInterviewROICalculator from './calculators/customer-interview-roi-calculator'
import ValuePropositionCalculator from './calculators/value-proposition-calculator'
import DecisionSpeedCalculator from './calculators/decision-speed-calculator'
import ShouldYouPivotCalculator from './calculators/should-you-pivot-calculator'
import MarketEntryReadinessScoreCalculator from './calculators/market-entry-readiness-score'

// People & Ops
import QuotaAttainmentCalculator from './calculators/quota-attainment-calculator'
import SalesCommissionCalculator from './calculators/sales-commission-calculator'
import SalesRampTimeCalculator from './calculators/sales-ramp-time-calculator'
import WorkflowAutomationROICalculator from './calculators/workflow-automation-roi-calculator'
import NoCodeBuildVsBuyCalculator from './calculators/no-code-build-vs-buy-calculator'
import SystemIntegrationROICalculator from './calculators/system-integration-roi-calculator'
import ManualVsAutomatedProcessCalculator from './calculators/manual-vs-automated-process-calculator'
import TechnicalDebtCalculator from './calculators/technical-debt-calculator'
import TeamCapacityCalculator from './calculators/team-capacity-calculator'
import HiringROICalculator from './calculators/hiring-roi-calculator'
import MeetingCostCalculator from './calculators/meeting-cost-calculator'
import FounderBurnoutRiskCalculator from './calculators/founder-burnout-risk-calculator'
import RemoteVsOfficeROICalculator from './calculators/remote-vs-office-roi-calculator'

const CALCULATOR_COMPONENTS: Record<string, React.ComponentType> = {
  // Unit Economics
  'cac-calculator': CACCalculator,
  'ltv-calculator': LTVCalculator,
  'ltv-cac-ratio-calculator': LTVCACRatioCalculator,
  'cac-payback-calculator': CACPaybackCalculator,
  
  // SaaS Growth
  'saas-growth-calculator': SaasGrowthCalculator,
  'arr-mrr-calculator': ARRMRRCalculator,
  
  // Retention
  'churn-rate-calculator': ChurnRateCalculator,
  'nrr-calculator': NRRCalculator,
  'customer-health-score': CustomerHealthScoreCalculator,
  'revenue-churn-calculator': RevenueChurnCalculator,
  'customer-retention-cost-calculator': CustomerRetentionCostCalculator,
  'expansion-revenue-calculator': ExpansionRevenueCalculator,
  'at-risk-customer-identifier': AtRiskCustomerIdentifierCalculator,
  
  // Finance
  'burn-rate-calculator': BurnRateCalculator,
  'break-even-calculator': BreakEvenCalculator,
  'saas-valuation-calculator': SaasValuationCalculator,
  'cash-runway-calculator': CashRunwayCalculator,
  'cap-table-calculator': CapTableCalculator,
  'safe-note-calculator': SAFENoteCalculator,
  'founder-dilution-calculator': FounderDilutionCalculator,
  'co-founder-equity-split-calculator': CoFounderEquitySplitCalculator,
  'saas-pricing-calculator': SaasPricingCalculator,
  'price-elasticity-calculator': PriceElasticityCalculator,
  'pricing-tier-optimizer': PricingTierOptimizerCalculator,
  
  // GTM/Marketing
  'gtm-roi-calculator': GTMROICalculator,
  'content-marketing-roi-calculator': ContentMarketingROICalculator,
  'lead-scoring-calculator': LeadScoringCalculator,
  'funnel-conversion-calculator': FunnelConversionCalculator,
  'marketing-roi-calculator': MarketingROICalculator,
  'ppc-ad-roi-calculator': PPCAdROICalculator,
  'content-publishing-roi-calculator': ContentPublishingROICalculator,
  'linkedin-personal-brand-roi-calculator': LinkedInPersonalBrandROICalculator,
  'thought-leadership-impact-calculator': ThoughtLeadershipImpactCalculator,
  'conversion-rate-calculator': ConversionRateCalculator,
  'lead-to-customer-calculator': LeadToCustomerCalculator,
  'mql-to-sql-calculator': MQLtoSQLCalculator,
  'lead-qualification-matrix': LeadQualificationMatrixCalculator,
  'pipeline-coverage-calculator': PipelineCoverageCalculator,
  'sales-funnel-velocity-calculator': SalesFunnelVelocityCalculator,
  
  // Strategy
  'icp-score-calculator': ICPScoreCalculator,
  'customer-interview-roi-calculator': CustomerInterviewROICalculator,
  'value-proposition-calculator': ValuePropositionCalculator,
  'decision-speed-calculator': DecisionSpeedCalculator,
  'should-you-pivot-calculator': ShouldYouPivotCalculator,
  'market-entry-readiness-score': MarketEntryReadinessScoreCalculator,
  
  // People & Ops
  'quota-attainment-calculator': QuotaAttainmentCalculator,
  'sales-commission-calculator': SalesCommissionCalculator,
  'sales-ramp-time-calculator': SalesRampTimeCalculator,
  'workflow-automation-roi-calculator': WorkflowAutomationROICalculator,
  'no-code-build-vs-buy-calculator': NoCodeBuildVsBuyCalculator,
  'system-integration-roi-calculator': SystemIntegrationROICalculator,
  'manual-vs-automated-process-calculator': ManualVsAutomatedProcessCalculator,
  'technical-debt-calculator': TechnicalDebtCalculator,
  'team-capacity-calculator': TeamCapacityCalculator,
  'hiring-roi-calculator': HiringROICalculator,
  'meeting-cost-calculator': MeetingCostCalculator,
  'founder-burnout-risk-calculator': FounderBurnoutRiskCalculator,
  'remote-vs-office-roi-calculator': RemoteVsOfficeROICalculator,
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const calculator = getCalculatorBySlug(slug)

  if (!calculator) {
    return {
      title: 'Calculator Not Found | Pressense',
    }
  }

  // Generate SEO-friendly description (max 155 chars)
  const seoDescription = calculator.description.length > 120
    ? `${calculator.description.slice(0, 117)}...`
    : `${calculator.description} Free, instant.`

  return {
    title: `${calculator.title} | Pressense Tools`,
    description: seoDescription,
    openGraph: {
      title: `${calculator.title} | Pressense Tools`,
      description: calculator.description,
      url: `/tools/${calculator.slug}`,
      type: 'website',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: calculator.title }],
    },
    alternates: {
      canonical: `/tools/${calculator.slug}`,
    },
  }
}

export async function generateStaticParams() {
  return calculatorsData.map((calc) => ({
    slug: calc.slug,
  }))
}

export default async function CalculatorPage({ params }: Props) {
  const { slug } = await params
  const calculator = getCalculatorBySlug(slug)

  if (!calculator) {
    notFound()
  }

  const CalculatorComponent = CALCULATOR_COMPONENTS[slug]

  if (!CalculatorComponent) {
    notFound()
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: calculator.title,
              description: calculator.description,
              url: `https://www.pressense.co/tools/${calculator.slug}`,
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Any',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
              provider: { '@type': 'Organization', name: 'Pressense', url: 'https://www.pressense.co/' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: calculator.faqs.map((f) => ({
                '@type': 'Question',
                name: f.question,
                acceptedAnswer: { '@type': 'Answer', text: f.answer },
              })),
            },
            {
              '@context': 'https://schema.org',
              '@type': 'HowTo',
              name: `How to use the ${calculator.title}`,
              description: `Use the ${calculator.title} to ${calculator.shortDescription.toLowerCase().replace(/\.$/, '')} with operator-grade benchmarks.`,
              totalTime: 'PT2M',
              step: [
                {
                  '@type': 'HowToStep',
                  position: 1,
                  name: 'Enter your inputs',
                  text: `Fill in the input fields with your real numbers. Formula: ${calculator.formula}`,
                },
                {
                  '@type': 'HowToStep',
                  position: 2,
                  name: 'Review your primary metric',
                  text: `Read the calculated result and compare it against the benchmark band: ${calculator.benchmarks}.`,
                },
                {
                  '@type': 'HowToStep',
                  position: 3,
                  name: 'Act on the interpretation',
                  text: 'Read the interpretation panel below the calculator for insights and next steps.',
                },
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.pressense.co/' },
                { '@type': 'ListItem', position: 2, name: 'Tools', item: 'https://www.pressense.co/tools/' },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: calculator.title,
                  item: `https://www.pressense.co/tools/${calculator.slug}`,
                },
              ],
            },
          ]),
        }}
      />
      <CalculatorComponent />
    </>
  )
}
