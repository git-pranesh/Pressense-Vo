'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateAtRiskScore } from '@/lib/calculators/calculations'

export default function AtRiskCustomerIdentifierCalculator() {
  const calculator = getCalculatorBySlug('at-risk-customer-identifier')!
  
  const [usageDropPercent, setUsageDropPercent] = useState(30)
  const [ticketsTrend, setTicketsTrend] = useState(40)
  const [npsScore, setNpsScore] = useState(5)
  const [paymentLatenessDays, setPaymentLatenessDays] = useState(15)
  const [executiveEngagement, setExecutiveEngagement] = useState(3)
  const [contractMonthsRemaining, setContractMonthsRemaining] = useState(4)

  const result = calculateAtRiskScore({ usageDropPercent, ticketsTrend, npsScore, paymentLatenessDays, executiveEngagement, contractMonthsRemaining })

  const tierColor = result.tier === 'Critical' ? 'text-red-500' : result.tier === 'High' ? 'text-orange-500' : result.tier === 'Medium' ? 'text-yellow-500' : 'text-green-500'

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NumberField label="Usage Drop %" value={usageDropPercent} onChange={setUsageDropPercent} suffix="%" />
        <NumberField label="Tickets Trend (0-100)" value={ticketsTrend} onChange={setTicketsTrend} />
        <NumberField label="NPS Score (0-10)" value={npsScore} onChange={setNpsScore} min={0} max={10} />
        <NumberField label="Payment Lateness (days)" value={paymentLatenessDays} onChange={setPaymentLatenessDays} />
        <NumberField label="Exec Engagement (0-10)" value={executiveEngagement} onChange={setExecutiveEngagement} min={0} max={10} />
        <NumberField label="Contract Months Left" value={contractMonthsRemaining} onChange={setContractMonthsRemaining} />
      </div>

      <PrimaryMetric
        label="Risk Score"
        value={result.riskScore.toFixed(0)}
        comparison={<span className={tierColor}>{result.tier} Risk</span>}
      />

      <MetricGrid>
        <MetricCard label="Usage Risk" value={result.breakdown.usageRisk.toFixed(0)} />
        <MetricCard label="NPS Risk" value={result.breakdown.npsRisk.toFixed(0)} />
        <MetricCard label="Payment Risk" value={result.breakdown.paymentRisk.toFixed(0)} />
        <MetricCard label="Action" value={result.tier === 'Critical' ? 'Exec escalation' : result.tier === 'High' ? 'Urgent QBR' : 'Monitor'} />
      </MetricGrid>
    </CalculatorShell>
  )
}
