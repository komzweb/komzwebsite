'use client'

import 'highlight.js/styles/night-owl.css'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import './mdx.css'
import ExternalLink from '../../ExternalLink'

type Props = {
  mdxSource: MDXRemoteSerializeResult
}

const components = {
  ExternalLink,
}

export default function Content({ mdxSource }: Props) {
  return <MDXRemote {...mdxSource} components={components} />
}
