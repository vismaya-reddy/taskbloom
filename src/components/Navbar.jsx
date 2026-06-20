import { Link } from 'react-router-dom'
import { Flower2 } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-lavender-100/80 bg-lavender-50/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-lavender-500 to-lavender-700 shadow-sm shadow-lavender-300/50">
            <Flower2 className="h-5 w-5 text-white" strokeWidth={2.25} />
          </div>
          <span className="text-lg font-semibold tracking-tight text-ink-900">
            TaskBloom
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="rounded-lg px-4 py-2 text-sm font-medium text-ink-600 transition hover:text-ink-900"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="rounded-lg bg-ink-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-ink-800"
          >
            Get started
          </Link>
        </div>
      </nav>
    </header>
  )
}