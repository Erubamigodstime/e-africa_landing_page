
import React from 'react'
import Image from 'next/image'


const HeroSection = () => {
  return (   
    <div className="relative w-full">
      <Image 
        src="/hero-image.webp" 
        alt="Hero Image" 
        width={1920} 
        height={1080} 
        className="w-full h-auto object-cover"
      />
      <div className="absolute inset-0 flex  items-center justify-center text-center ">
        <h1 className="bg-white/30 text-black p-16 md:p-30 rounded-lg shadow-lg text-xl sm:text-3xl md:text-5xl font-bold leading-tight max-w-8xl">
          SEARCHING FOR THAT <span className='text-green-700 inline'>DREAM JOB</span>
        </h1>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-60 pointer-events-none z-10 overflow-hidden">
  <div className="w-full h-full bg-[radial-gradient(100%_40%_at_50%_100%,white_0%,white_10%,transparent_100%)] md:bg-[radial-gradient(100%_80%_at_50%_100%,white_0%,white_30%,transparent_100%)]" ></div>
</div>
      
    </div>
    
  )
}

export default HeroSection

