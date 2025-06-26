import React from 'react'
import { patnerCardProps } from '../lib/definition'
import Image from 'next/image'

const PatnerCardOne = ({title, description, imageUrl, className} :patnerCardProps) => {
  return (
    <div className='flex w-full flex-col  md:flex-row  md:gap-4 items-center justify-between p-6 bg-white shadow-lg rounded-lg space-y-4 '>
        <div className='flex-1 flex flex-col items-start md:px-12  py-6 transition-all duration-300
             hover:bg-white hover:shadow-[0_0_10px_rgba(0,0,0,0.2)] hover:scale-110'>
            <h2 className="text-2xl text-left font-bold text-black mb-4">{title}</h2>
            <p className="text-black    mb-6 text-sm md:text-[1rem] leading-[38px] ">{description}</p>
        </div>
        <div className='w-full md:w-1/2 md:px-17 flex justify-center items-center transition-all duration-300 hover:scale-110'>
            <Image src={imageUrl} alt={title} width={500} height={300} className={`${className}`} />
        </div>
      
    </div>
  )
}

export default PatnerCardOne
