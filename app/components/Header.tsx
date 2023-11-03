import Link from 'next/link'

import { ModeToggle } from '@/components/mode-toggle'
import { Home } from '../icons'
import Container from './Container'

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-slate-200 bg-white/95 dark:border-slate-700 dark:bg-slate-900/95">
        <Container>
          <div className="items-center py-4 sm:flex sm:h-16 sm:justify-between sm:py-0">
            <div className="flex items-center justify-between space-x-4 sm:justify-normal">
              <Link href="/">
                <Home />
              </Link>
              <ModeToggle />
            </div>
            <div className="mt-2 space-x-4 text-sm sm:space-x-6 sm:text-base">
              <Link
                href="/blog"
                className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
              >
                Blog
              </Link>
              <Link
                href="/projects"
                className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
              >
                Contact
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </header>
  )
}
