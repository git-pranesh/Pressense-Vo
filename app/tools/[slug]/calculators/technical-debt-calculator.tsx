'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateTechnicalDebt } from '@/lib/calculators/calculations'
import { formatCurrency, formatNumber } from '@/lib/calculators/format'

export default function TechnicalDebtCalculator() {
  const calculator = getCalculatorBySlug('technical-debt-calculator')!
  
  const [teamSize, setTeamSize] = useState(8)
  const [avgFullyLoadedCost, setAvgFullyLoadedCost] = useState(180000)
  const [percentTimeOnDebt, setPercentTimeOnDebt] = useState(20)
  const [debtItemsCount, setDebtItemsCount] = useState(50)
  const [monthsAccrued, setMonthsAccrued] = useState(12)

  const result = calculateTechnicalDebt({ teamSize, avgFullyLoadedCost, percentTimeOnDebt, debtItemsCount, monthsAccrued })

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NumberField label="Team Size" value={teamSize} onChange={setTeamSize} />
        <NumberField label="Avg Fully Loaded Cost" value={avgFullyLoadedCost} onChange={setAvgFullyLoadedCost} prefix="$" />
        <NumberField label="% Time on Debt" value={percentTimeOnDebt} onChange={setPercentTimeOnDebt} suffix="%" />
        <NumberField label="Debt Items Count" value={debtItemsCount} onChange={setDebtItemsCount} />
        <NumberField label="Months Accrued" value={monthsAccrued} onChange={setMonthsAccrued} />
      </div>

      <PrimaryMetric
        label="Annual Interest Cost"
        value={formatCurrency(result.annualInterestCost)}
        comparison={`${result.rating} — Monthly cost: ${formatCurrency(result.monthlyInterestCost)}`}
      />

      <MetricGrid>
        <MetricCard label="Monthly Interest" value={formatCurrency(result.monthlyInterestCost)} />
        <MetricCard label="Annual Interest" value={formatCurrency(result.annualInterestCost)} />
        <MetricCard label="Cost per Debt Item" value={formatCurrency(result.costPerDebtItem)} />
        <MetricCard label="Rating" value={result.rating} />
      </MetricGrid>
    </CalculatorShell>
  )
}
