'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateFunnelConversion } from '@/lib/calculators/calculations'
import { formatCurrency, formatNumber, formatPercent } from '@/lib/calculators/format'

export default function FunnelConversionCalculator() {
  const meta = getCalculatorBySlug('funnel-conversion-calculator')!
  const [visitors, setVisitors] = useState(10000)
  const [leads, setLeads] = useState(300)
  const [mqls, setMQLs] = useState(90)
  const [sqls, setSQLs] = useState(45)
  const [opps, setOpps] = useState(20)
  const [customers, setCustomers] = useState(5)
  const [dealValue, setDealValue] = useState(10000)

  const results = calculateFunnelConversion({ visitors, leads, mqls, sqls, opps, customers, dealValue })

  return (
    <CalculatorShell meta={meta}>
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground">Funnel Stages</h3>
          <NumberField
            label="Website Visitors"
            value={visitors}
            onChange={setVisitors}
            min={0}
            step={1000}
          />
          <NumberField
            label="Leads"
            value={leads}
            onChange={setLeads}
            min={0}
            step={10}
          />
          <NumberField
            label="MQLs"
            value={mqls}
            onChange={setMQLs}
            min={0}
            step={5}
          />
          <NumberField
            label="SQLs"
            value={sqls}
            onChange={setSQLs}
            min={0}
            step={5}
          />
          <NumberField
            label="Opportunities"
            value={opps}
            onChange={setOpps}
            min={0}
            step={1}
          />
          <NumberField
            label="Closed-Won Customers"
            value={customers}
            onChange={setCustomers}
            min={0}
            step={1}
          />
          <NumberField
            label="Average Deal Value"
            value={dealValue}
            onChange={setDealValue}
            prefix="$"
            min={0}
            step={1000}
          />
        </div>

        {/* Results */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground">Funnel Analysis</h3>
          <MetricGrid>
            <MetricCard
              label="Overall Conversion"
              value={formatPercent(results.overallRate)}
              description="Visitor to Customer"
            />
            <MetricCard
              label="Revenue Per Visitor"
              value={formatCurrency(results.revenuePerVisitor)}
              description="Max profitable CPC"
            />
            <MetricCard
              label="Weakest Stage"
              value={results.weakestStage}
              description="Priority to fix"
              className="text-red-600"
            />
          </MetricGrid>

          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <h4 className="font-medium text-foreground mb-3">Stage-by-Stage Conversion</h4>
            <div className="space-y-2">
              {results.stageRates.map((stage) => (
                <div key={stage.name} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{stage.name}</span>
                  <span className={`font-medium ${stage.name === results.weakestStage ? 'text-red-600' : 'text-foreground'}`}>
                    {formatPercent(stage.rate)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <h4 className="font-medium text-foreground mb-2">Interpretation</h4>
            <p className="text-sm text-muted-foreground">
              Your weakest stage is <strong>{results.weakestStage}</strong>. Fixing this single bottleneck will compound through every downstream stage. 
              {results.weakestStage.includes('Visitor') && ' Focus on improving your landing page value proposition, reducing form friction, or adding high-intent CTAs like calculators.'}
              {results.weakestStage.includes('Lead to MQL') && ' Your lead quality may be low, or your MQL criteria too strict. Review what signals actually predict conversion.'}
              {results.weakestStage.includes('MQL to SQL') && ' The marketing-to-sales handoff is leaking pipeline. Align on MQL definitions and improve lead enrichment.'}
              {results.weakestStage.includes('SQL to Opp') && ' Sales development may need better qualification or follow-up cadences.'}
              {results.weakestStage.includes('Opp to Customer') && ' Your close rate needs work — focus on objection handling, pricing clarity, or competitive positioning.'}
            </p>
          </div>
        </div>
      </div>
    </CalculatorShell>
  )
}
