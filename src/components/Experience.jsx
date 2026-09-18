import { motion } from 'framer-motion'

const highlights = [
  'Collaborated with Python/FastAPI developers on AI integration across client-facing projects',
  'Contributed frontend work to real-world client-facing web projects, including AI-powered applications and other production-ready products',
  'Worked on proposals for integrating AI features into client projects',
  'Built and polished UI components using React/Next.js',
  'Handled day-to-day communication and coordination across teams',
]

const Experience = () => {
  return (
    <motion.section 
      id="experience" 
      className="py-20 bg-gray-950 px-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-bold tracking-[2.5px] uppercase text-violet-400 mb-2">Experience</p>
        <h2 className="font-clash text-4xl font-bold tracking-tight text-white mb-10">
          Where I've worked
        </h2>

        <div className="bg-[#15151e] border border-white/[0.06] rounded-2xl p-7 md:p-8 hover:border-violet-500/35 transition-colors">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-clash text-[19px] font-bold text-white">Web Development Intern</h3>
                <span className="text-[11px] font-bold tracking-[0.5px] uppercase px-[10px] py-1 rounded-[6px] bg-violet-500/10 border border-violet-500/20 text-violet-400">
                  AEROX ERP
                </span>
              </div>
              <p className="text-[13px] text-gray-500">Web Development Internship</p>
            </div>
            <span className="text-[12.5px] font-semibold text-gray-400 border border-white/[0.08] px-[14px] py-2 rounded-[8px] bg-white/[0.02] w-fit">
              3 Months
            </span>
          </div>

          <ul className="flex flex-col gap-3">
            {highlights.map((point, i) => (
              <motion.li 
                key={i} 
                className="flex items-start gap-3 text-[14px] text-gray-400 leading-[1.7]"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <span className="mt-[7px] w-[6px] h-[6px] rounded-full bg-violet-400 flex-shrink-0" />
                {point}
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mt-6">
            {['React', 'Next.js', 'FastAPI (Collab)', 'AI Integration', 'Team Communication'].map((tag) => (
              <span
                key={tag}
                className="text-[12px] font-medium px-[12px] py-[5px] rounded-[7px] border border-violet-500/18 bg-violet-500/[0.09] text-violet-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Experience