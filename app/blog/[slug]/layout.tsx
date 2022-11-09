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
      <header className="flex h-32 items-center justify-between">
        <Link href="/" className="text-3xl">
          <FaHome />
        </Link>

        <div className="text-2xl">
          <Social />
        </div>
      </header>

      {children}
    </Container>
  )
}
