'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateRemoteVsOffice } from '@/lib/calculators/calculations'
import { formatCurrency } from '@/lib/calculators/format'

export default function RemoteVsOfficeROICalculator() {
  const calculator = getCalculatorBySlug('remote-vs-office-roi-calculator')!
  
  const [teamSize, setTeamSize] = useState(15)
  const [officeRentMonthly, setOfficeRentMonthly] = useState(8000)
  const [officeUtilitiesMonthly, setOfficeUtilitiesMonthly] = useState(1500)
  const [perEmployeeOfficeCost, setPerEmployeeOfficeCost] = useState(3000)
  const [productivityDeltaPercent, setProductivityDeltaPercent] = useState(5)
  const [fullyLoadedCost, setFullyLoadedCost] = useState(150000)

  const result = calculateRemoteVsOffice({ teamSize, officeRentMonthly, officeUtilitiesMonthly, perEmployeeOfficeCost, productivityDeltaPercent, fullyLoadedCost })

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NumberField label="Team Size" value={teamSize} onChange={setTeamSize} />
        <NumberField label="Office Rent (Monthly)" value={officeRentMonthly} onChange={setOfficeRentMonthly} prefix="$" />
        <NumberField label="Utilities (Monthly)" value={officeUtilitiesMonthly} onChange={setOfficeUtilitiesMonthly} prefix="$" />
        <NumberField label="Per Employee Office Cost" value={perEmployeeOfficeCost} onChange={setPerEmployeeOfficeCost} prefix="$" />
        <NumberField label="Productivity Delta %" value={productivityDeltaPercent} onChange={setProductivityDeltaPercent} suffix="%" />
        <NumberField label="Fully Loaded Cost" value={fullyLoadedCost} onChange={setFullyLoadedCost} prefix="$" />
      </div>

      <PrimaryMetric
        label="Recommendation"
        value={result.recommendation}
        comparison={`Net remote advantage: ${formatCurrency(result.netRemoteAdvantage)}`}
      />

      <MetricGrid>
        <MetricCard label="Annual Office Cost" value={formatCurrency(result.annualOfficeCost)} />
        <MetricCard label="Remote Setup Cost" value={formatCurrency(result.remoteSetupAnnual)} />
        <MetricCard label="Facility Savings" value={formatCurrency(result.facilitySavings)} />
        <MetricCard label="Productivity Impact" value={formatCurrency(result.productivityImpact)} />
      </MetricGrid>
    </CalculatorShell>
  )
}
