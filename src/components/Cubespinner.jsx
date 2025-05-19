import React from 'react';
import { FaReact } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa6';
import { SiCss3 } from 'react-icons/si';
import { DiJavascript } from 'react-icons/di';
import { IoLogoNodejs } from 'react-icons/io5';
import { BsGithub } from 'react-icons/bs';
import '../index.css'; 

const Cubespinner = () => {
  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="cube-container relative w-32 h-32">
        <div className="cube w-full h-full absolute animate-spin-3d">
          <div className="cube-side cube-side--front text-cyan-400"><FaReact className="w-full h-full" /></div>
          <div className="cube-side cube-side--back text-blue-700 rotate-x-180"><FaHtml5 className="w-full h-full" /></div>
          <div className="cube-side cube-side--right text-orange-500 rotate-x-180"><SiCss3 className="w-full h-full" /></div>
          <div className="cube-side cube-side--left text-yellow-300 rotate-x-180"><DiJavascript className="w-full h-full" /></div>
          <div className="cube-side cube-side--top text-green-600"><IoLogoNodejs className="w-full h-full" /></div>
          <div className="cube-side cube-side--bottom text-black"><BsGithub className="w-full h-full" /></div>
        </div>
      </div>
    </div>
  );
};

export default Cubespinner;
