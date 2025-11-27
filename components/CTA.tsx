import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-med-deep relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-med-green/20 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            Pronto para experimentar a <span className="text-med-lime">MedSênior?</span>
          </h2>
          
          <p className="text-xl text-med-light/90 mb-10 leading-relaxed font-light">
            Não espere mais para cuidar da sua saúde com quem é especialista na terceira idade. 
            Solicite uma cotação personalizada e descubra como podemos cuidar de você.
          </p>

          <div className="flex flex-col items-center gap-6">
            <Button 
              variant="whatsapp" 
              className="px-10 py-5 text-xl shadow-2xl shadow-green-900/40 transform hover:-translate-y-1"
              message="Olá, vi o site e estou pronto para cotar meu plano MedSênior."
            >
              Falar com Especialista no WhatsApp <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
            
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <ShieldCheck size={16} />
              <span className="uppercase tracking-wider font-semibold">Cotação Segura e Sem Compromisso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};