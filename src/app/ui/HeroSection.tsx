
import React from 'react'
import Image from 'next/image'
import { Button } from './Button'
import { ArrowRight, Play } from 'lucide-react'

const HeroSection = () => {
  return (
    <div className="relative w-full h-[80vh] md:h-screen overflow-hidden">
      <Image
        src="/hero-image.webp"
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      
      <div className="absolute inset-x-0 top-20 sm:top-24 md:top-32 z-10 flex flex-col items-center text-center px-4 space-y-25">
        {/* 1) Main Hero Text */}
        <div className="bg-white/30 p-6 sm:p-10 md:p-16 rounded-lg shadow-lg max-w-4xl w-full">
          <h1 className="animate-banner text-black text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
            SEARCHING FOR THAT <span className="text-green-700">DREAM JOB</span>
          </h1>
          <h2 className="text-black animate-banner-delay text-xl sm:text-3xl md:text-4xl font-bold">
            SEEKING <span className="text-green-700">EXPERT ADVICE</span> IN ANY FIELD
          </h2>
        </div>
       
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-green-700 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started Today
            <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 bg-white border-gray-300 text-gray-700 px-8 py-4 text-lg font-semibold rounded-lg hover:border-green-500 hover:text-green-500 transition-all duration-300"
          >
            <Play className="mr-2" size={20} />
            Watch Demo
          </Button>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-60 pointer-events-none z-0 overflow-hidden">
        <div className="w-full h-full bg-[radial-gradient(100%_40%_at_50%_100%,white_0%,white_10%,transparent_100%)] md:bg-[radial-gradient(100%_80%_at_50%_100%,white_0%,white_30%,transparent_100%)]"></div>
      </div>
    </div>
  )
}

export default HeroSection