"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
  blogs: Blog[]; // directly array of blogs
}

const BlogsCardSection: React.FC<BlogsCardSectionProps> = ({ blogs }) => {
  if (!blogs || blogs.length === 0) {
    return (
      <div className="text-center py-16 text-gray-500">
        <p>No blogs found 😔</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-22 bg-active rounded-3xl py-10 px-10">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="relative rounded-xl p-3 sm:p-5 bg-white flex flex-col justify-between transition-shadow duration-300"
        >
          {/* Category */}
          {blog.category && (
            <p className="text-xs uppercase mb-2 text-primary font-medium">
              {blog.category.name}
            </p>
          )}

          {/* Cover Image */}
          {blog.coverImage && (
            <Image
              src={blog.coverImage.url}
              alt={blog.coverImage.name || "Blog Image"}
              width={500}
              height={300}
              className="rounded-xl w-full h-auto object-cover mb-4"
            />
          )}

          {/* Title */}
          {blog.title && (
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-gray-800">
              {blog.title}
            </h2>
          )}

          {/* Link */}
          <div className="w-full flex justify-end">
            <Link href={`/insights/blogs/${blog.slug}`}>
              <div className="bg-active rounded-full p-2 text-primary hover:bg-primary hover:text-white transition-colors">
                <ArrowUpRight size={24} className="sm:w-6 sm:h-6" />
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogsCardSection;
