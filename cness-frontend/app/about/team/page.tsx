import React from 'react'
import ReusableHead from '@/component/Reusable/ReusableHead';
import { fetchTeamHero } from '@/utils/Team/fetchTeamHero';
import { fetchOurPeople } from '@/utils/Team/fetchOurPeople';
import { fetchTeamMembers } from '@/utils/Team/fetchTeamMembers';
import TeamMembersSection from '@/component/Team/TeamMembersSection';

export default async function TeamPage() {

  const teamHeroData = await fetchTeamHero();
  const ourPeopleData = await fetchOurPeople();
  const teamMembersData = await fetchTeamMembers();

  console.log(teamMembersData)

  return (
    <div>
      <div className=' bg-gradient-to-b from-active to-white mt-20 py-10 rounded-3xl'>
        <ReusableHead data={teamHeroData.TeamHero} />
      </div>
      <div className=' py-6'>
        <ReusableHead data={ourPeopleData.OurPeople} />
      </div>
      <div>
        <TeamMembersSection data={teamMembersData} />
      </div>
    </div>
  )
}

