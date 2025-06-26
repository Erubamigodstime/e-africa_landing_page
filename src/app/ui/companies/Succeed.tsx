import React from 'react';
import PatnerCardOne from '@/app/ui/PatnerCardOne';
import PatnerCardTwo from '@/app/ui/PatnerCardTwo';

const Succeed = () => {
  return (
    <div className='flex flex-col items-center justify-center py-12 px-4 max-w-7xl mx-auto'>
      <div className="text-center mb-8 w-full">
        <h2 className="text-2xl font-bold md:text-3xl mb-4">Succeed with E-Africa</h2>
        <p className="text-black mb-8">Unlock your organizations potential by leveraging our platforms unique offerings.</p>
      </div>
      <div className="flex flex-col w-full gap-6 p-6 bg-white-50 max-w-[100rem] mx-auto">
                <PatnerCardOne 
                title="Collaborate with Industry Experts" 
                description="Tap into a network of seasoned professionals who can guide your organization on workforce strategies. From identifying skill gaps to planning for the future, our experts provide insights to help your company stay competitive." 
                imageUrl="/comp-card2.webp" 
                className="w-full h-auto" />
                <PatnerCardTwo 
                title="Foster Diversity and Innovation" 
                description="E-Africa champions diversity by connecting you with a wide pool of talent across Africa. Bring fresh perspectives to your team and drive innovation by hiring candidates with unique experiences and backgrounds.." 
                imageUrl="/comp-card3.webp" 
                className="w-full h-auto" />
                <PatnerCardOne 
                title="Build Lasting Connections" 
                description="Go beyond one-time hires by creating lasting partnerships with professionals and mentors. E-Africa’s community fosters collaboration and growth, helping you cultivate a robust network that benefits your organization in the long run." 
                imageUrl="/comp-card4.webp" 
                className="w-full h-auto" />                
            </div>
    </div>
  )
}

export default Succeed
