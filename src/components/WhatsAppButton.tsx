import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "551194083159"; // Número no formato internacional  
    const message = "Olá! Gostaria de saber mais sobre os serviços da Apex Impermeabilização.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-strong hover:shadow-medium transition-all duration-300 transform hover:scale-110 animate-pulse"
        size="icon"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </Button>
    </div>
  );
};

export default WhatsAppButton;