import Link from "next/link";
import Blobs from "~/components/shared/general/Blobs";
import { buttonVariants } from "~/components/ui/button";
import { requireUnAuth } from "~/lib/auth-utils";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireUnAuth();

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden bg-neutral-800/70">
        <Link
          href="/"
          className={buttonVariants({
            variant: "outline",
            className: "absolute top-4 left-4",
          })}
        >
          Back to home
        </Link>
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <Blobs />
        </div>
        <div className="flex h-screen flex-col items-center justify-center">
          <div className="w-[90%] max-w-[400px] text-center">{children}</div>
          <span className="text-muted-foreground mt-4 w-[90%] max-w-[400px] text-center text-xs text-balance">
            By continuing to register and log in, you agree to our{" "}
            <Link href="#" className="hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="hover:underline">
              Privacy Policy.
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}
