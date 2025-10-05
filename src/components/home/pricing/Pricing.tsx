"use client";

import { motion, type Variants } from "framer-motion"; // 🟢 import motion
import MainWrapper from "~/components/shared/general/MainWrapper";
import SectionTitle from "~/components/shared/general/SectionTitle";
import { pricingList } from "./pricing-list";
import PricingCard from "./PricingCard";

// Container variants for cascading animation
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // ✨ Cascade effect for each card
    },
  },
};

// Item variants for each pricing card
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 }, // ✨ Start invisible and moved down
  show: {
    opacity: 1,
    y: 0, // ✨ End visible in original position
    transition: { duration: 0.5, ease: "easeOut" as const }, // ✨ Smooth transition
  },
};

function Pricing() {
  return (
    <section id="price" className="py-20">
      <MainWrapper>
        {/* Title animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <SectionTitle title="Pricing" />
        </motion.div>

        {/* Pricing cards container with staggered animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
        >
          {pricingList.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <PricingCard
                plan={item.plan}
                icon={item.icon}
                price={item.price}
                features={item.features}
                ctaLabel={item.ctaLabel}
                ctaColor={item.ctaColor ?? "bg-emerald-400"}
              />
            </motion.div>
          ))}
        </motion.div>
      </MainWrapper>
    </section>
  );
}

export default Pricing;
