import React from 'react'

const HeroSection = () => {
  return (
    <div>
         {/* Hero Section */}
      <section
       id="home"
        className="min-h-screen flex items-center px-8 md:px-16 pt-16"
      >
        <div className="max-w-7xl mx-auto w-full">
 
          {/* Big Name */}
          <h1
            className="font-black text-white leading-[0.92] tracking-tight mb-6"
            style={{ fontSize: "clamp(42px, 8vw, 100px)" }}
          >
            Muhammad <span className="text-[#00ff87]">Huzaifa</span>
            <br />Anwar
          </h1>
 
          {/* Typewriter */}
          <p className="text-[#6b7a74] font-light text-lg md:text-xl tracking-wide mb-10">
            MERN STACK DEVELOPER | CS STUDENT
          </p>
 
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a href="#projects"
            className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-[#0d0d0d] font-bold text-[12px] tracking-[2px] uppercase px-8 py-4 cursor-pointer rounded-lg hover:scale-105 hover:shadow-[0_0_35px_rgba(52,211,153,0.5)] bg-gradient-to-r from-emerald-500 to-cyan-500 md:block  brightness-110  transition-all duration-200"
              style={{ border: "none" }}
            >
              View Work
            </a>
            <a href="#contact"
              className="text-[#00ff87] font-semibold cursor-pointer text-[12px] tracking-[2px] uppercase px-7 py-4 rounded-lg border border-[#00ff87] hover:bg-[#00ff87]/10 hover: hover:scale-105 hover:shadow-[0_0_35px_rgba(52,211,153,0.5)] 
              brightness-110  transition-all duration-200"
              style={{ background: "none" }}
            >
              Contact Me
            </a>
          </div>
 
        </div>
      </section>
      
    </div>
  )
}

export default HeroSection

 {/* Hero Section */}
 