const trustItems = [
  'Advised enterprise teams including Zoho',
  'Trusted by founders, operators & professional experts',
  'Built growth systems & internal tools for scaling businesses',
  'Content engines & operating clarity for 10→100 growth',
]

export function TrustStrip() {
  return (
    <section className="border-y border-border/60 bg-secondary/20 py-5 overflow-hidden" aria-label="Trust signals">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              {i > 0 && (
                <div className="hidden sm:block w-px h-4 bg-border/60" aria-hidden="true" />
              )}
              <span className="text-xs text-text-dim tracking-wide text-center sm:text-left">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
