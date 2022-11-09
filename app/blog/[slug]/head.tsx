import { getPost } from '../../../utils/blog'
import { SITE_NAME, SITE_URL } from '../../../utils/constants'
import HeadItems from '../../components/HeadItems'

export default function PostHead({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug, ['title', 'description'])

  const url = `${SITE_URL}/blog/${params.slug}`
  const title = `${post.title} | ${SITE_NAME}`
  const description = post.description
  const ogImage = `${SITE_URL}/api/og-post?title=${post.title}`

  return (
    <>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={url} />
      <link rel="canonical" href={url} />
      <HeadItems />
    </>
  )
}
