"use client"
import { useEffect, useState } from 'react';
import { webprojects } from '../projects/myprojects'
import { motion } from 'framer-motion';
export default function Projects() {
    const [hover, setHover] = useState(false)
    const [repeatedProjects, setRepeatedProjects] = useState([])

    useEffect(() => {
        const updateProjects = () => {
            const isMobile = window.innerWidth < 768;
            const length = isMobile ? 1 : 10;
            setRepeatedProjects(Array(length).fill(webprojects).flat());
        };

        // Initial check
        updateProjects();

        // Listen to window resize
        window.addEventListener('resize', updateProjects);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', updateProjects);
        };
    }, []);


    return (
        <section id="projects" className="relative bg-black text-white py-16 overflow-hidden min-h-[600px]">
            <div className="absolute top-[110%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/20 rounded-full blur-3xl z-0"></div>
            <div className="text-center mb-10">
                <h2 className="text-xs text-white/70 flex justify-center items-center gap-2">
                    <div className="bg-white/70 h-[1px] w-[25px]"></div>
                    Projects
                    <div className="bg-white/70 h-[1px] w-[25px]"></div>
                </h2>
                <motion.h1 className="text-3xl font-semibold text-white/90">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.4 }}
                    >My Latest </motion.span>
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8 }}
                        className="italic text-white/70 tracking-[-0.1em] font-normal">Projects</motion.span>
                </motion.h1>
            </div>

            <div className="flex flex-col items-center md:flex-row md:animate-marquee gap-6 w-full md:w-[5000px]">
                {repeatedProjects.map((project, index) => {
                    const { name, img, link, github } = project
                    return <div key={index} className="w-[340px] md:w-[350px] bg-transparent rounded-2xl shadow-xl"
                        onMouseMove={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                        <div className="relative w-full aspect-[16/9] h-60 overflow-hidden rounded-lg mb-4 border-[5px] border-white/10">
                            <img
                                src={img[0]}
                                alt={project.title}
                                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 hover:opacity-0"
                            />
                            <img
                                src={img[1]}
                                alt={project.title}
                                className="absolute top-0 left-0 w-full h-full object-fill transition-opacity duration-500 opacity-0 hover:opacity-100"
                            />
                        </div>
                        <div className="flex gap-2 text-[9px] leading-relaxed text-white/40 mb-2 items-center">
                            {["GitHub", "App"].map((element, i) => (
                                i === 1 ? (
                                    <a href={link} key={i}>
                                        <span className="bg-white/5 px-2 py-1 rounded">{element}</span>
                                    </a>
                                ) : (
                                    <a href={github} key={i}>
                                        <span className="bg-white/5 px-2 py-1 rounded">{element}</span>
                                    </a>
                                )
                            ))}
                        </div>
                        <div className="flex gap-2 text-base text-white mb-2">
                            <span className="bg-transparent px-2 py-1 rounded">
                                {name}
                            </span>
                        </div>
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                    </div>
                })}
            </div>
        </section>
    )
}

