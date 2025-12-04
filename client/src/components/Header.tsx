import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#inicio"
            onClick={(e) => scrollToSection(e, '#inicio')}
            className="flex items-center gap-2"
            data-testid="link-logo"
          >
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className={`font-heading font-bold text-xl ${isScrolled ? 'text-foreground' : 'text-white'}`}>
              Huelic Service
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1" data-testid="nav-desktop">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover-elevate ${
                  isScrolled
                    ? 'text-foreground hover:text-primary'
                    : 'text-white/90 hover:text-white'
                }`}
                data-testid={`link-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
            <Button
              className="ml-4 bg-accent text-accent-foreground border-accent-border"
              onClick={() => {
                const contactSection = document.querySelector('#contacto');
                if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
              }}
              data-testid="button-cta-header"
            >
              Cotizar Ahora
            </Button>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            data-testid="button-menu-toggle"
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border" data-testid="nav-mobile">
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="px-4 py-3 text-foreground hover:bg-muted transition-colors"
                  data-testid={`link-nav-mobile-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4 pt-4">
                <Button
                  className="w-full bg-accent text-accent-foreground border-accent-border"
                  onClick={() => {
                    const contactSection = document.querySelector('#contacto');
                    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                  }}
                  data-testid="button-cta-mobile"
                >
                  Cotizar Ahora
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
