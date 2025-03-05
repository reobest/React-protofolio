import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import webprojects from '../projects/myprojects'
import SpaceAnimation from './Star'
import { Link } from 'react-router-dom'
const Projects = () => {
    const [hide, setHide] = useState(false)
    const Handlehover = () => {
        setHide(true)
    }
    const [isVisible2, setIsVisible2] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = 1900;
            setIsVisible2(scrollPosition > threshold && scrollPosition < 3600);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const NewWebProjects = webprojects.map((project) => {
        const { id, name, description, img, link } = project
        return <Link to={link} key={id}><Wrapper id={id} onMouseMove={Handlehover} onMouseLeave={() => setHide(false)} isVisible2={isVisible2} >
            <Black hide={hide ? 'true' : undefined} className="InnerComponent"></Black>
            <img src={img} alt={description} />
            <h1>{name}</h1>
            <p>{description}</p>
        </Wrapper></Link>
    })
    return (
        <Container id='education' >
            <Myprojects >My <span>Projects!</span></Myprojects>
            <ProjectContainer >
                {NewWebProjects}
            </ProjectContainer>
            <SpaceAnimation />
        </Container>
    )
}

export default Projects
const Black = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 109;
    background-color: #000;
    opacity: .6;
    transition: all .4s ease-in-out;
`
const Wrapper = styled.div`
    @media  only screen  and (max-width:450px) {
        width: 100%;
        height: 200px;
    }
 &#numberone{ 
transition: all .1s ease-in;
opacity: ${(props) => (props.isVisible2 ? '1' : '0')};
 } 
 &#numbertwo{ 
transition: all .6s ease-in;
opacity: ${(props) => (props.isVisible2 ? '1' : '0')};
 } 
&#numberthree{ 
transition: all 2s ease-in;
opacity: ${(props) => (props.isVisible2 ? '1' : '0')};
 } 
&#numberfour{ 
transition: all 2.2s ease-in;
opacity: ${(props) => (props.isVisible2 ? '1' : '0')};
 } 
 &#numberfive{ 
transition: all 3s ease-in;
opacity: ${(props) => (props.isVisible2 ? '1' : '0')};
 }  
position: relative;
cursor: pointer;
overflow: hidden;
border: #00ffc445 solid 1px; 
width: 450px;
height: 450px;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 10px;
&:hover{
    & .InnerComponent{
        opacity: .4;
    }
    img{
        scale: 1.07;
    }h1{

    }h1{
        opacity: 1;
        bottom: 120px;
    }p{
        opacity: .7;
        bottom: 70px;
    }
}
img{
    @media  only screen  and (max-width:450px) {
        width: 100%;
    }
    align-self: center;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    height: 100%;
    transition: all .5s ease-in-out;
}
h1{
    @media  only screen  and (max-width:450px) {
        color: #fff;
        font-size: 20px;
    }
    transition: all .3s ease-in-out;
    position: absolute;
    z-index: 111;
    top: 200px;
    opacity: 0;
    font-size: 29px;
    font-weight: 400;
    padding-left: 20px;
    box-sizing: border-box;
    width: 100%;
    text-align:left;
    margin: 0;
    color: #fff;
}
p{
    @media  only screen  and (max-width:450px) {
        color: #fff;
        font-size: 12px;
    }
    color: #fff;
    transition: all .3s ease-in-out;
    position: absolute;
    z-index: 111;
    bottom: -50px;
    opacity: 0;
    font-size: 14px;
    font-weight: 300px;
    padding-left: 20px;
    box-sizing: border-box;
    margin: 0;
    margin-top: 20px;
    width: 100%;
    display: flex;
}
`
const ProjectContainer = styled.div`
    @media  only screen  and (max-width:450px) {
        max-width: 320px;
    }
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
gap: 30px;
max-width: 1500px;
height: auto;
margin-top: 50px;
`
const Myprojects = styled.h1`
  color: #fff;
  font-size: 45px;
  letter-spacing: 2px;
  span{
    cursor: pointer;
    color: #3cc6d8;
    &:hover{
        color: #1834ef;
    }
  }
`
const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    color:#fff;
    width: 100%;
    min-height: 140vh;
    box-sizing: border-box;
    margin: 0;
    padding: 0;

`