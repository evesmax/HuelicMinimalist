import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, UtensilsCrossed, Building2, PartyPopper, Truck } from 'lucide-react';
import kitchenImage from '@assets/generated_images/clean_professional_kitchen_interior.png';
import cateringImage from '@assets/generated_images/elegant_catering_buffet_display.png';
import ingredientsImage from '@assets/generated_images/fresh_healthy_food_ingredients.png';

const services = [
  {
    icon: Building2,
    title: 'Comedores Industriales',
    description: 'Administración integral de comedores para empresas, con menús personalizados y servicio profesional.',
    image: kitchenImage,
  },
  {
    icon: PartyPopper,
    title: 'Catering para Eventos',
    description: 'Servicio de banquetes y catering para eventos corporativos, conferencias y celebraciones empresariales.',
    image: cateringImage,
  },
  {
    icon: UtensilsCrossed,
    title: 'Menús Saludables',
    description: 'Opciones nutritivas y balanceadas diseñadas para promover el bienestar de tus colaboradores.',
    image: ingredientsImage,
  },
  {
    icon: Truck,
    title: 'Servicio de Lunch',
    description: 'Entrega de alimentos preparados directamente a tus instalaciones, listos para servir.',
    image: cateringImage,
  },
];

export default function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    cardsRef.current.forEach((card, index) => {
      if (card) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => new Set(prev).add(index));
            }
          },
          { threshold: 0.2 }
        );
        observer.observe(card);
        observers.push(observer);
      }
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <section id="servicios" className="py-20 md:py-32" data-testid="section-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ofrecemos soluciones integrales de alimentación adaptadas a las necesidades específicas de cada empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => { cardsRef.current[index] = el; }}
              className={`transition-all duration-700 ${
                visibleCards.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card
                className="overflow-visible group hover-elevate"
                data-testid={`card-service-${index}`}
              >
                <div className="relative h-48 md:h-56 overflow-hidden rounded-t-md">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="gap-2 p-0 text-primary hover:text-primary/80"
                    onClick={() => console.log(`Learn more about ${service.title}`)}
                    data-testid={`button-service-more-${index}`}
                  >
                    Más información
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
