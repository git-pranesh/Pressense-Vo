'use client'

import { useState } from 'react'
import { CalculatorShell } from '@/components/calculators/calculator-shell'
import { NumberField } from '@/components/calculators/number-field'
import { MetricCard, MetricGrid } from '@/components/calculators/metric-card'
import { getCalculatorBySlug } from '@/lib/calculators'
import { calculateLeadScore } from '@/lib/calculators/calculations'
import { formatNumber } from '@/lib/calculators/format'

export default function LeadScoringCalculator() {
  const meta = getCalculatorBySlug('lead-scoring-calculator')!
  const [budgetScore, setBudgetScore] = useState(20)
  const [authorityScore, setAuthorityScore] = useState(25)
  const [needScore, setNeedScore] = useState(20)
  const [timelineScore, setTimelineScore] = useState(15)

  const results = calculateLeadScore({
    scores: [budgetScore, authorityScore, needScore, timelineScore],
  })

  const getTierColor = () => {
    if (results.tier === 'Hot') return 'text-green-600'
    if (results.tier === 'Warm') return 'text-yellow-600'
    return 'text-red-600'
  }

  return (
    <CalculatorShell meta={meta}>
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground">BANT Scoring (0-25 each)</h3>
          <p className="text-sm text-muted-foreground">Score each BANT criterion from 0 (not qualified) to 25 (fully qualified).</p>
          
          <NumberField
            label="Budget (0-25)"
            value={budgetScore}
            onChange={setBudgetScore}
            min={0}
            max={25}
            step={5}
          />
          <NumberField
            label="Authority (0-25)"
            value={authorityScore}
            onChange={setAuthorityScore}
            min={0}
            max={25}
            step={5}
          />
          <NumberField
            label="Need (0-25)"
            value={needScore}
            onChange={setNeedScore}
            min={0}
            max={25}
            step={5}
          />
          <NumberField
            label="Timeline (0-25)"
            value={timelineScore}
            onChange={setTimelineScore}
            min={0}
            max={25}
            step={5}
          />
        </div>

        {/* Results */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-foreground">Lead Score</h3>
          <MetricGrid>
            <MetricCard
              label="Total Score"
              value={formatNumber(results.score, 0)}
              description={`out of 100`}
              className={getTierColor()}
            />
            <MetricCard
              label="Lead Tier"
              value={results.tier}
              description={results.action}
              className={getTierColor()}
            />
          </MetricGrid>

          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <h4 className="font-medium text-foreground mb-2">Recommended Action</h4>
            <p className="text-sm text-muted-foreground">
              {results.tier === 'Hot'
                ? "Hot lead, immediate sales contact required. This lead shows strong qualification across all BANT criteria. Route to your best available rep and aim for contact within 5 minutes. Every hour of delay reduces conversion probability."
                : results.tier === 'Warm'
                ? "Warm lead, MQL nurture sequence. This lead shows promise but isn't fully qualified. Add to your best-performing nurture sequence and monitor for increased engagement. They may need more education before sales contact."
                : "Cold lead, disqualify or long-term nurture. This lead doesn't currently meet qualification criteria. Either disqualify entirely or add to a low-touch, long-term nurture track. Don't waste sales cycles here."}
            </p>
          </div>

          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <h4 className="font-medium text-foreground mb-2">Score Breakdown</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Budget</span>
                <span className="font-medium">{budgetScore}/25</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Authority</span>
                <span className="font-medium">{authorityScore}/25</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Need</span>
                <span className="font-medium">{needScore}/25</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Timeline</span>
                <span className="font-medium">{timelineScore}/25</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CalculatorShell>
  )
}
