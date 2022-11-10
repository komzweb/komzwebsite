import Link from 'next/link'
import { FaHome } from 'react-icons/fa'

import Container from '../../components/Container'
import Social from '../../components/Social'

export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Container>
      <header className="sticky top-0 z-50">
        <div className="border-b border-slate-200 bg-white/95 dark:border-slate-800 dark:bg-slate-900/95">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="text-3xl">
              <FaHome />
            </Link>

            <div className="text-2xl">
              <Social />
            </div>
          </div>
        </div>
      </header>

      {children}
    </Container>
  )
}
