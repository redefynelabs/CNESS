import Image from "next/image";
import React from "react";

interface FundingRoundCardProps {
  data: any;
}

const FRCards: React.FC<FundingRoundCardProps> = ({ data }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6 px-4 md:px-10 pb-10">
      {data.map((card: any, index: number) => {
        const isContentCard = card.badgeText || card.title || card.description;
        const isImageCard = card.image && !isContentCard;

        // Assign styles based on card position
        let cardClasses = "";
        if (isContentCard) {
          if (index === 0) {
            cardClasses = "bg-primary text-light p-8";
          } else if (index === data.length - 1) {
            cardClasses = "bg-tertiary text-foreground p-8  border-primary";
          } else {
            cardClasses = "bg-primary text-light p-8  border-gray-300"; // fallback for middle text cards
          }
        }

        return (
          <div
            key={card.id}
            className={`rounded-2xl overflow-hidden ${cardClasses}`}
          >
            {/* Image only card */}
            {isImageCard && (
              <Image
                src={card?.image?.url}
                alt={"Funding Round Image"}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-2xl"
              />
            )}

            {/* Content card */}
            {isContentCard && (
              <div className="flex flex-col h-full justify-between gap-4">
                <div className="space-y-4 flex gap-4">
                  <div className=" space-y-8 flex flex-col">
                    {card.badgeText && (
                      <span className="px-4 py-1 border  rounded-full text-xs font-medium w-fit uppercase">
                        {card.badgeText}
                      </span>
                    )}
                    {card.title && (
                      <h3 className=" text-3xl font-[400]">{card.title}</h3>
                    )}
                  </div>
                  <div>
                    <Image src={'/assets/star-tertiary.svg'} alt="Star" width={30} height={30} />
                  </div>
                </div>

                {card.description && (
                  <p className="text-sm whitespace-pre-line">
                    {card.description}
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FRCards;
