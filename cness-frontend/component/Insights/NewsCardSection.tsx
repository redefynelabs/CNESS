"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface News {
  id: number;
  slug: string;
  title: string;
  description?: string;
  coverImage: {
    url: string;
    name: string;
  };
  category?: {
    name: string;
  };
}

interface NewsCardSectionProps {
  news: News[];
  title?: string;
  badgeText?: string;
  highlight?: string;
}

const NewsCardSection: React.FC<NewsCardSectionProps> = ({
  news,
  title = "Find the Latest News & Articles from CNESS!",
  badgeText = "News & Articles",
  highlight = "from CNESS!",
}) => {
  const [visibleCount, setVisibleCount] = useState(6);

  if (!news || news.length === 0) {
    return (
      <div className="w-full py-16 px-6 mt-22 sm:px-10 bg-gradient-to-b from-active to-white rounded-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-start mb-12 flex flex-col items-start gap-4"
        >
          <p className="text-xs tracking-wider uppercase px-4 py-1 rounded-full border border-gray-200 text-primary font-medium">
            {badgeText}
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-foreground max-w-3xl">
            {title.split(highlight)[0]}
            <span className="text-tertiary"> {highlight}</span>
          </h2>
        </motion.div>

        {/* Empty state */}
        <div className="flex flex-col items-center justify-center py-20 px-6 text-center bg-white rounded-2xl  border-t border-gray-100">
          <Image src={'/assets/not-found.jpg'} alt="NotFound.jpg" width={500} height={500} />
          <h3 className="text-lg font-medium text-gray-700 mb-2">No news found</h3>
          <p className="text-gray-500 max-w-md">
            We couldn’t find any news right now. Please check back later or explore our latest insights.
          </p>
          <Link
            href="/insights"
            className="mt-6 px-6 py-3 bg-primary hover:bg-tertiary text-light font-medium rounded-full transition-colors duration-300"
          >
            Explore Insights
          </Link>
        </div>
      </div>
    );
  }

  const handleLoadMore = () => setVisibleCount((prev) => prev + 6);

  return (
    <div className="mt-22 bg-active rounded-3xl py-10 px-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-start mb-12 flex items-start flex-col gap-6"
      >
        <p className="text-xs uppercase px-4 py-1 rounded-full border border-gray-300">
          {badgeText}
        </p>
        <h2 className="text-3xl md:text-5xl font-medium">
          {title.split(highlight)[0]}
          <span className="text-tertiary">{highlight}</span>
        </h2>
      </motion.div>

      {/* Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {news.slice(0, visibleCount).map((item) => (
          <motion.div
            key={item.id}
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative rounded-xl p-3 sm:p-5 bg-white hover:bg-secondary flex flex-col justify-between transition-shadow duration-300 hover:shadow-lg group">
              {/* Category */}
              {item.category && (
                <p className="text-xs uppercase mb-2 text-primary font-medium">
                  {item.category.name}
                </p>
              )}

              {/* Cover Image */}
              {item.coverImage && (
                <Image
                  src={item.coverImage.url}
                  alt={item.coverImage.name || "News Image"}
                  width={500}
                  height={300}
                  className="rounded-xl w-full h-auto object-cover mb-4"
                />
              )}

              {/* Title */}
              {item.title && (
                <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-4 text-gray-800">
                  {item.title}
                </h2>
              )}

              {/* Link */}
              <div className="w-full flex justify-end">
                <Link href={`/insights/news/${item.slug}`}>
                  <div className="bg-active rounded-full p-2 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <ArrowUpRight size={24} className="sm:w-6 sm:h-6" />
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Load More */}
      {visibleCount < news.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleLoadMore}
            className="px-6 py-3 bg-primary hover:bg-tertiary text-light font-medium rounded-full transition-colors duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsCardSection;
