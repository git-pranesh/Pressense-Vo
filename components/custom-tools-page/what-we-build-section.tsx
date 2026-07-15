export function WhatWeBuildSection() {
  const tools = [
    { title: 'Operations dashboards', description: 'Real-time visibility into work, status, owners, bottlenecks, and performance.' },
    { title: 'Custom CRM workflows', description: 'Lead tracking, sales stages, follow-ups, ownership, qualification, and reporting tailored to your process.' },
    { title: 'Approval systems', description: 'Structured workflows for quotes, discounts, invoices, purchases, content, operations, or internal requests.' },
    { title: 'Customer onboarding systems', description: 'Track onboarding steps, responsibilities, progress, support issues, and customer milestones.' },
    { title: 'Reporting tools', description: 'Dashboards that turn scattered data into decision-ready visibility for founders and teams.' },
    { title: 'Workflow automation', description: 'Automations for repeated handoffs, reminders, updates, task creation, data movement, and status tracking.' },
    { title: 'Internal portals', description: 'Role-based tools for teams, clients, vendors, partners, or internal departments.' },
    { title: 'ERP-lite systems', description: 'Lightweight internal systems for order flow, inventory, delivery, finance, vendors, and operations without enterprise software bloat.' },
  ]

  return (
    <section className="py-28 lg:py-36" aria-labelledby="build-heading">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="mb-16">
          <h2 id="build-heading" className="text-section-title font-serif font-medium text-foreground text-balance mb-4">
            What we build
          </h2>
          <p className="text-lg text-muted-foreground">
            The exact system depends on the business problem. These are the types of internal tools we typically help design and build.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {tools.map((tool, i) => (
            <div key={i} className="rounded-2xl p-8 border border-border bg-card hover:border-foreground/20 transition-colors">
              <h3 className="text-lg font-medium text-foreground mb-3">{tool.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
