import {  FaInstagram, FaArrowRight } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import rayan from '../images/reo.jpg'
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative bg-black">
      <video
        className="absolute inset-0 z-30  w-full h-full object-cover pointer-events-none"
        src='/output.webm'
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/50 z-40"></div>
      <div className="relative z-40 h-[42px] flex justify-between bg-neutral-950 items-center px-4 md:px-60  border-b border-neutral-800">
        <img src="https://framerusercontent.com/images/ETKy6pcTVJ5pEm7xuvzpO0jv9cw.svg" alt="img-portfolio" className="w-12 h-5" />
        <div className="flex items-center gap-6 text-[11px] text-white/50">
          <a href="#projects" className="hover:text-white" >Projects</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
      <div className="relative z-50 flex flex-col items-center justify-center pt-20 pb-32">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src={rayan}
          alt="profile"
          className="rounded-full w-28 h-28 object-cover shadow-md shadow-white"
        />
        <motion.p className="text-white/70 text-[9px] mt-4 flex items-center gap-2" initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}>
          <motion.span
            className="text-green-600 text-[16px] trasnform"
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          >
            ●
          </motion.span>
          <span>available for work</span>
        </motion.p>
        <motion.h1 className="text-3xl md:text-4xl mt-2 font-medium text-white" initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}>
          Rayan <span className="italic font-light text-gray-400 tracking-[-0.14em]">Salem</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }} className="text-gray-400 mt-2 text-xs">UI/UX Designer && Full Stack Developer Based in Switzerland.</motion.p>

        {/* Social Icons */}
        <motion.div className="flex items-center gap-7 mt-4 text-base text-gray-400" initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}>
         <a href="https://github.com/reobest"> <FaGithub className="hover:text-white cursor-pointer" /></a>
          <span className="text-gray-400/50">|</span>
         <a href="https://www.instagram.com/rayan_belalll_?igsh=MWc0cDEzMjZyZWd6bQ%3D%3D&utm_source=qr "> <FaInstagram className="hover:text-white cursor-pointer" /></a>
          <span className="text-gray-400/50">|</span>
         <a href="https://facebook.com/rayan.salem.7777"> <FaFacebook className="hover:text-white cursor-pointer" /></a>
        </motion.div>

        {/* Contact Button */}
       <a href="#contact"> <motion.button initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }} className="flex justify-center items-center mt-6 p-3 bg-black text-white  
        rounded-full text-xs font-light gap-1 border-[.5px] border-gray-900 shadow-sm shadow-white">
          <FaArrowRight className="transform -rotate-45 font-thin" /> Contact Me
        </motion.button></a>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <IoIosArrowDown className="mt-10 text-white text-xl" />
        </motion.div>
      </div>
    </div>
  );
}

