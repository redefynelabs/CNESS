'use client'
import Image from 'next/image';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { addSubscriber } from '@/app/actions/subscribe';
import toast, { Toaster } from 'react-hot-toast';

// Animation variants
const containerVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const buttonVariants: Variants = {
    hover: { scale: 1.1 },
    initial: { scale: 1 },
};

interface SubscribeProps {
    data: any
}

const Subscribe: React.FC<SubscribeProps> = ({ data }) => {

    return (
        <div className="flex flex-col lg:flex-row w-full justify-between bg-primary relative">
            {/* Toast container */}
            <Toaster position="top-right" reverseOrder={false} />

            <motion.div
                className="flex items-start flex-col w-full h-full justify-between lg:w-1/2  py-8 px-4 sm:px-6 md:px-10  space-y-14 md:space-y-32"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="bg-active rounded-full p-3">
                    <Image
                        src={'/assets/staricon.svg'}
                        alt={'Star Icon'}
                        width={20}
                        height={20}
                        className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                </div>

                <div className="space-y-6 w-full max-w-lg">
                    <h1
                        className="text-light font-semibold text-3xl md:text-5xl"
                        dangerouslySetInnerHTML={{ __html: data.title }}
                    />
                    <form
                        action={async (formData: FormData) => {
                            const email = formData.get('email');
                            if (typeof email === 'string') {
                                try {
                                    await addSubscriber(email);
                                    toast.success('Subscribed successfully! 🎉'); // success toast
                                } catch (error) {
                                    console.error(error);
                                    toast.error('Failed to subscribe. Try again. ❌'); // error toast
                                }
                            }
                        }}
                        className="flex flex-col items-start sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full"
                    >
                        <input
                            name="email"
                            type="email"
                            placeholder={'dev@cness.com'}
                            className="bg-active px-4 py-2 border border-light rounded-full text-foreground focus:ring-none w-[70%] text-sm sm:text-base"
                        />
                        <motion.button
                            type="submit"
                            className="relative bg-secondary group text-primary px-4 py-2 rounded-full flex font-medium items-center justify-center gap-3 cursor-pointer overflow-hidden"
                            variants={buttonVariants}
                            initial="initial"
                            whileHover="hover"
                            transition={{ duration: 0.3 }}
                        >
                            <div className="absolute inset-0 bg-tertiary transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                            <span className="relative z-10 font-semibold group-hover:text-foreground transition-colors duration-500 whitespace-nowrap text-sm sm:text-base">
                                {data.buttonText}
                            </span>
                        </motion.button>
                    </form>
                </div>
            </motion.div>
            <div className="w-full lg:w-1/2">
                <Image
                    src={data.backgroundImage.url}
                    alt={data.backgroundImage.name}
                    width={500}
                    height={500}
                    className="w-full h-auto"
                />
            </div>
        </div>
    );
};

export default Subscribe;
