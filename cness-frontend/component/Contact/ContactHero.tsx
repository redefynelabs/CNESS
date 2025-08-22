import Image from 'next/image';
import React from 'react'

interface ContactHeroProps {
    data: {
        badgeText: string;
        title: string;
        desc: string;
        highlight: string;
        ContactDetails: [
            {
                icon: {
                    url: string;
                    name: string;
                }
                text: string;
                value: string;
            }
        ]
    }
}

const ContactHero: React.FC<ContactHeroProps> = ({ data }) => {
    return (
        <div className=' px-4 md:px-10 py-10 mt-20 bg-gradient-to-b from-active to-white rounded-3xl'>
            <div className="text-center mb-12 flex items-center flex-col gap-6 max-w-2xl mx-auto">
                <p className="text-xs uppercase px-4 py-1 rounded-full border border-gray-300">
                    {data.badgeText}
                </p>
                <h2 className="text-5xl font-[450]">
                    {data.title.split(data.highlight)[0]}
                    <span className="text-tertiary">{data.highlight}</span>
                </h2>
                <p>{data.desc}</p>
            </div>
            <div className=' flex flex-col md:flex-row w-full justify-between md:items-center px-4 md:px-20 space-y-4'>
                {data.ContactDetails.map((detail, idx)=>(
                    <div key={idx} className=' flex md:items-center gap-2'>
                        <div className=' bg-primary rounded-full p-2'>
                            <Image src={detail.icon.url} alt={detail.icon.name} width={20} height={20} />
                        </div>
                        <div>
                            <p className=' font-[450] text-primary'>{detail.text}</p>
                            <p>{detail.value}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ContactHero
