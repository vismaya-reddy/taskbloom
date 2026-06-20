import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Loader2, CheckCircle2 } from 'lucide-react'
import AuthCard from '../components/AuthCard'
import GoogleButton from '../components/GoogleButton'
import { signUpWithEmail, signInWithGoogle } from '../lib/authService'

export default function Signup() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields.')
      return
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    setLoading(true)
    try {
      const data = await signUpWithEmail(email, password)

      if (!data.session) {
        setSuccess(true)
      } else {
        navigate('/dashboard')
      }
    } catch (err) {
      setError(err.message || 'Could not create your account. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  async function handleGoogleSignup() {
    setError('')
    setGoogleLoading(true)
    try {
      await signInWithGoogle()
    } catch (err) {
      setError(err.message || 'Could not start Google sign-in.')
      setGoogleLoading(false)
    }
  }

  if (success) {
    return (
      <AuthCard title="Check your inbox" subtitle="">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
            <CheckCircle2 className="h-6 w-6 text-emerald-600" />
          </div>
          <p className="text-sm text-ink-600">
            We sent a confirmation link to{' '}
            <span className="font-medium text-ink-900">{email}</span>.
            Click the link to activate your account, then log in.
          </p>
        </div>
      </AuthCard>
    )
  }

  return (
    <AuthCard
      title="Create your account"
      subtitle="Start growing your task list today"
      footerText="Already have an account?"
      footerLinkText="Log in"
      footerLinkTo="/login"
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
            placeholder="At least 6 characters"
            autoComplete="new-password"
            className="w-full rounded-xl border border-ink-200 px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 transition focus:border-lavender-400 focus:outline-none focus:ring-4 focus:ring-lavender-100"
          />
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="mb-1.5 block text-sm font-medium text-ink-700"
          >
            Confirm password
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Re-enter your password"
            autoComplete="new-password"
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
          {loading ? 'Creating account…' : 'Create account'}
        </button>
      </form>

      <div className="my-5 flex items-center gap-3">
        <div className="h-px flex-1 bg-ink-100" />
        <span className="text-xs font-medium text-ink-400">OR</span>
        <div className="h-px flex-1 bg-ink-100" />
      </div>

      <GoogleButton
        onClick={handleGoogleSignup}
        loading={googleLoading}
        label="Continue with Google"
      />
    </AuthCard>
  )
}