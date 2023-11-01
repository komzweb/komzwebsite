import Image from 'next/image'
import Link from 'next/link'

import Container from '../components/Container'
import Header from '../components/Header'

import ShoppingApp from './project-images/shopping-app.png'
import MusicApp from './project-images/music-app.png'
import Game1 from './project-images/game1.png'
import Game2 from './project-images/game2.png'

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <section className="py-8" id="projects">
            <h1 className="text-3xl font-extrabold">Projects</h1>
            <p className="my-8">test</p>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <Link href={`/projects/acme-store`}>
                <div className="overflow-hidden rounded-lg border border-slate-200 p-6 hover:bg-slate-100 dark:border-slate-800">
                  <Image
                    alt="Project Image"
                    className="mb-6"
                    height="300"
                    src={ShoppingApp}
                    style={{
                      aspectRatio: '500/300',
                      objectFit: 'cover',
                    }}
                    width="500"
                  />
                  <h2 className="mb-3 text-xl font-bold">Acme Store</h2>
                  <p className="text-slate-600 dark:text-slate-400">
                    Get your products delivered in no time with our fast
                    shipping services.
                  </p>
                </div>
              </Link>
              <Link href={`#`}>
                <div className="overflow-hidden rounded-lg border border-slate-200 p-6 hover:bg-slate-100 dark:border-slate-800">
                  <Image
                    alt="Project Image"
                    className="mb-6"
                    height="300"
                    src={MusicApp}
                    style={{
                      aspectRatio: '500/300',
                      objectFit: 'cover',
                    }}
                    width="500"
                  />
                  <h2 className="mb-3 text-xl font-bold">Project 3</h2>
                  <p className="text-slate-600 dark:text-slate-400">
                    This is the third project.
                  </p>
                </div>
              </Link>
              <Link href={`#`}>
                <div className="overflow-hidden rounded-lg border border-slate-200 p-6 hover:bg-slate-100 dark:border-slate-800">
                  <Image
                    alt="Project Image"
                    className="mb-6"
                    height="300"
                    src={Game2}
                    style={{
                      aspectRatio: '500/300',
                      objectFit: 'cover',
                    }}
                    width="500"
                  />
                  <h2 className="mb-3 text-xl font-bold">Project 2</h2>
                  <p className="text-slate-600 dark:text-slate-400">
                    This is the second project.
                  </p>
                </div>
              </Link>
              <Link href={`#`}>
                <div className="overflow-hidden rounded-lg border border-slate-200 p-6 hover:bg-slate-100 dark:border-slate-800">
                  <Image
                    alt="Project Image"
                    className="mb-6"
                    height="300"
                    src={Game1}
                    style={{
                      aspectRatio: '500/300',
                      objectFit: 'cover',
                    }}
                    width="500"
                  />
                  <h2 className="mb-3 text-xl font-bold">Project 1</h2>
                  <p className="text-slate-600 dark:text-slate-400">
                    This is the first project.
                  </p>
                </div>
              </Link>
            </div>
          </section>
        </Container>
      </main>
    </>
  )
}
