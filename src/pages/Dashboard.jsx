import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AlertCircle } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import { signOut } from '../lib/authService'
import {
  fetchTasks,
  createTask,
  updateTask,
  toggleTaskComplete,
  deleteTask,
} from '../lib/taskService'

import DashboardHeader from '../components/DashboardHeader'
import StatsCards from '../components/StatsCards'
import TaskForm from '../components/TaskForm'
import TaskFilters from '../components/TaskFilters'
import TaskItem from '../components/TaskItem'
import EmptyState from '../components/EmptyState'
import LoadingSpinner from '../components/LoadingSpinner'

export default function Dashboard() {
  const { user } = useAuth()
  const navigate = useNavigate()

  const [tasks, setTasks] = useState([])
  const [loadingTasks, setLoadingTasks] = useState(true)
  const [loadError, setLoadError] = useState('')
  const [filter, setFilter] = useState('all')
  const [loggingOut, setLoggingOut] = useState(false)

  useEffect(() => {
    if (!user) return

    let isMounted = true
    setLoadingTasks(true)
    setLoadError('')

    fetchTasks(user.id)
      .then((data) => {
        if (isMounted) setTasks(data)
      })
      .catch((err) => {
        if (isMounted) {
          setLoadError(err.message || 'Could not load your tasks.')
        }
      })
      .finally(() => {
        if (isMounted) setLoadingTasks(false)
      })

    return () => {
      isMounted = false
    }
  }, [user])

  async function handleAddTask({ title, description }) {
    const newTask = await createTask(user.id, { title, description })
    setTasks((prev) => [newTask, ...prev])
  }

  async function handleToggle(task) {
    const updated = await toggleTaskComplete(task.id, !task.is_completed)
    setTasks((prev) => prev.map((t) => (t.id === task.id ? updated : t)))
  }

  async function handleUpdate(taskId, updates) {
    const updated = await updateTask(taskId, updates)
    setTasks((prev) => prev.map((t) => (t.id === taskId ? updated : t)))
  }

  async function handleDelete(taskId) {
    await deleteTask(taskId)
    setTasks((prev) => prev.filter((t) => t.id !== taskId))
  }

  async function handleLogout() {
    setLoggingOut(true)
    try {
      await signOut()
      navigate('/login')
    } catch (err) {
      setLoggingOut(false)
    }
  }

  const filteredTasks = useMemo(() => {
    if (filter === 'active') return tasks.filter((t) => !t.is_completed)
    if (filter === 'completed') return tasks.filter((t) => t.is_completed)
    return tasks
  }, [tasks, filter])

  const stats = useMemo(
    () => ({
      total: tasks.length,
      active: tasks.filter((t) => !t.is_completed).length,
      completed: tasks.filter((t) => t.is_completed).length,
    }),
    [tasks]
  )

  const firstName = user?.user_metadata?.full_name?.split(' ')[0] || null

  return (
    <div className="min-h-screen bg-lavender-50">
      <DashboardHeader
        userEmail={user?.email}
        onLogout={handleLogout}
        loggingOut={loggingOut}
      />

      <main className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight text-ink-900">
            {firstName ? `Welcome back, ${firstName} 👋` : 'Welcome back 👋'}
          </h1>
          <p className="mt-1 text-sm text-ink-500">
            Here's what's on your plate today.
          </p>
        </div>

        <div className="mb-6">
          <StatsCards
            total={stats.total}
            active={stats.active}
            completed={stats.completed}
          />
        </div>

        <div className="mb-6">
          <TaskForm onAddTask={handleAddTask} />
        </div>

        <div className="mb-5">
          <TaskFilters current={filter} onChange={setFilter} />
        </div>

        {loadingTasks ? (
          <div className="flex justify-center py-16">
            <LoadingSpinner size="lg" label="Loading your tasks…" />
          </div>
        ) : loadError ? (
          <div className="flex items-start gap-3 rounded-2xl border border-red-100 bg-red-50 p-5 text-sm text-red-700">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
            <div>
              <p className="font-medium">Something went wrong</p>
              <p className="mt-0.5 text-red-600">{loadError}</p>
            </div>
          </div>
        ) : filteredTasks.length === 0 ? (
          <EmptyState filter={filter} />
        ) : (
          <div className="space-y-2.5">
            {filteredTasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={handleToggle}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}