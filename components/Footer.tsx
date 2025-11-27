import React from 'react';
import { Phone, MapPin, CheckCircle2, ShieldCheck, Lock } from 'lucide-react';
import { Button } from './ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-med-deep text-white pt-16 pb-8 border-t-4 border-med-lime">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          
          {/* MedSênior Logo */}
          <div className="mb-6">
             <span className="text-4xl font-bold text-white tracking-tighter">Med</span>
             <span className="text-4xl font-normal text-med-lime tracking-tighter">Sênior</span>
          </div>

          <p className="text-white/80 mb-10 text-lg leading-relaxed font-light">
            Especialistas em cuidar da geração que construiu o futuro. Planos de saúde com foco em medicina preventiva e envelhecimento ativo.
          </p>

          {/* MZF Broker Card - Updated Visuals */}
          <div className="w-full bg-white rounded-2xl p-6 border border-gray-200 mb-10 text-left relative overflow-hidden shadow-xl flex flex-col items-center">
             <div className="w-full text-left">
               <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 border-b border-gray-100 pb-2">Corretora Autorizada</p>
             </div>
             
             {/* MZF Logo Container */}
             <div className="flex items-center gap-4 relative z-10 mb-2">
                {/* Logo Icon */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#4FABE8] to-[#2C68A6] flex items-center justify-center shrink-0 shadow-md">
                   {/* White stylized peak shape */}
                   <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50 15 C 50 15 30 75 25 85 H 45 L 50 50 L 55 85 H 75 C 70 75 50 15 50 15 Z" fill="white" />
                   </svg>
                </div>
                
                {/* Logo Text */}
                <div className="flex flex-col justify-center text-left">
                   <h4 className="text-3xl font-black text-[#006CB5] leading-none tracking-tighter">MZF</h4>
                   <span className="text-[#006CB5] font-bold text-lg tracking-[0.15em] leading-none mt-0.5">IMPERIAL</span>
                   <p className="text-xs text-[#008ba3] mt-1 font-semibold tracking-wide">Corretora de Seguros</p>
                </div>
             </div>

             <div className="mt-5 flex items-center gap-2 text-sm text-gray-600 font-medium z-10 relative bg-gray-50 px-4 py-2 rounded-lg inline-flex">
                <CheckCircle2 size={16} className="text-med-green" />
                <span>Registro SUSEP Ativo</span>
             </div>
          </div>

          {/* Sales Center */}
          <div className="w-full text-left mb-10">
             <h3 className="text-xl font-bold text-white mb-6">Central de Vendas</h3>
             
             <div className="flex items-center gap-4 mb-6 bg-white/10 p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                <div className="bg-med-green p-3 rounded-lg text-white shadow-lg">
                   <Phone size={24} />
                </div>
                <div>
                   <p className="text-2xl font-bold text-white tracking-wide">(11) 2362-1331</p>
                   <p className="text-sm text-white/70">Atendimento Seg. a Sex. 9h às 18h</p>
                </div>
             </div>

             <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                <div className="bg-med-green p-3 rounded-lg text-white shadow-lg">
                   <MapPin size={24} />
                </div>
                <div>
                   <p className="font-bold text-white text-lg">São Paulo - SP</p>
                   <p className="text-sm text-white/70">Atendimento exclusivo para capital e região.</p>
                </div>
             </div>
          </div>

          <Button 
            fullWidth 
            variant="whatsapp" 
            className="py-5 text-xl font-bold uppercase tracking-wide bg-med-accent hover:bg-[#1DA851] border-none shadow-2xl shadow-green-900/50 transform hover:-translate-y-1"
          >
             Falar com Especialista
          </Button>

        </div>

        {/* Copyright & Trust Badges */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Regulado ANS</span>
            </div>
            <div className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <Lock className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Site Seguro</span>
            </div>
          </div>

          <div className="text-center text-white/50 text-xs">
            <p className="mb-2">© {new Date().getFullYear()} MZF Imperial Corretora de Seguros - CNPJ: 12.534.809/0001-82</p> 
            <p>MedSênior São Paulo - Vendas Online</p>
          </div>
        </div>
      </div>
    </footer>
  );
};