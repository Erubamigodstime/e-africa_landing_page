import React from 'react'
import Image from 'next/image';
import { patnerCardProps } from '../lib/definition';

const HeroSect = ({imageUrl, title, description, description2, className }: patnerCardProps ) => {
  return (
      <div className="relative text-white h-[600px]">className 
          <Image
            src={imageUrl}   
            alt="Hero background"          
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority
          />    
          <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
    
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {title}
                <br />
                <span className={`${className}`}>{description}</span>
                <br />
                <span className={`${className}`}>{description2}</span>
              </h1>
            </div>
          </div>
          </div>
  )
}

export default HeroSect
