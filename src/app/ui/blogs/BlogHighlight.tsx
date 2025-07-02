import React from 'react';
import Image from 'next/image';

const BlogHighlight = () => {
  return (
    <section className="max-w-[90%] mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
    <Image
        width={800}
        height={450}
      src="/blog-1.webp"
      alt="Highlight"
      className="w-full h-full object-cover rounded"
    />
    <div className="flex p-6 flex-col justify-between gap-6 shadow-lg rounded bg-gray-100">
      <div className='sm:px-8'>
        <p className='font-[poppins] text-center mb-7'> <span className="font-[poppins] text-xs text-red-900 font-bold mb-2"> NEWS & UPDATES  </span> <span className="text-xs text-black font-bold mb-2" > - October 31, 2024</span></p>
        <h3 className="font-[poppins] text-xl md:text-3xl md:leading-12 mb-4 md:mb-12">
          5 Key Strategies for Landing Your Dream Job in Africa’s Competitive Market | October 2024
        </h3>
        <p className="font-[poppins] text-sm text-black sm:text-2xl">
          Practical tips and advice on job hunting
        </p>
      </div>
      <div className="flex items-center mt-4">
      <div className="relative w-17 h-17 rounded-full overflow-hidden mr-2">
          <Image
            src='/author.webp'
            alt='author'
            fill
            className="object-cover"/>
        </div>
         <div>
         <p className="text-sm text-black sm:text-2xl mb-2">Katherine Kalu</p>
         <p className="text-sm text-black"> October 31 2024</p>
         </div>       
      </div>
    </div>
  </section>
  )
}

export default BlogHighlight
