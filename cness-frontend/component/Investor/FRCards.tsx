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
            cardClasses = "bg-primary text-white p-6";
          } else if (index === data.length - 1) {
            cardClasses = "bg-tertiary text-foreground p-6 border-gray-700";
          } else {
            cardClasses = "bg-primary text-white p-6"; // fallback for middle text cards
          }
        }

        return (
          <div
            key={card.id}
            className={`rounded-2xl shadow-lg overflow-hidden ${cardClasses}`}
          >
            {/* Image only card */}
            {isImageCard && (
              <img
                src={card?.image?.url}
                alt={"Funding Round Image"}
                className="w-full h-full object-cover rounded-2xl"
              />
            )}

            {/* Content card */}
            {isContentCard && (
              <div className="flex flex-col h-full justify-between gap-4">
                <div className="space-y-4 flex flex-col">
                  {card.badgeText && (
                    <span className="px-4 py-1 border border-gray-200 rounded-full text-sm font-semibold w-fit">
                      {card.badgeText}
                    </span>
                  )}
                  {card.title && (
                    <h3 className="text-xl font-medium">{card.title}</h3>
                  )}
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
