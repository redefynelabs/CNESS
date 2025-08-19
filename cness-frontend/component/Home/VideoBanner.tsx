'use client'
import React, { useState, useRef } from 'react'
import { motion, Variants } from 'framer-motion'

interface VideoBannerProps {
    videoBanner: any; 
}

const VideoBanner: React.FC<VideoBannerProps> = ({ videoBanner }) => {
    const [isPlaying, setIsPlaying] = useState(true)
    const videoRef = useRef<HTMLVideoElement>(null)

    // Animation variants for the video
    const videoVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95, y: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.25, 0, 1],
            },
        },
    }

    // Animation variants for the button
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
            scale: 1.1,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            transition: {
                duration: 0.2,
            },
        },
    }

    // Toggle play/pause
    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    return (
        <motion.div
            className="px-4 md:px-6 lg:px-10 py-10 bg-[#f7f6f4]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2 },
                },
            }}
        >
            {/* Spacer */}
            <div className="pt-[60dvh] md:pt-[30dvh]"></div>
            <motion.div className="md:px-10 rounded-3xl relative" variants={videoVariants}>
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    playsInline
                    muted
                    className="rounded-3xl w-full h-auto object-cover"
                >
                    <source src={videoBanner} type="video/mp4" />
                </video>
                {/* Play/Pause Button */}
                <motion.button
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-sm rounded-full p-3 cursor-pointer text-foreground"
                    variants={buttonVariants}
                    whileHover="hover"
                    initial="hidden"
                    animate="visible"
                    onClick={togglePlayPause}
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                    {isPlaying ? <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
                    </svg>
                    </div> : <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                    </svg>
                    </div>}
                </motion.button>
            </motion.div>
            {/* Spacer */}
            <div className="pb-[10dvh]"></div>
        </motion.div>
    )
}

export default VideoBanner