import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      company: "Indústria Metalúrgica São Paulo",
      role: "Gerente de Facilities",
      content: "A Apex transformou completamente a limpeza da nossa planta industrial. Equipe profissional, pontual e com equipamentos de primeira linha. Recomendo sem hesitar.",
      rating: 5
    },
    {
      name: "João Santos",
      company: "Centro de Distribuição Ribeirão",
      role: "Diretor Operacional",
      content: "Trabalho excepcional no tratamento dos nossos pisos. Ficaram espelhados e o ambiente muito mais profissional. Atendimento impecável do início ao fim.",
      rating: 5
    },
    {
      name: "Ana Costa",
      company: "Empresa de Tecnologia Innovation",
      role: "Coordenadora Administrativa",
      content: "Serviço de limpeza pós-obra perfeito. Entregaram nosso novo escritório impecável, dentro do prazo e com atenção a cada detalhe. Parceria de confiança.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Depoimentos reais de empresas que confiam na qualidade dos nossos serviços.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="shadow-medium hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-primary font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;