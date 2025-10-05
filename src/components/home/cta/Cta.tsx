"use client";

import { motion } from "framer-motion";
import MainWrapper from "~/components/shared/general/MainWrapper";
import { buttonVariants } from "~/components/ui/button";
import Link from "next/link";

function Cta() {
  return (
    <section className="py-20">
      <MainWrapper className="bg-card rounded-2xl border p-8 text-center sm:p-12">
        {/* Heading animation */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }} // ✨ Start invisible and slightly below
          whileInView={{ opacity: 1, y: 0 }} // ✨ Fade-in and slide up
          transition={{ duration: 0.8, ease: "easeOut" }} // ✨ Smooth transition
          viewport={{ once: true }}
          className="relative z-10 mb-4 text-2xl font-bold"
        >
          Ready to create your first AI-generated song?
        </motion.h2>

        {/* Subtitle animation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // ✨ Slight delay after heading
          viewport={{ once: true }}
          className="relative z-10 mx-auto mb-8 max-w-2xl"
        >
          Turn your ideas into music in seconds. No music skills, no studio,
          just your imagination.
        </motion.p>

        {/* Button animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }} // ✨ Appear after subtitle
          viewport={{ once: true }}
        >
          <Link
            href="/auth/sign-up"
            className={buttonVariants({ variant: "default" })}
          >
            Get Started for Free
          </Link>
        </motion.div>
      </MainWrapper>
    </section>
  );
}

export default Cta;
