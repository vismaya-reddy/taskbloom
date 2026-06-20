import { Flower2, LogOut } from 'lucide-react'

export default function DashboardHeader({ userEmail, onLogout, loggingOut }) {
  return (
    <header className="border-b border-lavender-100 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-lavender-500 to-lavender-700 shadow-sm shadow-lavender-300/50">
            <Flower2 className="h-5 w-5 text-white" strokeWidth={2.25} />
          </div>
          <span className="text-lg font-semibold tracking-tight text-ink-900">
            TaskBloom
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden text-sm text-ink-500 sm:inline">
            {userEmail}
          </span>
          <button
            onClick={onLogout}
            disabled={loggingOut}
            className="flex items-center gap-1.5 rounded-lg border border-ink-200 px-3 py-1.5 text-sm font-medium text-ink-600 transition hover:bg-ink-50 disabled:opacity-60"
          >
            <LogOut className="h-4 w-4" />
            {loggingOut ? 'Logging out…' : 'Log out'}
          </button>
        </div>
      </div>
    </header>
  )
}