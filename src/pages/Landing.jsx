import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Smartphone,
  Zap,
} from 'lucide-react'
import Navbar from '../components/Navbar'

const features = [
  {
    icon: Sparkles,
    title: 'Effortless task capture',
    description:
      'Add tasks in seconds with a clean, distraction-free input. No clutter, no friction.',
  },
  {
    icon: ShieldCheck,
    title: 'Private by design',
    description:
      'Your tasks are yours alone. Row-level security keeps every account fully isolated.',
  },
  {
    icon: Zap,
    title: 'Built for momentum',
    description:
      'Filter by active or completed, track your progress, and keep moving forward.',
  },
  {
    icon: Smartphone,
    title: 'Looks great everywhere',
    description:
      'A fully responsive layout that feels just as good on your phone as your desktop.',
  },
]

const previewTasks = [
  { title: 'Design onboarding flow', done: true },
  { title: 'Write Q3 product brief', done: true },
  { title: 'Review pull requests', done: false },
  { title: 'Plan team retro', done: false },
]

export default function Landing() {
  return (
    <div className="min-h-screen bg-lavender-50">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-lavender-200/50 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-lavender-200 bg-white px-3.5 py-1.5 text-xs font-medium text-lavender-700 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Your calm, focused to-do list
            </span>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl">
              Plan your day,{' '}
              <span className="bg-gradient-to-r from-lavender-600 to-lavender-400 bg-clip-text text-transparent">
                one task at a time
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-lg text-lg text-ink-500">
              TaskBloom is a simple, beautiful productivity app that helps
              you organize your work without the noise. Sign up free and
              start clearing your list today.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/signup"
                className="flex items-center gap-2 rounded-xl bg-ink-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-ink-900/10 transition hover:bg-ink-800"
              >
                Start for free
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/login"
                className="rounded-xl border border-ink-200 bg-white px-6 py-3 text-sm font-medium text-ink-700 transition hover:bg-ink-50"
              >
                I already have an account
              </Link>
            </div>
          </div>

          <div className="relative mx-auto mt-16 max-w-2xl">
            <div className="rounded-2xl border border-lavender-100 bg-white p-2 shadow-2xl shadow-lavender-300/30">
              <div className="rounded-xl border border-lavender-100 bg-lavender-50/50 p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-ink-900">
                      Good morning, Alex 👋
                    </p>
                    <p className="text-xs text-ink-500">
                      You have 2 tasks left today
                    </p>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-lavender-200 text-xs font-semibold text-lavender-700">
                    A
                  </div>
                </div>

                <div className="space-y-2">
                  {previewTasks.map((task) => (
                    <div
                      key={task.title}
                      className="flex items-center gap-3 rounded-lg bg-white px-3.5 py-2.5 shadow-sm"
                    >
                      <div
                        className={`flex h-4.5 w-4.5 items-center justify-center rounded-full border-2 ${
                          task.done
                            ? 'border-lavender-600 bg-lavender-600'
                            : 'border-ink-300'
                        }`}
                      >
                        {task.done && (
                          <CheckCircle2 className="h-3 w-3 text-white" />
                        )}
                      </div>
                      <span
                        className={`text-sm ${
                          task.done
                            ? 'text-ink-400 line-through'
                            : 'text-ink-800'
                        }`}
                      >
                        {task.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink-900">
            Everything you need, nothing you don't
          </h2>
          <p className="mt-3 text-ink-500">
            TaskBloom keeps your task list simple, secure, and genuinely
            pleasant to use.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-lavender-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lavender-100">
                <feature.icon
                  className="h-5 w-5 text-lavender-600"
                  strokeWidth={2.25}
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink-900">
                {feature.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <div className="rounded-3xl bg-gradient-to-br from-lavender-600 to-lavender-800 px-8 py-14 text-center shadow-xl shadow-lavender-300/40">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Ready to bloom into your most organized self?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-lavender-100">
            It takes less than a minute to sign up. No credit card needed.
          </p>
          <Link
            to="/signup"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-medium text-lavender-700 shadow-lg transition hover:bg-lavender-50"
          >
            Create your free account
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <footer className="border-t border-lavender-100 py-8 text-center text-sm text-ink-400">
        © {new Date().getFullYear()} TaskBloom. Built with care.
      </footer>
    </div>
  )
}