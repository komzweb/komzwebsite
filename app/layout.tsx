import { Inter } from '@next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head />
      <body className="text-slate-900 dark:bg-slate-900 dark:text-slate-300">
        {children}
      </body>
    </html>
  )
}
