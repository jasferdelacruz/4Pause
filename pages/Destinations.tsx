
import React, { useState } from 'react';
import { DESTINATIONS, MUNICIPALITIES } from '../constants';
import { MapPin, Search, Phone, Info } from 'lucide-react';

const Destinations: React.FC = () => {
  const [selectedMunicipality, setSelectedMunicipality] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Nature', 'Wellness', 'Culture', 'Accommodation'];

  const filteredDestinations = DESTINATIONS.filter(dest => {
    const matchesMunicipality = selectedMunicipality === 'All' || dest.municipality === selectedMunicipality;
    const matchesCategory = selectedCategory === 'All' || dest.category === selectedCategory;
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          dest.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesMunicipality && matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-stone-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-secondary font-bold uppercase tracking-widest text-xs">Discover Nueva Vizcaya</span>
          <h1 className="font-serif text-4xl font-bold text-primary mt-2 mb-4">Explore Destinations</h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            From the waterfalls of Quezon to the wellness farms of Bayombong. Find your sanctuary.
          </p>
        </div>

        {/* Filters */}
        <div className="space-y-4 mb-10">
          {/* Main Filter Bar */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-1/3">
                <Search className="absolute left-3 top-3 h-5 w-5 text-stone-400" />
                <input 
                  type="text" 
                  placeholder="Search places..." 
                  className="w-full pl-10 pr-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-stone-50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex items-center space-x-2 w-full md:w-auto overflow-x-auto no-scrollbar">
                <span className="text-sm font-medium text-stone-500 whitespace-nowrap">Municipality:</span>
                <select 
                  value={selectedMunicipality}
                  onChange={(e) => setSelectedMunicipality(e.target.value)}
                  className="bg-stone-50 border border-stone-200 text-stone-700 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5 outline-none min-w-[150px]"
                >
                  <option value="All">All Municipalities</option>
                  {MUNICIPALITIES.map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-secondary text-white shadow-md'
                    : 'bg-white text-stone-600 border border-stone-200 hover:border-secondary hover:text-secondary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDestinations.map((dest) => (
              <div key={dest.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-100 flex flex-col h-full">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={dest.image} 
                    alt={dest.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4">
                     <span className={`text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wide text-white ${
                        dest.category === 'Nature' ? 'bg-emerald-600' :
                        dest.category === 'Wellness' ? 'bg-teal-600' :
                        dest.category === 'Accommodation' ? 'bg-amber-600' :
                        'bg-blue-600'
                     }`}>
                       {dest.category}
                     </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center text-sm font-medium">
                      <MapPin className="h-4 w-4 mr-1 text-secondary" />
                      {dest.municipality}
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-serif text-xl font-bold text-stone-800 mb-2 group-hover:text-primary transition-colors">{dest.name}</h3>
                  <p className="text-stone-600 text-sm mb-4 flex-1">{dest.description}</p>
                  
                  <div className="space-y-3 mt-auto">
                    {dest.contactInfo && (
                      <div className="flex items-start text-sm text-stone-500 bg-stone-50 p-2 rounded-lg">
                        <Phone className="h-4 w-4 mr-2 mt-0.5 text-secondary flex-shrink-0" />
                        <span>{dest.contactInfo}</span>
                      </div>
                    )}
                    
                    {dest.locationNotes && (
                      <div className="flex items-start text-xs text-stone-500 bg-stone-50 p-2 rounded-lg italic">
                        <Info className="h-3 w-3 mr-2 mt-0.5 text-stone-400 flex-shrink-0" />
                        <span>{dest.locationNotes}</span>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {dest.tags.map(tag => (
                        <span key={tag} className="text-xs bg-stone-100 text-stone-500 px-2 py-1 rounded-full border border-stone-200">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <MapPin className="h-12 w-12 text-stone-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-stone-900">No destinations found</h3>
            <p className="text-stone-500">Try adjusting your filters to see more results.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;
