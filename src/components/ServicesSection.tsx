import { Building2, Sparkles, HardHat } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: "Limpeza e Conservação Predial",
      description: "Mantemos sua empresa impecável com rotinas de limpeza personalizadas, conservação de áreas comuns, gestão de suprimentos e equipes treinadas para garantir um ambiente de trabalho valorizado e sempre pronto para receber clientes e colaboradores."
    },
    {
      icon: Sparkles,
      title: "Tratamento de Pisos",
      description: "Somos especialistas na revitalização e tratamento de pisos industriais e comerciais. Usamos equipamentos de ponta e produtos específicos para cada superfície, garantindo máxima durabilidade, resistência e um acabamento espelhado que valoriza seu espaço."
    },
    {
      icon: HardHat,
      title: "Limpeza Pós-Obra",
      description: "Preparamos seu novo espaço para a ocupação. Removemos resíduos pesados, poeira fina e manchas de rejunte ou tinta, entregando o imóvel em perfeitas condições de uso, com agilidade e atenção aos detalhes para que sua única preocupação seja começar a operar."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Soluções Completas para o seu Negócio
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-center">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;