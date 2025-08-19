'use client'
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion, Variants } from 'framer-motion';

// Strapi-like JSON data
const insightsData = {
  data: {
    attributes: {
      title: "Hear Directly From CNESS Experts",
      highlightedText: "CNESS Experts",
      badgeText: "Insights",
      buttonText: "Learn More",
      buttonUrl: "/learn-more",
      cards: [
        {
          id: 1,
          category: "Financing",
          title: "Use Physician Lifecycle Planning to Maximize Your Financial Potential",
          image: {
            url: "/assets/ins-card1.svg",
            alt: "Financing Background",
          },
          buttonUrl: "/financing",
        },
        {
          id: 2,
          category: "Diversity, Equity, and Inclusion",
          title: "",
          image: {
            url: "/assets/ins-card3.svg",
            alt: "DEI Background",
          },
          overlayImage: {
            url: "/assets/cardstar.svg",
            alt: "Overlay Star",
          },
          buttonUrl: "/dei",
        },
        {
          id: 3,
          category: "Advise",
          title: "How to Overcome the Impact of Inflation",
          image: {
            url: "/assets/ins-card2.svg",
            alt: "Advise Background",
          },
          buttonUrl: "/advise",
        },
      ],
    },
  },
};

// Animation variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const buttonVariants: Variants = {
  hover: { scale: 1.1, rotate: 90 },
  initial: { scale: 1, rotate: 0 },
};

const Insights = () => {
  const { attributes } = insightsData.data;

  return (
    <div className="w-full min-h-screen bg-active px-4 sm:px-6 md:px-10 py-10 md:py-20 text-foreground">
      <div className="flex flex-col md:flex-row w-full items-start md:items-end justify-between mb-10 md:mb-16 space-y-4">
        <motion.div
          className="max-w-xl flex flex-col items-start space-y-4 justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs sm:text-sm font-semibold uppercase border border-primary px-4 py-1 rounded-full">
            {attributes.badgeText}
          </p>
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                 {attributes.title.split(attributes.highlightedText)[0]}
                 <span className="text-tertiary">{attributes.highlightedText}</span>
            </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href={attributes.buttonUrl}
            className="relative bg-secondary group text-primary pl-4 pr-2 py-2 rounded-full flex font-medium items-center justify-center gap-3 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-tertiary transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            <span className="relative z-10 font-semibold group-hover:text-foreground transition-colors duration-500 whitespace-nowrap text-sm sm:text-base">
              {attributes.buttonText}
            </span>
            <motion.div
              className="bg-primary rounded-full p-1.5 text-secondary"
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight size={20} />
            </motion.div>
          </Link>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 py-10">
        {attributes.cards.map((card) => (
          <motion.div
            key={card.id}
            className={`relative rounded-xl p-3 sm:p-5 ${
              card.overlayImage ? 'bg-primary' : 'bg-white'
            } flex flex-col justify-between`}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: card.id * 0.2 }}
          >
            {card.category && (
              <p
                className={`${
                  card.overlayImage ? 'text-tertiary text-lg sm:text-xl' : 'text-xs uppercase'
                } mb-4 z-50`}
              >
                {card.category}
              </p>
            )}
            <Image
              src={card.image.url}
              alt={card.image.alt}
              width={500}
              height={500}
              className="rounded-xl w-full h-auto z-50"
            />
            {card.title && (
              <div className="py-4 space-y-4">
                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">{card.title}</h1>
              </div>
            )}
            <div className="w-full flex items-end justify-end z-50">
              <Link href={card.buttonUrl}>
                <motion.div
                  className="bg-active rounded-full p-1.5 text-primary"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight size={24} className="sm:w-8 sm:h-8" />
                </motion.div>
              </Link>
            </div>
            {card.overlayImage && (
              <Image
                src={card.overlayImage.url}
                alt={card.overlayImage.alt}
                width={500}
                height={500}
                className="rounded-xl absolute right-0 bottom-0 opacity-70 w-full h-auto"
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Insights;