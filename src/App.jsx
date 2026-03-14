import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import CP from './components/CP';
import Contact from './components/Contact';
import MoreProjects from './components/MoreProjects';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  const [isHoveringRing, setIsHoveringRing] = useState(false);

  return (
    <div className="app-container">
      <CustomCursor isHoveringRing={isHoveringRing} />
      <Navbar setIsHoveringRing={setIsHoveringRing} />
      <main>
        <Home />
        <Projects />
        <MoreProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
