import Link from 'next/link'

import Container from './Container'
import { Home } from '../icons'

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-slate-200 bg-white/95 dark:border-slate-700 dark:bg-slate-900/95">
        <Container>
          <div className="flex h-16 items-center space-x-6">
            <Link href="/">
              <Home />
            </Link>
            <Link
              href="/blog"
              className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            >
              Blog
            </Link>
          </div>
        </Container>
      </div>
    </header>
  )
}
