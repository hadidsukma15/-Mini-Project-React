const footerLinks = [
  { label: 'Privacy Policy', href: '#top' },
  { label: 'Terms of Service', href: '#top' },
  { label: 'Contact Us', href: '#contact' },
]

function Footer() {
  return (
    <footer className="mt-[54px] pb-[34px]" id="contact">
      <div className="mx-auto max-w-[1096px] border-t border-[#e7e7e3] pt-[26px] max-[1160px]:mx-8 max-[860px]:mx-5">
        <nav
          className="grid grid-cols-3 items-center gap-5 max-[480px]:gap-3"
          aria-label="Footer navigation"
        >
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-center text-[11px] text-[#4f5560] transition-colors hover:text-[#3b5df5] max-[480px]:text-[10px]"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="mt-4 text-center text-[11px] text-[#7d828a]">
          &copy; 2026 DibiEdu. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
