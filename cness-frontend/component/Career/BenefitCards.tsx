import React from 'react'

interface Icon {
  id: number
  url: string
  name: string
  alternativeText?: string | null
}

interface BenefitsCard {
  id: number
  title: string
  desc: string
  icon: Icon // ✅ single icon object (not array)
}

interface BenefitsCardProps {
  data: {
    badgeText: string
    title: string
    highlight: string
    BenfitsSection: BenefitsCard[] // ✅ array of cards
  }
}

const BenefitsCard: React.FC<BenefitsCardProps> = ({ data }) => {
  return (
    <div className='my-14 px-4 md:px-10'>
      <div className="text-center mb-12 flex items-center flex-col gap-6 max-w-2xl mx-auto">
        <p className="text-xs uppercase px-4 py-1 rounded-full border border-gray-300">
          {data.badgeText}
        </p>
        <h2 className="text-5xl font-medium">
          {data.title.split(data.highlight)[0]}
          <span className="text-tertiary">{data.highlight}</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.BenfitsSection.map((card) => (
          <div
            key={card.id}
            className="rounded-2xl border border-gray-200 p-3 flex flex-col gap-20 items-start bg-white"
          >
            {/* Icon Circle */}
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary mb-6 m-4">
              <img
                src={card.icon.url}
                alt={card.icon.alternativeText || card.title}
                className="w-8 h-6 object-contain"
              />
            </div>

            {/* Text Section */}
            <div className="bg-active rounded-xl p-4 w-full text-start">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BenefitsCard
