import MainWrapper from "~/components/shared/general/MainWrapper";
import Link from "next/link";
import { cn } from "~/lib/utils";
import { buttonVariants } from "~/components/ui/button";

function Hero() {
  return (
    <section id="banner" className="h-[40rem]">
      <MainWrapper className="flex h-full max-w-[80%] flex-col items-center justify-center">
        <div className="space-y-12 text-center">
          <h1 className="inline text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            <span className="">Create Songs with AI</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[700px] text-sm md:text-lg lg:text-xl">
            Empower your music creation process with AI. Generate
            professional-quality lyrics, melodies and beats faster and smarter
            than ever before.
          </p>

          <div className="flex justify-center gap-x-4">
            <Link
              href="/auth/sign-up"
              className={cn(buttonVariants({ variant: "default", size: "lg" }))}
            >
              Start for free
            </Link>
          </div>
        </div>
      </MainWrapper>
    </section>
  );
}
export default Hero;
