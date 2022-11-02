export default function Copyright() {
  return (
    <span>
      © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_SITE_NAME}
    </span>
  )
}
