import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  CardTitle,
  CardDescription,
  CardContent,
  Card,
} from '@/components/ui/card'

import acmeStore from '../project-images/shopping-app.png'
import johnDoe from './user-images/john-doe.png'
import janeSmith from './user-images/jane-smith.png'
import samuelJackson from './user-images/samuel-jackson.png'
import emmaWatson from './user-images/emma-watson.png'

export default function AcmeStoreHome() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-900 font-sans text-base text-zinc-100">
      <div className="bg-zinc-800 px-4 py-2 text-center text-sm text-zinc-300">
        This is a demo website built with Vercel v0 and DALL-E 3.
      </div>
      <header className="flex items-center justify-between border-b border-zinc-700 bg-zinc-900 p-4 shadow-md">
        <div className="flex items-center space-x-4">
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
          <span className="hidden text-2xl font-bold text-zinc-100 sm:block">
            Acme Store
          </span>
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
      <main className="flex-grow">
        <section className="relative h-96 w-full overflow-hidden" id="hero">
          <div className="">
            <Image
              alt="Mountains"
              src={acmeStore}
              placeholder="blur"
              quality={100}
              fill
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-zinc-800 bg-opacity-60 px-4 py-20">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-zinc-100">
                Welcome to Acme Store
              </h1>
              <p className="mt-2 text-lg text-zinc-400">
                Your one-stop solution for all your needs
              </p>
              <Button className="mt-4 rounded-lg bg-emerald-500 px-6 py-2 text-white">
                Shop Now
              </Button>
            </div>
          </div>
        </section>
        <section
          className="grid gap-8 bg-zinc-900 px-4 py-20 sm:px-8 md:grid-cols-2 md:px-16 lg:grid-cols-3 lg:px-32"
          id="features"
        >
          <Card className="border-zinc-500 bg-zinc-800">
            <CardContent className="flex items-start gap-4 p-6">
              <svg
                className=" h-8 w-8 text-emerald-500"
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
                <polygon points="13 19 22 12 13 5 13 19" />
                <polygon points="2 19 11 12 2 5 2 19" />
              </svg>
              <div>
                <CardTitle className="mb-2 text-zinc-100">
                  Fast Delivery
                </CardTitle>
                <CardDescription className="text-zinc-100">
                  Get your products delivered in no time with our fast shipping
                  services.
                </CardDescription>
              </div>
            </CardContent>
          </Card>
          <Card className="border-zinc-500 bg-zinc-800">
            <CardContent className="flex items-start gap-4 p-6">
              <svg
                className=" h-8 w-8 text-emerald-500"
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
                <circle cx="7.5" cy="15.5" r="5.5" />
                <path d="m21 2-9.6 9.6" />
                <path d="m15.5 7.5 3 3L22 7l-3-3" />
              </svg>
              <div>
                <CardTitle className="mb-2 text-zinc-100">
                  High Quality
                </CardTitle>
                <CardDescription className="text-zinc-100">
                  All our products are of the highest quality with 100%
                  satisfaction guarantee.
                </CardDescription>
              </div>
            </CardContent>
          </Card>
          <Card className="border-zinc-500 bg-zinc-800">
            <CardContent className="flex items-start gap-4 p-6">
              <svg
                className=" h-8 w-8 text-emerald-500"
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
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <div>
                <CardTitle className="mb-2 text-zinc-100">
                  24/7 Support
                </CardTitle>
                <CardDescription className="text-zinc-100">
                  We offer 24/7 support for all your queries and issues.
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        </section>
        <section
          className="grid gap-8 bg-zinc-800 px-4 py-20 sm:px-8 md:grid-cols-2 md:px-16 lg:px-32 xl:grid-cols-4"
          id="testimonials"
        >
          <Card className="border-zinc-500 bg-zinc-700">
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <Image
                alt="John Doe"
                className="rounded-full"
                height="80"
                src={johnDoe}
                style={{
                  aspectRatio: '80/80',
                  objectFit: 'cover',
                }}
                width="80"
              />
              <CardTitle className="text-zinc-100">John Doe</CardTitle>
              <CardDescription className="text-zinc-100">
                Acme Store has the best products. Fast delivery and excellent
                customer service. Highly recommended!
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="border-zinc-500 bg-zinc-700">
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <Image
                alt="Jane Smith"
                className="rounded-full"
                height="80"
                src={janeSmith}
                style={{
                  aspectRatio: '80/80',
                  objectFit: 'cover',
                }}
                width="80"
              />
              <CardTitle className="text-zinc-100">Jane Smith</CardTitle>
              <CardDescription className="text-zinc-100">
                I love shopping at Acme Store. High quality products and always
                on time. Keep up the good work!
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="border-zinc-500 bg-zinc-700">
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <Image
                alt="Samuel Jackson"
                className="rounded-full"
                height="80"
                src={samuelJackson}
                style={{
                  aspectRatio: '80/80',
                  objectFit: 'cover',
                }}
                width="80"
              />
              <CardTitle className="text-zinc-100">Samuel Jackson</CardTitle>
              <CardDescription className="text-zinc-100">
                The variety of products at Acme Store is amazing. I found
                everything I needed in one place!
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="border-zinc-500 bg-zinc-700">
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <Image
                alt="Emma Watson"
                className="rounded-full"
                height="80"
                src={emmaWatson}
                style={{
                  aspectRatio: '80/80',
                  objectFit: 'cover',
                }}
                width="80"
              />
              <CardTitle className="text-zinc-100">Emma Watson</CardTitle>
              <CardDescription className="text-zinc-100">
                Acme Store never disappoints. Their products are top notch and
                the customer service is incredible. A+++
              </CardDescription>
            </CardContent>
          </Card>
        </section>
      </main>
      <footer className="bg-zinc-900 p-4">
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <Link className="hover:underline" href="#">
              <svg
                className=" h-6 w-6 text-zinc-300"
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
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link className="hover:underline" href="#">
              <svg
                className=" h-6 w-6 text-zinc-300"
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
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
            <Link className="hover:underline" href="#">
              <svg
                className=" h-6 w-6 text-zinc-300"
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
                <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
          <div className="text-sm text-zinc-400">
            © 2023 Acme Store by{' '}
            <Link href={`/`} className="hover:underline">
              komz
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
