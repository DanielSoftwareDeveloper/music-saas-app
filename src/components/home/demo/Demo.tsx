"use client";

import { motion } from "framer-motion";
import MainWrapper from "~/components/shared/general/MainWrapper";
import Image from "next/image";

function Demo() {
  return (
    <section id="demo" className="relative -mt-32 pb-4 md:-mt-24">
      {/* Background overlay */}
      <div className="bg-card absolute inset-x-0 top-12 bottom-12 lg:top-24 lg:bottom-24" />

      <div className="relative mx-auto">
        <MainWrapper className="w-[80%] max-w-[1000px]">
          {/* Animated demo image container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} // ✨ Start invisible and moved down
            whileInView={{ opacity: 1, y: 0 }} // ✨ End visible and in place
            transition={{ duration: 0.8, ease: "easeOut" }} // ✨ Smooth transition
            viewport={{ once: true }} // ✨ Animate only once
            className="bg-card -m-2 rounded-xl border p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4"
          >
            <Image
              src="/demo.png"
              alt="Demo"
              width={0}
              height={0}
              sizes="100vw"
              priority
              className="h-full w-full rounded-lg"
            />
          </motion.div>
        </MainWrapper>
      </div>
    </section>
  );
}

export default Demo;
