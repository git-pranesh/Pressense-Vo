'use client'

import { useState } from 'react'
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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const stageOptions = [
  { value: 'pre-revenue', label: 'Pre-revenue' },
  { value: 'early', label: 'Early ($0–500K ARR)' },
  { value: 'growth', label: 'Growth ($500K–5M ARR)' },
  { value: 'scaling', label: 'Scaling ($5M+ ARR)' },
  { value: 'enterprise', label: 'Enterprise / Division' },
]

const supportTypes = [
  { value: 'strategy', label: 'Strategy & Positioning' },
  { value: 'operations', label: 'Operations & Systems' },
  { value: 'growth', label: 'Growth & Revenue' },
  { value: 'full', label: 'Full Diagnostic (All Three)' },
]

const budgetOptions = [
  { value: 'under-10k', label: 'Under $10K' },
  { value: '10k-25k', label: '$10K – $25K' },
  { value: '25k-50k', label: '$25K – $50K' },
  { value: '50k-100k', label: '$50K – $100K' },
  { value: 'over-100k', label: '$100K+' },
]

const timelineOptions = [
  { value: 'immediate', label: 'Immediately' },
  { value: '1-month', label: 'Within 1 month' },
  { value: '1-3-months', label: '1–3 months' },
  { value: '3-plus', label: '3+ months' },
]

const startingPointOptions = [
  { value: 'diagnostic', label: 'Focused Diagnostic' },
  { value: 'strategy-sprint', label: 'Strategy Sprint' },
  { value: 'systems-pilot', label: 'Systems Pilot' },
  { value: 'advisory-support', label: 'Advisory Support' },
  { value: 'not-sure', label: 'Not sure yet' },
]

interface FormData {
  name: string
  company: string
  website: string
  email: string
  role: string
  location: string
  stage: string
  problem: string
  attempts: string
  supportType: string
  budget: string
  timeline: string
  startingPoint: string
}

const initialFormData: FormData = {
  name: '',
  company: '',
  website: '',
  email: '',
  role: '',
  location: '',
  stage: '',
  problem: '',
  attempts: '',
  supportType: '',
  budget: '',
  timeline: '',
  startingPoint: '',
}

export function ApplicationForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  )

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.company.trim()) newErrors.company = 'Company is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    if (!formData.role.trim()) newErrors.role = 'Role is required'
    if (!formData.stage) newErrors.stage = 'Please select a stage'
    if (!formData.problem.trim())
      newErrors.problem = 'Please describe your situation'
    if (!formData.supportType)
      newErrors.supportType = 'Please select a support type'
    if (!formData.budget) newErrors.budget = 'Please select a budget range'
    if (!formData.timeline) newErrors.timeline = 'Please select a timeline'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    setIsSubmitting(true)

    // Simulate submission - replace with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section
        id="application-form"
        className="py-20 lg:py-28 border-t border-border/40"
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
            className="text-3xl font-semibold text-foreground mb-4"
            id="form-success-heading"
          >
            Application received.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Thank you for your interest. We review every application personally
            and will be in touch within 5 business days if there&apos;s
            potential alignment.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section
      id="application-form"
      className="py-20 lg:py-28 border-t border-border/40"
      aria-labelledby="form-heading"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-widest text-primary mb-4">
            Your Application
          </p>
          <h2
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground text-balance"
            id="form-heading"
          >
            Tell us about your business.
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8" noValidate>
          {/* Basic Info */}
          <div className="rounded-2xl border border-border/60 bg-card/30 backdrop-blur-sm p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Basic Information
            </h3>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name">
                  Full Name <span className="text-destructive">*</span>
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
                  Email <span className="text-destructive">*</span>
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
              <div className="space-y-2">
                <Label htmlFor="company">
                  Company Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => updateField('company', e.target.value)}
                  placeholder="Acme Inc."
                  aria-invalid={!!errors.company}
                  aria-describedby={errors.company ? 'company-error' : undefined}
                />
                {errors.company && (
                  <p id="company-error" className="text-sm text-destructive">
                    {errors.company}
                  </p>
                )}
              </div>

              {/* Website */}
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  type="url"
                  value={formData.website}
                  onChange={(e) => updateField('website', e.target.value)}
                  placeholder="https://company.com"
                />
              </div>

              {/* Role */}
              <div className="space-y-2">
                <Label htmlFor="role">
                  Your Role <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="role"
                  type="text"
                  value={formData.role}
                  onChange={(e) => updateField('role', e.target.value)}
                  placeholder="CEO, COO, VP Operations..."
                  aria-invalid={!!errors.role}
                  aria-describedby={errors.role ? 'role-error' : undefined}
                />
                {errors.role && (
                  <p id="role-error" className="text-sm text-destructive">
                    {errors.role}
                  </p>
                )}
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  type="text"
                  value={formData.location}
                  onChange={(e) => updateField('location', e.target.value)}
                  placeholder="City, Country"
                />
              </div>
            </div>
          </div>

          {/* Business Context */}
          <div className="rounded-2xl border border-border/60 bg-card/30 backdrop-blur-sm p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Business Context
            </h3>

            <div className="space-y-6">
              {/* Stage */}
              <div className="space-y-2">
                <Label htmlFor="stage">
                  Business Stage <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={formData.stage}
                  onValueChange={(value) => updateField('stage', value)}
                >
                  <SelectTrigger
                    id="stage"
                    aria-invalid={!!errors.stage}
                    aria-describedby={errors.stage ? 'stage-error' : undefined}
                  >
                    <SelectValue placeholder="Select your stage" />
                  </SelectTrigger>
                  <SelectContent>
                    {stageOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.stage && (
                  <p id="stage-error" className="text-sm text-destructive">
                    {errors.stage}
                  </p>
                )}
              </div>

              {/* Problem */}
              <div className="space-y-2">
                <Label htmlFor="problem">
                  What&apos;s the core problem you&apos;re facing?{' '}
                  <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="problem"
                  value={formData.problem}
                  onChange={(e) => updateField('problem', e.target.value)}
                  placeholder="Describe the main challenge or bottleneck in your business right now..."
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
                <Label htmlFor="attempts">
                  What have you already tried to fix it?
                </Label>
                <Textarea
                  id="attempts"
                  value={formData.attempts}
                  onChange={(e) => updateField('attempts', e.target.value)}
                  placeholder="Past consultants, internal efforts, tools, frameworks..."
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* Engagement Details */}
          <div className="rounded-2xl border border-border/60 bg-card/30 backdrop-blur-sm p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Engagement Details
            </h3>

            <div className="space-y-8">
              {/* Support Type */}
              <fieldset className="space-y-4">
                <legend className="text-sm font-medium text-foreground">
                  What type of support are you looking for?{' '}
                  <span className="text-destructive">*</span>
                </legend>
                <RadioGroup
                  value={formData.supportType}
                  onValueChange={(value) => updateField('supportType', value)}
                  aria-invalid={!!errors.supportType}
                  aria-describedby={
                    errors.supportType ? 'support-error' : undefined
                  }
                >
                  {supportTypes.map((type) => (
                    <div key={type.value} className="flex items-center gap-3">
                      <RadioGroupItem value={type.value} id={type.value} />
                      <Label
                        htmlFor={type.value}
                        className="font-normal cursor-pointer"
                      >
                        {type.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                {errors.supportType && (
                  <p id="support-error" className="text-sm text-destructive">
                    {errors.supportType}
                  </p>
                )}
              </fieldset>

              {/* Budget & Timeline row */}
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Budget */}
                <div className="space-y-2">
                  <Label htmlFor="budget">
                    Budget Range <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) => updateField('budget', value)}
                  >
                    <SelectTrigger
                      id="budget"
                      aria-invalid={!!errors.budget}
                      aria-describedby={
                        errors.budget ? 'budget-error' : undefined
                      }
                    >
                      <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.budget && (
                    <p id="budget-error" className="text-sm text-destructive">
                      {errors.budget}
                    </p>
                  )}
                </div>

                {/* Timeline */}
                <div className="space-y-2">
                  <Label htmlFor="timeline">
                    When do you want to start?{' '}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Select
                    value={formData.timeline}
                    onValueChange={(value) => updateField('timeline', value)}
                  >
                    <SelectTrigger
                      id="timeline"
                      aria-invalid={!!errors.timeline}
                      aria-describedby={
                        errors.timeline ? 'timeline-error' : undefined
                      }
                    >
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      {timelineOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.timeline && (
                    <p id="timeline-error" className="text-sm text-destructive">
                      {errors.timeline}
                    </p>
                  )}
                </div>
              </div>

              {/* Preferred Starting Point */}
              <fieldset className="space-y-4">
                <legend className="text-sm font-medium text-foreground">
                  Preferred starting point
                </legend>
                <RadioGroup
                  value={formData.startingPoint}
                  onValueChange={(value) => updateField('startingPoint', value)}
                >
                  {startingPointOptions.map((option) => (
                    <div key={option.value} className="flex items-center gap-3">
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label
                        htmlFor={option.value}
                        className="font-normal cursor-pointer"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </fieldset>
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-xl text-base font-semibold bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200 glow-accent disabled:opacity-60 disabled:cursor-not-allowed"
              aria-label="Submit your application"
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
                  Submit Application
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
