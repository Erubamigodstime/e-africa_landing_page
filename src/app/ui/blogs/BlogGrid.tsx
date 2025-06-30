import React from 'react';
import Image from 'next/image';
import { community_blogs } from './blogs_lib';
import { ArrowRight } from 'lucide-react';
import { Button } from '../Button';



export default function BlogGrid() {
    return (
      <section className="py-16 px-4 max-w-[90%] mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10 text-green-800">MORE FROM OUR COMMUNITY</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 space-y-9">
          {community_blogs.map((blog, i) => (
            <div key={i} className=''>
              <Image
              width={300}
              height={200}
               src={blog.img}
               className="w-full h-[300px] object-cover rounded mb-4" alt="post" />

              <h4 className=" text-black font-semibold text-md">{blog.title}</h4>
              <p className="text-sm text-black">
                {blog.excerpt}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
        <Button
            size="lg"
            className="bg-green-400 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
            Load more blogs
            <ArrowRight className="ml-2" size={20} />
        </Button>         
        </div>
      </section>
    );
  }