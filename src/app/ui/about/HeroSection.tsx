"use client";
import React from 'react';
import{stats} from './about_lib'
import Image from "next/image";



const HeroSection = () => {
  return (
    <section className="relative text-white h-[600px]">
 
      <Image
        src="/about-hero.webp"
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />

      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Empowering a Billion Talents:
            <br />
            <span className="text-green-700">Connecting Dreams to Opportunities</span>
            <br />
            Across Africa
          </h1>
        </div>
      </div>

      <div className="relative bg-green-700 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-green-100 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

