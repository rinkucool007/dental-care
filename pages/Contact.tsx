
import React from 'react';
import { CONTACT_INFO, getIcon } from '../constants';
import AppointmentForm from '../components/AppointmentForm';

const Contact: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-4">Get in Touch</h1>
          <p className="text-slate-600 text-lg">We're located in the heart of downtown, ready to welcome you to a better dental experience.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold font-display mb-8">Contact Information</h2>
              <div className="space-y-6">
                {[
                  { icon: 'MapPin', label: 'Our Address', value: CONTACT_INFO.address },
                  { icon: 'Phone', label: 'Call Us', value: CONTACT_INFO.phone },
                  { icon: 'Mail', label: 'Email Us', value: CONTACT_INFO.email },
                  { icon: 'Activity', label: 'Emergency Contact', value: CONTACT_INFO.emergency, highlight: true },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className={`p-3 rounded-lg ${item.highlight ? 'bg-red-50 text-red-600' : 'bg-teal-50 text-teal-600'}`}>
                      {getIcon(item.icon, 20)}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                      <p className={`text-lg ${item.highlight ? 'font-bold text-red-700' : 'font-medium text-slate-700'}`}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-display mb-8">Our Location</h2>
              <div className="h-80 bg-slate-100 rounded-3xl overflow-hidden relative shadow-inner border border-slate-200">
                <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale opacity-50" alt="Map Placeholder" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-2xl shadow-2xl flex flex-col items-center">
                    <div className="bg-teal-600 p-2 rounded-full text-white mb-2">
                      {getIcon('MapPin', 24)}
                    </div>
                    <p className="text-sm font-bold text-slate-900">The Dental Care Lounge</p>
                    <p className="text-xs text-slate-500">Find directions on Google Maps</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <AppointmentForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
