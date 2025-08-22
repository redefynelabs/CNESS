"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion, Variants } from "framer-motion";

interface TechnoCard {
  id: number;
  title: string;
  link: string;
  image: {
    url: string;
    name: string;
  };
}

interface TechnoProps {
  data: {
    badgeText: string;
    title: string;
    highlight: string;
    TechnoCards: TechnoCard[];
  };
}

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const TechnoSection: React.FC<TechnoProps> = ({ data }) => {
  return (
    <div className="py-14 px-4 md:px-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-12 flex items-center flex-col gap-6 max-w-4xl mx-auto"
      >
        <p className="text-xs uppercase px-4 py-1 rounded-full border border-gray-300 text-foreground">
          {data.badgeText}
        </p>
        <h2 className="text-5xl font-[450]">
          {data.title.split(data.highlight)[0]}
          <span className="text-tertiary">{data.highlight}</span>
        </h2>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {data.TechnoCards.map((card) => (
          <motion.div
            key={card.id}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-active backdrop-blur-md rounded-2xl overflow-hidden flex flex-col group"
          >
            {/* Image */}
            <motion.div
              className="relative w-full h-full aspect-[3/4] overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Image
                src={card.image.url}
                alt={card.image.name || card.title}
                fill
                className="object-cover aspect-[3/4] rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>

            {/* Card Footer */}
            <div className="py-5 px-4 flex items-end justify-end mt-auto">
              <Link
                href={card.link}
                className="relative flex w-full justify-between items-center text-lg font-[450] text-foreground hover:text-primary transition-colors gap-4 group"
              >
                {card.title}
                <motion.div
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="bg-light rounded-full p-3 text-primary group-hover:bg-primary group-hover:text-light transition-colors"
                >
                  <ArrowUpRight size={20} />
                </motion.div>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechnoSection;
