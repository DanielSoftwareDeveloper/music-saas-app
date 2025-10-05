"use client";

import { motion } from "framer-motion";
import MainWrapper from "~/components/shared/general/MainWrapper";
import Link from "next/link";
import { cn } from "~/lib/utils";
import { buttonVariants } from "~/components/ui/button";
import Blobs from "~/components/shared/general/Blobs";
import { Badge } from "~/components/ui/badge";
import { Sparkles } from "lucide-react";

function Hero() {
  return (
    <section
      id="banner"
      className="relative h-[36rem] overflow-hidden bg-neutral-800/70 md:h-[42rem] lg:h-[46rem]"
    >
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <Blobs />
      </div>
      <MainWrapper className="-mt-12 flex h-full flex-col items-center justify-center">
        {/* Badge animation (fade-in from above) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }} // ✨ Starts invisible and slightly moved up
          animate={{ opacity: 1, y: 0 }} // ✨ Ends visible in its original position
          transition={{ duration: 0.8, ease: "easeOut" }} // ✨ Controls speed and smoothness
          className="animate-gradient-x group relative overflow-hidden rounded-full bg-emerald-300 p-[2px]"
        >
          <Badge
            variant="secondary"
            className="relative rounded-full bg-[#353535] px-3 py-1.5 text-base font-medium"
          >
            <Sparkles className="mr-2 size-6 text-emerald-300" />
            <p className="text-xs">Powered with AI</p>
          </Badge>
        </motion.div>

        <div className="mt-6 space-y-8 text-center">
          {/* Main title animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }} // ✨ Appears from below with opacity 0
            animate={{ opacity: 1, y: 0 }} // ✨ Ends visible in its place
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }} // ✨ Delay so it appears after the badge
            className="inline text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
          >
            From Idea to Song in Minutes
          </motion.h1>

          {/* Subtitle animation */}
          <motion.p
            initial={{ opacity: 0, y: 30 }} // ✨ Same effect as the title
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }} // ✨ Appears a bit later
            className="mx-auto mt-6 max-w-[700px] text-sm md:text-lg lg:text-xl"
          >
            Turn your ideas into lyrics, melodies, and beats faster. Let AI
            speed up your creativity and take your music to the next level.
          </motion.p>

          {/* Button animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} // ✨ Fades in while moving up
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.6 }} // ✨ Appears after the subtitle
            className="flex justify-center gap-x-4"
          >
            <Link
              href="/auth/sign-up"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "font-medium",
              )}
            >
              Start for Free
            </Link>
          </motion.div>

          {/* Credits text animation */}
          <motion.p
            initial={{ opacity: 0 }} // ✨ Only fades in (no movement)
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.8 }} // ✨ Appears at the end
            className="mt-3 text-xs"
          >
            Includes 5 free credits (No card required)
          </motion.p>
        </div>
      </MainWrapper>
    </section>
  );
}

export default Hero;
