'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { PrimaryMetric, MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateContentPublishingROI } from '@/lib/calculators/calculations'
import { formatCurrency, formatPercent, formatNumber } from '@/lib/calculators/format'

export default function ContentPublishingROICalculator() {
  const calculator = getCalculatorBySlug('content-publishing-roi-calculator')!
  
  const [piecesPerMonth, setPiecesPerMonth] = useState(8)
  const [costPerPiece, setCostPerPiece] = useState(500)
  const [leadsPerPieceMonth, setLeadsPerPieceMonth] = useState(5)
  const [conversionPercent, setConversionPercent] = useState(2)
  const [dealValue, setDealValue] = useState(3000)
  const [monthsHorizon, setMonthsHorizon] = useState(12)

  const result = calculateContentPublishingROI({ piecesPerMonth, costPerPiece, leadsPerPieceMonth, conversionPercent, dealValue, monthsHorizon })

  return (
    <CalculatorShell calculator={calculator}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <NumberField label="Pieces per Month" value={piecesPerMonth} onChange={setPiecesPerMonth} />
        <NumberField label="Cost per Piece" value={costPerPiece} onChange={setCostPerPiece} prefix="$" />
        <NumberField label="Leads per Piece/Month" value={leadsPerPieceMonth} onChange={setLeadsPerPieceMonth} />
        <NumberField label="Conversion %" value={conversionPercent} onChange={setConversionPercent} suffix="%" />
        <NumberField label="Deal Value" value={dealValue} onChange={setDealValue} prefix="$" />
        <NumberField label="Months Horizon" value={monthsHorizon} onChange={setMonthsHorizon} />
      </div>

      <PrimaryMetric
        label="Content ROI"
        value={formatPercent(result.roiPercent)}
        comparison={result.paybackMonth > 0 ? `Payback in month ${result.paybackMonth}` : 'No payback in horizon'}
      />

      <MetricGrid>
        <MetricCard label="Total Spend" value={formatCurrency(result.totalSpend)} />
        <MetricCard label="Total Revenue" value={formatCurrency(result.totalRevenue)} />
        <MetricCard label="Total Leads" value={formatNumber(result.totalLeads)} />
        <MetricCard label="Customers" value={formatNumber(result.totalCustomers)} />
      </MetricGrid>
    </CalculatorShell>
  )
}
