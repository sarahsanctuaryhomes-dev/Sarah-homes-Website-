import React from 'react';
import { ShieldCheck, Target, Users } from 'lucide-react';
import TrustSafety from '../components/TrustSafety';
import FAQ from '../components/FAQ';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">About Sarah Sanctuary Homes</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We are dedicated to making real estate investment in Uganda secure, transparent, and profitable for both residents and the diaspora.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Sarah Sanctuary Homes, our mission is to eliminate the fear and uncertainty that often surrounds land and property investment in Uganda. We believe that everyone—regardless of where they live—deserves a secure path to homeownership and property development.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We leverage local expertise, rigorous legal verification, and cutting-edge project management to ensure your investment is protected and your projects are delivered to the highest standards.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/about-us-main.jpg" 
                alt="Sarah Sanctuary Homes Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Transparency & Trust",
                description: "We are committed to full disclosure in all property dealings, ensuring verified titles and clear transaction processes."
              },
              {
                icon: Target,
                title: "Expertise",
                description: "With years of local experience, we understand the nuances of the Ugandan market, from land tenure to construction best practices."
              },
              {
                icon: Users,
                title: "Client Centric",
                description: "Our clients are our priority. Whether you're in Kampala or in the Diaspora, we provide constant communication and personalized support."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                <item.icon className="h-12 w-12 text-brand-700 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reused TrustSafety and FAQ sections */}
      <TrustSafety />
      <FAQ />
    </div>
  );
};

export default AboutPage;
