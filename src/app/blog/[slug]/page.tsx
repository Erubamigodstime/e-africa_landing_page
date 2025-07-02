import React from 'react';
import { blogPosts } from "@/app/ui/blogs/blogs_lib";
import { notFound } from "next/navigation";
import Image from "next/image";
import HeroSect from '@/app/ui/HeroSect';

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const blog = blogPosts.find((b) => b.slug === slug);
  if (!blog) return notFound();

  return (
    <main className='bg-white' >
      <HeroSect 
        imageUrl="/blog-hero.webp"
        title="Blogs:"
        description="Insights & Inspiration:"
        description2=" A Hub for Career Growth, Expert Advice, and Valuable Resources to Empower Your Professional Journey"
        className='text-green-700 text-3xl md:text-5xl'
      />
      <div className="max-w-4xl mx-auto py-16 px-4">

       <div className="flex p-6 flex-col justify-between items-center gap-6 ">
            <div className='sm:px-8 flex flex-col items-center'>
              <p className='font-[poppins] text-center mb-7'> <span className="font-[poppins] text-xs text-red-900 font-bold mb-2"> NEWS & UPDATES  </span> <span className="text-xs text-black font-bold mb-2" > - October 31, 2024</span></p>
              <h3 className="font-[poppins] font-extrabold text-xl text-center md:text-3xl md:leading-12 mb-4 md:mb-8">
                {blog.title}
              </h3>
              <p className="font-[poppins] text-sm text-black sm:text-2xl">
                {blog.content}
              </p>
            </div>
            <div className="flex items-center mt-4">
            <div className="relative w-17 h-17 rounded-full overflow-hidden mr-2">
                <Image
                  src='/author.webp'
                  alt='author'
                  fill
                  className="object-cover"/>
              </div>
               <div>
               <p className="text-sm text-black sm:text-2xl mb-2">Katherine Kalu</p>
               <p className="text-sm text-black"> October 31 2024</p>
               </div>       
            </div>
          </div>
      <Image
        width={800}
        height={400}
        src={blog.img}
        alt={blog.title}
        className="w-full rounded mb-6"
      />
      <p className="text-lg leading-relaxed text-black">{blog.excerpt}</p>

      </div>
      
    </main>
  );
}


export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = false;
