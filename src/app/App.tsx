import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Services } from './components/Services';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Toaster } from './components/ui/sonner';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster />
      <Header />
      <FloatingWhatsApp />
      <Hero />
      <About />
      <Experience />
      <Services />
      <Education />
      <Contact />
    </div>
  );
}