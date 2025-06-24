import React from 'react'
import Image from 'next/image';
import { testimonials } from './candidates_lib';

const Testimonial = () => {
  return (
    <section className="py-16 bg-gray-200">
    <div className="max-w-7xl border-4 border-amber-600  flex flex-col justify-center items-center mx-auto px-4 sm:px-6 lg:px-8">
    
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-black mb-4 md:mb-9">
          Unlock Your Earning Potential With E-Africa
        </h2>
        <p className="text-black max-w-4xl mx-auto">
          E-Africa Is More Than Just A Platform — Its Your Launchpad To Diverse Income Streams. Whether You are Building A Career Or Starting Freelance, Their Opportunities Are Limitless, Their Mentorship Sessions, Publish Courses, Or Connect With Industry Professionals To Explore Your Full Potential.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-8 mb-7 md:mb-17 gap-x-4 gap-y-4">
        <button className="border border-gray-300 font-bold text-black px-6 py-2 rounded-md hover:bg-green-700">
          Virtual Assistant
        </button>
        <button className="border border-gray-300 font-bold text-black px-6 py-2 rounded-md hover:bg-green-700">
          Content Writer
        </button>
        <button className="border border-gray-300 font-bold text-black px-6 py-2 rounded-md hover:bg-green-700">
          Software Developer
        </button>
        <button className="border border-gray-300 font-bold text-black px-6 py-2 rounded-md hover:bg-green-700">
          Copy Writer
        </button>
        <button className="border border-gray-300 font-bold text-black px-6 py-2 rounded-md hover:bg-green-700">
          Hiring Manager
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4 mb-4">
              <Image
                width={50}
                height={50} 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-black">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{testimonial.text}</p>
          </div>
        ))}
      </div>
     
    </div>
  </section>
  )
}

export default Testimonial
