import React from 'react'
import HeroSect from '@/app/ui/HeroSect';
import Talent from '@/app/ui/companies/Talent';
import ChooseEAfrica from '@/app/ui/companies/ChooseEAfrica';
import Succeed from '@/app/ui/companies/Succeed';
import CallToAction from '@/app/ui/CallToAction';

const page = () => {
  return (
    <div className='bg-gray-100'> 
      <HeroSect
         imageUrl="/comp-hero.webp"
         title="Companies:"
         description="Connect with Africa’s Top Talent and Build a Thriving Team of Skilled Professionals"         
         className='text-green-700'/>  
         <Talent />
         <ChooseEAfrica/>
         <Succeed/>
         <CallToAction />

       
        
      
    </div>
  )
}

export default page
