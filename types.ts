import { LucideIcon } from 'lucide-react';

export interface Hospital {
  name: string;
  location: string; // Kept for backward compatibility if needed, though mostly unused in new structure
  highlight?: boolean;
}

export interface PlanNetwork {
  planName: string;
  hospitals: string[];
}

export interface Benefit {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PlanFeature {
  name: string;
  included: boolean;
}

export interface PriceTier {
  range: string;
  value: string;
}

export interface Plan {
  name: string;
  tagline: string; // Used for Accommodation (Enfermaria/Apartamento)
  ans?: string;
  prices: PriceTier[];
  features: string[];
  recommended?: boolean;
}

export interface Testimonial {
  name: string;
  age: number;
  location: string;
  text: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}