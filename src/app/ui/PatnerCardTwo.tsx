import React from 'react'
import { patnerCardProps } from '../lib/definition'
import Image from 'next/image'

const PatnerCardTwo = ({title, description, imageUrl, className} :patnerCardProps) => {
  return (
    <div className='flex flex-col md:flex-row px-7 items-center justify-between p-6 bg-white shadow-lg rounded-lg space-y-4 md:space-y-0 md:space-x-6'>
         <div>
            <Image src={imageUrl} alt={title} width={500} height={300} className={`${className}`} />
        </div>
        <div className='flex-1'>
            <h2 className="text-2xl font-bold text-black mb-4 px-18">{title}</h2>
            <p className="text-black mb-6 text-sm md:text-[1rem] leading-[38px] px-18">{description}</p>
        </div>
       
      
    </div>
  )
}

export default PatnerCardTwo
