import React from 'react';
import  { styled,keyframes } from 'styled-components';
const SpaceAnimation = () => {
  const generateRandomPosition = () => `${Math.random() * 100}vw`;

  return (
    <div>
      {[...Array(50)].map((_, index) => (
        <Star
          key={index}
          style={{ left: generateRandomPosition(), animationDuration: `${Math.random() * 2 + 1}s` }}
        />
      ))}
    </div>
  );
};

export default SpaceAnimation;
const starAnimation = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100vh);
  }
`;

const Star = styled.div`
  position: absolute;
  top: 800px;
  width: 3px;
  height: 3px;
  background-color: #fff;
  opacity: 0.8;
  animation: ${starAnimation} ${(props) => props.speed || 5}s linear infinite;
`;