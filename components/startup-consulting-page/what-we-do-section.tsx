import Link from 'next/link'

const services = [
  {
    title: 'GTM strategy',
    description:
      'ICP definition, positioning, messaging, and channel selection. We build the go-to-market foundation that makes your marketing spend predictable and your sales conversations shorter.',
    href: '/go-to-market-strategy',
  },
  {
    title: 'AI workflow systems',
    description:
      'Structured automation for content, sales follow-up, reporting, research, and operations. We identify which workflows are costing you the most time and build systems to replace them.',
    href: '/ai-workflows-automation',
  },
  {
    title: 'Custom software and internal tools',
    description:
      'When off-the-shelf tools cannot do the job, we build custom applications: internal dashboards, CRM extensions, client portals, and AI-powered tools that match your actual workflow.',
    href: '/custom-internal-tools',
  },
  {
    title: 'AI strategy consulting',
    description:
      'Before building anything, we map where AI can genuinely help versus where it creates more noise. Strategy, not implementation theatre.',
    href: '/ai-strategy-consulting',
  },
  {
    title: 'Content and authority systems',
    description:
      'Search-optimised content that positions your business as the expert in your space. Written to rank, structured to convert, built to compound over time.',
    href: '/content-authority-systems',
  },
  {
    title: 'Conversion websites',
    description:
      'Sites built to convert, not just look good. Clear positioning, fast load times, structured for SEO from day one — not as an afterthought.',
    href: '/conversion-websites',
  },
]

export function StartupConsultingWhatWeDoSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <span className="text-xs tracking-[0.2em] uppercase text-primary/70 font-semibold mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground text-balance leading-tight mb-4">
            Strategy and execution across six areas
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We work across the areas that matter most for growing founder-led businesses. You can engage us on one or all of them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc) => (
            <Link
              key={svc.title}
              href={svc.href}
              className="rounded-2xl p-7 border border-border bg-card hover:border-foreground/20 transition-colors hover:border-primary/30 transition-all duration-300 group"
            >
              <h3 className="text-base font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {svc.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{svc.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
