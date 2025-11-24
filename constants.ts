
import { Package, Destination, PartnerMetric } from './types';

export const MUNICIPALITIES = [
  'Alfonso Castañeda', 'Ambaguio', 'Aritao', 'Bagabag', 'Bambang', 
  'Bayombong', 'Diadi', 'Dupax del Norte', 'Dupax del Sur', 'Kasibu', 
  'Kayapa', 'Quezon', 'Santa Fe', 'Solano', 'Villaverde'
];

export const PACKAGES: Package[] = [
  {
    id: 'pkg_1',
    title: 'Forest & Breath Retreat',
    description: 'Immerse yourself in the healing power of nature with guided forest bathing, mindful hiking, and sunset meditation in the Santa Fe mountains.',
    price: 8500,
    duration: '2 Days / 1 Night',
    image: 'https://picsum.photos/id/10/800/600',
    category: 'Wellness',
    highlights: ['Forest Bathing', 'Organic Meals', 'Meditation']
  },
  {
    id: 'pkg_2',
    title: 'Cultural Weave Journey',
    description: 'Connect with local artisans in Ambaguio, learn traditional weaving techniques, and experience the warm hospitality of Nueva Vizcaya.',
    price: 6500,
    duration: '1 Day',
    image: 'https://picsum.photos/id/28/800/600',
    category: 'Culture',
    highlights: ['Weaving Workshop', 'Local Cuisine', 'Homestay Visit']
  },
  {
    id: 'pkg_3',
    title: 'Rice Terraces Wellness Escape',
    description: 'Restore your balance with yoga sessions overlooking ancient terraces in Kasibu and farm-to-table dining experiences.',
    price: 14000,
    duration: '3 Days / 2 Nights',
    image: 'https://picsum.photos/id/57/800/600',
    category: 'Nature',
    highlights: ['Sunrise Yoga', 'Terrace Hike', 'Digital Detox']
  }
];

export const DESTINATIONS: Destination[] = [
  // --- WATERFALLS (Nature) ---
  {
    id: 'falls_1',
    name: 'Imugan Falls',
    description: 'A serene two-level waterfall perfect for mindful contemplation and cool dips.',
    image: 'https://picsum.photos/id/15/800/600',
    tags: ['Waterfall', 'Hiking', 'Swimming'],
    municipality: 'Santa Fe',
    category: 'Nature',
    locationNotes: 'Approximate coordinates: 16° 9′32″ N, 120° 54′13″ E.'
  },
  {
    id: 'falls_2',
    name: 'Lintungan Falls',
    description: 'A magnificent four-tiered waterfall located in Barangay Runruno. A hidden gem for nature lovers.',
    image: 'https://picsum.photos/id/1039/800/600',
    tags: ['Waterfall', 'Adventure', 'Hiking'],
    municipality: 'Quezon',
    category: 'Nature',
    locationNotes: 'About 3km from highway.'
  },
  {
    id: 'falls_3',
    name: 'Kapitan Falls',
    description: 'Features an approx 8m high drop with a wide basin perfect for swimming.',
    image: 'https://picsum.photos/id/1043/800/600',
    tags: ['Waterfall', 'Swimming', 'Nature'],
    municipality: 'Quezon',
    category: 'Nature',
    locationNotes: 'Sitio Balunagen, Brgy. Dagupan.'
  },
  {
    id: 'falls_4',
    name: 'Mapalyao Falls',
    description: 'Scenic falls featuring a hanging bridge and a pool for relaxing.',
    image: 'https://picsum.photos/id/1064/800/600',
    tags: ['Waterfall', 'Picnic', 'Bridge'],
    municipality: 'Quezon',
    category: 'Nature',
    locationNotes: 'Barangay Buliwao.'
  },
  {
    id: 'falls_5',
    name: 'Edralin Falls',
    description: 'A beautiful natural cascade located in Kasibu.',
    image: 'https://picsum.photos/id/1015/800/600',
    tags: ['Waterfall', 'Nature'],
    municipality: 'Kasibu',
    category: 'Nature',
    locationNotes: 'Barangay Antutot. ~16.37871° N, 121.23729° E.'
  },
  {
    id: 'falls_6',
    name: 'Machelet Falls',
    description: 'Known to be one of the tallest waterfalls in the area, offering breathtaking views.',
    image: 'https://picsum.photos/id/1016/800/600',
    tags: ['Waterfall', 'Trekking', 'Views'],
    municipality: 'Kasibu',
    category: 'Nature',
    locationNotes: 'Barangay Biyoy.'
  },
  {
    id: 'falls_7',
    name: 'Dumli-ing Falls',
    description: 'A towering waterfall with an approximately 98m drop.',
    image: 'https://picsum.photos/id/1018/800/600',
    tags: ['Waterfall', 'High Drop', 'Nature'],
    municipality: 'Kayapa',
    category: 'Nature',
    locationNotes: 'Barangay Balete.'
  },
  {
    id: 'falls_8',
    name: 'Maenga Falls',
    description: 'A scenic stop on the trail to Pangalabinan Cave.',
    image: 'https://picsum.photos/id/1036/800/600',
    tags: ['Waterfall', 'Cave Trail', 'Adventure'],
    municipality: 'Alfonso Castañeda',
    category: 'Nature',
    locationNotes: 'On the trail to Pangalabinan Cave.'
  },

  // --- WELLNESS ---
  {
    id: 'well_1',
    name: 'Nueva VizKawa Wellness Farm',
    description: 'Holistic wellness farm offering traditional kawa herbal baths, Filipino Hilot massage, and organic farm food.',
    image: 'https://picsum.photos/id/1025/800/600',
    tags: ['Kawa Bath', 'Massage', 'Organic Food'],
    municipality: 'Bayombong',
    category: 'Wellness',
    locationNotes: 'Purok 6, Bayombong. Also offers yoga/meditation workshops.'
  },
  {
    id: 'well_2',
    name: 'Heavenly Springs Resort',
    description: 'A nature-oriented resort offering tranquility and escape from the city noise.',
    image: 'https://picsum.photos/id/1024/800/600',
    tags: ['Retreat', 'Nature', 'Tranquility'],
    municipality: 'Bambang',
    category: 'Wellness',
    locationNotes: 'Brgy. Malong, Bambang.'
  },
  {
    id: 'well_3',
    name: 'Banag\'s Garden',
    description: 'Agri-tourism farm sanctuary with river swimming and calm nature environments.',
    image: 'https://picsum.photos/id/1020/800/600',
    tags: ['Agri-tourism', 'River', 'Farm'],
    municipality: 'Alfonso Castañeda',
    category: 'Wellness'
  },
  
  // --- ACCOMMODATIONS ---
  {
    id: 'acc_1',
    name: '24/7 Inn & Resort',
    description: 'Comfortable inn and resort accommodation in Solano.',
    image: 'https://picsum.photos/id/1031/800/600',
    tags: ['Inn', 'Resort'],
    municipality: 'Solano',
    category: 'Accommodation',
    contactInfo: '0956-409-6446 / 0916-376-2536'
  },
  {
    id: 'acc_2',
    name: 'AM/PM Lodge',
    description: 'Accessible lodging located on J.P. Rizal Ave.',
    image: 'https://picsum.photos/id/1040/800/600',
    tags: ['Lodge', 'City Center'],
    municipality: 'Solano',
    category: 'Accommodation',
    contactInfo: '0917-325-8658 / 0945-452-9065'
  },
  {
    id: 'acc_3',
    name: 'Balai Gloria Hotel',
    description: 'Well-known hotel in Solano offering comfortable stays.',
    image: 'https://picsum.photos/id/1048/800/600',
    tags: ['Hotel', 'Comfort'],
    municipality: 'Solano',
    category: 'Accommodation',
    contactInfo: '(078) 326-5009 / 0922-859-6449'
  },
  {
    id: 'acc_4',
    name: 'Dinamling Homestay',
    description: 'Experience local living near Capisaan Caves.',
    image: 'https://picsum.photos/id/1056/800/600',
    tags: ['Homestay', 'Local Experience'],
    municipality: 'Kasibu',
    category: 'Accommodation',
    contactInfo: '0916-767-4146',
    locationNotes: 'Capisaan'
  },
  {
    id: 'acc_5',
    name: 'Gamponia Farm Resort & Hotel',
    description: 'Relaxing farm resort environment.',
    image: 'https://picsum.photos/id/1057/800/600',
    tags: ['Farm Resort', 'Hotel'],
    municipality: 'Bambang',
    category: 'Accommodation',
    contactInfo: '0917-879-6646'
  },
  {
    id: 'acc_6',
    name: 'Highlander Hotel',
    description: 'Premier hotel in the provincial capital.',
    image: 'https://picsum.photos/id/1058/800/600',
    tags: ['Hotel', 'City'],
    municipality: 'Bayombong',
    category: 'Accommodation',
    contactInfo: '0917-122-8062'
  },
  {
    id: 'acc_7',
    name: 'Saber Inn',
    description: 'Convenient inn located on the National Road.',
    image: 'https://picsum.photos/id/1068/800/600',
    tags: ['Inn', 'Accessible'],
    municipality: 'Bayombong',
    category: 'Accommodation',
    contactInfo: '0915-610-3426'
  },
  {
    id: 'acc_8',
    name: 'Lolita\'s Homestay',
    description: 'Cozy homestay in the Poblacion area.',
    image: 'https://picsum.photos/id/1070/800/600',
    tags: ['Homestay', 'Cozy'],
    municipality: 'Santa Fe',
    category: 'Accommodation',
    contactInfo: '0908-344-4160'
  },
  {
    id: 'acc_9',
    name: 'Palaisdaan Hotel & Restaurant',
    description: 'Hotel and restaurant along the National Highway.',
    image: 'https://picsum.photos/id/1072/800/600',
    tags: ['Hotel', 'Dining'],
    municipality: 'Bagabag',
    category: 'Accommodation',
    contactInfo: '0917-329-3891'
  },
  {
    id: 'acc_10',
    name: 'Governor\'s Garden Hotel',
    description: 'Garden hotel setting in Solano.',
    image: 'https://picsum.photos/id/1078/800/600',
    tags: ['Hotel', 'Garden'],
    municipality: 'Solano',
    category: 'Accommodation',
    contactInfo: '0926-572-6068'
  },
  
  // --- OTHER DESTINATIONS (Culture/Nature) ---
  {
    id: 'dest_3',
    name: 'St. Vincent Ferrer Church',
    description: 'Visit the 18th-century Baroque church, a National Cultural Treasure that stands as a testament to history and faith.',
    image: 'https://picsum.photos/id/49/800/600',
    tags: ['History', 'Architecture', 'Culture'],
    municipality: 'Dupax del Sur',
    category: 'Culture'
  },
  {
    id: 'dest_2',
    name: 'Capisaan Caves',
    description: 'Explore one of the longest cave systems in the Philippines with experienced local guides.',
    image: 'https://picsum.photos/id/38/800/600',
    tags: ['Adventure', 'Spelunking', 'Geology'],
    municipality: 'Kasibu',
    category: 'Nature',
    locationNotes: 'Guide required for entry.'
  },
  {
    id: 'dest_4',
    name: 'Lower Magat Eco-Tourism Park',
    description: 'A vast expanse of forest and lake, ideal for camping, bird watching, and finding stillness.',
    image: 'https://picsum.photos/id/11/800/600',
    tags: ['Ecotourism', 'Camping', 'Nature'],
    municipality: 'Diadi',
    category: 'Nature'
  },
  {
    id: 'dest_5',
    name: 'Mt. Pulag (Ambaguio Trail)',
    description: 'The "Playground of the Gods". Take the Ambaguio trail for a challenging yet spiritual ascent through mossy forests.',
    image: 'https://picsum.photos/id/29/800/600',
    tags: ['Hiking', 'Mountain', 'Views'],
    municipality: 'Ambaguio',
    category: 'Nature'
  }
];

export const PARTNER_METRICS: PartnerMetric[] = [
  { name: 'Jan', visitors: 45, revenue: 168750 },
  { name: 'Feb', visitors: 52, revenue: 195000 },
  { name: 'Mar', visitors: 68, revenue: 255000 },
  { name: 'Apr', visitors: 74, revenue: 277500 },
  { name: 'May', visitors: 90, revenue: 337500 },
  { name: 'Jun', visitors: 85, revenue: 318750 },
];
