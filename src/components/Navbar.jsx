import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LogoMark } from './icons'
import { useAuth } from '../hooks/useAuth'
import Button from './ui/Button'

const navItems = [
  { label: 'Home', to: '/', end: true },
  { label: 'Students', to: '/#students', hash: true },
  { label: 'About', to: '/#about', hash: true },
]

const plainLinkClass =
  'text-xs font-medium text-[#34373d] transition-colors hover:text-[#3b5df5]'

function navLinkClass({ isActive }) {
  return `text-xs font-medium transition-colors ${
    isActive ? 'text-[#3b5df5]' : 'text-[#34373d] hover:text-[#3b5df5]'
  }`
}

function Navbar() {
  const { isAuthenticated, user, logout } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)

  const initials = `${user?.firstName?.[0] ?? ''}${
    user?.lastName?.[0] ?? ''
  }`.toUpperCase()

  return (
    <header className="sticky top-0 z-40 border-b border-[#eceee8] bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1160px] items-center gap-6 px-8 py-3.5 max-[860px]:px-5">
        <Link
          className="inline-flex items-center gap-[7px] text-[15px] font-extrabold tracking-[-0.02em] text-[#15181c]"
          to="/"
          aria-label="DibiEdu home"
        >
          <LogoMark className="h-[17px] w-[17px] flex-none" />
          <span>DibiEdu</span>
        </Link>

        <nav className="ml-auto hidden items-center gap-[26px] md:flex" aria-label="Navigasi utama">
          {navItems.map((item) =>
            item.hash ? (
              <Link key={item.label} to={item.to} className={plainLinkClass}>
                {item.label}
              </Link>
            ) : (
              <NavLink key={item.label} to={item.to} end className={navLinkClass}>
                {item.label}
              </NavLink>
            ),
          )}
          {isAuthenticated && (
            <NavLink to="/dashboard" className={navLinkClass}>
              Dashboard
            </NavLink>
          )}
        </nav>

        <div className="ml-auto hidden items-center gap-2.5 md:flex">
          {isAuthenticated ? (
            <>
              <span className="flex items-center gap-2 rounded-full border border-[#e7e7e3] bg-[#f6f7f3] py-1 pl-1 pr-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#3b5df5] text-[10px] font-extrabold text-white">
                  {initials || 'U'}
                </span>
                <span className="max-w-[120px] truncate text-[11.5px] font-bold text-[#2d3137]">
                  {user?.firstName ?? user?.username}
                </span>
              </span>
              <Button variant="outline" size="sm" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" to="/login">
                Login
              </Button>
              <Button size="sm" to="/register">
                Sign Up
              </Button>
            </>
          )}
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#e7e7e3] text-[#34373d] md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Buka menu navigasi"
        >
          <span className="flex flex-col gap-[3px]">
            <span className="block h-[2px] w-4 rounded bg-current" />
            <span className="block h-[2px] w-4 rounded bg-current" />
            <span className="block h-[2px] w-4 rounded bg-current" />
          </span>
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-[#eceee8] bg-white px-5 pb-4 pt-2 md:hidden"
        >
          <nav className="flex flex-col" aria-label="Navigasi mobile">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#f1f2ee] py-2.5 text-xs font-medium text-[#34373d]"
              >
                {item.label}
              </Link>
            ))}
            {isAuthenticated && (
              <NavLink
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#f1f2ee] py-2.5 text-xs font-medium text-[#34373d]"
              >
                Dashboard
              </NavLink>
            )}
          </nav>

          <div className="mt-3 flex flex-col gap-2">
            {isAuthenticated ? (
              <>
                <p className="text-[11.5px] text-[#6d7279]">
                  Masuk sebagai{' '}
                  <span className="font-bold text-[#2d3137]">
                    {user?.firstName ?? user?.username}
                  </span>
                </p>
                <Button variant="outline" size="sm" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" size="sm" to="/login">
                  Login
                </Button>
                <Button size="sm" to="/register">
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
