import React from 'react';
import { SERVICES } from '../constants';
import ServiceCard from '../components/ServiceCard';
import { CheckCircle, ArrowRight } from 'lucide-react';

interface ServicesPageProps {
  onContactClick?: () => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onContactClick }) => {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Our Expertise</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a holistic approach to real estate. We don't just sell; we verify, measure, and build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Detailed Section for Surveying */}
        <div className="bg-brand-50 rounded-3xl p-8 md:p-12 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Professional Surveying Matters</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                        In Uganda, land disputes are common. The only way to secure your investment is through a professional survey using high-precision equipment (RTK GPS/Total Station).
                    </p>
                    <ul className="space-y-4 mb-8">
                        {[
                            'Confirm exact acreage (Decimals/Acres)',
                            'Identify encroachments early',
                            'Facilitate title processing and subdivision',
                            'Establish permanent concrete markers'
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center text-gray-800 font-medium">
                                <CheckCircle className="h-5 w-5 text-brand-600 mr-3" />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <button 
                      onClick={onContactClick}
                      className="inline-flex items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-brand-900 hover:bg-brand-800 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      Book a Site Visit <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl h-80">
                    <img 
                        src="https://picsum.photos/id/20/800/600" 
                        alt="Professional Land Surveying Equipment in Kampala"
                        loading="lazy" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>

        {/* Detailed Section for Construction */}
        <div className="rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
                 <div className="order-last lg:order-first rounded-2xl overflow-hidden shadow-xl h-80">
                    <img 
                        src="https://picsum.photos/id/302/800/600" 
                        alt="Construction Site Management Project in Uganda"
                        loading="lazy"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Construction Project Management</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                        Building a home while you are away or busy at work? We act as your eyes and ears on the ground. We handle:
                    </p>
                    <ul className="space-y-4 mb-8">
                        {[
                            'Material procurement and tracking',
                            'Labor supervision and payment management',
                            'Quality control checks at every stage',
                            'Weekly progress reports with photos/videos'
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center text-gray-800 font-medium">
                                <CheckCircle className="h-5 w-5 text-brand-600 mr-3" />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <button 
                      onClick={onContactClick}
                      className="inline-flex items-center px-8 py-4 bg-brand-600 text-white text-base font-bold rounded-lg hover:bg-brand-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      Book a Site Visit <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;