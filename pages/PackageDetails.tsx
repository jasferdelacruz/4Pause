import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PACKAGES } from '../constants';
import { Clock, Users, ShieldCheck, MapPin, ChevronLeft } from 'lucide-react';
import BookingModal from '../components/BookingModal';

const PackageDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const pkg = PACKAGES.find(p => p.id === id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!pkg) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50">
        <h2 className="text-2xl font-bold text-stone-600 mb-4">Package not found</h2>
        <Link to="/packages" className="text-primary hover:underline">Back to Packages</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Hero Header */}
      <div className="relative h-[60vh]">
        <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-6 left-6 z-10">
          <Link to="/packages" className="text-white flex items-center hover:text-secondary transition-colors">
            <ChevronLeft className="mr-2" /> Back to Packages
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-black/80 to-transparent">
          <div className="max-w-7xl mx-auto">
            <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block">
              {pkg.category}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">{pkg.title}</h1>
            <div className="flex flex-wrap gap-6 text-white/90">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-secondary" />
                <span>{pkg.duration}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-secondary" />
                <span>Nueva Vizcaya, PH</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
              <h2 className="font-serif text-2xl font-bold text-stone-800 mb-4">Experience Overview</h2>
              <p className="text-stone-600 leading-relaxed text-lg mb-6">
                {pkg.description}
              </p>
              
              <h3 className="font-bold text-stone-800 mb-3">Highlights</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {pkg.highlights.map((h) => (
                  <li key={h} className="flex items-center text-stone-600">
                    <ShieldCheck className="h-5 w-5 text-emerald-500 mr-2" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-stone-100">
              <h2 className="font-serif text-2xl font-bold text-stone-800 mb-6">Itinerary</h2>
              <div className="border-l-2 border-stone-200 pl-8 space-y-8 relative">
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <h4 className="font-bold text-stone-800 text-lg">Arrival & Grounding</h4>
                  <p className="text-stone-500 mt-1">Meet your local guide at Santa Fe. Welcome drink featuring locally brewed Calamansi tea. Introduction to the mindfulness practice.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-0 bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <h4 className="font-bold text-stone-800 text-lg">Nature Immersion</h4>
                  <p className="text-stone-500 mt-1">Guided forest bathing walk. Learn to engage your senses and connect with the ancient trees. Silent lunch by the river.</p>
                </div>
                <div className="relative">
                   <div className="absolute -left-[41px] top-0 bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <h4 className="font-bold text-stone-800 text-lg">Community Connection</h4>
                  <p className="text-stone-500 mt-1">Visit a local weaving center. Participate in a craft workshop and share a farm-to-table dinner with the community elders.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-100 sticky top-24">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <span className="text-stone-400 text-sm">From</span>
                  <div className="text-3xl font-bold text-primary">₱{pkg.price.toLocaleString()}</div>
                </div>
                <div className="flex items-center text-stone-500 text-sm">
                  <Users className="h-4 w-4 mr-1" /> per person
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-3 bg-stone-50 rounded-lg flex items-center text-sm text-stone-600">
                  <ShieldCheck className="h-4 w-4 text-emerald-500 mr-3" />
                  Free cancellation up to 48h before
                </div>
                 <div className="p-3 bg-stone-50 rounded-lg flex items-center text-sm text-stone-600">
                  <ShieldCheck className="h-4 w-4 text-emerald-500 mr-3" />
                  Sustainable Travel Certified
                </div>
              </div>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-secondary text-white py-4 rounded-xl font-bold text-lg hover:bg-amber-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
              >
                Book This Retreat
              </button>
              
              <p className="text-xs text-center text-stone-400 mt-4">
                No payment required today. We will confirm availability within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>

      <BookingModal 
        pkg={pkg} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default PackageDetails;