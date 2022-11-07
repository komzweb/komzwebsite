import { ImageResponse } from '@vercel/og'

import { SITE_NAME } from '../../utils/constants'

export const config = {
  runtime: 'experimental-edge',
}

export default function handler() {
  return new ImageResponse(
    (
      <div tw="flex h-full w-full items-center justify-center bg-slate-900 text-8xl text-slate-100">
        🦉 {SITE_NAME}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
