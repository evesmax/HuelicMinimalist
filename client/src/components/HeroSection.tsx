import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroImage from '@assets/generated_images/gourmet_meal_professional_presentation.png';

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
          Alimentación de{' '}
          <span className="text-accent">Calidad</span>{' '}
          para tu Empresa
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          Más de 15 años brindando servicios de alimentación corporativa con los más altos estándares de calidad, higiene y nutrición.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-accent text-accent-foreground border-accent-border text-lg px-8 py-6 font-semibold"
            onClick={() => scrollToSection('#contacto')}
            data-testid="button-hero-cta"
          >
            Solicitar Cotización
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white/30 bg-white/10 backdrop-blur-sm text-lg px-8 py-6"
            onClick={() => scrollToSection('#servicios')}
            data-testid="button-hero-services"
          >
            Conocer Servicios
          </Button>
        </div>
      </div>

      <button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce"
        onClick={() => scrollToSection('#nosotros')}
        aria-label="Scroll down"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="w-10 h-10" />
      </button>
    </section>
  );
}
