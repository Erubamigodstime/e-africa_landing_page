import React from 'react'
import Image from 'next/image'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='flex flex-col bg-white  p-8 md:py-20 md:h-[500px] justify-between '>
        <div className='flex flex-col md:flex-row justify-around  items-start  gap-8'>
            <div className='flex w-full  flex-col items-center  gap-4  '>
                <div>
            <Image src="/E-africa.png" alt="E-Africa Logo" width={110} height={110} />
                </div>
                <p className='text-black'> JOIN US ON</p>
                <div className='flex flex-row gap-4'>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-blue-600 hover:text-blue-800 text-3xl cursor-pointer" size={24} />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-sky-500 hover:text-sky-700 text-3xl cursor-pointer" size={24} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-pink-500 hover:text-pink-700 text-3xl cursor-pointer" size={24} />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-blue-700 hover:text-blue-900 text-3xl cursor-pointer" size={24} />
                    </a>            
                </div>

            </div>
        

        <div className='flex text-black w-full flex-col md:flex-row gap-8 md:gap-2 justify-around items-start'>
            <div className='flex flex-col gap-4'>
                <h2 className='font-bold text-[1.1rem]'>About Us</h2>
                <p><a href="" target="_blank" rel="noopener noreferrer" > Our Mission</a></p>
                <p><a href="" target="_blank" rel="noopener noreferrer" > Our Team</a></p>
                <p><a href="" target="_blank" rel="noopener noreferrer" > Our Impact</a></p>
                <p><a href="" target="_blank" rel="noopener noreferrer" > Reviews</a></p>
                <p><a href="" target="_blank" rel="noopener noreferrer" > Blogs</a></p>

            </div>
            <div className='text-black flex flex-col gap-4'>
                <h2 className='font-bold text-[1.1rem] '>Candidates</h2>
                <p><a href="" target="_blank" rel="noopener noreferrer" >Job Listing</a></p>
                <p><a href="" target="_blank" rel="noopener noreferrer" > How to Apply</a></p>
                <p><a href="" target="_blank" rel="noopener noreferrer" > Resume Building</a></p>
                <p><a href="" target="_blank" rel="noopener noreferrer" > Interview Preparation</a></p>
                <p><a href="" target="_blank" rel="noopener noreferrer" > Terms of Service</a></p>
            </div>
        </div>

        <div className='text-black flex w-full flex-col md:flex-row gap-8 md:gap-5  justify-around items-start'>
            <div className='flex flex-col gap-4'>
                <h2 className='font-bold text-[1.1rem] '>Companies</h2>
                <p><a href="" target="_blank" rel="noopener noreferrer" >Hire Talents</a></p>
                <p><a href="" target="_blank" rel="noopener noreferrer" >Post A job</a></p>                
            </div>
            <div className=' text-black flex flex-col gap-4'>
                <h2 className='font-bold text-[1.1rem]'>Contact Us</h2>
                <p><span></span><a href="" target="_blank" rel="noopener noreferrer" >empowerafrica.ng@gmail.com</a></p>
                <p><span></span><a href="" target="_blank" rel="noopener noreferrer" >(+234) 907 662 8205</a></p>
                <p><span></span><a href="" target="_blank" rel="noopener noreferrer" >794 Mcallister St
                San Francisco, 94102</a></p>
            </div>
        </div>
        </div>
        
        <hr />

        <div className='flex flex-col md:flex-row justify-between items-center mt-6'>
            <p className='text-black' >© 2025 E-Africa. All rights reserved.</p>
            <div>
                <p className='text-black'>All Rights Reserved | <span><a href="" target="_blank" rel="noopener noreferrer" className='text-green-500 underline underline-offset-2' >Privacy Policy</a></span> |  <span> <a href="http://" target="_blank" rel="noopener noreferrer" className='text-green-500 underline underline-offset-[2px]'> Terms of Service</a></span></p>

            </div>

        </div>
       
      
    </footer>
  )
}

export default Footer
