'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

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
  { value: '1-3-months', label: '1–3 months' },
  { value: '3-plus', label: '3+ months' },
]

const budgetOptions = [
  { value: 'under-10k', label: 'Under $10K' },
  { value: '10k-25k', label: '$10K – $25K' },
  { value: '25k-50k', label: '$25K – $50K' },
  { value: '50k-100k', label: '$50K – $100K' },
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

/* ── Light-panel input styles — underline treatment ── */
const inputCls =
  'w-full bg-transparent px-0 py-3 text-sm outline-none transition-colors border-0 border-b placeholder:text-[#B8B0A6]'
const inputStyle = {
  borderColor: '#C8C2BA',
  color: '#1A0F06',
}
const inputFocusBorderStyle = 'focus:border-b-[#1A0F06]'
const labelCls = 'block text-[11px] font-medium uppercase tracking-wider mb-2'
const labelStyle = { color: '#9A8C80' }
const sectionTitleCls = 'text-[10px] font-semibold uppercase tracking-widest mb-6 pb-3 border-b'
const sectionTitleStyle = { color: '#9A8C80', borderColor: '#D4CFC7' }
const errorCls = 'mt-1.5 text-xs'
const errorStyle = { color: '#B91C1C' }

export function DiagnosticForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const constraintParam = searchParams.get('constraint')

  const [formData, setFormData] = useState<FormData>({
    ...initialFormData,
    area: constraintParam ? mapConstraintToArea(constraintParam) : '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
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
      if (!response.ok) throw new Error('Submission failed')
      router.push('/thank-you')
    } catch (error) {
      console.error('Form submission error:', error)
      alert('There was an error submitting your request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div id="diagnostic-form" className="p-6 sm:p-10">

      {/* Header */}
      <div className="mb-10">
        <p className="text-[10px] font-semibold uppercase tracking-widest mb-3" style={{ color: '#9A8C80' }}>
          Diagnostic form
        </p>
        <h2
          className="font-normal leading-snug text-balance mb-3"
          style={{ fontFamily: '"EB Garamond", Georgia, serif', fontSize: 'clamp(24px, 3vw, 32px)', color: '#1A0F06' }}
        >
          Tell us about your business.
        </h2>
        <p className="text-sm leading-relaxed" style={{ color: '#6B5D51' }}>
          You don&apos;t need to know the exact solution yet. The diagnostic figures that out.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10" noValidate>

        {/* ── Section 1: Basic info ── */}
        <div>
          <p className={sectionTitleCls} style={sectionTitleStyle}>Basic information</p>
          <div className="grid gap-5 sm:grid-cols-2">

            {/* Name */}
            <div>
              <label htmlFor="name" className={labelCls} style={labelStyle}>
                Name <span style={{ color: '#F87171' }}>*</span>
              </label>
              <input
                id="name"
                type="text"
                className={`${inputCls} ${inputFocusBorderStyle}`}
                style={inputStyle}
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                placeholder="Jane Doe"
                aria-invalid={!!errors.name}
              />
              {errors.name && <p className={errorCls} style={errorStyle}>{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className={labelCls} style={labelStyle}>
                Work email <span style={{ color: '#F87171' }}>*</span>
              </label>
              <input
                id="email"
                type="email"
                className={`${inputCls} ${inputFocusBorderStyle}`}
                style={inputStyle}
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                placeholder="jane@company.com"
                aria-invalid={!!errors.email}
              />
              {errors.email && <p className={errorCls} style={errorStyle}>{errors.email}</p>}
            </div>

            {/* Company */}
            <div className="sm:col-span-2">
              <label htmlFor="company" className={labelCls} style={labelStyle}>
                Company / website <span style={{ color: '#F87171' }}>*</span>
              </label>
              <input
                id="company"
                type="text"
                className={`${inputCls} ${inputFocusBorderStyle}`}
                style={inputStyle}
                value={formData.company}
                onChange={(e) => updateField('company', e.target.value)}
                placeholder="Acme Inc. or https://company.com"
                aria-invalid={!!errors.company}
              />
              {errors.company && <p className={errorCls} style={errorStyle}>{errors.company}</p>}
            </div>

            {/* What does business do */}
            <div className="sm:col-span-2">
              <label htmlFor="whatDoes" className={labelCls} style={labelStyle}>
                What does the business do?
              </label>
              <textarea
                id="whatDoes"
                className={`${inputCls} ${inputFocusBorderStyle} resize-none`}
                style={inputStyle}
                rows={2}
                value={formData.whatDoes}
                onChange={(e) => updateField('whatDoes', e.target.value)}
                placeholder="Brief description of your product, service, or business model..."
              />
            </div>
          </div>
        </div>

        {/* ── Section 2: Diagnostic context ── */}
        <div>
          <p className={sectionTitleCls} style={sectionTitleStyle}>Diagnostic context</p>
          <div className="space-y-5">

            {/* Problem */}
            <div>
              <label htmlFor="problem" className={labelCls} style={labelStyle}>
                What feels unclear, broken, or stuck right now? <span style={{ color: '#F87171' }}>*</span>
              </label>
              <textarea
                id="problem"
                className={`${inputCls} ${inputFocusBorderStyle} resize-none`}
                style={inputStyle}
                rows={4}
                value={formData.problem}
                onChange={(e) => updateField('problem', e.target.value)}
                placeholder="Describe the main challenge or constraint in your business right now..."
                aria-invalid={!!errors.problem}
              />
              {errors.problem && <p className={errorCls} style={errorStyle}>{errors.problem}</p>}
            </div>

            {/* Attempts */}
            <div>
              <label htmlFor="attempts" className={labelCls} style={labelStyle}>
                What have you already tried?
              </label>
              <textarea
                id="attempts"
                className={`${inputCls} ${inputFocusBorderStyle} resize-none`}
                style={inputStyle}
                rows={3}
                value={formData.attempts}
                onChange={(e) => updateField('attempts', e.target.value)}
                placeholder="Past consultants, internal efforts, tools, frameworks..."
              />
            </div>

            {/* Area */}
            <div>
              <label htmlFor="area" className={labelCls} style={labelStyle}>
                Which area feels most relevant?
              </label>
              <div className="relative">
                <select
                  id="area"
                  className={`${inputCls} ${inputFocusBorderStyle} appearance-none cursor-pointer`}
                  style={inputStyle}
                  value={formData.area}
                  onChange={(e) => updateField('area', e.target.value)}
                >
                  <option value="" style={{ background: '#F4F2EE' }}>Select an area</option>
                  {areaOptions.map((o) => (
                    <option key={o.value} value={o.value} style={{ background: '#F4F2EE' }}>{o.label}</option>
                  ))}
                </select>
                <svg className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 4l4 4 4-4" stroke="#9A8C80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Outcome */}
            <div>
              <label htmlFor="outcome" className={labelCls} style={labelStyle}>
                What would a useful outcome look like?
              </label>
              <textarea
                id="outcome"
                className={`${inputCls} ${inputFocusBorderStyle} resize-none`}
                style={inputStyle}
                rows={2}
                value={formData.outcome}
                onChange={(e) => updateField('outcome', e.target.value)}
                placeholder="Describe what success would look like..."
              />
            </div>
          </div>
        </div>

        {/* ── Section 3: Timeline & budget ── */}
        <div>
          <p className={sectionTitleCls} style={sectionTitleStyle}>Timeline &amp; budget</p>
          <div className="grid gap-5 sm:grid-cols-2">

            <div>
              <label htmlFor="timeline" className={labelCls} style={labelStyle}>When do you want to start?</label>
              <div className="relative">
                <select
                  id="timeline"
                  className={`${inputCls} ${inputFocusBorderStyle} appearance-none cursor-pointer`}
                  style={inputStyle}
                  value={formData.timeline}
                  onChange={(e) => updateField('timeline', e.target.value)}
                >
                  <option value="" style={{ background: '#F4F2EE' }}>Select timeline</option>
                  {timelineOptions.map((o) => (
                    <option key={o.value} value={o.value} style={{ background: '#F4F2EE' }}>{o.label}</option>
                  ))}
                </select>
                <svg className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 4l4 4 4-4" stroke="#9A8C80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <div>
              <label htmlFor="budget" className={labelCls} style={labelStyle}>Budget range (optional)</label>
              <div className="relative">
                <select
                  id="budget"
                  className={`${inputCls} ${inputFocusBorderStyle} appearance-none cursor-pointer`}
                  style={inputStyle}
                  value={formData.budget}
                  onChange={(e) => updateField('budget', e.target.value)}
                >
                  <option value="" style={{ background: '#F4F2EE' }}>Select range</option>
                  {budgetOptions.map((o) => (
                    <option key={o.value} value={o.value} style={{ background: '#F4F2EE' }}>{o.label}</option>
                  ))}
                </select>
                <svg className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 4l4 4 4-4" stroke="#9A8C80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ── Submit ── */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-medium transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ background: '#1A0F06', color: '#EDEBE5' }}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Submitting...
              </>
            ) : (
              <>
                Request Diagnostic
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </>
            )}
          </button>
          <p className="mt-4 text-xs" style={{ color: '#9A8C80' }}>
            We respond within a couple of business days.
          </p>
        </div>

      </form>
    </div>
  )
}
