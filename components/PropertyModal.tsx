import React, { useState } from 'react';
import { X, MapPin, Bed, Bath, Move, CheckCircle, Video, Image as ImageIcon, Phone, Maximize2, Share2, MessageCircle } from 'lucide-react';
import { Property, PropertyType } from '../types';
import Lightbox from './Lightbox';

interface PropertyModalProps {
  property: Property;
  onClose: () => void;
  onContact: () => void;
}

const PropertyModal: React.FC<PropertyModalProps> = ({ property, onClose, onContact }) => {
  const [activeImage, setActiveImage] = useState(property.imageUrl);
  const [showTour, setShowTour] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-UG', { style: 'currency', currency: 'UGX', maximumSignificantDigits: 3 }).format(price);
  };

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const activeImageIndex = property.images.indexOf(activeImage);
  const lightboxStartIndex = activeImageIndex !== -1 ? activeImageIndex : 0;

  return (
    <>
      <div className="fixed inset-0 z-[60] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        {/* Backdrop */}
        <div className="fixed inset-0 bg-gray-900/75 backdrop-blur-sm transition-opacity" onClick={onClose}></div>

        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl">
            
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-white/80 p-2 rounded-full hover:bg-white text-gray-500 hover:text-gray-800 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 h-full lg:h-[85vh]">
              {/* Left: Media Gallery */}
              <div className="bg-gray-100 flex flex-col h-[50vh] lg:h-full">
                 <div className="relative flex-1 bg-black w-full flex items-center justify-center overflow-hidden group">
                   {showTour && property.virtualTourUrl ? (
                     <div className="w-full h-full flex items-center justify-center bg-gray-900 text-white">
                       {/* Placeholder for Virtual Tour Iframe */}
                       <div className="text-center p-8">
                         <Video className="h-16 w-16 mx-auto text-brand-500 mb-4" />
                         <h3 className="text-xl font-bold">3D Virtual Tour</h3>
                         <p className="text-gray-400 mb-6">Interactive tour viewer would load here.</p>
                         <button 
                           onClick={() => setShowTour(false)}
                           className="px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition-colors"
                         >
                           Back to Photos
                         </button>
                       </div>
                     </div>
                   ) : (
                     <>
                       <img 
                         src={activeImage} 
                         alt={property.title} 
                         className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity"
                         onClick={() => setIsLightboxOpen(true)}
                       />
                       <button
                         onClick={() => setIsLightboxOpen(true)}
                         className="absolute top-4 left-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all transform scale-90 group-hover:scale-100"
                         title="View Fullscreen"
                       >
                         <Maximize2 className="h-5 w-5" />
                       </button>
                     </>
                   )}
                 </div>
                 
                 {/* Thumbnails */}
                 <div className="p-4 bg-white border-t border-gray-200 overflow-x-auto no-scrollbar">
                   <div className="flex space-x-2">
                     {property.images.map((img, idx) => (
                       <button
                         key={idx}
                         onClick={() => { setActiveImage(img); setShowTour(false); }}
                         className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${activeImage === img && !showTour ? 'border-brand-600 opacity-100' : 'border-transparent opacity-70 hover:opacity-100'}`}
                       >
                         <img src={img} alt="" className="w-full h-full object-cover" />
                       </button>
                     ))}
                     {property.virtualTourUrl && (
                       <button
                         onClick={() => setShowTour(true)}
                         className={`relative flex-shrink-0 w-20 h-20 rounded-lg bg-gray-900 flex flex-col items-center justify-center text-white border-2 transition-all ${showTour ? 'border-brand-600' : 'border-transparent'}`}
                       >
                         <Video className="h-6 w-6 mb-1" />
                         <span className="text-[10px] font-bold uppercase">3D Tour</span>
                       </button>
                     )}
                   </div>
                 </div>
              </div>

              {/* Right: Details */}
              <div className="p-6 sm:p-8 overflow-y-auto max-h-[50vh] lg:max-h-full">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="bg-brand-100 text-brand-800 text-xs font-bold px-2.5 py-0.5 rounded border border-brand-200 uppercase tracking-wide">
                    {property.type}
                  </span>
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded border uppercase tracking-wide ${property.status === 'Sold' ? 'bg-red-100 text-red-800 border-red-200' : 'bg-blue-100 text-blue-800 border-blue-200'}`}>
                    {property.status}
                  </span>
                </div>

                <h2 className="text-3xl font-extrabold text-gray-900 mb-2">{property.title}</h2>
                <div className="flex items-center text-gray-500 mb-6">
                  <MapPin className="h-5 w-5 mr-1.5 text-brand-600" />
                  {property.location}
                </div>

                <div className="text-3xl font-bold text-brand-700 mb-8">
                  {formatPrice(property.price)}
                </div>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-100 mb-6">
                   {property.type === PropertyType.HOUSE && (
                     <>
                       <div className="text-center border-r border-gray-100">
                         <span className="block text-gray-400 text-xs uppercase mb-1">Bedrooms</span>
                         <div className="flex items-center justify-center font-bold text-lg text-gray-900">
                           <Bed className="h-5 w-5 mr-2 text-brand-500" /> {property.bedrooms}
                         </div>
                       </div>
                       <div className="text-center border-r border-gray-100">
                         <span className="block text-gray-400 text-xs uppercase mb-1">Bathrooms</span>
                         <div className="flex items-center justify-center font-bold text-lg text-gray-900">
                           <Bath className="h-5 w-5 mr-2 text-brand-500" /> {property.bathrooms}
                         </div>
                       </div>
                     </>
                   )}
                   <div className="text-center">
                     <span className="block text-gray-400 text-xs uppercase mb-1">Area Size</span>
                     <div className="flex items-center justify-center font-bold text-lg text-gray-900">
                       <Move className="h-5 w-5 mr-2 text-brand-500" /> {property.area}
                     </div>
                   </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Description</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {property.description}
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {property.features.map((feature, idx) => (
                      <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                        <CheckCircle className="h-3.5 w-3.5 mr-1.5 text-brand-600" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="sticky bottom-0 bg-white pt-4 pb-2 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                   <button 
                     onClick={handleShare}
                     className="px-4 py-3.5 border border-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center sm:w-auto w-full"
                     title="Copy Link to Clipboard"
                   >
                     {copied ? <CheckCircle className="h-5 w-5 text-green-600" /> : <Share2 className="h-5 w-5" />}
                     <span className="ml-2 sm:hidden">{copied ? 'Copied' : 'Share'}</span>
                   </button>
                   
                   <a 
                     href={`https://wa.me/256709773348?text=Hi,%20I%20am%20interested%20in%20${encodeURIComponent(property.title)}`}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex-1 bg-[#25D366] text-white font-bold py-3.5 rounded-lg hover:bg-green-600 transition-colors shadow-lg flex items-center justify-center"
                   >
                     <MessageCircle className="h-5 w-5 mr-2" />
                     WhatsApp
                   </a>

                   <button 
                     onClick={onContact}
                     className="flex-1 bg-gray-900 text-white font-bold py-3.5 rounded-lg hover:bg-brand-700 transition-colors shadow-lg flex items-center justify-center"
                   >
                     <Phone className="h-5 w-5 mr-2" />
                     Contact
                   </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Lightbox 
        images={property.images}
        isOpen={isLightboxOpen}
        startIndex={lightboxStartIndex}
        onClose={() => setIsLightboxOpen(false)}
      />
    </>
  );
};

export default PropertyModal;