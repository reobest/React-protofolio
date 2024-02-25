import { styled } from "styled-components";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
function App() {
  return (
    <>
      <Container>
        <SideBar />
        <Home />
        <About/>
        <Contact/>
        <Projects/>
        <Skills/>
      </Container>
    </>
  );
}

export default App;
const Container = styled.div`
   background: #0a0318;
`


// const starAnimation = keyframes`
//   from {
//     transform: translateY(0);
//   }
//   to {
//     transform: translateY(-100vh);
//   }
// `;

// const Star = styled.div`
//   position: absolute;
//   width: 2px;
//   height: 2px;
//   background-color: #fff;
//   opacity: 0.8;
//   animation: ${starAnimation} ${(props) => props.speed || 5}s linear infinite;
// `;

// const SpaceAnimation = () => {
//   const generateRandomPosition = () => `${Math.random() * 100}vw`;

//   return (
//     <div>
//       <h2>Space Animation</h2>
//       {[...Array(50)].map((_, index) => (
//         <Star
//           key={index}
//           style={{ left: generateRandomPosition(), animationDuration: `${Math.random() * 2 + 1}s` }}
//         />
//       ))}
//     </div>
//   );
// };

// export default SpaceAnimation;
