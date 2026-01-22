import React from 'react';
import Hero from '../components/Hero';
import TrustSafety from '../components/TrustSafety';
import DiasporaSection from '../components/DiasporaSection';
import BuyerCosts from '../components/BuyerCosts';
import ServiceCard from '../components/ServiceCard';
import PropertyCard from '../components/PropertyCard';
import ContactForm from '../components/ContactForm';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import { SERVICES, MOCK_PROPERTIES } from '../constants';
import { Property } from '../types';
import { ArrowRight } from 'lucide-react';

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

      {/* Trust & Safety - High Priority */}
      <TrustSafety />

      {/* Stats Section */}
      <section className="bg-brand-900 py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-brand-700/50">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-brand-400">20+</div>
              <div className="text-xs md:text-sm text-brand-100 uppercase tracking-wider">Properties Sold</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-brand-400">20+</div>
              <div className="text-xs md:text-sm text-brand-100 uppercase tracking-wider">Projects Managed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-brand-400">5</div>
              <div className="text-xs md:text-sm text-brand-100 uppercase tracking-wider">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2 text-brand-400">8+</div>
              <div className="text-xs md:text-sm text-brand-100 uppercase tracking-wider">Districts Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4">Comprehensive Real Estate Solutions</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              We go beyond just selling. We ensure your investment is secure, surveyed, and built to perfection.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="mt-10 md:mt-12 text-center">
             <button 
                onClick={() => onNavigate('services')}
                className="px-8 py-4 bg-brand-900 text-white font-bold rounded-lg hover:bg-brand-800 transition-all shadow-lg hover:-translate-y-1 w-full md:w-auto"
             >
               Learn More About Our Services
             </button>
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

      {/* Diaspora Section - New */}
      <DiasporaSection />

      {/* Buyer Costs & Calculator - New */}
      <BuyerCosts />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* CTA / Contact Section */}
      <section className="py-12 md:py-20 bg-brand-50" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4 md:mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you are looking for that perfect plot in Wakiso, a finished house in Munyonyo, or need a surveyor for your family land, we are here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-100 text-brand-700">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Verified Titles</h4>
                    <p className="mt-1 text-gray-500">We conduct rigorous due diligence on every land title.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand-100 text-brand-700">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">Expert Project Management</h4>
                    <p className="mt-1 text-gray-500">From foundation to finish, we manage your construction site.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;