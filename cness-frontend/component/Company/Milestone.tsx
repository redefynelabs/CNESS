"use client"
import Image from "next/image"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface MilestoneCard {
  id: number
  title: string
  desc: string
  badgeText: string
  backgroundImage: {
    url: string
    name: string
  }
}

interface MilestoneSectionProps {
  data: {
    badgeText: string
    title: string
    highlight: string
    MilestoneCards: MilestoneCard[]
  }
}

const MilestoneSection: React.FC<MilestoneSectionProps> = ({ data }) => {
  const [activeCard, setActiveCard] = useState(data.MilestoneCards[0])

  return (
    <section className="py-16 mx-auto relative overflow-hidden">
      {/* Section Head */}
      <div className="text-center mb-12 flex items-center flex-col gap-6">
        <p className="text-xs uppercase px-4 py-1 rounded-full border border-gray-300">
          {data.badgeText}
        </p>
        <h2 className="text-5xl font-[450]">
          {data.title.split(data.highlight)[0]}
          <span className="text-tertiary">{data.highlight}</span>
        </h2>
      </div>

      {/* Background & Content */}
      <div className="relative w-full mx-auto min-h-dvh px-4 md:px-10">
        {/* Smooth background transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCard.id}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${activeCard.backgroundImage.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
          />
        </AnimatePresence>

        {/* Content Card */}
        <div className="absolute bottom-20 md:bottom-16 md:left-16 w-1/2 max-w-md md:max-w-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCard.id}
              className="bg-white/80 backdrop-blur-lg rounded-2xl min-w-[350px] max-w-lg space-y-6 md:space-y-20 py-6 md:py-10 px-4 md:px-10 relative z-10"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="space-y-2">
                <div className="flex w-full justify-between items-center">
                  <p className="uppercase text-xs sm:text-sm px-3 sm:px-4 py-1 border border-gray-400 rounded-full">
                    {activeCard.badgeText}
                  </p>
                  <div className="bg-tertiary p-2 rounded-full">
                    <Image
                      src="/assets/staricon.svg"
                      alt="Star Icon"
                      width={18}
                      height={18}
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                  </div>
                </div>
                <h3 className="font-[450] text-2xl text-gray-900">
                  {activeCard.title}
                </h3>
              </div>
              <p className="text-gray-600 mt-2 whitespace-pre-line">
                {activeCard.desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Badge Buttons */}
        <div className="absolute bottom-6 md:bottom-16 md:right-16 flex items-center space-x-4  z-10">
          {data.MilestoneCards.map((card) => (
            <motion.button
              key={card.id}
              onClick={() => setActiveCard(card)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={`px-4 py-2 rounded-full font-[450] backdrop-blur-md border transition-all duration-300
                ${
                  activeCard.id === card.id
                    ? "bg-white text-foreground border-gray-200"
                    : "bg-white/20 text-foreground border-none hover:bg-white/40"
                }`}
            >
              {card.badgeText}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MilestoneSection
