import React, { useEffect } from "react";
import './index.css';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import FaqSection from "./components/FaqQuestion";
import CubeComponent from "./components/CubeComponent";
import Skills from "./components/Skills";
import { useState } from "react";
import MouseFollower from "./components/MouseFollower";
function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <main style={{ overflowX: "hidden" }}>
      <Home />
      <About />
      <CubeComponent />
      <FaqSection />
      <Projects />
      <Skills />
      <Contact />
      <MouseFollower
        x={mousePosition.x}
        y={mousePosition.y}
      />
    </main>
  );
}

export default App;


