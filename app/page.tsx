import Link from 'next/link'
import { format } from 'date-fns'

import Vercel from './Vercel'
import Copyright from './Copyright'
import { getAllPosts } from '../utils/blog'

export default function Home() {
  const posts = getAllPosts(['slug', 'title', 'date'])

  return (
    <main className="mx-auto max-w-prose px-4">
      <div className="py-8">
        <h1 className="text-center text-3xl font-bold">{`Koshi Matsumoto's website`}</h1>
        <div className="mt-1">
          <div className="text-center text-sm text-slate-400">
            <Copyright />
          </div>
          <div>
            <Vercel />
          </div>
        </div>

        <article className="mt-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-t border-slate-200 py-4">
              <h2 className="text-2xl">
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
      </div>
    </main>
  )
}
