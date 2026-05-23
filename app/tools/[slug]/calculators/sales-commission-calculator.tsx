'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateSalesCommission } from '@/lib/calculators/calculations'
import { formatCurrency, formatPercent } from '@/lib/calculators/format'

export default function SalesCommissionCalculator() {
  const calculator = getCalculatorBySlug('sales-commission-calculator')!
  
  const [quota, setQuota] = useState(500000)
  const [actual, setActual] = useState(600000)
  const [baseRate, setBaseRate] = useState(10)
  const [tier1Threshold, setTier1Threshold] = useState(100)
  const [tier1Bonus, setTier1Bonus] = useState(15)
  const [tier2Threshold, setTier2Threshold] = useState(120)
  const [tier2Bonus, setTier2Bonus] = useState(20)
  const [baseSalary, setBaseSalary] = useState(80000)

  const result = calculateSalesCommission({ quota, actual, baseRate, tier1Threshold, tier1Bonus, tier2Threshold, tier2Bonus, baseSalary })

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <NumberField label="Quota" value={quota} onChange={setQuota} prefix="$" />
        <NumberField label="Actual Revenue" value={actual} onChange={setActual} prefix="$" />
        <NumberField label="Base Rate %" value={baseRate} onChange={setBaseRate} suffix="%" />
        <NumberField label="Base Salary" value={baseSalary} onChange={setBaseSalary} prefix="$" />
        <NumberField label="Tier 1 Threshold %" value={tier1Threshold} onChange={setTier1Threshold} suffix="%" />
        <NumberField label="Tier 1 Bonus %" value={tier1Bonus} onChange={setTier1Bonus} suffix="%" />
        <NumberField label="Tier 2 Threshold %" value={tier2Threshold} onChange={setTier2Threshold} suffix="%" />
        <NumberField label="Tier 2 Bonus %" value={tier2Bonus} onChange={setTier2Bonus} suffix="%" />
      </div>

      <PrimaryMetric
        label="Total Commission"
        value={formatCurrency(result.totalCommission)}
        comparison={`Attainment: ${formatPercent(result.attainment)}`}
      />

      <MetricGrid>
        <MetricCard label="Base Commission" value={formatCurrency(result.breakdown.baseCommission)} />
        <MetricCard label="Tier 1 Bonus" value={formatCurrency(result.breakdown.bonus1)} />
        <MetricCard label="Tier 2 Bonus" value={formatCurrency(result.breakdown.bonus2)} />
        <MetricCard label="Total Comp" value={formatCurrency(result.totalComp)} />
      </MetricGrid>
    </CalculatorShell>
  )
}
