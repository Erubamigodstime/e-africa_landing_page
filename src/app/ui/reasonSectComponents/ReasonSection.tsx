import React from 'react'
import ReasonSectCards from './ReasonSectCards'

const ReasonSection = () => {
  return (
    <div className='text-[#FFFFFF] font-[poppins]  w-[90%] m-auto  mt-10 mb-10 flex flex-col  rounded-4xl hover:bg-red-700  bg-green-700 p-15 space-y-2'>
        <h1 className='md:text-3xl'> Why Choose E-Africa</h1>
        <p className='md:text-[1.0rem]'>E-Africa is more than a platform; it’s a movement designed to transform careers and unlock potential. We connect Africans with the tools, guidance, and opportunities they need to succeed in todays competitive world.</p>
        <div className='mt-7 md:mt-7 flex flex-row gap-4   flex-wrap'>
            <ReasonSectCards
                title="Bridging Talent and Opportunity"
                description="Connect with mentors, explore job opportunities, and collaborate with peers to achieve your career goals."
                imageUrl="/job-offer.webp"
                className="w-[50px] h-[50px]"
            />
            <ReasonSectCards
                title="Career Potential with E-Africa"
                description="Gain expert mentorship, find your dream job, and build meaningful connections.."
                imageUrl="/promotion.webp"
                className="w-[50px] h-[50px]"
            />
            <ReasonSectCards
                title="Redefining Success"
                description="Transform your career with expert guidance, tailored opportunities, and a thriving community.."
                imageUrl="/star.webp"
                className="w-[50px] h-[50px]"

            />


        </div>
      
    </div>
  )
}

export default ReasonSection
