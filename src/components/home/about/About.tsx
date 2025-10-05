"use client";

import { motion } from "framer-motion";
import MainWrapper from "~/components/shared/general/MainWrapper";

function About() {
  return (
    <section id="about" className="bg-card border-y py-20">
      <MainWrapper className="max-w-2xl">
        <div className="text-center">
          {/* Heading animation */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }} // ✨ Starts invisible and slightly below
            whileInView={{ opacity: 1, y: 0 }} // ✨ Fades in and slides up
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-4 text-2xl font-medium"
          >
            Why Choose Us?
          </motion.h3>

          {/* Paragraph animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // ✨ Slight delay after heading
            viewport={{ once: true }}
            className=""
          >
            <span className="text-emerald-300">AI-powered platform</span> that
            turns your ideas into original songs in seconds. Whether you&apos;re
            a content creator, streamer, student,
            <span className="text-purple-300">
              {" "}
              or just someone who loves experimenting with sound
            </span>
            , our mission is to give you the tools to create without limits. No
            studios, no expensive gear,{" "}
            <span className="text-orange-300">
              no music background required
            </span>
            , just your imagination and our AI.
          </motion.p>
        </div>
      </MainWrapper>
    </section>
  );
}

export default About;
