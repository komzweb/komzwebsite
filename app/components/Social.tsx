import { GitHubSmall, TwitterSmall, BlueskySmall, NoteSmall } from '../icons'
import {
  GITHUB_HANDLE,
  TWITTER_HANDLE,
  BLUESKY_HANDLE,
  NOTE_HANDLE,
} from '@/utils/constants'

export default function Social() {
  return (
    <div className="flex space-x-4">
      <a
        href={`https://github.com/${GITHUB_HANDLE}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubSmall />
      </a>
      <a
        href={`https://twitter.com/${TWITTER_HANDLE}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterSmall />
      </a>
      <a
        href={`https://bsky.app/profile/${BLUESKY_HANDLE}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <BlueskySmall />
      </a>
      <a
        href={`https://note.com/${NOTE_HANDLE}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <NoteSmall />
      </a>
    </div>
  )
}
