import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="bg-brand-900 text-white p-8 rounded-2xl">
              <HelpCircle className="h-12 w-12 mb-4 text-brand-400" />
              <h2 className="text-3xl font-extrabold mb-4">Frequently Asked Questions</h2>
              <p className="text-brand-100 leading-relaxed mb-6">
                Navigating the Ugandan real estate market can be complex. Here are answers to common questions about titles, payments, and site visits.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'})}
                className="bg-white text-brand-900 font-bold px-6 py-3 rounded-lg hover:bg-brand-50 transition-colors w-full"
              >
                Ask a different question
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-xl transition-all duration-200 ${
                  openIndex === index ? 'border-brand-500 bg-brand-50/30' : 'border-gray-200 hover:border-brand-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <span className={`font-bold text-lg ${openIndex === index ? 'text-brand-800' : 'text-gray-800'}`}>
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-brand-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;