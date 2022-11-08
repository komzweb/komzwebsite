import Link from 'next/link'
import { format } from 'date-fns'

import { getAllPosts } from '../utils/blog'
import Container from './Container'
import Copyright from './Copyright'
import Social from './Social'
import Vercel from './Vercel'

export default function Home() {
  const posts = getAllPosts(['slug', 'title', 'date'])

  return (
    <Container>
      <header className="flex h-32 items-center justify-center">
        <div className="text-4xl">
          <Social />
        </div>
      </header>

      <main className="pb-16">
        <h1 className="text-center text-3xl font-extrabold dark:text-slate-100">{`Koshi Matsumoto's website`}</h1>
        <div className="mt-2">
          <div className="text-center text-sm text-slate-400">
            <Copyright />
          </div>
          <div>
            <Vercel />
          </div>
        </div>

        <article className="mt-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border-t border-slate-200 py-4 dark:border-slate-800"
            >
              <h2 className="text-2xl font-bold dark:text-slate-100">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <time dateTime={post.date} className="text-sm text-slate-400">
                {format(new Date(post.date), 'yyyy MMM dd')}
              </time>
            </article>
          ))}
        </article>
      </main>
    </Container>
  )
}
