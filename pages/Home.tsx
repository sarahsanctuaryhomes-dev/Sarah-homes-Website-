import React from 'react';
import Hero from '../components/Hero';
import PropertyCard from '../components/PropertyCard';
import Testimonials from '../components/Testimonials';
import BlogPreview from '../components/BlogPreview';
import { MOCK_PROPERTIES } from '../constants';
import { Property } from '../types';
import { ArrowRight, ShieldCheck, MapPin, Building2 } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
  onSelectProperty: (property: Property) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate, onSelectProperty }) => {
  // Show only first 3 properties on home
  const featuredProperties = MOCK_PROPERTIES.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Hero onCtaClick={() => onNavigate('listings')} />

      {/* Trust & Safety Highlights - Brief Version */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
                 <ShieldCheck className="h-10 w-10 text-brand-700 mb-4" />
                 <h3 className="text-xl font-bold text-gray-900 mb-2">Verified Titles</h3>
                 <p className="text-gray-600 mb-4">We conduct rigorous due diligence on every property.</p>
                 <button onClick={() => onNavigate('about')} className="text-brand-700 font-semibold hover:text-brand-900">Learn more &rarr;</button>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
                 <Building2 className="h-10 w-10 text-brand-700 mb-4" />
                 <h3 className="text-xl font-bold text-gray-900 mb-2">Design & Build</h3>
                 <p className="text-gray-600 mb-4">From foundation to finishing, we manage your project.</p>
                 <button onClick={() => onNavigate('services')} className="text-brand-700 font-semibold hover:text-brand-900">View services &rarr;</button>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
                 <MapPin className="h-10 w-10 text-brand-700 mb-4" />
                 <h3 className="text-xl font-bold text-gray-900 mb-2">Prime Locations</h3>
                 <p className="text-gray-600 mb-4">Exclusive access to premium plots and houses in Kampala.</p>
                 <button onClick={() => onNavigate('listings')} className="text-brand-700 font-semibold hover:text-brand-900">Browse properties &rarr;</button>
              </div>
           </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12">
            <div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-2 md:mb-4">Featured Listings</h2>
              <p className="text-base md:text-lg text-gray-600">Hand-picked properties in prime locations.</p>
            </div>
            <button 
              onClick={() => onNavigate('listings')}
              className="hidden md:flex items-center text-brand-700 font-bold hover:text-brand-900 transition-colors text-lg group"
            >
              View All Properties <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard 
                key={property.id} 
                property={property} 
                onSelect={onSelectProperty}
              />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <button 
              onClick={() => onNavigate('listings')}
              className="w-full px-6 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 shadow-md transition-colors"
            >
              View All Listings
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Blog Section */}
      <BlogPreview />

      {/* CTA / Contact Section - Trimmed from Home */}
      <section className="py-12 md:py-20 bg-brand-900 text-white text-center" id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
             Ready to Secure Your Property?
           </h2>
           <p className="text-lg md:text-xl text-brand-100 mb-10">
             Get in touch with our experts today for site visits, verification, or consultation.
           </p>
           <button 
             onClick={() => onNavigate('contact')}
             className="px-8 py-4 bg-white text-brand-900 font-bold rounded-lg hover:bg-gray-100 transition-all shadow-xl hover:-translate-y-1"
           >
             Contact Us Now
           </button>
        </div>
      </section>
    </div>
  );
};

export default Home;