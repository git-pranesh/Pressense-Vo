'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateGTMROI } from '@/lib/calculators/calculations'
import { formatCurrency, formatNumber, formatPercent } from '@/lib/calculators/format'

export default function GTMROICalculator() {
  const meta = getCalculatorBySlug('gtm-roi-calculator')!
  const [marketingSpend, setMarketingSpend] = useState(150000)
  const [salesSpend, setSalesSpend] = useState(250000)
  const [revenue, setRevenue] = useState(1200000)

  const totalSpend = marketingSpend + salesSpend
  const results = calculateGTMROI({ spend: totalSpend, revenue })

  const getRatingColor = () => {
    if (results.rating === 'Excellent') return 'text-green-600'
    if (results.rating === 'Good') return 'text-blue-600'
    if (results.rating === 'Average') return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <CalculatorShell meta={meta}>
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground">GTM Investment</h3>
          <NumberField
            label="Marketing Spend (Monthly)"
            value={marketingSpend}
            onChange={setMarketingSpend}
            prefix="$"
            min={0}
            step={5000}
          />
          <NumberField
            label="Sales Spend (Monthly)"
            value={salesSpend}
            onChange={setSalesSpend}
            prefix="$"
            min={0}
            step={5000}
          />
          <NumberField
            label="Revenue Generated (Monthly)"
            value={revenue}
            onChange={setRevenue}
            prefix="$"
            min={0}
            step={10000}
          />
        </div>

        {/* Results */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground">GTM ROI</h3>
          <MetricGrid>
            <MetricCard
              label="ROI Multiple"
              value={`${formatNumber(results.roiMultiple, 1)}x`}
              description={results.rating}
              className={getRatingColor()}
            />
            <MetricCard
              label="ROI Percentage"
              value={formatPercent(results.roiPercent)}
              description="(Revenue - Spend) / Spend"
            />
            <MetricCard
              label="Total GTM Spend"
              value={formatCurrency(totalSpend)}
              description="Marketing + Sales"
            />
            <MetricCard
              label="Gross Profit"
              value={formatCurrency(revenue - totalSpend)}
              description="Before other costs"
            />
          </MetricGrid>

          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <h4 className="font-medium text-foreground mb-2">Interpretation</h4>
            <p className="text-sm text-muted-foreground">
              {results.roiMultiple >= 5
                ? "Excellent GTM efficiency. You may be under-investing in growth, competitors could outspend you. Consider scaling your best-performing channels."
                : results.roiMultiple >= 3
                ? "Good GTM efficiency. Your spend is generating sustainable returns. Look for opportunities to improve conversion rates and expand winning channels."
                : results.roiMultiple >= 1
                ? "Average GTM efficiency. You're not losing money, but margins are thin. Audit channel-by-channel ROI and cut the bottom 20% of spend."
                : "Poor GTM efficiency. You're spending more than you're earning. Pause scaling and diagnose whether it's a channel problem, conversion problem, or pricing problem."}
            </p>
          </div>
        </div>
      </div>
    </CalculatorShell>
  )
}
