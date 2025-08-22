"use client";
import React from "react";
import { Check } from "lucide-react";
import { motion, Variants } from "framer-motion";

interface ModuleCard {
  id: number;
  title: string;
  Values: string;
}

interface PlatformProps {
  data: {
    badgeText: string;
    title: string;
    highlight: string;
    ModulesCard: ModuleCard[];
  };
}

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -15 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const PlatformModules: React.FC<PlatformProps> = ({ data }) => {
  return (
    <div className="py-14 px-4 md:px-10 bg-gradient-to-b from-active to-white">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12 flex items-center flex-col gap-6 max-w-4xl mx-auto"
      >
        <p className="text-xs uppercase px-4 py-1 rounded-full border border-gray-300">
          {data.badgeText}
        </p>
        <h2 className="text-2xl md:text-5xl font-[400]">
          {data.title.split(data.highlight)[0]}
          <span className="text-tertiary">{data.highlight}</span>
        </h2>
      </motion.div>

      {/* Modules Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {data.ModulesCard.map((card) => {
          const valuesList = card.Values.split("\n").map((v) =>
            v.replace(/^- /, "").trim()
          );

          return (
            <motion.div
              key={card.id}
              variants={itemVariants}
              className="rounded-2xl border border-gray-200 bg-white transition"
            >
              <div className="border-b mx-auto border-gray-200 text-center py-6">
                <h3 className="text-xl font-[450] text-primary">{card.title}</h3>
              </div>
              <ul className="space-y-4 py-8 px-14">
                {valuesList.map((val, idx) => (
                  <motion.li
                    key={idx}
                    variants={listItemVariants}
                    className="flex items-start gap-2 text-foreground"
                  >
                    <Check className="text-[10px] text-[#B4E717] shrink-0 bg-primary p-1 rounded-full" />
                    <span>{val}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default PlatformModules;
