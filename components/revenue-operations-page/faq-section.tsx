// 7 PAA-matched questions. Each answer is 60-100 words, starts with a direct answer sentence.
// FAQPage schema in page.tsx must match these questions and answers exactly.

const faqs = [
  {
    question: 'What are fractional RevOps services?',
    answer: 'Fractional RevOps services give you a senior revenue operations consultant working inside your business on a part-time basis, typically 10 to 20 hours per week. They own the same outcomes a full-time hire would, building your CRM architecture, pipeline process, forecasting model, and cross-functional reporting, without the $150K+ annual cost. Most B2B businesses between $1M and $15M ARR use fractional RevOps as their primary model.',
  },
  {
    question: 'What does a RevOps consultant do?',
    answer: 'A revenue operations consultant diagnoses where your pipeline is leaking, redesigns your process to fix it, and builds the systems that make the fix stick. In practice this means auditing your CRM data, redesigning your pipeline stages, defining the handoff criteria between marketing and sales, building your forecast model, and setting up the reporting dashboard your leadership team reviews each month.',
  },
  {
    question: 'When should you hire a RevOps consultant?',
    answer: 'The clearest trigger is when your forecast accuracy drops below 70 percent or your sales cycle has lengthened by more than 20 percent without an obvious reason. Other signals: marketing and sales disagree on what a qualified lead means, customer success does not know which customers are at risk until it is too late, and leadership cannot see clean pipeline data without pulling multiple reports. These are all RevOps problems.',
  },
  {
    question: 'Is RevOps a good career?',
    answer: 'Yes. Revenue operations is one of the fastest-growing roles in B2B technology. Demand for RevOps professionals grew over 300 percent between 2018 and 2024 and salaries for senior practitioners now range from $90,000 to $180,000 at scaling SaaS companies. The role sits at the intersection of data, process, and commercial strategy, which makes it high-leverage and difficult to automate.',
  },
  {
    question: 'What is a revenue operations job?',
    answer: 'A revenue operations job involves owning the systems, data, and processes that connect marketing, sales, and customer success. Day to day this means managing the CRM, building and maintaining dashboards, running the forecast review process, designing pipeline stages, and auditing the tech stack. Senior RevOps roles also set the go-to-market cadence and advise leadership on where to invest in growth infrastructure.',
  },
  {
    question: 'What are the 5 types of consulting?',
    answer: 'The five most common consulting categories are strategy consulting, management consulting, technology consulting, operations consulting, and specialist consulting. Revenue operations consulting falls within operations consulting but blends strategy and technology work. It is distinct from traditional management consulting because it focuses on implementation and measurable revenue outcomes rather than recommendations and reports.',
  },
  {
    question: 'How much does revenue operations consulting cost?',
    answer: 'Fractional revenue operations consulting at Pressense starts from $2,000 per month. A diagnostic-only engagement to identify your top constraints is scoped after the free diagnostic call. A full implementation that includes CRM buildout, reporting, and team training is scoped together based on depth and timeline. Full-time RevOps hires cost $90,000 to $250,000 per year fully loaded — fractional is the smarter entry point.',
  },
]

export function FAQSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">

          <div className="flex items-center gap-3 mb-8">
            <div className="eyebrow-line" aria-hidden="true" />
            <span className="eyebrow">Common questions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground text-balance mb-12">
            Revenue operations consulting: frequently asked questions
          </h2>

          <div className="divide-y divide-border/40">
            {faqs.map((faq, i) => (
              <div key={i} className="py-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">{faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
