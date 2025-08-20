import HeroSection from "@/component/Home/HeroSection";
import VideoBanner from "@/component/Home/VideoBanner";
import ReusableHead from "@/component/Reusable/ReusableHead";
import Solutions from "@/component/Home/Solutions";
import WhyUs from "@/component/Home/WhyUs";
import Investor from "@/component/Home/Investor";
import Insights from "@/component/Home/Insights";
import Subscribe from "@/component/Home/Subscribe";

//fetch data
import { fetchHomeHeroData } from "@/utils/Home/fetchHomeHero";
import { fetchVideoBanner } from "@/utils/Home/fetchVideoBanner";
import { fetchIntroHero } from "@/utils/Home/fetchIntroHero";
import { fetchSolutionHomeData } from "@/utils/Home/fetchSolutionsHome";
import { fetchWhyUs } from "@/utils/Home/fetchWhyUs";
import { fetchInvestorSection } from "@/utils/Home/fetchInvestor";
import { fetchInsightsHomeData } from "@/utils/Home/fetchInsights";
import { fetchSubscribe } from "@/utils/Home/fetchSubscribe";


export default async function HomePage() {

  const hero = await fetchHomeHeroData();
  const video = await fetchVideoBanner();
  const introData = await fetchIntroHero();
  const solutionData = await fetchSolutionHomeData();
  const whyUsData = await fetchWhyUs();
  const investorData = await fetchInvestorSection();
  const insightsData = await fetchInsightsHomeData();
  const subscribeData = await fetchSubscribe();


  return (
    <main>
      {/* <Hero data={hero} /> */}
      <HeroSection heroData={hero} />
      <VideoBanner videoBanner={video} />
      <div className=" pt-20 pb-10">
        <ReusableHead data={introData} />
      </div>

      <Solutions data={solutionData[0]} />
      <WhyUs data={whyUsData} />
      <Investor data={investorData} />
      <Insights data={insightsData[0]} />
      <Subscribe data={subscribeData} />


    </main>
  );
}
