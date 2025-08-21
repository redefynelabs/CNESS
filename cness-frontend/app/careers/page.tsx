import React from 'react';
import ReusableHead from '@/component/Reusable/ReusableHead';
import careerHero from '@/data/Careers/careerHero.json'
import { fetchAwards, fetchBenefits, fetchCareerHero, fetchCultureAndCommunity, fetchOpenPositions } from '@/utils/Career/fetchCareer';
import Awards from '@/component/Career/Awards';
import BenefitsCard from '@/component/Career/BenefitCards';
import OpenPositions from '@/component/Career/OpenPositions';

export default async function CareerPage(){

  const careerHeadData = await fetchCareerHero();
  const cultureData = await fetchCultureAndCommunity();
  const awardsData = await fetchAwards();
  const benfitsData = await fetchBenefits();
  const positionData = await fetchOpenPositions();


  return (
    <div>
      <div className=' bg-gradient-to-b from-active to-white mt-20 py-10 rounded-3xl'>
        <ReusableHead data={careerHeadData.CareerHero} />
      </div>
      <div className=' py-20'>
        <ReusableHead data={cultureData.Culture} />
      </div>

      <div>
        <Awards data={awardsData.AwardsAndRecognition} />
      </div>
      <BenefitsCard data={benfitsData.BenefitsSection} />

      <OpenPositions data={positionData.OpenPositionSection} />
    </div>
  )
}

