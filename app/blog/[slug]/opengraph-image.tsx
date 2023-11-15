import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export const alt = 'Blog Post'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default function PostOG(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)

    const hasTitle = searchParams.has('title')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'Blog Post'

    return new ImageResponse(
      (
        <div tw="flex h-full w-full flex-col items-center justify-center bg-slate-900">
          <div tw="text-6xl">🦉</div>
          <div tw="mt-8 flex w-full justify-center px-32 text-center text-6xl leading-normal tracking-tight text-slate-100">
            {title}
          </div>
        </div>
      ),
      {
        ...size,
        fonts: [],
      },
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
