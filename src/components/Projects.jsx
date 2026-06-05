import React, { useState } from 'react'

const projects = [
  // ── MERN Stack ──────────────────────────────
  {
    title: "User Inquiry System",
    type: "MERN Stack",
    desc: "Full-stack inquiry platform with user authentication, form submissions, and a complete admin dashboard to manage and respond to all queries.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    demo: "https://user-inquiry.vercel.app/",
    github: "https://github.com/Rayan-Ahmed-developer",
  },
  {
    title: "E-Commerce Website",
    type: "MERN Stack",
    desc: "Complete e-commerce solution with product listings, cart, checkout, JWT-based auth, and a full admin panel for managing products, orders, and users.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "Admin Panel"],
    demo: "https://mobile-e-commerce-s5p7.vercel.app/",
    github: "https://github.com/Rayan-Ahmed-developer",
  },
  {
    title: "Task Manager",
    type: "MERN Stack",
    desc: "Productivity app to create, assign, and track tasks with deadlines, priority levels, and team member assignment — all with a clean dashboard.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    demo: "https://task-manager-two-tau-40.vercel.app/",
    github: "https://github.com/Rayan-Ahmed-developer",
  },

  // ── React + Tailwind ─────────────────────────
  {
    title: "Todo List App",
    type: "React + Tailwind",
    desc: "Minimal yet powerful todo app with add, edit, delete tasks, priority tagging, and smart filter options to stay organised.",
    tech: ["React", "Tailwind CSS"],
    demo: "https://to-do-list-rho-pearl-81.vercel.app/",
    github: "https://github.com/Rayan-Ahmed-developer",
  },
  {
    title: "Portfolio Website",
    type: "React + Tailwind",
    desc: "Personal developer portfolio built with React and Tailwind CSS — featuring a dark theme, project showcase, skills section, and a working contact form.",
    tech: ["React", "Tailwind CSS"],
    demo: "https://portfolio-nine-beryl-19.vercel.app/",
    github: "https://github.com/Rayan-Ahmed-developer",
  },
  {
    title: "Calculator",
    type: "React + Tailwind",
    desc: "Clean, functional calculator with all basic arithmetic operations, polished minimal UI, and keyboard support.",
    tech: ["React", "Tailwind CSS"],
    demo: "https://calculator-xrdn.vercel.app/",
    github: "https://github.com/Rayan-Ahmed-developer",
  },

  // ── JavaScript ───────────────────────────────
  {
    title: "Weather App",
    type: "JavaScript",
    desc: "Real-time weather app showing temperature, humidity, wind speed, and conditions for any city using OpenWeatherMap API.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    demo: "https://weather-website-nine-rho.vercel.app/",
    github: "https://github.com/Rayan-Ahmed-developer",
  },
  {
    title: "Currency Converter",
    type: "JavaScript",
    desc: "Instant currency converter using live exchange rates API — supports dozens of currencies with a clean two-column interface.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    demo: "https://currency-converter-nine-sand.vercel.app/",
    github: "https://github.com/Rayan-Ahmed-developer",
  },
  {
    title: "Rock Paper Scissors",
    type: "JavaScript",
    desc: "Classic game against the computer with animated results, live score tracking, round history, and a reset option.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://rps-game-six-rouge.vercel.app/",
    github: "https://github.com/Rayan-Ahmed-developer",
  },
]

const techColors = {
  MongoDB:        { bg: '#4db33d18', color: '#4db33d' },
  Express:        { bg: '#ffffff10', color: '#aaaaaa' },
  React:          { bg: '#61dafb18', color: '#61dafb' },
  'Node.js':      { bg: '#68a06318', color: '#68a063' },
  JWT:            { bg: '#fbbf2418', color: '#fbbf24' },
  'Admin Panel':  { bg: '#a392ff18', color: '#a392ff' },
  'Tailwind CSS': { bg: '#38bdf818', color: '#38bdf8' },
  HTML:           { bg: '#e34f2618', color: '#e34f26' },
  CSS:            { bg: '#1572b618', color: '#38bdf8' },
  JavaScript:     { bg: '#fbbf2418', color: '#fbbf24' },
  API:            { bg: '#34d39918', color: '#34d399' },
}

const typeBadge = {
  'MERN Stack':       'bg-violet-500/10 border border-violet-500/20 text-violet-400',
  'React + Tailwind': 'bg-sky-500/10 border border-sky-500/20 text-sky-400',
  'JavaScript':       'bg-yellow-500/10 border border-yellow-500/20 text-yellow-400',
}

const filters = ['All', 'MERN Stack', 'React + Tailwind', 'JavaScript']

const Projects = () => {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter(p => p.type === active)

  return (
    <section id="projects" className="py-20 bg-gray-950 px-6">
      <div className="max-w-5xl mx-auto">

        <p className="text-xs font-bold tracking-[2.5px] uppercase text-violet-400 mb-2">Projects</p>
        <h2 className="font-clash text-4xl font-bold tracking-tight text-white mb-8">
          Things I've built
        </h2>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`text-[12.5px] font-semibold px-4 py-[6px] rounded-[8px] border transition-all duration-200 ${
                active === f
                  ? 'bg-violet-600 border-violet-600 text-white'
                  : 'bg-transparent border-white/10 text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="bg-[#15151e] border border-white/[0.06] rounded-2xl p-6 flex flex-col gap-3 hover:border-violet-500/30 hover:-translate-y-1 transition-all duration-200"
            >
              {/* Badge */}
              <span className={`text-[11px] font-bold tracking-[0.5px] uppercase px-[10px] py-1 rounded-[6px] w-fit ${typeBadge[project.type]}`}>
                {project.type}
              </span>

              {/* Name */}
              <h3 className="font-clash text-[18px] font-bold tracking-tight text-white leading-tight">
                {project.title}
              </h3>

              {/* Desc */}
              <p className="text-[13.5px] text-gray-400 leading-[1.7] flex-1">
                {project.desc}
              </p>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-[6px]">
                {project.tech.map((t) => {
                  const c = techColors[t] || { bg: 'rgba(255,255,255,0.05)', color: '#9999b5' }
                  return (
                    <span
                      key={t}
                      className="flex items-center gap-[5px] text-[11.5px] font-medium px-[9px] py-[4px] rounded-[6px] border border-white/[0.06]"
                      style={{ background: 'rgba(255,255,255,0.04)', color: '#9999b5' }}
                    >
                      <span
                        className="w-[14px] h-[14px] rounded-[3px] flex items-center justify-center text-[8px] font-black flex-shrink-0"
                        style={{ background: c.bg, color: c.color }}
                      >
                        {t.substring(0, 2).toUpperCase()}
                      </span>
                      {t}
                    </span>
                  )
                })}
              </div>

              {/* Links */}
              <div className="flex gap-2.5 mt-1">
                <a
                  href={project.demo}
                  target={project.demo !== '#' ? '_blank' : undefined}
                  rel={project.demo !== '#' ? 'noopener noreferrer' : undefined}
                  className="text-[12.5px] font-semibold px-[14px] py-[7px] rounded-[8px] bg-violet-600 hover:bg-violet-500 text-white transition-colors flex items-center gap-1"
                >
                  Live Demo ↗
                </a>
                <a
                  href={project.github}
                  target={project.github !== '#' ? '_blank' : undefined}
                  rel={project.github !== '#' ? 'noopener noreferrer' : undefined}
                  className="text-[12.5px] font-semibold px-[14px] py-[7px] rounded-[8px] border border-white/10 hover:border-white/20 text-gray-400 hover:text-white transition-all flex items-center gap-1"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects