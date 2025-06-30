import React from 'react'
import Image from "next/image";
import { testimonials } from './review_lib';





const Review = () => {
  const column1 = [testimonials[0], testimonials[1]];
  const column2 = [testimonials[2], testimonials[3], testimonials[4], testimonials[5]];
  const column3 = [testimonials[0], testimonials[1]];
  const column4 = [testimonials[2], testimonials[3], testimonials[4], testimonials[5]];

  const columns = [column1, column2, column3, column4];

  return (
    <section className=" w-full bg-white">
      <div className=" py-14 px-4 max-w-7xl mx-auto bg-white text-center">
      <div className="flex flex-col xs:flex-row justify-between items-start px-4">
        <h2 className="text-3xl text-left text-black font-bold mb-4">
          EMPOWER. CONNECT. <br /> THRIVE.
        </h2>
        <div className="flex flex-col items-start mb-6">
          <p className="max-w-xl text-left text-black mb-3">
            From mentorship programs to job opportunities, e-africa has
            everything career-driven Africans need to build fulfilling
            professional lives – and thrive – all in one inclusive platform.
          </p>
          <div className="flex w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-l border text-black border-black w-64"
            />
            <button className="p-3 bg-green-700 text-white rounded-r">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-20 items-start">
        {columns.map((column, i) => (
          <div
            key={i}
            className={`flex flex-col ${
              i === 0 || i === 2 ? "self-center" : "self-start"
            }`}
          >          
            {column.map((item, j) =>
              item.type === "text" ? (
                <div
                  key={`text-${i}-${j}`}
                  className="bg-green-100  p-4 rounded-lg shadow text-left"
                >
                  <p className="mb-4 text-black text-sm">{item.text}</p>
                  <div className="text-left">
                    <p className="font-semibold text-black text-sm">{item.name}</p>
                    <p className="text-xs text-black">{item.role}</p>
                  </div>
                </div>
              ) : (
                item.image && (
                  <Image
                    key={`img-${i}-${j}`}
                    src={item.image}
                    alt="testimonial image"
                    width={400}
                    height={300}
                    className=" object-cover w-full h-auto"
                  />
                )
              )
            )}
          </div>
        ))}
      </div>
      </div>      
    </section>
  );
};

export default Review;




