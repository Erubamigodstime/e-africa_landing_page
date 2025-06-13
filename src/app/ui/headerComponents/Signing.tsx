'use client'
import React from 'react'
import {Button} from '../Button'
import { signinProps } from '@/app/lib/definition'
import { ArrowRight } from 'lucide-react'

const Signing = ({className =''}: signinProps) => {
  return (
    <div className={`flex items-center space-x-8  mt-5 ${className}`}>
        <li className='list-none '>
            <a href="#sign" className="text-green-700 hover:text-gray-900">Sign In</a>
        </li>
       <Button 
              size="lg" 
              className="bg-green-700 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Sign Up              
            <ArrowRight className="ml-2" size={20} />
        </Button>

      
    </div>
  )
}

export default Signing
