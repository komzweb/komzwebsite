import { getPost } from '../../../utils/mdx'
import { SITE_NAME, SITE_URL } from '../../../utils/constants'

export default function PostHead({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug, ['title', 'description'])

  const pageUrl = `${SITE_URL}/blog/${params.slug}`
  const pageTitle = `${post.title} | ${SITE_NAME}`
  const description = post.description
  const ogImage = ''

  return (
    <>
      <title>{pageTitle}</title>
      <meta property="og:title" content={pageTitle} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={pageUrl} />
      <link rel="canonical" href={pageUrl} />
    </>
  )
}
