import { cn } from "~/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

interface Props {
  label: string;
  link: string;
  href: string;
}

function AuthChangeButton({ label, link, href }: Props) {
  return (
    <div className="flex w-full items-center justify-center gap-x-2">
      <p className="text-sm">{label}</p>

      <Link
        href={href}
        className={cn(
          buttonVariants({ variant: "link", size: "sm" }),
          "text-accent-foreground p-0",
        )}
      >
        {link}
      </Link>
    </div>
  );
}
export default AuthChangeButton;
