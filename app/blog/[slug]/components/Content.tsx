'use client'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import contentStyles from '../styles/Content.module.css'
import ExternalLink from './ExternalLink'

type Props = {
  mdxSource: MDXRemoteSerializeResult
}

const components = {
  ExternalLink,
}

export default function Content({ mdxSource }: Props) {
  return (
    <div className={contentStyles.mdx}>
      <MDXRemote {...mdxSource} components={components} />
    </div>
  )
}
