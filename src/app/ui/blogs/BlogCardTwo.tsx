import React from 'react';
import Image from 'next/image';
import { patnerCardProps } from '@/app/lib/definition';

const BlogCardTwo = ({title, description, imageUrl, className, children} :patnerCardProps) => {
  return (
   <div className='flex w-full flex-col px-2 md:flex-row items-center justify-between bg-white shadow-lg rounded-lg space-y-4  '>
            <div className='w-full h-full md:min-w-[200px] md:w-1/2 flex justify-center items-center  transition-all duration-300
                 hover:scale-110'>
               <Image 
               src={imageUrl} 
               alt={title} 
               width={500} 
               height={300} 
               className={`${className}`} />
           </div>       
           <div className="flex-1 flex flex-col items-start px-5  py-6 transition-all duration-300
                hover:bg-white hover:shadow-[0_0_10px_rgba(0,0,0,0.2)] hover:scale-110">
               <h2 className="text-2xl text-left font-bold text-black mb-4 ">{title}</h2>
               <p className="text-black mb-6 text-sm md:text-[1rem] leading-[38px]">
                 {description}
             </p>
               {children && <div className="mt-4 w-full">{children}</div>}
         </div>      
       </div>
  )
}

export default BlogCardTwo
