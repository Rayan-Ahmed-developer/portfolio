import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 relative overflow-hidden bg-[#08080d]">

      {/* Glow blobs */}
      <div className="absolute top-[-80px] left-[-80px] w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,109,250,0.10) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 right-[-50px] w-[340px] h-[340px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 65%)' }} />

      <div className="max-w-[680px]">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-green-400/25 bg-green-400/[0.06] text-green-400 text-[12px] font-semibold px-[14px] py-[5px] rounded-full mb-7 tracking-[0.3px]">
          <span className="w-[6px] h-[6px] rounded-full bg-green-400 animate-pulse" />
          Open to Work
        </div>

        {/* Name */}
        <h1 className="font-clash text-[clamp(52px,12vw,82px)] font-bold leading-[1.0] tracking-[-3px] text-white mb-3">
          Rayan<br />
          <span style={{
            background: 'linear-gradient(120deg, #a392ff, #38bdf8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Ahmed
          </span>
        </h1>

        {/* Role */}
        <p className="text-[17px] font-medium text-gray-400 mb-5 tracking-[0.2px]">
          <span className="text-violet-400 font-semibold">MERN Stack Developer</span>
          {' '}— building web apps that actually work.
        </p>

        {/* Bio */}
        <p className="text-[15px] text-gray-400 leading-[1.85] max-w-[460px] mb-9">
          I build full-stack web applications from front to back — clean UIs, solid APIs, real databases. Fresh out of the classroom, already shipping real products. Based in Karachi, ready to contribute from day one.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          <a
            href="#projects"
            className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 hover:-translate-y-[2px] text-white text-[14px] font-semibold px-6 py-3 rounded-[11px] transition-all no-underline"
          >
            View My Work
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-3">
          <a
            href="https://github.com/Rayan-Ahmed-developer"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white border border-white/[0.06] hover:border-white/10 bg-[#15151e] hover:bg-white/[0.03] text-[13px] font-medium px-4 py-2 rounded-[9px] transition-all no-underline"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rayan-ahmed-2bb449335/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white border border-white/[0.06] hover:border-white/10 bg-[#15151e] hover:bg-white/[0.03] text-[13px] font-medium px-4 py-2 rounded-[9px] transition-all no-underline"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
            </svg>
            LinkedIn
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero