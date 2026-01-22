import React, { useState } from 'react';
import { Menu, X, Home, MapPin } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Properties', id: 'listings' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNav = (pageId: string) => {
    onNavigate(pageId);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20 transition-all duration-300">
          <div className="flex items-center cursor-pointer" onClick={() => handleNav('home')}>
            <Home className="h-7 w-7 md:h-8 md:w-8 text-brand-700" />
            <div className="ml-2 flex flex-col">
              <span className="font-bold text-lg md:text-xl tracking-tight text-gray-900">SARAH</span>
              <span className="text-[10px] md:text-xs font-semibold tracking-widest text-brand-600 uppercase">Sanctuary Homes</span>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`${
                  currentPage === link.id
                    ? 'text-brand-900 border-b-2 border-brand-900 font-bold'
                    : 'text-gray-600 hover:text-brand-900 hover:bg-gray-50'
                } px-3 py-2 text-sm font-medium transition-all duration-200`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => handleNav('contact')}
              className="bg-brand-900 hover:bg-brand-800 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Book a Site Visit
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`${
                  currentPage === link.id ? 'bg-brand-50 text-brand-900 font-bold' : 'text-gray-600 hover:bg-gray-50'
                } block px-4 py-3 rounded-lg text-base font-medium w-full text-left transition-colors`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => handleNav('contact')}
              className="w-full mt-6 bg-brand-900 text-white py-4 rounded-lg font-bold text-lg shadow-md active:scale-95 transition-transform"
            >
              Book a Site Visit
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;