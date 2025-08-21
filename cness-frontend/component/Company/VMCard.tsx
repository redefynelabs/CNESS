import React from 'react'

interface VisionMissionCard {
  id: number
  title: string
  description: string
  icon: {
    id: number
    url: string
    name: string
    alternativeText?: string | null
  }
}

interface VisionMissionCardProps {
  data: VisionMissionCard[]
}

const VMCard: React.FC<VisionMissionCardProps> = ({ data }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 my-14 px-4 md:px-10">
      {data.map((card) => (
        <div
          key={card.id}
          className="rounded-2xl border border-gray-200  p-3 flex flex-col gap-20 items-start bg-white"
        >
          {/* Icon Circle */}
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary mb-6 m-4">
            <img
              src={card.icon?.url}
              alt={card.icon?.alternativeText || card.title}
              className="w-8 h-6 object-contain"
            />
          </div>

          {/* Text Section */}
          <div className="bg-active rounded-xl p-4 w-full text-start">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {card.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default VMCard
