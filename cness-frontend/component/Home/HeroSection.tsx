'use client'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion, useScroll, useTransform, Variants } from 'framer-motion'

interface HeroSectionProps {
    heroData: any;
}

const HeroSection: React.FC<HeroSectionProps> = ({ heroData }) => {


    // Animation variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                duration: 0.6
            }
        }
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.25, 0, 1]
            }
        }
    }

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.25, 0, 1]
            }
        }
    }

    const { title, highlight, buttons, backgroundImage, cards } = heroData.data.attributes

    return (
        <motion.div
            className='mt-20 border-t border-gray-200 min-h-dvh flex flex-col bg-gradient-to-b from-white to-[#f7f6f4]'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div
                className='flex flex-col md:flex-row w-full items-start md:items-end space-y-8 md:space-y-0 md:space-x-20 py-12 px-4 sm:px-6 lg:px-10'
                variants={containerVariants}
            >
                <motion.div variants={itemVariants}>
                    <motion.h1
                        className='text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-foreground'
                        variants={itemVariants}
                    >
                        {title.split(highlight)[0]}
                        <br />
                        <span className='text-tertiary'>{highlight}</span>
                    </motion.h1>
                </motion.div>

                <motion.div
                    className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto'
                    variants={itemVariants}
                >
                    {buttons.map((button: { url: string; text: string; isPrimary?: boolean }, index: number) => (
                        <Link
                            key={index}
                            href={button.url}
                            className="group inline-flex items-center w-full sm:w-auto md:justify-center"
                        >
                            <div className={`relative px-4 sm:px-6 py-2 sm:py-3 ${button.isPrimary ? 'bg-primary !text-light' : 'bg-white !text-foreground border border-gray-300'} rounded-full overflow-hidden transition-all duration-500 group-hover:bg-transparent`}>
                                <div className="absolute inset-0 bg-tertiary transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                                <span className="relative z-10 font-semibold group-hover:text-foreground transition-colors duration-500 whitespace-nowrap text-sm sm:text-base">
                                    {button.text}
                                </span>
                            </div>
                            {button.isPrimary && (
                                <div className="relative p-2 sm:p-3 bg-primary text-light rounded-full overflow-hidden transition-all duration-500 group-hover:bg-transparent">
                                    <div className="absolute inset-0 bg-tertiary transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                                    <div className="relative z-10 group-hover:text-foreground transition-all duration-500 group-hover:rotate-45 group-hover:scale-110 group-hover:animate-spin">
                                        <ArrowUpRight size={20} />
                                    </div>
                                </div>
                            )}
                        </Link>
                    ))}
                </motion.div>
            </motion.div>

            <motion.div
                className='w-full relative text-foreground'
                variants={itemVariants}
            >
                <motion.div
                    className="overflow-hidden"
                >
                    <Image
                        src={backgroundImage.data.attributes.url}
                        alt={backgroundImage.data.attributes.alt}
                        width={backgroundImage.data.attributes.width}
                        height={backgroundImage.data.attributes.height}
                        className='w-full min-h-[30dvh] h-auto object-cover'
                    />
                </motion.div>

                <motion.div
                    className='flex flex-col md:flex-row w-full absolute top-[50%] md:top-auto md:-bottom-32 px-4 md:px-10 space-y-6 space-x-6 mx-auto'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    {cards.map((card: any, index: number) => (
                        card.isBackgroundImage ? (
                            <div
                                key={index}
                                className="relative rounded-2xl  w-full md:w-[30%]"
                                
                            >
                                <motion.div className='relative flex p-6 space-x-6 w-full  rounded-2xl' whileHover={{
                                    scale: 1.02,
                                    transition: { duration: 0.2 }
                                }} style={{
                                    backgroundImage: `url(${card.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    height: '90%'
                                }} >
                                    <div className="bg-white/70 backdrop-blur-md rounded-2xl p-3 flex flex-col justify-between space-y-10 shadow-sm">
                                        <Image
                                            src={card.icon}
                                            alt={card.iconAlt}
                                            width={card.iconWidth}
                                            height={card.iconHeight}
                                        />
                                        <div className='space-y-2'>
                                            <p className="text-base font-semibold">{card.statText}</p>
                                            <motion.h1
                                                className="text-2xl font-semibold text-primary"
                                                viewport={{ once: true }}
                                            >
                                                {card.statValue}
                                            </motion.h1>
                                        </div>
                                    </div>

                                </motion.div>
                            </div>
                        ) : (
                            <motion.div
                                key={index}
                                className={`bg-white/90 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-2xl flex flex-col md:flex-row p-6 space-x-6 w-full ${index === 0 ? 'md:w-[40%]' : 'md:w-auto'}`}
                                variants={cardVariants}
                                whileHover={{
                                    scale: 1.02,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                {card.title && (
                                    <div className='flex md:flex-col justify-between w-full md:w-[40%] p-4 md:p-2'>
                                        <h1 className='text-2xl font-semibold'>{card.title}</h1>
                                        {card.linkText && (
                                            <div className='group flex items-center space-x-2 text-sm'>
                                                <Link href={card.linkUrl}>{card.linkText}</Link>
                                                <div className='bg-primary rounded-full p-1 text-secondary group-hover:animate-spin'>
                                                    <ArrowUpRight size={12} />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}

                                <div className='bg-white rounded-2xl px-6 py-4 flex justify-between w-full space-x-4 items-end'>
                                    <div className=' flex flex-col justify-between space-y-10'>
                                        <Image
                                            src={card.icon}
                                            alt={card.iconAlt}
                                            width={card.iconWidth}
                                            height={card.iconHeight}
                                        />
                                        <div className='space-y-2'>
                                            <p className='text-base font-semibold'>{card.statText}</p>
                                            <motion.h1
                                                className='text-2xl font-semibold text-primary'
                                            >
                                                {card.statValue}
                                            </motion.h1>
                                        </div>

                                    </div>
                                    {card.image && (
                                        <div>
                                            <Image
                                                src={card.image}
                                                alt={card.imageAlt}
                                                width={card.imageWidth}
                                                height={card.imageHeight}
                                                className=' rounded-2xl'
                                            />
                                        </div>
                                    )}
                                </div>


                            </motion.div>
                        )
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default HeroSection