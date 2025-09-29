import { CircleDashed, Gem, Crown } from "lucide-react";

export const pricingList = [
  {
    id: 1,
    icon: CircleDashed,
    plan: "Starter",
    price: 10,
    features: [
      "10 credits per month",
      "Generate up to 10 AI songs",
      "Great for getting started and experimenting",
    ],
    ctaLabel: "Get Started",
  },
  {
    id: 2,
    icon: Gem,
    plan: "PRO",
    price: 15,
    features: [
      "25 credits per month",
      "Generate up to 25 AI songs",
      "Perfect for regular creators",
    ],
    ctaLabel: "Go PRO",
    ctaColor: "bg-teal-400",
  },
  {
    id: 3,
    icon: Crown,
    plan: "Premium",
    price: 20,
    features: [
      "50 credits per month",
      "Generate up to 50 AI songs",
      "Best for artists and bigger projects",
    ],
    ctaLabel: "Choose Premium",
    ctaColor: "bg-yellow-500",
  },
];
