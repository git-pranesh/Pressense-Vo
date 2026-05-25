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

  return (
    <CalculatorShell meta={meta}>
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground">MRR Movements</h3>
          <NumberField
            id="baseMRR"
            label="Starting MRR"
            value={baseMRR}
            onChange={setBaseMRR}
            prefix="$"
            min={0}
            step={1000}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <NumberField
              id="newMRR"
              label="New MRR"
              value={newMRR}
              onChange={setNewMRR}
              prefix="$"
              min={0}
              step={500}
            />
            <NumberField
              id="expansionMRR"
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
              id="contractionMRR"
              label="Contraction MRR"
              value={contractionMRR}
              onChange={setContractionMRR}
              prefix="$"
              min={0}
              step={500}
            />
            <NumberField
              id="churnedMRR"
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
              sublabel={results.netNewMRR >= 0 ? 'Growth' : 'Decline'}
            />
            <MetricCard
              label="Ending MRR"
              value={formatCurrency(results.endingMRR)}
              sublabel="Base + Net New"
            />
            <MetricCard
              label="Ending ARR"
              value={formatCurrency(results.endingARR)}
              sublabel="MRR × 12"
            />
            <MetricCard
              label="Quick Ratio"
              value={isFinite(results.quickRatio) ? formatNumber(results.quickRatio, 1) : '∞'}
              sublabel={results.quality}
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
