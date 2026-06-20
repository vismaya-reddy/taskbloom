import { useState } from 'react'
import { Check, Pencil, Trash2, X, Loader2 } from 'lucide-react'

export default function TaskItem({ task, onToggle, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(task.title)
  const [editDescription, setEditDescription] = useState(task.description || '')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  async function handleToggle() {
    setBusy(true)
    setError('')
    try {
      await onToggle(task)
    } catch (err) {
      setError(err.message || 'Could not update task.')
    } finally {
      setBusy(false)
    }
  }

  async function handleSaveEdit() {
    if (!editTitle.trim()) {
      setError('Title cannot be empty.')
      return
    }
    setBusy(true)
    setError('')
    try {
      await onUpdate(task.id, {
        title: editTitle.trim(),
        description: editDescription.trim() || null,
      })
      setIsEditing(false)
    } catch (err) {
      setError(err.message || 'Could not save changes.')
    } finally {
      setBusy(false)
    }
  }

  async function handleDelete() {
    setBusy(true)
    setError('')
    try {
      await onDelete(task.id)
    } catch (err) {
      setError(err.message || 'Could not delete task.')
      setBusy(false)
    }
  }

  if (isEditing) {
    return (
      <div className="rounded-xl border border-lavender-200 bg-lavender-50/50 p-4 shadow-sm">
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          autoFocus
          className="w-full rounded-lg border border-ink-200 px-3 py-2 text-sm text-ink-900 focus:border-lavender-400 focus:outline-none focus:ring-4 focus:ring-lavender-100"
        />
        <textarea
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
          placeholder="Description (optional)"
          rows={2}
          className="mt-2 w-full resize-none rounded-lg border border-ink-200 px-3 py-2 text-sm text-ink-900 focus:border-lavender-400 focus:outline-none focus:ring-4 focus:ring-lavender-100"
        />
        {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
        <div className="mt-3 flex gap-2">
          <button
            onClick={handleSaveEdit}
            disabled={busy}
            className="flex items-center gap-1 rounded-lg bg-lavender-600 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-lavender-700 disabled:opacity-60"
          >
            <Check className="h-3.5 w-3.5" /> Save
          </button>
          <button
            onClick={() => {
              setIsEditing(false)
              setEditTitle(task.title)
              setEditDescription(task.description || '')
              setError('')
            }}
            disabled={busy}
            className="flex items-center gap-1 rounded-lg border border-ink-200 px-3 py-1.5 text-xs font-medium text-ink-600 transition hover:bg-ink-50"
          >
            <X className="h-3.5 w-3.5" /> Cancel
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="group flex items-start gap-3 rounded-xl border border-lavender-100 bg-white p-4 shadow-sm transition hover:border-lavender-200 hover:shadow-md">
      <button
        onClick={handleToggle}
        disabled={busy}
        aria-label={task.is_completed ? 'Mark as active' : 'Mark as complete'}
        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition ${
          task.is_completed
            ? 'border-lavender-600 bg-lavender-600'
            : 'border-ink-300 hover:border-lavender-400'
        }`}
      >
        {busy ? (
          <Loader2 className="h-3 w-3 animate-spin text-lavender-600" />
        ) : (
          task.is_completed && <Check className="h-3 w-3 text-white" strokeWidth={3} />
        )}
      </button>

      <div className="min-w-0 flex-1">
        <p
          className={`text-sm font-medium ${
            task.is_completed ? 'text-ink-400 line-through' : 'text-ink-900'
          }`}
        >
          {task.title}
        </p>
        {task.description && (
          <p
            className={`mt-0.5 text-sm ${
              task.is_completed ? 'text-ink-300 line-through' : 'text-ink-500'
            }`}
          >
            {task.description}
          </p>
        )}
        {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
      </div>

      <div className="flex shrink-0 items-center gap-1 opacity-0 transition group-hover:opacity-100">
        <button
          onClick={() => setIsEditing(true)}
          aria-label="Edit task"
          className="rounded-lg p-1.5 text-ink-400 transition hover:bg-lavender-50 hover:text-lavender-600"
        >
          <Pencil className="h-4 w-4" />
        </button>
        <button
          onClick={handleDelete}
          disabled={busy}
          aria-label="Delete task"
          className="rounded-lg p-1.5 text-ink-400 transition hover:bg-red-50 hover:text-red-600"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}