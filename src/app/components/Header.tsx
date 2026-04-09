import { useState, useEffect } from 'react';
import { Scale } from 'lucide-react';
import { motion } from 'framer-motion';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl text-[#293A4A]"
          >
            Letícia Bertolini
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {['sobre', 'experiencia', 'servicos', 'formacao', 'contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize transition-colors hover:text-[#578390] text-[#555555]"
              >
                {item === 'sobre' && 'Sobre'}
                {item === 'experiencia' && 'Experiência'}
                {item === 'servicos' && 'Serviços'}
                {item === 'formacao' && 'Formação'}
                {item === 'contato' && 'Contato'}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('contato')}
            className="bg-[#B3852D] text-white px-4 py-2 rounded-lg hover:bg-[#9a7125] transition-colors text-sm sm:text-base"
          >
            Agendar Consulta
          </button>
        </div>
      </nav>
    </motion.header>
  );
}