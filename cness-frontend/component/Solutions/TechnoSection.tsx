import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"

interface TechnoCard {
  id: number
  title: string
  link: string
  image: {
    url: string
    name: string
  }
}

interface TechnoProps {
  data: {
    badgeText: string
    title: string
    highlight: string
    TechnoCards: TechnoCard[]
  }
}

const TechnoSection: React.FC<TechnoProps> = ({ data }) => {
  return (
    <div className="py-14 px-4 md:px-10">
      {/* Section Header */}
      <div className="text-center mb-12 flex items-center flex-col gap-6 max-w-4xl mx-auto">
        <p className="text-xs uppercase px-4 py-1 rounded-full border border-gray-300 text-foreground">
          {data.badgeText}
        </p>
        <h2 className="text-5xl font-medium">
          {data.title.split(data.highlight)[0]}
          <span className="text-tertiary">{data.highlight}</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {data.TechnoCards.map((card) => (
          <div
            key={card.id}
            className="bg-active backdrop-blur-md rounded-2xl overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-full aspect-[3/4]">
              <Image
                src={card.image.url}
                alt={card.image.name || card.title}
                fill
                className="object-cover aspect-[3/4] rounded-2xl"
              />
            </div>

            {/* Card Footer */}
            <div className="py-5 px-4 flex items-end justify-end  mt-auto">
              <Link
                href={card.link}
                className="relative flex w-full justify-between items-center text-lg font-medium text-foreground hover:text-primary transition-colors gap-4 group"
              >
                {card.title}
                <div className="bg-light rounded-full p-3 text-primary group-hover:bg-primary group-hover:text-light group-hover:animate-spin  transition-colors">
                  <ArrowUpRight size={20} />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechnoSection
