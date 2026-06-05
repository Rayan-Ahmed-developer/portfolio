import React from 'react'

const contactLinks = [
  {
    icon: "✉",
    label: "Email",
    value: "huzaifaanwar575@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&to=huzaifaanwar575@gmail.com",
    desc: "Best for professional inquiries",
  },
  {
    icon: "in",
    label: "LinkedIn",
    value: "huzaifa-anwar",
    href: "https://www.linkedin.com/in/huzaifa-anwar-59a889334",
    desc: "Let's connect professionally",
  },
  {
    icon: "</>",
    label: "GitHub",
    value: "Huzaifa-develpor",
    href: "https://github.com/Huzaifa-develpor",
    desc: "Check out my code",
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: "+92 347 238 5530",
    href: "https://wa.me/923472385530",
    desc: "Quick response guaranteed",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white py-20 px-6 lg:px-10 relative overflow-hidden">
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Orbitron:wght@400;600;700&display=swap" rel="stylesheet" />

      {/* bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-400/[0.03] blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl w-full relative">

        {/* Section Label */}
        <div className="flex items-center gap-4 mb-6">
          <span className="font-['Orbitron'] text-emerald-400 text-xs tracking-[4px] uppercase">04</span>
          <div className="w-12 h-px bg-emerald-400/40" />
          <h2 className="font-['Syne'] text-5xl font-extrabold text-white tracking-tight">
            Contact
          </h2>
        </div>

        {/* Heading */}
        <div className="mb-16 max-w-2xl">
          <h3 className="font-['Syne'] text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">
            Got an opportunity?<br />
            <span className="text-emerald-400">Let's talk.</span>
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed font-['Orbitron'] tracking-wide">
            I'm actively looking for opportunities. Pick any platform — I respond fast.
          </p>
        </div>

        {/* Contact Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
          {contactLinks.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-5 bg-[#111] border border-white/10 rounded-2xl px-6 py-5 no-underline transition-all duration-300 hover:border-emerald-400/40 hover:bg-emerald-400/5 hover:shadow-[0_0_25px_rgba(52,211,153,0.08)] hover:-translate-y-0.5"
            >
              {/* Icon Box */}
              <div className="w-12 h-12 rounded-xl bg-emerald-400/8 border border-emerald-400/20 flex items-center justify-center text-emerald-400 font-bold text-sm flex-shrink-0 group-hover:bg-emerald-400/15 group-hover:border-emerald-400/40 transition-all duration-300 font-['Orbitron']">
                {item.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="font-['Orbitron'] text-[9px] text-gray-600 tracking-[2px] uppercase">
                  {item.label}
                </span>
                <span className="text-white font-semibold text-sm truncate group-hover:text-emerald-400 transition-colors duration-300">
                  {item.value}
                </span>
                <span className="text-gray-600 text-[11px]">
                  {item.desc}
                </span>
              </div>

              {/* Arrow */}
              <div className="ml-auto text-gray-700 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-300 text-lg flex-shrink-0">
                →
              </div>
            </a>
          ))}
        </div>

        {/* Bottom line */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-['Orbitron'] text-[10px] text-gray-700 tracking-[2px] uppercase">
            © 2025 Muhammad Huzaifa Anwar
          </p>
          <p className="font-['Orbitron'] text-[10px] text-gray-700 tracking-[2px] uppercase">
            Open to Work — MERN Stack
          </p>
        </div>

      </div>
    </section>
  )
}

export default Contact