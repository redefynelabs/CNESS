'use client'
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface FundingRoundCardProps {
  data: any[];
}

const FRCards: React.FC<FundingRoundCardProps> = ({ data }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6 px-4 md:px-10 pb-10">
      {data.map((card, index) => {
        const isContentCard = card.badgeText || card.title || card.description;
        const isImageCard = card.image && !isContentCard;

        // Styles for content cards
        let cardClasses = "";
        if (isContentCard) {
          if (index === 0) cardClasses = "bg-primary text-light";
          else if (index === data.length - 1)
            cardClasses = "bg-tertiary text-foreground border-primary";
          else cardClasses = "bg-primary text-light border-gray-300";
        }

        return (
          <motion.div
            key={card.id || index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className={`rounded-2xl overflow-hidden h-full ${
              isContentCard ? "p-8" : ""
            } ${cardClasses}`}
          >
            {/* Image Card */}
            {isImageCard && (
              <Image
                src={card.image.url}
                alt={card.image.name || "Funding round image"}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
              />
            )}

            {/* Content Card */}
            {isContentCard && (
              <div className="flex flex-col min-h-[50dvh] h-full justify-between gap-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-4 flex flex-col">
                    {card.badgeText && (
                      <span className="px-4 py-1 border rounded-full text-xs font-[450] w-fit uppercase">
                        {card.badgeText}
                      </span>
                    )}
                    {card.title && (
                      <h3 className="text-3xl font-[400] leading-snug">
                        {card.title}
                      </h3>
                    )}
                  </div>
                  <Image
                    src={"/assets/star-tertiary.svg"}
                    alt="Star"
                    width={30}
                    height={30}
                  />
                </div>

                {card.description && (
                  <p className="text-sm whitespace-pre-line">
                    {card.description}
                  </p>
                )}
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default FRCards;
