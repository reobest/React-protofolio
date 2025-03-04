import React from 'react'
import '../index.css'
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { SiCss3 } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { IoLogoNodejs } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import styled from 'styled-components';
const Cubespinner = () => {
  return (
    <div className="container">
  <div className="cube-container">
  <div className="cube">
    <div className="cube-side cube-side--front"><Reactsvg/></div>
    <div className="cube-side cube-side--back"><Htmlsvg/></div>
    <div className="cube-side cube-side--right"><Csslsvg/></div>
    <div className="cube-side cube-side--left"><Javascriptlsvg/></div>
    <div className="cube-side cube-side--top"><NodeJslsvg/></div>
    <div className="cube-side cube-side--bottom"><Githublsvg/></div>
  </div>
  </div>
</div>
  )
}

export default Cubespinner
const Reactsvg = styled(FaReact)`
    color: #00fff3;
    width: 100%;
    height: 100%;
`
const Htmlsvg = styled(FaHtml5)`
    transform: rotateX(180deg);
    color: #2830c5;
    width: 100%;
    height: 100%;
`
const Csslsvg = styled(SiCss3)`
    transform: rotateX(180deg);
    color: #ff5500;
    width: 100%;
    height: 100%;
`
const Javascriptlsvg = styled(DiJavascript)`
    transform: rotateX(180deg);
    color: #e5ff00;
    width: 100%;
    height: 100%;
`
const NodeJslsvg = styled(IoLogoNodejs)`
    color: #0a9824;
    width: 100%;
    height: 100%;
`
const Githublsvg = styled(BsGithub)`
    color: #000000;
    width: 100%;
    height: 100%;
`