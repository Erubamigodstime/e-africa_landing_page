'use client';

import React from 'react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqs } from './candidates_lib'; 
import { Button } from '@/app/ui/Button';
import { ArrowRight } from 'lucide-react';

const Faq = () => {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);


    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
      };
  return (
    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                FREQUENTLY ASKED QUESTIONS
              </h2>
            <Button 
                  size="lg" 
                  className="bg-green-700 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started Today            
                  <ArrowRight className="ml-2" size={20} />
                </Button> 
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-6 text-left flex justify-between  items-center hover:bg-gray-50"
                  >
                     <p><span className="font-extrabold text-black">{`Q:${index+1}`}</span> <span className="font-medium text-black">{faq.question}</span> </p>
                    {openFAQ === index ? (
                      <Minus className="w-5 h-5 text-gray-500" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 py-7 pb-4">
                      <p className="  text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}
 
export default Faq
