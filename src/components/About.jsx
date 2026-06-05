import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-950 px-6">
      <div className="max-w-5xl mx-auto">

        <p className="text-xs font-bold tracking-[2.5px] uppercase text-violet-400 mb-2">About Me</p>
        <h2 className="font-clash text-4xl font-bold tracking-tight text-white mb-10">
          Who I am
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left — Text */}
          <div className="flex flex-col gap-4">
            <p className="text-[14.5px] text-gray-400 leading-[1.85]">
              I'm a <span className="text-white font-semibold">MERN Stack Developer</span> and{' '}
              <span className="text-white font-semibold">Computer Science student</span> from Karachi, Pakistan.
              I love building full-stack web apps — from pixel-perfect UIs to clean backend APIs — and I'm
              always looking for the next thing to learn.
            </p>
            <p className="text-[14.5px] text-gray-400 leading-[1.85]">
              I've shipped multiple real projects including an{' '}
              <span className="text-white font-semibold">E-Commerce platform</span>, a{' '}
              <span className="text-white font-semibold">Task Manager</span>, and a{' '}
              <span className="text-white font-semibold">User Inquiry System</span> — all built end-to-end.
              I enjoy the whole process: designing the UI, wiring up the API, and getting the database right.
            </p>
            <p className="text-[14.5px] text-gray-400 leading-[1.85]">
              I'm actively looking for my first{' '}
              <span className="text-violet-400 font-semibold">full-time role or freelance opportunity</span>{' '}
              where I can grow, contribute, and build things that matter.
            </p>
          </div>

          {/* Right — Meta + Tags */}
          <div className="flex flex-col gap-6">

            {/* Info chips */}
            <div className="flex flex-wrap gap-2.5">
              <span className="flex items-center gap-2 text-green-400 text-[13px] font-semibold px-[14px] py-2 rounded-[9px] border border-green-400/20 bg-green-400/[0.05]">
                <span className="w-[6px] h-[6px] rounded-full bg-green-400 animate-pulse" />
                Open to Work
              </span>
              <span className="flex items-center gap-2 text-gray-400 text-[13px] font-medium px-[14px] py-2 rounded-[9px] border border-white/[0.06] bg-[#15151e]">
                📍 Karachi, Pakistan
              </span>
              <span className="flex items-center gap-2 text-gray-400 text-[13px] font-medium px-[14px] py-2 rounded-[9px] border border-white/[0.06] bg-[#15151e]">
                🎓 CS Student
              </span>
              <span className="flex items-center gap-2 text-gray-400 text-[13px] font-medium px-[14px] py-2 rounded-[9px] border border-white/[0.06] bg-[#15151e]">
                💼 Fresher
              </span>
            </div>

            {/* Skill tags */}
            <div>
              <p className="text-[11px] font-bold tracking-[2px] uppercase text-gray-500 mb-3">Core Stack</p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'JWT'].map((tag) => (
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

      </div>
    </section>
  )
}

export default About