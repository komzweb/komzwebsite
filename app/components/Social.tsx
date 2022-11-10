import { FaGithub, FaTwitter } from 'react-icons/fa'

import { GITHUB_HANDLE, TWITTER_HANDLE } from '../../utils/constants'

export default function Social() {
  return (
    <div className="flex space-x-4">
      <a
        href={`https://github.com/${GITHUB_HANDLE}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500 dark:hover:text-slate-100"
      >
        <FaGithub />
      </a>
      <a
        href={`https://twitter.com/${TWITTER_HANDLE}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500 dark:hover:text-slate-100"
      >
        <FaTwitter />
      </a>
    </div>
  )
}
