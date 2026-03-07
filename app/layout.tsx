import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: 'Flaura — Your AI Growth Companion',
  description: 'Flaura is an AI-powered personal growth app that helps ambitious people build identity-aligned habits through 90-day quests. Build confidence, track streaks, journal, and grow.',
  generator: 'v0.app',
  openGraph: {
    title: 'Flaura — Your AI Growth Companion',
    description: 'Build identity-aligned habits through 90-day quests with AI-powered coaching.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flaura — Your AI Growth Companion',
    description: 'Build identity-aligned habits through 90-day quests with AI-powered coaching.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#d4845a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
