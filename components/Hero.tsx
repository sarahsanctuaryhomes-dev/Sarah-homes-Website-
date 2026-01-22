import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <div className="relative bg-gray-900 min-h-[500px] lg:h-[600px] flex items-center py-16 lg:py-0 transition-all duration-300">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://picsum.photos/id/164/1920/1080" 
          alt="Modern Architecture and Real Estate in Kampala Uganda"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="md:w-2/3 lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Build Your Future <br/>
            <span className="text-brand-500">On Solid Ground</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
            We are Kampala's most trusted real estate partner. From verified land sales and premium housing to expert surveying and construction management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onCtaClick}
              className="flex items-center justify-center px-8 py-4 border border-transparent text-base font-extrabold rounded-lg text-brand-950 bg-brand-500 hover:bg-brand-400 md:text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.3)]"
            >
              Explore Properties
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button 
               onClick={() => { document.getElementById('services')?.scrollIntoView({behavior: 'smooth'}) }}
               className="flex items-center justify-center px-8 py-4 border-2 border-white/30 bg-black/20 backdrop-blur-sm text-base font-bold rounded-lg text-white hover:bg-white hover:text-gray-900 md:text-lg transition-all duration-300 hover:border-white"
            >
              Our Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;