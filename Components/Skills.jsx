import React from 'react'

const skillsData = [
  {
    category: "Frontend",
    icon: "◈",
    skills: ["React.js", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: "⬡",
    skills: ["Node.js", "Express.js", "REST APIs", "MVC Pattern"],
  },
  {
    category: "Authentication",
    icon: "◆",
    skills: ["JWT", "bcrypt", "Protected Routes", "Auth Middleware"],
  },
  {
    category: "Database",
    icon: "◉",
    skills: ["MongoDB", "Mongoose ODM", "CRUD Operations"],
  },
  {
    category: "Tools",
    icon: "◎",
    skills: ["Git", "GitHub", "VS Code", "npm", "Postman"],
  },
  {
    category: "Concepts",
    icon: "◇",
    skills: ["Component Architecture", "Responsive Design", "API Integration"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-black text-white min-h-screen flex items-center py-20 px-6 lg:px-10">
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Orbitron:wght@400;600;700&display=swap" rel="stylesheet" />

      <div className="mx-auto max-w-7xl w-full">

        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-['Orbitron'] text-emerald-400 text-xs tracking-[4px] uppercase">02</span>
          <div className="w-12 h-px bg-emerald-400/40" />
          <h2 className="font-['Syne'] text-5xl font-extrabold text-white tracking-tight">
            Skills
          </h2>
        </div>

        {/* All Categories */}
        <div className="flex flex-col gap-10">
          {skillsData.map((group, i) => (
            <div key={i}>

              {/* Category Heading */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-emerald-400 text-base">{group.icon}</span>
                <h3 className="font-['Orbitron'] text-xs text-emerald-400 tracking-[3px] uppercase font-semibold">
                  {group.category}
                </h3>
                <div className="flex-1 h-px bg-white/5" />
              </div>

              {/* Skill Boxes — flex wrap */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="border border-emerald-400/25 text-gray-300 font-['Syne'] text-[12px] tracking-[1.5px] uppercase px-4 py-2 rounded-md hover:border-emerald-400 hover:text-emerald-400 hover:bg-emerald-400/5 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills