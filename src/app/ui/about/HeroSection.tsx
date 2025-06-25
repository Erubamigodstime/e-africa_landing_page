
"use client";

import React from 'react';
import { stats } from './about_lib';
import CountUp from 'react-countup';
import HeroSect from '../HeroSect';

const HeroSection = () => {
  return (
    <section className="relative text-white h-[600px]"> 
    <HeroSect
      imageUrl="/about-hero.webp"
      title="Empowering a Billion Talents:"
      description="Connecting Dreams to Opportunities"
      description2="Across Africa and Beyond"
      className='text-green-700'/>  
      <div className="relative bg-green-700 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {stats.map((stat, index) => {
              const numericValue = parseFloat(stat.value.replace(/[^0-9.]/g, ''));
              const hasPlus = stat.value.includes('+');
              const hasPercent = stat.value.includes('%');

              return (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    <CountUp
                      end={numericValue}
                      duration={4}
                      separator=","
                      suffix={hasPlus ? '+' : hasPercent ? '%' : ''}
                    />
                  </div>
                  <div className="text-sm text-green-100 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


