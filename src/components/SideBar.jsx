import React, { useState, useCallback } from 'react';
import { styled } from 'styled-components';
import { AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { PiStudentFill } from 'react-icons/pi';
import { Link as ScrollLink } from 'react-scroll';
import { FaReact } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';

const SideBar = () => {
  const [hovered, setHovered] = useState(null);

  const handleHover = useCallback((section) => setHovered(section), []);
  const handleLeave = useCallback(() => setHovered(null), []);

  const navItems = [
    { id: 'home', label: 'Home', icon: <StyledHomeIcon /> },
    { id: 'about', label: 'About Me', icon: <StyledPersonalIcon />},
    { id: 'contact', label: 'Contact Me', icon: <StyledMailIcon /> },
    { id: 'education', label: 'My Projects', icon: <StyledProjectsIcon /> },
    { id: 'skills', label: 'My Skills', icon: <StyledSkillsIcon /> },
  ];

  return (
    <Container>
      {navItems.map(({ id, label, icon, onClick }) => (
        <ScrollLink
          key={id}
          to={id}
          smooth={true}
          duration={1000}
          href={`#${id}`}
          aria-label={`Go to ${label}`}
        >
          <HoverableContainer
            onMouseEnter={() => handleHover(id)}
            onMouseLeave={handleLeave}
            $isHovered={hovered === id}
            onClick={onClick}
          >
            {hovered === id ? <Label>{label}</Label> : icon}
          </HoverableContainer>
        </ScrollLink>
      ))}
    </Container>
  );
};

export default React.memo(SideBar);

const Label = styled.p`
  font-size: 16px;
  text-align: center;
  color: #fff;
  transition: all 0.3s ease-in-out;
`;

const Container = styled.div`
  display: flex;
  gap: 10px;
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
  z-index: 190;

  @media (max-width: 450px) {
    margin-top: 60px;
    box-sizing: border-box;
    flex-direction: row;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    padding-inline: 8px;
    gap: 0;
    height: 100px;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
  }
`;

const HoverableContainer = styled.div`
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => (props.$isHovered ? '70px' : '40px')};
  width: ${(props) => (props.$isHovered ? '70px' : '40px')};
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: #3cc6d8 solid 2px;
  @media (max-width: 450px) {
    height: ${(props) => (props.$isHovered ? '60px' : '30px')};
    width: ${(props) => (props.$isHovered ? '60px' : '30px')};
  }
`;

const StyledHomeIcon = styled(AiFillHome)`
  font-size: 30px;
  color: #3cc6d8;
`;

const StyledPersonalIcon = styled(BsFillPersonFill)`
  font-size: 30px;
  color: #3cc6d8;
`;

const StyledMailIcon = styled(GoMail)`
  font-size: 30px;
  color: #3cc6d8;
`;

const StyledProjectsIcon = styled(PiStudentFill)`
  font-size: 30px;
  color: #3cc6d8;
`;

const StyledSkillsIcon = styled(FaReact)`
  font-size: 30px;
  color: #3cc6d8;
`;
