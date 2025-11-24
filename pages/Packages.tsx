import React, { useState } from 'react';
import { PACKAGES } from '../constants';
import { Link } from 'react-router-dom';

const Packages: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Wellness', 'Culture', 'Nature'];
  
  const filteredPackages = filter === 'All' 
    ? PACKAGES 
    : PACKAGES.filter(p => p.category === filter);

  return (
    <div className="bg-stone-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl font-bold text-primary mb-4">Our Packages</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Select a journey that resonates with your intention. From deep forest immersion to cultural exchanges in Nueva Vizcaya.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-stone-600 border border-stone-200 hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <div className="relative h-64">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-xs font-semibold bg-secondary px-2 py-1 rounded-md mb-2 inline-block">
                    {pkg.category}
                  </span>
                  <div className="font-bold">{pkg.duration}</div>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-serif text-2xl font-bold text-stone-800 mb-2">{pkg.title}</h3>
                <p className="text-stone-600 text-sm mb-6 flex-1">{pkg.description}</p>
                
                <div className="mb-6">
                  <p className="text-xs font-bold text-stone-400 uppercase tracking-wide mb-2">Highlights</p>
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map(h => (
                      <span key={h} className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-stone-100">
                  <div>
                    <span className="text-xs text-stone-400 block">Starting from</span>
                    <span className="text-xl font-bold text-primary">₱{pkg.price.toLocaleString()}</span>
                    <span className="text-xs text-stone-400"> / pax</span>
                  </div>
                  <Link 
                    to={`/packages/${pkg.id}`}
                    className="bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-emerald-800 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;