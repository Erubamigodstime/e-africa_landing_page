import React from 'react'
import Image from 'next/image';
import { Card, CardContent } from '@/app/ui/about/Card'
import{teamMembers} from './about_lib'


const OurTeam = () => {
  return (
    <section className="py-20 bg-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
        <p className="text-lg text-gray-600">
          Meet The Passionate Minds Driving Our Mission Forward
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <Card key={index} className=" border-none bg-white py-3 px-4 rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.2)]">
            <CardContent className="p-6 text-center">
              <div className="mb-6">
                <Image
                  width={100}
                    height={100} 
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-green-100"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
  )
}

export default OurTeam
