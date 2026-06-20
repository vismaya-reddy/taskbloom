import { Link } from 'react-router-dom'
import { Flower2 } from 'lucide-react'

export default function AuthCard({ title, subtitle, children, footerText, footerLinkText, footerLinkTo }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-lavender-50 px-4 py-12">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-lavender-200/50 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-lavender-300/40 blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        <Link to="/" className="mb-8 flex items-center justify-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-lavender-500 to-lavender-700 shadow-sm shadow-lavender-300/50">
            <Flower2 className="h-5 w-5 text-white" strokeWidth={2.25} />
          </div>
          <span className="text-lg font-semibold tracking-tight text-ink-900">
            TaskBloom
          </span>
        </Link>

        <div className="rounded-2xl border border-lavender-100 bg-white p-8 shadow-xl shadow-lavender-200/40">
          <div className="mb-6 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-ink-900">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-1.5 text-sm text-ink-500">{subtitle}</p>
            )}
          </div>

          {children}
        </div>

        {footerText && (
          <p className="mt-6 text-center text-sm text-ink-500">
            {footerText}{' '}
            <Link
              to={footerLinkTo}
              className="font-medium text-lavender-600 hover:text-lavender-700"
            >
              {footerLinkText}
            </Link>
          </p>
        )}
      </div>
    </div>
  )
}