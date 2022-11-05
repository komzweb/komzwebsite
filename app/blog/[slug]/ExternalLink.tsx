type Props = {
  href: string
  children: React.ReactNode
}

export default function ExternalLink({ href, children }: Props) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}
