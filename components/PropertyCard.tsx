import React from 'react';
import { MapPin, Bed, Bath, Move, ArrowRight, Camera, Video } from 'lucide-react';
import { Property, PropertyType } from '../types';

interface PropertyCardProps {
  property: Property;
  onSelect: (property: Property) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onSelect }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-UG', { style: 'currency', currency: 'UGX', maximumSignificantDigits: 3 }).format(price);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full group">
      <div 
        className="relative h-56 sm:h-64 overflow-hidden cursor-pointer bg-gray-100"
        onClick={() => onSelect(property)}
      >
        <img
          src={property.imageUrl}
          alt={`${property.title} located in ${property.location} - Sarah Sanctuary Homes`}
          loading="lazy"
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 bg-brand-900/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider z-10 shadow-sm">
          {property.type}
        </div>
        
        {/* Badges for Gallery/Video */}
        <div className="absolute top-4 right-4 flex space-x-1 z-10">
           {property.virtualTourUrl && (
             <div className="bg-black/60 backdrop-blur-sm text-white p-1.5 rounded-full" title="Virtual Tour Available">
               <Video className="h-4 w-4" />
             </div>
           )}
           <div className="bg-black/60 backdrop-blur-sm text-white p-1.5 rounded-full flex items-center" title="Gallery">
             <Camera className="h-4 w-4" />
             <span className="ml-1 text-xs font-bold">{property.images.length}</span>
           </div>
        </div>

        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-brand-800 font-bold shadow-sm text-sm sm:text-base z-10 max-w-[85%] truncate">
          {formatPrice(property.price)}
        </div>
        
        {/* Subtle gradient for text contrast at bottom if needed */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
      </div>
      
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <MapPin className="h-3.5 w-3.5 mr-1 text-brand-500 flex-shrink-0" />
          <span className="truncate">{property.location}</span>
        </div>
        
        <h3 
          className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-700 transition-colors cursor-pointer line-clamp-1"
          onClick={() => onSelect(property)}
          title={property.title}
        >
          {property.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
          {property.description}
        </p>
        
        <div className="flex items-center justify-between border-t border-gray-100 pt-4 text-gray-500 text-sm gap-3">
          {property.type === PropertyType.HOUSE ? (
            <div className="flex space-x-4">
              <div className="flex items-center" title="Bedrooms">
                <Bed className="h-4 w-4 mr-1.5 text-gray-400 flex-shrink-0" />
                <span className="font-medium text-gray-700">{property.bedrooms}</span>
              </div>
              <div className="flex items-center" title="Bathrooms">
                <Bath className="h-4 w-4 mr-1.5 text-gray-400 flex-shrink-0" />
                <span className="font-medium text-gray-700">{property.bathrooms}</span>
              </div>
            </div>
          ) : (
             <div className="text-xs font-semibold bg-brand-50 text-brand-700 px-2 py-1 rounded whitespace-nowrap border border-brand-100">
               Verified Survey
             </div>
          )}
          
          <div className="flex items-center justify-end flex-1 min-w-0" title="Area">
            <Move className="h-4 w-4 mr-1.5 text-gray-400 flex-shrink-0" />
            <span className="truncate font-medium text-gray-700">{property.area}</span>
          </div>
        </div>
        
        <button 
          onClick={() => onSelect(property)}
          className="w-full mt-5 bg-gray-900 hover:bg-brand-700 text-white font-medium py-2.5 rounded-lg transition-all duration-300 flex items-center justify-center text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5"
        >
          View Details <ArrowRight className="h-4 w-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;