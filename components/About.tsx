import React from 'react';
import { Building2, Users, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Your Trusted Partner in <span className="text-brand-600">Ugandan Real Estate</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Sarah Sanctuary Homes, we are driven by integrity, transparency, and a commitment to helping you build your future on solid ground. Whether you're a local resident or a member of the Diaspora looking to invest back home, we provide the expertise to make your real estate journey seamless and secure.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <ShieldCheck className="h-6 w-6 text-brand-600 mt-1 mr-4" />
                <div>
                  <h4 className="font-bold text-gray-900">100% Verified</h4>
                  <p className="text-gray-600">Rigorous due diligence on all land and properties.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-6 w-6 text-brand-600 mt-1 mr-4" />
                <div>
                  <h4 className="font-bold text-gray-900">Expert Guidance</h4>
                  <p className="text-gray-600">Personalized support tailored to your unique goals.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Building2 className="h-6 w-6 text-brand-600 mt-1 mr-4" />
                <div>
                  <h4 className="font-bold text-gray-900">End-to-End Management</h4>
                  <p className="text-gray-600">Handling everything from search to construction.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://picsum.photos/seed/workspace/800/600"
              alt="About Sarah Sanctuary Homes Workspace"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
