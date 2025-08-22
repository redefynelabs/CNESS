import React from 'react'
import { Check } from 'lucide-react'

interface ModuleCard {
    id: number
    title: string
    Values: string
}

interface PlatformProps {
    data: {
        badgeText: string
        title: string
        highlight: string
        ModulesCard: ModuleCard[]
    }
}

const PlatformModules: React.FC<PlatformProps> = ({ data }) => {
    return (
        <div className=" py-14 px-4 md:px-10 bg-gradient-to-b from-active to-white">
            {/* Section Header */}
            <div className="text-center mb-12 flex items-center flex-col gap-6 max-w-4xl mx-auto">
                <p className="text-xs uppercase px-4 py-1 rounded-full border border-gray-300">
                    {data.badgeText}
                </p>
                <h2 className=" text-2xl md:text-5xl font-[400]">
                    {data.title.split(data.highlight)[0]}
                    <span className="text-tertiary">{data.highlight}</span>
                </h2>
            </div>

            {/* Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {data.ModulesCard.map((card) => {
                    const valuesList = card.Values.split('\n').map((v) => v.replace(/^- /, '').trim())

                    return (
                        <div
                            key={card.id}
                            className=" rounded-2xl border border-gray-200  bg-white transition"
                        >
                            <div className=' border-b mx-auto border-gray-200 text-center py-6'>

                                <h3 className="text-xl font-medium text-primary">{card.title}</h3>
                            </div>
                            <ul className="space-y-4 py-8 px-14">
                                {valuesList.map((val, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-foreground">
                                        <Check className=" text-[10px] text-[#B4E717] shrink-0 bg-primary p-1 rounded-full" />
                                        <span>{val}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PlatformModules
