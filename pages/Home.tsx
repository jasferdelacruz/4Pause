import React, { useEffect, useState } from 'react';
import { ArrowRight, Wind, Map, Heart, CalendarCheck, Car, Home as HomeIcon, UserCheck, Mountain, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getWellnessTip } from '../services/geminiService';
import { PACKAGES } from '../constants';

const Home: React.FC = () => {
  const [dailyTip, setDailyTip] = useState<string>('');

  useEffect(() => {
    const fetchTip = async () => {
      const tip = await getWellnessTip();
      setDailyTip(tip);
    };
    fetchTip();
  }, []);

  const services = [
    {
      icon: CalendarCheck,
      title: "Trip Planning & Booking",
      desc: "Customized itineraries and seamless online reservation."
    },
    {
      icon: Car,
      title: "Transportation Solutions",
      desc: "Vans, private cars, and comfortable shuttle services."
    },
    {
      icon: HomeIcon,
      title: "Accommodations",
      desc: "Eco-lodges, homestays, hotels, and farm resorts."
    },
    {
      icon: UserCheck,
      title: "Local Tour Guides",
      desc: "DOT-accredited Nueva Vizcaya tour guides."
    },
    {
      icon: Mountain,
      title: "Experience Packages",
      desc: "Nature tours, cultural immersion, and wellness retreats."
    },
    {
      icon: ShieldCheck,
      title: "Safe Trip Home",
      desc: "Return-trip arrangement and end-to-end logistics."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/29/1920/1080" 
            alt="Nueva Vizcaya Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-semibold tracking-wider mb-6 border border-white/30">
            NUEVA VIZCAYA, PHILIPPINES
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Pause. Breathe. <br/> Explore.
          </h1>
          <p className="text-xl md:text-2xl text-stone-100 mb-8 font-light max-w-2xl mx-auto">
            Mindful journeys blending nature, culture, and wellness — powered by community partnerships.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/packages" 
              className="px-8 py-3 bg-secondary text-white rounded-full font-medium hover:bg-amber-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              Explore Packages <ArrowRight size={18} />
            </Link>
            <Link 
              to="/partners" 
              className="px-8 py-3 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full font-medium hover:bg-white/20 transition-colors flex items-center justify-center"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Daily Mindful Tip */}
      <section className="bg-primary py-4 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-center text-center text-stone-200">
          <Wind className="mr-3 h-5 w-5 animate-pulse" />
          <p className="text-sm md:text-base italic">
            "{dailyTip || 'Loading mindful moment...'}"
          </p>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold mb-4">Why Travel With 4Pause?</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-stone-100 text-center">
              <div className="w-14 h-14 bg-emerald-100 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-800 mb-3">Holistic Wellness</h3>
              <p className="text-stone-600 leading-relaxed">
                Our itineraries are curated to reduce stress and promote mental clarity through nature therapy and mindful practices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-stone-100 text-center">
              <div className="w-14 h-14 bg-amber-100 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Map className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-800 mb-3">Authentic Culture</h3>
              <p className="text-stone-600 leading-relaxed">
                Connect deeply with local communities. Every booking directly supports local guides, artisans, and homestays.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-stone-100 text-center">
              <div className="w-14 h-14 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wind className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-800 mb-3">Sustainable Impact</h3>
              <p className="text-stone-600 leading-relaxed">
                Leave a positive footprint. We prioritize eco-friendly practices and conservation efforts in Nueva Vizcaya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* End-to-End Services Section */}
      <section className="py-20 bg-stone-100 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold mb-4">Complete Travel Services</h2>
              <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
              <p className="text-stone-600 max-w-2xl mx-auto">
                We handle every detail of your journey so you can focus on the moment.
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                 <div key={index} className="flex items-start p-6 bg-white rounded-xl shadow-sm border border-stone-200 hover:border-secondary/50 hover:shadow-md transition-all duration-300">
                    <div className="p-3 bg-emerald-50 rounded-lg mr-4 text-primary shrink-0">
                       <service.icon size={24} />
                    </div>
                    <div>
                       <h3 className="font-bold text-lg text-stone-800 mb-1">{service.title}</h3>
                       <p className="text-sm text-stone-600 leading-relaxed">{service.desc}</p>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* Featured Packages Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold mb-2">Curated Journeys</h2>
              <p className="text-stone-500">Handpicked experiences for your soul.</p>
            </div>
            <Link to="/packages" className="hidden md:flex items-center text-secondary font-medium hover:text-amber-700">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES.slice(0, 3).map((pkg) => (
              <Link to={`/packages/${pkg.id}`} key={pkg.id} className="group block">
                <div className="relative rounded-2xl overflow-hidden shadow-md aspect-[4/3]">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase">
                    {pkg.category}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-serif text-xl font-bold text-stone-800 group-hover:text-secondary transition-colors">{pkg.title}</h3>
                    <span className="text-primary font-bold">₱{pkg.price.toLocaleString()}</span>
                  </div>
                  <p className="text-stone-500 text-sm mt-1 mb-3 line-clamp-2">{pkg.description}</p>
                  <div className="flex items-center text-xs text-stone-400">
                    <span className="bg-stone-100 px-2 py-1 rounded">{pkg.duration}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/packages" className="inline-flex items-center text-secondary font-medium">
              View All Packages <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;