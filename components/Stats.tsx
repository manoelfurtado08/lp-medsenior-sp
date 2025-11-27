import React from 'react';

export const Stats: React.FC = () => {
  const stats = [
    { value: "92%", label: "de Satisfação dos Beneficiários" },
    { value: "45", label: "Unidades Próprias" },
    { value: "148", label: "Hospitais na Rede Credenciada" },
    { value: "08", label: "Estados de Atuação" },
  ];

  return (
    <section className="bg-med-deep border-t border-white/10 py-12 relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x-0 lg:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center group">
              <span className="text-4xl lg:text-5xl font-extrabold text-white mb-2 group-hover:text-med-lime transition-colors duration-300">
                {stat.value}
              </span>
              <span className="text-med-light/80 text-sm lg:text-base font-medium max-w-[150px] leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};