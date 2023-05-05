import Container from './Container'
import Copyright from './Copyright'
import Social from './Social'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-700">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Copyright />
          <Social />
        </div>
      </Container>
    </footer>
  )
}
