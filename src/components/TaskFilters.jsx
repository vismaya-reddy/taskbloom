const filters = [
  { key: 'all', label: 'All' },
  { key: 'active', label: 'Active' },
  { key: 'completed', label: 'Completed' },
]

export default function TaskFilters({ current, onChange }) {
  return (
    <div className="flex gap-1.5 rounded-xl bg-lavender-100/60 p-1">
      {filters.map((filter) => (
        <button
          key={filter.key}
          onClick={() => onChange(filter.key)}
          className={`flex-1 rounded-lg px-4 py-1.5 text-sm font-medium transition ${
            current === filter.key
              ? 'bg-white text-lavender-700 shadow-sm'
              : 'text-ink-500 hover:text-ink-700'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}