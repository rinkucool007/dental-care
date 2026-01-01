
import React, { useState } from 'react';
import { SERVICES, getIcon } from '../constants';

const AppointmentForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="bg-teal-50 p-8 rounded-2xl border border-teal-100 text-center animate-fade-in">
        <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
          {getIcon('ShieldCheck', 32, 'text-white')}
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-2 font-display">Request Received!</h3>
        <p className="text-slate-600 mb-6">
          Thank you for reaching out. One of our patient coordinators will contact you shortly to confirm your visit.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-teal-600 font-semibold hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
      <h3 className="text-2xl font-bold text-slate-800 mb-6 font-display">Book Your Consultation</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Full Name</label>
            <input 
              required
              type="text" 
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Phone Number</label>
            <input 
              required
              type="tel" 
              placeholder="(555) 000-0000"
              className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Reason for Visit</label>
          <select 
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
          >
            <option value="">Select a service</option>
            {SERVICES.map(s => (
              <option key={s.id} value={s.id}>{s.title}</option>
            ))}
            <option value="other">Other / General Inquiry</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Preferred Date/Time</label>
          <input 
            type="datetime-local" 
            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Additional Notes</label>
          <textarea 
            placeholder="Tell us about your concerns..."
            rows={3}
            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
          ></textarea>
        </div>
        
        <button 
          disabled={isSubmitting}
          type="submit" 
          className="w-full bg-teal-600 text-white font-bold py-4 rounded-xl hover:bg-teal-700 transition-all shadow-lg hover:shadow-teal-600/20 active:scale-[0.98] disabled:opacity-70 flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            <span>Request Appointment</span>
          )}
        </button>
        
        <p className="text-[10px] text-center text-slate-400 mt-4 leading-relaxed">
          In case of a dental emergency, please call <span className="text-slate-700 font-bold">+1 (555) 000-HELP</span> immediately for 24/7 assistance.
        </p>
      </form>
    </div>
  );
};

export default AppointmentForm;
