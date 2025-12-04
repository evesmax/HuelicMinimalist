import TestimonialsSection from './TestimonialsSection';

// todo: remove mock functionality - replace with real client logos
const clientLogos = [
  { name: 'Grupo Industrial MX', initials: 'GI' },
  { name: 'Tecnología Avanzada', initials: 'TA' },
  { name: 'Constructora del Norte', initials: 'CN' },
  { name: 'Farmacéutica Nacional', initials: 'FN' },
  { name: 'Automotriz Centro', initials: 'AC' },
  { name: 'Alimentos Premium', initials: 'AP' },
  { name: 'Logística Express', initials: 'LE' },
  { name: 'Energía Sustentable', initials: 'ES' },
];

export default function ClientsSection() {
  return (
    <section id="clientes" className="py-20 md:py-32 bg-muted" data-testid="section-clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
            Confían en <span className="text-primary">Nosotros</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Empresas líderes en diversos sectores confían en nuestros servicios de alimentación.
          </p>
        </div>

        <TestimonialsSection />

        <div className="mt-20">
          <h3 className="font-heading font-semibold text-xl text-center text-muted-foreground mb-12">
            Empresas que Atendemos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {clientLogos.map((client, index) => (
              <div
                key={client.name}
                className="bg-background rounded-md p-6 lg:p-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover-elevate"
                data-testid={`logo-client-${index}`}
              >
                <div className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-3">
                    <span className="font-heading font-bold text-xl md:text-2xl text-muted-foreground">
                      {client.initials}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    {client.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
