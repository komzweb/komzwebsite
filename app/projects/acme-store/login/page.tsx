import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function AcmeStoreLogin() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-900 font-sans text-base text-zinc-100">
      <header className="flex items-center justify-between bg-zinc-900 p-4 shadow-md">
        <div className="flex items-center space-x-4">
          <Link href={`/projects/acme-store`}>
            <svg
              className=" h-8 w-8"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
              <path d="M2 7h20" />
              <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
            </svg>
          </Link>
          <Link href={`/projects/acme-store`}>
            <span className="hidden text-2xl font-bold text-zinc-100 sm:block">
              Acme Store
            </span>
          </Link>
          <span className="text-xs text-zinc-400">
            by{' '}
            <Link href={`/`} className="hover:underline">
              komz
            </Link>
          </span>
        </div>
        <nav className="space-x-4">
          <Link
            className="text-zinc-300 hover:underline"
            href="/projects/acme-store/pricing"
          >
            Pricing
          </Link>
          <Link
            className="rounded border border-zinc-500 px-3 py-1 text-zinc-300 hover:border-zinc-300 hover:text-zinc-100"
            href="/projects/acme-store/login"
          >
            Login
          </Link>
        </nav>
      </header>
      <main className="mx-auto max-w-sm space-y-6 px-4 py-16">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            Enter your email and password to login to your account
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              className="text-zinc-900"
              placeholder="m@example.com"
              id="email"
              type="email"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              className="text-zinc-900"
              id="password"
              type="password"
              required
            />
          </div>
          <Button
            className="w-full bg-zinc-700 hover:bg-zinc-600"
            type="submit"
          >
            Login
          </Button>
          <div className="my-4 flex items-center">
            <div className="flex-1 border-b border-zinc-300 dark:border-zinc-600" />
            <span className="px-2 text-zinc-500 dark:text-zinc-400">or</span>
            <div className="flex-1 border-b border-zinc-300 dark:border-zinc-600" />
          </div>
          <Button
            className="flex w-full items-center justify-center space-x-2 bg-blue-500 text-white"
            variant="outline"
          >
            <svg
              className=" h-5 w-5"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="4" />
              <line x1="21.17" x2="12" y1="8" y2="8" />
              <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
              <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
            </svg>
            <span>Login with Google</span>
          </Button>
          <Button
            className="flex w-full items-center justify-center space-x-2 bg-gray-500 text-white"
            variant="outline"
          >
            <svg
              className=" h-5 w-5"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
              <path d="M10 2c1 .5 2 2 2 5" />
            </svg>
            <span>Login with Apple</span>
          </Button>
        </div>
      </main>
    </div>
  )
}
