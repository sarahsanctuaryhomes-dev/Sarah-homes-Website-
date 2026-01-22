import { Property, PropertyType, ListingStatus, Service } from './types';

export const MOCK_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Modern Villa in Naguru',
    price: 1500000000,
    location: 'Naguru, Kampala',
    type: PropertyType.HOUSE,
    status: ListingStatus.FOR_SALE,
    bedrooms: 5,
    bathrooms: 4,
    area: '25 Decimals',
    description: 'A stunning modern villa with a panoramic view of the city. Features a swimming pool, servant quarters, and high-end finishes. Perfect for diplomatic residence or luxury family living.',
    imageUrl: 'https://picsum.photos/id/122/800/600',
    images: [
      'https://picsum.photos/id/122/800/600',
      'https://picsum.photos/id/237/800/600',
      'https://picsum.photos/id/13/800/600',
      'https://picsum.photos/id/20/800/600'
    ],
    virtualTourUrl: '#',
    features: ['Swimming Pool', 'City View', 'Security System', 'Modern Kitchen', 'DSQ']
  },
  {
    id: '2',
    title: 'Prime Residential Plot',
    price: 350000000,
    location: 'Namugongo, Wakiso',
    type: PropertyType.LAND,
    status: ListingStatus.FOR_SALE,
    area: '50 Decimals',
    description: 'Ready to build mailo land in a rapidly developing neighborhood. Excellent access roads and utilities available. Walking distance to the martyrs shrine.',
    imageUrl: 'https://picsum.photos/id/124/800/600',
    images: [
      'https://picsum.photos/id/124/800/600',
      'https://picsum.photos/id/110/800/600',
      'https://picsum.photos/id/116/800/600'
    ],
    features: ['Mailo Land', 'Walled', 'Water Connected', 'Power Connected']
  },
  {
    id: '3',
    title: 'Luxury Apartment Complex',
    price: 850000000,
    location: 'Kololo, Kampala',
    type: PropertyType.HOUSE,
    status: ListingStatus.FOR_SALE,
    bedrooms: 3,
    bathrooms: 3,
    area: '200 sqm',
    description: 'High-end apartment in the heart of Kololo. Walking distance to acacia mall and international schools. Features a rooftop gym and terrace.',
    imageUrl: 'https://picsum.photos/id/188/800/600',
    images: [
      'https://picsum.photos/id/188/800/600',
      'https://picsum.photos/id/24/800/600',
      'https://picsum.photos/id/42/800/600'
    ],
    virtualTourUrl: '#',
    features: ['Gym', 'Backup Generator', 'Elevator', '24/7 Guard', 'Rooftop Terrace']
  },
  {
    id: '4',
    title: 'Commercial Surveyed Land',
    price: 1200000000,
    location: 'Namanve Industrial Park',
    type: PropertyType.LAND,
    status: ListingStatus.FOR_SALE,
    area: '1 Acre',
    description: 'Industrial land perfect for warehousing or factories. Fully surveyed with clear titles. Direct access to the Jinja highway.',
    imageUrl: 'https://picsum.photos/id/203/800/600',
    images: [
      'https://picsum.photos/id/203/800/600',
      'https://picsum.photos/id/352/800/600'
    ],
    features: ['Industrial Zoning', 'Tarmac Access', '3 Phase Power', 'Container Depot Ready']
  },
  {
    id: '5',
    title: 'Cozy Family Home',
    price: 450000000,
    location: 'Gayaza, Wakiso',
    type: PropertyType.HOUSE,
    status: ListingStatus.PENDING,
    bedrooms: 4,
    bathrooms: 3,
    area: '30 Decimals',
    description: 'Spacious family home with a large garden. Perfect for raising a family away from the city noise. Recently renovated kitchen.',
    imageUrl: 'https://picsum.photos/id/219/800/600',
    images: [
      'https://picsum.photos/id/219/800/600',
      'https://picsum.photos/id/239/800/600',
      'https://picsum.photos/id/250/800/600'
    ],
    features: ['Large Garden', 'Garage', 'Water Tank', 'Perimeter Wall']
  },
  {
    id: '6',
    title: 'Hilltop Estate',
    price: 2200000000,
    location: 'Muyenga, Kampala',
    type: PropertyType.HOUSE,
    status: ListingStatus.FOR_SALE,
    bedrooms: 6,
    bathrooms: 6,
    area: '40 Decimals',
    description: 'Exquisite hilltop property with lake views. Includes a private cinema, sauna, and professionally landscaped gardens. Ultimate privacy.',
    imageUrl: 'https://picsum.photos/id/235/800/600',
    images: [
      'https://picsum.photos/id/235/800/600',
      'https://picsum.photos/id/238/800/600',
      'https://picsum.photos/id/221/800/600',
      'https://picsum.photos/id/220/800/600'
    ],
    virtualTourUrl: '#',
    features: ['Lake View', 'Home Cinema', 'Sauna', 'Gated Community', 'Smart Home Features']
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Buy & Sell Properties',
    description: 'We facilitate buying and selling of houses and land. We ensure verified titles and help you get the best value.',
    iconName: 'Home'
  },
  {
    id: 's2',
    title: 'Site Management',
    description: 'Professional supervision of your construction site. We manage materials, labor, and timelines to ensure quality.',
    iconName: 'Hammer'
  },
  {
    id: 's3',
    title: 'Property Management & Rehabilitation',
    description: 'We manage properties and handle rehabilitation projects to restore and improve the value of your real estate.',
    iconName: 'ShieldCheck'
  },
  {
    id: 's4',
    title: 'Land Surveying',
    description: 'Expert land surveying services including boundary opening and topographic surveys.',
    iconName: 'Map'
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Godfrey K.',
    role: 'Diaspora Investor',
    content: 'Buying land in Uganda while living in the UK was stressful until I found Sarah Sanctuary Homes. They handled the title verification and fencing perfectly.',
    image: 'https://picsum.photos/id/1005/100/100'
  },
  {
    id: '2',
    name: 'Amina M.',
    role: 'Homeowner',
    content: 'The construction management team was transparent. I received weekly video updates of my house in Kira. Highly recommended!',
    image: 'https://picsum.photos/id/338/100/100'
  },
  {
    id: '3',
    name: 'John S.',
    role: 'Land Seller',
    content: 'They helped me survey and subdivide my family land in Mukono quickly. The process was smooth and professional.',
    image: 'https://picsum.photos/id/64/100/100'
  }
];

export const FAQS = [
  {
    question: 'How do you verify land titles?',
    answer: 'We conduct rigorous due diligence by verifying the title deed at the Ministry of Lands zonal office, conducting boundary opening with a surveyor, and consulting local authorities (LCs) to ensure there are no disputes.'
  },
  {
    question: 'Can you manage construction if I am abroad?',
    answer: 'Yes, this is our specialty. We act as your project managers, procuring materials, supervising labor, and sending you detailed photo and video reports on a weekly basis via WhatsApp or Email.'
  },
  {
    question: 'What is the difference between Mailo and Freehold?',
    answer: 'Freehold ownership means you own the land in perpetuity. Mailo land is a tenure system unique to Buganda where ownership is permanent but may have tenants (Kibanja holders). We ensure all Mailo land we sell is free of squatter issues.'
  },
  {
    question: 'Do you charge a viewing fee?',
    answer: 'We encourage you to book a site visit. Depending on the location and logistics, a nominal transport fee may apply, which is refundable upon purchase.'
  }
];