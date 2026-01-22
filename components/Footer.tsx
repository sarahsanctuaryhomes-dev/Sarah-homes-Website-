import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

// Custom TikTok Icon SVG
const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.65-1.62-1.12-1.09-1.02-1.99-2.31-2.26-3.87v10.51c-.05 3.89-2.86 7.4-6.64 7.98-4.24.61-8.35-2.31-8.91-6.52-.56-4.21 2.37-8.32 6.58-8.88.54-.07 1.09-.07 1.63.02v4.04c-1.65-.66-3.64.09-4.5 1.68-.89 1.58-.29 3.69 1.34 4.54 1.63.85 3.69.21 4.51-1.44.22-.44.35-.93.35-1.43V.02z"/>
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center text-white mb-6">
              <Home className="h-8 w-8 text-brand-500" />
              <div className="ml-2 flex flex-col">
                <span className="font-bold text-xl tracking-tight">SARAH</span>
                <span className="text-xs font-semibold tracking-widest text-brand-500 uppercase">Sanctuary Homes</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We provide comprehensive real estate solutions in Uganda. From land surveying to construction project management, we build your dreams on solid ground.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61558013535933" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors" 
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/sarah_sanctuaryhomes?igsh=MTZ1ZDI0czdxbDFkNQ==" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors" 
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://vm.tiktok.com/ZMHEgY7nn3r1j-c0ZOl/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors" 
                aria-label="TikTok"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4 text-sm text-gray-500 space-y-1">
              <p>FB: Sarah Sanctuary Homes</p>
              <p>IG: Sarah Sanctuary Homes</p>
              <p>TikTok: sarah_sanctuaryhomes</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/listings" className="hover:text-brand-500 transition-colors">Properties for Sale</Link></li>
              <li><Link to="/services" className="hover:text-brand-500 transition-colors">Land Surveying</Link></li>
              <li><Link to="/services" className="hover:text-brand-500 transition-colors">Site Management</Link></li>
              <li><Link to="/services" className="hover:text-brand-500 transition-colors">Property Management & Rehabilitation</Link></li>
              <li><Link to="/contact" className="hover:text-brand-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-brand-500 mr-2">•</span> <Link to="/services" className="hover:text-brand-500 transition-colors">Buy & Sell Properties</Link>
              </li>
              <li className="flex items-start">
                <span className="text-brand-500 mr-2">•</span> <Link to="/services" className="hover:text-brand-500 transition-colors">Site Management</Link>
              </li>
              <li className="flex items-start">
                <span className="text-brand-500 mr-2">•</span> <Link to="/services" className="hover:text-brand-500 transition-colors">Property Management & Rehabilitation</Link>
              </li>
              <li className="flex items-start">
                <span className="text-brand-500 mr-2">•</span> <Link to="/services" className="hover:text-brand-500 transition-colors">Land Surveying</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-500 mr-3 mt-0.5" />
                <span>Kampala, Uganda</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-brand-500 mr-3" />
                <a href="https://wa.me/256709773348" target="_blank" rel="noreferrer" className="hover:text-brand-500 transition-colors">+256 709 773 348</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-brand-500 mr-3" />
                <a href="https://wa.me/256791017140" target="_blank" rel="noreferrer" className="hover:text-brand-500 transition-colors">+256 791 017 140</a>
              </li>
              <li className="flex items-center text-sm text-brand-500 ml-8">
                 (Both numbers on WhatsApp)
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-brand-500 mr-3" />
                <a href="https://formsubmit.co/el/poniji" target="_blank" rel="noopener noreferrer" className="hover:text-brand-500 transition-colors">sarahsanctuaryhomes@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Sarah Sanctuary Homes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;