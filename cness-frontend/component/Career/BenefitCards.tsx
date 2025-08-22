'use client'
import React from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface Icon {
  id: number;
  url: string;
  name: string;
  alternativeText?: string | null;
}

interface BenefitsCard {
  id: number;
  title: string;
  desc: string;
  icon: Icon;
}

interface BenefitsCardProps {
  data: {
    badgeText: string;
    title: string;
    highlight: string;
    BenfitsSection: BenefitsCard[];
  };
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants:Variants  = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const BenefitsCard: React.FC<BenefitsCardProps> = ({ data }) => {
  return (
    <div className='my-14 px-4 md:px-10'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-center mb-12 flex items-center flex-col gap-6 max-w-2xl mx-auto"
      >
        <p className="text-xs uppercase px-4 py-1 rounded-full border border-gray-300">
          {data.badgeText}
        </p>
        <h2 className="text-5xl font-[450]">
          {data.title.split(data.highlight)[0]}
          <span className="text-tertiary">{data.highlight}</span>
        </h2>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {data.BenfitsSection.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              className="rounded-2xl border border-gray-200 p-3 flex flex-col gap-20 items-start bg-white group hover:bg-secondary"
              whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary group-hover:bg-tertiary mb-6 m-4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={card.icon.url}
                  alt={card.icon.alternativeText || card.title}
                  className="w-8 h-6 object-contain"
                />
              </motion.div>

              <motion.div
                className="bg-active rounded-xl p-4 w-full text-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <h3 className="text-lg font-[450] text-foreground mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default BenefitsCard;