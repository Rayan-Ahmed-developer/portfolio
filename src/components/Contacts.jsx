import React, { useState } from 'react'

const contactLinks = [
  {
    label: 'Email',
    value: 'rayanahmeda55@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&to=rayanahmeda55@gmail.com',
    iconBg: 'rgba(124,109,250,0.12)',
    iconBorder: 'rgba(124,109,250,0.2)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a392ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <polyline points="2,4 12,13 22,4"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'Rayan-Ahmed-developer',
    href: 'https://github.com/Rayan-Ahmed-developer',
    iconBg: 'rgba(255,255,255,0.06)',
    iconBorder: 'rgba(255,255,255,0.1)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#cccccc">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'rayan-ahmed-2bb449335',
    href: 'https://www.linkedin.com/in/rayan-ahmed-2bb449335/',
    iconBg: 'rgba(56,189,248,0.10)',
    iconBorder: 'rgba(56,189,248,0.2)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#38bdf8">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: 'Message me directly',
    href: 'https://wa.me/',
    iconBg: 'rgba(52,211,153,0.10)',
    iconBorder: 'rgba(52,211,153,0.2)',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#34d399">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.827L.057 23.5l5.817-1.525A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.645-.52-5.148-1.424l-.369-.22-3.452.906.921-3.36-.242-.386A9.937 9.937 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
    ),
  },
]

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    const mailto = `https://mail.google.com/mail/?view=cm&to=rayanahmeda55@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailto
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const inputClass =
    'bg-[#15151e] border border-white/10 focus:border-violet-500 rounded-[10px] px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors w-full'

  return (
    <section id="contact" className="py-20 bg-gray-950 px-6">
      <div className="max-w-5xl mx-auto">

        <p className="text-xs font-bold tracking-[2.5px] uppercase text-violet-400 mb-2">Contact</p>
        <h2 className="font-clash text-4xl font-bold tracking-tight text-white mb-10">
          Let's work together
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left — Info */}
          <div>
            <p className="text-[14.5px] text-gray-400 leading-[1.85] mb-8">
              Open to full-time roles and freelance projects. If you have something in mind, I'd love to hear from you.
            </p>

            <div className="flex flex-col gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-[11px] border border-white/[0.06] bg-[#15151e] hover:border-violet-500/30 hover:bg-violet-500/[0.04] hover:translate-x-[3px] transition-all duration-200 no-underline"
                >
                  <div
                    className="w-9 h-9 rounded-[9px] flex items-center justify-center flex-shrink-0"
                    style={{ background: link.iconBg, border: `1px solid ${link.iconBorder}` }}
                  >
                    {link.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold tracking-[1px] uppercase text-gray-500">{link.label}</span>
                    <span className="text-[13.5px] font-medium text-white">{link.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-3">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Your name"
                className={inputClass}
              />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="Email address"
                className={inputClass}
              />
            </div>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              type="text"
              placeholder="Subject"
              className={inputClass}
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell me about your project or opportunity..."
              className={`${inputClass} resize-none`}
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 hover:-translate-y-[2px] text-white font-semibold text-[14.5px] py-3 rounded-[11px] transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
              Send Message
            </button>

            {sent && (
              <div className="text-center text-[13.5px] text-green-400 bg-green-400/10 border border-green-400/20 rounded-[10px] py-3">
                ✓ Message sent! I'll get back to you soon.
              </div>
            )}
          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact