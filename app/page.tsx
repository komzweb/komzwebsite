import Image from 'next/image'

import profilePic from '@/app/me.png'
import {
  Twitter,
  GitHub,
  Note,
  Medium,
  ArrowTopRightOnSquare,
} from '@/app/icons'
import {
  SITE_NAME,
  PROFILE_NAME,
  PROFILE_BIO,
  TWITTER_HANDLE,
  GITHUB_HANDLE,
  NOTE_HANDLE,
  MEDIUM_HANDLE,
} from '@/utils/constants'
import { ModeToggle } from '@/components/mode-toggle'

import Container from './components/Container'
import Copyright from './components/Copyright'
import Menu from './components/Menu'

export default function RootPage() {
  return (
    <Container>
      <main className="py-16">
        <div className="flex justify-center sm:space-x-8">
          <div className="hidden sm:block sm:w-1/4">
            <Image
              src={profilePic}
              alt={PROFILE_NAME}
              className="rounded-full"
            />
            <Menu />
          </div>

          <div className="sm:w-3/4">
            <h1 className="text-3xl font-extrabold dark:text-slate-100">
              {SITE_NAME}
            </h1>

            <div className="sm:hidden">
              <Menu />
            </div>

            <div className="mt-4 flex sm:hidden">
              <Image
                src={profilePic}
                alt={PROFILE_NAME}
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>

            <p className="my-4">{PROFILE_BIO}</p>

            <div className="space-y-2">
              <a
                href={`https://twitter.com/${TWITTER_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-md border border-slate-200 p-4 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                <div className="flex items-center space-x-3">
                  <Twitter />
                  <span>X/Twitter</span>
                </div>
                <ArrowTopRightOnSquare />
              </a>
              <a
                href={`https://github.com/${GITHUB_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-md border border-slate-200 p-4 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                <div className="flex items-center space-x-3">
                  <GitHub />
                  <span>GitHub</span>
                </div>
                <ArrowTopRightOnSquare />
              </a>
              <a
                href={`https://note.com/${NOTE_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-md border border-slate-200 p-4 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                <div className="flex items-center space-x-3">
                  <Note />
                  <span>note</span>
                </div>
                <ArrowTopRightOnSquare />
              </a>
              {/* <a
                href={`https://medium.com/@${MEDIUM_HANDLE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-md border border-slate-200 p-4 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                <div className="flex items-center space-x-3">
                  <Medium />
                  <span>Medium</span>
                </div>
                <ArrowTopRightOnSquare />
              </a> */}
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-800">
              <Copyright />
              <ModeToggle />
            </div>
          </div>
        </div>
      </main>
    </Container>
  )
}
