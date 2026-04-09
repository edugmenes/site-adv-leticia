import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Award, BookOpen, Briefcase } from 'lucide-react';

export function About() {
  const [ref, isInView] = useInView();

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl text-[#293A4A] mb-4">Sobre</h2>
          <div className="w-20 h-1 bg-[#B3852D] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Advogada especialista em Direito Trabalhista com uma abordagem ética, 
              diligente e focada no cliente. Minha atuação é pautada pela busca de 
              soluções jurídicas eficazes, sempre priorizando os interesses e 
              necessidades de cada cliente.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Com sólida formação acadêmica e experiência prática consistente, atuo 
              em todas as fases do contencioso trabalhista, desde a análise inicial 
              do caso até a representação em audiências e elaboração de recursos. 
              Meu compromisso é oferecer um atendimento profissional de excelência, 
              baseado na transparência, responsabilidade e dedicação.
            </p>
          </motion.div>

          {/* Stats/Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#578390]">
              <div className="flex items-start gap-4">
                <div className="bg-[#578390]/10 p-3 rounded-lg">
                  <Briefcase className="w-6 h-6 text-[#578390]" />
                </div>
                <div>
                  <h3 className="text-xl text-[#293A4A] mb-2">Experiência Profissional</h3>
                  <p className="text-[#555555]">
                    3 anos de atuação em Direito Trabalhista, com experiência em 
                    contencioso, consultoria e representação em audiências.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#578390]">
              <div className="flex items-start gap-4">
                <div className="bg-[#578390]/10 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-[#578390]" />
                </div>
                <div>
                  <h3 className="text-xl text-[#293A4A] mb-2">Formação de Excelência</h3>
                  <p className="text-[#555555]">
                    Graduada pela FGV (Strong Business School) e pós-graduada em 
                    Direito do Trabalho pela Legale Educacional.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#578390]">
              <div className="flex items-start gap-4">
                <div className="bg-[#578390]/10 p-3 rounded-lg">
                  <BookOpen className="w-6 h-6 text-[#578390]" />
                </div>
                <div>
                  <h3 className="text-xl text-[#293A4A] mb-2">Atualização Contínua</h3>
                  <p className="text-[#555555]">
                    Cursando pós-graduação em Processo do Trabalho, mantendo-se 
                    sempre atualizada com as mudanças legislativas e jurisprudenciais.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}