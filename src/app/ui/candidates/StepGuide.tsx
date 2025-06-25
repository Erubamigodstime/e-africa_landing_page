'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { steps } from './candidates_lib'; 






const StepGuide = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative text-white pt-10">
      <div className="absolute inset-0 z-0">
        <Image
          src="/step-hero.webp"
          alt="background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>      

        <div className="relative md:h-full items-center z-10 max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center lg:text-left">
            Just 3 Simple Steps To Kickstart Your Journey!
          </h2>

          <div className="w-full flex flex-col md:flex-row justify-center gap-4 md:gap-4">
            <div className="flex-1 flex">
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center mt-2 space-y-6">
                  {steps.map((step, index) => (
                    <button
                      key={index}
                      className={`w-9 h-9 rounded-full border-2 flex items-center justify-center font-bold transition duration-300 ${
                        activeStep === index
                          ? 'bg-white text-green-800 border-white'
                          : 'border-white text-white hover:bg-white hover:text-green-800'
                      }`}
                      onClick={() => setActiveStep(index)}
                    >
                      {step.number}
                    </button>
                  ))}
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed max-w-2xl">
                    {steps[activeStep].description}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 h-auto flex items-stretch justify-center">
              <div className="rounded-t-xl shadow-lg w-full h-full">
                {/* <Image
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  width={500} 
                  height={500} 
                  className="w-full h-auto object-cover object-center rounded-t-xl"
                  priority
                /> */}
                  {steps.map((step, i) => (
                    <video
                      key={`preload-${i}`}
                      src={step.video}
                      preload="auto"
                      muted
                      style={{ display: 'none' }}
                    />
                  ))}

                  <video
                    key={activeStep}
                    src={steps[activeStep].video}
                    // poster={steps[activeStep].poster}
                    preload="auto"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto object-cover object-center rounded-t-xl"
                  />
              </div>
            </div>

          </div>
        </div>

    </section>
  );
};

export default StepGuide;