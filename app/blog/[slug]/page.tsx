import { format } from 'date-fns'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeHighlight from 'rehype-highlight'

import Content from './Content'
import { getAllPosts, getPost } from '../../../utils/blog'

export default async function PostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = getPost(params.slug, ['title', 'date', 'content'])

  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  })

  return (
    <main className="mx-auto max-w-prose px-4">
      <div className="py-16">
        <article className="prose lg:prose-xl">
          <h1>{post.title}</h1>
          <time dateTime={post.date} className="text-sm text-slate-400">
            {format(new Date(post.date), 'yyyy MMM dd')}
          </time>
          <div className="mt-4">
            <Content mdxSource={mdxSource} />
          </div>
        </article>
      </div>
    </main>
  )
}

export function generateStaticParams() {
  const posts = getAllPosts(['slug'])

  return posts.map((post) => ({
    slug: post.slug,
  }))
}
