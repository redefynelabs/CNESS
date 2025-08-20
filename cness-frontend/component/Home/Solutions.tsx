'use client'

import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface CardData {
  image: any
  linkText: string
  linkUrl: string
}

interface SolutionHeadData {
  title: string
  highlight: string
  description?: string
  badgeText: string
  buttonText?: string
  buttonUrl?: string
  descriptionPosition?: 'left' | 'right'
  buttonPosition?: 'left' | 'right'
}

interface SolutionsData {
  solutionHead: SolutionHeadData
  cards?: CardData[]
}

interface SolutionsProps {
  data: SolutionsData
}

const Solutions = ({ data }: SolutionsProps) => {
  // Normalize data
  const solutionHead = data.solutionHead || {}
  const cards = data.cards || []

  const {
    title = '',
    highlight = '',
    description = '',
    badgeText = '',
    buttonText = '',
    buttonUrl = '#',
    descriptionPosition = 'right',
    buttonPosition = 'left',
  } = solutionHead

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, duration: 0.6 } },
  }

  const itemVariants: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }
  const buttonVariants: Variants = { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }, hover: { scale: 1.05, transition: { duration: 0.2 } } }
  const cardVariants: Variants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

  const isDescriptionLeft = description && descriptionPosition === 'left'
  const isButtonLeft = buttonText && buttonPosition === 'left'

  return (
    <div className="w-full min-h-screen p-4">
      <motion.div
        className="bg-primary w-full px-4 md:px-6 lg:px-10 py-10 md:py-20 flex flex-col text-light rounded-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          {/* Left Side: Always contains badge and heading, optionally description and/or button */}
          <motion.div
            className="flex flex-col items-start space-y-6 max-w-2xl order-1"
            variants={itemVariants}
          >
            <motion.p
              className="text-xs uppercase  px-4 py-1 rounded-full border border-gray-300"
              variants={itemVariants}
            >
              {badgeText}
            </motion.p>
            <motion.h1
              className=" text-2xl md:text-5xl font-medium"
              variants={itemVariants}
            >
              {title.split(highlight)[0]}
              <span className="text-tertiary">{highlight}</span>
            </motion.h1>
            {isDescriptionLeft && (
              <motion.p className="text-lg" variants={itemVariants}>
                {description}
              </motion.p>
            )}
            {isButtonLeft && buttonText && (
              <motion.a
                href={buttonUrl}
                className="relative bg-secondary group text-primary pl-4 pr-2 py-2 rounded-full flex font-medium items-center justify-center gap-3 cursor-pointer overflow-hidden "
                variants={buttonVariants}
                whileHover="hover"
              >
                <div className="absolute inset-0 bg-tertiary transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                <span className="relative z-10 font-semibold group-hover:text-foreground transition-colors duration-500 whitespace-nowrap text-sm sm:text-base">
                  {buttonText}
                </span>
                <div className="bg-primary rounded-full p-1.5 text-secondary group-hover:animate-spin">
                  <ArrowUpRight size={16} />
                </div>
              </motion.a>
            )}
          </motion.div>

          {/* Right Side: Optionally contains description and/or button */}
          <motion.div
            className="flex flex-col items-start space-y-6 max-w-md order-2"
            variants={itemVariants}
          >
            {!isDescriptionLeft && description && (
              <motion.p className="text-lg" variants={itemVariants}>
                {description}
              </motion.p>
            )}
            {!isButtonLeft && buttonText && (
              <motion.a
                href={buttonUrl}
                className="relative bg-secondary group text-primary pl-4 pr-2 py-2 rounded-full flex font-medium items-center justify-center gap-3 cursor-pointer overflow-hidden"
                variants={buttonVariants}
                whileHover="hover"
              >
                <div className="absolute inset-0 bg-tertiary transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                <span className="relative z-10 font-semibold group-hover:text-foreground transition-colors duration-500 whitespace-nowrap text-sm sm:text-base">
                  {buttonText}
                </span>
                <div className="bg-primary rounded-full p-1.5 text-secondary group-hover:animate-spin">
                  <ArrowUpRight size={16} />
                </div>
              </motion.a>
            )}
          </motion.div>
        </div>

        {/* Four Cards Section */}
        {cards.length > 0 && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-4 gap-6 mt-10 w-full"
            variants={containerVariants}
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-start justify-between bg-tertiary rounded-2xl shadow-lg overflow-hidden aspect-[3/4] text-primary"
                variants={cardVariants}
              >
                <Image
                  src={card.image.url}
                  alt={`Card ${index + 1}`}
                  width={200}
                  height={200}
                  className=" object-cover"
                />
                <div className=" py-5 px-4 w-full flex items-end justify-end group">
                  <motion.a
                    href={card.linkUrl}
                    className="relative flex w-full justify-between items-center text-2xl"
                    variants={buttonVariants}
                    whileHover="hover"
                  >
                    
                      {card.linkText}
                    <div className="bg-primary rounded-full p-1.5 text-secondary group-hover:animate-spin">
                      <ArrowUpRight size={20} />
                    </div>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default Solutions