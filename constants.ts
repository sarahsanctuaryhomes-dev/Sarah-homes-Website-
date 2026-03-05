import { Property, PropertyType, ListingStatus, Service } from './types';

export const MOCK_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Exceptional Tea Estate Opportunity',
    price: 32300000000, // Approx $8.5M USD in UGX
    location: 'Fort Portal, Western Uganda',
    type: PropertyType.COMMERCIAL,
    status: ListingStatus.FOR_SALE,
    area: '668 Acres',
    description: `*EXCEPTIONAL TEA ESTATE OPPORTUNITY ON SALE*

LOCATION: FORT PORTAL, WESTERN UGANDA

INVESTMENT OPPORTUNITY:
TEA ESTATE SPANNING 668 ACRES OF LAND
FULLY OPERATIONAL TEA FACTORY

TENURE: FREEHOLD TITLE
SELLING PRICE: $8.5 million

KEY FEATURES:
- TEA PLANTATION: 400 acres of tea-covered land, with the potential for expansion
- TEA FACTORY: FULLY EQUIPPED & OPERATIONAL PROVIDING A READY-MADE INFRASTRUCTURE FOR PRODUCTION
- Worker Quarters and Shades: Ample housing for workers, ensuring a smooth operation
- LAND TENURE: Freehold land title, providing secure ownership
- LOCATION: Strategically situated in Fort Portal, Western Uganda, known for its fertile soil
- IDEAL CLIMATE for tea cultivation and 18km from Fort Portal town, offering easy access to markets and amenities
- POTENTIAL EARNINGS: $2.5 millions annually, if well-managed, making this a lucrative investment opportunity`,
    imageUrl: '/images/properties/tea-estate-main.jpg',
    images: [
      '/images/properties/tea-estate-1.jpg',
      '/images/properties/tea-estate-2.jpg',
      '/images/properties/tea-estate-3.jpg'
    ],
    features: ['Tea Plantation (400 acres)', 'Fully Equipped Factory', 'Worker Quarters', 'Freehold Title', 'Fertile Soil', '18km from Fort Portal Town']
  },
  {
    id: '2',
    title: 'Private Island in Uganda',
    price: 11400000000, // Approx $3M USD in UGX
    location: 'Lake Victoria, Jinja',
    type: PropertyType.COMMERCIAL,
    status: ListingStatus.FOR_SALE,
    area: '10 Acres',
    description: `*PRIVATE ISLAND IN UGANDA, EAST AFRICA IS STILL AVAILABLE FOR SALE*

With incredible views of Lake Victoria and the shores of Jinja in Uganda, this ten-acre private island has a well-developed landscape with a variety of bird life. It is a home to 50 species of cormorants and egrets. A masterpiece and an amazing location for an investment opportunity for tourism development or as a private retreat.

The Island is on a 49-year renewable lease with 17 years currently remaining. The island is a 20-minute boat ride from the Source of the Nile. The island and all assets including 3 boats and one Jet Ski are available for immediate sale.

*ASSETS INCLUDED:*
- 3 self-contained cottages
- 2 buildings that each house 2 self-contained rooms
- Restaurant / Kitchen / Bar & Lookout lounge area
- Swimming pool & Basic staff quarters
- Solar electricity with backup generators to charge solar units
- Solar hot water for the rooms
- All existing tables/chairs, kitchen and serving utensils, linens, etc.
- Manicured garden with a variety of fruit trees planted
- All assets at "Rumors at the Source of the Nile" (a small bar/snack place located at the source of the Nile in Jinja)

*BOATS ON OFFER IN PACKAGE:*
- Double decker pontoon (10.15m x 4.5m) with dual 85 hp engines carrying 15-20 people. Comes with helm console, deck lights, generator, navigation lights, on-board flushable toilet and hand basin, shower, kitchenette with sink unit, two-plate burner, and gas-powered fridge.
- Speed boat with 200 hp engine carrying seven people
- Wave trekker / Jet Ski

*PRICE:* $3 MILLION`,
    imageUrl: '/images/properties/private-island-main.jpg',
    images: [
      '/images/properties/private-island-1.jpg',
      '/images/properties/private-island-2.jpg',
      '/images/properties/private-island-3.jpg'
    ],
    features: ['10 Acres', 'Swimming Pool', 'Solar Power', '3 Boats & Jet Ski', 'Restaurant & Bar', '7 Cottages/Rooms']
  },
  {
    id: '3',
    title: 'Residential Plot in Matugga',
    price: 63000000,
    location: 'Nabinaka, Matugga, Nansana municipality',
    type: PropertyType.LAND,
    status: ListingStatus.FOR_SALE,
    area: '50x100',
    description: 'Prime residential plot located in Nabinaka, Matugga within Nansana municipality. Comes with a ready title, perfect for immediate development.',
    imageUrl: '/images/properties/matugga-land-main.jpg',
    images: [
      '/images/properties/matugga-land-1.jpg',
      '/images/properties/matugga-land-2.jpg',
      '/images/properties/matugga-land-3.jpg'
    ],
    features: ['Ready Title', '50x100 Plot Size', 'Residential Zoning', 'Accessible Roads']
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
    imageUrl: '/images/properties/commercial-main.jpg',
    images: [
      '/images/properties/commercial-1.jpg',
      '/images/properties/commercial-2.jpg'
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
    imageUrl: '/images/properties/family-home-main.jpg',
    images: [
      '/images/properties/family-home-1.jpg',
      '/images/properties/family-home-2.jpg',
      '/images/properties/family-home-3.jpg'
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
    imageUrl: '/images/properties/hilltop-main.jpg',
    images: [
      '/images/properties/hilltop-1.jpg',
      '/images/properties/hilltop-2.jpg',
      '/images/properties/hilltop-3.jpg',
      '/images/properties/hilltop-4.jpg'
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
    image: '/images/testimonials/godfrey.jpg'
  },
  {
    id: '2',
    name: 'Amina M.',
    role: 'Homeowner',
    content: 'The construction management team was transparent. I received weekly video updates of my house in Kira. Highly recommended!',
    image: '/images/testimonials/amina.jpg'
  },
  {
    id: '3',
    name: 'John S.',
    role: 'Land Seller',
    content: 'They helped me survey and subdivide my family land in Mukono quickly. The process was smooth and professional.',
    image: '/images/testimonials/john.jpg'
  }
];

export const FAQS = [
  {
    question: 'How can someone in the Diaspora buy property in Uganda safely?',
    answer: 'For diaspora investors, we offer an end-to-end secure process. We handle title verification, provide live video tours of the property, process all legal paperwork digitally, and act as your trusted proxy on the ground to prevent fraud.'
  },
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