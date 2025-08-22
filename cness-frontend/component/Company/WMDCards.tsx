import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface WMDCardsProps {
    data: any;
}

const WMDCards: React.FC<WMDCardsProps> = ({ data }) => {

    return (
        <div className="grid gap-8 md:grid-cols-3 px-4 md:px-10 py-6 md:py-10">
            {data.map((card: any, index: number) => {
                const key = `${card.__component}-${card.id}-${index}`;
                switch (card.__component) {
                    /** 🟣 Review Card */
                    case "company.review-wmd-card":
                        return (
                            <div
                                key={key}
                                className="p-6 rounded-2xl bg-secondary backdrop-blur-md flex flex-col justify-between items-start"
                            >
                                <div>
                                    <Image
                                        src={'/assets/quote.svg'}
                                        alt={"Quotation.svg"}
                                        width={30}
                                        height={30}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                </div>
                                <div>

                                    <p className=" text-lg text-gray-700 mb-4">{card.comment}</p>

                                    <div className=" flex items-center justify-start space-x-2">

                                        {card.avatar?.url && (
                                            <Image
                                                src={card.avatar.url}
                                                alt={card.avatar.alternativeText || card.authorName}
                                                width={30}
                                                height={30}
                                                className="w-10 h-10 rounded-full object-cover"
                                            />
                                        )}
                                        <div className=" ">

                                            <p className="font-medium text-foreground">{card.authorName}</p>
                                            <p className="text-xs uppercase text-gray-500 ">{card.profession}</p>
                                        </div>
                                    </div>
                                </div>


                                {card.buttonText && (
                                    <Link
                                        href={card.buttonUrl || "#"}
                                        className="group inline-flex items-center "
                                    >
                                        <h1 className="bg-primary text-light font-medium transition group-hover:bg-tertiary group-hover:text-foreground  px-5 py-2 rounded-full">
                                            {card.buttonText}
                                        </h1>
                                        <p className="bg-primary text-light font-medium transition group-hover:bg-tertiary group-hover:text-foreground p-3 rounded-full">
                                            <ArrowUpRight size={18} className="group-hover:animate-spin transition" />
                                        </p>
                                    </Link>
                                )}
                            </div>
                        );

                    /** 🟣 Image Card */
                    case "company.image-wmd-card":

                        return (
                            <div
                                key={key}
                                className="relative overflow-hidden rounded-2xl "
                            >
                                {card.backgroundImage?.url && (
                                    <Image
                                        src={card.backgroundImage.url}
                                        alt={card.backgroundImage.alternativeText || "Background"}
                                        width={card.backgroundImage.width || 800}
                                        height={card.backgroundImage.height || 600}
                                        className="w-full h-auto object-cover rounded-2xl"
                                    />
                                )}
                            </div>
                        );

                    /** 🟣 Content Card */
                    case "company.content-wmd-card":

                        return (
                            <div
                                key={key}
                                className=" relative  p-6 rounded-2xl bg-primary text-white flex flex-col justify-between"
                            >
                                <h3 className="text-2xl font-medium mb-2 text-secondary">{card.title}</h3>
                                {card.year && (
                                    <span className="text-sm text-secondary opacity-80">Published: {card.year}</span>
                                )}
                                <Image
                                    src={'/assets/cardstar.svg'}
                                    alt={"Background"}
                                    width={200}
                                    height={200}
                                    className="w-full h-auto object-cover rounded-2xl absolute bottom-0 right-0"
                                />
                            </div>
                        );

                    default:
                        return null;
                }
            })}
        </div>
    );
};

export default WMDCards;
