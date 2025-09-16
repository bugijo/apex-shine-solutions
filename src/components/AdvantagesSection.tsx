import { Shield, Clock, Award, Users, Wrench, CheckCircle } from "lucide-react";

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Todos os nossos funcionários são treinados em normas de segurança e utilizamos apenas produtos certificados e equipamentos de proteção individual."
    },
    {
      icon: Clock,
      title: "Pontualidade Absoluta",
      description: "Respeitamos rigorosamente os horários acordados, sem interferir na rotina da sua empresa. Flexibilidade total para atender suas necessidades."
    },
    {
      icon: Award,
      title: "Qualidade Certificada",
      description: "Processos padronizados, supervisão constante e avaliação contínua da qualidade garantem resultados consistentes e superiores."
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Nossa equipe passa por treinamentos regulares e tem experiência comprovada em limpeza industrial, predial e pós-obra."
    },
    {
      icon: Wrench,
      title: "Equipamentos Modernos",
      description: "Investimos constantemente em tecnologia de ponta: aspiradores industriais, enceradeiras, produtos químicos específicos e ferramentas especializadas."
    },
    {
      icon: CheckCircle,
      title: "Atendimento Personalizado",
      description: "Cada cliente tem necessidades únicas. Desenvolvemos soluções sob medida e mantemos comunicação constante para garantir sua satisfação."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Por que Escolher a Apex?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos mais que uma empresa de limpeza. Somos seu parceiro na construção de um ambiente 
            de trabalho impecável, seguro e profissional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1 animate-scale-in border border-border"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;