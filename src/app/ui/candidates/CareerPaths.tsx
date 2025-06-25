import React from 'react'
import Image from 'next/image';
import { careerCategories } from './candidates_lib';


const CareerPaths = () => {
  return (
    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Explore Diverse Career Paths
            </h2>
            <p className="text-black">
              Find Job Opportunities Across Industries Tailored To Your Skills And Aspirations
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {careerCategories.map((category, index) => (
             <div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
             <Image 
               width={300}
               height={200}
               src={category.image} 
               alt={category.title}
               className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
             />           
           
           <div className="absolute inset-0 bg-black/40 z-10"></div>
             <div className="absolute bottom-0 left-0 right-0 z-20 bg-white/20 backdrop-blur-sm text-white rounded-b-lg py-4 px-4 min-h-[100px] flex flex-col justify-end">
               <h3 className="font-semibold text-lg mb-1">{category.title}</h3>
               <p className="text-sm opacity-90">{category.subtitle}</p>
             </div>
           </div>
           
            ))}
          </div>
        </div>
      </section>
  )
}

export default CareerPaths
