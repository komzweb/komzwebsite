import { Twitter, GitHub, Note, Medium } from '../icons'
import {
  TWITTER_HANDLE,
  GITHUB_HANDLE,
  NOTE_HANDLE,
  MEDIUM_HANDLE,
} from '../../utils/constants'

export default function Social() {
  return (
    <div className="flex space-x-4">
      <a
        href={`https://twitter.com/${TWITTER_HANDLE}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter size="4" />
      </a>
      <a
        href={`https://github.com/${GITHUB_HANDLE}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub size="4" />
      </a>
      <a
        href={`https://note.com/${NOTE_HANDLE}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Note size="4" />
      </a>
      <a
        href={`https://medium.com/@${MEDIUM_HANDLE}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Medium size="4" />
      </a>
    </div>
  )
}
