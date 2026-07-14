export function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 border-b border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">

          {/* H2 matches PAA "what does a business systems consultant do" */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground text-balance mb-6">
            How a Business Systems Consultant Fixes Your Operations in 90 Days
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Most businesses at the $1M to $15M ARR stage have the same problem. Revenue is growing, but operations are not keeping up. Decisions route through the founder. New hires take three months to become useful. Data lives in five different places and none of them agree. Nobody planned for this. It just happened.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            A business systems consultant steps in to fix the infrastructure, not the people. We map how work actually flows, identify where it breaks down, and build the systems that make the right thing the default thing. The goal is a business that runs reliably whether you are in the room or not.
          </p>

          {/* 4 named bottlenecks — H3s match how a frustrated operator would search */}
          <div className="grid gap-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Every decision still routes through the founder</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                When processes live in your head, your team cannot move without you. A systems consultant documents the decision logic, builds approval workflows, and creates SOPs that give your team the authority to act.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The result: your team resolves 80% of operational questions without escalating. You get your time back.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">New hires take too long to become useful</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Onboarding that depends on tribal knowledge creates a three-month ramp period for every hire. We build onboarding systems, structured role documentation, and tool training that cut that to four weeks.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This compounds fast. If you make six hires this year, that is twelve months of productive capacity returned.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Tools that do not talk to each other</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                CRM in HubSpot. Projects in Notion. Finance in QuickBooks. Support tickets in a spreadsheet. Every Monday someone manually copies data between three systems. We connect your stack so data flows automatically and reports are accurate.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are not here to sell you more software. We make your existing tools work together first.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Operations that cannot survive the next hire wave</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                You are about to double the team. The current systems cannot handle double the people. Fixing your operational infrastructure before you scale prevents the chaos that comes from growing into broken systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most business systems consultants are called in after the crisis. We prefer to build before it arrives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
