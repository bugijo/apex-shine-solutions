import beforeAfterImage from "@/assets/before-after-cleaning.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="relative overflow-hidden rounded-2xl shadow-strong">
              <img
                src={beforeAfterImage}
                alt="Antes e depois da limpeza profissional - transformação de ambientes"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
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
                Com <strong>5 anos de experiência no mercado</strong>, a Apex Soluções em Facilities foi fundada em Varginha para atender à crescente 
                demanda por serviços de limpeza profissionais e eficientes no Sul de Minas. Começamos com pequenos 
                contratos e, com um foco incansável na qualidade e tecnologia, expandimos nossa 
                capacidade para atender grandes plantas industriais.
              </p>
              
              <p>
                Hoje somos referência em <strong>limpeza predial profissional</strong>, com mais de 
                <strong>50 empresas atendidas</strong> e uma frota de equipamentos modernos que garante 
                resultados superiores. Nossa equipe especializada passa por treinamentos constantes em 
                segurança, técnicas de limpeza e atendimento ao cliente.
              </p>
              
              <p>
                Entendemos que um ambiente limpo e bem conservado é crucial para a produtividade, segurança 
                e imagem de qualquer negócio. Nosso compromisso é ser mais que um fornecedor: somos um 
                parceiro estratégico para o sucesso e a imagem do seu negócio.
              </p>
            </div>

            <div className="mt-8 p-6 bg-accent rounded-xl border-l-4 border-l-primary">
              <p className="text-foreground font-medium italic">
                "Nossa missão é transformar ambientes de trabalho através da excelência em limpeza e 
                conservação, contribuindo para o crescimento e sucesso dos nossos parceiros comerciais."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;