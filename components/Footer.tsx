import React from 'react';
import { Leaf, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-stone-100 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-6 w-6 text-secondary" />
              <span className="font-serif text-2xl font-bold">4Pause</span>
            </div>
            <p className="text-stone-300 text-sm leading-relaxed">
              Mindful journeys blending nature, culture, and wellness — powered by community partnerships in Nueva Vizcaya.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Explore</h3>
            <ul className="space-y-2 text-stone-300 text-sm">
              <li><a href="#" className="hover:text-secondary">Destinations</a></li>
              <li><a href="#" className="hover:text-secondary">Wellness Packages</a></li>
              <li><a href="#" className="hover:text-secondary">Events Calendar</a></li>
              <li><a href="#" className="hover:text-secondary">Blog & Resources</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Community</h3>
            <ul className="space-y-2 text-stone-300 text-sm">
              <li><a href="#" className="hover:text-secondary">Partner Portal</a></li>
              <li><a href="#" className="hover:text-secondary">Local Guides</a></li>
              <li><a href="#" className="hover:text-secondary">Sustainability</a></li>
              <li><a href="#" className="hover:text-secondary">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-stone-300 hover:text-secondary"><Facebook size={20} /></a>
              <a href="#" className="text-stone-300 hover:text-secondary"><Instagram size={20} /></a>
              <a href="#" className="text-stone-300 hover:text-secondary"><Twitter size={20} /></a>
            </div>
            <p className="text-xs text-stone-400">
              Subscribe to our mindful newsletter.
            </p>
            <div className="mt-2 flex">
              <input type="email" placeholder="Email address" className="bg-stone-800 border-none text-white text-xs p-2 rounded-l-md w-full focus:ring-1 focus:ring-secondary" />
              <button className="bg-secondary text-white px-3 py-2 rounded-r-md text-xs font-bold hover:bg-amber-700">Join</button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-stone-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-400">
          <p>&copy; {new Date().getFullYear()} 4Pause. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
