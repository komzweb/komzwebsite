import { SITE_NAME } from '@/utils/constants'

export default function Copyright() {
  return (
    <span className="text-sm text-slate-400">
      © {new Date().getFullYear()} {SITE_NAME}
    </span>
  )
}
