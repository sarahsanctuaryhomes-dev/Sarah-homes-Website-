import React from 'react';
import ContactForm from '../components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about a property or need a survey quote? Reach out to us on WhatsApp or call directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Side */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-brand-600 mt-1 mr-4" />
                  <div>
                    <p className="font-bold text-gray-900">Our Office</p>
                    <p className="text-gray-600">Kampala, Uganda</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-brand-600 mt-1 mr-4" />
                  <div>
                    <p className="font-bold text-gray-900">Phone & WhatsApp</p>
                    <a href="https://wa.me/256709773348" target="_blank" rel="noreferrer" className="block text-gray-600 hover:text-brand-600 transition-colors">+256 709 773 348</a>
                    <a href="https://wa.me/256791017140" target="_blank" rel="noreferrer" className="block text-gray-600 hover:text-brand-600 transition-colors">+256 791 017 140</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-brand-600 mt-1 mr-4" />
                  <div>
                    <p className="font-bold text-gray-900">Email</p>
                    <a href="https://formsubmit.co/el/poniji" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-600 transition-colors">sarahsanctuaryhomes@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-brand-600 mt-1 mr-4" />
                  <div>
                    <p className="font-bold text-gray-900">Working Hours</p>
                    <p className="text-gray-600">Mon - Fri: 8:00 AM - 6:00 PM<br/>Sat: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-900 p-8 rounded-2xl shadow-lg text-white">
               <h3 className="text-xl font-bold mb-4">Chat with AI Agent</h3>
               <p className="text-brand-100 mb-4">
                 Our AI assistant 'Kiboko' is available 24/7 to answer basic questions about our services. Click the icon in the bottom right corner.
               </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;