import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'Bacharelado em Direito',
    institution: 'FGV - Strong Business School',
    period: 'Concluído',
    status: 'completed',
  },
  {
    degree: 'Pós-Graduação em Direito do Trabalho',
    institution: 'Legale Educacional',
    period: 'Concluído',
    status: 'completed',
  },
  {
    degree: 'Pós-Graduação em Processo do Trabalho',
    institution: 'Instituição de Ensino Superior',
    period: 'Em andamento',
    status: 'ongoing',
  },
];

export function Education() {
  const [ref, isInView] = useInView();

  return (
    <section id="formacao" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl text-[#293A4A] mb-4">Formação Acadêmica</h2>
          <div className="w-20 h-1 bg-[#B3852D] mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto grid gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-gradient-to-r from-gray-50 to-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#578390]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="bg-[#578390] p-4 rounded-lg shrink-0 w-fit">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <h3 className="text-xl sm:text-2xl text-[#293A4A]">{edu.degree}</h3>
                    {edu.status === 'ongoing' && (
                      <span className="bg-[#B3852D] text-white text-sm px-3 py-1 rounded-full">
                        Em andamento
                      </span>
                    )}
                  </div>
                  <p className="text-lg text-[#555555] mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-[#555555]">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}