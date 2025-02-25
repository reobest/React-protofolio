import React, { useState, useEffect } from 'react'
import SpaceAnimation from './Star'
import styled, { keyframes } from 'styled-components';
import Cubespinner from './Cubespinner'
import { useGlobalContext } from './Context'
const About = () => {
  const context = useGlobalContext()
  const { } = context
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 600;
      setIsVisible(scrollPosition > threshold && scrollPosition < 1700);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Container id='about' isVisible={isVisible}>
      <Aboutme>About <span>Me</span></Aboutme>
      <Cubespinner />
      <Frontend isVisible={isVisible}><TypewriterText>Frontend <span>Developerd</span></TypewriterText></Frontend>
      <AboutMyself isVisible={isVisible}>

        Hello! I'm Rayan, a passionate and creative Front-End Developer who loves building dynamic and user-friendly web applications. With expertise in React.js, Next.js, and backend technologies like Node.js and MongoDB, I enjoy crafting seamless digital experiences that are both visually appealing and highly performant.
        I have a strong foundation in computer engineering and software development, allowing me to build scalable applications with a keen eye for design, optimization, and user experience. Whether it's an e-commerce platform, a real-time chat app, or a custom web solution, I thrive on turning ideas into reality with clean and efficient code.
        I am always eager to learn, grow, and contribute to exciting projects while staying up-to-date with the latest technologies. Let’s build something amazing together! 🚀

        .</AboutMyself>
      <SpaceAnimation />
    </Container>
  )
}

export default About
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
const Frontend = styled.h3`
  color: #fff;
  font-weight: 300;
  font-size: 45px;
  transition: all 2s ease-in-out;
  transform: ${(props) => (props.isVisible ? 'translateX(0)' : 'translateX(800px)')};
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  span{
    color: #3cc6d8;
  }
  @media  only screen  and (max-width:450px) {
      box-sizing: border-box;
      padding: 0 20px;
      font-size: 30px;
    }
  `
const Aboutme = styled.h1`
  color: #fff;
  font-size: 45px;
  span{
    cursor: pointer;
    color: #3cc6d8;
    &:hover{
        color: #1834ef;
    }
  }
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    color:#fff;
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
`
const AboutMyself = styled.p`
    font-weight: 200;
    font-size: 17px;
    line-height: 23px;
    text-align: center;
    width: 850px;
    transition: all 2s ease-in-out;
    transform: ${(props) => (props.isVisible ? 'translateX(0)' : 'translateX(-800px)')};
    opacity: ${(props) => (props.isVisible ? '1' : '0')};
    @media  only screen  and (max-width:450px) {
      box-sizing: border-box;
      font-size: 14px;
      width: 90%;
    }
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  font-style: normal;
`

