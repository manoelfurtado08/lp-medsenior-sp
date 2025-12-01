import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Benefits } from './components/Benefits';
import { Network } from './components/Network';
import { Plans } from './components/Plans';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Phone, ShieldCheck, Lock } from 'lucide-react';
import { WHATSAPP_NUMBER } from './constants';

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

// Componente local para o ícone flutuante do WhatsApp
const WhatsAppFloatIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

function App() {
  useEffect(() => {
    // Meta Pixel Initialization
    const pixelId = '1585967392422212';
    
    if (!window.fbq) {
      (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
        if (f.fbq) return;
        n = f.fbq = function() {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = true;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = true;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      
      window.fbq('init', pixelId);
    }
    
    // Track PageView
    window.fbq('track', 'PageView');
  }, []);

  const handleFloatingClick = () => {
    if (window.fbq) {
      window.fbq('track', 'Contact', { 
        content_name: 'Botão Flutuante Mobile',
        content_category: 'WhatsApp'
      });
    }
  };

  const handleFinalCTAClick = () => {
    if (window.fbq) {
      window.fbq('track', 'Contact', { 
        content_name: 'Botão Final CTA',
        content_category: 'WhatsApp'
      });
    }
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá, estou no final da página e quero fechar o plano MedSênior.")}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Benefits />
        <Network />
        <Plans />
        <Testimonials />
        <CTA />
        <FAQ />
        
        {/* Final CTA Section */}
        <section className="bg-med-deep py-12 text-center text-white px-4 border-t border-white/10">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Ainda tem dúvidas?</h2>
            <p className="mb-8 text-lg opacity-80 text-gray-300">Não deixe para depois. Garanta a proteção que você merece com condições especiais hoje.</p>
            <button 
              onClick={handleFinalCTAClick}
              className="bg-[#25D366] text-white font-extrabold text-xl py-5 px-10 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all flex items-center justify-center gap-3 mx-auto w-full md:w-auto mb-8 transform hover:scale-105"
            >
              <WhatsAppFloatIcon /> Falar no WhatsApp Agora
            </button>
            
            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-6 opacity-60">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} />
                <span className="text-xs font-medium uppercase tracking-wider">Regulado ANS</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock size={18} />
                <span className="text-xs font-medium uppercase tracking-wider">Dados Protegidos</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Sticky Floating WhatsApp Button for Mobile - UPDATED for 49+ */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá, estou no site e gostaria de cotar o plano MedSênior.")}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleFloatingClick}
        className="fixed bottom-6 right-6 z-50 lg:hidden flex items-center gap-3 bg-[#25D366] text-white py-4 px-6 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-105 border-2 border-white/20 animate-pulse"
        style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)' }}
        aria-label="Falar no WhatsApp"
      >
        <WhatsAppFloatIcon />
        <div className="flex flex-col items-start leading-none">
          <span className="font-extrabold text-base uppercase tracking-wide">Falar Agora</span>
          <span className="text-[10px] font-medium opacity-90">No WhatsApp</span>
        </div>
      </a>
    </div>
  );
}

export default App;