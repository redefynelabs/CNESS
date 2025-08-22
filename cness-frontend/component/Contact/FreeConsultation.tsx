'use client'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface FreeConsultationData {
  title: string
  description: string
  badgeText: string
  buttonText: string
  buttonUrl: string
  imageUrl: any
}

interface FreeConsultationProps {
  data: FreeConsultationData
}

const FreeConsultation = ({ data }: FreeConsultationProps) => {
  const {
    title,
    description,
    badgeText,
    buttonText,
    buttonUrl,
    imageUrl
  } = data

  return (
    <div className='w-full  px-4 md:px-6 lg:px-10 text-foreground flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pb-20 bg-gradient-to-b '>
      <div className='w-full'>
        <Image
          src={imageUrl.url}
          alt='Investor Background'
          width={500}
          height={500}
          className='w-full rounded-3xl object-cover'
        />
      </div>

      <div className='flex flex-col items-start justify-between space-y-4 bg-secondary rounded-3xl py-6 px-6 w-full md:w-1/2'>
        <div className='flex justify-between items-start space-y-4 w-full'>
          <div className=' flex flex-col items-start space-y-4'>
            <p className='px-4 py-1 rounded-full border border-primary uppercase text-sm'>{badgeText}</p>
            <h1 className='text-4xl font-[450] capitalize'>{title}</h1>
          </div>
          <div>
            <Image src={'/assets/staricon.svg'} alt='Star' height={30} width={30} />
          </div>
        </div>

        <div className='space-y-4'>
          <p>{description}</p>
          <Link
            href={buttonUrl}
            className='group inline-flex items-center w-full sm:w-auto md:justify-center'
          >
            <div className='relative px-4 sm:px-6 py-2 sm:py-3 bg-primary text-light rounded-full overflow-hidden transition-all duration-500 group-hover:bg-transparent'>
              <div className='absolute inset-0 bg-tertiary transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out'></div>
              <span className='relative z-10 font-[450] group-hover:text-foreground transition-colors duration-500 whitespace-nowrap text-sm sm:text-base'>
                {buttonText}
              </span>
            </div>
            <div className='relative p-2 sm:p-3 bg-primary text-light rounded-full overflow-hidden transition-all duration-500 group-hover:bg-transparent'>
              <div className='absolute inset-0 bg-tertiary transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out'></div>
              <div className='relative z-10 group-hover:text-foreground transition-all duration-500 group-hover:rotate-45 group-hover:scale-110 group-hover:animate-spin'>
                <ArrowUpRight size={20} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FreeConsultation