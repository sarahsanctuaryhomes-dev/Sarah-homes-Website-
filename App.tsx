import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, useSearchParams, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GeminiAssistant from './components/GeminiAssistant';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './pages/Home';
import Listings from './pages/Listings';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import PropertyModal from './components/PropertyModal';
import { Property } from './types';
import { MOCK_PROPERTIES } from './constants';

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const propertyId = searchParams.get('propertyId');
  const selectedProperty = propertyId ? MOCK_PROPERTIES.find(p => p.id === propertyId) : null;

  // Determine current page ID for Navbar highlighting
  const getPageId = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path.startsWith('/listings')) return 'listings';
    if (path.startsWith('/services')) return 'services';
    if (path.startsWith('/contact')) return 'contact';
    return 'home';
  };

  const handleNavigate = (page: string) => {
    switch (page) {
      case 'home':
        navigate('/');
        break;
      case 'listings':
        navigate('/listings');
        break;
      case 'services':
        navigate('/services');
        break;
      case 'contact':
        navigate('/contact');
        break;
      default:
        navigate('/');
    }
  };

  const handleSelectProperty = (property: Property) => {
    setSearchParams({ propertyId: property.id });
  };

  const handleCloseModal = () => {
    setSearchParams({});
  };

  const handleContactFromModal = () => {
    handleCloseModal();
    navigate('/contact');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProperty) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [selectedProperty]);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-brand-100 selection:text-brand-900">
      <Navbar currentPage={getPageId()} onNavigate={handleNavigate} />
      <main className="flex-grow">
        <Routes>
          <Route 
            path="/" 
            element={<Home onNavigate={handleNavigate} onSelectProperty={handleSelectProperty} />} 
          />
          <Route 
            path="/listings" 
            element={<Listings onSelectProperty={handleSelectProperty} />} 
          />
          <Route 
            path="/services" 
            element={<ServicesPage onContactClick={() => navigate('/contact')} />} 
          />
          <Route 
            path="/contact" 
            element={<ContactPage />} 
          />
          {/* Catch all route to redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      
      {selectedProperty && (
        <PropertyModal 
          property={selectedProperty} 
          onClose={handleCloseModal} 
          onContact={handleContactFromModal}
        />
      )}

      <FloatingWhatsApp />
      <GeminiAssistant />
      <Footer />
    </div>
  );
};

export default App;