import './index.css';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import FaqSection from "./components/FaqQuestion";
import CubeComponent from "./components/CubeComponent";
import Skills from "./components/Skills";
function App() {
  return (
    <main className="overflow-x-hidden">
      <Home />
      <About />
      <CubeComponent />
      <FaqSection />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;


