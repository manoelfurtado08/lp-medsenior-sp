import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-med-light/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Dúvidas Frequentes
        </h2>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => toggle(index)}
              >
                <span className="font-bold text-gray-800 text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-med-green" />
                ) : (
                  <ChevronDown className="text-gray-400" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};