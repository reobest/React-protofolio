import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { faqs } from "../constants/myprojects";

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    }


    return (
        <motion.section
            className="relative bg-black/80 text-white py-20 px-6 flex flex-col md:flex-row items-center justify-center brightness-75 overflow-hidden">
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/20 rounded-full blur-3xl z-0"></div>
            <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1 }} className="flex flex-col w-full max-w-xl">
                <h2 className="text-xl md:text-4xl font-semibold mb-4 text-white/85">
                    Your Questions <span className="italic text-white/60 tracking-[-0.14em] font-light">Answered</span>
                </h2>
                <p className="text-white/60 mb-6 text-xs w-full max-w-96 leading-relaxed">
                    Find the answers to our most common questions here, but if you still need help, feel free to contact me.
                </p>
                <a href="#contact"> <button className="flex items-center gap-1 bg-neutral-900/70 w-32 border  border-gray-600 text-white/60 px-5 
                    py-2 rounded-full mb-10 hover:text-white transition text-xs">
                    <FaArrowRight className="transform -rotate-45 font-thin" />
                    Contact Me
                </button></a>
            </motion.div>
            <motion.div className="space-y-4 w-full max-w-md relative z-20">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 1 }}
                            key={index}
                            className="bg-neutral-900/70 rounded-lg overflow-hidden transition-all duration-300 py-2"
                        >
                            <button
                                onClick={() => toggle(index)}
                                className="w-full text-left px-6 py-4 flex justify-between items-center"
                            >
                                <span className="font-medium text-white/80 text-sm">
                                    {faq.question}
                                </span>
                                <span
                                    className={`transform transition-transform duration-300 ${isOpen ? "rotate-[270deg]" : "rotate-45"
                                        }`}
                                >
                                    ✕
                                </span>
                            </button>

                            {/* ✅ Always render, animate height */}
                            <div
                                className={`px-6 text-white/60 text-xs leading-relaxed transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-40 py-4" : "max-h-0 py-0"
                                    }`}
                            >
                                {faq.answer}
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.section>
    );
}
