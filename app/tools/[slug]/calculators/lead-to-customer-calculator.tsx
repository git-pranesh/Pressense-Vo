'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateLeadToCustomer } from '@/lib/calculators/calculations'
import { formatCurrency, formatPercent, formatNumber } from '@/lib/calculators/format'

export default function LeadToCustomerCalculator() {
  const calculator = getCalculatorBySlug('lead-to-customer-calculator')!
  
  const [leads, setLeads] = useState(500)
  const [customers, setCustomers] = useState(50)
  const [dealValue, setDealValue] = useState(3000)

  const result = calculateLeadToCustomer({ leads, customers, dealValue })

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-3">
        <NumberField label="Leads" value={leads} onChange={setLeads} />
        <NumberField label="Customers" value={customers} onChange={setCustomers} />
        <NumberField label="Deal Value" value={dealValue} onChange={setDealValue} prefix="$" />
      </div>

      <PrimaryMetric
        label="Lead to Customer Rate"
        value={formatPercent(result.rate)}
        comparison={`${result.rating}, Value per lead: ${formatCurrency(result.valuePerLead)}`}
      />

      <MetricGrid>
        <MetricCard label="Conversion Rate" value={formatPercent(result.rate)} />
        <MetricCard label="Total Revenue" value={formatCurrency(result.revenue)} />
        <MetricCard label="Value per Lead" value={formatCurrency(result.valuePerLead)} />
        <MetricCard label="Rating" value={result.rating} />
      </MetricGrid>
    </CalculatorShell>
  )
}
