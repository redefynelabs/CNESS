'use client'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion, Variants } from 'framer-motion'

interface AwardsData {
  title: string
  description: string
  badgeText: string
  buttonText: string
  buttonUrl: string
  imageUrl: any
}

interface AwardsProps {
  data: AwardsData
}

const Awards = ({ data }: AwardsProps) => {
  const {
    title,
    description,
    badgeText,
    buttonText,
    buttonUrl,
    imageUrl
  } = data

  // Animation variants for fade-in and slide-up
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <motion.div
      className='w-full px-4 md:px-6 lg:px-10 text-foreground flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pb-20 bg-gradient-to-b'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className='w-full' variants={itemVariants}>
        <Image
          src={imageUrl.url}
          alt='Investor Background'
          width={500}
          height={500}
          className='w-full rounded-3xl object-cover'
        />
      </motion.div>

      <motion.div
        className='flex flex-col items-start justify-between space-y-4 bg-tertiary rounded-3xl py-6 px-6 w-full md:w-1/2'
        variants={itemVariants}
      >
        <div className='flex flex-col items-start space-y-4'>
          <motion.p variants={itemVariants} className='px-4 py-1 rounded-full border border-primary'>
            {badgeText}
          </motion.p>
          <motion.h1 variants={itemVariants} className='text-4xl font-[450]'>
            {title}
          </motion.h1>
        </div>

        <div className='space-y-4'>
          <motion.p variants={itemVariants}>{description}</motion.p>
          <motion.div variants={itemVariants}>
            <Link
              href={buttonUrl}
              className='group inline-flex items-center w-full sm:w-auto md:justify-center'
            >
              <div className='relative px-4 sm:px-6 py-2 sm:py-3 bg-primary text-light rounded-full overflow-hidden transition-all duration-500 group-hover:bg-transparent'>
                <div className='absolute inset-0 bg-secondary transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out'></div>
                <span className='relative z-10 font-[450] group-hover:text-foreground transition-colors duration-500 whitespace-nowrap text-sm sm:text-base'>
                  {buttonText}
                </span>
              </div>
              <div className='relative p-2 sm:p-3 bg-primary text-light rounded-full overflow-hidden transition-all duration-500 group-hover:bg-transparent'>
                <div className='absolute inset-0 bg-secondary transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out'></div>
                <div className='relative z-10 group-hover:text-foreground transition-all duration-500 group-hover:rotate-45 group-hover:scale-110 group-hover:animate-spin'>
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Awards