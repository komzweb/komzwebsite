import Link from 'next/link'

type Props = {
  href: string
  className?: string
  'aria-label'?: string
  onClick?: () => void
  children?: React.ReactNode
}

export default function NextLink({ children, ...props }: Props) {
  return <Link {...props}>{children}</Link>
}
