import React from 'react'
import HeroSect from '../ui/HeroSect';
import BlogHighlight from '../ui/blogs/BlogHighlight';
import BlogList from '../ui/blogs/BlogList';
import SubscribeSection from '../ui/blogs/SubscribeSection';
import BlogGrid from '../ui/blogs/BlogGrid';

const page = () => {
  return (
    <main className="bg-white">
      <HeroSect 
        imageUrl="/blog-hero.webp"
        title="Blogs:"
        description="Insights & Inspiration:"
        description2=" A Hub for Career Growth, Expert Advice, and Valuable Resources to Empower Your Professional Journey"
        className='text-green-700 text-3xl md:text-5xl'
      />
      <BlogHighlight />
      <BlogList />
      <SubscribeSection />
      <BlogGrid />
    </main>
  );
}

export default page
