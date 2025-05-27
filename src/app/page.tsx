
import Headers from './ui/Header';
import HeroSection from './ui/HeroSection';
import Patners from './ui/Patners';


export default function Home() {
  return(
    <div className='flex flex-col bg-white'>
    <Headers /> 
    <HeroSection />
    <h1 className='mt-5  mb-7 text-2xl self-center justify-self-center font-semibold  md:text-4xl '> HOW WE PATNER WITH YOU TO ACHIEVE YOUR GOAL</h1> 
    <Patners />
    </div>
  )
  
  
}