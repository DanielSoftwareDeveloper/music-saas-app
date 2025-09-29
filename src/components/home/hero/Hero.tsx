import MainWrapper from "~/components/shared/general/MainWrapper";
import Link from "next/link";
import { cn } from "~/lib/utils";
import { buttonVariants } from "~/components/ui/button";
import Blobs from "./Blobs";
import { Badge } from "~/components/ui/badge";
import { Sparkles } from "lucide-react";

function Hero() {
  return (
    <section
      id="banner"
      className="relative h-[46rem] overflow-hidden bg-neutral-800/70"
    >
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <Blobs />
      </div>
      <MainWrapper className="-mt-12 flex h-full flex-col items-center justify-center">
        <div className="animate-gradient-x group relative overflow-hidden rounded-full bg-emerald-300 p-[2px]">
          <Badge
            variant="secondary"
            className="relative rounded-full bg-[#353535] px-3 py-1.5 text-base font-medium"
          >
            <Sparkles className="mr-2 size-6 text-emerald-300" />
            <p className="text-xs">Powered with AI</p>
          </Badge>
        </div>
        <div className="mt-6 text-center">
          <div className="space-y-8">
            <h1 className="inline text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              From Idea to Song in Minutes{""}
            </h1>

            <p className="mx-auto mt-6 max-w-[700px] text-sm md:text-lg lg:text-xl">
              Turn your ideas into lyrics, melodies and beats instantly. Let AI
              speed up your creativity and take your music to the next level.
            </p>

            <div className="flex justify-center gap-x-4">
              <Link
                href="/auth/sign-up"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "font-medium",
                )}
              >
                Start for Free
              </Link>
            </div>
          </div>
          <p className="mt-3 text-xs">
            Includes 5 free credits (No card required)
          </p>
        </div>
      </MainWrapper>
    </section>
  );
}
export default Hero;
