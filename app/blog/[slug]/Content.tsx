'use client'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

type Props = {
  mdxSource: MDXRemoteSerializeResult
}

const components = {}

export default function Content({ mdxSource }: Props) {
  return <MDXRemote {...mdxSource} components={components} />
}
