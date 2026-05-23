'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateBuildVsBuy } from '@/lib/calculators/calculations'
import { formatCurrency, formatNumber } from '@/lib/calculators/format'

export default function NoCodeBuildVsBuyCalculator() {
  const calculator = getCalculatorBySlug('no-code-build-vs-buy-calculator')!
  
  const [buildCostUpfront, setBuildCostUpfront] = useState(20000)
  const [buildMonthsToShip, setBuildMonthsToShip] = useState(3)
  const [buildMonthlyMaintenance, setBuildMonthlyMaintenance] = useState(500)
  const [buyMonthlyCost, setBuyMonthlyCost] = useState(500)
  const [buySetupCost, setBuySetupCost] = useState(2000)
  const [devHourlyCost, setDevHourlyCost] = useState(150)
  const [monthsHorizon, setMonthsHorizon] = useState(24)

  const result = calculateBuildVsBuy({ buildCostUpfront, buildMonthsToShip, buildMonthlyMaintenance, buyMonthlyCost, buySetupCost, devHourlyCost, monthsHorizon })

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NumberField label="Build Cost (Upfront)" value={buildCostUpfront} onChange={setBuildCostUpfront} prefix="$" />
        <NumberField label="Build Time (Months)" value={buildMonthsToShip} onChange={setBuildMonthsToShip} />
        <NumberField label="Build Monthly Maintenance" value={buildMonthlyMaintenance} onChange={setBuildMonthlyMaintenance} prefix="$" />
        <NumberField label="Buy Monthly Cost" value={buyMonthlyCost} onChange={setBuyMonthlyCost} prefix="$" />
        <NumberField label="Buy Setup Cost" value={buySetupCost} onChange={setBuySetupCost} prefix="$" />
        <NumberField label="Dev Hourly Cost" value={devHourlyCost} onChange={setDevHourlyCost} prefix="$" />
        <NumberField label="Months Horizon" value={monthsHorizon} onChange={setMonthsHorizon} />
      </div>

      <PrimaryMetric
        label="Recommendation"
        value={result.recommendation}
        comparison={`Savings: ${formatCurrency(Math.abs(result.savings))} over ${monthsHorizon} months`}
      />

      <MetricGrid>
        <MetricCard label="Build TCO" value={formatCurrency(result.buildTCO)} />
        <MetricCard label="Buy TCO" value={formatCurrency(result.buyTCO)} />
        <MetricCard label="Opportunity Cost" value={formatCurrency(result.buildOpportunityCost)} />
        <MetricCard label="Break-even" value={result.breakevenMonths > 0 ? `${formatNumber(result.breakevenMonths)} mo` : 'N/A'} />
      </MetricGrid>
    </CalculatorShell>
  )
}
