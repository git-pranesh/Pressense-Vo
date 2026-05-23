'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateICPScore } from '@/lib/calculators/calculations'
import { formatNumber } from '@/lib/calculators/format'

export default function ICPScoreCalculator() {
  const meta = getCalculatorBySlug('icp-score-calculator')!
  const [companySize, setCompanySize] = useState(4)
  const [industry, setIndustry] = useState(4)
  const [budget, setBudget] = useState(3)
  const [painLevel, setPainLevel] = useState(5)
  const [techStack, setTechStack] = useState(3)

  const results = calculateICPScore({
    scores: [
      { value: companySize, weight: 25 },
      { value: industry, weight: 20 },
      { value: budget, weight: 20 },
      { value: painLevel, weight: 25 },
      { value: techStack, weight: 10 },
    ],
  })

  const getTierColor = () => {
    if (results.tier === 'A') return 'text-green-600'
    if (results.tier === 'B') return 'text-blue-600'
    if (results.tier === 'C') return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <CalculatorShell meta={meta}>
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground">Score Each Factor (1-5)</h3>
          <p className="text-sm text-muted-foreground">Rate how well the prospect matches your ICP on each dimension. 5 = perfect fit, 1 = poor fit.</p>
          
          <NumberField
            label="Company Size Fit (25%)"
            value={companySize}
            onChange={setCompanySize}
            min={1}
            max={5}
            step={1}
          />
          <NumberField
            label="Industry Fit (20%)"
            value={industry}
            onChange={setIndustry}
            min={1}
            max={5}
            step={1}
          />
          <NumberField
            label="Budget Availability (20%)"
            value={budget}
            onChange={setBudget}
            min={1}
            max={5}
            step={1}
          />
          <NumberField
            label="Pain Level / Urgency (25%)"
            value={painLevel}
            onChange={setPainLevel}
            min={1}
            max={5}
            step={1}
          />
          <NumberField
            label="Tech Stack Compatibility (10%)"
            value={techStack}
            onChange={setTechStack}
            min={1}
            max={5}
            step={1}
          />
        </div>

        {/* Results */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground">ICP Score</h3>
          <MetricGrid>
            <MetricCard
              label="ICP Score"
              value={formatNumber(results.score, 0)}
              description={`Tier ${results.tier}`}
              className={getTierColor()}
            />
            <MetricCard
              label="Recommended Action"
              value={results.action}
              description="Based on tier"
            />
          </MetricGrid>

          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <h4 className="font-medium text-foreground mb-2">Interpretation</h4>
            <p className="text-sm text-muted-foreground">
              {results.tier === 'A'
                ? "Tier A prospect. This account is an excellent ICP fit. Fast-track to your best AE and prioritize for immediate outreach. These accounts have the highest close rates and best retention."
                : results.tier === 'B'
                ? "Tier B prospect. Good fit but not perfect. Standard sales cycle applies. Monitor closely for signs of friction that might indicate underlying fit issues."
                : results.tier === 'C'
                ? "Tier C prospect. Marginal fit. Route to low-touch nurture sequences. Don't burn senior AE time here unless they show strong buying signals."
                : "Tier D prospect. Poor ICP fit. Disqualify or refer out. Pursuing this account will likely result in a long sales cycle, difficult close, and early churn."}
            </p>
          </div>
        </div>
      </div>
    </CalculatorShell>
  )
}
