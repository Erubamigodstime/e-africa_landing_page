
'use client';
import Image from 'next/image';

const images = [
  '/rectangle.webp',
  '/rectangle-7.webp',
  '/rectangle-9.webp',
];

const ExpertImage = () => {
  return (
    <div className="overflow-hidden w-[330px] md:w-[660px] mx-auto py-8">
      <div className="flex gap-4 animate-marquee">
        {[...images, ...images].map((src, i) => (
          <div key={i} className=" w-[150px] h-[250px] md:w-[200px] md:h-[300px] flex-shrink-0">
            <Image
              src={src}
              alt={`scroll-img-${i}`}
              width={200}
              height={300}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertImage;

