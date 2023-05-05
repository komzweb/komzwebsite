import Link from 'next/link'
import { format } from 'date-fns'

import Container from '../components/Container'
import Header from '../components/Header'

import { getAllPosts } from '@/utils/blog'
import { SITE_NAME, SITE_URL } from '@/utils/constants'

const url = `${SITE_URL}/blog`
const title = `Blog | ${SITE_NAME}`
const description =
  'These posts are samples created for testing the Markdown/MDX blog feature.'

export const metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: url,
  },
  alternates: {
    canonical: url,
  },
}

export default function BlogPage() {
  const posts = getAllPosts(['slug', 'title', 'date'])

  return (
    <>
      <Header />
      <main>
        <Container>
          <div className="py-8">
            <h1 className="text-3xl font-extrabold dark:text-slate-100">
              Blog
            </h1>

            <p className="mt-8">
              These posts are samples created for testing the Markdown/MDX blog
              feature.
            </p>

            <article className="mt-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="border-t border-slate-200 py-4 dark:border-slate-700"
                >
                  <h2 className="text-2xl font-bold dark:text-slate-100">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <div className="mt-1">
                    <time
                      dateTime={post.date}
                      className="text-sm text-slate-400"
                    >
                      {format(new Date(post.date), 'yyyy MMM dd')}
                    </time>
                  </div>
                  <div className="mt-4">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-500 hover:text-blue-400"
                    >
                      Read Post
                    </Link>
                  </div>
                </article>
              ))}
            </article>
          </div>
        </Container>
      </main>
    </>
  )
}
