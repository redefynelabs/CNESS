'use client'
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQProps {
  data: {
    badgeText: string;
    title: string;
    description: string;
    buttonText: string;
    QAs: {
      question: string;
      answer: string;
    }[];
  };
}

const FAQ: React.FC<FAQProps> = ({ data }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4 md:px-10 py-14 bg-gradient-to-b from-active to-white rounded-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {/* Left Side */}
        <div className="space-y-10 flex flex-col justify-between">
          <div className="space-y-5">
            <p className="text-xs uppercase px-4 py-1 rounded-full border border-gray-300 inline-block">
              {data.badgeText}
            </p>
            <h2 className="text-3xl md:text-5xl font-medium leading-tight">
              {data.title}
            </h2>
            <p className="text-gray-500">{data.description}</p>
          </div>
          <div>
            <button
              type="button"
              className="relative bg-primary group text-light px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-tertiary transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
              <span className="relative z-10 font-medium group-hover:text-foreground transition-colors duration-500 whitespace-nowrap text-sm sm:text-base">
                {data.buttonText}
              </span>
            </button>
          </div>
        </div>

        {/* Right Side - FAQ Accordion */}
        <div className="space-y-4">
          {data.QAs.map((qa, index) => (
            <div
              key={index}
              className="border-b border-gray-200  overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-5 py-4 text-left font-medium text-lg transition"
              >
                {qa.question}
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
                  {qa.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
