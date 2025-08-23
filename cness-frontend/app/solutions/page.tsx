import ReusableHead from '@/component/Reusable/ReusableHead'
import { UnderDevelopment } from '@/component/UnderDev'
import React from 'react';
import { fetchPlatform, fetchPlatformModule, fetchSolStats, fetchSolutionsHero, fetchTechnoBottomCard, fetchTechnoSection } from '@/utils/Solution/fetchSolutions';
import SolutionStats from '@/component/Solutions/SolutionStats';
import PlatformModules from '@/component/Solutions/PlatformModules';
import TechnoSection from '@/component/Solutions/TechnoSection';
import WhyUs from '@/component/Home/WhyUs';
import { fetchWhyUs } from '@/utils/Home/fetchWhyUs';
import TechnoBottomCard from '@/component/Solutions/TechnoBottomCard';

export default async function SolutionPage(){
  const solutionHead = await fetchSolutionsHero();
  const platformData = await fetchPlatform();
  const SolutionData = await fetchSolStats();
  const PlatformModulesData = await fetchPlatformModule();
  const TechnoData = await fetchTechnoSection();
  const TechnoBottomCardData = await fetchTechnoBottomCard();
  const whyUsData = await fetchWhyUs();

  console.log(PlatformModules)

  return (
    <div>
      <div className=' bg-gradient-to-b from-active to-white mt-20 py-10 rounded-3xl'>
        <ReusableHead data={solutionHead.SolutionHero} />
      </div>
      <div className=' pt-4 md:pt-10 pb-10 md:pb-20'>
        <ReusableHead data={platformData.PlatformSection} />
      </div>
      <div>
        <SolutionStats data={SolutionData.Stats} />
      </div>
      <div>
        <PlatformModules data={PlatformModulesData.PlatformModulesSection} />
      </div>
      <div>
        <TechnoSection data={TechnoData.TechAndInnovationSection} />
      </div>
      <div>
        <TechnoBottomCard data={TechnoBottomCardData.TechnoBottomCards} />
      </div>
      <div>
        <WhyUs data={whyUsData} />
      </div>
    </div>
  )
}


