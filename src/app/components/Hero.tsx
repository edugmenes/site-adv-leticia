import { motion } from 'motion/react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1687289133469-b2a07a13b78b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdXN0aWNlJTIwc2NhbGVzJTIwbGVnYWwlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzc1NzU1MTIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Justiça"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#293A4A]/90 to-[#555555]/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Professional Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1660700508065-879917d364dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBicmF6aWxpYW4lMjB3b21hbiUyMGxhd3llciUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc1NzU1MTE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Letícia Macena Bertolini Gimenes"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl text-white mb-4"
          >
            Letícia Macena Bertolini Gimenes
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl text-[#B3852D] mb-8"
          >
            Advogada Especialista em Direito Trabalhista
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => scrollToSection('contato')}
              className="bg-[#578390] text-white px-8 py-4 rounded-lg text-lg hover:bg-[#476c78] transition-all transform hover:scale-105 shadow-xl"
            >
              Agende uma Consulta
            </button>

            <a
              href="https://w.app/leticiabertolini"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#B3852D] text-white px-8 py-4 rounded-lg text-lg hover:bg-[#9a7125] transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        onClick={() => scrollToSection('sobre')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}