import React from 'react';
import Image from 'next/image';
import { Button } from '../Button';
import { ArrowRight } from 'lucide-react';

const Talent = () => {
  return (
    <div className='max-w-7xl  flex flex-row flex-1/2 justify-center mt-6 md:mt-26 items-center mx-auto px-4 sm:px-6 lg:px-8' >
        <div className='hidden sm:flex-1 sm:flex justify-center items-center h-full w-full'>
            <div className='w-full h-full ' >
                <Image
                    src="/comp-card1.webp"
                    alt="Talent Hero Image"
                    width={1200}
                    height={600}
                    className="w-full h-full object-cover"
                                                            />                                  
            </div>
        </div>
        <div className='flex-1 font-[poppins] flex flex-col justify-center items-start space-y-7 px-4 sm:px-6 lg:px-8 w-full'>
            <h2 className=' font-[poppins]  text-2xl md:text-4xl  font-extrabold text-black '> Discover, Connect, and Hire Top African Talent</h2>
            <p className=' font-[poppins]  text-black md:text-xl'> E-Africa is your gateway to finding skilled professionals who are ready to make an impact. Whether you’re a small business or a multinational corporation, our platform helps you discover top African talent, streamline your hiring process, and build a dynamic workforce.</p>
            <Button 
              size="lg" 
              className="bg-green-700 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started for free             
                    <ArrowRight className="ml-2" size={20} />
            </Button>
            

        </div>
      
    </div>
  )
}

export default Talent
