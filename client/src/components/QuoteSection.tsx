import { Quote } from 'lucide-react';

export default function QuoteSection() {
  return (
    <section className="py-16 md:py-24 bg-primary" data-testid="section-quote">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Quote className="w-12 h-12 text-accent mx-auto mb-6 opacity-80" />
        <blockquote className="font-heading text-2xl sm:text-3xl md:text-4xl text-primary-foreground leading-relaxed mb-6 italic">
          "Encuentra algo que te apasione y mantente tremendamente interesado en él"
        </blockquote>
        <cite className="text-accent font-heading font-semibold text-lg md:text-xl not-italic">
          — Julia Child
        </cite>
      </div>
    </section>
  );
}
