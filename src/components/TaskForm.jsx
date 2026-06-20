import { useState } from 'react'
import { Plus } from 'lucide-react'

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [showDescription, setShowDescription] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!title.trim()) {
      setError('Give your task a title first.')
      return
    }

    setSubmitting(true)
    try {
      await onAddTask({ title, description })
      setTitle('')
      setDescription('')
      setShowDescription(false)
    } catch (err) {
      setError(err.message || 'Could not add task. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-lavender-100 bg-white p-5 shadow-sm"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <div className="flex-1">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="What needs to get done?"
            className="w-full rounded-xl border border-ink-200 px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 transition focus:border-lavender-400 focus:outline-none focus:ring-4 focus:ring-lavender-100"
          />
          {showDescription && (
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add a note or details (optional)"
              rows={2}
              className="mt-2 w-full resize-none rounded-xl border border-ink-200 px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 transition focus:border-lavender-400 focus:outline-none focus:ring-4 focus:ring-lavender-100"
            />
          )}
          {!showDescription && (
            <button
              type="button"
              onClick={() => setShowDescription(true)}
              className="mt-1.5 text-xs font-medium text-lavender-600 hover:text-lavender-700"
            >
              + Add description
            </button>
          )}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="flex items-center justify-center gap-1.5 rounded-xl bg-lavender-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm shadow-lavender-300/50 transition hover:bg-lavender-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Plus className="h-4 w-4" />
          {submitting ? 'Adding…' : 'Add task'}
        </button>
      </div>

      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </form>
  )
}