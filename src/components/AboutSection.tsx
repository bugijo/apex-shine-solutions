// Placeholder for future image import

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Placeholder for future sócios image */}
          <div className="relative animate-scale-in">
            <div className="relative overflow-hidden rounded-2xl shadow-strong bg-accent flex items-center justify-center h-[500px]">
              <p className="text-muted-foreground text-lg">Foto dos Sócios</p>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              A Parceria Certa para sua Empresa Crescer
            </h2>
            
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Nossa História
            </h3>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Com <strong>5 anos de experiência</strong>, a Apex Impermeabilização nasceu para atender à crescente 
                demanda por serviços técnicos e confiáveis em São Paulo. Nosso foco sempre foi a execução correta, 
                desde o preparo da superfície até a aplicação final do sistema.
              </p>
              
              <p>
                Hoje, estamos expandindo para projetos de maior complexidade, investindo em tecnologia e equipamentos 
                próprios para garantir um padrão de qualidade que nos diferencia no mercado. Somos um parceiro 
                estratégico para a segurança e valorização do seu patrimônio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;