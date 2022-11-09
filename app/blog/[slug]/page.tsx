import { format } from 'date-fns'
import { serialize } from 'next-mdx-remote/serialize'
import rehypePrism from 'rehype-prism-plus'

import { getAllPosts, getPost } from '../../../utils/blog'
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
    <main className="pb-16 pt-8">
      <article lang={post.lang}>
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
    </main>
  )
}
