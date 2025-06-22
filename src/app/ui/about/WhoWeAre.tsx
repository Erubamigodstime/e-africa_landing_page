// import React from 'react'
// import {Target, Award } from "lucide-react";


// const WhoWeAre = () => {
//   return (    
//     <div className="py-20 mt-30 md:mt-20 bg-gray-50">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-black-900 mb-6">Who We Are</h2>
//         <div className="max-w-4xl mx-auto">
//           <p className="text-lg text-black-600 mb-8">
//             E-Africa Is More Than A Platform; It Is A Movement To Redefine Career Development For Africans. 
//             We Connect Job Seekers, Students, And Professionals With Industry Experts, Mentors, And Hiring 
//             Managers To Foster Personal And Professional Growth.
//           </p>
//           <p className="text-lg text-black-600">
//             By Creating An Ecosystem Of Guidance, Collaboration, And Opportunity, E-Africa Is Empowering 
//             Individuals To Unlock Their Full Potential And Achieve Their Career Goals.
//           </p>
//         </div>
//       </div>

//       <div className="grid md:grid-cols-2 gap-16 items-center">
//         {/* Vision */}
//         <div>
//           <div className="flex items-center mb-6">
//             <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
//               <Target className="w-6 h-6 text-white" />
//             </div>
//             <h3 className="text-2xl font-bold text-black-900">Our Vision</h3>
//           </div>
//           <p className="text-black-600 text-lg leading-relaxed">
//             To Empower A Billion Talents And Improve The Livelihood Of 
//             Generations To Come By Bridging The Gap Between African Talent 
//             And Global Opportunities.
//           </p>
//         </div>

//         {/* Mission */}
//         <div>
//           <div className="flex items-center mb-6">
//             <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
//               <Award className="w-6 h-6 text-white" />
//             </div>
//             <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
//           </div>
//           <div className="space-y-4">
//             <p className="text-black-600">We Aim To:</p>
//             <ul className="space-y-3">
//               <li className="flex items-start">
//                 <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
//                 <span className="text-black-600">Connect Individuals With Expert Mentorship And Coaching</span>
//               </li>
//               <li className="flex items-start">
//                 <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
//                 <span className="text-black">Develop A Database Of African Talents From Rising Managers</span>
//               </li>
//               <li className="flex items-start">
//                 <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
//                 <span className="text-black-600">Foster Collaboration And Peer Learning Through Accountability Partnerships</span>
//               </li>
//               <li className="flex items-start">
//                 <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
//                 <span className="text-black-600">Drive Growth: Building Resources And Job Opportunities Tailored To Diverse Skill Levels</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default WhoWeAre




import React from 'react'
import { Target, Award } from "lucide-react";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <div className="py-20 mt-30 md:mt-20 bg-gray-50">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black-900 mb-6">Who We Are</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-black-600 mb-8">
              E-Africa Is More Than A Platform; It Is A Movement To Redefine Career Development For Africans.
              We Connect Job Seekers, Students, And Professionals With Industry Experts, Mentors, And Hiring
              Managers To Foster Personal And Professional Growth.
            </p>
            <p className="text-lg text-black-600">
              By Creating An Ecosystem Of Guidance, Collaboration, And Opportunity, E-Africa Is Empowering
              Individuals To Unlock Their Full Potential And Achieve Their Career Goals.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex   flex-col items-center sm:items-center w-full max-w-[90%] mx-auto overflow-hidden">
            <div className="w-40 sm:w-60 sm:mr-80 md:w-52 rounded-lg z-10 overflow-hidden shadow-lg ">
                <Image src="/who-2.webp" alt="Image 1" width={300} height={200} className="w-full object-cover" />
            </div>
            <div className="-mt-10 sm:w-80 sm:ml-6 md:ml-12 w-60 md:w-110 rounded-lg overflow-hidden shadow-lg z-8">
                <Image src="/who-1.webp" alt="Image 2" width={300} height={200} className="w-full object-cover" />
            </div>
            <div className="-mt-12 sm:w-70 sm:ml-79 md:ml-68 w-52 md:w-74 rounded-lg overflow-hidden shadow-lg z-10">
                <Image src="/who-3.webp" alt="Image 3" width={300} height={200} className="w-full object-cover" />
            </div>
            </div>
          <div>
            <div className="mb-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black-900">Our Vision</h3>
              </div>
              <p className="text-black-600 text-lg leading-relaxed">
                To Empower A Billion Talents And Improve The Livelihood Of
                Generations To Come By Bridging The Gap Between African Talent
                And Global Opportunities.
              </p>
            </div>

            {/* Mission */}
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <div className="space-y-4">
                <p className="text-black-600">We Aim To:</p>
                <ul className="space-y-3">
                  {[
                    "Connect Individuals With Expert Mentorship And Coaching.",
                    "Create A Reliable Pool Of African Talent For Hiring Managers.",
                    "Foster Collaboration And Peer Learning Through Accountability Partnerships.",
                    "Offer Career-Building Resources And Job Opportunities Tailored To Diverse Fields."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                      <span className="text-black-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre;
