import React from 'react';
import { MessageCircle, Plane, Video, FileText } from 'lucide-react';

const DiasporaSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/id/48/1920/1080" 
          alt="Ugandan Diaspora Investment" 
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900/60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gold-600/20 text-gold-500 border border-gold-600/30 text-sm font-bold uppercase tracking-wider mb-6">
              <Plane className="h-4 w-4 mr-2" />
              Diaspora Services
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Invest in Home <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-200">
                Without The Stress
              </span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Living abroad? We act as your trusted eyes on the ground. From verifying titles to managing construction projects, we ensure your hard-earned money builds your legacy, not someone else's.
            </p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-center text-gray-200">
                <Video className="h-5 w-5 text-brand-500 mr-3" />
                Live Video Tours & Site Updates
              </li>
              <li className="flex items-center text-gray-200">
                <FileText className="h-5 w-5 text-brand-500 mr-3" />
                Digital Paperwork & Title Processing
              </li>
              <li className="flex items-center text-gray-200">
                <MessageCircle className="h-5 w-5 text-brand-500 mr-3" />
                Direct WhatsApp Communication
              </li>
            </ul>

            <a 
              href="https://wa.me/256709773348?text=Hello,%20I%20am%20living%20abroad%20and%20interested%20in%20investing%20back%20home."
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-[#25D366] hover:bg-green-600 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg text-lg"
            >
              <MessageCircle className="h-6 w-6 mr-2" />
              Chat on WhatsApp
            </a>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-brand-500/20 rounded-2xl blur-xl"></div>
            <img 
              src="https://picsum.photos/id/101/800/1000" 
              alt="Happy homeowner in Uganda" 
              className="relative rounded-2xl shadow-2xl border border-gray-700"
              loading="lazy"
            />
            {/* Trust Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <img key={i} src={`https://picsum.photos/id/${50+i}/50/50`} className="w-8 h-8 rounded-full border-2 border-white" alt="" />
                  ))}
                </div>
                <span className="text-gray-900 font-bold text-sm">500+ Clients</span>
              </div>
              <p className="text-gray-600 text-sm italic">
                "Sarah helped me build my dream house in Kira while I was in Dubai."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiasporaSection;