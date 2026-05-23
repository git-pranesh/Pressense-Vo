import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { calculatorsData, getCalculatorBySlug } from '@/lib/calculators'
import CACCalculator from './calculators/cac-calculator'
import LTVCalculator from './calculators/ltv-calculator'
import LTVCACRatioCalculator from './calculators/ltv-cac-ratio-calculator'
import BurnRateCalculator from './calculators/burn-rate-calculator'
import ChurnRateCalculator from './calculators/churn-rate-calculator'
import NRRCalculator from './calculators/nrr-calculator'
import SaasGrowthCalculator from './calculators/saas-growth-calculator'

const CALCULATOR_COMPONENTS: Record<string, React.ComponentType> = {
  'cac-calculator': CACCalculator,
  'ltv-calculator': LTVCalculator,
  'ltv-cac-ratio-calculator': LTVCACRatioCalculator,
  'burn-rate-calculator': BurnRateCalculator,
  'churn-rate-calculator': ChurnRateCalculator,
  'nrr-calculator': NRRCalculator,
  'saas-growth-calculator': SaasGrowthCalculator,
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

  return {
    title: `${calculator.title} | Pressense Tools`,
    description: `${calculator.description} Free, instant, no signup required. ${calculator.benchmarks}`,
    openGraph: {
      title: `${calculator.title} | Pressense Tools`,
      description: calculator.description,
      url: `/tools/${calculator.slug}`,
      type: 'website',
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
