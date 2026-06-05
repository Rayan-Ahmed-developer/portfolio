import React, { useState } from 'react'

const navLinks = [
  { label: 'Home',     href: '#home' },
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#08080d]/90 border-b border-white/[0.06] backdrop-blur-xl">
      <div className="w-full px-6 flex items-center justify-between h-[60px]">

        {/* Logo */}
        <a href="#home" className="font-clash text-[20px] font-bold text-white tracking-[-0.5px] no-underline flex items-end gap-0.5">
          Rayan
          <span className="w-[7px] h-[7px] rounded-full bg-violet-400 mb-[14px] ml-[3px]" />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-gray-400 hover:text-white hover:bg-white/[0.05] text-[13.5px] font-medium px-[14px] py-[7px] rounded-[8px] transition-all no-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hire Me CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center bg-violet-600 hover:bg-violet-500 hover:-translate-y-[1px] text-white text-[13.5px] font-semibold px-5 py-[9px] rounded-[10px] transition-all no-underline"
        >
          Hire Me
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl bg-transparent border-none cursor-pointer p-1"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#08080d] px-6 py-4 flex flex-col gap-1 border-t border-white/[0.06]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-white text-[14px] font-medium py-2.5 no-underline transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 bg-violet-600 hover:bg-violet-500 text-white text-[14px] font-semibold py-3 rounded-[10px] text-center no-underline transition-colors"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar