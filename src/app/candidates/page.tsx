import React from 'react'
import HeroSect from '@/app/ui/HeroSect'
import CareerPaths from '@/app/ui/candidates/CareerPaths'
import StepGuide from '@/app/ui/candidates/StepGuide'
import Testimonial from '@/app/ui/candidates/Testimonial'
import Faq from '@/app/ui/candidates/Faq'
import CallToAction from '@/app/ui/CallToAction'

const page = () => {
  return (
    <div>
      <HeroSect
        imageUrl="/candidate-hero.webp"
        title="Candidates"
        description="Unlock Your Potential: Opportunities, Mentorship, and Growth Await"
        className='text-green-700'/>
        <CareerPaths />
        <StepGuide />
        <Testimonial />
        <Faq />
        <CallToAction />
       
    
    </div>
  )
}

export default page
