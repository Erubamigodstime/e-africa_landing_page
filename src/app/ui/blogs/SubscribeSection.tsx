import React from 'react';
import Image from 'next/image'


export default function SubscribeSection() {
  return (
    <section className="relative py-16 px-4 text-center overflow-hidden">
     <Image
      src='/sub.webp'   
      alt="Hero background"          
      layout="fill"
      objectFit="cover"
      className="z-0"
      priority
    /> 

      {/* Content */}
      <div className="max-w-xl mx-auto relative z-10 bg-white p-6">
        <h4 className="text-sm uppercase mb-2 text-gray-800">JOIN THE TEAM AND RECEIVE</h4>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">FREE WEEKLY EXPERT TIPS</h2>
        <p className="text-sm mb-6 text-gray-700">
          Unlock Industry Secrets & Stay Ahead of Trends
        </p>
        <div className="flex max-w-md mx-auto">
          <input
            type="email"
            placeholder="Email Address"
            className="p-3 w-full rounded-l border border-gray-300"
          />
          <button className="bg-green-800 text-white px-6 rounded-r">
            Sign Up Now!
          </button>
        </div>
      </div>
    </section>
  );
}

  