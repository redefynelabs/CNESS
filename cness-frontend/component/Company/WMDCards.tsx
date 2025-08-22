"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface WMDCardsProps {
  data: any;
}

const WMDCards: React.FC<WMDCardsProps> = ({ data }) => {
  return (
    <div className="grid gap-8 md:grid-cols-3 px-4 md:px-10 py-6 md:py-10">
      {data.map((card: any, index: number) => {
        const key = `${card.__component}-${card.id}-${index}`;

        /** ✨ Base animation variants */
        const cardVariants = {
          hidden: { opacity: 0, y: 40, scale: 0.95 },
          visible: { opacity: 1, y: 0, scale: 1 },
        };

        switch (card.__component) {
          /** 🟣 Review Card */
          case "company.review-wmd-card":
            return (
              <motion.div
                key={key}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                whileHover={{ scale: 1.03, backgroundColor: "rgba(240,240,240,0.8)" }}
                className="p-6 rounded-2xl bg-secondary backdrop-blur-md flex flex-col justify-between items-start transition-colors duration-300"
              >
                <div>
                  <Image
                    src={"/assets/quote.svg"}
                    alt={"Quotation.svg"}
                    width={30}
                    height={30}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg text-gray-700 mb-4">{card.comment}</p>
                  <div className="flex items-center justify-start space-x-2">
                    {card.avatar?.url && (
                      <Image
                        src={card.avatar.url}
                        alt={card.avatar.alternativeText || card.authorName}
                        width={30}
                        height={30}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <p className="font-[450] text-foreground">{card.authorName}</p>
                      <p className="text-xs uppercase text-gray-500">{card.profession}</p>
                    </div>
                  </div>
                </div>

                {card.buttonText && (
                  <Link
                    href={card.buttonUrl || "#"}
                    className="group inline-flex items-center mt-4"
                  >
                    <h1 className="bg-primary text-light font-[450] transition-colors duration-300 group-hover:bg-tertiary group-hover:text-foreground px-5 py-2 rounded-full">
                      {card.buttonText}
                    </h1>
                    <motion.p
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="bg-primary text-light font-[450] px-3 py-3 rounded-full ml-2"
                    >
                      <ArrowUpRight size={18} />
                    </motion.p>
                  </Link>
                )}
              </motion.div>
            );

          /** 🟣 Image Card */
          case "company.image-wmd-card":
            return (
              <motion.div
                key={key}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-2xl"
              >
                {card.backgroundImage?.url && (
                  <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                    <Image
                      src={card.backgroundImage.url}
                      alt={card.backgroundImage.alternativeText || "Background"}
                      width={card.backgroundImage.width || 800}
                      height={card.backgroundImage.height || 600}
                      className="w-full h-auto object-cover rounded-2xl transition-transform duration-500"
                    />
                  </motion.div>
                )}
              </motion.div>
            );

          /** 🟣 Content Card */
          case "company.content-wmd-card":
            return (
              <motion.div
                key={key}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                whileHover={{ scale: 1.04, rotateX: 3, rotateY: -3 }}
                className="relative p-6 rounded-2xl bg-primary text-white flex flex-col justify-between transition-transform duration-300"
              >
                <h3 className="text-2xl font-[450] mb-2 text-secondary">{card.title}</h3>
                {card.year && (
                  <span className="text-sm text-secondary opacity-80">
                    Published: {card.year}
                  </span>
                )}
                <Image
                  src={"/assets/cardstar.svg"}
                  alt={"Background"}
                  width={200}
                  height={200}
                  className="w-full h-auto object-cover rounded-2xl absolute bottom-0 right-0"
                />
              </motion.div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

export default WMDCards;
