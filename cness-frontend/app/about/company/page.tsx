import React from 'react';
import ReusableHead from '@/component/Reusable/ReusableHead';
import companyHero from '@/data/Company/Hero.json';

const page = () => {
  return (
    <div>
       <div className=' bg-gradient-to-b from-active to-white mt-20 py-10 rounded-3xl'>
        <ReusableHead data={companyHero.data.attributes} />
      </div>
    </div>
  )
}

export default page
