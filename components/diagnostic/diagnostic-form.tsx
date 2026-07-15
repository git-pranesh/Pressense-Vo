'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const areaOptions = [
  { value: 'advisory-strategy', label: 'Advisory & Strategy' },
  { value: 'internal-tools', label: 'Internal Tools' },
  { value: 'crm-erp', label: 'CRM & ERP Systems' },
  { value: 'content-authority', label: 'Content & Authority' },
  { value: 'websites-conversion', label: 'Websites & Conversion' },
  { value: 'ai-workflows', label: 'AI Workflows' },
  { value: 'not-sure', label: 'Not sure yet' },
]

const timelineOptions = [
  { value: 'immediate', label: 'Immediately' },
  { value: '1-month', label: 'Within 1 month' },
  { value: '1-3-months', label: '1-3 months' },
  { value: '3-plus', label: '3+ months' },
]

const budgetOptions = [
  { value: 'under-10k', label: 'Under $10K' },
  { value: '10k-25k', label: '$10K - $25K' },
  { value: '25k-50k', label: '$25K - $50K' },
  { value: '50k-100k', label: '$50K - $100K' },
  { value: 'over-100k', label: '$100K+' },
]

interface FormData {
  name: string
  email: string
  company: string
  whatDoes: string
  problem: string
  attempts: string
  area: string
  outcome: string
  timeline: string
  budget: string
}

const initialFormData: FormData = {
  name: '',
  email: '',
  company: '',
  whatDoes: '',
  problem: '',
  attempts: '',
  area: '',
  outcome: '',
  timeline: '',
  budget: '',
}

export function DiagnosticForm() {
  const searchParams = useSearchParams()
  const constraintParam = searchParams.get('constraint')
  
  const [formData, setFormData] = useState<FormData>({
    ...initialFormData,
    area: constraintParam ? mapConstraintToArea(constraintParam) : '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})

  function mapConstraintToArea(constraint: string): string {
    const mapping: Record<string, string> = {
      'founder-bottleneck': 'advisory-strategy',
      'pricing-leakage': 'advisory-strategy',
      'revenue-leakage': 'advisory-strategy',
      'gtm-clarity': 'advisory-strategy',
      'sales-marketing-connection': 'crm-erp',
      'crm-adoption': 'crm-erp',
      'customer-onboarding': 'internal-tools',
      'internal-tool-readiness': 'internal-tools',
      'visibility-personal-brand': 'content-authority',
      'website-clarity-conversion': 'websites-conversion',
      'ai-workflow-readiness': 'ai-workflows',
      'systems-audit': 'not-sure',
    }
    return mapping[constraint] || ''
  }

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.company.trim()) newErrors.company = 'Company is required'
    if (!formData.problem.trim()) newErrors.problem = 'Please describe your situation'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/diagnostic', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          role: formData.whatDoes,
          teamSize: formData.timeline,
          revenue: formData.budget,
          constraint: formData.problem,
          website: '',
          context: `Area: ${formData.area}\n\nWhat they've tried: ${formData.attempts}\n\nDesired outcome: ${formData.outcome}`,
        }),
      })

      if (!response.ok) {
        throw new Error('Submission failed')
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting your request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section
        id="diagnostic-form"
        className="py-20 lg:py-28"
        aria-labelledby="form-success-heading"
      >
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              aria-hidden="true"
              className="text-primary"
            >
              <path
                d="M6 14l6 6L22 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2
            className="text-3xl font-serif font-medium text-foreground mb-4"
            id="form-success-heading"
          >
            Diagnostic request received.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Thanks. We will review the context and respond if there is a clear fit for a diagnostic conversation.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section
      id="diagnostic-form"
      className="py-20 lg:py-28"
      aria-labelledby="form-heading"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="eyebrow mb-4">
            Share the context
          </p>
          <h2
            className="text-section-title font-serif font-medium text-foreground text-balance"
            id="form-heading"
          >
            Tell us about your business.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            You do not need to know the exact solution yet. The purpose of the diagnostic is to understand the constraint before deciding what to build or change.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8" noValidate>
          {/* Basic Info */}
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h3 className="text-lg font-medium font-sans text-foreground mb-6">
              Basic Information
            </h3>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">
                  Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  placeholder="Jane Doe"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-sm text-destructive">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">
                  Work Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  placeholder="jane@company.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-sm text-destructive">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Company */}
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="company">
                  Company / Website <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => updateField('company', e.target.value)}
                  placeholder="Acme Inc. or https://company.com"
                  aria-invalid={!!errors.company}
                  aria-describedby={errors.company ? 'company-error' : undefined}
                />
                {errors.company && (
                  <p id="company-error" className="text-sm text-destructive">
                    {errors.company}
                  </p>
                )}
              </div>

              {/* What does the business do */}
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="whatDoes">What does the business do?</Label>
                <Textarea
                  id="whatDoes"
                  value={formData.whatDoes}
                  onChange={(e) => updateField('whatDoes', e.target.value)}
                  placeholder="Brief description of your product, service, or business model..."
                  rows={2}
                />
              </div>
            </div>
          </div>

          {/* Diagnostic Context */}
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h3 className="text-lg font-medium font-sans text-foreground mb-6">
              Diagnostic Context
            </h3>

            <div className="space-y-6">
              {/* Problem */}
              <div className="space-y-2">
                <Label htmlFor="problem">
                  What feels unclear, broken, or stuck right now?{' '}
                  <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="problem"
                  value={formData.problem}
                  onChange={(e) => updateField('problem', e.target.value)}
                  placeholder="Describe the main challenge or constraint in your business right now..."
                  rows={4}
                  aria-invalid={!!errors.problem}
                  aria-describedby={errors.problem ? 'problem-error' : undefined}
                />
                {errors.problem && (
                  <p id="problem-error" className="text-sm text-destructive">
                    {errors.problem}
                  </p>
                )}
              </div>

              {/* Attempts */}
              <div className="space-y-2">
                <Label htmlFor="attempts">What have you already tried?</Label>
                <Textarea
                  id="attempts"
                  value={formData.attempts}
                  onChange={(e) => updateField('attempts', e.target.value)}
                  placeholder="Past consultants, internal efforts, tools, frameworks..."
                  rows={3}
                />
              </div>

              {/* Area */}
              <div className="space-y-2">
                <Label htmlFor="area">Which area feels most relevant?</Label>
                <Select
                  value={formData.area}
                  onValueChange={(value) => updateField('area', value)}
                >
                  <SelectTrigger id="area">
                    <SelectValue placeholder="Select an area" />
                  </SelectTrigger>
                  <SelectContent>
                    {areaOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Outcome */}
              <div className="space-y-2">
                <Label htmlFor="outcome">What would a useful outcome look like?</Label>
                <Textarea
                  id="outcome"
                  value={formData.outcome}
                  onChange={(e) => updateField('outcome', e.target.value)}
                  placeholder="Describe what success would look like..."
                  rows={2}
                />
              </div>
            </div>
          </div>

          {/* Timeline & Budget */}
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <h3 className="text-lg font-medium font-sans text-foreground mb-6">
              Timeline & Budget
            </h3>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* Timeline */}
              <div className="space-y-2">
                <Label htmlFor="timeline">Timeline</Label>
                <Select
                  value={formData.timeline}
                  onValueChange={(value) => updateField('timeline', value)}
                >
                  <SelectTrigger id="timeline">
                    <SelectValue placeholder="When do you want to start?" />
                  </SelectTrigger>
                  <SelectContent>
                    {timelineOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Budget */}
              <div className="space-y-2">
                <Label htmlFor="budget">Budget range (optional)</Label>
                <Select
                  value={formData.budget}
                  onValueChange={(value) => updateField('budget', value)}
                >
                  <SelectTrigger id="budget">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-full text-base font-medium bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent disabled:opacity-60 disabled:cursor-not-allowed"
              aria-label="Request diagnostic"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Submitting...
                </>
              ) : (
                <>
                  Request Diagnostic
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 7h10M8 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
