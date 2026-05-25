'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateCashRunway } from '@/lib/calculators/calculations'
import { formatCurrency, formatNumber } from '@/lib/calculators/format'

export default function CashRunwayCalculator() {
  const calculator = getCalculatorBySlug('cash-runway-calculator')!
  
  const [cashInBank, setCashInBank] = useState(2000000)
  const [monthlyBurn, setMonthlyBurn] = useState(150000)
  const [monthlyHireAdditions, setMonthlyHireAdditions] = useState(25000)

  const result = calculateCashRunway({ cashInBank, monthlyBurn, monthlyHireAdditions })

  const runwayStatus = result.adjustedRunway >= 18 ? 'Healthy' : result.adjustedRunway >= 12 ? 'Caution' : 'Critical'

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Cash in Bank" value={cashInBank} onChange={setCashInBank} prefix="$" />
        <NumberField label="Current Monthly Burn" value={monthlyBurn} onChange={setMonthlyBurn} prefix="$" />
        <NumberField label="Monthly Hire Additions" value={monthlyHireAdditions} onChange={setMonthlyHireAdditions} prefix="$" />
      </div>

      <PrimaryMetric
        label="Adjusted Runway"
        value={`${formatNumber(result.adjustedRunway)} months`}
        comparison={`${runwayStatus}, Base runway: ${formatNumber(result.baseRunway)} months`}
      />

      <MetricGrid>
        <MetricCard label="Base Runway" value={`${formatNumber(result.baseRunway)} mo`} />
        <MetricCard label="Adjusted Runway" value={`${formatNumber(result.adjustedRunway)} mo`} />
        <MetricCard label="Adjusted Burn" value={formatCurrency(result.adjustedBurn)} />
        <MetricCard label="Status" value={runwayStatus} />
      </MetricGrid>
    </CalculatorShell>
  )
}
