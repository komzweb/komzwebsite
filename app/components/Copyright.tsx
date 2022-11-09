import { SITE_NAME } from '../../utils/constants'

export default function Copyright() {
  return (
    <span>
      © {new Date().getFullYear()} {SITE_NAME}
    </span>
  )
}
