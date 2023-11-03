import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { SITE_NAME, SITE_URL, TWITTER_HANDLE } from '@/utils/constants'

const inter = Inter({ subsets: ['latin'] })

const description = 'Built with Next.js, Tailwind CSS, and Vercel'

export const metadata = {
  title: SITE_NAME,
  description: description,
  openGraph: {
    title: SITE_NAME,
    description: description,
    type: 'website',
    url: SITE_URL,
  },
  alternates: {
    canonical: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    site: `@${TWITTER_HANDLE}`,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: '/favicon/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
