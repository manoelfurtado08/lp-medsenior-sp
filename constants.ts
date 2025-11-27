import { Heart, Shield, Clock, Stethoscope, PiggyBank, Smile } from 'lucide-react';
import { Benefit, Hospital, Plan, Testimonial, FAQItem } from './types';

export const WHATSAPP_NUMBER = "551123621331";

export const BENEFITS: Benefit[] = [
  {
    title: "Especialista em 49+",
    description: "Um plano desenhado exclusivamente para as necessidades de saúde na maturidade.",
    icon: Heart
  },
  {
    title: "Medicina Preventiva",
    description: "Foco em manter você saudável com programas de acompanhamento contínuo.",
    icon: Shield
  },
  {
    title: "Telemedicina 24h",
    description: "Atendimento médico na palma da sua mão, sem sair de casa, a qualquer hora.",
    icon: Stethoscope
  },
  {
    title: "Rede Premium SP",
    description: "Acesso aos melhores hospitais de São Paulo com agilidade no atendimento.",
    icon: Clock
  },
  {
    title: "Sem Coparticipação",
    description: "Opções de planos onde você paga um valor fixo mensal, sem surpresas.",
    icon: PiggyBank
  },
  {
    title: "Atendimento Humanizado",
    description: "Equipe treinada para acolher e cuidar com o respeito que você merece.",
    icon: Smile
  }
];

export const HOSPITALS: Hospital[] = [
  { name: "Hosp. Samaritano", location: "Higienópolis", highlight: true },
  { name: "BP - Beneficência Portuguesa", location: "Bela Vista", highlight: true },
  { name: "Hosp. Alemão Oswaldo Cruz", location: "Vergueiro", highlight: true },
  { name: "Hospital Santa Paula", location: "Vila Olímpia" },
  { name: "Hospital Santa Catarina", location: "Av. Paulista" },
  { name: "Hospital São Camilo", location: "Pompeia / Ipiranga" },
  { name: "Hospital Sepaco", location: "Vila Mariana" },
  { name: "Hospital Leforte", location: "Liberdade / Morumbi" },
];

export const PLANS: Plan[] = [
  {
    name: "MedSênior SP1 QC",
    tagline: "Enfermaria",
    ans: "494.293/23-1",
    prices: [
      { range: "49 A 53 ANOS", value: "R$ 900,82" },
      { range: "54 A 58 ANOS", value: "R$ 1.080,98" },
      { range: "59 ANOS OU MAIS", value: "R$ 1.416,08" }
    ],
    features: [
      "Acomodação Enfermaria",
      "Sem Coparticipação",
      "Oficinas de Saúde",
      "Rede Credenciada Básica",
      "Atendimento Grande SP"
    ]
  },
  {
    name: "MedSênior SP2 QP",
    tagline: "Apartamento",
    ans: "494.295/23-8",
    recommended: true,
    prices: [
      { range: "49 A 53 ANOS", value: "R$ 1.045,93" },
      { range: "54 A 58 ANOS", value: "R$ 1.254,64" },
      { range: "59 ANOS OU MAIS", value: "R$ 1.643,58" }
    ],
    features: [
      "Acomodação Apartamento",
      "Sem Coparticipação",
      "Oficinas de Saúde",
      "Rede Ampliada",
      "Atendimento Grande SP"
    ]
  },
  {
    name: "MedSênior Black 5 QP",
    tagline: "Apartamento Executivo",
    ans: "494.296/23-6",
    prices: [
      { range: "49 A 53 ANOS", value: "R$ 1.205,92" },
      { range: "54 A 58 ANOS", value: "R$ 1.447,11" },
      { range: "59 ANOS OU MAIS", value: "R$ 1.895,71" }
    ],
    features: [
      "Hospitais Premium",
      "Sem Coparticipação",
      "Laboratórios Alta Medicina",
      "Reembolso de Consultas",
      "Check-up Anual"
    ]
  },
  {
    name: "MedSênior Infinite QP",
    tagline: "Apartamento Premium",
    ans: "495.123/24-2",
    prices: [
      { range: "49 A 53 ANOS", value: "R$ 1.653,00" },
      { range: "54 A 58 ANOS", value: "R$ 1.983,60" },
      { range: "59 ANOS OU MAIS", value: "R$ 2.598,52" }
    ],
    features: [
      "Rede Exclusiva",
      "Maior nível de Reembolso",
      "Vacinas Domiciliares",
      "Coleta Domiciliar",
      "Seguro Viagem"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Maria Helena",
    age: 68,
    location: "Moema - SP",
    text: "Mudei para a MedSênior ano passado e estou encantada. O foco na prevenção faz toda a diferença. Me sinto cuidada de verdade.",
    image: "https://picsum.photos/seed/maria/150/150"
  },
  {
    name: "Roberto Campos",
    age: 72,
    location: "Tatuapé - SP",
    text: "O atendimento no Samaritano foi impecável. Ter um plano que entende a nossa idade e não cobra abusos é fundamental.",
    image: "https://picsum.photos/seed/roberto/150/150"
  },
  {
    name: "Lúcia Ferreira",
    age: 55,
    location: "Santana - SP",
    text: "Contratei para mim e meu marido. O processo foi rápido e o atendimento pelo WhatsApp da corretora foi excelente.",
    image: "https://picsum.photos/seed/lucia/150/150"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Quem pode contratar o plano MedSênior?",
    answer: "O plano é focado na terceira idade, mas pode ser contratado por qualquer pessoa a partir de 49 anos de idade."
  },
  {
    question: "Existe carência para o plano?",
    answer: "Sim, existem carências contratuais regulamentadas pela ANS. Porém, em muitas campanhas promocionais, conseguimos redução de carências para consultas e exames simples. Fale com nossos especialistas."
  },
  {
    question: "Como funciona a cobertura em São Paulo?",
    answer: "A MedSênior possui uma rede credenciada robusta em São Paulo, incluindo hospitais de referência como Samaritano, Oswaldo Cruz e Beneficência Portuguesa, além de laboratórios de alta qualidade."
  },
  {
    question: "O plano tem coparticipação?",
    answer: "Não. A MedSênior (tanto PF quanto PME) oferece planos SEM coparticipação. Você paga um valor fixo mensal e utiliza a rede sem taxas extras."
  }
];