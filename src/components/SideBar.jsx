import React, { useState  } from 'react'
import { styled } from 'styled-components'
import { AiFillHome } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { PiStudentFill } from "react-icons/pi";
import { Link as ScrollLink } from 'react-scroll';
import { FaReact } from "react-icons/fa";
import { useGlobalContext } from './Context';
import { GoMail } from 'react-icons/go'
const SideBar = () => {
    const context = useGlobalContext()
    const {isOpen1,setIsOpen1} = context
    console.log(isOpen1);
    const [text, setText] = useState(false)
    const [about, setAbout] = useState(false)
    const [contact, setContact] = useState(false)
    const [education, setEducation] = useState(false)
    const [skills, setSkills] = useState(false)
    const handleHover1 = () => {
        setText(true)
    }
    const handleHover2 = () => {
        setAbout(true)
    }
    const handleHover3 = () => {
        setContact(true)
    }
    const handleHover4 = () => {
        setEducation(true)
    }
    const handleHover5 = () => {
        setSkills(true)
    }
    const handleLeave1 = () => {
        setText(false)
    }
    const handleLeave2 = () => {
        setAbout(false)
    }
    const handleLeave3 = () => {
       setContact(false)
    }
    const handleLeave4 = () => {
        setEducation(false)
     }
     const handleLeave5 = () => {
        setSkills(false)
     }
    const handleClick = () => {
        setIsOpen1(true)
    }
    return (
        <Container>
            <ScrollLink to="home" smooth={true} duration={1000} >
                <HomeContainer onMouseMove={handleHover1} onMouseLeave={handleLeave1} text={text}>
                    {text ? <Hometext>Home</Hometext> : <Homee />}
                </HomeContainer>
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={1000}><PersonalContainer onMouseMove={handleHover2} onMouseLeave={handleLeave2} about={about} onClick={handleClick}>
                {about ? <Hometext>About Me</Hometext> : <Personal />}
            </PersonalContainer></ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={1000}><MailContainer onMouseMove={handleHover3} onMouseLeave={handleLeave3} contact={contact}>
                {contact ? <Hometext>Contact Me</Hometext> : <Mail />}
            </MailContainer></ScrollLink>
            <ScrollLink to="education" smooth={true} duration={1000}><EducationContainer onMouseMove={handleHover4} onMouseLeave={handleLeave4} education={education}>
                {education ? <Hometext>My Projects</Hometext> : <Projects />}
            </EducationContainer></ScrollLink>
            <ScrollLink to="skills" smooth={true} duration={1000}><SkillsContainer onMouseMove={handleHover5} onMouseLeave={handleLeave5} skills={skills}>
                {skills ? <Hometext>My Skills</Hometext> : <Skills />}
            </SkillsContainer></ScrollLink>
        </Container>
    )
}

export default SideBar
const Hometext = styled.p`
    font-size: 16px;
    text-align: center;
    color: #fff;
    text-transform: none;
    transition: all .3s ease-in-out ;
`
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
@media  only screen  and (max-width:450px) {
    margin-top: 60px;
    flex-direction: row;
    position: absolute;
    top:0;
    left: 0;
    width: 100vw;
    box-sizing: border-box;
    padding-left: 30px;
    padding-right:20px;
    height: 100px;
    justify-content: space-between;
    }
a{
    text-decoration: none;
}
`
const SkillsContainer = styled.div`
    box-sizing: border-box;
    padding: 10px;
    border-radius: 50%;
    align-items: center;
    border: #3cc6d8 solid 2px;
    justify-content: center;
    display: flex;
    height: ${(props) => (props.skills ? '80px' : '50px')};
    width: ${(props) => (props.skills ? '80px' : '50px')};
    background: transparent;
    cursor: pointer;
    transition: all .3s ease-in-out ;  
`
const HomeContainer = styled.div`
    box-sizing: border-box;
    padding: 10px;
    border-radius: 50%;
    align-items: center;
    border: #3cc6d8 solid 2px;
    justify-content: center;
    display: flex;
    height: ${(props) => (props.text ? '80px' : '50px')};
    width: ${(props) => (props.text ? '80px' : '50px')};
    background: transparent;
    cursor: pointer;
    transition: all .3s ease-in-out ;
`
const PersonalContainer = styled.div`
box-sizing: border-box;
    padding: 10px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    display: flex;
    height: ${(props) => (props.about ? '80px' : '50px')};
    width: ${(props) => (props.about ? '80px' : '50px')};
    background: transparent;
    cursor: pointer;
    transition: all .3s ease-in-out ;
    border: #3cc6d8 solid 2px;
`
const MailContainer = styled.div`
    box-sizing: border-box;
    border: #3cc6d8 solid 2px;
    padding: 10px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    display: flex;
    height: ${(props) => (props.contact ? '80px' : '50px')};
    width: ${(props) => (props.contact ? '80px' : '50px')};
    background: transparent;
    cursor: pointer;
    transition: all .3s ease-in-out ;
`
const EducationContainer = styled.div`
    box-sizing: border-box;
    border: #3cc6d8 solid 2px;
    padding: 10px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    display: flex;
    height: ${(props) => (props.education ? '80px' : '50px')};
    width: ${(props) => (props.education ? '80px' : '50px')};
    background: transparent;
    cursor: pointer;
    transition: all .3s ease-in-out ;   
`
const Homee = styled(AiFillHome)`
    font-size: 30px;
    color: #3cc6d8;
`
const Personal = styled(BsFillPersonFill)`
    font-size: 30px;
    color: #3cc6d8;
`
const Mail = styled(GoMail)`
    font-size: 30px;
    color: #3cc6d8;
`
const Projects = styled(PiStudentFill)`
    font-size: 30px;
    color: #3cc6d8;
`
const Skills = styled(FaReact)`
    font-size: 30px;
    color: #3cc6d8;
`