import React from 'react'
import { keyframes, styled } from 'styled-components'
import animation from '../images/22492.png'
import rayan from '../images/rayan.webp'
import { IoLogoWhatsapp } from "react-icons/io5";
import { FiInstagram } from "react-icons/fi";
import { GrLinkedinOption, GrFacebookOption } from "react-icons/gr";
import SpaceAnimation from './Star'
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <Container id='home'>
      <ProtfolioPic>
        <img src={rayan} alt='rayan' />
      </ProtfolioPic>
      <MyInfo>
        <h1>Hi My Name Is <span>Rayan</span>,<TypewriterText>I Am A Web Devoloper.</TypewriterText></h1>
        <p>
          Hello! I'm Rayan I love to build amazing Applications, I am a passionate and
          creative Frontend React Developer,
          With a great background in Building unique websites with modern technologies ,
          I bring a unique blend of technical skills and a keen eye for design .
        </p>
        <Socials>
          <Link to='https://facebook.com/rayan.salem.7777'><GrFacebookOption /></Link>
          <Link to='https://wa.link/ia261k'><IoLogoWhatsapp /></Link>
          <Link to='https://www.instagram.com/rayan_belalll_?igsh=MWcOcDEzMjZyZWd6bQ%3D%3D&utm_source=qr'><FiInstagram /></Link>
          <Link to='https://www.linkedin.com/in/rayan-bilal-bb414925b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'><GrLinkedinOption /></Link>
        </Socials>
        <ScrollLink to="about" smooth={true} duration={1000}><Moreaboutme>More About Me</Moreaboutme></ScrollLink>
      </MyInfo>
      <SpaceAnimation />
    </Container>
  )
}

export default Home
const Moreaboutme = styled.button`
   margin-top: 30px;
   font-size: 15px;
  width: 200px;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  font-family: lato;
  color: #3cc6d8;
  background-color: transparent;
  -webkit-transition: 0.3s all ease-in;
  transition: 0.3s all ease-in;
  border: 2px solid #3cc6d8;
  &:hover{
    color: #14203d;
    -webkit-box-shadow: 0px 0px 20px 15px #3cc6d8;
  box-shadow: 0px 0px 30px 20px #3cc6d8;
  background-color: #3cc6d8;
  }
`
const typingAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`
const TypewriterText = styled.div`
  overflow: hidden;
  white-space: nowrap;
  animation: ${typingAnimation} 4s steps(20, end) infinite;
`
const Socials = styled.div`
margin-top: 20px;
width: 250px;
height: 50px;
display: flex;
align-items: center;
justify-content: space-around;
svg{
    &:hover{
        scale: 1.06;
        padding: 8px;
    }
    cursor: pointer;
    width: 50px;
    height: 50px;
    border: solid 2px #3cc6d8;
    color:#3cc6d8;
    border-radius: 50%;
    font-size: 10px;
    box-sizing: border-box;
    padding: 8px;
}
`
const Container = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: space-around;
position: relative;
color: #fff;
width: 100%;
min-height:100vh;
`
const Animate = keyframes`      
0%{
background-position: 0% 0%;
}
25%{
background-position: 50% 0%;
}
50%{
background-position:100% 0% ;
}
75%{
background-position:50% 0% ;
}
100%{
background-position: 0% 0%;
}
`
const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }26%{
    transform: translateY(-5px);
  }
  32% {
    transform: translateY(-10px);
  }50% {
    transform: translateY(-15px);
  }66%{
    transform: translateY(-10px);
  }82%{
    transform: translateY(-5px);
  }
`
const slideInFromRight = keyframes`
  from {
    transform: translateX(400px);
  }
  to {
    transform: translateX(0);
  }
`;
const slideInFromLeft = keyframes`
  from {
    transform: translateX(-400px);
  }
  to {
    transform: translateX(0);
  }
`;
const MyInfo = styled.div`
    position: relative;
    width: 450px;
    height: auto;
    animation: ${slideInFromRight} 2s ease-in-out;
    >h1{
      @media  only screen  and (max-width:450px) {
        font-size: 30px;
        text-align: center;
    }
        font-size: 40px;
        font-weight: 400;
        >span{
            font-weight: 600;
            color: #EA738D;
            background:url(${animation});
            animation-name: ${Animate}; 
            animation-delay: 0ms;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation-iteration-count: infinite;
            animation-duration: 10s;
            animation-timing-function: ease-in-out; 
        }
    }
    >p{
      @media  only screen  and (max-width:450px) {
        font-size: 14px;
        text-align: center;
    }
            font-family: "Playfair Display", serif;
            font-optical-sizing: auto;
            font-style: normal;
            line-height: 20px;
            font-weight: 200;
            font-size: 16px;
    }
    @media  only screen  and (max-width:450px) {
      margin-top: 70px;
      box-sizing: border-box;
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

`
const ProtfolioPic = styled.div`
    position: relative;
    border: #3cc6d8 solid 5px;
    border-radius: 50%;
    width: 400px;
    height: 400px;
    transition: all 2s ease-in-out;
    animation: ${bounceAnimation} 1s infinite ease-in-out,${slideInFromLeft} 2s ease-in-out;
    box-shadow: 0px 0px 40px 20px #3cc6d8;
    @media  only screen  and (max-width:450px) {
      width: 300px;
      height: 300px;
      margin-top: 150px;
    }
    >img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    :hover{
        >img{
            transform: scale(1.07);
        }
    }
`

