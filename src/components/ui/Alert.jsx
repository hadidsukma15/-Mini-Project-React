const styles = {
  success: 'border-[#b7e4c7] bg-[#eefaf1] text-[#1b6b3a]',
  error: 'border-[#f3c4c4] bg-[#fdf1f1] text-[#a42020]',
  info: 'border-[#c9d7fb] bg-[#eff3ff] text-[#2b45b8]',
}

function Alert({ type = 'info', children, className = '' }) {
  if (!children) return null

  return (
    <div
      role="alert"
      className={`rounded-md border px-3.5 py-2.5 text-xs font-medium ${styles[type]} ${className}`}
    >
      {children}
    </div>
  )
}

export default Alert
