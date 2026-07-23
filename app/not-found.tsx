import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center max-w-xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4 font-medium">
            404 - Page Not Found
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground mb-6">
            This page does not exist
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            The page you are looking for might have been moved, removed, or never existed in the first place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-base font-medium bg-primary text-primary-foreground hover:bg-highlight transition-all duration-200"
            >
              Go to Homepage
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-base font-medium border border-border text-foreground hover:bg-secondary/40 transition-all duration-200"
            >
              Start Diagnostic
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
