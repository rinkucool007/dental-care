
import React from 'react';
import { SERVICES, getIcon } from '../constants';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="py-20 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 mb-6">Our Dental Solutions</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Comprehensive oral health services tailored to your individual needs, from routine check-ups to advanced aesthetic enhancements.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {SERVICES.map((s, i) => (
              <div key={s.id} className={`flex flex-col md:flex-row gap-12 items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full">
                  <img 
                    src={`https://images.unsplash.com/photo-${1600000000000 + (i * 100000)}?auto=format&fit=crop&q=80&w=800`} 
                    alt={s.title} 
                    className="rounded-3xl shadow-xl h-96 w-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${s.id}/800/600`;
                    }}
                  />
                </div>
                <div className="flex-1 space-y-6">
                  <div className="bg-teal-50 w-16 h-16 rounded-2xl flex items-center justify-center text-teal-600 mb-4">
                    {getIcon(s.icon, 32)}
                  </div>
                  <h3 className="text-3xl font-bold font-display text-slate-900">{s.title}</h3>
                  <p className="text-slate-500 font-semibold uppercase tracking-widest text-xs">{s.category}</p>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {s.description} Our approach to {s.title.toLowerCase()} combines technical mastery with the latest clinical advancements, ensuring optimal results and patient comfort.
                  </p>
                  <div className="pt-4">
                    <Link 
                      to="/consultation" 
                      className="inline-flex items-center space-x-2 text-teal-600 font-bold hover:translate-x-2 transition-transform"
                    >
                      <span>Inquire about this service</span>
                      {getIcon('ArrowRight', 18)}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ/Trust Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <h2 className="text-3xl font-bold font-display">Technology we use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['CBCT 3D Scanning', 'Intraoral Cameras', 'Soft Tissue Lasers', 'Guided Implant Tech'].map((tech, i) => (
              <div key={i} className="p-4 border border-slate-800 rounded-xl hover:bg-slate-800 transition-colors">
                <div className="mb-3 text-teal-400 flex justify-center">{getIcon('Monitor', 24)}</div>
                <p className="text-xs font-bold uppercase tracking-widest">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
