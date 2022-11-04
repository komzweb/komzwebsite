'use client'

import 'highlight.js/styles/night-owl.css'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import './mdx.css'

type Props = {
  mdxSource: MDXRemoteSerializeResult
}

const components = {}

export default function Content({ mdxSource }: Props) {
  return <MDXRemote {...mdxSource} components={components} />
}
