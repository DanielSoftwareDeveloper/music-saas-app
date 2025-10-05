"use client";

import { motion, type Variants } from "framer-motion";
import MainWrapper from "~/components/shared/general/MainWrapper";
import SectionTitle from "~/components/shared/general/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

// Container variants for staggered animation
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // ✨ Stagger effect: items appear one after another
    },
  },
};

// Variants for each accordion item
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 }, // ✨ Start invisible and slightly below
  show: {
    opacity: 1,
    y: 0, // ✨ Move to original position
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function Faq() {
  return (
    <section id="faq" className="bg-card border-y py-20">
      <MainWrapper className="max-w-[800px]">
        {/* Section title animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <SectionTitle title="Frequently Asked Questions" />
        </motion.div>

        {/* Accordion container with staggered animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 rounded-xl border px-6 py-4"
        >
          <Accordion type="single" collapsible>
            {[
              {
                value: "item-1",
                question:
                  "Can I use the songs on YouTube, Twitch, or other platforms?",
                answer:
                  "Yes! All songs generated with our AI are copyright-free, so you can use them in videos, streams, podcasts, or any personal or commercial projects without worrying about copyright issues.",
              },
              {
                value: "item-2",
                question: "Do I need music knowledge to create songs?",
                answer:
                  "Not at all. You just provide a prompt or description of what you want, and our AI will generate a song for you. No prior music skills are required.",
              },
              {
                value: "item-3",
                question: "What happens if I run out of credits?",
                answer:
                  "When you run out of credits, you can either wait for your monthly reset or purchase additional credits to continue generating songs.",
              },
              {
                value: "item-5",
                question: "How long does it take to generate a song?",
                answer:
                  "Most songs are generated within seconds to a couple of minutes, depending on the length and complexity of your prompt.",
              },
              {
                value: "item-6",
                question: "Can I customize the genre or mood of the songs?",
                answer:
                  "Yes! You can specify the genre, mood, tempo, and even style of your song to match your vision.",
              },
              {
                value: "item-7",
                question: "Can I use the songs commercially?",
                answer:
                  "Absolutely. All songs generated are yours to use freely for personal or commercial projects.",
              },
            ].map((item) => (
              // Each accordion item is animated individually
              <motion.div key={item.value} variants={itemVariants}>
                <AccordionItem value={item.value}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </MainWrapper>
    </section>
  );
}

export default Faq;
