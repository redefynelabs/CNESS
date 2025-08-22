import Image from "next/image";
import React from "react";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { fetchBlogBySlug } from "@/utils/Blog/fetchBlogs";

type Params = Promise<{ slug: string }>


export default async function NewsPage({ params }: { params: Params }) {

    const { slug } = await params;

    const news = await fetchBlogBySlug(slug);

    console.log(news)


    return (
        <div className="px-6 md:px-16 py-16 my-22 bg-gradient-to-b from-active to-white rounded-3xl">

            <div className=" flex flex-col items-center justify-center gap-4 text-center max-w-4xl mx-auto">

                <div className=" border border-gray-400 rounded-full px-6 py-2">
                    <p>{news.category && <span>{news.category.name}</span>}</p>
                </div>
                {/* Title */}
                <h1 className="text-3xl md:text-5xl font-[450] mb-6 text-gray-900">
                    {news.title}
                </h1>

                {/* Category & Author */}
                <div className=" mb-6 text-sm text-gray-500">
                    {news.author && <span>By {news.author.name}</span>}
                    <span>{new Date(news.publishedAt).toLocaleDateString()}</span>
                </div>
            </div>


            {/* Cover Image */}
            {news.coverImage && (
                <Image
                    src={news.coverImage.url}
                    alt={news.coverImage.name || "news Image"}
                    width={800}
                    height={400}
                    className="rounded-3xl w-full h-auto mb-6 object-cover"
                />
            )}

            {/* Content (Markdown) */}
            <div className="prose prose-lg max-w-none">
                <ReactMarkdown>{news.content}</ReactMarkdown>
            </div>
        </div>
    );
}
