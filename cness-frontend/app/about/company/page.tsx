import React from 'react';
import ReusableHead from '@/component/Reusable/ReusableHead';
import Stats from '@/component/Company/Stats';
import VMCard from '@/component/Company/VMCard';
import MilestoneSection from '@/component/Company/Milestone';
import WMDButtons from '@/component/Company/WMDButtons';
import WMDCards from '@/component/Company/WMDCards';

//fetch data's
import { fetchCompanyHero } from '@/utils/Company/fetchCompanyHero';
import { fetchStatsSection } from '@/utils/Company/fetchStats';
import { fetchVisionMissionHead } from '@/utils/Company/fetchVisionMissionHead';
import { fetchVisionMissionCards } from '@/utils/Company/fetchVMCards';
import { fetchMilestones } from '@/utils/Company/fetchMilestones';
import { fetchWMDButtons, fetchWMDCards, fetchWMDHead } from '@/utils/Company/fetchWMD';



export default async function CompanyPage() {

  const companyHeroData = await fetchCompanyHero();
  const statsData = await fetchStatsSection();
  const visionMissionData = await fetchVisionMissionHead();
  const visionMissionCardsData = await fetchVisionMissionCards();
  const milestonesData = await fetchMilestones();
  const WMDHeadData = await fetchWMDHead();
  const WMDButtonsData = await fetchWMDButtons();
  const WMDCardsData = await fetchWMDCards();


  console.log(WMDCardsData)

  return (
    <div>
      <div className=' bg-gradient-to-b from-active to-white mt-20 py-10 rounded-3xl'>
        <ReusableHead data={companyHeroData.CompanyHero} />
      </div>
      <Stats data={statsData.StatsSection} />
      {/* vision mission head */}
      <div className=' py-10'>
        <ReusableHead data={visionMissionData.VisionMissionHead} />
      </div>

      <div>
        <VMCard data={visionMissionCardsData.VisionMissionCards} />
      </div>

      <div>
        <MilestoneSection data={milestonesData.MilestoneSection} />
      </div>

      <div className=' py-10'>
        <ReusableHead data={WMDHeadData.WhatMakesDifferent} />
      </div>
      <WMDButtons data={WMDButtonsData.ButtonGroups} />
      <div className=' pb-20'>

        <WMDCards data={WMDCardsData.CardGroups} />
      </div>
    </div>
  )
}


