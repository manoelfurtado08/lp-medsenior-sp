import React from 'react';
import { HOSPITALS } from '../constants';
import { HeartPulse, MapPin, ShieldCheck } from 'lucide-react';
import { Button } from './ui/Button';

export const Network: React.FC = () => {
  return (
    <section id="hospitais" className="py-20 bg-med-deep text-white relative overflow-hidden">
      {/* Background Pattern - subtle branding */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-med-green/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Excelência Médica em <span className="text-med-lime">São Paulo</span>
            </h2>
            <div className="w-20 h-1 bg-med-green mb-8 rounded-full"></div>
            <p className="text-gray-200 text-lg mb-10 leading-relaxed font-light">
              Conte com os hospitais mais renomados da capital paulista. A MedSênior oferece acesso a uma rede credenciada de alta qualidade, garantindo segurança e o melhor tratamento quando você mais precisa.
            </p>
            <div className="hidden lg:block">
              <Button variant="whatsapp" className="shadow-xl shadow-med-green/20 border-none bg-med-green hover:bg-med-light hover:text-med-deep" message="Quais hospitais atendem perto do meu bairro?">
                Consultar Rede Completa
              </Button>
              <div className="flex items-center gap-2 mt-4 ml-1 text-med-light/60">
                <ShieldCheck size={16} />
                <span className="text-xs font-semibold tracking-wide uppercase">Rede Credenciada e Regulada ANS</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="grid gap-4">
              {HOSPITALS.map((hospital, index) => (
                <div 
                  key={index}
                  className={`flex items-center justify-between p-5 rounded-xl border transition-all duration-300 group ${
                    hospital.highlight 
                      ? 'bg-white/10 border-med-green/50 hover:bg-white/20 shadow-lg' 
                      : 'bg-white/5 border-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <div className={`p-3 rounded-full transition-colors ${hospital.highlight ? 'bg-med-green text-white' : 'bg-white/5 text-gray-400 group-hover:bg-med-green group-hover:text-white'}`}>
                      <HeartPulse size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white group-hover:text-med-lime transition-colors">{hospital.name}</h4>
                      <div className="flex items-center gap-1.5 text-sm text-gray-400 mt-0.5">
                        <MapPin size={14} />
                        <span>{hospital.location}</span>
                      </div>
                    </div>
                  </div>
                  {hospital.highlight && (
                    <span className="hidden sm:block text-[10px] font-bold text-med-deep bg-med-lime px-2 py-1 rounded tracking-wider uppercase">PREMIUM</span>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-10 lg:hidden text-center">
              <Button variant="whatsapp" fullWidth message="Quero saber a rede credenciada completa">
                Ver Rede Completa
              </Button>
              <div className="flex justify-center items-center gap-2 mt-4 text-gray-400">
                <ShieldCheck size={14} />
                <span className="text-xs font-medium">Rede Regulada ANS</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};