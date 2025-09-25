import { Shield, Droplet, Waves } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Shield,
      title: "Impermeabilização de Lajes e Coberturas",
      description: "Proteção completa para lajes, telhados e áreas expostas. Aplicamos os mais modernos sistemas de mantas asfálticas e membranas líquidas para garantir estanqueidade total e evitar infiltrações."
    },
    {
      icon: Droplet,
      title: "Tratamento de Infiltrações",
      description: "Diagnóstico preciso e solução definitiva para infiltrações em garagens, subsolos, poços de elevador e paredes. Utilizamos técnicas de injeção de resinas e cristalizantes para barrar a umidade na fonte."
    },
    {
      icon: Waves,
      title: "Vedações em Áreas Molhadas",
      description: "Sistemas de impermeabilização flexíveis e de alta performance para áreas como piscinas, reservatórios, banheiros e cozinhas industriais, assegurando a integridade da estrutura."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos Serviços de Impermeabilização
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