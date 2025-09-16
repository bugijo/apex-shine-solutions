import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const StatsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [counts, setCounts] = useState({
    companies: 0,
    years: 0,
    employees: 0,
    satisfaction: 0,
  });

  const finalCounts = {
    companies: 50,
    years: 8,
    employees: 25,
    satisfaction: 98,
  };

  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounts({
          companies: Math.floor(finalCounts.companies * progress),
          years: Math.floor(finalCounts.years * progress),
          employees: Math.floor(finalCounts.employees * progress),
          satisfaction: Math.floor(finalCounts.satisfaction * progress),
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounts(finalCounts);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [inView]);

  const stats = [
    {
      number: counts.companies,
      suffix: "+",
      label: "Empresas Atendidas",
      description: "Confiança conquistada"
    },
    {
      number: counts.years,
      suffix: "+",
      label: "Anos de Experiência",
      description: "Tradição em qualidade"
    },
    {
      number: counts.employees,
      suffix: "+",
      label: "Colaboradores",
      description: "Equipe especializada"
    },
    {
      number: counts.satisfaction,
      suffix: "%",
      label: "Satisfação",
      description: "Clientes recomendariam"
    }
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Números que Falam por Si
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Nossa trajetória de sucesso construída com dedicação, qualidade e confiança mútua.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-5xl md:text-6xl font-bold mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-xl font-semibold mb-2">
                {stat.label}
              </div>
              <div className="text-sm opacity-80">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;