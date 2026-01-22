import React from 'react';
import { FileCheck, Landmark } from 'lucide-react';

const BuyerCosts: React.FC = () => {
  return (
    <section className="py-20 bg-brand-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Understanding Buying Costs</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transparency is key. Apart from the property price, here are the statutory costs you should plan for.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start">
             <div className="bg-blue-50 p-3 rounded-lg mr-4 flex-shrink-0">
               <Landmark className="h-6 w-6 text-blue-600" />
             </div>
             <div>
               <h3 className="font-bold text-gray-900 text-lg">Stamp Duty (1%)</h3>
               <p className="text-gray-600 mt-1">
                 This is a tax paid to the Uganda Revenue Authority (URA). It is calculated as <strong>1%</strong> of the property value as assessed by the government valuer.
               </p>
             </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start">
             <div className="bg-purple-50 p-3 rounded-lg mr-4 flex-shrink-0">
               <FileCheck className="h-6 w-6 text-purple-600" />
             </div>
             <div>
               <h3 className="font-bold text-gray-900 text-lg">Registration Fees</h3>
               <p className="text-gray-600 mt-1">
                 Paid to the Ministry of Lands to process the title transfer. Typically around <strong>UGX 50,000 - 100,000</strong> plus administrative costs.
               </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyerCosts;