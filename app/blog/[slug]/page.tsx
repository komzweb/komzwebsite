import Link from 'next/link'
import { format } from 'date-fns'
import { FaHome } from 'react-icons/fa'
import { serialize } from 'next-mdx-remote/serialize'
import rehypePrism from 'rehype-prism-plus'

import { getAllPosts, getPost } from '../../../utils/blog'
import Container from '../../components/Container'
import Social from '../../components/Social'
import Content from './components/Content'
import './styles/prism-night-owl.css'

export async function generateStaticParams() {
  const posts = getAllPosts(['slug'])

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = getPost(params.slug, ['title', 'date', 'lang', 'content'])

  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      rehypePlugins: [rehypePrism],
    },
  })

  return (
    <>
      <header className="sticky top-0 z-50">
        <div className="border-b border-slate-200 bg-white/95 dark:border-slate-800 dark:bg-slate-900/95">
          <Container>
            <div className="flex h-16 items-center justify-between">
              <Link href="/" className="text-3xl">
                <FaHome />
              </Link>

              <div className="text-2xl">
                <Social />
              </div>
            </div>
          </Container>
        </div>
      </header>

      <main>
        <Container>
          <article lang={post.lang} className="pb-16 pt-8">
            <h1 className="mb-4 text-5xl font-extrabold dark:text-slate-100">
              {post.title}
            </h1>
            <time dateTime={post.date} className="text-sm text-slate-400">
              {format(new Date(post.date), 'yyyy MMM dd')}
            </time>
            <div className="mt-4">
              <Content mdxSource={mdxSource} />
            </div>
          </article>
        </Container>
      </main>
    </>
  )
}
