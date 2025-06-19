
import { patnerCardProps } from '@/app/lib/definition'
import React from 'react'
import Image from 'next/image'

const ReasonSectCards = ({title, description, imageUrl, className}: patnerCardProps) => {
  return (
    <div className='w-[400px] wrap h-full hover:bg-green-700   hover:scale-110 transition-all duration-300 p-6  rounded-lg text-white flex flex-col justify-between'>
      <div className='w-full flex flex-row gap-5'>
      <div>
          <Image 
            src={imageUrl}
            alt='Job offer Image'
            width={50}
            height={50}
            className={`${className}`}
            />
        </div>
        <div className='w-full flex flex-col  gap-6 justify-between'>         
            <h2 className='md:text-2xl'> {title}</h2>  
            <p className='md:text-[1.0rem]'> {description}</p>
         </div>

      </div>
         

    </div>
   
  )
}

export default ReasonSectCards
