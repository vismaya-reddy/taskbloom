import { Sprout } from 'lucide-react'

export default function EmptyState({ filter }) {
  const copy = {
    all: {
      title: 'Your task list is empty',
      subtitle: 'Add your first task above to get things growing.',
    },
    active: {
      title: 'Nothing active right now',
      subtitle: 'All caught up — nice work, or add a new task.',
    },
    completed: {
      title: 'No completed tasks yet',
      subtitle: 'Finished tasks will show up here.',
    },
  }

  const { title, subtitle } = copy[filter] || copy.all

  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-lavender-200 bg-lavender-50/60 px-6 py-16 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-lavender-100">
        <Sprout className="h-7 w-7 text-lavender-500" strokeWidth={2} />
      </div>
      <p className="text-base font-medium text-ink-900">{title}</p>
      <p className="mt-1 text-sm text-ink-500">{subtitle}</p>
    </div>
  )
}