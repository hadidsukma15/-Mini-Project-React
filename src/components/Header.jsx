import { LogoMark } from './icons.jsx'

const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'Courses', href: '#courses' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto flex w-full max-w-[1160px] items-center gap-8 px-8 pb-4 pt-5 max-[860px]:gap-4 max-[860px]:px-5 max-[860px]:py-4">
        <a
          className="inline-flex items-center gap-[7px] text-[15px] font-extrabold tracking-[-0.02em] text-[#15181c]"
          href="#top"
          aria-label="DibiEdu home"
        >
          <LogoMark className="h-[17px] w-[17px] flex-none" />
          <span>DibiEdu</span>
        </a>

        <nav
          className="ml-auto flex items-center gap-[30px] max-[860px]:hidden"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-normal text-[#34373d] transition-colors hover:text-[#3b5df5]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="inline-flex items-center justify-center rounded-md bg-[#3b5df5] px-[18px] py-2 text-xs font-bold text-white transition hover:-translate-y-px hover:bg-[#2c4ad8] max-[860px]:ml-auto"
          href="#contact"
        >
          Sign Up
        </a>
      </div>
    </header>
  )
}

export default Header
