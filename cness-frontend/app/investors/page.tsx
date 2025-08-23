import React from 'react';
import ReusableHead from '@/component/Reusable/ReusableHead';
import { fetchFAQ, fetchFRCards, fetchFRHead, fetchInvestorHero, fetchPitchDeckSection } from '@/utils/Investor/fetchInvestor';
import FRCards from '@/component/Investor/FRCards';
import PitchDeckSection from '@/component/Investor/PitchDeckSection';
import WhyUs from '@/component/Home/WhyUs';
import { fetchWhyUs } from '@/utils/Home/fetchWhyUs';
import FAQ from '@/component/Investor/FAQ';

export default async function InvestorPage(){

  const investorHead = await fetchInvestorHero();
  const FRHead = await fetchFRHead();
  const FRCardsData = await fetchFRCards();
  const PitchDeckSectionData = await fetchPitchDeckSection();
  const FAQData = await fetchFAQ();
  const whyUsData = await fetchWhyUs();

  console.log(FRCardsData)

  return (
    <div>
      <div className=' bg-gradient-to-b from-active to-white mt-20 py-10 rounded-3xl'>
        <ReusableHead data={investorHead.InvestorHead} />
      </div>
      <div className=' pt-4 md:pt-10 pb-10 md:pb-20'>
        <ReusableHead data={FRHead.FundingRoundHead} />
      </div>
      <div>
        <FRCards data={FRCardsData.FundingRoundCards} />
      </div>
      <div>
        <PitchDeckSection data={PitchDeckSectionData.PitchDeckSection} />
      </div>

      <div>
        <FAQ data={FAQData.FAQ} />
      </div>

      <div>
        <WhyUs data={whyUsData} />
      </div>
    </div>
  )
}

