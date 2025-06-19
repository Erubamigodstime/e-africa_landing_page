'use client';
import React from 'react';
import Image from 'next/image';


const ImageGrid = () => {
  return (
    <div className=" w-[90%] m-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
       
          <div  className=" hover:scale-110 rounded-xl overflow-hidden">
            <Image src='/Rect-1.webp' alt='Rect Image'  width={300}  height={400}className=" w-full h-auto object-cover" />
          </div>
          <div  className="  flex items-end     rounded-xl overflow-hidden ">
            <Image src='/Rect-2.webp' alt='Rect Image'  width={300}  height={400}className="w-full h-auto object-cover" />
          </div>
          <div  className="  flex items-end    rounded-xl overflow-hidden">
            <Image src='/Rect-3.webp' alt='Rect Image'  width={300}  height={400}className="w-full h-auto object-cover" />
          </div>
          <div  className="  flex items-end    rounded-xl overflow-hidden">
            <Image src='/Rect-1.webp' alt='Rect Image'  width={300}  height={400}className="w-full h-auto object-cover" />
          </div>
          <div  className="  flex items-end    rounded-xl overflow-hidden">
            <Image src='/Rect-2.webp' alt='Rect Image'  width={300}  height={400}className="w-full h-auto object-cover" />
          </div>
          <div  className="  flex items-end    rounded-xl overflow-hidden">
            <Image src='/Rect-3.webp' alt='Rect Image'  width={300}  height={400}className="w-full h-auto object-cover" />
          </div>
          <div  className="  flex items-end    rounded-xl overflow-hidden">
            <Image src='/Rect-4.webp' alt='Rect Image'  width={300}  height={400}className="w-full h-auto object-cover" />
          </div>
          <div  className="  flex items-end    rounded-xl overflow-hidden">
            <Image src='/Rect-5.webp' alt='Rect Image'  width={300}  height={400}className="w-full h-auto object-cover" />
          </div>
          <div  className="  flex items-end    rounded-xl overflow-hidden">
            <Image src='/Rect-6.webp' alt='Rect Image'  width={300}  height={400}className="w-full h-auto object-cover" />

          </div>
          <div  className="  flex items-end    rounded-xl overflow-hidden">
            <Image src='/Rect-4.webp' alt='Rect Image'  width={300}  height={400}className="w-full h-auto object-cover" />
           </div>

          <div  className="  flex items-end    rounded-xl overflow-hidden">
            <Image src='/Rect-5.webp' alt='Rect Image'  width={300}  height={400}className="w-full h-auto object-cover" />
          </div>
          <div  className="  flex items-end    rounded-xl overflow-hidden">
                <Image src='/Rect-6.webp' alt='Rect Image'  width={300}  height={400}className="w-full h-auto object-cover" />
          </div>
      {/* <div  className="rounded-xl overflow-hidden">
            <Image src='/Rect-6.webp' alt='Rect Image'  width={300}  height={400}className="w-full h-auto object-cover" />
      </div> */}
      </div>
    </div>
  );
};

export default ImageGrid;
