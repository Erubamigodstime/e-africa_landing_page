import React from 'react'
import { Button } from './Button'
import { ArrowRight } from 'lucide-react'


const ExpertSect = () => {
  return (    
    <div className='text-black max-w-[58rem] m-auto font-[poppins] flex flex-col items-center justify-center p-8 rounded-lg gap-7  mt-10'>
      <h1 className='font-bold text-3xl'> Become an E-Africa Industry Expert</h1>
      <p> As an E-Africa Industry Expert, you’ll have the unique opportunity to mentor aspiring professionals, share your knowledge, and make a meaningful impact on Africa’s workforce. Whether it’s one-on-one sessions or group coaching, your guidance can shape the next generation of leaders while expanding your professional reach.</p>
      <Button 
              size="lg" 
              className="bg-green-700 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Sign Up              
            <ArrowRight className="ml-2" size={30} />
        </Button>

    </div>
  )
}

export default ExpertSect
