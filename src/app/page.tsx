
import HeroSection from './ui/HeroSection';
import Patners from './ui/Patners';
import HeroIllustration from './ui/HeroIllustration';
import ReasonSection from './ui/reasonSectComponents/ReasonSection';
import ImageGrid from './ui/ImageGrid';
import ExpertSect from './ui/ExpertSect';
import ExpertImage from './ui/ExpertImage';
import CommunityText from './ui/CommunityText';
import TestimonialSlider from './ui/TestimonialSlider';



export default function Home() {
  return(
    <div className='flex flex-col bg-white'>
    
    <HeroSection />
    <h1 className='mt-5  mb-7 text-2xl self-center justify-self-center font-semibold  md:text-4xl '> HOW WE PATNER WITH YOU TO ACHIEVE YOUR GOAL</h1> 
    <Patners />
    <HeroIllustration />
    <ReasonSection/>
    <ImageGrid/>
    <ExpertSect />
    <ExpertImage />
    <CommunityText /> 
    <TestimonialSlider />
    
    </div>
  )
  
  
}