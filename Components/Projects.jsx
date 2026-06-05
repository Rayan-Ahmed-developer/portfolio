import React from 'react'

const mernProjects = [
  {
    icon: "🛒",
    title: "E-Commerce Application",
    desc: "Full MERN stack car e-commerce with JWT authentication, search functionality, shopping cart & secure REST APIs.",
    tags: ["React", "Node.js", "MongoDB", "JWT", "Express"],
    live: "#",
    github: "https://github.com/Huzaifa-develpor",
  },
  {
    icon: "✅",
    title: "Task Manager App",
    desc: "Complete CRUD operations with JWT authentication, protected routes, MongoDB integration & user-specific task management.",
    tags: ["MERN", "JWT", "MongoDB", "REST API"],
    live: "#",
    github: "https://github.com/Huzaifa-develpor",
  },
  {
    icon: "🔐",
    title: "MERN Auth System",
    desc: "User registration & login, JWT token auth, bcrypt password hashing, authorization middleware & protected routes.",
    tags: ["Node.js", "JWT", "bcrypt", "MongoDB"],
    live: "#",
    github: "https://github.com/Huzaifa-develpor",
  },
];

const frontendProjects = [
  {
    icon: "🌤️",
    title: "Weather App",
    desc: "Real-time weather data using OpenWeather API. Search any city and get temperature, humidity, wind speed & conditions.",
    tags: ["JavaScript", "REST API", "HTML", "CSS"],
    live: "#",
    github: "https://github.com/Huzaifa-develpor",
  },
  {
    icon: "✂️",
    title: "Rock Paper Scissors",
    desc: "Interactive rock paper scissors game with score tracking, animations and clean responsive UI.",
    tags: ["JavaScript", "HTML", "CSS"],
    live: "#",
    github: "https://github.com/Huzaifa-develpor",
  },
  {
    icon: "⭕",
    title: "Tic Tac Toe",
    desc: "Two player tic tac toe game with win detection, draw logic and restart functionality.",
    tags: ["JavaScript", "HTML", "CSS"],
    live: "#",
    github: "https://github.com/Huzaifa-develpor",
  },
  {
    icon: "💱",
    title: "Currency Converter",
    desc: "Real-time exchange rates using external API with dynamic data rendering and clean UI.",
    tags: ["JavaScript", "REST API"],
    live: "#",
    github: "https://github.com/Huzaifa-develpor",
  },
  {
    icon: "🧠",
    title: "Quiz Game",
    desc: "Dynamic quiz with multiple questions, score tracking and interactive UI built in vanilla JS.",
    tags: ["JavaScript", "HTML", "CSS"],
    live: "#",
    github: "https://github.com/Huzaifa-develpor",
  },
  {
    icon: "🗂️",
    title: "Personal Portfolio",
    desc: "Fully responsive personal portfolio website with modern UI, smooth animations and all sections.",
    tags: ["React", "Tailwind CSS"],
    live: "#",
    github: "https://github.com/Huzaifa-develpor",
  },
];

// ── Reusable Card ──────────────────────────────────────────────────────────
const ProjectCard = ({ project, showLive }) => (
  <div className="bg-[#111] border border-white/10 rounded-2xl p-7 flex flex-col gap-4 cursor-pointer transition-all duration-300 hover:border-emerald-400/40 hover:shadow-[0_0_30px_rgba(52,211,153,0.12)] hover:-translate-y-1">

    <div className="text-4xl">{project.icon}</div>

    <h3 className="font-['Syne'] text-lg font-bold text-white leading-tight">
      {project.title}
    </h3>

    <p className="text-gray-400 text-sm leading-relaxed flex-1">
      {project.desc}
    </p>

    <div className="flex flex-wrap gap-2">
      {project.tags.map((tag, j) => (
        <span key={j} className="text-emerald-400 border border-emerald-400/40 text-[11px] font-medium px-3 py-1 rounded-full">
          {tag}
        </span>
      ))}
    </div>

    <div className="flex gap-3 mt-2">
      {showLive && (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="flex-1 text-center bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-['Orbitron'] text-[10px] font-bold uppercase tracking-wider py-2.5 rounded-lg hover:shadow-[0_0_20px_rgba(52,211,153,0.4)] hover:scale-105 transition-all duration-300 no-underline"
        >
          Live Demo
        </a>
      )}
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className={`text-center text-emerald-400 border border-emerald-400/40 font-['Orbitron'] text-[10px] font-bold uppercase tracking-wider py-2.5 rounded-lg hover:bg-emerald-400/10 transition-all duration-300 no-underline ${showLive ? "flex-1" : "w-full block"}`}
      >
        GitHub
      </a>
    </div>

  </div>
);

// ── Sub Heading ────────────────────────────────────────────────────────────
const SubHeading = ({ title }) => (
  <div className="flex items-center gap-3 mb-8">
    <h3 className="font-['Orbitron'] text-xs text-emerald-400 tracking-[3px] uppercase font-semibold whitespace-nowrap">
      {title}
    </h3>
    <div className="flex-1 h-px bg-white/5" />
  </div>
);

// ── Main ───────────────────────────────────────────────────────────────────
const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white py-20 px-6 lg:px-10">
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Orbitron:wght@400;600;700&display=swap" rel="stylesheet" />

      <div className="mx-auto max-w-7xl w-full">

        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-['Orbitron'] text-emerald-400 text-xs tracking-[4px] uppercase">03</span>
          <div className="w-12 h-px bg-emerald-400/40" />
          <h2 className="font-['Syne'] text-5xl font-extrabold text-white tracking-tight">
            Projects
          </h2>
        </div>

        {/* ── PART 1: MERN ── */}
        <div className="mb-20">
          <SubHeading title="Full Stack — MERN" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mernProjects.map((project, i) => (
              <ProjectCard key={i} project={project} showLive={true} />
            ))}
          </div>
        </div>

        {/* ── PART 2: Frontend ── */}
        <div>
          <div className="flex items-center gap-3 mb-12">
            <h3 className="font-['Orbitron'] text-xs text-emerald-400 tracking-[3px] uppercase font-semibold whitespace-nowrap">
              Frontend
            </h3>
            <div className="flex-1 h-px bg-emerald-400/20" />
          </div>

          {/* Frontend Projects */}
          <div className="mb-14">
            <SubHeading title="Projects" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {frontendProjects.map((project, i) => (
                <ProjectCard key={i} project={project} showLive={true} />
              ))}
            </div>
          </div>

          {/* Internship */}
          <div>
            <SubHeading title="Internship — 2024" />
            <p className="text-emerald-400 text-xs font-['Orbitron'] tracking-wider">
                   Virtual-Internship by CodeAlpha
                </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Single Internship Card */}
              <div className="bg-[#111] border border-white/10 rounded-2xl mt-4 p-7 flex flex-col gap-4 cursor-pointer transition-all duration-300 hover:border-emerald-400/40 hover:shadow-[0_0_30px_rgba(52,211,153,0.12)] hover:-translate-y-1 md:col-span-1">

                <div className="text-4xl">🎓</div>

                <h3 className="font-['Syne'] text-lg font-bold text-white leading-tight">
                  Frontend Internship Projects
                </h3>

          

                <p className="text-gray-400 text-sm leading-relaxed flex-1">
                  A collection of projects built during my frontend virtual internship — includes{" "}
                  <span className="text-white">Music Player</span>,{" "}
                  <span className="text-white">Image Gallery</span>,{" "}
                  <span className="text-white">Calculator</span> and a{" "}
                  <span className="text-white">Personal Portfolio</span>.
                  Early learning phase — focused on HTML, CSS & JavaScript fundamentals.
                </p>

                <p className="text-gray-600 text-xs font-['Orbitron'] tracking-wider">
                  * Basic UI — learning phase projects
                </p>

                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS", "JavaScript"].map((tag, j) => (
                    <span key={j} className="text-emerald-400 border border-emerald-400/40 text-[11px] font-medium px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/Huzaifa-develpor"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full block text-center text-emerald-400 border border-emerald-400/40 font-['Orbitron'] text-[10px] font-bold uppercase tracking-wider py-2.5 rounded-lg hover:bg-emerald-400/10 transition-all duration-300 no-underline mt-2"
                >
                  GitHub
                </a>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Projects