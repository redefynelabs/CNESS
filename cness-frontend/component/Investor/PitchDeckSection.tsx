import React from "react";

interface PitchDeckSectionProps {
  data: {
    badgeText: string;
    title: string;
    highlight: string;
    description: string;
    buttonText: string;
  };
}

const PitchDeckSection: React.FC<PitchDeckSectionProps> = ({ data }) => {
  const { badgeText, title, highlight, description, buttonText } = data;

  // Safe highlight handling
  const parts = title.includes(highlight)
    ? title.split(highlight)
    : [title, ""];

  return (
    <section className="py-14 px-4 md:px-10 bg-gradient-to-b from-white to-active">
      <div className="text-center mb-12 flex items-center flex-col gap-6 max-w-2xl mx-auto">
        {/* Badge */}
        <p className="text-xs uppercase px-4 py-1 rounded-full border border-gray-300">
          {badgeText}
        </p>

        {/* Title with highlight */}
        <h2 className="text-3xl md:text-5xl font-[450] leading-tight">
          {parts[0]}
          <span className="text-tertiary">{highlight}</span>
          {parts[1]}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-base md:text-lg">{description}</p>

        {/* CTA Button */}
        <div>
          <button
            type="button"
            className="relative bg-primary group text-light px-6 py-3 rounded-full flex font-[450] items-center justify-center gap-3 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-tertiary transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            <span className="relative z-10 font-[450] group-hover:text-foreground transition-colors duration-500 whitespace-nowrap text-sm sm:text-base">
              {buttonText}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PitchDeckSection;
