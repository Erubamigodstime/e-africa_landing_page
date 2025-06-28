import React from 'react';
import HeroSect from '@/app/ui/HeroSect';
import Review from '@/app/ui/rev/Review';
import Faq from '@/app/ui/candidates/Faq';
import Testimonial from '@/app/ui/candidates/Testimonial';


const review = () => {
  return (
    <div>      
      <HeroSect
         imageUrl="/rev-hero.webp"
         title="Companies:"
         description="Connect with Africa’s Top Talent and Build a Thriving Team of Skilled Professionals"         
         className='text-green-700'/>  
         <Review />
         <Testimonial />         
         <Faq />
      
      
    </div>
  )
}

export default review
