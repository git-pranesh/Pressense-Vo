import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { StructuredData } from '@/components/structured-data'
import { Header } from '@/components/header'
import { MegaFooter } from '@/components/mega-footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pressense.co'),
  title: 'Pressense | Strategy & Systems Partner for Structured Scale',
  description:
    'We help serious businesses fix growth bottlenecks, understand customers, remove revenue leakage, and build the systems needed to scale.',
  generator: 'v0.app',
  openGraph: {
    title: 'Pressense | Strategy & Systems Partner for Structured Scale',
    description:
      'We help serious businesses fix growth bottlenecks, understand customers, remove revenue leakage, and build the systems needed to scale.',
    type: 'website',
    url: 'https://www.pressense.co',
    siteName: 'Pressense',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pressense - Strategy & Systems Partner for Structured Scale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pressense | Strategy & Systems Partner for Structured Scale',
    description:
      'We help serious businesses fix growth bottlenecks, understand customers, remove revenue leakage, and build the systems needed to scale.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#F3F0EC',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <StructuredData />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Skip to main content
        </a>
        <Header />
        <div id="main-content">{children}</div>
        <MegaFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
