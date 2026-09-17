import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: 'Frontend',
    color: 'sky',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    items: [
      { name: 'HTML5', logo: 'H', bg: '#e34f2618', color: '#e34f26' },
      { name: 'CSS3', logo: 'C', bg: '#1572b618', color: '#38bdf8' },
      { name: 'JavaScript', logo: 'JS', bg: '#fbbf2418', color: '#fbbf24' },
      { name: 'React.js', logo: '⚛', bg: '#61dafb18', color: '#61dafb' },
      { name: 'Tailwind CSS', logo: 'TW', bg: '#38bdf818', color: '#38bdf8' },
      { name: 'Next.js', logo: 'N', bg: '#ffffff18', color: '#ffffff' },
    ],
  },
  {
    title: 'Backend',
    color: 'purple',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a392ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    items: [
      { name: 'Node.js', logo: 'N', bg: '#68a06318', color: '#68a063' },
      { name: 'Express.js', logo: 'EX', bg: '#ffffff10', color: '#aaaaaa' },
      { name: 'REST APIs', logo: 'API', bg: '#38bdf818', color: '#38bdf8' },
      { name: 'JWT Authentication', logo: 'JWT', bg: '#fbbf2418', color: '#fbbf24' },
      { name: 'Protected Routes / Auth Middleware', logo: 'PR', bg: '#a392ff18', color: '#a392ff' },
      { name: 'Next.js API Routes / SSR', logo: 'SS', bg: '#f472b618', color: '#f472b6' },
    ],
  },
  {
    title: 'Database',
    color: 'green',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    items: [
      { name: 'MongoDB', logo: 'M', bg: '#4db33d18', color: '#4db33d' },
      { name: 'Mongoose', logo: 'MO', bg: '#c0392b18', color: '#c0392b' },
      { name: 'CRUD Operations', logo: 'CR', bg: '#ffffff08', color: '#aaaaaa' },
    ],
  },
  {
    title: 'Payments',
    color: 'orange',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1v22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H14.5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    items: [
      { name: 'Safepay Integration', logo: 'SP', bg: '#00c85318', color: '#00c853' },
      { name: 'Webhook Handling', logo: 'WH', bg: '#a392ff18', color: '#a392ff' },
    ],
  },
  {
    title: 'AI Integration',
    color: 'cyan',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="7"/>
      </svg>
    ),
    items: [
      { name: 'Google Gemini AI', logo: 'G', bg: '#4285f418', color: '#4285f4' },
      { name: 'AI Feature Integration', logo: 'AI', bg: '#a392ff18', color: '#a392ff' },
      { name: 'Python/FastAPI Collaboration', logo: 'PF', bg: '#38bdf818', color: '#38bdf8' },
    ],
  },
  {
    title: 'Tools',
    color: 'yellow',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    items: [
      { name: 'Git', logo: 'G', bg: '#f0503118', color: '#f05031' },
      { name: 'GitHub', logo: 'GH', bg: '#ffffff10', color: '#cccccc' },
      { name: 'VS Code', logo: 'VS', bg: '#007acc18', color: '#007acc' },
      { name: 'Postman', logo: 'PM', bg: '#ff6c3718', color: '#ff6c37' },
      { name: 'Vercel', logo: 'V', bg: '#00000018', color: '#007d3a' },
    ],
  },
]

const iconBoxStyle = {
  sky: { background: 'rgba(56,189,248,0.10)', border: '1px solid rgba(56,189,248,0.2)' },
  purple: { background: 'rgba(124,109,250,0.10)', border: '1px solid rgba(124,109,250,0.2)' },
  green: { background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.2)' },
  orange: { background: 'rgba(245,158,11,0.10)', border: '1px solid rgba(245,158,11,0.2)' },
  cyan: { background: 'rgba(34,211,238,0.10)', border: '1px solid rgba(34,211,238,0.2)' },
  yellow: { background: 'rgba(251,191,36,0.08)', border: '1px solid rgba(251,191,36,0.2)' },
}

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-950 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold tracking-[2.5px] uppercase text-violet-400 mb-2">Skills</p>
        <h2 className="font-clash text-4xl font-bold tracking-tight text-white mb-10">
          What I work with
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              className="bg-[#15151e] border border-white/[0.06] rounded-2xl p-6 hover:border-violet-500/35 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={iconBoxStyle[group.color]}
                >
                  {group.icon}
                </div>
                <span className="font-clash text-[17px] font-bold text-white">{group.title}</span>
              </div>

              <div className="flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-[9px] border border-white/[0.05] bg-white/[0.025] hover:border-violet-500/20 hover:bg-violet-500/[0.06] transition-all"
                  >
                    <span
                      className="w-[22px] h-[22px] rounded-[5px] flex items-center justify-center text-[11px] font-black flex-shrink-0"
                      style={{ background: item.bg, color: item.color }}
                    >
                      {item.logo}
                    </span>
                    <span className="text-[13.5px] font-medium text-[#9999b5]">{item.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills