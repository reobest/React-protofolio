import React, { useState } from 'react';
import { styled } from 'styled-components';
import { AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { PiStudentFill } from 'react-icons/pi';
import { Link as ScrollLink } from 'react-scroll';
import { FaReact } from 'react-icons/fa';
import { useGlobalContext } from './Context';
import { GoMail } from 'react-icons/go';

const SideBar = () => {
  const context = useGlobalContext();
  const { setIsOpen1 } = context;
  const [text, setText] = useState(false);
  const [about, setAbout] = useState(false);
  const [contact, setContact] = useState(false);
  const [education, setEducation] = useState(false);
  const [skills, setSkills] = useState(false);

  const handleHover1 = () => setText(true);
  const handleHover2 = () => setAbout(true);
  const handleHover3 = () => setContact(true);
  const handleHover4 = () => setEducation(true);
  const handleHover5 = () => setSkills(true);

  const handleLeave1 = () => setText(false);
  const handleLeave2 = () => setAbout(false);
  const handleLeave3 = () => setContact(false);
  const handleLeave4 = () => setEducation(false);
  const handleLeave5 = () => setSkills(false);

  const handleClick = () => setIsOpen1(true);

  return (
    <Container>
      <a href="#home" aria-label="Go to Home">
        <ScrollLink to="home" smooth={true} duration={1000} href="#home" aria-label="Go to Home">
          <HomeContainer
            onMouseMove={handleHover1}
            onMouseLeave={handleLeave1}
            $isHovered={text}
          >
            {text ? <Hometext>Home</Hometext> : <Homee />}
          </HomeContainer>
        </ScrollLink>
      </a>
      <a href="#about" aria-label="Go to about me">

        <ScrollLink to="about" smooth={true} duration={1000} href="#about" aria-label="Go to about me">
          <PersonalContainer
            onMouseMove={handleHover2}
            onMouseLeave={handleLeave2}
            $isHovered={about}
            onClick={handleClick}
          >
            {about ? <Hometext>About Me</Hometext> : <Personal />}
          </PersonalContainer>
        </ScrollLink>
      </a>
      <a href="#contact" aria-label="Go to contact">

        <ScrollLink to="contact" smooth={true} duration={1000} href="#contact" aria-label="Go to contact">
          <MailContainer
            onMouseMove={handleHover3}
            onMouseLeave={handleLeave3}
            $isHovered={contact}
          >
            {contact ? <Hometext>Contact Me</Hometext> : <Mail />}
          </MailContainer>
        </ScrollLink>
      </a>
      <a href="#education" aria-label="Go to education">

        <ScrollLink to="education" smooth={true} duration={1000} href="#education" aria-label="Go to education">
          <EducationContainer
            onMouseMove={handleHover4}
            onMouseLeave={handleLeave4}
            $isHovered={education}
          >
            {education ? <Hometext>My Projects</Hometext> : <Projects />}
          </EducationContainer>
        </ScrollLink>
      </a>
      <a href="#skills" aria-label="Go to skills">

        <ScrollLink to="skills" smooth={true} duration={1000} href="#skills" aria-label="Go to skills">
          <SkillsContainer
            onMouseMove={handleHover5}
            onMouseLeave={handleLeave5}
            $isHovered={skills}
          >
            {skills ? <Hometext>My Skills</Hometext> : <Skills />}
          </SkillsContainer>
        </ScrollLink>
      </a>
    </Container>
  );
};

export default SideBar;

const Hometext = styled.p`
  font-size: 16px;
  text-align: center;
  color: #fff;
  text-transform: none;
  transition: all 0.3s ease-in-out;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 400px;
  width: 50px;
  position: fixed;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 40px;
  color: black;
  z-index: 190;

  @media only screen and (max-width: 450px) {
    margin-top: 60px;
    flex-direction: row;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    box-sizing: border-box;
    padding-left: 30px;
    padding-right: 20px;
    height: 100px;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
  }
`;

const HoverableContainer = styled.div`
  box-sizing: border-box;
  padding: 10px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  display: flex;
  height: ${(props) => (props.$isHovered ? '80px' : '50px')};
  width: ${(props) => (props.$isHovered ? '80px' : '50px')};
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: #3cc6d8 solid 2px;
`;

const SkillsContainer = styled(HoverableContainer)``;
const HomeContainer = styled(HoverableContainer)``;
const PersonalContainer = styled(HoverableContainer)``;
const MailContainer = styled(HoverableContainer)``;
const EducationContainer = styled(HoverableContainer)``;

const Homee = styled(AiFillHome)`
  font-size: 30px;
  color: #3cc6d8;
`;

const Personal = styled(BsFillPersonFill)`
  font-size: 30px;
  color: #3cc6d8;
`;

const Mail = styled(GoMail)`
  font-size: 30px;
  color: #3cc6d8;
`;

const Projects = styled(PiStudentFill)`
  font-size: 30px;
  color: #3cc6d8;
`;

const Skills = styled(FaReact)`
  font-size: 30px;
  color: #3cc6d8;
`;
