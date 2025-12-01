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
      window.fbq('track', 'Contact', { content_name: 'Botão Flutuante Mobile' });
    }
  };

  const handleFinalCTAClick = () => {
    if (window.fbq) {
      window.fbq('track', 'Contact', { content_name: 'Botão Final CTA' });
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
              className="bg-med-accent text-white font-bold text-xl py-4 px-8 rounded-full shadow-lg hover:bg-green-600 transition-all flex items-center justify-center gap-2 mx-auto w-full md:w-auto mb-8"
            >
              <Phone className="fill-current" /> Falar com Especialista Agora
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

      {/* Sticky Floating WhatsApp Button for Mobile */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá, estou no site e gostaria de cotar o plano MedSênior.")}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleFloatingClick}
        className="fixed bottom-5 right-5 z-50 lg:hidden flex items-center gap-2 bg-[#25D366] text-white py-3 px-5 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-105 border-2 border-white/20"
        style={{ boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)' }}
        aria-label="Falar no WhatsApp"
      >
        <Phone className="w-5 h-5 fill-current" />
        <span className="font-bold text-sm uppercase tracking-wide">Cotação Rápida</span>
      </a>
    </div>
  );
}

export default App;