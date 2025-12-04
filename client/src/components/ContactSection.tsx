import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Dirección',
    content: 'Av. Principal #123, Col. Centro, Ciudad de México, CP 06000',
  },
  {
    icon: Phone,
    title: 'Teléfono',
    content: '+52 (55) 1234-5678',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'contacto@huelicservice.com',
  },
  {
    icon: Clock,
    title: 'Horario',
    content: 'Lunes a Viernes: 8:00 AM - 6:00 PM',
  },
];

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // todo: replace with real API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: 'Mensaje enviado',
      description: 'Nos pondremos en contacto contigo pronto.',
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contacto" className="py-20 md:py-32" data-testid="section-contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
            <span className="text-primary">Contáctanos</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos listos para atender las necesidades de alimentación de tu empresa. Solicita una cotización sin compromiso.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h3 className="font-heading font-bold text-2xl text-foreground mb-8">
              Información de Contacto
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex gap-4" data-testid={`contact-info-${info.title.toLowerCase()}`}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                    <p className="text-muted-foreground">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="font-heading font-semibold text-lg text-foreground mb-4">
                Síguenos
              </h4>
              <div className="flex gap-3">
                {['Facebook', 'LinkedIn', 'Instagram'].map((social) => (
                  <Button
                    key={social}
                    size="icon"
                    variant="outline"
                    onClick={() => console.log(`Navigate to ${social}`)}
                    data-testid={`button-social-${social.toLowerCase()}`}
                  >
                    <span className="sr-only">{social}</span>
                    <span className="text-xs font-bold">{social[0]}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <Card className="p-6 md:p-8 lg:p-10">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-6">
              Solicita tu Cotización
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                    data-testid="input-name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                    data-testid="input-email"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+52 (55) 1234-5678"
                    data-testid="input-phone"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nombre de tu empresa"
                    data-testid="input-company"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tus necesidades de alimentación..."
                  rows={5}
                  required
                  data-testid="input-message"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent text-accent-foreground border-accent-border gap-2"
                disabled={isSubmitting}
                data-testid="button-submit-contact"
              >
                {isSubmitting ? (
                  <>
                    <CheckCircle className="w-5 h-5 animate-pulse" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Solicitud
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
