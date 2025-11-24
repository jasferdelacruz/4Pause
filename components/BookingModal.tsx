import React, { useState } from 'react';
import { X, Calendar, User, Mail, CheckCircle } from 'lucide-react';
import { Package } from '../types';

interface BookingModalProps {
  pkg: Package;
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ pkg, isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    guests: 1
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setStep(2);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        <div className="bg-primary p-6 text-white flex justify-between items-start">
          <div>
            <h3 className="font-serif text-xl font-bold">Book Your Journey</h3>
            <p className="text-emerald-100 text-sm">{pkg.title}</p>
          </div>
          <button onClick={onClose} className="text-emerald-100 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {step === 1 ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-stone-400" />
                  <input 
                    required
                    type="text" 
                    className="w-full pl-10 pr-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-stone-400" />
                  <input 
                    required
                    type="email" 
                    className="w-full pl-10 pr-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-stone-400" />
                    <input 
                      required
                      type="date" 
                      className="w-full pl-10 pr-2 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm"
                      value={formData.date}
                      onChange={e => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Guests</label>
                  <input 
                    required
                    type="number" 
                    min="1"
                    max="10"
                    className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    value={formData.guests}
                    onChange={e => setFormData({...formData, guests: parseInt(e.target.value)})}
                  />
                </div>
              </div>

              <div className="bg-stone-50 p-4 rounded-lg border border-stone-100 mt-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-stone-600">Price per person</span>
                  <span className="font-medium">₱{pkg.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-primary border-t border-stone-200 pt-2">
                  <span>Total</span>
                  <span>₱{(pkg.price * formData.guests).toLocaleString()}</span>
                </div>
              </div>

              <button type="submit" className="w-full bg-secondary text-white py-3 rounded-xl font-bold hover:bg-amber-700 transition-colors mt-4">
                Confirm Booking Request
              </button>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-100 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-800 mb-2">Request Sent!</h3>
              <p className="text-stone-600 mb-6">
                Thank you for choosing 4Pause. We have received your booking request for <strong>{pkg.title}</strong>. A confirmation email has been sent to {formData.email}.
              </p>
              <button onClick={onClose} className="bg-stone-100 text-stone-800 font-bold py-2 px-6 rounded-lg hover:bg-stone-200">
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;