import React from 'react'

interface Stat {
  id: number
  value: string
  desc: string
}

interface StatSectionProps {
  data: Stat[]
}

const SolutionStats: React.FC<StatSectionProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-10 px-4 md:px-10">
      {data.map((stat) => {
        const { id, value, desc } = stat

        const firstChar = value.charAt(0)
        const lastChar = value.charAt(value.length - 1)
        const middle = value.slice(1, -1)

        const startsWithDollar = firstChar === '$'

        return (
          <div
            key={id}
            className="p-6 flex flex-col items-start text-start border-l border-gray-300"
          >
            <h3 className="text-3xl font-medium bg-active rounded-xl p-2">
              {startsWithDollar ? (
                <>
                  <span className="text-tertiary">{firstChar}</span>
                  {middle}
                  <span className="text-tertiary">{lastChar}</span>
                </>
              ) : (
                <>
                  {value.slice(0, -1)}
                  <span className="text-tertiary">{lastChar}</span>
                </>
              )}
            </h3>
            <p className="mt-2 text-gray-600">{desc}</p>
          </div>
        )
      })}
    </div>
  )
}

export default SolutionStats
