import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

// todo: remove mock functionality - replace with real testimonials from API
const testimonials = [
  {
    id: 1,
    quote: 'Huelic Service transformó completamente la experiencia de comedor en nuestra empresa. La calidad de los alimentos y el servicio profesional han incrementado la satisfacción de nuestros empleados.',
    author: 'María García',
    position: 'Directora de Recursos Humanos',
    company: 'Grupo Industrial MX',
  },
  {
    id: 2,
    quote: 'Llevamos 5 años trabajando con Huelic y la consistencia en la calidad es impresionante. Su compromiso con la higiene y nutrición nos da total confianza.',
    author: 'Carlos Rodríguez',
    position: 'Gerente General',
    company: 'Tecnología Avanzada S.A.',
  },
  {
    id: 3,
    quote: 'El servicio de catering para nuestros eventos corporativos siempre supera las expectativas. Profesionalismo y sabor excepcional en cada ocasión.',
    author: 'Ana Martínez',
    position: 'Coordinadora de Eventos',
    company: 'Constructora del Norte',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h3 className="font-heading font-bold text-2xl sm:text-3xl text-foreground mb-4">
          Lo Que Dicen Nuestros Clientes
        </h3>
      </div>

      <div className="relative max-w-4xl mx-auto px-4">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-full flex-shrink-0 px-4"
              >
                <Card className="p-8 md:p-12 text-center" data-testid={`card-testimonial-${testimonial.id}`}>
                  <Quote className="w-12 h-12 text-primary/20 mx-auto mb-6" />
                  <blockquote className="text-lg md:text-xl text-foreground mb-8 leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-heading font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-muted-foreground">
                      {testimonial.position}
                    </p>
                    <p className="text-primary font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 mt-8">
          <Button
            size="icon"
            variant="outline"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
            data-testid="button-testimonial-prev"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-border'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                data-testid={`button-testimonial-dot-${index}`}
              />
            ))}
          </div>

          <Button
            size="icon"
            variant="outline"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            data-testid="button-testimonial-next"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
