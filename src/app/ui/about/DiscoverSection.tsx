import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/app/ui/about/Card'
import { Button } from '@/app/ui/Button'
import { Users, ArrowRight } from 'lucide-react'

const DiscoverSection = () => {
  return (
    <section className="py-20 bg-white">
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Discover How We Empower
          <br />
          Your Career Journey
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          From Personalized Mentorship To Job Opportunities, Collaboration, And Skill Building, We Provide The Tools And 
          Connections To Help You Succeed.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <Card className="bg-green-50 border-4 border-green-200 p-8">
          <CardContent className="p-0">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-green-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Coaching And Mentorship</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Connect With Verified Industry Experts For Personalized 
              Guidance.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-700 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <span className="text-gray-900">One-On-One Coaching: Start With A Free 15-Minute Session With Options To Extend</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-700 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <span className="text-gray-900">Group Sessions: Join A Free 15-Minute Session To Connect With Peers Online</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-green-700 rounded-full mt-3 mr-3 flex-shrink-0"></div>
                <span className="text-gray-900">Skill development programs: equip you with practical, in-demand abilities</span>
              </li>
            </ul>
            <Button 
              size="lg" 
              className="bg-green-700 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Get Started              
            <ArrowRight className="ml-2" size={20} />
        </Button>
          </CardContent>
        </Card>
        

        <div className="relative flex flex-col items-center gap-2  bg-white py-3 px-4 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)]">
        <div className="mb-6 flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold text-black mb-1">
            Career Development and Job Opportunities
            </h3>
            <p className="text-black text-center">
            Whether you are just starting out or looking to pivot, we’re here every step of the way.
            </p>
        </div>

        <div className="flex flex-col w-full items-center justify-center xs:flex-row  sm:flex-row md:flex-row sm:items-center md:items-center sm:justify-center md:justify-center sm:max-h-fit  md:max-h-fit  ">
            <div className="bg-white rounded-l-xl border-20 border-green-700 shadow-lg p-4  z-10">
            <h4 className="text-lg text-black  font-semibold mb-1">Tools And Resources</h4>
            <ul className="text-sm text-black list-disc list-inside space-y-1">
                <li>Access to jobs and internships.</li>
                <li>Collaboration and community support.</li>
                <li>Practical skill development programs.</li>              
            </ul>
            </div>
            <div className="z-20 w-full rounded-none object-cover xs:rounded-lg xs:shadow-lg sm:h-60 sm:w-65 md:h-60 md:w-65 ">
            <Image
            src="/disc.webp"
            alt="Coaching session"
            width={250}
            height={300}
            className='w-full h-full'/>
            </div>
            <div className="z-10 h-7 bg-green-700 w-79 rounded-b-lg sm:rounded-br-xl  md:rounded-br-xl md:rounded-bl-xl md:h-50  md:w-5  sm:rounded-r-xl sm:h-50 sm:w-5   "></div>
        </div>
        </div>

        </div>       
      </div>    
  </section>
  )
}

export default DiscoverSection
