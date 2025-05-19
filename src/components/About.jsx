import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from 'framer-motion';
export default function About() {
  return (
    <section id="about" 
    className="h-[800px] md:h-[400px]  bg-neutral-950 text-white flex items-center justify-center px-4  md:px-20 border border-l-0 
    border-r-0 border-t-gray-800 border-white/5 overflow-hidden"
      style={{
        backgroundColor: '#000', 
        backgroundImage: `
        linear-gradient(#050505  1px, transparent 1px),
        linear-gradient(90deg, #050505 1px, transparent 1px)
      `,
        backgroundSize: '12px 12px', 
        backgroundPosition: 'center'
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-40 items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="text-3xl font-semibold text-gray-200">
            More about <span className="italic font-light text-gray-400 tracking-[-0.14em]">myself</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="max-w-96 text-white/60 text-xs md:text-sm mt-6 leading-relaxed">
            Hello! I'm Rayan, a passionate Full-Stack Developer who builds dynamic,
            user-friendly web applications using React.js, Next.js, and Node.js.
            With a background in computer engineering, I focus on crafting scalable,
            visually engaging, and high-performance digital experiences. I love turning ideas into clean,
            efficient code and constantly strive to learn, grow, and build amazing things! 🚀
          </motion.p>
          <a href="#contact"><button className="text-white/60 flex items-center gap-2 px-4 py-2 mt-6 border border-neutral-700 rounded-full text-xs bg-neutral-900 hover:text-white transition">
            <FaArrowRight className="transform -rotate-45" />
            Contact Me
          </button></a>
        </div>

        <div className="relative w-[350px] md:w-[400px] rounded-xl overflow-hidden shadow-[0_20px_50px_#ffffff30]"  >
          <img
            src="https://framerusercontent.com/images/2tsEoalKV0gW67C7KEF0opYwC4U.jpg?scale-down-to=1024"
            alt="designer at work"
            className="rounded-xl w-full object-cover h-[200px] md:h-[250px] grayscale transition-transform duration-100 ease-in-out hover:scale-105 hover:brightness-75"
          />
          <div className="absolute inset-0 rounded-xl border border-white/5 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}


