'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { formatCurrency, formatPercent } from '@/lib/calculators/format'

export default function MarketingROICalculator() {
  const calculator = getCalculatorBySlug('marketing-roi-calculator')!
  
  const [marketingSpend, setMarketingSpend] = useState(100000)
  const [attributedRevenue, setAttributedRevenue] = useState(400000)
  const [grossMarginPercent, setGrossMarginPercent] = useState(75)

  const grossProfit = attributedRevenue * (grossMarginPercent / 100)
  const netReturn = grossProfit - marketingSpend
  const roi = marketingSpend > 0 ? (netReturn / marketingSpend) * 100 : 0
  const revenueMultiple = marketingSpend > 0 ? attributedRevenue / marketingSpend : 0

  const rating = revenueMultiple >= 5 ? 'Excellent' : revenueMultiple >= 3 ? 'Good' : revenueMultiple >= 2 ? 'Fair' : 'Poor'

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Marketing Spend" value={marketingSpend} onChange={setMarketingSpend} prefix="$" />
        <NumberField label="Attributed Revenue" value={attributedRevenue} onChange={setAttributedRevenue} prefix="$" />
        <NumberField label="Gross Margin %" value={grossMarginPercent} onChange={setGrossMarginPercent} suffix="%" />
      </div>

      <PrimaryMetric
        label="Marketing ROI"
        value={formatPercent(roi)}
        comparison={`${rating}, ${revenueMultiple.toFixed(1)}x revenue per dollar spent`}
      />

      <MetricGrid>
        <MetricCard label="Gross Profit" value={formatCurrency(grossProfit)} />
        <MetricCard label="Net Return" value={formatCurrency(netReturn)} />
        <MetricCard label="Revenue Multiple" value={`${revenueMultiple.toFixed(1)}x`} />
        <MetricCard label="Rating" value={rating} />
      </MetricGrid>
    </CalculatorShell>
  )
}
