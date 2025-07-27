export interface EquipmentItem {
  id: string;
  name: string;
  image: string;
  price: string;
  description: string;
  specs: { [key: string]: string };
  category: 'Tractor' | 'Trailer' | 'Tool' | 'Other';
  new: boolean;
  featured?: boolean;
}

export const equipmentCatalog: EquipmentItem[] = [
  {
    id: '1',
    name: 'John Deere 6155R Tractor',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop',
    price: '$165,000',
    description: 'Powerful and efficient tractor perfect for large-scale farming operations with advanced technology.',
    specs: {
      'Power': '155 HP',
      'Weight': '8.2 tons',
      'Fuel Tank': '300L',
      'PTO Speed': '540/1000 RPM'
    },
    category: 'Tractor',
    new: true,
    featured: true
  },
  {
    id: '2',
    name: 'Heavy Duty Flatbed Trailer',
    image: 'https://images.unsplash.com/photo-1586861203927-800a5acdcc4d?w=800&h=600&fit=crop',
    price: '$28,500',
    description: 'Durable flatbed trailer designed for heavy equipment transport with reinforced steel frame.',
    specs: {
      'Length': '48 ft',
      'Width': '8.5 ft',
      'Capacity': '40 tons',
      'Axles': 'Tri-axle'
    },
    category: 'Trailer',
    new: false,
    featured: true
  },
  {
    id: '3',
    name: 'Case IH Combine Harvester',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop',
    price: '$420,000',
    description: 'High-performance combine harvester with advanced grain handling and precision technology.',
    specs: {
      'Engine Power': '380 HP',
      'Grain Tank': '350 bu',
      'Header Width': '35 ft',
      'Fuel Capacity': '600L'
    },
    category: 'Tractor',
    new: true,
    featured: false
  },
  {
    id: '4',
    name: 'Professional Rotary Tiller',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop',
    price: '$3,200',
    description: 'Heavy-duty rotary tiller for soil preparation with adjustable working depth.',
    specs: {
      'Working Width': '6 ft',
      'Weight': '850 lbs',
      'Tines': '24 pieces',
      'Required PTO': '35 HP min'
    },
    category: 'Tool',
    new: false,
    featured: false
  },
  {
    id: '5',
    name: 'Kubota L3901 Compact Tractor',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    price: '$22,800',
    description: 'Versatile compact tractor ideal for small farms and landscaping projects.',
    specs: {
      'Power': '39 HP',
      'Weight': '3,086 lbs',
      'Fuel Tank': '11.9 gal',
      'Transmission': 'HST'
    },
    category: 'Tractor',
    new: false,
    featured: true
  },
  {
    id: '6',
    name: 'Hydraulic Log Splitter',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
    price: '$1,850',
    description: 'Professional-grade hydraulic log splitter for efficient wood processing.',
    specs: {
      'Splitting Force': '25 tons',
      'Log Length': '24 in max',
      'Cycle Time': '12 seconds',
      'Engine': '6.5 HP'
    },
    category: 'Tool',
    new: true,
    featured: false
  },
  {
    id: '7',
    name: 'Livestock Transport Trailer',
    image: 'https://images.unsplash.com/photo-1551522435-a13afa10f103?w=800&h=600&fit=crop',
    price: '$45,000',
    description: 'Specialized trailer for safe and comfortable livestock transportation.',
    specs: {
      'Length': '32 ft',
      'Capacity': '36 head cattle',
      'Ventilation': 'Side & roof vents',
      'Floor': 'Non-slip aluminum'
    },
    category: 'Trailer',
    new: false,
    featured: false
  },
  {
    id: '8',
    name: 'Zero-Turn Mower 60"',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
    price: '$8,500',
    description: 'Commercial-grade zero-turn mower for professional landscaping and large properties.',
    specs: {
      'Cutting Width': '60 in',
      'Engine': '24 HP',
      'Speed': '10 mph',
      'Fuel Capacity': '8 gal'
    },
    category: 'Tool',
    new: true,
    featured: false
  }
];

export const categories = ['All', 'Tractor', 'Trailer', 'Tool', 'Other'] as const;