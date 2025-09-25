import { CircleDashed, Gem, Crown } from "lucide-react";

export const pricingList = [
  {
    id: 1,
    icon: CircleDashed,
    plan: "Starter",
    price: 9,
    features: [
      "10 entrevistas/mes (hasta 10 min c/u)",
      "Retroalimentación automática",
      "Crear 1 CV con IA (descarga PDF)",
      "Acceso a 10 quizes de práctica",
    ],
    ctaLabel: "Empezar",
    ctaColor: "bg-rose-400",
  },
  {
    id: 2,
    icon: Gem,
    plan: "PRO",
    price: 19,
    features: [
      "30 entrevistas/mes (hasta 20 min c/u)",
      "Retroalimentación avanzada IA",
      "Crear hasta 3 CVs con IA",
      "Quizes ilimitados por rol/industria",
      "Soporte prioritario",
    ],
    ctaLabel: "Hazte PRO",
    ctaColor: "bg-teal-400",
  },
  {
    id: 3,
    icon: Crown,
    plan: "Unlimited",
    price: 29,
    features: [
      "1500 minutos/mes de práctica ilimitada",
      "Retroalimentación detallada con IA + tips personalizados",
      "CVs ilimitados con IA (PDF incluidos)",
      "Quizes ilimitados + modo examen real",
      "Acceso anticipado a nuevas funciones",
    ],
    ctaLabel: "Elegir Premium",
    ctaColor: "bg-yellow-500",
  },
];
