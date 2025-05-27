import React from 'react'
import PatnerCardOne from './PatnerCardOne'
import PatnerCardTwo from './PatnerCardTwo'
const Patners = () => {
  return (
            <div className="flex flex-col gap-6 p-6 bg-white-50 max-w-[100rem] mx-auto">
                <PatnerCardOne 
                title="Personalized Mentorship & Coaching" 
                description="Whether through one-on-one or group coaching sessions, you gain actionable advice and strategies to succeed. Start with a free introductory session and unlock a wealth of knowledge from leaders who understand your journey" 
                imageUrl="/rectangle1.webp" 
                className="w-full h-auto" />
                <PatnerCardTwo 
                title="Curated Job Opportunities" 
                description="Our job board offers regional and international opportunities, bridging the gap between top African talent and employers seeking excellence. Whether you're launching your career or advancing it, the perfect opportunity awaits." 
                imageUrl="/rectangle-2.webp" 
                className="w-full h-auto" />
                <PatnerCardOne 
                title="Accountability Partner System" 
                description="Achieving your goals is easier with the right support. E-Africa’s Accountability Partner feature pairs you with like-minded individuals who share similar goals. Collaborate on projects, motivate each other, and track progress together, ensuring you stay on course to achieve greatness" 
                imageUrl="/rectangle-3.webp" 
                className="w-full h-auto" />
                <PatnerCardTwo 
                title="Dynamic Collaboration & Networking" 
                description="Our messaging and networking tools enable seamless connections with mentors, peers, and employers. Build valuable relationships, collaborate on innovative ideas, and be part of a network that grows with you." 
                imageUrl="/rectangle-4.webp" 
                className="w-full h-auto" />
            </div>
      
  )
}

export default Patners
