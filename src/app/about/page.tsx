import React from 'react'

import HeroSection from '@/app/ui/about/HeroSection'
import WohoWeAre from '@/app/ui/about/WhoWeAre';
import DiscoverSection from '@/app/ui/about/DiscoverSection';
import OurTeam from '@/app/ui/about/OurTeam';
import CallToAction from '@/app/ui/about/CallToAction';


const page = () => {
  return (
    <div>
        <HeroSection/>
        <WohoWeAre />
        <DiscoverSection/>
        <OurTeam/>
        <CallToAction/>
      
    </div>
  )
}

export default page
