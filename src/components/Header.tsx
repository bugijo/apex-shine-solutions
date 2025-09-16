import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logoApex from "@/assets/logo-apex.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-soft border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src={logoApex} 
              alt="Apex Soluções em Facilities" 
              className="h-10 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>

          <Button 
            variant="default"
            onClick={() => scrollToSection("contato")}
            className="hidden md:inline-flex"
          >
            Fale Conosco
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;