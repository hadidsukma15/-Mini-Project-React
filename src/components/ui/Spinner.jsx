function Spinner({ className = 'h-5 w-5' }) {
  return (
    <span
      role="status"
      aria-label="Memuat data"
      className={`inline-block animate-spin rounded-full border-2 border-[#d7dae2] border-t-[#3b5df5] ${className}`}
    />
  )
}

export function LoadingBlock({ message = 'Memuat data…' }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-md border border-[#e7e7e3] bg-white px-6 py-14 text-[#6d7279]">
      <Spinner className="h-7 w-7" />
      <p className="text-xs font-medium">{message}</p>
    </div>
  )
}

export default Spinner
