"use client";
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface BottomCardProps {
  data: {
    badgeText?: string;
    title: string;
    desc?: string;
    stat?: string;
    icon?: {
      url: string;
      name: string;
    };
    buttonText?: string;
    buttonUrl?: string;
  }[];
}

// Variants
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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const TechnoBottomCard: React.FC<BottomCardProps> = ({ data }) => {
  return (
    <motion.div
      className="grid md:grid-cols-2 gap-6 px-4 md:px-10 py-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {data.map((card, index) => {
        const isMinimal =
          card.title && !card.desc && !card.stat && !card.badgeText;

        return (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.02,
            }}
            transition={{ duration: 0.3 }}
            className={`relative rounded-2xl p-8 flex flex-col h-full min-h-[50dvh] md:min-h-[70dvh] justify-between ${
              isMinimal ? "bg-primary text-white" : "bg-secondary text-primary"
            }`}
          >
            {/* Badge + Icon */}
            {!isMinimal && (
              <motion.div
                className="flex justify-between items-start z-50"
                variants={itemVariants}
              >
                {card.badgeText && (
                  <p className="text-xs uppercase px-3 py-1 rounded-full border border-gray-400 text-gray-700">
                    {card.badgeText}
                  </p>
                )}
                {card.icon?.url && (
                  <div className="w-10 h-10 z-50 rounded-full bg-primary flex items-center justify-center">
                    <Image
                      src={card.icon.url}
                      alt={card.icon.name || "icon"}
                      width={20}
                      height={20}
                    />
                  </div>
                )}
              </motion.div>
            )}

            {/* Title */}
            <motion.h3
              variants={itemVariants}
              className={`mt-4 z-50 font-[400] ${
                isMinimal
                  ? "text-3xl md:text-4xl leading-snug flex w-full justify-between gap-10 text-start items-start"
                  : "text-xl md:text-2xl"
              }`}
            >
              {card.title}
              {isMinimal && (
                <Image
                  src={"/assets/star-tertiary.svg"}
                  alt="TertiaryStar.svg"
                  width={30}
                  height={30}
                />
              )}
            </motion.h3>

            {/* Background overlay */}
            {!isMinimal && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.1 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src={"/assets/hexagon-black.png"}
                  alt="HexagonOverlay.svg"
                  width={400}
                  height={400}
                  className="absolute w-[80%] top-0 left-0 z-10 rounded-2xl"
                />
              </motion.div>
            )}

            {/* Detailed Content */}
            {!isMinimal && (
              <motion.div
                variants={itemVariants}
                className="mt-6 z-50 flex justify-between w-full items-end space-x-4"
              >
                <div>
                  {card.stat && (
                    <p className="text-2xl font-[450]">{card.stat}</p>
                  )}
                  {card.desc && (
                    <p className="mt-2 text-sm text-gray-700">{card.desc}</p>
                  )}
                </div>

                {card.buttonUrl && (
                  <Link
                    href={card.buttonUrl}
                    className="mt-6 z-50 inline-block px-5 py-2 bg-primary text-white rounded-full text-sm hover:bg-tertiary transition-colors"
                  >
                    {card.buttonText || "Learn More"}
                  </Link>
                )}
              </motion.div>
            )}

            {/* Minimal Arrow Button */}
            {isMinimal && card.buttonUrl && (
              <Link
                href={card.buttonUrl}
                className="absolute bottom-6 left-6 w-10 h-10 bg-white rounded-full flex items-center justify-center group"
              >
                <motion.div
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <ArrowUpRight className="text-primary" size={20} />
                </motion.div>
              </Link>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default TechnoBottomCard;
