import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://w.app/leticiabertolini"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 bg-[#B3852D] text-white p-4 rounded-full shadow-2xl hover:bg-[#9a7125] transition-colors group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-[#293A4A] text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Fale no WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#293A4A]"></div>
      </div>

      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#B3852D] animate-ping opacity-20"></span>
    </motion.a>
  );
}