import Hero from "@/component/Home/HeroBanner";
import HeroSection from "@/component/Home/HeroSection";
import { getHomeData } from "@/utils/getHome";
import heroData from '@/data/Home/Hero.json' // Import the dummy data
import VideoBanner from "@/component/Home/VideoBanner";
import introData from '@/data/Home/Intro.json'
import ReusableHead from "@/component/Reusable/ReusableHead";
import Solutions, { solutionsData } from "@/component/Home/Solutions";
import WhyUs, { whyUsData } from "@/component/Home/WhyUs";
import Investor from "@/component/Home/Investor";
import investorData from '@/data/Home/Investor.json'
import subsScribeData from '@/data/Home/Subscribe.json'
import Insights from "@/component/Home/Insights";
import Subscribe from "@/component/Home/Subscribe";


export default async function HomePage() {
  // const home = await getHomeData();

  return (
    <main>
      {/* <Hero data={hero} /> */}
      <HeroSection heroData={heroData} />
      <VideoBanner videoBanner={'/assets/hero-video.mp4'} />
      <div className=" pt-20 pb-10">
        <ReusableHead data={{
          title: introData.data.attributes.title,
          highlight: introData.data.attributes.highlight,
          description: introData.data.attributes.description,
          badgeText: introData.data.attributes.badgeText,
          buttonText: introData.data.attributes.buttonText,
          buttonUrl: introData.data.attributes.buttonUrl,
          descriptionPosition: introData.data.attributes.descriptionPosition,
          buttonPosition: introData.data.attributes.buttonPosition,
          // imageUrl: '/assets/Background.svg'
        }} />
      </div>

      <Solutions data={solutionsData} />
      <WhyUs data={whyUsData} />
      <Investor data={investorData.data.attributes} />
      <Insights />
      <Subscribe data={subsScribeData} />


    </main>
  );
}
