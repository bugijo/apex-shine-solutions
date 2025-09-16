import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Nossa equipe entrará em contato em breve.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Solicite um Orçamento Sem Compromisso
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <Card className="shadow-medium animate-scale-in">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Nome Completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                
                <div>
                  <Input
                    name="phone"
                    placeholder="Telefone/WhatsApp"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                
                <div>
                  <Input
                    name="company"
                    placeholder="Nome da Empresa"
                    value={formData.company}
                    onChange={handleChange}
                    className="h-12"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Mensagem"
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[120px] resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg"
                  size="lg"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="animate-slide-up space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Vamos conversar!
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Nossa equipe está pronta para entender sua necessidade e propor a melhor solução.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                  <p className="text-muted-foreground">(16) 99348-9462</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                  <p className="text-muted-foreground">contato@apexsolucoes.ind.br</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Endereço</h4>
                  <p className="text-muted-foreground">
                    Av. Presidente Vargas, 2121, Sala 1505<br />
                    Ed. Corporate Financial Center<br />
                    Ribeirão Preto - SP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;