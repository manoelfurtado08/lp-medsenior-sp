import React, { useState } from 'react';
import { Menu, X, Phone, Leaf } from 'lucide-react';
import { Button } from './ui/Button';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100; // Height of sticky header + buffer
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  const NavLink = ({ href, children, id }: { href: string; children: React.ReactNode; id: string }) => (
    <a 
      href={href} 
      onClick={(e) => handleScroll(e, id)}
      className="text-gray-600 hover:text-med-green font-medium transition-colors cursor-pointer"
    >
      {children}
    </a>
  );

  const MobileNavLink = ({ href, children, id }: { href: string; children: React.ReactNode; id: string }) => (
    <a 
      href={href} 
      onClick={(e) => handleScroll(e, id)}
      className="text-gray-800 py-3 border-b border-gray-100 block"
    >
      {children}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo MedSênior */}
        <div className="flex items-center gap-1 select-none">
          <div className="flex items-baseline leading-none">
            <span className="text-3xl font-bold text-med-green tracking-tighter">Med</span>
            <div className="relative">
              <span className="text-3xl font-normal text-med-lime tracking-tighter">Sênior</span>
              <div className="absolute -top-3 -right-2 transform rotate-12">
                <Leaf className="w-5 h-5 text-med-lime fill-current" />
              </div>
            </div>
          </div>
          <div className="hidden lg:flex h-8 w-px bg-gray-200 mx-3"></div>
          <span className="hidden lg:block text-xs text-gray-400 font-semibold tracking-widest uppercase mt-1">
            São Paulo
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#beneficios" id="beneficios">Benefícios</NavLink>
          <NavLink href="#hospitais" id="hospitais">Rede Credenciada</NavLink>
          <NavLink href="#planos" id="planos">Planos</NavLink>
          <NavLink href="#depoimentos" id="depoimentos">Depoimentos</NavLink>
          <NavLink href="#contato" id="contato">Fale Conosco</NavLink>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex gap-4 items-center">
           <div className="flex flex-col items-end mr-2">
             <span className="text-xs text-gray-500">Fale com um especialista</span>
             <span className="text-med-green font-bold text-lg flex items-center gap-1">
               <Phone size={16} /> (11) 2362-1331
             </span>
           </div>
           <Button variant="primary" message="Olá, vim pelo site e quero falar com um especialista MedSênior.">
             Solicitar Cotação
           </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t p-4 absolute w-full shadow-xl animate-fade-in-down">
          <div className="flex flex-col gap-2">
            <MobileNavLink href="#beneficios" id="beneficios">Benefícios</MobileNavLink>
            <MobileNavLink href="#hospitais" id="hospitais">Rede Credenciada</MobileNavLink>
            <MobileNavLink href="#planos" id="planos">Planos</MobileNavLink>
            <MobileNavLink href="#contato" id="contato">Fale Conosco</MobileNavLink>
            <div className="pt-4">
              <Button fullWidth variant="whatsapp" onClick={() => setIsOpen(false)}>
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};