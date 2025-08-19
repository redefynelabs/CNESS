import React from 'react';
import ReusableHead from '@/component/Reusable/ReusableHead';
import careerHero from '@/data/Careers/careerHero.json'

const page = () => {
  return (
    <div>
      <div className=' bg-gradient-to-b from-active to-white mt-20 py-10 rounded-3xl'>
        <ReusableHead data={careerHero.data.attributes} />
      </div>
    </div>
  )
}

export default page
