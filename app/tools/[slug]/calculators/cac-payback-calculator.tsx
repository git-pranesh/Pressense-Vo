'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateCACPayback } from '@/lib/calculators/calculations'
import { formatCurrency, formatNumber } from '@/lib/calculators/format'

export default function CACPaybackCalculator() {
  const meta = getCalculatorBySlug('cac-payback-calculator')!
  const [cac, setCAC] = useState(1500)
  const [arpu, setARPU] = useState(200)
  const [grossMargin, setGrossMargin] = useState(80)

  const results = calculateCACPayback({ cac, arpu, grossMarginPercent: grossMargin })

  const getPaybackColor = () => {
    if (results.paybackMonths <= 12) return 'text-green-600'
    if (results.paybackMonths <= 18) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <CalculatorShell meta={meta}>
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground">Your Inputs</h3>
          <NumberField
            label="Customer Acquisition Cost (CAC)"
            value={cac}
            onChange={setCAC}
            prefix="$"
            min={0}
            step={100}
          />
          <NumberField
            label="Monthly ARPU"
            value={arpu}
            onChange={setARPU}
            prefix="$"
            min={0}
            step={10}
          />
          <NumberField
            label="Gross Margin"
            value={grossMargin}
            onChange={setGrossMargin}
            suffix="%"
            min={0}
            max={100}
          />
        </div>

        {/* Results */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground">Results</h3>
          <MetricGrid>
            <MetricCard
              label="Payback Period"
              value={`${formatNumber(results.paybackMonths, 1)} months`}
              description={`Rating: ${results.rating}`}
              className={getPaybackColor()}
            />
            <MetricCard
              label="Monthly Contribution"
              value={formatCurrency(arpu * (grossMargin / 100))}
              description="ARPU × Gross Margin"
            />
            <MetricCard
              label="Annual Contribution"
              value={formatCurrency(arpu * (grossMargin / 100) * 12)}
              description="Per customer per year"
            />
          </MetricGrid>

          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <h4 className="font-medium text-foreground mb-2">Interpretation</h4>
            <p className="text-sm text-muted-foreground">
              {results.paybackMonths <= 12
                ? "Excellent payback period. You can reinvest acquisition dollars quickly, enabling faster growth with less capital."
                : results.paybackMonths <= 18
                ? "Good payback period. Consider improving gross margin or reducing CAC to accelerate capital recycling."
                : results.paybackMonths <= 24
                ? "Average payback period. Scaling will require significant capital. Focus on margin improvement or CAC reduction."
                : "Long payback period. This business model requires substantial capital to scale. Prioritize fixing either CAC (channel efficiency) or margin (pricing/costs)."}
            </p>
          </div>
        </div>
      </div>
    </CalculatorShell>
  )
}
