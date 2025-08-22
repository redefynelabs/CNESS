import Image from "next/image";
import React from "react";
import { notFound } from "next/navigation";
import { fetchBlogBySlug } from "@/utils/Blog/fetchBlogs";
import MarkdownRenderer from "@/component/Reusable/Markdown";

type Params = Promise<{ slug: string }>

export default async function BlogPage({ params }: { params: Params }) {
    const { slug } = await params;

    const blog = await fetchBlogBySlug(slug);

    if (!blog) {
        notFound();
    }

    console.log(blog.content);

    return (
        <div className="px-6 md:px-16 py-16 my-22 bg-gradient-to-b from-active to-white rounded-3xl">
            <div className="flex flex-col items-center justify-center gap-4 text-center max-w-4xl mx-auto">
                <div className="border border-gray-400 rounded-full px-6 py-2">
                    <p>{blog.category && <span>{blog.category.name}</span>}</p>
                </div>
                
                {/* Title */}
                <h1 className="text-3xl md:text-5xl font-[450] mb-6 text-gray-900">
                    {blog.title}
                </h1>

                {/* Category & Author */}
                <div className="mb-6 text-sm text-gray-500">
                    {blog.author && <span>By {blog.author.name}</span>}
                    <span className="ml-2">{new Date(blog.publishedAt).toLocaleDateString()}</span>
                </div>
            </div>

            {/* Cover Image */}
            {blog.coverImage && (
                <Image
                    src={blog.coverImage.url}
                    alt={blog.coverImage.name || "Blog Image"}
                    width={800}
                    height={400}
                    className="rounded-3xl w-full h-[70dvh] mb-16 object-cover"
                />
            )}

            {/* Content (Markdown) */}
            <MarkdownRenderer content={blog.content} />
        </div>
    );
}