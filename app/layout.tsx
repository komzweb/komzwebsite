import { Inter } from '@next/font/google'

import { TWITTER_HANDLE } from '../utils/constants'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={`@${TWITTER_HANDLE}`} />
      </head>
      <body className="text-slate-900 dark:bg-slate-900 dark:text-slate-300">
        {children}
      </body>
    </html>
  )
}
