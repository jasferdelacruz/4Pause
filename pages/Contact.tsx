
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call to submit form data
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Allow user to send another message after a delay if they want, 
    // but keep the success message visible for a moment.
  };

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
            </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-stone-200 text-lg max-w-2xl mx-auto">
            Have questions about our wellness packages or want to partner with us? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-20 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Contact Info Sidebar */}
          <div className="bg-secondary text-white p-10 md:w-1/3 flex flex-col justify-between relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-10 -left-10 w-24 h-24 bg-white/10 rounded-full"></div>
            
            <div className="relative z-10">
              <h2 className="font-serif text-2xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Our Office</h3>
                    <p className="text-amber-100 text-sm mt-1 leading-relaxed">
                      2nd Floor, Provincial Capitol Complex,<br/>
                      Bayombong, Nueva Vizcaya,<br/>
                      Philippines 3700
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-amber-100 text-sm mt-1 leading-relaxed">
                      +63 (78) 321-2121<br/>
                      +63 917 123 4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-amber-100 text-sm mt-1 leading-relaxed">
                      hello@4pause.ph<br/>
                      partners@4pause.ph
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Office Hours</h3>
                    <p className="text-amber-100 text-sm mt-1 leading-relaxed">
                      Mon - Fri: 8:00 AM - 5:00 PM<br/>
                      Sat: 9:00 AM - 12:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 md:mt-0 relative z-10">
               <div className="w-16 h-1 bg-white/30 rounded-full mb-4"></div>
               <p className="text-sm text-amber-100 italic">
                 "Nature does not hurry, yet everything is accomplished."
               </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-8 md:p-12 md:w-2/3 bg-white">
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">Send us a Message</h2>
            
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-in fade-in duration-500">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 ring-4 ring-emerald-50">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-3">Message Sent Successfully!</h3>
                <p className="text-stone-600 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to 4Pause. Our team has received your message and will get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 px-6 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 font-medium rounded-full transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-stone-700">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-stone-50 focus:bg-white transition-all placeholder:text-stone-400"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-stone-700">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-stone-50 focus:bg-white transition-all placeholder:text-stone-400"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-stone-700">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-stone-50 focus:bg-white transition-all placeholder:text-stone-400"
                    placeholder="Inquiry about..."
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-stone-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-stone-50 focus:bg-white transition-all resize-none placeholder:text-stone-400"
                    placeholder="How can we help you plan your journey?"
                  ></textarea>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <p className="text-xs text-stone-400">
                    * All fields are required. We respect your privacy.
                  </p>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-800 transition-colors shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2 transform active:scale-95 duration-200"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
