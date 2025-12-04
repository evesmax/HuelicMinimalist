import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, ShieldCheck, Apple, FileText } from 'lucide-react';

const values = [
  {
    icon: Award,
    title: 'Calidad y Frescura',
    description: 'Utilizamos ingredientes frescos y de alta calidad, seleccionados cuidadosamente para garantizar que cada plato sea una experiencia memorable.',
  },
  {
    icon: ShieldCheck,
    title: 'Higiene',
    description: 'Cumplimos con los más estrictos protocolos sanitarios y certificaciones internacionales de seguridad alimentaria.',
  },
  {
    icon: Apple,
    title: 'Nutrición',
    description: 'Menús balanceados diseñados por nutriólogos profesionales para el bienestar de tus colaboradores.',
  },
];

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="nosotros"
      className="py-20 md:py-32 bg-muted"
      data-testid="section-about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
            ¿Por Qué <span className="text-primary">Elegirnos</span>?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos una compañía especializada en servicios de alimentación y comedores industriales, 
            corporativos y ejecutivos, rígidos bajo los estándares más estrictos de calidad e higiene.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {values.map((value, index) => (
            <Card
              key={value.title}
              className={`p-8 lg:p-10 text-center hover-elevate transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              data-testid={`card-value-${value.title.toLowerCase()}`}
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="gap-2"
            onClick={() => console.log('Opening quality policy document')}
            data-testid="button-quality-policy"
          >
            <FileText className="w-5 h-5" />
            Ver Política de Calidad
          </Button>
        </div>
      </div>
    </section>
  );
}
