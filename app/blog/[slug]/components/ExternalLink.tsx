type Props = {
  href: string
  children: React.ReactNode
}

export default function ExternalLink({ href, children }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:text-blue-400"
    >
      {children}
    </a>
  )
}
