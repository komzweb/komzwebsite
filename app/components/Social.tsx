import { TwitterSmall, GitHubSmall, NoteSmall, MediumSmall } from '../icons'
import {
  TWITTER_HANDLE,
  GITHUB_HANDLE,
  NOTE_HANDLE,
  MEDIUM_HANDLE,
} from '@/utils/constants'

export default function Social() {
  return (
    <div className="flex space-x-4">
      <a
        href={`https://twitter.com/${TWITTER_HANDLE}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterSmall />
      </a>
      <a
        href={`https://github.com/${GITHUB_HANDLE}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubSmall />
      </a>
      <a
        href={`https://note.com/${NOTE_HANDLE}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <NoteSmall />
      </a>
      {/* <a
        href={`https://medium.com/@${MEDIUM_HANDLE}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MediumSmall />
      </a> */}
    </div>
  )
}
