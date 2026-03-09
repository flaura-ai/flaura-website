import type { Metadata, Viewport } from 'next'
import { Inter, Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata: Metadata = {
  title: 'Flaura AI — Turn Your Dreams Into Action',
  description: 'For ambitious women who have big goals but struggle with consistency. Flaura helps you stop consuming and start executing through identity-based affirmations and actionable systems.',
  generator: 'v0.app',
  openGraph: {
    title: 'Flaura AI — Turn Your Dreams Into Action',
    description: 'For ambitious women who have big goals but struggle with consistency. Stop consuming, start executing.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flaura AI — Turn Your Dreams Into Action',
    description: 'For ambitious women who have big goals but struggle with consistency. Stop consuming, start executing.',
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
  themeColor: '#FF6F61',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
