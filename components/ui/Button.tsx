import React from 'react';
import { Phone } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../constants';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
  className?: string;
  fullWidth?: boolean;
  onClick?: () => void;
  message?: string;
  // Novas props para rastreamento
  trackingEvent?: string; // Ex: 'Contact', 'Lead', 'InitiateCheckout'
  trackingData?: Record<string, any>; // Ex: { content_name: 'Plano SP1' }
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  fullWidth = false,
  onClick,
  message = "Olá, gostaria de mais informações sobre o plano MedSênior SP.",
  trackingEvent = 'Contact', // Padrão é 'Contact' para botões de ação
  trackingData = {}
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-md text-lg";
  
  const variants = {
    primary: "bg-med-green hover:bg-med-dark text-white border-2 border-transparent",
    secondary: "bg-white text-med-green hover:bg-gray-50 border-2 border-transparent",
    outline: "bg-transparent text-white border-2 border-white hover:bg-white/10",
    whatsapp: "bg-[#25D366] hover:bg-[#128C7E] text-white border-2 border-transparent"
  };

  const widthClass = fullWidth ? "w-full" : "";

  const handleWhatsappClick = () => {
    // Dispara o evento do Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', trackingEvent, {
        content_name: 'Botão WhatsApp',
        content_category: variant,
        ...trackingData
      });
    }

    if (onClick) {
      onClick();
    }
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      onClick={handleWhatsappClick}
    >
      {variant === 'whatsapp' && <Phone className="w-5 h-5 mr-2 fill-current" />}
      {children}
    </button>
  );
};