'use client'

import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { motion, Variants, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface CardData {
    imageUrl: string
    buttonText: string
    buttonUrl: string
}

interface WhyUsData {
    title: string
    highlight: string
    description?: string
    badgeText: string
    buttonText?: string
    buttonUrl?: string
    imageUrl: any
    cards?: CardData[]
}

interface WhyUsProps {
    data: WhyUsData
}

const WhyUs = ({ data }: WhyUsProps) => {
    const {
        title,
        highlight = '',
        description = '',
        badgeText,
        buttonText = '',
        buttonUrl = '#',
        imageUrl,
    } = data

    // Split highlight by commas and trim spaces
    const highlightTexts = highlight.split(',').map((h) => h.trim()).filter(Boolean)

    // State for typing animation
    const [currentHighlightIndex, setCurrentHighlightIndex] = useState(0)

    useEffect(() => {
        if (highlightTexts.length === 0) return
        const interval = setInterval(() => {
            setCurrentHighlightIndex((prev) => (prev + 1) % highlightTexts.length)
        }, 3000) // Change text every 3 seconds
        return () => clearInterval(interval)
    }, [highlightTexts.length])

    // Animation variants
    const containerVariants: Variants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 0.6 } } }
    const itemVariants: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
    const buttonVariants: Variants = { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }, hover: { scale: 1.05, transition: { duration: 0.2 } } }
    const highlightVariants: Variants = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, exit: { opacity: 0, y: -10, transition: { duration: 0.3 } } }

    // Calculate max width of highlights to prevent layout shift
    const maxHighlightWidth = Math.max(...highlightTexts.map(text => text.length)) * 10

    return (
        <div className="py-12 md:py-20 lg:py-32 text-foreground bg-gradient-to-b from-white to-active">
            <motion.div
                className="w-full relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                <Image
                    src={imageUrl.url}
                    alt="Why Us Background"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                />

                <motion.div
                    className="md:absolute bottom-4 left-4 sm:bottom-8 sm:left-8 md:bottom-12 md:left-12 lg:bottom-20 lg:left-20 p-4 sm:p-6 bg-white/80 backdrop-blur-lg rounded-2xl min-w-[300px] max-w-4xl space-y-6 md:space-y-10 py-10"
                    variants={itemVariants}
                >
                    <div className="flex w-full justify-between items-center">
                        <motion.p
                            className="uppercase text-xs sm:text-sm px-3 sm:px-4 py-1 border border-gray-400 rounded-full"
                            variants={itemVariants}
                        >
                            {badgeText}
                        </motion.p>
                        <motion.div
                            className="bg-tertiary p-2 rounded-full"
                            variants={itemVariants}
                        >
                            <Image src="/assets/staricon.svg" alt="Star Icon" width={24} height={24} className="w-6 h-6 sm:w-8 sm:h-8" />
                        </motion.div>
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                        <motion.h1
                            className="font-medium text-xl sm:text-3xl md:text-4xl inline-flex md:flex-col items-start"
                            variants={itemVariants}
                        >
                            {title.split('{highlight}')[0]}
                            <div className="mx-1 md:my-1" style={{ minWidth: `${maxHighlightWidth}px` }}>
                                <AnimatePresence mode="wait">
                                    {highlightTexts.length > 0 && (
                                        <motion.span
                                            key={currentHighlightIndex}
                                            className="bg-tertiary rounded-xl px-2 py-1 inline-block"
                                            variants={highlightVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                        >
                                            {highlightTexts[currentHighlightIndex]}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </div>
                            {title.split('{highlight}')[1] || ''}
                        </motion.h1>

                        <div className='flex flex-col md:flex-row justify-between md:items-center space-y-2 space-x-6'>
                            {description && (
                                <motion.p className="text-sm sm:text-base md:text-lg" variants={itemVariants}>
                                    {description}
                                </motion.p>
                            )}

                            {buttonText && (
                                <motion.div variants={itemVariants}>
                                    <Link
                                        href={buttonUrl}
                                        className="relative bg-secondary group text-primary pl-4 pr-2 py-2 rounded-full flex font-medium items-center justify-center gap-3 cursor-pointer overflow-hidden"
                                        style={{ width: 'fit-content' }}
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-tertiary transform translate-x-full group-hover:translate-x-0"
                                            variants={buttonVariants}
                                            whileHover="hover"
                                            transition={{ duration: 0.5, ease: 'easeOut' }}
                                        />
                                        <span className="relative z-10 font-medium group-hover:text-foreground transition-colors duration-500 whitespace-nowrap text-sm sm:text-base">
                                            {buttonText}
                                        </span>
                                        <div className="bg-primary rounded-full p-1.5 text-secondary group-hover:animate-spin">
                                            <ArrowUpRight size={16} />
                                        </div>
                                    </Link>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default WhyUs
