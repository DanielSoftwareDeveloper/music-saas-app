"use client";

import { motion, type Variants } from "framer-motion";
import MainWrapper from "~/components/shared/general/MainWrapper";
import SectionTitle from "~/components/shared/general/SectionTitle";
import { featuresList } from "./features-list.data";
import FeatureItem from "./FeatureItem";

// Correctly typed animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // ✨ Cascade effect
    },
  },
};

// Fixed 'ease' type with a valid format
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const, // Forces the correct type (TypeScript accepts this)
    },
  },
};

function About() {
  return (
    <section id="features" className="py-20">
      <MainWrapper>
        {/* Title animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <SectionTitle title="Features" />
        </motion.div>

        {/* Animated container with cascade effect */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 items-center gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-8"
        >
          {featuresList.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants}>
              <FeatureItem
                title={feature.title}
                color={feature.color}
                description={feature.description}
                icon={feature.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </MainWrapper>
    </section>
  );
}

export default About;
