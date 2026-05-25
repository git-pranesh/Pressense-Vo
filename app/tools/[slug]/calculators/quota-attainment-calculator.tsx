'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateQuotaAttainment } from '@/lib/calculators/calculations'
import { formatCurrency, formatPercent } from '@/lib/calculators/format'

export default function QuotaAttainmentCalculator() {
  const calculator = getCalculatorBySlug('quota-attainment-calculator')!
  
  const [quota, setQuota] = useState(500000)
  const [actual, setActual] = useState(575000)
  const [baseSalary, setBaseSalary] = useState(80000)
  const [ote, setOte] = useState(160000)
  const [accelerator, setAccelerator] = useState(150)

  const result = calculateQuotaAttainment({ quota, actual, baseSalary, ote, accelerator })

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NumberField label="Quota" value={quota} onChange={setQuota} prefix="$" />
        <NumberField label="Actual Revenue" value={actual} onChange={setActual} prefix="$" />
        <NumberField label="Base Salary" value={baseSalary} onChange={setBaseSalary} prefix="$" />
        <NumberField label="OTE" value={ote} onChange={setOte} prefix="$" />
        <NumberField label="Accelerator %" value={accelerator} onChange={setAccelerator} suffix="%" />
      </div>

      <PrimaryMetric
        label="Quota Attainment"
        value={formatPercent(result.attainment)}
        comparison={`${result.rating}, Total comp: ${formatCurrency(result.totalComp)}`}
      />

      <MetricGrid>
        <MetricCard label="Attainment" value={formatPercent(result.attainment)} />
        <MetricCard label="Variable Earned" value={formatCurrency(result.earnedVariable)} />
        <MetricCard label="Total Comp" value={formatCurrency(result.totalComp)} />
        <MetricCard label="Rating" value={result.rating} />
      </MetricGrid>
    </CalculatorShell>
  )
}
