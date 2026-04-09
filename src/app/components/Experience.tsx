import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Building2, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    period: '2022 - Presente',
    role: 'Advogada Trabalhista',
    company: 'Atuação Profissional',
    responsibilities: [
      'Atuação em contencioso trabalhista em todas as fases processuais',
      'Realização de audiências iniciais, de instrução e julgamento',
      'Elaboração de peças processuais: petições iniciais, contestações, recursos e memoriais',
      'Consultoria preventiva e análise de contratos de trabalho',
      'Sustentação oral e apresentação de teses jurídicas',
      'Assessoria jurídica a empresas em questões trabalhistas',
      'Negociação e mediação de conflitos trabalhistas',
    ],
  },
];

export function Experience() {
  const [ref, isInView] = useInView();

  return (
    <section id="experiencia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl text-[#293A4A] mb-4">Experiência Profissional</h2>
          <div className="w-20 h-1 bg-[#B3852D] mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-[#578390]/20"></div>

              {/* Content Card */}
              <div className="md:ml-12 bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-[#578390] p-3 rounded-lg shrink-0 md:absolute md:left-0 md:transform md:-translate-x-1/2">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-[#B3852D] mb-1">{exp.period}</div>
                    <h3 className="text-2xl text-[#293A4A] mb-1">{exp.role}</h3>
                    <p className="text-lg text-[#555555]">{exp.company}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-lg text-[#293A4A]">Principais Atividades:</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#578390] shrink-0 mt-0.5" />
                        <span className="text-[#555555]">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}