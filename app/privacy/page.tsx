import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | Pressense',
  description: 'Learn how Pressense collects, uses, and protects your personal information when using our calculators and services.',
  openGraph: {
    title: 'Privacy Policy | Pressense',
    description: 'Learn how Pressense collects, uses, and protects your personal information.',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Pressense Privacy Policy' }],
  },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-xs text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">Privacy Policy</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Last updated: May 2026</p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Pressense (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our calculators and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We may collect information about you in various ways:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong className="text-foreground">Calculator Inputs:</strong> Data you enter into our calculators is processed locally in your browser and is not stored on our servers.</li>
              <li><strong className="text-foreground">Contact Information:</strong> If you contact us or sign up for our diagnostic service, we collect your name, email address, and any information you provide.</li>
              <li><strong className="text-foreground">Usage Data:</strong> We automatically collect certain information about your device and how you interact with our website, including IP address, browser type, pages visited, and time spent on pages.</li>
              <li><strong className="text-foreground">Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience and analyze website traffic.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide and maintain our services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you relevant communications about our services</li>
              <li>Analyze usage patterns to improve our website and tools</li>
              <li>Protect against fraudulent or unauthorized activity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Sharing</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell your personal information. We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements. We may also disclose information when required by law or to protect our rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to or restrict certain processing activities</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy or our data practices, please contact us at{' '}
              <a href="mailto:hello@pressense.io" className="text-primary hover:underline">hello@pressense.io</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
