
import { Booking, BookingRequest } from '../types';

// Mock initial data so the dashboard isn't empty
let bookings: Booking[] = [
  {
    id: '#BK-8832',
    packageId: 'pkg_1',
    packageName: 'Forest & Breath Retreat',
    date: '2023-10-24',
    guests: 2,
    name: 'Elena Fisher',
    email: 'elena@example.com',
    phone: '0917-123-4567',
    totalPrice: 17000,
    status: 'Confirmed',
    timestamp: new Date('2023-10-01')
  },
  {
    id: '#BK-8833',
    packageId: 'dest_2',
    packageName: 'Capisaan Caves Exploration',
    date: '2023-10-26',
    guests: 4,
    name: 'Nathan Drake',
    email: 'nathan@example.com',
    phone: '0918-987-6543',
    totalPrice: 12000,
    status: 'Pending',
    timestamp: new Date('2023-10-05')
  },
  {
    id: '#BK-8834',
    packageId: 'pkg_3',
    packageName: 'Rice Terraces Wellness',
    date: '2023-11-02',
    guests: 1,
    name: 'Lara Croft',
    email: 'lara@example.com',
    phone: '0920-555-1212',
    totalPrice: 14000,
    status: 'Confirmed',
    timestamp: new Date('2023-10-12')
  }
];

export const createBooking = async (request: BookingRequest): Promise<Booking> => {
  // Simulate network latency
  await new Promise(resolve => setTimeout(resolve, 1500));

  const newBooking: Booking = {
    ...request,
    id: `#BK-${Math.floor(1000 + Math.random() * 9000)}`,
    status: 'Pending', // Default status for new requests
    timestamp: new Date()
  };

  // Add to beginning of array
  bookings = [newBooking, ...bookings];
  
  return newBooking;
};

export const getBookings = async (): Promise<Booking[]> => {
  // Simulate network latency
  await new Promise(resolve => setTimeout(resolve, 500));
  return bookings;
};
