import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function AcmeStorePricing() {
  return (
    <div className="flex min-h-screen flex-col font-sans text-base dark:bg-slate-900 dark:text-slate-100">
      <div className="bg-slate-100 px-4 py-2 text-center text-sm dark:bg-slate-800 dark:text-slate-300">
        This is a demo website built with Vercel v0 and DALL-E 3.
      </div>
      <header className="flex items-center justify-between border-b p-4 shadow-md dark:border-slate-700 dark:bg-slate-900">
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
            <span className="hidden text-2xl font-bold sm:block">
              Acme Store
            </span>
          </Link>
          <span className="text-xs dark:text-slate-400">
            by{' '}
            <Link href={`/`} className="hover:underline">
              komz
            </Link>
          </span>
        </div>
        <nav className="space-x-4">
          <Link
            className="hover:underline dark:text-slate-300"
            href="/projects/acme-store/pricing"
          >
            Pricing
          </Link>
          <Link
            className="rounded border border-slate-600 px-3 py-1 hover:border-slate-400 hover:text-slate-500 dark:border-slate-400 dark:text-slate-300 dark:hover:border-slate-300 dark:hover:text-slate-100"
            href="/projects/acme-store/login"
          >
            Login
          </Link>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-3xl font-extrabold">Pricing</h1>
        <h2 className="mb-4 text-xl font-bold">Choose your plan:</h2>
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col justify-between rounded-lg border border-slate-500 bg-slate-100 p-4 dark:bg-slate-800">
            <div>
              <h3 className="text-lg font-bold">Basic Plan</h3>
              <p className="mb-2 text-2xl font-bold text-green-500">$9.99</p>
              <ul className="mb-4 list-inside list-disc">
                <li>Feature One</li>
                <li>Feature Two</li>
              </ul>
            </div>
            <Button
              variant="secondary"
              className="w-full bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-300 dark:text-black dark:hover:bg-slate-100"
            >
              Subscribe
            </Button>
          </div>
          <div className="flex flex-col justify-between rounded-lg border border-slate-500 bg-slate-100 p-4 dark:bg-slate-800">
            <div>
              <h3 className="text-lg font-bold">Pro Plan</h3>
              <p className="mb-2 text-2xl font-bold text-green-500">$19.99</p>
              <ul className="mb-4 list-inside list-disc">
                <li>Feature One</li>
                <li>Feature Two</li>
                <li>Feature Three</li>
              </ul>
            </div>
            <Button
              variant="secondary"
              className="w-full bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-300 dark:text-black dark:hover:bg-slate-100"
            >
              Subscribe
            </Button>
          </div>
          <div className="flex flex-col justify-between rounded-lg border border-slate-500 bg-slate-100 p-4 dark:bg-slate-800">
            <div>
              <h3 className="text-lg font-bold">Premium Plan</h3>
              <p className="mb-2 text-2xl font-bold text-green-500">$29.99</p>
              <ul className="mb-4 list-inside list-disc">
                <li>Feature One</li>
                <li>Feature Two</li>
                <li>Feature Three</li>
                <li>Feature Four</li>
              </ul>
            </div>
            <Button
              variant="secondary"
              className="w-full bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-300 dark:text-black dark:hover:bg-slate-100"
            >
              Subscribe
            </Button>
          </div>
        </div>
        <h2 className="mb-4 text-xl font-bold">Frequently Asked Questions:</h2>
        <div className="space-y-2">
          <details>
            <summary className="mb-2 font-bold text-slate-400 hover:cursor-pointer">
              How do I cancel my subscription?
            </summary>
            <p className="ml-4 dark:text-slate-100">
              You can cancel your subscription at any time in your account
              settings.
            </p>
          </details>
          <details>
            <summary className="mb-2 font-bold text-slate-400 hover:cursor-pointer">
              What payment methods do you accept?
            </summary>
            <p className="ml-4 dark:text-slate-100">
              We accept all major credit cards, PayPal, and Google Pay.
            </p>
          </details>
          <details>
            <summary className="mb-2 font-bold text-slate-400 hover:cursor-pointer">
              Can I change my subscription plan later?
            </summary>
            <p className="ml-4 dark:text-slate-100">
              Yes, you can upgrade or downgrade your plan at any time.
            </p>
          </details>
        </div>
      </main>
    </div>
  )
}
