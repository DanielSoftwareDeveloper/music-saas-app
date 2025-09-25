import type { LucideIcon } from "lucide-react";
import { cn } from "~/lib/utils";

interface FeatureItemProps {
  title: string;
  color: string;
  description: string;
  icon: LucideIcon;
}

function FeatureItem({
  title,
  color,
  description,
  icon: Icon,
}: FeatureItemProps) {
  return (
    <div className="bg-card h-full rounded-lg border p-4 md:p-5">
      <div className="mb-4 flex flex-col items-center justify-center gap-2 md:flex-row md:justify-start md:gap-x-3">
        <Icon className="size-6 text-amber-100 md:size-7" />
        <h3 className={cn("text-sm font-medium md:text-base", color)}>
          {title}
        </h3>
      </div>
      <p className="text-sm">{description}</p>
    </div>
  );
}
export default FeatureItem;
