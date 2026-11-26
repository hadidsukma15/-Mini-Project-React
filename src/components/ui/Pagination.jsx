function buildPages(current, total) {
  if (total <= 7) {
    return Array.from({ length: total }, (_, index) => index + 1)
  }

  const pages = new Set([1, total, current - 1, current, current + 1])

  if (current <= 3) {
    pages.add(2)
    pages.add(3)
    pages.add(4)
  }

  if (current >= total - 2) {
    pages.add(total - 1)
    pages.add(total - 2)
    pages.add(total - 3)
  }

  const sorted = [...pages]
    .filter((page) => page >= 1 && page <= total)
    .sort((a, b) => a - b)

  const result = []

  sorted.forEach((page, index) => {
    if (index > 0 && page - sorted[index - 1] > 1) {
      result.push(`gap-${page}`)
    }
    result.push(page)
  })

  return result
}

function Pagination({ page, totalPages, onChange, disabled = false }) {
  if (totalPages <= 1) return null

  const pages = buildPages(page, totalPages)

  const baseButton =
    'inline-flex h-9 min-w-9 items-center justify-center rounded-md border px-2 text-xs font-bold transition disabled:cursor-not-allowed disabled:opacity-50'

  return (
    <nav
      className="flex flex-wrap items-center justify-center gap-1.5"
      aria-label="Navigasi halaman"
    >
      <button
        type="button"
        className={`${baseButton} border-[#dfe1db] bg-white text-[#34373d] hover:bg-[#f6f7f3]`}
        onClick={() => onChange(page - 1)}
        disabled={disabled || page <= 1}
        aria-label="Halaman sebelumnya"
      >
        Sebelumnya
      </button>

      {pages.map((item) =>
        typeof item === 'number' ? (
          <button
            key={item}
            type="button"
            className={`${baseButton} ${
              item === page
                ? 'border-[#3b5df5] bg-[#3b5df5] text-white'
                : 'border-[#dfe1db] bg-white text-[#34373d] hover:bg-[#f6f7f3]'
            }`}
            onClick={() => onChange(item)}
            disabled={disabled}
            aria-current={item === page ? 'page' : undefined}
          >
            {item}
          </button>
        ) : (
          <span
            key={item}
            className="inline-flex h-9 min-w-6 items-center justify-center text-xs text-[#9aa0a8]"
          >
            …
          </span>
        ),
      )}

      <button
        type="button"
        className={`${baseButton} border-[#dfe1db] bg-white text-[#34373d] hover:bg-[#f6f7f3]`}
        onClick={() => onChange(page + 1)}
        disabled={disabled || page >= totalPages}
        aria-label="Halaman berikutnya"
      >
        Berikutnya
      </button>
    </nav>
  )
}

export default Pagination
