import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react';
import SpaceAnimation from './Star'
const Skills = () => {
    const [progress1, setProgress1] = useState(0);
    const [progress2, setProgress2] = useState(0);
    const [progress3, setProgress3] = useState(0);
    const [progress4, setProgress4] = useState(0);
    useEffect(() => {
        setProgress1(0)
        setProgress2(0)
        setProgress3(0)
        setProgress4(0)
        const interval = setInterval(() => {
            setProgress1((prevProgress) => (prevProgress >= 88 ? 88 : prevProgress + 100));
            setProgress2((prevProgress) => (prevProgress >= 90 ? 90 : prevProgress + 100));
            setProgress3((prevProgress) => (prevProgress >= 85 ? 85 : prevProgress + 100));
            setProgress4((prevProgress) => (prevProgress >= 75 ? 75 : prevProgress + 100));
        }, 500);
        return () => clearInterval(interval);
    }, []);
    const [isVisible3, setIsVisible3] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = 3150;
            setIsVisible3(scrollPosition > threshold);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <Container id='skills'>
            <Myskills>My <span>Skills</span></Myskills>
            <Technicalskills isVisible3={isVisible3} >
                <h2>Technical Skills</h2>
                <Technicalcontainer>
                    <span>[ HTML , Css, tailwind, Styled components, Sass ]</span>
                    <span>90%</span>
                </Technicalcontainer>
                <Progresscontainer>
                    <Progressbar style={{ width: `${progress2}%` }}></Progressbar>
                </Progresscontainer>
                <Technicalcontainer>
                    <span>[ Javascript, typescript ]</span>
                    <span>85%</span>
                </Technicalcontainer>
                <Progresscontainer>
                    <Progressbar style={{ width: `${progress3}%` }}></Progressbar>
                </Progresscontainer>
                <Technicalcontainer>
                    <span>[ React Js, Next Js, Express Js ]</span>
                    <span>75%</span>
                </Technicalcontainer>
                <Progresscontainer>
                    <Progressbar style={{ width: `${progress4}%` }}></Progressbar>
                </Progresscontainer>
                <Technicalcontainer>
                    <span>[ firebase, MongoDB, PostgreSQL ]</span>
                    <span>88%</span>
                </Technicalcontainer>
                <Progresscontainer>
                    <Progressbar style={{ width: `${progress1}%` }}></Progressbar>
                </Progresscontainer>
            </Technicalskills>
            <ProfessionalSkills isVisible3={isVisible3} >
                <h2>Proffesional Skills</h2>
                <Profeesionalskillscontainer>
                    <Singleelementcontainer>
                        <Cont id="cont1" data-pct="100">
                            <Svg id="svg" width="100" height="100" viewport="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <circle r="46" cx="50" cy="50" fill="transparent" strokeDasharray="565.48" strokeDashoffset="0"></circle>
                                <circle id="bar" r="46" cx="50" cy="50" fill="transparent" strokeDasharray="203.48" strokeDashoffset="0"></circle>
                            </Svg>
                        </Cont>
                        <h3>Team Work</h3>
                    </Singleelementcontainer>
                    <Singleelementcontainer>
                        <Cont id="cont2" data-pct="100">
                            <Svg id="svg" width="100" height="100" viewport="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <circle r="46" cx="50" cy="50" fill="transparent" strokeDasharray="565.48" strokeDashoffset="0"></circle>
                                <circle id="bar" r="46" cx="50" cy="50" fill="transparent" strokeDasharray="232.48" strokeDashoffset="0"></circle>
                            </Svg>
                        </Cont>
                        <h3>Creativity</h3>
                    </Singleelementcontainer>
                    <Singleelementcontainer>
                        <Cont id="cont3" data-pct="100">
                            <Svg id="svg" width="100" height="100" viewport="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <circle r="46" cx="50" cy="50" fill="transparent" strokeDasharray="565.48" strokeDashoffset="0"></circle>
                                <circle id="bar" r="46" cx="50" cy="50" fill="transparent" strokeDasharray="217.48" strokeDashoffset="0"></circle>
                            </Svg>
                        </Cont>
                        <h3>Project Management</h3>
                    </Singleelementcontainer>
                    <Singleelementcontainer>
                        <Cont id="cont4" data-pct="100">
                            <Svg id="svg" width="100" height="100" viewport="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <circle r="46" cx="50" cy="50" fill="transparent" strokeDasharray="565.48" strokeDashoffset="0"></circle>
                                <circle id="bar" r="46" cx="50" cy="50" fill="transparent" strokeDasharray="246.48" strokeDashoffset="0"></circle>
                            </Svg>
                        </Cont>
                        <h3>Communication</h3>
                    </Singleelementcontainer>
                </Profeesionalskillscontainer>
            </ProfessionalSkills>
            <SpaceAnimation />
        </Container>
    )
}

export default Skills
const Singleelementcontainer = styled.div`
    display: flex;
    width: 250px;
    height: 200px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3{
        margin-top: 10px;
    }
`
const Profeesionalskillscontainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    max-width: 100%;
    height: auto;
`
const Cont = styled.div`
  display: block;
  height: 100px;
  width: 100px;
  box-shadow: 0 0 1em black;
  border-radius: 100%;
  position: relative;
    &:after{
    text-align: center;
    position: absolute;
  display: block;
  height: 160px;
  width: 160px;
  left: 50%;
  top: 50%;
  margin-top: -80px;
  margin-left: -80px;
  border-radius: 100%;
  line-height: 160px;
  font-size: 2em;
  text-shadow: 0 0 0.5em black;
  }
  &#cont1{
    &:after{
        content: '70%';
  }
  }  &#cont2{
    &:after{
        content: '80%';
  }
  }  &#cont3{
    &:after{
        content: '75%';
  }
  }  &#cont4{
    &:after{
        content: '85%';
  }
  }
`
const Svg = styled.svg`
circle{
    stroke-dashoffset: 0;
  transition: stroke-dashoffset 1s linear;
  stroke: #666;
  stroke-width: .4em;
}
#bar{
    stroke: #3cc6d8;
}
`
const ProfessionalSkills = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width   :600px ;
height: 500px;
margin-top: 20px;
transition: transform 2s ease-in;
transform: ${(props) => (props.isVisible3 ? 'translateX(0)' : 'translateX(800px)')};
opacity: ${(props) => (props.isVisible3 ? '1' : '0')}; 
@media  only screen  and (max-width:450px) {
    width: 100%;
    height: auto;
    margin-top: 100px;
    }
h1{
    @media  only screen  and (max-width:450px) {
        font-size: 25px;
    }
        font-weight: 400;
        letter-spacing: 2px;
    }
`
const Technicalcontainer = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-end;
    justify-content: space-between;
    height: 50px;
    @media  only screen  and (max-width:450px) {
        width: 90%;
    }
`
const Technicalskills = styled.div`
    width: 550px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transition: transform 2s ease-in;
    transform: ${(props) => (props.isVisible3 ? 'translateY(0)' : 'translateY(800px)')};
    opacity: ${(props) => (props.isVisible3 ? '1' : '0')}; 
    @media  only screen  and (max-width:450px) {
        margin-top: 100px;
        width: 90%;
    }
    h1{
        @media  only screen  and (max-width:450px) {
        font-size: 25px;
    }
        font-weight: 400;
        letter-spacing: 2px;
    }
`
const Progresscontainer = styled.div`
    width: 550px;
    @media  only screen  and (max-width:450px) {
        width: 90%;
    }
`
const Progressbar = styled.div`
    background-color: #3cc6d8;
    height: 15px;
    border-radius: 30px;
    transition: all 1s ease-in-out;
`
const Myskills = styled.h1`
position: absolute;
top: 0;
left: 50%;
transform: translateX(-50%);
  color: #fff;
  font-size: 45px;
  @media  only screen  and (max-width:450px) {
    width: 100%;
    text-align: center;
    }
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
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    color:#fff;
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    padding-top: 50px;
    @media  only screen  and (max-width:450px) {
        flex-direction: column;
        margin-top: 100px;
    }
    p{
    font-weight: 200;
    font-size: 17px;
    line-height: 23px;
    text-align: center;
    width: 850px;
    }
`