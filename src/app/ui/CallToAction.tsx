import React from 'react';
import {Button} from '@/app/ui/Button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';



const CallToAction = () => {
  return (
    <section className=" relative py-20  text-white">
    <div className="absolute inset-0 z-10 -mt-8">
    <Image
        src="/Hero.webp"
        alt="Background"        
        fill
        className="object-cover z-0"
    />
    
    </div>
    <div className=" relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 z-10">
      <h2 className="text-4xl font-bold mb-6">Join Us Today</h2>
      <p className="text-xl mb-4">
        Be A Part Of This Movement. Southland Africa Future. Whether You are A Job-Seeker, Student, 
        Professional, Or Industry Expert. E-Africa Is Here To Help You Thrive.
      </p>
      <p className="text-lg mb-8 text-gray-300">
        Together, We will Empower A Billion Talents.
      </p>
      <Button 
        size="lg" 
        className="bg-green-700 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
        Get Started Today            
        <ArrowRight className="ml-2" size={20} />
    </Button>     
    </div>
  </section>
  )
}

export default CallToAction
