import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import AuthCard from '../components/AuthCard'
import GoogleButton from '../components/GoogleButton'
import { signInWithEmail, signInWithGoogle } from '../lib/authService'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Please enter both your email and password.')
      return
    }

    setLoading(true)
    try {
      await signInWithEmail(email, password)
      navigate('/dashboard')
    } catch (err) {
      setError(err.message || 'Could not log in. Please check your credentials.')
    } finally {
      setLoading(false)
    }
  }

  async function handleGoogleLogin() {
    setError('')
    setGoogleLoading(true)
    try {
      await signInWithGoogle()
    } catch (err) {
      setError(err.message || 'Could not start Google sign-in.')
      setGoogleLoading(false)
    }
  }

  return (
    <AuthCard
      title="Welcome back"
      subtitle="Log in to keep your tasks blooming"
      footerText="Don't have an account?"
      footerLinkText="Sign up"
      footerLinkTo="/signup"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-ink-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
            className="w-full rounded-xl border border-ink-200 px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 transition focus:border-lavender-400 focus:outline-none focus:ring-4 focus:ring-lavender-100"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-1.5 block text-sm font-medium text-ink-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            autoComplete="current-password"
            className="w-full rounded-xl border border-ink-200 px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 transition focus:border-lavender-400 focus:outline-none focus:ring-4 focus:ring-lavender-100"
          />
        </div>

        {error && (
          <div className="rounded-lg bg-red-50 px-3.5 py-2.5 text-sm text-red-600">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-lavender-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm shadow-lavender-300/50 transition hover:bg-lavender-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          {loading ? 'Logging in…' : 'Log in'}
        </button>
      </form>

      <div className="my-5 flex items-center gap-3">
        <div className="h-px flex-1 bg-ink-100" />
        <span className="text-xs font-medium text-ink-400">OR</span>
        <div className="h-px flex-1 bg-ink-100" />
      </div>

      <GoogleButton onClick={handleGoogleLogin} loading={googleLoading} />
    </AuthCard>
  )
}