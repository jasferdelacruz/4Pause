
import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Mail, Phone, CheckCircle, Loader2, Info, Receipt } from 'lucide-react';
import { Package, Booking } from '../types';
import { createBooking } from '../services/bookingService';

interface BookingModalProps {
  pkg: Package;
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ pkg, isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'processing' | 'success'>('form');
  const [confirmedBooking, setConfirmedBooking] = useState<Booking | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: 1,
    specialRequests: '',
    agreeToTerms: false
  });

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep('form');
      setConfirmedBooking(null);
      setFormData(prev => ({ ...prev, guests: 1, agreeToTerms: false }));
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const totalPrice = pkg.price * formData.guests;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');

    try {
      const booking = await createBooking({
        packageId: pkg.id,
        packageName: pkg.title,
        date: formData.date,
        guests: formData.guests,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        specialRequests: formData.specialRequests,
        totalPrice: totalPrice
      });

      setConfirmedBooking(booking);
      setStep('success');
    } catch (error) {
      console.error("Booking failed", error);
      setStep('form'); // Simplified error handling
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm transition-opacity duration-300">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-primary p-6 text-white flex justify-between items-start shrink-0">
          <div>
            <h3 className="font-serif text-2xl font-bold">
              {step === 'success' ? 'Booking Confirmed' : 'Reserve Your Spot'}
            </h3>
            <p className="text-emerald-100 text-sm mt-1 flex items-center">
              {step === 'success' ? <Receipt size={14} className="mr-1"/> : null}
              {pkg.title}
            </p>
          </div>
          <button onClick={onClose} className="text-emerald-100 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar">
          {step === 'form' && (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Personal Details */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider">Guest Information</h4>
                <div>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-stone-400" />
                    <input 
                      required
                      type="text" 
                      className="w-full pl-10 pr-4 py-3 border border-stone-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-stone-50 focus:bg-white transition-all text-sm"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-stone-400" />
                    <input 
                      required
                      type="email" 
                      className="w-full pl-10 pr-4 py-3 border border-stone-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-stone-50 focus:bg-white transition-all text-sm"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-stone-400" />
                    <input 
                      required
                      type="tel" 
                      className="w-full pl-10 pr-4 py-3 border border-stone-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-stone-50 focus:bg-white transition-all text-sm"
                      placeholder="Mobile Number"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              {/* Trip Details */}
              <div className="space-y-4 pt-2">
                <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider">Trip Details</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-stone-600 mb-1">Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-stone-400" />
                      <input 
                        required
                        type="date" 
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full pl-10 pr-2 py-2.5 border border-stone-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm text-stone-700"
                        value={formData.date}
                        onChange={e => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-600 mb-1">Guests</label>
                    <input 
                      required
                      type="number" 
                      min="1"
                      max="12"
                      className="w-full px-4 py-2.5 border border-stone-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-stone-700"
                      value={formData.guests}
                      onChange={e => setFormData({...formData, guests: parseInt(e.target.value) || 1})}
                    />
                  </div>
                </div>

                <div>
                   <label className="block text-xs font-medium text-stone-600 mb-1">Special Requests (Dietary, accessibility, etc.)</label>
                   <textarea 
                      className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-stone-50 focus:bg-white transition-all text-sm resize-none"
                      rows={2}
                      placeholder="Optional"
                      value={formData.specialRequests}
                      onChange={e => setFormData({...formData, specialRequests: e.target.value})}
                   />
                </div>
              </div>

              {/* Summary & Terms */}
              <div className="bg-stone-50 p-4 rounded-xl border border-stone-100 mt-2">
                <div className="flex justify-between text-sm mb-2 text-stone-600">
                  <span>Price per person</span>
                  <span>₱{pkg.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center border-t border-stone-200 pt-3 mt-1">
                  <span className="font-bold text-stone-800">Total Estimate</span>
                  <span className="text-xl font-bold text-primary">₱{totalPrice.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input 
                  required
                  id="terms"
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  onChange={e => setFormData({...formData, agreeToTerms: e.target.checked})}
                  className="mt-1 h-4 w-4 text-primary border-stone-300 rounded focus:ring-primary cursor-pointer"
                />
                <label htmlFor="terms" className="text-xs text-stone-500 cursor-pointer select-none">
                  I acknowledge that this is a booking request. Confirmation is subject to availability and payment instructions will be sent via email.
                </label>
              </div>

              <button 
                type="submit" 
                disabled={!formData.agreeToTerms}
                className="w-full bg-secondary text-white py-4 rounded-xl font-bold hover:bg-amber-700 disabled:bg-stone-300 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl transform active:scale-95"
              >
                Send Request
              </button>
            </form>
          )}

          {step === 'processing' && (
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <Loader2 className="h-12 w-12 text-primary animate-spin" />
              <p className="text-stone-600 font-medium animate-pulse">Confirming availability...</p>
            </div>
          )}

          {step === 'success' && confirmedBooking && (
            <div className="text-center py-4">
              <div className="w-20 h-20 bg-emerald-100 text-primary rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-emerald-50">
                <CheckCircle className="h-10 w-10" />
              </div>
              
              <h3 className="font-serif text-2xl font-bold text-stone-800 mb-2">Request Received!</h3>
              <p className="text-stone-600 mb-8 max-w-xs mx-auto text-sm">
                We've sent a confirmation email to <span className="font-semibold text-stone-800">{confirmedBooking.email}</span>.
              </p>

              {/* Ticket View */}
              <div className="bg-stone-50 rounded-xl border border-stone-200 p-0 overflow-hidden mb-6 text-left relative">
                 {/* Decorative jagged line or border could go here */}
                 <div className="bg-stone-200 h-1 w-full dashed-line"></div>
                 <div className="p-5 space-y-3">
                    <div className="flex justify-between items-center border-b border-stone-200 pb-3">
                       <span className="text-xs font-bold text-stone-400 uppercase">Booking ID</span>
                       <span className="font-mono font-bold text-secondary text-lg">{confirmedBooking.id}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div>
                          <span className="text-xs text-stone-500 block">Date</span>
                          <span className="font-medium text-stone-800 text-sm">{new Date(confirmedBooking.date).toLocaleDateString()}</span>
                       </div>
                       <div>
                          <span className="text-xs text-stone-500 block">Guests</span>
                          <span className="font-medium text-stone-800 text-sm">{confirmedBooking.guests} People</span>
                       </div>
                    </div>
                    <div>
                        <span className="text-xs text-stone-500 block">Total Amount</span>
                        <span className="font-bold text-primary">₱{confirmedBooking.totalPrice.toLocaleString()}</span>
                    </div>
                 </div>
                 <div className="bg-emerald-50 p-3 text-xs text-emerald-800 text-center border-t border-emerald-100">
                    Status: <span className="font-bold uppercase">Pending Partner Approval</span>
                 </div>
              </div>

              <div className="space-y-3">
                <button onClick={onClose} className="w-full bg-primary text-white font-bold py-3 px-6 rounded-xl hover:bg-emerald-800 transition-colors">
                  Done
                </button>
                <p className="text-xs text-stone-400 flex items-center justify-center gap-1">
                   <Info size={12} />
                   Need to make changes? Contact support with your ID.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
