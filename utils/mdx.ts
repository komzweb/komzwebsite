import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

type Items = {
  [key: string]: string
}

const postsDirectory = join(process.cwd(), '_posts')

export function getSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getFile(slug: string) {
  const fullPath = join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  return matter(fileContents)
}

export function getPost(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.mdx?$/, '')
  const { data, content } = getFile(realSlug)

  const items: Items = {}

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getSlugs()
  const posts = slugs
    .map((slug) => getPost(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
