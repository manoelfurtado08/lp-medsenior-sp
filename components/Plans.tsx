import React, { useState } from 'react';
import { PLANS } from '../constants';
import { Check, ArrowRight, ShieldCheck, Lock } from 'lucide-react';
import { Button } from './ui/Button';

export const Plans: React.FC = () => {
  const [isPME, setIsPME] = useState(false);

  return (
    <section id="planos" className="py-20 bg-med-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Escolha o Plano Ideal para Você
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Valores transparentes e coberturas completas para sua tranquilidade.
          </p>
          
          {/* Toggle Switch */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <span className={`font-bold ${!isPME ? 'text-med-green' : 'text-gray-400'}`}>Individual</span>
            <button 
              onClick={() => setIsPME(!isPME)}
              className="w-16 h-8 bg-med-green rounded-full p-1 relative transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-med-green"
              aria-label="Alternar entre Individual e PME"
            >
              <div 
                className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isPME ? 'translate-x-8' : 'translate-x-0'}`}
              ></div>
            </button>
            <span className={`font-bold ${isPME ? 'text-med-green' : 'text-gray-400'}`}>PME (Inclusive MEI)</span>
          </div>
          
          {isPME && (
            <div className="bg-yellow-50 text-yellow-800 px-4 py-2 rounded-lg inline-block text-sm mb-8 border border-yellow-200">
              Visualizando condições para CNPJ. Consulte elegibilidade com nossos especialistas.
            </div>
          )}
        </div>

        {/* Updated Grid for Plans */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch mb-8">
          {PLANS.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl p-5 shadow-xl flex flex-col transition-all duration-300 hover:shadow-2xl ${
                plan.recommended 
                  ? 'border-2 border-med-green ring-4 ring-med-green/10 transform xl:-translate-y-2 z-10' 
                  : 'border border-gray-100 hover:-translate-y-1'
              }`}
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-med-dark mb-1">{plan.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-gray-500 font-medium text-sm">{plan.tagline}</span>
                  {plan.ans && (
                    <span className="text-[10px] bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full">
                      ANS: {plan.ans}
                    </span>
                  )}
                </div>
                
                {/* Price Table within Card */}
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 space-y-3">
                  {plan.prices.map((price, idx) => (
                    <div key={idx} className={`flex justify-between items-center ${idx !== plan.prices.length - 1 ? 'border-b border-gray-200 pb-2' : ''}`}>
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">{price.range}</span>
                      <span className="text-lg font-bold text-med-green">{price.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-grow mb-6 space-y-2">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="mt-1 min-w-[14px]">
                      <Check className="w-3.5 h-3.5 text-med-green" strokeWidth={3} />
                    </div>
                    <span className="text-gray-600 text-sm leading-snug">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <Button 
                  variant="outline"
                  fullWidth 
                  className="border-med-green text-med-green hover:bg-med-green hover:text-white uppercase text-sm tracking-wide font-bold py-2"
                  message={`Olá, gostaria de contratar o plano ${plan.name} (${isPME ? 'PME' : 'Individual'}).`}
                  trackingEvent="InitiateCheckout"
                  trackingData={{ 
                    content_name: plan.name, 
                    content_category: isPME ? 'PME' : 'Individual',
                    currency: 'BRL',
                    value: 0.00 // Opcional: pode tentar extrair o valor do texto se desejar precisão
                  }}
                >
                  Quero Este
                </Button>
                <div className="flex justify-center gap-3 mt-3 opacity-60">
                   <div className="flex items-center gap-1">
                      <ShieldCheck size={12} className="text-gray-400" />
                      <span className="text-[10px] text-gray-400 font-semibold">Regulado ANS</span>
                   </div>
                   <div className="flex items-center gap-1">
                      <Lock size={12} className="text-gray-400" />
                      <span className="text-[10px] text-gray-400 font-semibold">Site Seguro</span>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Prominent CTA Block */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-xl border border-med-light relative overflow-hidden text-center max-w-4xl mx-auto transform transition-all hover:scale-[1.01] duration-300">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Precisa de ajuda para escolher?
              </h3>
              <p className="text-lg text-gray-600 max-w-xl">
                Nossos consultores podem explicar as diferenças entre cada categoria e encontrar o melhor custo-benefício para você.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-auto flex flex-col items-center gap-3">
              <Button 
                variant="whatsapp" 
                className="px-8 py-4 text-lg w-full shadow-lg shadow-med-green/20" 
                message="Olá, gostaria de ajuda para escolher meu plano MedSênior."
                trackingEvent="Contact"
                trackingData={{ content_name: 'CTA Ajuda Escolha' }}
              >
                Falar com Consultor <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <div className="flex items-center gap-3 opacity-70">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-gray-500" />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Regulado ANS</span>
                </div>
                <div className="w-px h-3 bg-gray-300"></div>
                <div className="flex items-center gap-1.5">
                  <Lock size={14} className="text-gray-500" />
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Site Seguro</span>
                </div>
              </div>
            </div>
          </div>
          {/* Decor background */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-med-green/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-med-green/5 rounded-full blur-2xl"></div>
        </div>

      </div>
    </section>
  );
};