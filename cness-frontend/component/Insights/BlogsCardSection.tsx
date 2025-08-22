"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface Blog {
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

interface BlogsCardSectionProps {
  blogs: Blog[];
  title?: string;
  badgeText?: string;
  highlight?: string;
}

const BlogsCardSection: React.FC<BlogsCardSectionProps> = ({
  blogs,
  title = "Hear Directly From CNESS Experts",
  badgeText = "Blogs",
  highlight = "CNESS Experts",
}) => {
  const [visibleCount, setVisibleCount] = useState(6);

  if (!blogs || blogs.length === 0) {
    return (
      <div className="w-full py-16 px-4 md:px-10 mt-22 bg-active rounded-3xl">
        {/* Header with Badge + Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-start mb-12 flex flex-col items-start gap-4"
        >
          {/* Badge */}
          <p className="text-xs tracking-wider uppercase px-4 py-1 rounded-full border border-gray-200 text-primary font-[450]">
            {badgeText}
          </p>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-foreground max-w-2xl">
            {title.split(highlight)[0]}
            <span className="text-tertiary"> {highlight}</span>
          </h2>
        </motion.div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-white rounded-2xl shadow-sm border border-gray-100">
          {/* Optional Illustration (placeholder icon) */}
          <Image src={'/assets/not-found.jpg'} alt="NotFound.jpg" width={500} height={500} />

          <h3 className="text-lg font-[450] text-gray-700 mb-2">
            No blogs found
          </h3>
          <p className="text-gray-500 max-w-md">
            We couldn’t find any blogs right now. Please check back later or explore other insights from our experts.
          </p>

          {/* Action CTA */}
          <Link
            href="/insights"
            className="mt-6 px-6 py-3 bg-primary hover:bg-tertiary text-light font-[450] rounded-full transition-colors duration-300"
          >
            Explore Insights
          </Link>
        </div>
      </div>

    );
  }

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="mt-22 bg-active rounded-3xl py-10 px-4 md:px-10">
      {/* Header with Badge + Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-start mb-12 flex items-start flex-col gap-6"
      >
        <p className="text-xs uppercase px-4 py-1 rounded-full border border-gray-300">
          {badgeText}
        </p>
        <h2 className="text-3xl md:text-5xl font-[450]">
          {title.split(highlight)[0]}
          <span className="text-tertiary">{highlight}</span>
        </h2>
      </motion.div>

      {/* Blogs Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {blogs.slice(0, visibleCount).map((blog) => (
          <motion.div
            key={blog.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href={`/insights/blogs/${blog.slug}`}
              className="relative rounded-xl p-3 sm:p-5 space-y-8 bg-white hover:bg-secondary flex flex-col items-start text-start justify-between duration-300 group transition-colors h-full"
            >
              <div className="space-y-6">
                {/* Category */}
                {blog.category && (
                  <p className="text-xs uppercase mb-2 text-primary ">
                    {blog.category.name}
                  </p>
                )}

                <div className="bg-active rounded-2xl w-full">
                  {/* Cover Image */}
                  {blog.coverImage && (
                    <Image
                      src={blog.coverImage.url}
                      alt={blog.coverImage.name || "Blog Image"}
                      width={500}
                      height={300}
                      className="rounded-xl w-full object-cover max-h-[400px]"
                    />
                  )}
                </div>

                {/* Title */}
                {blog.title && (
                  <h2 className="text-lg sm:text-xl md:text-2xl font-[450] text-foreground">
                    {blog.title}
                  </h2>
                )}
              </div>

              {/* Link Icon */}
              <div className="w-full flex justify-end">
                <div className="cursor-pointer">
                  <div className="bg-active group-hover:bg-primary rounded-full p-2 text-primary group-hover:text-light transition-colors">
                    <ArrowUpRight size={24} className="sm:w-6 sm:h-6" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Load More Button */}
      {visibleCount < blogs.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleLoadMore}
            className="px-6 py-3 bg-primary cursor-pointer hover:bg-tertiary text-light font-[450] rounded-full transition-colors duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogsCardSection;
