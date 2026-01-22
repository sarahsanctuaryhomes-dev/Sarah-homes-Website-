export enum PropertyType {
  HOUSE = 'House',
  LAND = 'Land',
  COMMERCIAL = 'Commercial'
}

export enum ListingStatus {
  FOR_SALE = 'For Sale',
  SOLD = 'Sold',
  PENDING = 'Pending'
}

export interface Property {
  id: string;
  title: string;
  price: number; // In UGX
  location: string;
  type: PropertyType;
  status: ListingStatus;
  bedrooms?: number;
  bathrooms?: number;
  area: string; // e.g., "50 decimals" or "400 sqm"
  description: string;
  imageUrl: string;
  features: string[];
  images: string[]; // Gallery images
  virtualTourUrl?: string; // Optional 3D tour link
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isError?: boolean;
}
