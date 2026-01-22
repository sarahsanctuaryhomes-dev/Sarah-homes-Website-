import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import { MOCK_PROPERTIES } from '../constants';
import { PropertyType, Property } from '../types';

interface ListingsProps {
  onSelectProperty: (property: Property) => void;
}

const Listings: React.FC<ListingsProps> = ({ onSelectProperty }) => {
  const [filter, setFilter] = useState<PropertyType | 'All'>('All');

  const filteredProperties = filter === 'All' 
    ? MOCK_PROPERTIES 
    : MOCK_PROPERTIES.filter(p => p.type === filter);

  return (
    <div className="pt-12 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Our Properties</h1>
          <p className="text-gray-600">Browse our selection of verified land and premium houses in Kampala.</p>
        </div>

        <div className="w-full">
          {/* Filters */}
          <div className="flex justify-center mb-10 space-x-4">
            {['All', PropertyType.HOUSE, PropertyType.LAND].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type as any)}
                className={`px-6 py-2.5 rounded-full font-bold transition-all ${
                  filter === type
                    ? 'bg-brand-900 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-brand-900 border border-gray-200'
                }`}
              >
                {type === 'All' ? 'All Listings' : type}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard 
                key={property.id} 
                property={property} 
                onSelect={onSelectProperty}
              />
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              No properties found in this category.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Listings;