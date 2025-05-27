'use client'
import React from 'react'
import Button from '../Button'
import { signinProps } from '@/app/lib/definition'

const Signing = ({className =''}: signinProps) => {
  return (
    <div className={`flex items-center space-x-8  mt-5 ${className}`}>
        <li className='list-none '>
            <a href="#sign" className="text-green-700 hover:text-gray-900">Sign In</a>
        </li>
        <Button
            label="Sign Up"
            size="md"            
            onClick={() => console.log('Sign Up clicked')} />

      
    </div>
  )
}

export default Signing
