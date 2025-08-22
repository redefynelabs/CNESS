import VideoCardSection from "@/component/Insights/VideoCardSection";
import { fetchVideoPage } from "@/utils/Videos/fetchVideo";
import React from "react";

export default async function VideoPage() {
  const videoData = await fetchVideoPage();

  return (
    <div>
      <VideoCardSection videos={videoData.VideoSection} />
    </div>
  );
}
