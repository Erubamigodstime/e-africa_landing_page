import { signinProps } from '@/app/lib/definition'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const NavLinks = ({className =''}: signinProps) => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path ? 'text-green-700 font-semibold underline underline-offset-2' : 'text-black-900 ';

  
  return (
    <div>
        <ul className="flex flex-col md:flex-row md:space-x-10 space-y-6 md:space-y-0 text-gray-900">
            <li>
            <Link href="/about"   className={`${isActive('/about')} ${className}`}>About Us</Link>
            </li>
            <li>
            <Link href="/candidates" className={`${isActive('/candidates')} ${className}`}>For Candidates</Link>
            </li>
            <li>
            <Link href="/companies" className={`${isActive('/companies')} ${className}`}>For Companies</Link>
            </li>
            <li>
            <Link href="/rev" className={`${isActive('/rev')} ${className}`}>Reviews</Link>
            </li>
            <li>
                <Link href="/blog" className={`${isActive('/blog')} ${className}`}>Blogs</Link>
            </li>
            <li>
            <Link href="/training" className={`${isActive('/training')} ${className}`}>Training</Link>
            </li>
        </ul>
      
    </div>
  )
}

export default NavLinks
