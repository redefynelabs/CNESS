import ReusableHead from '@/component/Reusable/ReusableHead'
import { UnderDevelopment } from '@/component/UnderDev'
import React from 'react';
import heroData from '@/data/Services/Hero.json'

const page = () => {
  return (
    <div>
      <div className=' bg-gradient-to-b from-active to-white mt-20 py-10 rounded-3xl'>
        <ReusableHead data={heroData.data.attributes} />
      </div>
    </div>
  )
}

export default page
