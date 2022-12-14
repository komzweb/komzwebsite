import { SITE_NAME, SITE_URL } from '../utils/constants'
import HeadItems from './components/HeadItems'

const description = 'Generated by create next app'
const ogImage = `${SITE_URL}/api/og`

export default function RootHead() {
  return (
    <>
      <title>{SITE_NAME}</title>
      <meta property="og:title" content={SITE_NAME} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_URL} />
      <link rel="canonical" href={SITE_URL} />
      <HeadItems />
    </>
  )
}
