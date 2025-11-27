import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-16">
          Quem tem MedSênior, <span className="text-med-green">recomenda</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl relative">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-med-green/20 fill-current" />
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-med-green"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}, {t.age}</h4>
                  <span className="text-sm text-gray-500">{t.location}</span>
                </div>
              </div>

              <p className="text-gray-600 italic leading-relaxed">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};