import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-clean-facility.jpg";
import logoApex from "@/assets/logo-apex.png";

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
          alt="Instalações modernas e limpas"
          className="w-full h-full object-cover"
        />
        {/* Logo Background - Transparent */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={logoApex}
            alt=""
            className="w-[600px] h-[600px] object-contain opacity-15"
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance leading-tight">
          Eficiência que Protege: A Solução Definitiva para sua Estrutura
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-balance max-w-4xl mx-auto opacity-95 leading-relaxed">
          Serviços técnicos de impermeabilização que garantem a segurança e a longevidade do seu patrimônio. 
          Atendemos construtoras, condomínios e indústrias na Grande São Paulo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg"
            variant="secondary"
            onClick={() => scrollToSection("contato")}
            className="text-lg px-10 py-7 shadow-strong hover:shadow-medium transition-all duration-300 transform hover:scale-105"
          >
            Fale com um Especialista
          </Button>
          <Button 
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("servicos")}
            className="text-lg px-10 py-7 bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
          >
            Nossos Serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;