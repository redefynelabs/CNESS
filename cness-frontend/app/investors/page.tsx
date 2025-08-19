import React from 'react';
import ReusableHead from '@/component/Reusable/ReusableHead';
import InvestorHero from '@/data/Investors/invesHero.json'

const page = () => {
  return (
    <div>
      <div className=' bg-gradient-to-b from-active to-white mt-20 py-10 rounded-3xl'>
        <ReusableHead data={InvestorHero.data.attributes} />
      </div>
    </div>
  )
}

export default page
