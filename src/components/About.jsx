import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-950 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto"
      >

        <p className="text-xs font-bold tracking-[2.5px] uppercase text-violet-400 mb-2">About Me</p>
        <h2 className="font-clash text-4xl font-bold tracking-tight text-white mb-10">
          Who I am
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          <div className="flex flex-col gap-4">
            <p className="text-[14.5px] text-gray-400 leading-[1.85]">
              My name is <span className="text-white font-semibold">Rayan Ahmed</span>. I am a Computer Science student at{' '}
              <span className="text-white font-semibold">Federal Urdu University of Arts, Science and Technology (FUUAST)</span>,
              Karachi, Pakistan. I work as a <span className="text-white font-semibold">Full Stack Developer</span> &amp;{' '}
              <span className="text-white font-semibold">Next.js Developer</span>, building full-stack web applications with React.js,
              Next.js, Node.js / Express.js, MongoDB, APIs, authentication, payment integrations, and AI integrations.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="https://github.com/Rayan-Ahmed-developer"
                target="_blank"
                rel="noreferrer"
                className="text-[12.5px] font-semibold px-[14px] py-[7px] rounded-[8px] border border-white/10 hover:border-violet-500/30 text-gray-300 hover:text-white transition-all no-underline"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rayan-ahmed-2bb449335/"
                target="_blank"
                rel="noreferrer"
                className="text-[12.5px] font-semibold px-[14px] py-[7px] rounded-[8px] border border-white/10 hover:border-violet-500/30 text-gray-300 hover:text-white transition-all no-underline"
              >
                LinkedIn
              </a>
              <a
                href="https://portfolio-nine-beryl-19.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="text-[12.5px] font-semibold px-[14px] py-[7px] rounded-[8px] bg-violet-600 hover:bg-violet-500 text-white transition-colors no-underline"
              >
                Live Portfolio
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-2.5">
              <span className="flex items-center gap-2 text-green-400 text-[13px] font-semibold px-[14px] py-2 rounded-[9px] border border-green-400/20 bg-green-400/[0.05]">
                <span className="w-[6px] h-[6px] rounded-full bg-green-400 animate-pulse" />
                Open to Work
              </span>
              <span className="flex items-center gap-2 text-gray-400 text-[13.5px] font-medium px-[14px] py-2 rounded-[9px] border border-white/[0.06] bg-[#15151e]">
                📍 Karachi, Pakistan
              </span>
              <span className="flex items-center gap-2 text-gray-400 text-[13.5px] font-medium px-[14px] py-2 rounded-[9px] border border-white/[0.06] bg-[#15151e]">
                🎓 CS Student
              </span>
            </div>

            <div>
              <p className="text-[11px] font-bold tracking-[2px] uppercase text-gray-500 mb-3">Core Stack</p>
              <div className="flex flex-wrap gap-2">
                {['Full Stack', 'Next.js', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Authentication', 'Payments', 'AI Integrations'].map((tag) => (
                  <span
                    key={tag}
                    className="text-[12.5px] font-medium px-[13px] py-[5px] rounded-[7px] border border-violet-500/18 bg-violet-500/[0.09] text-violet-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About