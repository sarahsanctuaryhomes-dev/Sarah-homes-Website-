import React from 'react';
import { Home, Map, Hammer, ShieldCheck, LucideIcon } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const iconMap: Record<string, LucideIcon> = {
  Home,
  Map,
  Hammer,
  ShieldCheck
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = iconMap[service.iconName] || Home;

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-6">
        <Icon className="h-7 w-7 text-brand-600" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
      <p className="text-gray-600 leading-relaxed">
        {service.description}
      </p>
    </div>
  );
};

export default ServiceCard;
