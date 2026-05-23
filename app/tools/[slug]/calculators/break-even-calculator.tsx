'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateBreakEven } from '@/lib/calculators/calculations'
import { formatCurrency, formatNumber } from '@/lib/calculators/format'

export default function BreakEvenCalculator() {
  const meta = getCalculatorBySlug('break-even-calculator')!
  const [fixedCosts, setFixedCosts] = useState(50000)
  const [variableCost, setVariableCost] = useState(20)
  const [price, setPrice] = useState(100)
  const [monthlySales, setMonthlySales] = useState(1000)

  const results = calculateBreakEven({
    fixedCosts,
    variableCostPerUnit: variableCost,
    pricePerUnit: price,
    monthlySalesUnits: monthlySales,
  })

  const getBreakEvenColor = () => {
    if (results.breakevenMonths <= 12) return 'text-green-600'
    if (results.breakevenMonths <= 24) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <CalculatorShell meta={meta}>
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground">Cost Structure</h3>
          <NumberField
            label="Monthly Fixed Costs"
            value={fixedCosts}
            onChange={setFixedCosts}
            prefix="$"
            min={0}
            step={5000}
          />
          <NumberField
            label="Variable Cost per Unit"
            value={variableCost}
            onChange={setVariableCost}
            prefix="$"
            min={0}
            step={5}
          />
          <NumberField
            label="Price per Unit"
            value={price}
            onChange={setPrice}
            prefix="$"
            min={0}
            step={10}
          />
          <NumberField
            label="Monthly Sales Volume (units)"
            value={monthlySales}
            onChange={setMonthlySales}
            min={0}
            step={100}
          />
        </div>

        {/* Results */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground">Break-Even Analysis</h3>
          <MetricGrid>
            <MetricCard
              label="Break-Even Units"
              value={isFinite(results.breakevenUnits) ? formatNumber(results.breakevenUnits, 0) : 'N/A'}
              description="Units to cover costs"
            />
            <MetricCard
              label="Break-Even Time"
              value={isFinite(results.breakevenMonths) ? `${formatNumber(results.breakevenMonths, 1)} months` : 'Never'}
              description="At current sales rate"
              className={getBreakEvenColor()}
            />
            <MetricCard
              label="Contribution Margin"
              value={formatCurrency(results.contributionMargin)}
              description={`${formatNumber(results.contributionMarginPercent, 0)}% of price`}
            />
            <MetricCard
              label="Monthly Profit"
              value={formatCurrency((monthlySales * results.contributionMargin) - fixedCosts)}
              description="After break-even"
            />
          </MetricGrid>

          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <h4 className="font-medium text-foreground mb-2">Interpretation</h4>
            <p className="text-sm text-muted-foreground">
              {results.contributionMargin <= 0
                ? "Warning: Your contribution margin is negative. You lose money on every unit sold, even before fixed costs. Increase price or reduce variable costs immediately."
                : results.breakevenMonths <= 12
                ? "Healthy break-even timeline. You'll recover your investment within a year. Consider accelerating growth investments once you're past break-even."
                : results.breakevenMonths <= 24
                ? "Moderate break-even timeline. Focus on either increasing price, reducing costs, or accelerating sales volume to compress the timeline."
                : isFinite(results.breakevenMonths)
                ? "Long break-even timeline. This business model requires significant capital patience. Evaluate whether pricing changes or cost cuts could improve the trajectory."
                : "Unable to break even at current rates. Sales volume is too low relative to fixed costs. You need to dramatically increase volume or reduce fixed costs."}
            </p>
          </div>
        </div>
      </div>
    </CalculatorShell>
  )
}
