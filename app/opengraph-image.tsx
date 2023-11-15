import { ImageResponse } from '@vercel/og'
import { SITE_NAME } from '@/utils/constants'

export const runtime = 'edge'

export const alt = SITE_NAME
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function RootOG() {
  return new ImageResponse(
    (
      <div tw="flex h-full w-full items-center justify-center bg-slate-900 text-8xl text-slate-100">
        🦉 {SITE_NAME}
      </div>
    ),
    {
      ...size,
      fonts: [],
    },
  )
}
