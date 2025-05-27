import { signinProps } from '@/app/lib/definition'
import React from 'react'

const NavLinks = ({className =''}: signinProps) => {
  return (
    <div>
        <ul className="flex flex-col md:flex-row md:space-x-10 space-y-6 md:space-y-0 text-gray-900">
            <li>
            <a href="#about" className={`  ${className} `}>About Us</a>
            </li>
            <li>
            <a href="#candidates" className={`  ${className}`}>For Candidates</a>
            </li>
            <li>
            <a href="#companies" className={` ${className}`}>For Companies</a>
            </li>
            <li>
            <a href="#reviews" className={`  ${className}`}>Reviews</a>
            </li>
            <li>
                <a href="#blogs" className={`  ${className}`}>Blogs</a>
            </li>
            <li>
            <a href="#training" className={` ${className}`}>Training</a>
            </li>
        </ul>
      
    </div>
  )
}

export default NavLinks
