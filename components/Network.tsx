import React, { useState } from 'react';
import { HOSPITALS_BY_PLAN } from '../constants';
import { HeartPulse, ShieldCheck, Search } from 'lucide-react';
import { Button } from './ui/Button';

export const Network: React.FC = () => {
  const [activePlanIndex, setActivePlanIndex] = useState(0);

  return (
    <section id="hospitais" className="py-20 bg-med-deep text-white relative overflow-hidden">
      {/* Background Pattern - subtle branding */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-med-green/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Rede Credenciada <span className="text-med-lime">Por Plano</span>
          </h2>
          <div className="w-24 h-1 bg-med-green mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto font-light">
            Selecione o plano abaixo para ver a lista completa de hospitais credenciados. 
            A MedSênior oferece excelência e cobertura nos melhores hospitais de São Paulo.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {HOSPITALS_BY_PLAN.map((category, index) => (
            <button
              key={index}
              onClick={() => setActivePlanIndex(index)}
              className={`px-6 py-3 rounded-full text-sm lg:text-base font-bold transition-all duration-300 transform ${
                activePlanIndex === index
                  ? 'bg-med-lime text-med-deep scale-105 shadow-lg shadow-med-lime/20'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
              }`}
            >
              {category.planName}
            </button>
          ))}
        </div>

        {/* Hospital List */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6 lg:p-8 backdrop-blur-sm max-w-5xl mx-auto shadow-2xl">
          <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
             <Search className="text-med-lime" />
             <h3 className="text-xl lg:text-2xl font-bold text-white">
               Hospitais do Plano <span className="text-med-lime">{HOSPITALS_BY_PLAN[activePlanIndex].planName}</span>
             </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {HOSPITALS_BY_PLAN[activePlanIndex].hospitals.map((hospital, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 group"
              >
                <div className="mt-1 p-2 rounded-full bg-med-green/20 text-med-lime group-hover:bg-med-lime group-hover:text-med-deep transition-colors">
                  <HeartPulse size={20} strokeWidth={2} />
                </div>
                <span className="text-gray-200 font-medium leading-tight group-hover:text-white transition-colors">
                  {hospital}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10">
            <div className="flex items-center gap-2 text-med-light/60">
              <ShieldCheck size={18} />
              <span className="text-sm font-semibold tracking-wide uppercase">Rede Regulada ANS</span>
            </div>
            <Button variant="whatsapp" className="w-full md:w-auto shadow-lg shadow-med-green/20 border-none bg-med-green hover:bg-med-light hover:text-med-deep" message={`Quais hospitais atendem no plano ${HOSPITALS_BY_PLAN[activePlanIndex].planName}?`}>
              Consultar Disponibilidade
            </Button>
          </div>
        </div>

      </div>
      
      {/* CSS for custom scrollbar */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </section>
  );
};