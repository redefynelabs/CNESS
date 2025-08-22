"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";

interface Video {
    id: number;
    title: string;
    desc?: string | null;
    videoLink?: string | null;
    video?: {
        url: string;
        name: string;
    } | null;
}

interface VideoCardSectionProps {
    videos: Video[];
}

const VideoCardSection: React.FC<VideoCardSectionProps> = ({ videos }) => {
    const [activeVideo, setActiveVideo] = useState<Video | null>(null);

    if (!videos || videos.length === 0) {
        return (
            <div className="w-full py-16 px-6 mt-22 sm:px-10 bg-gradient-to-b from-active to-white rounded-3xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-start mb-12 flex flex-col items-start gap-4"
                >
                    <p className="text-xs tracking-wider uppercase px-4 py-1 rounded-full border border-gray-200 text-primary font-[450]">
                        Videos
                    </p>
                    <h2 className="text-3xl md:text-5xl font-[450] leading-tight text-foreground max-w-3xl">
                        Watch Our <span className="text-tertiary">Expert Videos</span>
                    </h2>
                </motion.div>

                {/* Empty state */}
                <div className="flex flex-col items-center justify-center py-20 px-6 text-center bg-white rounded-2xl border-t border-gray-100">
                    <Image
                        src={"/assets/not-found.jpg"}
                        alt="NotFound.jpg"
                        width={400}
                        height={400}
                    />
                    <h3 className="text-lg font-[450] text-gray-700 mb-2">
                        No Videos found
                    </h3>
                    <p className="text-gray-500 max-w-md">
                        We couldn’t find any videos right now. Please check back later or
                        explore our latest blogs.
                    </p>
                    <Link
                        href="/insights/blogs"
                        className="mt-6 px-6 py-3 bg-primary hover:bg-tertiary text-light font-[450] rounded-full transition-colors duration-300"
                    >
                        Explore Blogs
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="mt-22 bg-active rounded-3xl py-10 px-10">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-start mb-12 flex items-start flex-col gap-4"
            >
                <p className="text-xs uppercase px-4 py-1 rounded-full border border-gray-300">
                    Videos
                </p>
                <h2 className="text-3xl md:text-5xl font-[450]">
                    Watch Our <span className="text-tertiary">Expert Videos</span>
                </h2>
            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="rounded-xl p-4 group bg-white hover:bg-secondary transition-colors cursor-pointer flex flex-col space-y-4"
                        onClick={() => setActiveVideo(item)}
                    >
                        {/* Video Thumbnail */}
                        <div className="rounded-lg overflow-hidden aspect-video bg-black">
                            {item.videoLink ? (
                                <iframe
                                    src={item.videoLink.replace("watch?v=", "embed/")}
                                    title={item.title}
                                    className="w-full h-full pointer-events-none"
                                />
                            ) : item.video?.url ? (
                                <video
                                    src={item.video.url}
                                    className="w-full h-full object-cover pointer-events-none"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full text-gray-400">
                                    No Video Available
                                </div>
                            )}
                        </div>


                        {/* Title */}
                        <h3 className="text-lg sm:text-xl font-[450] text-foreground group-hover:text-primary">
                            {item.title}
                        </h3>

                        {/* Description */}
                        {item.desc && (
                            <p className="text-sm text-gray-600 line-clamp-3">{item.desc}</p>
                        )}

                        <div className="w-full flex justify-end">
                            <div>
                                <div className="bg-active rounded-full p-2 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <ArrowUpRight size={24} className="sm:w-6 sm:h-6" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Fullscreen Modal */}
            <AnimatePresence>
                {activeVideo && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full max-w-5xl bg-black rounded-2xl overflow-hidden shadow-xl"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setActiveVideo(null)}
                                className="absolute top-4 right-4 z-50 bg-white/20 hover:bg-white/40 text-white rounded-full p-2"
                            >
                                <X size={22} />
                            </button>

                            {/* Video Player */}
                            <div className="aspect-video w-full ">
                                {activeVideo.videoLink ? (
                                    <iframe
                                        src={activeVideo.videoLink.replace("watch?v=", "embed/")}
                                        title={activeVideo.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full"
                                    />
                                ) : activeVideo.video?.url ? (
                                    <video
                                        src={activeVideo.video.url}
                                        controls
                                        autoPlay
                                        className="w-full h-full object-contain bg-black"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-gray-400">
                                        No Video Available
                                    </div>
                                )}
                            </div>


                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default VideoCardSection;
