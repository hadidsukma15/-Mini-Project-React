import { Link } from 'react-router-dom'
import { LogoMark } from './icons'

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Students', to: '/#students' },
  { label: 'Login', to: '/login' },
]

function Footer() {
  return (
    <footer className="mt-[54px] border-t border-[#e7e7e3] pb-[34px] pt-[26px]">
      <div className="mx-auto max-w-[1096px] max-[1160px]:mx-8 max-[860px]:mx-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-[7px] text-[13px] font-extrabold text-[#15181c]"
          >
            <LogoMark className="h-[15px] w-[15px] flex-none" />
            <span>DibiEdu</span>
          </Link>

          <nav className="flex items-center gap-5" aria-label="Navigasi footer">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-[11px] text-[#4f5560] transition-colors hover:text-[#3b5df5]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <p className="mt-4 text-[11px] text-[#7d828a]">
          &copy; 2026 DibiEdu. Mini Project Full Stack Web Development — React.
        </p>
      </div>
    </footer>
  )
}

export default Footer
