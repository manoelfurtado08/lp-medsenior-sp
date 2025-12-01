import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Check, ShieldCheck, Lock } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

export const Hero: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rastreamento do Pixel (Evento Lead)
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Formulário Hero',
        content_category: 'Cotação',
        value: 0.00, // Pode atribuir um valor estimado para o lead se quiser
        currency: 'BRL'
      });
    }

    const text = `Olá! Me chamo ${formData.name}. Meu email é ${formData.email} e telefone ${formData.phone}. Gostaria de simular o plano MedSênior.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative bg-med-deep pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
      
      {/* Background Decor - Deep Green Gradient */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-med-green/20 to-med-deep pointer-events-none"></div>
      
      {/* Circle Decor */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-med-green/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left text-white">
            <div className="inline-block border border-med-lime/50 rounded-full px-4 py-1.5 mb-8 bg-white/5 backdrop-blur-sm">
               <span className="text-sm font-bold tracking-wide uppercase flex items-center gap-2 text-med-lime">
                 <Check size={16} className="text-med-lime" strokeWidth={3} /> Especialista na Terceira Idade
               </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
              Saúde de Excelência para <span className="text-med-lime underline decoration-med-lime/30 underline-offset-8">Viver Melhor</span> a Partir dos 49 Anos.
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-200 mb-10 leading-relaxed font-light">
              O único plano com foco total em medicina preventiva e envelhecimento ativo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-center gap-3">
                <div className="bg-med-lime/20 p-1 rounded-full">
                  <Check className="text-med-lime w-4 h-4 shrink-0" strokeWidth={4} />
                </div>
                <span className="font-semibold text-lg">Sem Coparticipação</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-med-lime/20 p-1 rounded-full">
                  <Check className="text-med-lime w-4 h-4 shrink-0" strokeWidth={4} />
                </div>
                <span className="font-semibold text-lg">Carência Reduzida</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-med-lime/20 p-1 rounded-full">
                  <Check className="text-med-lime w-4 h-4 shrink-0" strokeWidth={4} />
                </div>
                <span className="font-semibold text-lg">Oficinas de Saúde</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-med-lime/20 p-1 rounded-full">
                  <Check className="text-med-lime w-4 h-4 shrink-0" strokeWidth={4} />
                </div>
                <span className="font-semibold text-lg">Hospitais Próprios</span>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:w-[450px] w-full">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-med-light">
              <div className="p-8 pb-6 text-center bg-gray-50/50">
                <h3 className="text-2xl font-bold text-med-deep mb-2">Simule seu Plano</h3>
                <p className="text-gray-500 text-sm">Preencha para receber sua cotação personalizada.</p>
              </div>

              <form onSubmit={handleSubmit} className="px-8 pb-8 space-y-5 pt-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1 ml-1">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    placeholder="Ex: Maria da Silva"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-med-green focus:border-transparent outline-none transition-all placeholder-gray-400"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1 ml-1">E-mail</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-med-green focus:border-transparent outline-none transition-all placeholder-gray-400"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1 ml-1">Telefone / WhatsApp</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    required
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-med-green focus:border-transparent outline-none transition-all placeholder-gray-400"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Botão de Submit do Formulário - note que não usamos o componente Button aqui para ter controle total do submit, mas estilizamos igual */}
                <button 
                  type="submit"
                  className="w-full inline-flex items-center justify-center font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 shadow-md text-lg bg-med-green hover:bg-med-deep text-white border-2 border-transparent mt-2 uppercase tracking-wide shadow-lg shadow-med-green/30"
                >
                  Cotar Agora →
                </button>
                
                {/* Trust Badges */}
                <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <ShieldCheck size={14} className="text-med-green" />
                    <span className="text-[10px] font-semibold uppercase tracking-wide">Regulado ANS</span>
                  </div>
                  <div className="w-px h-3 bg-gray-300"></div>
                  <div className="flex items-center gap-1.5 text-gray-500">
                    <Lock size={14} className="text-med-green" />
                    <span className="text-[10px] font-semibold uppercase tracking-wide">Site Seguro</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};