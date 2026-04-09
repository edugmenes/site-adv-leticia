import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Mail, MapPin, Linkedin, Send, MessageCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { toast } from 'sonner';

export function Contact() {
  const [ref, isInView] = useInView();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast.success('Mensagem enviada com sucesso! Entrarei em contato em breve.');
    
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl text-[#293A4A] mb-4">Entre em Contato</h2>
          <div className="w-20 h-1 bg-[#B3852D] mx-auto mb-4"></div>
          <p className="text-lg text-[#555555] max-w-2xl mx-auto">
            Está enfrentando questões trabalhistas? Entre em contato para agendar uma consulta.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl text-[#293A4A] mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#578390]/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-[#578390]" />
                  </div>
                  <div>
                    <h4 className="text-lg text-[#293A4A] mb-1">Email</h4>
                    <a 
                      href="mailto:contato@leticiagimenes.adv.br" 
                      className="text-[#555555] hover:text-[#578390] transition-colors"
                    >
                      contato@leticiagimenes.adv.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#578390]/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-[#578390]" />
                  </div>
                  <div>
                    <h4 className="text-lg text-[#293A4A] mb-1">Localização</h4>
                    <p className="text-[#555555]">São Paulo, Brasil</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#578390]/10 p-3 rounded-lg">
                    <Linkedin className="w-6 h-6 text-[#578390]" />
                  </div>
                  <div>
                    <h4 className="text-lg text-[#293A4A] mb-1">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/leticia-gimenes" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#555555] hover:text-[#578390] transition-colors"
                    >
                      Conecte-se no LinkedIn
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#B3852D]/10 p-3 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-[#B3852D]" />
                  </div>
                  <div>
                    <h4 className="text-lg text-[#293A4A] mb-1">WhatsApp</h4>
                    <a 
                      href="https://w.app/leticiabertolini" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#555555] hover:text-[#B3852D] transition-colors"
                    >
                      Envie uma mensagem
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#578390]/5 p-6 rounded-lg border-l-4 border-[#578390]">
              <h4 className="text-lg text-[#293A4A] mb-2">Horário de Atendimento</h4>
              <p className="text-[#555555]">
                Segunda a Sexta: 9h - 18h<br />
                Resposta em até 24 horas úteis
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#293A4A] mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#578390] focus:border-transparent transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#293A4A] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#578390] focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#293A4A] mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#578390] focus:border-transparent transition-all resize-none"
                  placeholder="Descreva brevemente sua questão..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#578390] text-white px-6 py-4 rounded-lg hover:bg-[#476c78] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-20 pt-8 border-t border-gray-200 text-center"
      >
        <p className="text-gray-600">
          © 2026 Letícia Macena Bertolini Gimenes - Advogada. Todos os direitos reservados.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          OAB/SP - Direito do Trabalho
        </p>
      </motion.footer>
    </section>
  );
}