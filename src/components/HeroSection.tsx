import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-warehouse.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Centro de distribuição moderno com pisos espelhados"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
          Eficiência que Brilha: A Solução Definitiva em Facilities para sua Empresa
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-balance max-w-3xl mx-auto opacity-95">
          Serviços profissionais de limpeza e conservação que elevam o padrão do seu negócio. 
          Atendemos indústrias, centros de distribuição e empresas em toda a região de Ribeirão Preto.
        </p>
        <Button 
          size="lg"
          variant="secondary"
          onClick={() => scrollToSection("contato")}
          className="text-lg px-8 py-6 shadow-strong hover:shadow-medium transition-all duration-300 transform hover:scale-105"
        >
          Fale com um Especialista
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;