const sizeMap = {
  sm: 'h-4 w-4 border-2',
  md: 'h-6 w-6 border-2',
  lg: 'h-10 w-10 border-[3px]',
}

export default function LoadingSpinner({ size = 'md', label }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        className={`${sizeMap[size]} animate-spin rounded-full border-lavender-200 border-t-lavender-600`}
        role="status"
        aria-label="Loading"
      />
      {label && <p className="text-sm text-ink-500">{label}</p>}
    </div>
  )
}