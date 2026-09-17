import { motion } from 'framer-motion'

const mainProjects = [
  {
    title: 'AI Resume Analyzer',
    type: 'Next.js',
    desc: 'AI-powered resume analyzer with a freemium model — 3 free analyses using Google Gemini AI, Pro upgrade through Lemon Squeezy, webhook-based subscription verification, anonymous user tracking, and no login required.',
    tech: ['Next.js', 'Google Gemini AI', 'Lemon Squeezy', 'MongoDB', 'Webhook'],
    demo: 'https://ai-resume-sigma-two.vercel.app/',
    github: 'https://github.com/Rayan-Ahmed-developer/AI-Resume',
  },
  {
    title: 'Freelancer Marketplace',
    type: 'Next.js',
    desc: 'Mini Upwork-style marketplace where clients post projects, freelancers submit proposals, clients accept or reject them, and Safepay-powered payments trigger after proposal acceptance with JWT auth and role-based dashboards.',
    tech: ['Next.js', 'MongoDB', 'JWT', 'Safepay', 'Webhook'],
    demo: 'https://freelancer-marketplace-kappa.vercel.app/',
    github: 'https://github.com/Rayan-Ahmed-developer/Freelancer-Marketplace',
  },
  {
    title: 'Payment Gateway',
    type: 'Next.js',
    desc: 'Standalone payment gateway integrating Safepay for secure online transactions, including webhook-based payment confirmation.',
    tech: ['Next.js', 'Safepay', 'MongoDB', 'Webhook'],
    demo: 'https://vercel.com/rayan-ahmed-s-projects/payment-gateway',
    github: 'https://github.com/Rayan-Ahmed-developer/Payment-gateway',
  },
  {
    title: 'E-Commerce Website',
    type: 'Full Stack',
    desc: 'Product listings, cart, checkout, JWT-based authentication, and a full admin panel for managing products, orders, and users.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'Admin Panel'],
    demo: 'https://mobile-e-commerce-s5p7.vercel.app/',
    github: 'https://github.com/Rayan-Ahmed-developer/Mobile-E-Commerce',
  },
  {
    title: 'Task Manager',
    type: 'Full Stack',
    desc: 'Create, assign, and track tasks with deadlines, priority levels, and team member assignment from a clean dashboard.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT'],
    demo: 'https://task-manager-two-tau-40.vercel.app/',
    github: 'https://github.com/Rayan-Ahmed-developer/Task-Manager',
  },
  {
    title: 'User Inquiry System',
    type: 'Full Stack',
    desc: 'CRUD-based inquiry system with backend handling for user submissions, database persistence, and a complete full-stack workflow.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    demo: 'https://user-inquiry.vercel.app/',
    github: 'https://github.com/Rayan-Ahmed-developer/User_Inquiry',
  },
]

const frontendProjects = [
  {
    title: 'Todo List App',
    desc: 'Minimal but practical task manager with add, edit, delete, priority tagging, and smart filtering.',
    tech: ['React', 'Tailwind CSS'],
    demo: 'https://to-do-list-rho-pearl-81.vercel.app/',
    github: 'https://github.com/Rayan-Ahmed-developer/To-Do-List-',
  },
  {
    title: 'Weather App',
    desc: 'Real-time weather data app for checking temperature, humidity, wind, and conditions for different cities.',
    tech: ['HTML', 'CSS', 'JavaScript', 'API'],
    demo: 'https://weather-website-nine-rho.vercel.app/',
    github: 'https://github.com/Rayan-Ahmed-developer/Weather-Website',
  },
  {
    title: 'Currency Converter',
    desc: 'Fast currency conversion tool using live exchange-rates data with a simple two-column interface.',
    tech: ['HTML', 'CSS', 'JavaScript', 'API'],
    demo: 'https://currency-converter-nine-sand.vercel.app/',
    github: 'https://github.com/Rayan-Ahmed-developer/Currency-Converter',
  },
  {
    title: 'Rock Paper Scissors',
    desc: 'Classic browser game with animated outcomes, score tracking, and round history.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://rps-game-six-rouge.vercel.app/',
    github: 'https://github.com/Rayan-Ahmed-developer/rps-game',
  },
]

const techColors = {
  MongoDB: { bg: '#4db33d18', color: '#4db33d' },
  Express: { bg: '#ffffff10', color: '#aaaaaa' },
  React: { bg: '#61dafb18', color: '#61dafb' },
  'Node.js': { bg: '#68a06318', color: '#68a063' },
  'Next.js': { bg: '#ffffff18', color: '#ffffff' },
  'Google Gemini AI': { bg: '#4285f418', color: '#4285f4' },
  'Lemon Squeezy': { bg: '#ffc23318', color: '#ffc233' },
  Safepay: { bg: '#00c85318', color: '#00c853' },
  JWT: { bg: '#fbbf2418', color: '#fbbf24' },
  'Admin Panel': { bg: '#a392ff18', color: '#a392ff' },
  'Tailwind CSS': { bg: '#38bdf818', color: '#38bdf8' },
  HTML: { bg: '#e34f2618', color: '#e34f26' },
  CSS: { bg: '#1572b618', color: '#38bdf8' },
  JavaScript: { bg: '#fbbf2418', color: '#fbbf24' },
  API: { bg: '#34d39918', color: '#34d399' },
  Webhook: { bg: '#f472b618', color: '#f472b6' },
}

const ProjectCard = ({ project, index }) => (
  <motion.div
    className="bg-[#15151e] border border-white/[0.06] rounded-2xl p-6 flex flex-col gap-3 hover:border-violet-500/35 transition-colors"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    whileHover={{ y: -4 }}
  >
    <span className={`text-[11px] font-bold tracking-[0.5px] uppercase px-[10px] py-1 rounded-[6px] w-fit ${
      project.type === 'Next.js'
        ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
        : 'bg-violet-500/10 border border-violet-500/20 text-violet-400'
    }`}>
      {project.type || 'Frontend'}
    </span>

    <h3 className="font-clash text-[18px] font-bold tracking-tight text-white leading-tight">
      {project.title}
    </h3>

    <p className="text-[13.5px] text-gray-400 leading-[1.7] flex-1">
      {project.desc}
    </p>

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

    <div className="flex gap-2.5 mt-1">
      <a
        href={project.demo}
        target="_blank"
        rel="noreferrer"
        className="text-[12.5px] font-semibold px-[14px] py-[7px] rounded-[8px] bg-violet-600 hover:bg-violet-500 text-white transition-colors flex items-center gap-1 no-underline"
      >
        Live Demo ↗
      </a>

      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="text-[12.5px] font-semibold px-[14px] py-[7px] rounded-[8px] border border-white/10 hover:border-white/20 text-gray-400 hover:text-white transition-all flex items-center gap-1 no-underline"
      >
        GitHub ↗
      </a>
    </div>
  </motion.div>
)

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-950 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold tracking-[2.5px] uppercase text-violet-400 mb-2">Projects</p>
        <h2 className="font-clash text-4xl font-bold tracking-tight text-white mb-8">
          Things I've built
        </h2>

        <div className="mb-8">
          <p className="text-[11px] font-bold tracking-[2px] uppercase text-violet-400 mb-3">Full Stack Projects</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mainProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-2">
          <p className="text-[11px] font-bold tracking-[2px] uppercase text-violet-400 mb-3">Frontend Projects</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {frontendProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          <div className="bg-[#15151e] border border-white/[0.06] rounded-2xl p-5 hover:border-violet-500/35 transition-colors">
            <p className="font-clash text-[18px] font-bold tracking-tight text-white mb-2">More Projects</p>
            <p className="text-[13.5px] text-gray-400 leading-[1.7] mb-4">
              I've built 2 more frontend/JavaScript projects. If you'd like to explore them, check out my GitHub.
            </p>
            <a
              href="https://github.com/Rayan-Ahmed-developer"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center text-[12.5px] font-semibold px-[14px] py-[8px] rounded-[8px] bg-violet-600 hover:bg-violet-500 text-white transition-colors no-underline"
            >
              View More on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects