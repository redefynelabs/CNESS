import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

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

const TechnoBottomCard: React.FC<BottomCardProps> = ({ data }) => {
    return (
        <div className="grid md:grid-cols-2 gap-6 px-4 md:px-10 py-10 ">
            {data.map((card, index) => {
                const isMinimal = card.title && !card.desc && !card.stat && !card.badgeText;

                return (
                    <div
                        key={index}
                        className={`relative rounded-2xl p-8 flex flex-col h-full min-h-[70dvh] justify-between ${isMinimal
                            ? "bg-primary text-white"
                            : "bg-secondary text-primary"
                            }`}
                    >
                        {/* Badge + Icon (only for detailed card) */}
                        {!isMinimal && (
                            <div className="flex justify-between items-start z-50">
                                {card.badgeText && (
                                    <p className="text-xs uppercase px-3 py-1 rounded-full border border-gray-400 text-gray-700">
                                        {card.badgeText}
                                    </p>
                                )}
                                {card.icon?.url && (
                                    <div className="w-10 h-10 z-50 rounded-full  bg-primary flex items-center justify-center">
                                        <Image
                                            src={card.icon.url}
                                            alt={card.icon.name || "icon"}
                                            width={20}
                                            height={20}
                                        />
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Title */}
                        <h3
                            className={`mt-4 z-50 font-[400] ${isMinimal ? "text-3xl md:text-4xl leading-snug flex w-full justify-between gap-10 text-start items-start" : "text-xl md:text-2xl"
                                }`}
                        >
                            {card.title}
                            {isMinimal && <Image src={'/assets/star-tertiary.svg'}  alt="TertiaryStar.svg" width={30} height={30} />}
                        </h3>

                        {!isMinimal && (
                            <div>
                                <Image src={'/assets/hexagon-black.png'} alt="HexagonOverlay.svg" width={400} height={400} className=" absolute w-[80%] top-0 left-0 opacity-10 z-10 rounded-2xl" />
                            </div>
                        )}

                        {/* Detailed Content */}
                        {!isMinimal && (
                            <div className="mt-6 z-50 flex justify-between w-full items-end space-x-4">
                                <div>
                                    {card.stat && <p className="text-2xl font-medium">{card.stat}</p>}
                                    {card.desc && <p className="mt-2 text-sm text-gray-700">{card.desc}</p>}
                                </div>

                                {card.buttonUrl && (
                                    <Link
                                        href={card.buttonUrl}
                                        className="mt-6 z-50 inline-block px-5 py-2 bg-primary text-white rounded-full text-sm"
                                    >
                                        {card.buttonText || "Learn More"}
                                    </Link>
                                )}
                            </div>
                        )}

                        {/* Minimal Arrow Button */}
                        {isMinimal && card.buttonUrl && (
                            <Link
                                href={card.buttonUrl}
                                className="absolute bottom-6 left-6 w-10 h-10 bg-white rounded-full flex items-center justify-center"
                            >
                                <ArrowUpRight className="text-primary" size={20} />
                            </Link>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default TechnoBottomCard;
