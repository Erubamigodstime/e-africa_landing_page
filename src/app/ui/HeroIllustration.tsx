import React from 'react'
import { Button } from './Button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const HeroIllustration = () => {
  return (
    <div className='px-5 md:px-20 border-4 border-gray-300 mt-10 flex flex-col md:flex-row items-center justify-between p-6 bg-white shadow-lg rounded-lg space-y-4 md:space-y-0 md:space-x-6'>
        <div className='w-full md:w-1/2 flex flex-col justify-center items-center  py-6 transition-all duration-300 md:space-y-10 hover:bg-white hover:shadow-[0_0_10px_rgba(0,0,0,0.2)] hover:scale-110'>
            <p className='md:text-[2.0rem]  text-[#13672B] mb-4'>
                Register now for our upcoming training session to unlock new career opportunities, enhance your skills, connect with top employers, and gain industry insights.
            </p>
            <Button 
              size="lg" 
              className="bg-green-700 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Register             
            <ArrowRight className="ml-2" size={30} />
        </Button>

        </div>
        <div>
            <Image src="/illustration.webp"
                alt="Hero Illustration"
                width={500}
                height={300}
                />
        </div>
      
    </div>
  )
}

export default HeroIllustration
