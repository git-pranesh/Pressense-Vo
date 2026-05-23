'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateSaasPricing } from '@/lib/calculators/calculations'
import { formatCurrency, formatPercent } from '@/lib/calculators/format'

export default function SaasPricingCalculator() {
  const calculator = getCalculatorBySlug('saas-pricing-calculator')!
  
  const [wtp, setWtp] = useState(500)
  const [costToServe, setCostToServe] = useState(50)
  const [targetMargin, setTargetMargin] = useState(80)
  const [competitorPrice, setCompetitorPrice] = useState(400)
  const [valueDeliveredAnnually, setValueDeliveredAnnually] = useState(5000)

  const result = calculateSaasPricing({ wtp, costToServe, targetMargin, competitorPrice, valueDeliveredAnnually })

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NumberField label="Willingness to Pay" value={wtp} onChange={setWtp} prefix="$" />
        <NumberField label="Cost to Serve" value={costToServe} onChange={setCostToServe} prefix="$" />
        <NumberField label="Target Margin %" value={targetMargin} onChange={setTargetMargin} suffix="%" />
        <NumberField label="Competitor Price" value={competitorPrice} onChange={setCompetitorPrice} prefix="$" />
        <NumberField label="Value Delivered (Annual)" value={valueDeliveredAnnually} onChange={setValueDeliveredAnnually} prefix="$" />
      </div>

      <PrimaryMetric
        label="Recommended Price"
        value={formatCurrency(result.recommended)}
        comparison={`Captures ${formatPercent(result.valueCaptureRatio * 100)} of value delivered`}
      />

      <MetricGrid>
        <MetricCard label="Cost-Plus Floor" value={formatCurrency(result.costPlusFloor)} />
        <MetricCard label="Value Ceiling" value={formatCurrency(result.valueBasedCeiling)} />
        <MetricCard label="Margin at Price" value={formatPercent(result.marginAtPrice)} />
        <MetricCard label="Value Capture" value={formatPercent(result.valueCaptureRatio * 100)} />
      </MetricGrid>
    </CalculatorShell>
  )
}
