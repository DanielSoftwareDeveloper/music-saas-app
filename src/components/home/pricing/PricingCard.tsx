import { Separator } from "~/components/ui/separator";
import { cn } from "~/lib/utils";
import { Check, type LucideIcon } from "lucide-react";

interface PricingCardProps {
  plan: string;
  icon: LucideIcon;
  price: number;
  features: string[];
  ctaLabel: string;
  ctaColor: string;
}

function PricingCard({
  plan,
  icon: Icon,
  price,
  features,
  ctaLabel,
  ctaColor,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "bg-card flex flex-col justify-between rounded-lg border p-6",
      )}
    >
      <div className="mb-4 flex flex-col gap-x-2">
        <div className="mb-4 flex gap-x-2">
          <Icon className="size-7" />
          <h3 className="text-xl font-semibold">{plan}</h3>
        </div>
        <span className="">Price: ${price} / Month</span>
      </div>
      <Separator />
      <div className="mt-4">
        <h3 className="">Features:</h3>
        <ul className="my-4 flex flex-col gap-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-x-1">
              <Check className="size-4" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        className={cn(
          "rounded px-4 py-2 font-semibold text-black hover:cursor-pointer",
          ctaColor,
        )}
      >
        {ctaLabel}
      </button>
    </div>
  );
}
export default PricingCard;
