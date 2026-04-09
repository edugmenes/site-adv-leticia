import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { 
  Scale, 
  FileText, 
  Users, 
  Gavel, 
  FileCheck, 
  MessageSquare 
} from 'lucide-react';

const services = [
  {
    icon: Scale,
    title: 'Contencioso Trabalhista',
    description: 'Representação em ações judiciais trabalhistas, defesa de direitos e acompanhamento processual completo.',
  },
  {
    icon: Gavel,
    title: 'Audiências',
    description: 'Participação em audiências iniciais, de instrução e julgamento, com preparação técnica e estratégica.',
  },
  {
    icon: FileText,
    title: 'Elaboração de Peças',
    description: 'Redação de petições iniciais, contestações, recursos, memoriais e demais documentos processuais.',
  },
  {
    icon: Users,
    title: 'Consultoria Trabalhista',
    description: 'Assessoria preventiva para empresas e empregados em questões relacionadas ao Direito do Trabalho.',
  },
  {
    icon: FileCheck,
    title: 'Análise Contratual',
    description: 'Revisão e elaboração de contratos de trabalho, acordos e documentos relacionados à relação laboral.',
  },
  {
    icon: MessageSquare,
    title: 'Mediação e Conciliação',
    description: 'Negociação extrajudicial e mediação de conflitos trabalhistas buscando soluções consensuais.',
  },
];

export function Services() {
  const [ref, isInView] = useInView();

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl text-[#293A4A] mb-4">Serviços</h2>
          <div className="w-20 h-1 bg-[#B3852D] mx-auto mb-4"></div>
          <p className="text-lg text-[#555555] max-w-2xl mx-auto">
            Soluções jurídicas especializadas em Direito do Trabalho, 
            com foco em excelência técnica e atendimento personalizado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="bg-[#578390]/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-[#578390]" />
                </div>
                <h3 className="text-xl text-[#293A4A] mb-3">{service.title}</h3>
                <p className="text-[#555555] leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}