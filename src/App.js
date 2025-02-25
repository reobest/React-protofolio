import { styled } from "styled-components";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
function App() {
  return (
    <Container>
      <SideBar />
      <Home />
      <About />
      <Contact />
      <Projects />
      <Skills />
    </Container>
  );
}

export default App;
const Container = styled.div`
   background: #0a0318;
`

