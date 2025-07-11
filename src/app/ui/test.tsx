
// const Review = () => {
//     const column1 = [testimonials[0], testimonials[1]];
//     const column2 = [testimonials[2], testimonials[3], testimonials[4], testimonials[5]];
//     const column3 = [testimonials[0], testimonials[1]];
//     const column4 = [testimonials[2], testimonials[3], testimonials[4], testimonials[5]];
//     return (
//       <section className="py-14 px-4 max-w-7xl mx-auto bg-white text-center">
//         <div className="flex flex-col xs:flex-row justify-between items-start px-4">
//           <h2 className="text-3xl text-left font-bold mb-4">
//             EMPOWER. CONNECT. <br /> THRIVE.
//           </h2>
//           <div className="flex flex-col items-start mb-6">
//             <p className="max-w-xl text-left text-black mb-3">
//               From mentorship programs to job opportunities, e-africa has
//               everything career-driven Africans need to build fulfilling
//               professional lives – and thrive – all in one inclusive platform.
//             </p>
//             <div className="flex w-full">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="p-3 rounded-l border w-64"
//               />
//               <button className="p-3 bg-green-700 text-white rounded-r">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>
  
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
//           {[column1, column2, column3, column4].map((column, i) => (
//             <div key={i} className="flex flex-col">
//               {column.map((item, j) =>
//                 item.type === "text" ? (
//                   <div
//                     key={`text-${j}`}
//                     className="bg-green-100 px-4  shadow text-left"
//                   >
//                     <p className="text-sm">{item.text}</p>
//                     <div className="text-left">
//                       <p className="font-semibold text-sm">{item.name}</p>
//                       <p className="text-xs text-black">{item.role}</p>
//                     </div>
//                   </div>
//                 ) : (
//                   item.image && (
//                     <Image
//                       key={`img-${j}`}
//                       src={item.image}
//                       alt="testimonial image"
//                       width={400}
//                       height={300}
//                       className="object-cover w-full h-auto"
//                     />
//                   )
//                 )
//               )}
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   };
  
//   export default Review;

// <div key={index} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//   <Image 
//     width={400}
//     height={300}
//     src={post.img} 
//     alt={post.title} 
//     className="w-full h-full object-cover rounded" />
//   <div>
//   <p className='font-[poppins] text-center mb-7'> <span className="font-[poppins] text-xs text-red-900 font-bold mb-2"> {post.category} - </span> <span className="text-xs text-black font-bold mb-2" > {post.date}</span></p>
//     <h3 className="font-semibold text-md md:text-3xl mb-4 md:mb-4">{post.title}</h3>
//     <p className="text-sm text-black mb-2">{post.excerpt}</p>
//     <Button 
//       size="lg" 
//       className="bg-green-400 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
//       Read more              
//      <ArrowRight className="ml-2" size={20} />
//   </Button>
//   </div>
// </div>
