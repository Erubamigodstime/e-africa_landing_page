import React from "react";
import { features } from "./company_lib";

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
  } from "@/app/ui/about/Card";

  
  const ChooseEAfrica = () => {
    
  
    return (
      <section className=" mt-13  text-center">
        <div  className="py-12   px-4 max-w-7xl mt-13 mx-auto text-center" >
        <h2 className="text-3xl font-bold mb-2">Why Choose E-Africa?</h2>
        <p className="text-black mb-10 max-w-2xl mx-auto">
          Transform your hiring process with access to top talent and tools that
          make finding the right candidates easier than ever.
        </p>
  
        <div className="grid grid-cols-1 font-[poppins] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white h-full">
              <CardHeader className="items-center">
                {/* <div className="w-15 h-15 font-[poppins] rounded-full bg-gray-300 mb-4" /> */}
                <div className="w-15 h-15 mb-4 rounded-full bg-gradient-to-br from-green-400 via-green-500 to-emerald-600 shadow-md" />
                <CardTitle className="text-center font-[poppins] text-lg">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-[poppins] text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
        
      </section>
    );
  };
  
  export default ChooseEAfrica;
  