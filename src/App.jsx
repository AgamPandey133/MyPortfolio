import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Works from './components/Works';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Terminal from './components/Terminal';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-surface">
        <div className="bg-grid absolute inset-0 z-[-1] pointer-events-none opacity-40"></div>
        
        <Navbar />
        
        <main className="flex flex-col gap-20 sm:gap-32 pb-20">
          <Hero />
          <div className="section-divider max-w-7xl mx-auto opacity-30"></div>
          
          <About />
          <div className="section-divider max-w-7xl mx-auto opacity-30"></div>
          
          <Experience />
          <div className="section-divider max-w-7xl mx-auto opacity-30"></div>
          
          <Works />
          <div className="section-divider max-w-7xl mx-auto opacity-30"></div>
          
          <Skills />
          <div className="section-divider max-w-7xl mx-auto opacity-30"></div>
          
          <Achievements />
          <div className="section-divider max-w-7xl mx-auto opacity-30"></div>
          
          <Contact />
        </main>

        <Terminal />
      </div>
    </BrowserRouter>
  );
}

export default App;
