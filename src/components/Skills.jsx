import React, { useEffect, useState } from 'react';
import { experience, skills } from '../projects/myprojects.js'
import { motion } from "framer-motion";


export default function SkillsExperience() {
    const [updateTextPosition,setUpdateTextPosition] = useState(false)
    useEffect(() => {
            const updateProjects = () => {
                const isMobile = window.innerWidth < 768;
                if(isMobile){
                    setUpdateTextPosition(true);
                } else{
                    setUpdateTextPosition(false)
                }
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
        <div className="relative bg-black text-white px-6 py-12 md:px-20 lg:px-32 flex flex-col items-center">
            <div className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/20 rounded-full blur-3xl z-0"></div>
            <h2 className="text-center text-xs uppercase tracking-widest text-white/60 mb-8 flex items-center gap-2">
                <div className="bg-white/70 h-[1px] w-[25px]"></div>
                Skills & Experience
                <div className="bg-white/70 h-[1px] w-[25px]"></div>
            </h2>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className="flex flex-wrap justify-center gap-3 mb-12 max-w-3xl bg-white/5 px-4 py-6 rounded-lg">
                {skills.map((skill, idx) => (
                    <span
                        key={idx}
                        className="bg-black text-xs px-4  text-white/60 py-2 rounded-md hover:bg-zinc-800 hover:text-white transition"
                    >
                        {skill}
                    </span>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl w-full">
                <table className="w-full border-separate border-spacing-0 text-xs">
                    <tbody>
                        {experience.map((item, idx) => (
                            <tr key={idx}>
                                <td className="py-4 pr-4 text-white/60 text-left align-top w-[40%] border-b border-white/10 h-[70px]">{item.role}</td>
                                <td className={`py-4 pr-4 text-white/60 ${updateTextPosition ? 'text-center' : 'text-left'} align-top w-[30%] border-b border-white/10 h-[70px]`}>{item.company}</td>
                                <td className="py-4 text-white/60 text-right align-top w-[30%] border-b border-white/10 h-[70px]">{item.duration}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </motion.div>
        </div>
    );
}