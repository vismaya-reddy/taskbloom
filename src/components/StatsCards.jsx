import { ListTodo, CircleDot, CheckCircle2 } from 'lucide-react'

export default function StatsCards({ total, active, completed }) {
  const stats = [
    {
      label: 'Total tasks',
      value: total,
      icon: ListTodo,
      iconBg: 'bg-lavender-100',
      iconColor: 'text-lavender-600',
    },
    {
      label: 'Active',
      value: active,
      icon: CircleDot,
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600',
    },
    {
      label: 'Completed',
      value: completed,
      icon: CheckCircle2,
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex items-center gap-4 rounded-2xl border border-lavender-100 bg-white p-5 shadow-sm"
        >
          <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.iconBg}`}>
            <stat.icon className={`h-5 w-5 ${stat.iconColor}`} strokeWidth={2.25} />
          </div>
          <div>
            <p className="text-2xl font-semibold tracking-tight text-ink-900">
              {stat.value}
            </p>
            <p className="text-sm text-ink-500">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  )
}