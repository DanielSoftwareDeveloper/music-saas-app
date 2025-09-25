import { cn } from "~/lib/utils";

interface SectionTitleProps {
  title: string;
  description?: string;
  className?: string;
}

function SectionTitle({ title, description, className }: SectionTitleProps) {
  return (
    <div className="mb-10 text-center">
      <h2
        className={cn(
          "mb-2 inline-block px-4 py-0.5 text-xl font-bold",
          className,
        )}
      >
        {title}
      </h2>
      <p className="text-lg">{description}</p>
    </div>
  );
}
export default SectionTitle;
