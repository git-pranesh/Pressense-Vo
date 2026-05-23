'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateContentMarketingROI } from '@/lib/calculators/calculations'
import { formatCurrency, formatNumber, formatPercent } from '@/lib/calculators/format'

export default function ContentMarketingROICalculator() {
  const meta = getCalculatorBySlug('content-marketing-roi-calculator')!
  const [monthlySpend, setMonthlySpend] = useState(10000)
  const [leads, setLeads] = useState(150)
  const [conversionPercent, setConversionPercent] = useState(5)
  const [dealValue, setDealValue] = useState(5000)

  const results = calculateContentMarketingROI({ monthlySpend, leads, conversionPercent, dealValue })

  const getROIColor = () => {
    if (results.roiPercent >= 200) return 'text-green-600'
    if (results.roiPercent >= 100) return 'text-blue-600'
    if (results.roiPercent >= 0) return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <CalculatorShell meta={meta}>
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground">Content Investment</h3>
          <NumberField
            label="Monthly Content Spend"
            value={monthlySpend}
            onChange={setMonthlySpend}
            prefix="$"
            min={0}
            step={1000}
          />
          <NumberField
            label="Monthly Leads Generated"
            value={leads}
            onChange={setLeads}
            min={0}
            step={10}
          />
          <NumberField
            label="Lead-to-Customer Rate"
            value={conversionPercent}
            onChange={setConversionPercent}
            suffix="%"
            min={0}
            max={100}
            step={0.5}
          />
          <NumberField
            label="Average Deal Value"
            value={dealValue}
            onChange={setDealValue}
            prefix="$"
            min={0}
            step={500}
          />
        </div>

        {/* Results */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground">Content ROI</h3>
          <MetricGrid>
            <MetricCard
              label="Monthly ROI"
              value={formatPercent(results.roiPercent)}
              description={results.roiPercent >= 0 ? 'Profitable' : 'Loss'}
              className={getROIColor()}
            />
            <MetricCard
              label="Customers Acquired"
              value={formatNumber(results.customers, 1)}
              description="From content leads"
            />
            <MetricCard
              label="Revenue Generated"
              value={formatCurrency(results.revenue)}
              description="From content pipeline"
            />
            <MetricCard
              label="Cost Per Customer"
              value={formatCurrency(results.customers > 0 ? monthlySpend / results.customers : 0)}
              description="Content CAC"
            />
          </MetricGrid>

          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <h4 className="font-medium text-foreground mb-2">Interpretation</h4>
            <p className="text-sm text-muted-foreground">
              {results.roiPercent >= 200
                ? "Excellent content ROI. Your content is a high-performing acquisition channel. Consider increasing investment to scale the program."
                : results.roiPercent >= 100
                ? "Good content ROI. You're generating solid returns. Focus on improving lead quality and conversion rates for even better results."
                : results.roiPercent >= 0
                ? "Positive but modest ROI. Content may still be ramping up (typical for SEO-driven content). Evaluate whether to double down or optimize existing assets."
                : results.roiPercent >= -50
                ? "Negative ROI but potentially recoverable. If content is less than 6 months old, this may be normal. Focus on higher-intent content types like calculators and comparison pages."
                : "Deep negative ROI. Either content strategy needs rethinking, or conversion rates are broken. Audit what's driving leads and whether they're the right leads."}
            </p>
          </div>
        </div>
      </div>
    </CalculatorShell>
  )
}
