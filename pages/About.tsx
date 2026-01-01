
import React from 'react';
import { Award, Heart, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000" alt="Clinic interior" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">Who We Are</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Dedicated to redefining the dental experience through passion, precision, and patient comfort.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800" 
              alt="Medical team" 
              className="rounded-3xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-8 -right-8 bg-teal-600 p-8 rounded-3xl text-white hidden sm:block z-20 shadow-xl">
              <p className="text-4xl font-bold font-display mb-1">15+</p>
              <p className="text-sm font-medium text-teal-100 uppercase tracking-widest">Years of Excellence</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 leading-tight">
              A Patient-Focused Online Presence With A Human Touch.
            </h2>
            <p className="text-slate-600 leading-relaxed">
              At The Dental Care Lounge, we believe that a visit to the dentist should be something to look forward to. Founded on the principle of "Dental Wellness", we have combined clinical expertise with a luxurious lounge atmosphere to reduce patient anxiety and improve outcomes.
            </p>
            <div className="space-y-4 pt-4">
              {[
                "Certified and Award-winning Specialist Doctors",
                "Advanced Digital Dentistry & Imaging Center",
                "Strict Adherence to International Sterilization Protocols",
                "Holistic and Personalized Patient Care Plans"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-teal-600 flex-shrink-0" size={20} />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-display text-slate-900 mb-16">Meet Our Specialists</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: "Dr. Elena Vance", role: "Cosmetic Dentist", img: "https://picsum.photos/seed/doctor1/400/500" },
              { name: "Dr. Marcus Thorne", role: "Orthodontist", img: "https://picsum.photos/seed/doctor2/400/500" },
              { name: "Dr. Sarah Miller", role: "Implantologist", img: "https://picsum.photos/seed/doctor3/400/500" }
            ].map((d, i) => (
              <div key={i} className="group">
                <div className="overflow-hidden rounded-2xl shadow-md mb-6 relative">
                  <img src={d.img} alt={d.name} className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h4 className="text-xl font-bold text-slate-900">{d.name}</h4>
                <p className="text-teal-600 font-medium">{d.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
