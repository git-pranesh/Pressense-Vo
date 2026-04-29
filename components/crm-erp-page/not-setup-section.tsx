export function CrmErpNotSetupSection() {
  return (
    <section className="py-20 lg:py-28 border-t border-border/40">
      <div className="container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-6">
            This is not CRM setup.
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>We are not just implementing tools.</p>
            <p>
              Sometimes we use existing platforms. Sometimes we build custom systems. 
              Sometimes we simplify what you already have.
            </p>
            <p>
              The goal is not to install software. The goal is to create a system your team actually uses.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
