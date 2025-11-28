import React, { useState } from 'react';
import { Menu, X, Phone, Leaf } from 'lucide-react';
import { Button } from './ui/Button';

interface NavLinkProps {
  href: string;
  children?: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavLink = ({ href, children, onClick }: NavLinkProps) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-gray-600 hover:text-med-green font-medium transition-colors cursor-pointer"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children, onClick }: NavLinkProps) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-gray-800 py-3 border-b border-gray-100 block"
  >
    {children}
  </a>
);

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

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logos Container */}
        <div className="flex items-center">
          {/* Logo MedSênior */}
          <div className="flex items-center gap-1 select-none">
            <div className="flex items-baseline leading-none">
              <span className="text-2xl lg:text-3xl font-bold text-med-green tracking-tighter">Med</span>
              <div className="relative">
                <span className="text-2xl lg:text-3xl font-normal text-med-lime tracking-tighter">Sênior</span>
                <div className="absolute -top-3 -right-2 transform rotate-12">
                  <Leaf className="w-4 h-4 lg:w-5 lg:h-5 text-med-lime fill-current" />
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-8 w-px bg-gray-200 mx-2 lg:mx-4"></div>

          {/* Logo MZF Imperial */}
          <div className="flex items-center gap-2 select-none">
            <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#4FABE8] to-[#2C68A6] flex items-center justify-center shrink-0 shadow-sm">
               <svg width="16" height="16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 15 C 50 15 30 75 25 85 H 45 L 50 50 L 55 85 H 75 C 70 75 50 15 50 15 Z" fill="white" />
               </svg>
            </div>
            <div className="flex flex-col justify-center leading-none">
               <span className="text-sm font-black text-[#006CB5] tracking-tight">MZF</span>
               <span className="text-[0.5rem] font-bold text-[#006CB5] tracking-widest">IMPERIAL</span>
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-6">
          <NavLink href="#beneficios" onClick={(e) => handleScroll(e, 'beneficios')}>Benefícios</NavLink>
          <NavLink href="#hospitais" onClick={(e) => handleScroll(e, 'hospitais')}>Rede</NavLink>
          <NavLink href="#planos" onClick={(e) => handleScroll(e, 'planos')}>Planos</NavLink>
          <NavLink href="#depoimentos" onClick={(e) => handleScroll(e, 'depoimentos')}>Depoimentos</NavLink>
          <NavLink href="#contato" onClick={(e) => handleScroll(e, 'contato')}>Fale Conosco</NavLink>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex gap-4 items-center">
           <div className="flex flex-col items-end mr-2 hidden lg:flex">
             <span className="text-xs text-gray-500">Fale com um especialista</span>
             <span className="text-med-green font-bold text-lg flex items-center gap-1">
               <Phone size={16} /> (11) 2362-1331
             </span>
           </div>
           <Button variant="primary" message="Olá, vim pelo site e quero falar com um especialista MedSênior." className="whitespace-nowrap">
             Solicitar Cotação
           </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600 p-2 ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t p-4 absolute w-full shadow-xl animate-fade-in-down">
          <div className="flex flex-col gap-2">
            <MobileNavLink href="#beneficios" onClick={(e) => handleScroll(e, 'beneficios')}>Benefícios</MobileNavLink>
            <MobileNavLink href="#hospitais" onClick={(e) => handleScroll(e, 'hospitais')}>Rede Credenciada</MobileNavLink>
            <MobileNavLink href="#planos" onClick={(e) => handleScroll(e, 'planos')}>Planos</MobileNavLink>
            <MobileNavLink href="#depoimentos" onClick={(e) => handleScroll(e, 'depoimentos')}>Depoimentos</MobileNavLink>
            <MobileNavLink href="#contato" onClick={(e) => handleScroll(e, 'contato')}>Fale Conosco</MobileNavLink>
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