// import React from 'react'
// import Image from 'next/image'
// import { testimonials, TestimonialItem } from './review_lib'


// const columns: TestimonialItem[][] = [[], [], [], []];

// testimonials.forEach((item, index) => {
//   columns[index % 4].push(item); // ✅ Now no error
// });

// const Review = () => {
//   return (
//     <section className=" py-7 xs:py-12 px-4 max-w-7xl mt-13 mx-auto bg-white text-center justify-center items-center">
//       <div className="max-w-full w-full justify-between items-center  flex flex-col xs:flex-row mx-auto px-4">
//       <h2 className="text-3xl self-start text-left font-bold mb-4">EMPOWER CONNECT <br></br> THRIVE.</h2>
//       <div className='flex flex-col items-center justify-between sm:items-start'>
//       <p className="max-w-xl mx-auto mb-6 text-black text-left">
//         From mentorship programs to job opportunities, e-africa has everything career-driven Africans need to build fulfilling professional lives – and thrive – all in one inclusive platform.
//       </p>
//       <div className="mb-8 flex flex-row">
//         <input type="email" placeholder="Enter your email" className="p-3 rounded-l border w-64" />
//         <button className="p-3 ml-0.5 bg-green-700 text-white rounded-lg">Subscribe</button>
//       </div>
//       </div>
//       </div>  
    
  

//         <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
//         {columns.map((column, i) => (
//           <div key={i} className="flex flex-col gap-4">
//             {column.map((item, j) =>
//               item.type === "text" ? (
//                 <div key={`text-${j}`} className="bg-green-100 px-4 py-3 shadow text-left rounded">
//                   <p className="text-sm mb-2">{item.text}</p>
//                   <div>
//                     <p className="font-semibold text-sm">{item.name}</p>
//                     <p className="text-xs text-black">{item.role}</p>
//                   </div>
//                 </div>
//               ) : (
//                 item.image && (
//                   <Image
//                     key={`img-${j}`}
//                     src={item.image}
//                     alt="testimonial image"
//                     width={400}
//                     height={300}
//                     className="object-cover w-full h-auto rounded"
//                   />
//                 )
//               )
//             )}
//           </div>
//         ))}
//       </div>



//   </section>
//   )
// }

// export default Review


import Image from "next/image";

type TestimonialItem =
  | {
      type: "text";
      text: string;
      name: string;
      role: string;
    }
  | {
      type: "image";
      image: string;
    };

const testimonials: TestimonialItem[] = [
  {
    type: "text",
    text: "E-Africa Has Completely Revolutionized How I Approach Career Growth. The Mentorship Opportunities Are Invaluable, And The Accountability Partner System Keeps Me On Track With My Goals. It’s A Must–",
    name: "TY Jones",
    role: "Product Designer",
  },
  {
    type: "image",
    image: "/rev2.webp",
  },
  {
    type: "text",
    text: "E-Africa Has Completely Revolutionized How I Approach Career Growth. The Mentorship Opportunities Are Invaluable, And The Accountability Partner System Keeps Me On Track With My Goals. It’s A Must–",
    name: "TY Jones",
    role: "Product Designer",
  },
  {
    type: "image",
    image: "/rev1.webp",
  },
  {
    type: "text",
    text: "E-Africa Has Completely Revolutionized How I Approach Career Growth. The Mentorship Opportunities Are Invaluable, And The Accountability Partner System Keeps Me On Track With My Goals. It’s A Must–",
    name: "TY Jones",
    role: "Product Designer",
  },
  {
    type: "image",
    image: "/rev2.webp",
  },
];



const Review = () => {
  const column1 = [testimonials[0], testimonials[1]];
  const column2 = [testimonials[2], testimonials[3], testimonials[4], testimonials[5]];
  const column3 = [testimonials[0], testimonials[1]];
  const column4 = [testimonials[2], testimonials[3], testimonials[4], testimonials[5]];

  const columns = [column1, column2, column3, column4];

  return (
    <section className="py-14 px-4 max-w-7xl mx-auto bg-white text-center">
      {/* Header */}
      <div className="flex flex-col xs:flex-row justify-between items-start px-4">
        <h2 className="text-3xl text-left font-bold mb-4">
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
              className="p-3 rounded-l border w-64"
            />
            <button className="p-3 bg-green-700 text-white rounded-r">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Testimonial Grid */}
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
                  className="bg-green-100 p-4 rounded-lg shadow text-left"
                >
                  <p className="mb-4 text-sm">{item.text}</p>
                  <div className="text-left">
                    <p className="font-semibold text-sm">{item.name}</p>
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
    </section>
  );
};

export default Review;




