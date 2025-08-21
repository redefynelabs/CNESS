import BlogsCardSection from '@/component/Insights/BlogsCardSection'
import NewsCardSection from '@/component/Insights/NewsCardSection';
import { fetchNews } from '@/utils/News/fetchNews';
import React from 'react'

export default async function BlogsPage() {
  const newsData = await fetchNews(); // blogData is already array

  return (
    <div>
      <NewsCardSection news={newsData} /> {/* pass array directly */}
    </div>
  )
}
