import React from 'react';
import Image from 'next/image';
import { Button } from '@/app/ui/Button';
import { ArrowRight,  ArrowUpRight } from 'lucide-react';
import { blogPosts, author } from "./blogs_lib";
import PatnerCardOne from  '../PatnerCardOne'; 
import PatnerCardTwo from '../PatnerCardTwo';
import Link from "next/link";



  
  export default function BlogList() {
    return (
      <section className="max-w-[90%] border-t-1 border-t-gray-400 mx-auto px-4 ">        
        <div className='w-full h-full flex flex-row justify-between md:gap-4'>
        <div className=" h-full flex-1/2">
        <h2 className='text-green-700 font-extrabold text-lg md:text-4xl text-center mt-4 mb-7'> LATEST BLOG POST </h2>
        {blogPosts.map((post, index) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="block mb-6" 
          >
            {index % 2 === 0 ? (
              <PatnerCardOne
                title={post.title}
                description={post.excerpt}
                imageUrl={post.img}
                className="w-full  h-auto"
              >
                <Button
                  size="lg"
                  className="bg-green-400 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Read more
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </PatnerCardOne>
            ) : (
              <PatnerCardTwo
                title={post.title}
                description={post.excerpt}
                imageUrl={post.img}
                className="w-full h-auto"
              >
                <Button
                  size="lg"
                  className="bg-green-400 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Read more
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </PatnerCardTwo>
            )}
          </Link>
        ))}
      </div>
        
  
        <aside className="space-y-10 px-3 border-l-1 border-l-gray-400">
          <div className='w-full h-full hidden sm:flex flex-col md:mt-29 gap-7 items-center'>
          <div className=' border-b-1 border-b-gray-400 py-7'>
            <h4 className="font-semibold text-md mb-2">Learning Resources</h4>
            <ul className="space-y-4 md:text-lg text-sm text-black">
              <li>Career Advice</li>
              <li>UI/UX Design</li>
              <li>Software Development</li>
              <li>Product Marketing</li>
              <li>Customer Care</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-md mb-2">Top Writers</h4>
            <div className="space-y-2 text-sm text-black">
              {author.map((text, i) => (
                <div key={i} className='flex flex-row justify-between'>
                  <div  className="flex items-center mt-4">
                  <div className="relative w-13 h-13 rounded-full overflow-hidden mr-2">
                    <Image
                      src={text.imageUrl}
                      alt={text.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                  <p className="text-sm text-black sm:text-xl mb-2">{text.name}</p>
                  <p className="text-sm text-black"> {text.profession}</p>
                  </div>       
              </div>              
              <ArrowUpRight/>
              </div>
              
                
              ))}
            </div>
          </div>
          </div>          
        </aside>
        </div>        
      </section>
    );
  }