import Link from 'next/link'

export default function Menu() {
  return (
    <ul className="flex items-center space-x-4 sm:mt-8 sm:block sm:space-x-0 sm:space-y-4 sm:text-center">
      <li>
        <Link
          href="/blog"
          className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
        >
          Blog
        </Link>
      </li>
      <li>
        <Link
          href="/gallery"
          className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
        >
          Gallery
        </Link>
      </li>
      <li>
        <Link
          href="/projects"
          className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
        >
          Contact
        </Link>
      </li>
    </ul>
  )
}
