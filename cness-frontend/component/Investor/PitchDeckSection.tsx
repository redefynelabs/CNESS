import React from 'react'

interface PitchDeckSectionProps {
    data: {
        badgeText: string;
        title: string;
        highlight: string;
        description: string;
        buttonText: string;
    }
}

const PitchDeckSection: React.FC<PitchDeckSectionProps> = ({ data }) => {
    return (
        <div className=" py-14 px-4 md:px-10 bg-gradient-to-b from-white to-active">
            {/* Section Header */}
            <div className="text-center mb-12 flex items-center flex-col gap-6 max-w-2xl mx-auto">
                <p className="text-xs uppercase px-4 py-1 rounded-full border border-gray-300">
                    {data.badgeText}
                </p>
                <h2 className=" text-3xl md:text-5xl font-medium">
                    {data.title.split(data.highlight)[0]}
                    <span className="text-tertiary">{data.highlight}</span>
                </h2>
                <p>{data.description}</p>

                <div>
                    <button
                        type="submit"
                        className="relative bg-primary group text-light px-6 py-2 rounded-full flex font-medium items-center justify-center gap-3 cursor-pointer overflow-hidden"

                    >
                        <div className="absolute inset-0 bg-tertiary transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                        <span className="relative z-10 font-medium group-hover:text-foreground transition-colors duration-500 whitespace-nowrap text-sm sm:text-base">
                            {data.buttonText}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PitchDeckSection
