import BlogsCardSection from '@/component/Insights/BlogsCardSection'
import { fetchBlogs } from '@/utils/Blog/fetchBlogs'
import React from 'react'

export default async function BlogsPage() {
  const blogData = await fetchBlogs(); // blogData is already array

  return (
    <div>
      <BlogsCardSection blogs={blogData} /> {/* pass array directly */}
    </div>
  )
}
