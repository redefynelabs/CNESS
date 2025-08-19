'use client'
import Image from 'next/image';
import React from 'react';
import { motion, Variants } from 'framer-motion';

// Animation variants
const containerVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const buttonVariants: Variants = {
    hover: { scale: 1.1 },
    initial: { scale: 1 },
};

interface SubscribeProps {
    data: {
        data: {
            attributes: {
                icon: { url: string; alt: string };
                title: string;
                inputPlaceholder: string;
                buttonText: string;
                backgroundImage: { url: string; alt: string };
            };
        };
    };
}

const Subscribe: React.FC<SubscribeProps> = ({ data }) => {
    const { attributes } = data.data;

    return (
        <div className="flex flex-col lg:flex-row w-full justify-between bg-primary">
            <motion.div
                className="flex items-start flex-col w-full h-full justify-between lg:w-1/2  py-8 px-4 sm:px-6 md:px-10  space-y-14 md:space-y-32"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="bg-active rounded-full p-3">
                    <Image
                        src={attributes.icon.url}
                        alt={attributes.icon.alt}
                        width={20}
                        height={20}
                        className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                </div>

                <div className="space-y-6 w-full max-w-lg">
                    <h1
                        className="text-light font-semibold text-3xl md:text-5xl"
                        dangerouslySetInnerHTML={{ __html: attributes.title }}
                    />
                    <form className="flex flex-col items-start sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full">
                        <input
                            type="email"
                            placeholder={attributes.inputPlaceholder}
                            className="bg-active px-4 py-2 border border-light rounded-full text-foreground focus:ring-none w-[70%] text-sm sm:text-base"
                        />
                        <motion.button
                            className="relative bg-secondary group text-primary px-4 py-2 rounded-full flex font-medium items-center justify-center gap-3 cursor-pointer overflow-hidden  "
                            variants={buttonVariants}
                            initial="initial"
                            whileHover="hover"
                            transition={{ duration: 0.3 }}
                        >
                            <div className="absolute inset-0 bg-tertiary transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                            <span className="relative z-10 font-semibold group-hover:text-foreground transition-colors duration-500 whitespace-nowrap text-sm sm:text-base">
                                {attributes.buttonText}
                            </span>
                        </motion.button>
                    </form>
                </div>
            </motion.div>
            <div className="w-full lg:w-1/2">
                <Image
                    src={attributes.backgroundImage.url}
                    alt={attributes.backgroundImage.alt}
                    width={500}
                    height={500}
                    className="w-full h-auto"
                />
            </div>
        </div>
    );
};


export default Subscribe;