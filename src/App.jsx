import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0A0A0A] to-transparent" />
      <div className="absolute inset-0 opacity-40" aria-hidden="true">
        <div className="absolute left-[-10%] top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[-10%] top-1/4 h-[28rem] w-[28rem] rounded-full bg-secondary/15 blur-3xl" />
      </div>
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
