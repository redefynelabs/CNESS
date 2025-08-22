import Link from "next/link";
import Image from "next/image";
import React from "react";

interface OfficeCard {
  badgeText: string;
  name: string;
  Address: string;
  link: string;
}

interface OfficeProps {
  data: {
    title: string;
    OfficeLocationCards: OfficeCard[];
  };
}

const OfficeLocation: React.FC<OfficeProps> = ({ data }) => {
  return (
    <div className="px-6 md:px-16 py-16 bg-gray-50 relative">
      <h2 className="text-3xl md:text-4xl font-[450] text-start mb-12 text-gray-800">
        {data.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.OfficeLocationCards.map((card, idx) => {
          const isFirstCard = idx === 0;

          return (
            <div
              key={idx}
              className={`relative rounded-2xl p-6 flex flex-col justify-between transition-shadow duration-300 ${
                isFirstCard
                  ? "bg-primary text-white border-gray-400"
                  : "bg-white border border-gray-300"
              }`}
            >
              {/* Badge */}
              <span
                className={`text-xs font-[450] uppercase px-3 py-1 rounded-full w-fit mb-4 ${
                  isFirstCard
                    ? "bg-white/20 text-white border-gray-400"
                    : "text-primary border-primary border"
                }`}
              >
                {card.badgeText}
              </span>

              {/* Name */}
              <h3 className={`text-xl font-[450] mb-2 ${isFirstCard ? "text-white" : "text-gray-800"}`}>
                {card.name}
              </h3>

              {/* Address */}
              <p className={`whitespace-pre-line mb-4 ${isFirstCard ? "text-white/90" : "text-gray-600"}`}>
                {card.Address}
              </p>

              {/* Link */}
              <Link
                href={card.link}
                className={`font-[450] mt-auto ${
                  isFirstCard
                    ? "text-white underline"
                    : "text-primary hover:underline"
                }`}
              >
                Get Directions
              </Link>

              {/* Star image for first card */}
              {isFirstCard && (
                <Image
                  src="/assets/cardstar.svg"
                  alt="Star"
                  width={200}
                  height={200}
                  className="absolute right-0 bottom-0 rounded-2xl opacity-80"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OfficeLocation;
