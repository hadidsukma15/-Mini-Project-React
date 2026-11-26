function Input({ label, id, error, hint, className = '', ...props }) {
  const inputId = id ?? props.name

  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={inputId}
          className="mb-1.5 block text-xs font-bold text-[#2d3137]"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        aria-invalid={Boolean(error)}
        className={`w-full rounded-md border bg-white px-3 py-2.5 text-sm text-[#15181c] transition placeholder:text-[#a3a8b0] focus:outline-none focus:ring-2 ${
          error
            ? 'border-[#dc2626] focus:border-[#dc2626] focus:ring-[#dc2626]/15'
            : 'border-[#dfe1db] focus:border-[#3b5df5] focus:ring-[#3b5df5]/15'
        }`}
        {...props}
      />
      {error ? (
        <p className="mt-1 text-[11px] font-medium text-[#dc2626]">{error}</p>
      ) : (
        hint && <p className="mt-1 text-[11px] text-[#7d828a]">{hint}</p>
      )}
    </div>
  )
}

export default Input
