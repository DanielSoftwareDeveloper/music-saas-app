import { cn } from "~/lib/utils";
import Link from "next/link";

interface Props {
  className?: string;
}

function Logo({ className }: Props) {
  return (
    <Link
      href="/#banner"
      className={cn("block text-2xl font-bold uppercase", className)}
    >
      Logo<span className="text-index">PRO</span>
    </Link>
  );
}
export default Logo;
