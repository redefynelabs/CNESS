'use client'
import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'

interface ReusableHeadData {
  title: string
  highlight: string
  description?: string
  badgeText: string
  buttonText?: string
  buttonUrl?: string
  descriptionPosition?: string
  buttonPosition?: string
  imageUrl?: any 
}

interface ReusableHeadProps {
  data: ReusableHeadData
}

const ReusableHead = ({ data }: ReusableHeadProps) => {
  const {
    title,
    highlight,
    description = '',
    badgeText,
    buttonText = '',
    buttonUrl = '#',
    descriptionPosition = 'right',
    buttonPosition = 'left',
    imageUrl,
  } = data

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  }

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  }

  const imageVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.4,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  }

  const isDescriptionLeft = description && descriptionPosition === 'left'
  const isButtonLeft = buttonText && buttonPosition === 'left'

  return (
    <motion.div
      className="px-4 md:px-6 lg:px-10 text-foreground flex flex-col"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="flex flex-col md:flex-row justify-between gap-6">
        {/* Left Side: Content aligned to start */}
        <motion.div
          className="flex flex-col items-start justify-start space-y-6 max-w-2xl order-1"
          variants={itemVariants}
        >
          <motion.p
            className="text-xs uppercase px-4 py-1 rounded-full border border-gray-300"
            variants={itemVariants}
          >
            {badgeText}
          </motion.p>
          <motion.h1
            className="text-3xl md:text-5xl font-[450]"
            variants={itemVariants}
          >
            {title.split(highlight)[0]}
            <span className="text-tertiary">{highlight}</span>
          </motion.h1>
          {isDescriptionLeft && (
            <motion.p className=" text-sm md:text-base" variants={itemVariants}>
              {description}
            </motion.p>
          )}
          {isButtonLeft && buttonText && (
            <motion.a
              href={buttonUrl}
              className="relative bg-secondary group text-primary pl-4 pr-2 py-2 rounded-full flex font-[450] items-center justify-center gap-3 cursor-pointer overflow-hidden"
              variants={buttonVariants}
              whileHover="hover"
            >
              <div className="absolute inset-0 bg-tertiary transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
              <span className="relative z-10 font-[450] group-hover:text-foreground transition-colors duration-500 whitespace-nowrap text-sm sm:text-base">
                {buttonText}
              </span>
              <div className="bg-primary rounded-full p-1.5 text-secondary group-hover:animate-spin">
                <ArrowUpRight size={16} />
              </div>
            </motion.a>
          )}
        </motion.div>

        {/* Right Side: Content aligned to end */}
        <motion.div
          className="flex flex-col items-end justify-end space-y-6 max-w-xl order-2"
          variants={itemVariants}
        >
          {!isDescriptionLeft && description && (
            <motion.p className="text-sm md:text-base" variants={itemVariants}>
              {description}
            </motion.p>
          )}
          {!isButtonLeft && buttonText && (
            <motion.a
              href={buttonUrl}
              className="relative bg-secondary group text-primary pl-4 pr-2 py-2 rounded-full flex font-[450] items-center justify-center gap-3 cursor-pointer overflow-hidden"
              variants={buttonVariants}
              whileHover="hover"
            >
              <div className="absolute inset-0 bg-tertiary transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
              <span className="relative z-10 font-[450] group-hover:text-foreground transition-colors duration-500 whitespace-nowrap text-sm sm:text-base">
                {buttonText}
              </span>
              <div className="bg-primary rounded-full p-1.5 text-secondary group-hover:animate-spin">
                <ArrowUpRight size={16} />
              </div>
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Optional Full-Width Image at the Bottom */}
      {imageUrl && (
        <motion.div
          className="w-full mt-10"
          variants={imageVariants}
        >
          <Image
            src={imageUrl.url}
            alt="Section Image"
            width={1000}
            height={1000}
            className="w-full min-h-[50dvh] h-auto object-cover rounded-3xl"
          />
        </motion.div>
      )}
    </motion.div>
  )
}

export default ReusableHead