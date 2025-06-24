import React from 'react';
import Image from 'next/image';


{/* <div className=' border-4 flex flex-col items-center'>
            <div className='mb-6'>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Career Development and Job Opportunities
                </h3>
                <p className="text-gray-600 mb-6">
                Whether you are just starting out or looking to pivot, we’re here every step of the way.
                </p>
            </div>
        <div className="relative border-4 border-amber-400 flex flex-row items-center ">
            <div className='h-50 flex  flex-col border-15 border-green-700 items-center justify-center mb-6'>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                Tools And Resources 
                </h3>
                <ul className="text-black mb-1 p-3">                    
                    <li className="mb-1">Access to jobs and internships.</li>
                    <li className="mb-1">Collaboration and community support.</li>
                    <li className="mb-1">Practical skill development programs </li>
                    <li className="mb-1">Career resources like interview prep.</li>
                    
                </ul>
            </div>
            <div className=''>
            <Image 
            width={250}
            height={250}
            src="/disc.webp"
            alt="Coaching session"
            className="rounded-lg shadow-lg  object-cover"/>
            </div>
            <div className='bg-green-700 h-50 w-5 rounded-r-lg '></div>
            </div>          
        </div> */}


<div className="relative flex flex-col items-center gap-8  bg-white py-7 px-4 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)]">
        <div className="mb-6 flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
            Career Development and Job Opportunities
            </h3>
            <p className="text-black text-center">
            Whether you are just starting out or looking to pivot, we’re here every step of the way.
            </p>
        </div>

        <div className="relative flex flex-col items-center  md:justify-items-start md:max-h-fit w-full ">
            <div className="bg-green-700  rounded-lg h-55 w-full"></div>

            <div className="absolute left-4 md:top-4  bg-white rounded-lg shadow-lg p-6 w-[85%] z-10">
            <h4 className="text-lg font-semibold mb-2">Tools And Resources</h4>
            <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
                <li>Access to jobs and internships.</li>
                <li>Collaboration and community support.</li>
                <li>Practical skill development programs.</li>
                <li>Career resources, interview preps.</li>
            </ul>
            </div>
            <div className="absolute bg-green-700 md:top-2 md:left-84 rounded-lg h-50 z-11 w-5"></div>
            <div className="absolute sm:bottom-20 md:-top-7 md:left-89  rounded-lg shadow-lg md:h-65 md:w-65 object-cover z-20">
            <Image
            src="/disc.webp"
            alt="Coaching session"
            width={250}
            height={300}
            className='w-full h-full'/>
            </div>
        </div>
        </div>


 {/* <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-xs text-white rounded-lg p-3">
                  <h3 className="font-semibold text-lg mb-1">{category.title}</h3>
                  <p className="text-sm opacity-90">{category.subtitle}</p>
    </div> */}



{/* <div className="relative md:h-full  items-center z-10 max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center lg:text-left">
          Just 3 Simple Steps To Kickstart Your Journey!
        </h2>

        <div className="w-full flex flex-col md:flex-row justify-center gap-8 md:gap-2 px-4 md:px-0">
          <div className="flex-1 flex">
            <div className="flex items-start gap-6">
              <div className="flex flex-col items-center mt-2 space-y-8">
                {steps.map((step, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold transition duration-300 ${
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
                <h3 className="text-2xl font-semibold mb-4">
                  {steps[activeStep].title}
                </h3>
                <p className="text-white/90 leading-relaxed max-w-xl">
                  {steps[activeStep].description}
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 h-[25rem] flex items-stretch justify-center">
            <div className="rounded-t-xl overflow-hidden shadow-lg w-full h-full max-w-md">
              <Image
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div> */}