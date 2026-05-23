'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateSaasValuation } from '@/lib/calculators/calculations'
import { formatCurrency, formatNumber } from '@/lib/calculators/format'

export default function SaasValuationCalculator() {
  const meta = getCalculatorBySlug('saas-valuation-calculator')!
  const [arr, setARR] = useState(5000000)
  const [yoyGrowth, setYoyGrowth] = useState(80)
  const [nrr, setNRR] = useState(115)
  const [ebitdaMargin, setEbitdaMargin] = useState(-20)

  const results = calculateSaasValuation({ arr, yoyGrowthPercent: yoyGrowth, nrrPercent: nrr, ebitdaMargin })

  const getRuleOf40Color = () => {
    if (results.ruleOf40 >= 60) return 'text-green-600'
    if (results.ruleOf40 >= 40) return 'text-blue-600'
    if (results.ruleOf40 >= 30) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <CalculatorShell meta={meta}>
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground">Your Inputs</h3>
          <NumberField
            label="Annual Recurring Revenue (ARR)"
            value={arr}
            onChange={setARR}
            prefix="$"
            min={0}
            step={100000}
          />
          <NumberField
            label="Year-over-Year Growth Rate"
            value={yoyGrowth}
            onChange={setYoyGrowth}
            suffix="%"
            min={0}
            max={500}
          />
          <NumberField
            label="Net Revenue Retention (NRR)"
            value={nrr}
            onChange={setNRR}
            suffix="%"
            min={0}
            max={200}
          />
          <NumberField
            label="EBITDA Margin"
            value={ebitdaMargin}
            onChange={setEbitdaMargin}
            suffix="%"
            min={-100}
            max={100}
          />
        </div>

        {/* Results */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground">Estimated Valuation</h3>
          <MetricGrid>
            <MetricCard
              label="Enterprise Value"
              value={formatCurrency(results.valuation)}
              description="Based on ARR multiple"
              className="text-primary"
            />
            <MetricCard
              label="ARR Multiple"
              value={`${formatNumber(results.multiple, 1)}x`}
              description="Growth + NRR adjusted"
            />
            <MetricCard
              label="Rule of 40"
              value={formatNumber(results.ruleOf40, 0)}
              description={results.ruleOf40 >= 40 ? 'Passing' : 'Below threshold'}
              className={getRuleOf40Color()}
            />
          </MetricGrid>

          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <h4 className="font-medium text-foreground mb-2">Interpretation</h4>
            <p className="text-sm text-muted-foreground">
              {results.multiple >= 10
                ? "Premium valuation territory. Your combination of growth, retention, and efficiency commands top-quartile multiples. This is venture-scale performance."
                : results.multiple >= 7
                ? "Strong valuation. You're trading at or above median public SaaS multiples. Focus on maintaining growth while improving efficiency."
                : results.multiple >= 5
                ? "Moderate valuation. Your multiple is below median for high-growth SaaS. Improving NRR or growth rate would have the biggest impact on multiple expansion."
                : "Discounted valuation. The market is applying a discount due to lower growth, NRR below 100%, or poor efficiency. Fix the fundamentals before fundraising."}
            </p>
          </div>

          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <p className="text-xs text-muted-foreground">
              <strong>Note:</strong> This is an indicative estimate using normalized multiples. Actual valuations depend on market conditions, comparable transactions, strategic value, and deal-specific factors.
            </p>
          </div>
        </div>
      </div>
    </CalculatorShell>
  )
}
