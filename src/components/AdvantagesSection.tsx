import { Search, Settings, Shield } from "lucide-react";

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Search,
      title: "Diagnóstico Técnico Preciso",
      description: "Análise detalhada das estruturas para identificar pontos críticos e definir a melhor solução de impermeabilização."
    },
    {
      icon: Settings,
      title: "Tecnologia de Ponta",
      description: "Utilizamos os mais modernos sistemas e materiais de impermeabilização para garantir máxima eficiência."
    },
    {
      icon: Shield,
      title: "Garantia de Estanqueidade",
      description: "Oferecemos garantia total dos serviços executados, assegurando a proteção completa da sua estrutura."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Por que Escolher a Apex?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Somos especialistas. Nosso foco é entregar a melhor solução técnica com segurança e garantia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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