import React from 'react';
import { BENEFITS } from '../constants';

export const Benefits: React.FC = () => {
  return (
    <section id="beneficios" className="py-24 bg-med-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-med-deep mb-4">
            Por que escolher a <span className="text-med-green relative inline-block">
              MedSênior?
              <span className="absolute bottom-1 left-0 w-full h-3 bg-med-lime/20 -z-10 transform -skew-x-12"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Muito mais que um plano de saúde. Um projeto de vida focado em envelhecimento ativo e saudável.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-white hover:bg-med-deep transition-all duration-300 border border-gray-100 hover:border-med-deep shadow-sm hover:shadow-2xl hover:-translate-y-1">
              <div className="w-16 h-16 bg-med-light rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors duration-300">
                <benefit.icon className="w-8 h-8 text-med-green group-hover:text-med-lime" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-med-deep group-hover:text-white mb-3 transition-colors">{benefit.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};