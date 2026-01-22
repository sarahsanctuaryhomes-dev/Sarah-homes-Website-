import React from 'react';
import { Search, Map, ShieldCheck, FileCheck } from 'lucide-react';

const TrustSafety: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: "1. Registry Search",
      description: "We conduct official searches at the Ministry of Lands to verify ownership, encumbrances, and history."
    },
    {
      icon: Map,
      title: "2. Boundary Opening",
      description: "Our professional surveyors use RTK GPS to confirm exact acreage and ensure boundaries match the deed."
    },
    {
      icon: ShieldCheck,
      title: "3. LC Verification",
      description: "We verify with Local Councils (LC1) and neighbors to ensure there are no disputes or squatters."
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-green-50 rounded-full mb-4">
            <FileCheck className="h-5 w-5 text-brand-700 mr-2" />
            <span className="text-brand-800 font-bold text-sm tracking-wide uppercase">Trust & Safety Guarantee</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            We Don't Just Sell Land.<br />
            <span className="text-brand-600">We Verify It.</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Avoid land fraud in Uganda. Every property listed by Sarah Sanctuary Homes undergoes our rigorous 3-Step Verification Process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-brand-50 transition-colors">
                <step.icon className="h-8 w-8 text-brand-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSafety;