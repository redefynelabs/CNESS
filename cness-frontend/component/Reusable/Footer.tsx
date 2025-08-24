import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaXTwitter as XIcon, FaInstagram as InstaIcon } from "react-icons/fa6";
import { FaFacebook as FacebookIcon, FaLinkedin as LinkedinIcon } from "react-icons/fa";

const Footer = () => {
    const quickLinks = [
        { title: "Solutions", slug: "/solutions" },
        { title: "Company", slug: "/about/company" },
        { title: "Investors", slug: "/Investors" },
        { title: "News & Articles", slug: "/insights/news" },
        { title: "Careers", slug: "/careers" },
        { title: "Contact", slug: "/contact" },
    ]

    const socials = [
        { icon: XIcon, url: "" },
        { icon: FacebookIcon, url: "" },
        { icon: InstaIcon, url: "" },
        { icon: LinkedinIcon, url: "" },
    ]

    return (
        <div className='text-foreground bg-background'>
            {/* Contact Section */}
            <div className='bg-active rounded-b-3xl w-full py-20 px-4 sm:px-6 lg:px-10'>
                <div className='flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8 lg:gap-10'>
                    {/* Content */}
                    <div className='space-y-6 lg:space-y-8 w-full lg:w-1/2 animate-fade-in-up'>
                        <Image
                            src={'/CNESS_Logo.png'}
                            alt='Logo'
                            width={100}
                            height={100}
                            className='w-24 sm:w-28 lg:w-32 h-auto'
                        />
                        <div className='space-y-4'>
                            <h1 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-[450]'>
                                Join the Platform for a
                                <span className='text-tertiary'> More Conscious</span> Future!
                            </h1>
                            <p className='text-base sm:text-lg'>Get certified, grow consciously, and lead with trust.</p>
                        </div>
                        <Link
                            href={''}
                            className="group inline-flex items-center w-full sm:w-auto justify-center"
                        >
                            <div className="relative px-4 sm:px-6 py-2 sm:py-3 bg-primary text-light rounded-full overflow-hidden transition-all duration-500 group-hover:bg-transparent">
                                <div className="absolute inset-0 bg-tertiary transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                                <span className="relative z-10 font-[450] group-hover:text-foreground transition-colors duration-500 whitespace-nowrap text-sm sm:text-base">
                                    Start Your CNESS Journey

                                </span>
                            </div>
                            <div className="relative p-2 sm:p-3 bg-primary text-light rounded-full overflow-hidden transition-all duration-500 group-hover:bg-transparent ">
                                <div className="absolute inset-0 bg-tertiary transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                                <div className="relative z-10 group-hover:text-foreground transition-all duration-500 group-hover:rotate-45">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Contact Info */}
                    <div className='flex flex-col sm:flex-row gap-6 lg:gap-10 w-full lg:w-1/2 animate-fade-in-up animation-delay-200'>
                        <div className='space-y-4 flex-1'>
                            <p className='uppercase font-[450] text-sm sm:text-base'>Contact us</p>
                            <div className='space-y-3'>
                                <div>
                                    <p className='text-sm sm:text-base font-[450]'>Our Phone</p>
                                    <Link href={'tel:'} className='text-base sm:text-lg text-tertiary hover:text-primary transition-colors duration-300'>
                                        +1(122)800 88 08
                                    </Link>
                                </div>
                                <div>
                                    <p className='text-sm sm:text-base font-[450]'>Our Email</p>
                                    <Link href={'mailto:'} className='text-base sm:text-lg text-tertiary hover:text-primary transition-colors duration-300'>
                                        office@cness.com
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-4 flex-1'>
                            <div className='space-y-3'>
                                <div>
                                    <p className='text-sm sm:text-base font-[450]'>Mon-Fri:</p>
                                    <p className='text-base sm:text-lg text-tertiary hover:text-primary transition-colors duration-300'>
                                        8:30am-5:30pm
                                    </p>
                                </div>
                                <div>
                                    <p className='text-sm sm:text-base font-[450]'>Address</p>
                                    <p className='text-base sm:text-lg text-tertiary hover:text-primary transition-colors duration-300'>
                                        San Francisco,<br /> 1140 Harrison St, CA 94103
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Links Section */}
            <div className='px-4 sm:px-6 lg:px-10 py-8'>
                <div className='flex flex-wrap justify-center lg:justify-between gap-4 lg:gap-8 py-6 border-b border-gray-300 md:px-10'>
                    {quickLinks.map((link, idx) => (
                        <Link
                            key={idx}
                            href={link.slug}
                            className='font-[450] text-sm sm:text-base hover:text-primary transition-colors duration-300 animate-fade-in-up'
                            style={{ animationDelay: `${idx * 100}ms` }}
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>

                {/* Watermarks */}
                <div className='flex flex-col lg:flex-row justify-between items-center gap-6 py-8'>
                    <p className='text-sm sm:text-base text-center lg:text-left animate-fade-in-up'>
                        © 2025 CNESS. All Rights Reserved

                        | Developed by <Link className='text-tertiary hover:text-primary transition-colors duration-300' href={'https://www.thecreativetrading.co/'}>Creative Trading Co.</Link>
                    </p>
                    <div className='flex space-x-4 animate-fade-in-up animation-delay-200'>
                        <Link href={''} className='text-sm sm:text-base hover:text-primary transition-colors duration-300'>Terms & Conditions</Link>
                        <Link href={''} className='text-sm sm:text-base hover:text-primary transition-colors duration-300'>Privacy Policy</Link>
                    </div>
                    <div className='flex space-x-4 items-center animate-fade-in-up animation-delay-400'>
                        {socials.map((social, idx) => (
                            <Link
                                key={idx}
                                href={social.url}
                                className='hover:text-primary transition-colors duration-300 hover:scale-110 transform'
                            >
                                <social.icon size={20} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer