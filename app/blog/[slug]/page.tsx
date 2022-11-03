import { format } from 'date-fns'

import { getPost } from '../../../utils/blog'

export default function PostPage({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { id: string }
}) {
  const post = getPost(params.slug, ['title', 'date', 'content'])

  return (
    <main className="mx-auto max-w-prose px-4">
      <div className="py-8">
        <article>
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <time dateTime={post.date} className="text-sm text-slate-400">
            {format(new Date(post.date), 'yyyy MMM dd')}
          </time>
          <div className="mt-4">{post.content}</div>
        </article>
      </div>
    </main>
  )
}
