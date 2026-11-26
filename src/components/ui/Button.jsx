import { Link } from 'react-router-dom'

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-md font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b5df5] disabled:cursor-not-allowed disabled:opacity-60'

const variants = {
  primary: 'bg-[#3b5df5] text-white hover:bg-[#2c4ad8]',
  secondary: 'bg-[#f0f1ed] text-[#2d3137] hover:bg-[#e6e7e2]',
  outline:
    'border border-[#dfe1db] bg-white text-[#2d3137] hover:border-[#c9ccc3] hover:bg-[#f6f7f3]',
  danger: 'bg-[#dc2626] text-white hover:bg-[#b91c1c]',
  ghost: 'text-[#34373d] hover:bg-[#f0f1ed]',
}

const sizes = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-2.5 text-sm',
}

function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  type = 'button',
  className = '',
  ...props
}) {
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
