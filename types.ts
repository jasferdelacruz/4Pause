
export interface Package {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  category: 'Wellness' | 'Culture' | 'Nature';
  highlights: string[];
}

export interface Destination {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
  municipality: string;
  category: 'Nature' | 'Culture' | 'Wellness' | 'Accommodation';
  contactInfo?: string;
  locationNotes?: string;
}

export interface PartnerMetric {
  name: string;
  visitors: number;
  revenue: number;
}

export enum UserRole {
  GUEST = 'GUEST',
  PARTNER = 'PARTNER',
  ADMIN = 'ADMIN'
}

export type BookingStatus = 'Confirmed' | 'Pending' | 'Cancelled';

export interface BookingRequest {
  packageId: string;
  packageName: string;
  date: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
  specialRequests?: string;
  totalPrice: number;
}

export interface Booking extends BookingRequest {
  id: string;
  status: BookingStatus;
  timestamp: Date;
}
