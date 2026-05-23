'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateARRMRR } from '@/lib/calculators/calculations'
import { formatCurrency, formatNumber } from '@/lib/calculators/format'

export default function ARRMRRCalculator() {
  const meta = getCalculatorBySlug('arr-mrr-calculator')!
  const [baseMRR, setBaseMRR] = useState(100000)
  const [newMRR, setNewMRR] = useState(15000)
  const [expansionMRR, setExpansionMRR] = useState(8000)
  const [contractionMRR, setContractionMRR] = useState(2000)
  const [churnedMRR, setChurnedMRR] = useState(5000)

  const results = calculateARRMRR({ baseMRR, newMRR, expansionMRR, contractionMRR, churnedMRR })

  const getQualityColor = () => {
    if (results.quality === 'Strong') return 'text-green-600'
    if (results.quality === 'Healthy') return 'text-blue-600'
    if (results.quality === 'At risk') return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <CalculatorShell meta={meta}>
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground">MRR Movements</h3>
          <NumberField
            label="Starting MRR"
            value={baseMRR}
            onChange={setBaseMRR}
            prefix="$"
            min={0}
            step={1000}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <NumberField
              label="New MRR"
              value={newMRR}
              onChange={setNewMRR}
              prefix="$"
              min={0}
              step={500}
            />
            <NumberField
              label="Expansion MRR"
              value={expansionMRR}
              onChange={setExpansionMRR}
              prefix="$"
              min={0}
              step={500}
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <NumberField
              label="Contraction MRR"
              value={contractionMRR}
              onChange={setContractionMRR}
              prefix="$"
              min={0}
              step={500}
            />
            <NumberField
              label="Churned MRR"
              value={churnedMRR}
              onChange={setChurnedMRR}
              prefix="$"
              min={0}
              step={500}
            />
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground">Results</h3>
          <MetricGrid>
            <MetricCard
              label="Net New MRR"
              value={formatCurrency(results.netNewMRR)}
              description={results.netNewMRR >= 0 ? 'Growth' : 'Decline'}
              className={results.netNewMRR >= 0 ? 'text-green-600' : 'text-red-600'}
            />
            <MetricCard
              label="Ending MRR"
              value={formatCurrency(results.endingMRR)}
              description="Base + Net New"
            />
            <MetricCard
              label="Ending ARR"
              value={formatCurrency(results.endingARR)}
              description="MRR × 12"
            />
            <MetricCard
              label="Quick Ratio"
              value={isFinite(results.quickRatio) ? formatNumber(results.quickRatio, 1) : '∞'}
              description={results.quality}
              className={getQualityColor()}
            />
          </MetricGrid>

          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <h4 className="font-medium text-foreground mb-2">Interpretation</h4>
            <p className="text-sm text-muted-foreground">
              {results.quickRatio >= 4
                ? "Excellent growth efficiency. You're adding $4+ for every $1 lost. This is public-SaaS-grade performance."
                : results.quickRatio >= 2
                ? "Healthy growth efficiency. Your inflows comfortably exceed outflows, but there's room to improve retention."
                : results.quickRatio >= 1
                ? "At-risk growth efficiency. You're barely outpacing churn. Focus on reducing contraction and churn before scaling acquisition."
                : "Unsustainable. You're losing more revenue than you're adding. Stop acquiring and fix the leaky bucket first."}
            </p>
          </div>
        </div>
      </div>
    </CalculatorShell>
  )
}
