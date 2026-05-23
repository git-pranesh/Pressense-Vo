'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { formatCurrency, formatPercent } from '@/lib/calculators/format'

export default function PPCAdROICalculator() {
  const calculator = getCalculatorBySlug('ppc-ad-roi-calculator')!
  
  const [adSpend, setAdSpend] = useState(10000)
  const [clicks, setClicks] = useState(2000)
  const [conversions, setConversions] = useState(40)
  const [dealValue, setDealValue] = useState(1500)
  const [grossMarginPercent, setGrossMarginPercent] = useState(75)

  const revenue = conversions * dealValue
  const roas = adSpend > 0 ? revenue / adSpend : 0
  const grossProfit = revenue * (grossMarginPercent / 100)
  const profitRoas = adSpend > 0 ? grossProfit / adSpend : 0
  const cpc = clicks > 0 ? adSpend / clicks : 0
  const cpa = conversions > 0 ? adSpend / conversions : 0
  const conversionRate = clicks > 0 ? (conversions / clicks) * 100 : 0

  const rating = profitRoas >= 3 ? 'Excellent' : profitRoas >= 2 ? 'Good' : profitRoas >= 1 ? 'Break-even' : 'Unprofitable'

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NumberField label="Ad Spend" value={adSpend} onChange={setAdSpend} prefix="$" />
        <NumberField label="Clicks" value={clicks} onChange={setClicks} />
        <NumberField label="Conversions" value={conversions} onChange={setConversions} />
        <NumberField label="Deal Value" value={dealValue} onChange={setDealValue} prefix="$" />
        <NumberField label="Gross Margin %" value={grossMarginPercent} onChange={setGrossMarginPercent} suffix="%" />
      </div>

      <PrimaryMetric
        label="Profit ROAS"
        value={`${profitRoas.toFixed(2)}x`}
        comparison={`${rating} — Revenue ROAS: ${roas.toFixed(2)}x`}
      />

      <MetricGrid>
        <MetricCard label="Revenue" value={formatCurrency(revenue)} />
        <MetricCard label="CPC" value={formatCurrency(cpc)} />
        <MetricCard label="CPA" value={formatCurrency(cpa)} />
        <MetricCard label="Conv Rate" value={formatPercent(conversionRate)} />
      </MetricGrid>
    </CalculatorShell>
  )
}
